# Testes Automatizados com Selenium e Javascript 🧪💻

Este repositório contém testes automatizados utilizando **Selenium WebDriver com **JavaScript** para diferentes cenários de automação web.

## Estrutura do Repositório

Cada teste está organizado em uma pasta separada para facilitar a manutenção e execução:

projeto-testes-automatizados/
|-- busca-google/
|   ├── busca-google.test.js
|   ├── README.md
|-- teste-login/
|   ├── login.test.js
|   ├── README.md
| -- login-simples/
|   ├── login-simples.js
|   ├── README.md
|-- package.json
|-- README.md

## Testes Disponíveis

### 1. Busca no Google
- Realiza uma busca no Google e valida se os resultados aparecem corretamente.
- Arquivo: ```busca-google.test.js```
### 2. Teste de Login
- Automatiza o login em um sistema e valida a autenticação.
- Arquivo: ```login.test.js```
### 3. Login Simples
- Simula um processo básico de login para testar interações com formulários.
- Arquivo: ```login-simples.js```

## Como Executar os Testes

1. Instale as dependências:
```
npm install
```
2. Execute um teste específico:
```
node busca-google/busca-google.test.js
```
ou
```
node teste-login/login.test.js
```

## Tecnologias Utilizadas

- ***Node.js***
- ***Selenium WebDriver***
- ***Jest*** (para testes automatizados)
- ***Chromedriver
