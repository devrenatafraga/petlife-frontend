# PetLife Frontend - Portal do Usuário

Um portal inovador que simplifica o cuidado com seus pets, conectando tutores a uma ampla rede de serviços e produtos de qualidade.

## 📱 Sobre a Pet Life

A **Pet Life** é uma plataforma que revoluciona a forma como tutores cuidam de seus animais de estimação. Oferecemos uma solução completa e integrada que conecta:

### Para Tutores
- 🐾 **Cadastro de Rotina**: Registre a rotina personalizada do seu pet
- 📤 **Compartilhamento**: Compartilhe informações com pet sitters e cuidadores
- 🏥 **Rede de Serviços**: Acesso a veterinários, pet sitters, adestradores e muito mais
- 🛍️ **Marketplace**: Compre produtos online de parceiros verificados
- 📅 **Agendamento**: Agende serviços online de forma rápida e segura
- ⭐ **Plano Fidelidade**: Benefícios exclusivos e descontos para tutores

### Para Parceiros
- 👨‍💼 **Visibilidade**: Maior alcance e exposição no marketplace
- 📊 **Gerenciamento**: Controle total sobre serviços, produtos e agendamentos
- 💰 **Crescimento**: Impulsione sua lucratividade com acesso a novos clientes
- 🔧 **Ferramentas**: Plataforma completa de agendamento e gestão

## 🛠️ Stack Tecnológico

- **Runtime**: [Bun](https://bun.sh) - Runtime JavaScript moderno e rápido
- **Framework**: React com TypeScript
- **Node.js**: Versão LTS mais recente (22.x ou superior)
- **Linguagem**: TypeScript em strict mode para máxima segurança de tipos
- **Build Tool**: Bun build integrado

## 🚀 Começando

### Pré-requisitos
- Node.js 22.x ou superior
- Bun instalado

### Instalação

```bash
# Instalar dependências
bun install

# Iniciar servidor de desenvolvimento
bun dev

# Build para produção
bun run build

# Executar testes
bun test

# Verificar linting
bun lint

# Formatar código
bun format
```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── common/           # Componentes reutilizáveis
│   ├── features/         # Componentes de funcionalidades
│   └── layout/           # Componentes de layout
├── pages/                # Páginas e rotas
├── hooks/                # Custom React hooks
├── services/             # Serviços de API
├── utils/                # Funções utilitárias
├── types/                # Tipos TypeScript
├── constants/            # Constantes da aplicação
└── styles/               # Estilos globais
```

## 📋 Padrões e Convenções

Para detalhes completos sobre padrões de desenvolvimento, boas práticas, TypeScript, testes e commits, consulte o arquivo [AGENTS.md](./AGENTS.md).

### Principais Destaques
- ✅ TypeScript strict mode obrigatório
- ✅ ESLint + Prettier para qualidade de código
- ✅ React Hooks e functional components
- ✅ Testes com Vitest e React Testing Library
- ✅ Componentes acessíveis (WCAG 2.1 AA)
- ✅ Conventional Commits

## 🧪 Testes

```bash
# Rodar testes
bun test

# Modo watch
bun test:watch

# Cobertura
bun test:coverage
```

## 🔍 Qualidade de Código

```bash
# Lint
bun lint

# Lint com fix automático
bun lint:fix

# Formato
bun format

# Verificar formato
bun format:check
```

## 📝 Documentação

- [Guia de Desenvolvimento (AGENTS.md)](./AGENTS.md) - Arquitetura, padrões e convenções
- [Instruções do Copilot](./.github/copilot-instructions.md) - Guia para assistentes de código

## 🤝 Contribuindo

1. Crie uma branch para sua feature (`git checkout -b feat/minha-feature`)
2. Commit seguindo [Conventional Commits](./AGENTS.md#padrões-de-commit)
3. Push para a branch (`git push origin feat/minha-feature`)
4. Abra um Pull Request

Consulte o [checklist de PR](./AGENTS.md#checklist-para-pull-requests) antes de submeter.

## 📄 Licença

Este projeto está licenciado sob a [MIT License](./LICENSE) 
