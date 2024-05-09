/*
  Warnings:

  - You are about to drop the column `courseId` on the `Photo` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[photoId]` on the table `Course` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Photo" DROP CONSTRAINT "Photo_courseId_fkey";

-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "photoId" INTEGER;

-- AlterTable
ALTER TABLE "Photo" DROP COLUMN "courseId";

-- CreateIndex
CREATE UNIQUE INDEX "Course_photoId_key" ON "Course"("photoId");

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_photoId_fkey" FOREIGN KEY ("photoId") REFERENCES "Photo"("id") ON DELETE SET NULL ON UPDATE CASCADE;
