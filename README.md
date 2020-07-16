####  Bootcamp - GoStack 11
# 🚀 Nível 01 - Front-end com ReactJS

## Sobre

- Este projeto em ReactJS irá consumir os dados da API listada abaixo
  - [Nível 01 - Back-end com Node.js](https://github.com/fabiosvf/bootcamp-gostack-11-nivel-01-back-end-com-node-js)

---

## Roteiro

- Nesta seção será descrito o roteiro com todos os passos para criação do projeto em ReactJS sem a utilização do comando "create-react-app"

### Criando o projeto
- Criar uma pasta
- Acessar a pasta em modo terminal
- Criar o arquivo "package.json" com a configuração padrão
```
$ yarn init -y
```
- Abrir a pasta do projeto no Visual Studio Code
```
$ code .
```
- Instalar as bibliotecas "react" e "react-dom"
```
$ yarn add react react-dom
```
- Criar o arquivo "~/public/index.html"
  - Digitar o Emmet Abbreviation "html:5"
  - Completar o restante da informação
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React JS</title>
</head>
<body>
  <div id="app"></div>
</body>
</html>
```
- Instalar as bibliotecas Babel, Webpack e Loaders
  - Babel: Converter (transpilar) código do React para um código que o browser entenda
  - Webpack: Pra cada tipo de arquivo (.js, .css, .png) eu vou converter o código de uma maneira diferente
  - Loaders: babel-loader, css-loader, image-loader, file-loader
```
$ yarn add @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli
```
- Criar o arquivo "~/babel.config.js"
  - Acessar o site [Babel](https://babeljs.io/docs/en/configuration) para obter as configurações
```
module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
};
```
- Instalar a biblioteca "@babel/cli"
  - Esta biblioteca serve para utilizar o babel como linha de comando para transpilar um javascript moderno em javascript compatível com todos os browsers (navegadores)
```
$ yarn add @babel/cli
```
- Exemplo de utilização da biblioteca "@babel/cli"
```
$ yarn babel src/index.js --out-file public/bundle.js
```
---

## Tecnologias utilizadas

#### Dependências de Projeto

#### Dependências de Desenvolvimento

---

## Como executar
- Crie uma pasta para o projeto
- Acesse a pasta
- Faça o clone do projeto
```
$ git clone https://github.com/fabiosvf/bootcamp-gostack-11-nivel-01-front-end-com-reactjs.git .
```
- Atualize as bibliotecas
```
$ yarn
```
- Inicie o serviço
```
$ yarn dev
```