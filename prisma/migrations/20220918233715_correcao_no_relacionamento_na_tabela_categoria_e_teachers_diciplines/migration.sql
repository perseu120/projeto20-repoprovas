/*
  Warnings:

  - You are about to drop the column `testsId` on the `teachersDisciplines` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `tests` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teacherDisciplineId` to the `tests` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "categories" DROP CONSTRAINT "categories_testsId_fkey";

-- DropForeignKey
ALTER TABLE "teachersDisciplines" DROP CONSTRAINT "teachersDisciplines_testsId_fkey";

-- AlterTable
ALTER TABLE "teachersDisciplines" DROP COLUMN "testsId";

-- AlterTable
ALTER TABLE "tests" ADD COLUMN     "categoryId" INTEGER NOT NULL,
ADD COLUMN     "teacherDisciplineId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "tests" ADD CONSTRAINT "tests_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tests" ADD CONSTRAINT "tests_teacherDisciplineId_fkey" FOREIGN KEY ("teacherDisciplineId") REFERENCES "teachersDisciplines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
