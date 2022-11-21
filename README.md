<h1 align="center"> POKEMON BATTLE </h1>

## _Necessary dependencies_

    yarn

## _Settings_

  After running the previous command,

  You must create the .env file in the project root folder,
  copy the examples from the .env.example file and put it in the .env file

  Fill in the fields with data from your database,

  Set the URL to your database in the DATABASE_URL variable in the .env file, see [Documentation](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres) from the prism so you can see the correct URL for your database.

  After configuring the URL, run the command

    yarn prisma migrate dev

  And finally fill the PORT variable in the .env file

## _Start the server_

    yarn dev

## _Collection Insomnia_

  I left the insomnia collection to make the requests in the root folder of the project, just download and import, the site I use to get the pokemons information is [Pokedex](https://www.pokemon.com/br/pokedex/bulbasaur)

    After doing the steps above, just register the pokemons in the bank and make the requests.

## _PROJECT YARN COMMANDS_

  **I created some commands in package.json:**

    yarn dev - Start the local server
    yarn build - Build the project
    yarn start - Start server in JS after build
    yarn on:server - Start the MySql server