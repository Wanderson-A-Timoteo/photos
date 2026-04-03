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
