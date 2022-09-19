-- CreateTable
CREATE TABLE `pokemons` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name_pokemon` VARCHAR(191) NOT NULL,
    `type_pokemon` VARCHAR(191) NOT NULL,
    `weakness_pokemon` VARCHAR(191) NOT NULL,
    `resistance_pokemon` VARCHAR(191) NOT NULL,
    `hp_pokemon` INTEGER NOT NULL,
    `img` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
