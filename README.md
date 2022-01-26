# L&A Comercial

Neste repositório contém o código do web site da [L&A Comcercial](#).

- Este é um projeto iniciado por mim ([@GustavoGomesDias](https://github.com/GustavoGomesDias)). Em caso de dúvidas, é possível me contatar pelo email 01gustavodias@gmail.com.
- Para acessar informações de login em serviços utilizados, procure o Júnior (ou eu mesmo) pois elas estão nas Planilhas salvas no email da empresa que eu utilizava: gustavo@artcom.com.br

## .env


## Tecnologias usadsa
- TypeScript

- Frontend
  - Next js
  - Chakra UI

- Envio de emails
  - Nodemailer

- Deploy

## Como rodar o projeto
**ATENÇÃO: As informações aqui são para quem for fazer o Deploy**

1. Build o projeto
```bash
npm run build
```

2. Para startar e manter o projeto rodando em uma VM, eu recomendo o pm2.
  1. Instalando o pm2 globalmente
  ```bash
  npm install pm2 -g
  ```
  2. Startar o projeto
  ```bash
  pm2 start npm --name next -- start
  ```
  3. Salve as configurações
  ```bash
  pm2 save
  ```
3. Existem mais ferramentas que talvez sejam necessárias (como `NGINX`), mas não vai constar aqui.

## WorkFlow
WorkFlow que eu segui no projeto

---

1. Crie abra uma [Issue](https://github.com/Artcom-com/la-comercial/issues) no repositório
2. Coloque ela em algum [Project](https://github.com/orgs/Artcom-com/projects/1)
3. Crie uma `branch` que contém um nome descritivo com o que você está fazendo
```bash
git branch <nome_descritivo>
```
4. Mude para ela
```bash
git checkout <nome_branch>
```
5. Commit e dê push nessa `branch`
```bash
git add .
```

**Prorure sobre [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/)**
```bash
git commit -m "feat|refactor|test|fix: mensagem descritiva  em inglês"
```

```bash
git push origin <nome_branch>
```
6. Abra um PR no repositório referente a branch criada
7. Revise esse PR
8. Caso esteja tudo certo, mergeie o PR junto da `main`
9. Faça o pull para a `main` local

**ATENÇÃO: Só se deve fazer PULL na main, nada de PUSH. Para PUSH, se cria PR**