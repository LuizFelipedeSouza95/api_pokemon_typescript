<h1 align="center"> POKEMON BATTLE </h1>

## *Necessary dependencies*

    yarn
    
**MySQL**

  Database name - **Base_de_Dados**

  Table name - **pokemons**

 - [x] id
 - [x] nome_pokemon
 - [x] tipo_pokemon
 - [x] fraqueza_pokemon
 - [x] resistencia_pokemon
 - [x] hp_pokemon
 - [x] img

## *Start the server*
    yarn dev

## *PROJECT YARN COMMANDS*
    COMANDOS YARN DO PROJETO:

    yarn dev - Inicia o servidor
    yarn build - Faz o Build do projeto
    yarn start - Inicia o servidor em JS
    yarn on:server - Inicia o servidor MySql

  **AS REQUISIÇÕES TAMBEM PODEM SER FEITAS NO INSOMNIA OU POSTMAN, PORÉM FIZ AS REQUISIÇOES NO VSCODE. SEGUEM ABAIXO OS COMANDOS:**

    yarn start:create - Cria o pokemon no banco de dados. 
    yarn start:destroy - Deleta um pokemon do banco de dados.
    yarn start:findall - Busca todos os Pokemons no banco de dados.
    yarn start:findone - Busca um pokemon no banco de dados.
    yarn start:update - Altera o pokemon no banco de dados.

<h1 align="center">OBS: É necessário preencher o .env com os dados para executar os comandos.</h1>
    

  **APENAS O UPDATE PRECISA SER PREENCHIDO DIRETO NO ARQUIVO TS NA PASTA REQUEST_APIS/UPDATE.TS**