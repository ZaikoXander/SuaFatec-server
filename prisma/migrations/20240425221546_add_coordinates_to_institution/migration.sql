-- AlterTable
ALTER TABLE "Institution" ADD COLUMN     "latitudeCoordinate" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "longitudeCoordinate" DOUBLE PRECISION NOT NULL DEFAULT 0;
