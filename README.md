<h1 align="center"> POKEMON BATTLE </h1>

## *Necessary dependencies*

    yarn
    
**MySQL**

  Database name - **Base_de_Dados**

  Table name - **pokemons**

 - [x] id
 - [x] name_pokemon
 - [x] type_pokemon
 - [x] weakness_pokemon
 - [x] resistance_pokemon
 - [x] hp_pokemon
 - [x] img

## *Start the server*
    yarn dev

## *PROJECT YARN COMMANDS*
    yarn dev - Inicia o servidor
    yarn build - Faz o Build do projeto
    yarn start - Inicia o servidor em JS
    yarn on:server - Inicia o servidor MySql

  **REQUESTS CAN ALSO BE MADE IN INSOMNIA OR POSTMAN, BUT I MADE THE REQUESTS IN VSCODE. FOLLOW THE COMMANDS BELOW:**

    yarn start:create - Create the pokemon in the database. 
    yarn start:destroy - Delete a pokemon from the database.
    yarn start:findall - Search all Pokemons in the database.
    yarn start:findone - Search a pokemon in the database.
    yarn start:update - Change the pokemon in the database.

<h1 align="center">NOTE: It is necessary to fill the .env with the data to execute the commands.</h1>
    

  **ONLY THE UPDATE NEEDS TO BE FILLED DIRECTLY INTO THE TS FILE IN THE REQUEST_APIS/UPDATE.TS FOLDER**