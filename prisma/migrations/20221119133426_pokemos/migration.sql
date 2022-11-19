-- CreateTable
CREATE TABLE "pokemons" (
    "id" SERIAL NOT NULL,
    "name_pokemon" TEXT NOT NULL,
    "type_pokemon" TEXT NOT NULL,
    "weakness_pokemon" TEXT NOT NULL,
    "resistance_pokemon" TEXT NOT NULL,
    "hp_pokemon" INTEGER NOT NULL,
    "img" TEXT NOT NULL,

    CONSTRAINT "pokemons_pkey" PRIMARY KEY ("id")
);
