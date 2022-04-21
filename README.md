# Uma simples Api CRUD com NodeJs e Express.

O objetivo deste projeto é criar uma simples api crud aplicando conceito de REST API, middleware e outros.

# Introdução
Resumindo CRUD é a composição da primeira letra de 4 funções básicas de um sistema que trabalha com banco de dados.

| Letra   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `C` | `criar` | **Obrigatório**. Nome do usuário |
| `R` | `ler` | **Obrigatório**. Nome do usuário |
| `U` | `atualizar` | **Obrigatório**. Nome do usuário |
| `D` | `apagar` | **Obrigatório**. Nome do usuário |

O que é uma REST API?
O nome completo de nosso personagem é RESTFul API. 

Enquanto API é a sigla em inglês para Interface de Programação de Aplicação (Application Programing Interface), o REST é acrônimo para Representation State Transfer.

Na prática o REST é uma API que usa restrições HTTP para extrair(ler), inserir(atualizar), postar(criar) e deletar(apagar) dados. 

Com a REST API, o usuário se conecta e interage com aplicações em nuvens, o que é muito usado em sites como Google, Amazon, LinkedIn e Twitter. 

Como toda API, ela conecta dados armazenados em uma plataforma e “transfere” para outra.

---

## Funcionalidades

- Criar um novo *todo*.
- Listar todos os *todos*.
- Alterar o `title` e `deadline` de um *todo* existente.
- Marcar um *todo* como feito.
- Excluir um *todo*.


## Stack utilizada

**Back-end:** NodeJs, Express


## Documentação da API

#### Criar um novo usuário

```http
  POST /users
```

| Parâmetro (body)  | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string` | **Obrigatório**. Nome do usuário |
| `username` | `string` | **Obrigatório**. Apelido do usuário |

Exemplo de resposta.

```json
{ 
	id: 'd13a1fca-8776-405f-9808-373e6bf8a878',
	name: 'Rogerio Silva', 
	username: 'rogerio.silva87', 
	todos: []
}
```

