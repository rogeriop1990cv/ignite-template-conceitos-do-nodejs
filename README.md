# Uma simples Api CRUD com NodeJs e Express.

O objetivo deste projeto é criar uma simples api crud aplicando conceito de REST API, middleware e outros.

## Sumário:
  * Introdução.
    * O que é CRUD?
    * O que é uma REST API?
  * Funcionalidades
  * Stack utilizada
  * Documentação da API
    * Criar um novo usuário
    * Lista com todas as tarefas de um usuário.
    * Criar uma nova tarefa.
    * Atualizar o `title` e `deadline`.
    * Finalizar uma tarefa.
    * Apagar uma tarefa.


# Introdução

O que é CRUD?
Resumindo CRUD é a composição da primeira letra de 4 funções básicas de um sistema que trabalha com banco de dados.

| Letra | Tipo        | Descrição                        |
| :---- | :---------- | :------------------------------- |
| `C`   | `criar`     | **Obrigatório**. Nome do usuário |
| `R`   | `ler`       | **Obrigatório**. Nome do usuário |
| `U`   | `atualizar` | **Obrigatório**. Nome do usuário |
| `D`   | `apagar`    | **Obrigatório**. Nome do usuário |

O que é uma REST API?
O nome completo de nosso personagem é RESTFul API.

Enquanto API é a sigla em inglês para Interface de Programação de Aplicação (Application Programing Interface), o REST é acrônimo para Representation State Transfer.

Na prática o REST é uma API que usa restrições HTTP para extrair(ler), inserir(atualizar), postar(criar) e deletar(apagar) dados.

Com a REST API, o usuário se conecta e interage com aplicações em nuvens, o que é muito usado em sites como Google, Amazon, LinkedIn e Twitter.

Como toda API, ela conecta dados armazenados em uma plataforma e “transfere” para outra.

---

# Funcionalidades

- Criar um novo _todo_.
- Listar todos os _todos_.
- Alterar o `title` e `deadline` de um _todo_ existente.
- Marcar um _todo_ como feito.
- Excluir um _todo_.

# Stack utilizada

**Back-end:** NodeJs, Express

# Documentação da API

#### Criar um novo usuário

```http
  POST /users
```

| Body | Tipo     | Descrição                           |
| :--------------- | :------- | :---------------------------------- |
| `name`           | `string` | **Obrigatório**. Nome do usuário    |
| `username`       | `string` | **Obrigatório**. Apelido do usuário |

Exemplo de resposta.

```json
{
  "id": "d13a1fca-8776-405f-9808-373e6bf8a878",
  "name": "Rogerio Silva",
  "username": "rogerio.silva87",
  "todos": []
}
```

#### Lista com todas as tarefas de um usuário.

```http
  GET /todos
```

| Header | Tipo     | Descrição           |
| :----------------- | :------- | :------------------ |
| `username`         | `string` | Username do usuário |

#### Criar uma nova tarefa.

```http
  POST /todos
```

| Body | Tipo     | Descrição                   |
| :--------------- | :------- | :-------------------------- |
| `title`          | `string` | Título da tarefa            |
| `deadline`       | `Date`   | Data com formato 0000-00-00 |

| Header | Tipo     | Descrição           |
| :----------------- | :------- | :------------------ |
| `username`         | `string` | Username do usuário |

Exemplo de resposta.

```json
{
  "id": "d13a1fca-8776-405f-9808-373e6bf8a878",
  "title": "Nome da tarefa",
  "done": false,
  "deadline": "2011-02-26T00:00:00.000Z",
  "created_at": "2011-02-1T00:00:00.000Z"
}
```

#### Atualizar o `title` e `deadline`.

```http
  PUT /todos/:id
```

| Parâmetro (url) | Tipo     | Descrição    |
| :---------------- | :------- | :----------- |
| `id`              | `string` | Id da tarefa |

| Header | Tipo     | Descrição           |
| :----------------- | :------- | :------------------ |
| `username`         | `string` | Username do usuário |

| Body | Tipo     | Descrição                   |
| :--------------- | :------- | :-------------------------- |
| `title`          | `string` | Título da tarefa            |
| `deadline`       | `Date`   | Data com formato 0000-00-00 |

#### Finalizar uma tarefa.

```http
  PATCH /todos/:id/done
```

| Parâmetro (url) | Tipo     | Descrição    |
| :---------------- | :------- | :----------- |
| `id`              | `string` | Id da tarefa |

| Header | Tipo     | Descrição           |
| :----------------- | :------- | :------------------ |
| `username`         | `string` | Username do usuário |

#### Apagar uma tarefa.

```http
  DELETE /todos/:id
```

| Parâmetro (url) | Tipo     | Descrição    |
| :---------------- | :------- | :----------- |
| `id`              | `string` | Id da tarefa |

| Header | Tipo     | Descrição           |
| :----------------- | :------- | :------------------ |
| `username`         | `string` | Username do usuário |

