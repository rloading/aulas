CRUD express API
===

### :) ATENÇÃO, FAÇA O FORK DO PROJETO :)

## Proposta
Acabamos de chegar na empresa e nosso primeiro desafio é subir o projeto na nossa máquina, implementar umas features e corrigir uns bugs que possam existir no caminho.

## Instalando o projeto


#### Banco de dados
Como banco de dados estamos utilizando um `MySQL`, as configurações do banco estão no arquivo `/settings/index.js`.

Utilize as configurações do seu banco local.

#### Instalar as dependencias
```javascript
$ npm install
```

#### Rodando o servidor
```javascript
$ npm run dev
```

Com o ambiente está rodando, basta acessar [http://localhost:3000](http://localhost:3000)


### TODO

- [x] [FEATURE] - Baixar o projeto;
- [x] [FEATURE] - Instalar o projeto;
- [x] [FEATURE] - Criar a tabela no banco de dados mysql;
- [x] [FEATURE] - Configurar dados de acesso;
- [x] [FEATURE] - Implementar edição de tarefa;
- [x] [FEATURE] - Implementar deleção de tarefa;
- [ ] [FEATURE] - Implementar endpoint de find by id;
- [ ] [FEATURE] - Implementar paginação;
- [ ] [FEATURE] - Implementar busca por termo;
- [ ] [BUG] - A Função de deleção não está funcionando;

**OBS: fazer implementação com query e com o TodoModel**

## Desafios FRONT
  - [ ] [FEATURE] - Implementar Layout com EJS - **EASY**;
  - [ ] [FEATURE] - Implementar Front-end com `axios` - **HARD**;

## Desafio BACK
  - [ ] [FEATURE] - Implementar `dotenv` no projeto - **MEDIUM**;