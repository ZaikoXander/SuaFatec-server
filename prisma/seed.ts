import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const city = await prisma.city.create({
    data: {
      name: 'Santos',
    },
  })

  const institution = await prisma.institution.create({
    data: {
      name: 'Fatec Baixada Santista - Rubens Lara',
      address: 'Av. Senador Feijó, 350 - Vila Matias, Santos - SP, 11015-502',
      cityId: city.id,
      latitudeCoordinate: -23.9426566,
      longitudeCoordinate: -46.3263839,
    },
  })

  const photo = await prisma.photo.create({
    data: {
      url: 'https://fatecrl.edu.br/public/images/institucional/historico/historico-01.jpg',
      institutionId: institution.id,
    },
  })

  const course = await prisma.course.create({
    data: {
      name: 'Análise e Desenvolvimento de Sistemas',
      duration: 6,
    },
  })

  const courseOffering = await prisma.courseOffering.create({
    data: {
      courseId: course.id,
      institutionId: institution.id,
      shifts: ['morning', 'afternoon', 'night'],
    },
  })

  const comment = await prisma.comment.create({
    data: {
      courseOfferingId: courseOffering.id,
      studentName: 'João da Silva',
      content: 'Excelente curso, professores muito qualificados.',
      quantityLikes: 140,
      conclusionDate: new Date(2021, 5, 14),
      approved: true,
    },
  })

  const admin = await prisma.admin.create({
    data: {
      name: 'Alex',
      password: '123456',
    },
  })

  console.log({
    city,
    institution,
    photo,
    course,
    courseOffering,
    comment,
    admin,
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
