/*
  Warnings:

  - Added the required column `systemUserId` to the `Lesson` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Lesson" ADD COLUMN     "systemUserId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "Lesson_systemUserId_fkey" FOREIGN KEY ("systemUserId") REFERENCES "SystemUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
