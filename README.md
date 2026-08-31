# Service Quote

Aplicativo mobile para criação e gerenciamento de orçamentos de serviços, construído com [Expo](https://docs.expo.dev/versions/v54.0.0/) e React Native.

## Funcionalidades

- **Listagem de orçamentos** com busca por cliente, título ou valor, filtros por status e ordenação (mais recente, mais antigo, maior/menor valor).
- **Criação e edição de orçamentos**: título, cliente, status (Rascunho, Enviado, Aprovado, Recusado) e serviços inclusos.
- **Gestão de serviços do orçamento**: adicionar, editar e remover serviços (título, descrição, preço e quantidade) via bottom sheet.
- **Cálculo automático do investimento**: subtotal, desconto percentual e total com desconto.
- **Detalhes do orçamento**: resumo, totais e ações (editar, excluir).
- **Persistência local** dos orçamentos com `AsyncStorage`.

## Tecnologias

- [Expo](https://expo.dev) 54 / React Native 0.81
- React 19 + TypeScript
- React Navigation (stack)
- AsyncStorage para persistência local

## Estrutura do projeto

```
src/
├── components/     # Componentes reutilizáveis (Button, Input, Header, QuoteCard, Status, etc.)
├── pages/
│   ├── Home/         # Listagem, busca e filtro de orçamentos
│   ├── NewQuote/      # Criação/edição de orçamentos
│   └── QuoteDetails/   # Detalhes de um orçamento
├── routes/         # Configuração de navegação (stack)
├── storage/        # Camada de persistência (AsyncStorage)
├── theme/          # Tokens de cores
├── types/          # Tipos compartilhados (Quote, Service)
└── utils/          # Funções utilitárias (cálculo de totais, formatação, etc.)
```

## Pré-requisitos

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/set-up-your-environment/) (via `npx`)
- App [Expo Go](https://expo.dev/go) no dispositivo, ou um emulador Android/iOS

## Instalação

```bash
npm install
```

## Executando o projeto

```bash
npm start        # inicia o Metro bundler
npm run android  # abre no emulador/dispositivo Android
npm run ios      # abre no simulador/dispositivo iOS
npm run web      # abre no navegador
```

## Lint

```bash
npm run lint
```
