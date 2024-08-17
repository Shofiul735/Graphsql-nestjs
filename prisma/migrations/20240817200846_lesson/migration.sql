-- CreateTable
CREATE TABLE "Lesson" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "class" TEXT,

    CONSTRAINT "Lesson_pkey" PRIMARY KEY ("id")
);
