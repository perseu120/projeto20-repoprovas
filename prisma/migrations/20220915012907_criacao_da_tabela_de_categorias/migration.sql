/*
  Warnings:

  - Added the required column `disciplinesId` to the `teachersDisciplines` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teachersId` to the `teachersDisciplines` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "teachersDisciplines" ADD COLUMN     "disciplinesId" INTEGER NOT NULL,
ADD COLUMN     "teachersId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Categories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Categories_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Categories_name_key" ON "Categories"("name");

-- AddForeignKey
ALTER TABLE "teachersDisciplines" ADD CONSTRAINT "teachersDisciplines_teachersId_fkey" FOREIGN KEY ("teachersId") REFERENCES "teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teachersDisciplines" ADD CONSTRAINT "teachersDisciplines_disciplinesId_fkey" FOREIGN KEY ("disciplinesId") REFERENCES "disciplines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
