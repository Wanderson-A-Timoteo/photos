<h1 align="center">
  📸 Photos
</h1>

<p align="center">
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-executar-aplicação">Executar Aplicação</a>
</p>

<br>

## 💻 Projeto

Bem-vindo ao repositório da **Photos**, uma aplicação web front-end desenvolvida em **React.js**. Este projeto foi construído como fundação arquitetural para o consumo dinâmico de dados, permitindo a listagem e busca por imagens em alta resolução através da integração com uma API externa de fotografias. 🖼️

> Projeto focado na introdução à construção de Single Page Applications (SPA), manipulação de estados e consumo de APIs RESTful.


🔗 **Demo Online:** [photos.github.io](https://wanderson-a-timoteo.github.io/photos/)

<br>

## 🚀 Funcionalidades

- **Página Inicial (Galeria):** Exibição de um mural dinâmico em formato de grade (grid) com as fotos mais recentes ou em destaque.
- **Sistema de Busca:** Pesquisa por palavras-chave para encontrar fotografias específicas de forma rápida.
- **Visualização Detalhada:** Interação com as imagens (Modal/Lightbox) para visualização em tamanho maior e verificação de detalhes do fotógrafo ou resolução.
- **Design Responsivo:** Layout adaptável para garantir uma boa experiência em desktops, tablets e smartphones.
- **Tratamento de Estados:** Feedback visual de *Loading* durante as requisições para garantir uma boa Experiência do Usuário (UX).

<br>

## 🛠️ Tecnologias Utilizadas

- **React.js** (Hooks: `useState`, `useEffect`)
- **React Router DOM** (Navegação SPA)
- **CSS3** (Estilização em Grid/Flexbox)
- **Fetch API** (Requisições HTTP)
- **API de Imagens** (Fonte de dados externa)
- **Git & GitHub** (Versionamento e Hospedagem)

<br>

## 🔥 Executando Localmente a Aplicação

Caso você deseje executar o projeto na sua máquina local, basta seguir os passos abaixo:

### 🌀 Começando...

Para começar, você deve clonar o repositório do projeto na sua máquina e instalar as dependências.

#### 🔑 Variáveis de Ambiente (API Key):
Como este projeto consome dados de uma API externa, você poderá precisar de uma chave de desenvolvedor.
1. Crie uma conta na plataforma da API utilizada (ex: Unsplash/Pexels) e gere a sua API Key.
2. Na raiz do projeto clonado, crie um arquivo chamado `.env`.
3. Adicione a sua chave dentro do arquivo: `REACT_APP_PHOTO_API_KEY=sua_chave_aqui`.

#### ❗️ Instalando as Dependências:

Abra o seu terminal (como o WSL/Ubuntu ou CMD) e navegue até o diretório onde deseja armazenar o projeto:

```bash
git clone git@github.com:Wanderson-A-Timoteo/projeto-ii-photos.git
```
Depois, acesse a pasta clonada e digite a seguinte instrução para baixar todas as dependências (`node_modules`) necessárias:

### 💨 Executando a Aplicação
Com as dependências instaladas e o .env configurado (se necessário), inicie o servidor de desenvolvimento local digitando:

```bash
npm start
```
Pronto! Dessa forma o projeto estará rodando localmente em sua máquina. Acesse no navegador:

```
http://localhost:3000
```

<br>

### 🚩 Tenho Dúvidas... O que fazer?

Caso tenham dúvidas sobre o código do projeto, sintam-se a vontade em abrir uma **[ISSUE AQUI](https://github.com/Wanderson-A-Timoteo/photos/issues)**. Assim que possível, estarei respondendo as todas as dúvidas que tiverem!

<br>

## 🌐 Hospedagem e Roteamento (GitHub Pages)

Este projeto está hospedado e disponível publicamente através do **GitHub Pages**. Para garantir que a navegação da aplicação funcione de maneira impecável em um ambiente de servidor de arquivos estáticos, adotamos uma estratégia específica de roteamento.

### A Escolha do HashRouter

Por padrão, SPAs em React utilizam o `BrowserRouter`. No entanto, em servidores como o GitHub Pages, isso gera um **Erro 404** se o usuário tentar recarregar a página (F5) em uma rota interna (ex: `/menu`), pois o servidor tenta localizar um arquivo físico `menu.html` que não existe (já que toda a aplicação roda dentro do `index.html`).

Para resolver esse comportamento e manter a resiliência do projeto, o código foi refatorado para utilizar o **`HashRouter`**:
- **Como funciona:** Ele injeta uma "hashtag" na URL (ex: `https://seu-usuario.github.io/photos/#/menu`).
- **O Resultado:** O servidor do GitHub sempre processa a requisição apontando para a raiz (`index.html`), permitindo que o React intercepte o caminho que vem após o `#` e renderize o componente correto dinamicamente. Isso evita qualquer tipo de "tela em branco" em atualizações de página.


### 🚀 Deploy no GitHub Pages

Para disponibilizar o **Photos** online, utilizamos o **GitHub Pages**. Abaixo, o passo a passo para configurar e realizar o deploy da aplicação de forma automatizada.

#### 1. Instalação do Pacote
O primeiro passo é instalar o pacote `gh-pages` como uma dependência de desenvolvimento no projeto:

```bash
npm install gh-pages --save-dev
```

#### 2. Configuração do package.json

É necessário informar ao React qual será a URL base da aplicação e quais comandos devem ser executados para o deploy.

- Adicionar Homepage: No arquivo package.json, adicione a seguinte propriedade (substituindo pelo link do seu repositório):

```JSON
"homepage": "https://SEU-NOME-DE-USUARIO-DO-GITHUB.github.io/NOME-DO-PROJETO",
```

- Configurar Scripts: No mesmo arquivo, dentro do bloco "scripts", adicione os comandos de predeploy e deploy:


```JSON
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
  "start": "react-scripts start", // Já existe
  ...mantém o resto
}
```

#### 3. Executando o Deploy

Com tudo configurado, basta rodar o comando abaixo no terminal. Ele irá gerar uma build otimizada da aplicação e criar automaticamente uma branch chamada gh-pages no GitHub com os arquivos prontos para produção:

```bash
npm run deploy
```

<br>

## Autor:

Feito com ♥ by

<div align="center">
  <a href="https://github.com/Wanderson-A-Timoteo">
    <img src="https://github.com/Wanderson-A-Timoteo.png" width="120px;" alt="Foto de Perfil do Wanderson Timóteo no GitHub" style="border-radius: 50%;"/>
  </a>
  <br />
  <br />
  <h4>Wanderson Timóteo</h4>
    
  <a href="https://www.wandersontimoteo.com.br/" target="_blank">
    <b>🌐 Visite meu Portfólio</b>
  </a>
  &nbsp;|&nbsp;
  <a href="https://wanderson-a-timoteo.github.io/perfil-de-contato/" target="_blank">
    <b>🔗 Entre em Contato</b>
  </a>
</div>
