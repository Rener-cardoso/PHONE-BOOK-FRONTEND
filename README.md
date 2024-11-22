# Lista de Contatos - Frontend

Este é o frontend para a aplicação de lista de contatos telefônicos. Ele foi desenvolvido com React.js utilizando o Vite para simplificar a configuração e o desenvolvimento.

## Tecnologias Utilizadas
- React.js
- Vite

## Requisitos
- Node.js (v16 ou superior)
- npm

## Como executar o frontend

### 1. Instale as dependências
```bash
npm install
```

### 2. Inicie o servidor do Vite
```bash
npm run dev
```

Por padrão, o frontend estará acessível em `http://localhost:5173`.

## Scripts Disponíveis
- **`npm run dev`**: Inicia o servidor de desenvolvimento do Vite.

## Estrutura básica do Projeto
```
frontend/
├── src/
│   ├── components/
│   ├── App.tsx
│   ├── main.tsx
├── vite.config.ts
├── package.json
```

## Como testar o projeto
Certifique-se de que o backend está rodando em `http://localhost:3333`. O frontend está configurado para se comunicar com ele automaticamente.

Acesse o frontend em `http://localhost:5173` e use a interface para gerenciar a lista de contatos.