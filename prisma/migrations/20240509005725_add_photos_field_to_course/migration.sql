-- DropForeignKey
ALTER TABLE "Photo" DROP CONSTRAINT "Photo_institutionId_fkey";

-- AlterTable
ALTER TABLE "Photo" ADD COLUMN     "courseId" INTEGER,
ALTER COLUMN "institutionId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Photo" ADD CONSTRAINT "Photo_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "Institution"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Photo" ADD CONSTRAINT "Photo_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE SET NULL ON UPDATE CASCADE;
