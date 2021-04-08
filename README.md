# ServerNode

Desenvolvido por Hernani Amancio de Almeida


## Executar projeto

Para executar o projeto, sera necessario instalar os seguintes programas em seu computador:

- Nodejs 
- Docker
- Docker Compose
- Postbird
- yarn

## Desenvolvimento

Para iniciar o desenvolvimento e necessario clonar o projeto do Github num diretorio de sua preferencia com os seguintes comandos:


- `cd "diretorio de sua preferencia"`
- `git clone https://github.com/2020nani/serverNode.git`
- `cd serverNode`


Apos clonar o projeto em seu computador e necessario instalar as dependencias que o projeto utiliza com o seguinte comando:


- `npm install` ou `yarn` 

Crie um container docker para rodar uma imagem mongodb para o banco de dados com o comando

- `docker-compose up`


- Acesse seu container com atraves da url localhost:8081 e entre com as seguintes variaveis de autenticacao. 
- nome de usuario = teste
- senha = teste

Rode o programa em seu computador na porta 3333 com os seguintes comando

- `npm run dev` ou 
- `yarn dev` 

## Rodar testes TDD

Testes foram realizados utilizando Postbird 


