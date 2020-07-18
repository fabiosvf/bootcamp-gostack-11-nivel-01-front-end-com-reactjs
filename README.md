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
### Instalando bibliotecas e editando configurações
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
- Instalar as bibliotecas 'babel-loader', 'style-loader', 'css-loader' e 'file-loader'
  - babel-loader: Serve para converter todo o javascript da aplicação para utilizar recursos como importação e exportação de módulos, dentre outras funcionalidades
  - css-loader: Serve para ler o arquivo CSS e interpretar as importações que tem dentro do arquivo
  - style-loader: Serve para injetar dentro do HTML o CSS interpretado
  - file-loader: Serve para carregar arquivos dentro da aplicação
```
$ yarn add babel-loader style-loader css-loader file-loader
```
- Instalar a biblioteca "webpack-dev-server" como dependência de desenvolvimento
  - Esta biblioteca serve para monitorar alterações em nosso código javascript de forma a atualizar automaticamente o resultado em nosso browser. Este recurso é conhecido como "Live Reloading"
  - Serão necessários a criação de algumas configurações no arquivo "webpack.config.js" para que estes recursos passem a funcionar
```
$ yarn add webpack-dev-server -D
```
- Criar o arquivo "~/webpack.config.js"
```
const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: { loader: "file-loader" },
      },
    ],
  },
};
```
- Exemplo de utilização da biblioteca "webpack-dev-server"
```
$ yarn webpack-dev-server --mode development
```

---

## Tecnologias utilizadas

#### Dependências de Projeto
- [@babel/cli](https://yarnpkg.com/package/@babel/cli)
- [@babel/core](https://yarnpkg.com/package/@babel/core)
- [@babel/preset-env](https://yarnpkg.com/package/@babel/preset-env)
- [@babel/preset-react](https://yarnpkg.com/package/@babel/preset-react)
- [babel-loader](https://yarnpkg.com/package/babel-loader)
- [css-loader](https://yarnpkg.com/package/css-loader)
- [react](https://yarnpkg.com/package/react)
- [react-dom](https://yarnpkg.com/package/react-dom)
- [style-loader](https://yarnpkg.com/package/style-loader)
- [webpack](https://yarnpkg.com/package/webpack)
- [webpack-cli](https://yarnpkg.com/package/webpack-cli)

#### Dependências de Desenvolvimento
- [webpack-dev-server](https://yarnpkg.com/package/webpack-dev-server)
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
- Inicie o servidor web
```
$ yarn webpack-dev-server --mode development
```