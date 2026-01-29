# PetLife Frontend - Guia para Agents e Desenvolvimento

## Visão Geral do Projeto

O PetLife Frontend é uma aplicação moderna construída com **Bun** como runtime e gerenciador de pacotes, **React** com a versão LTS mais recente do Node.js como base de desenvolvimento.

## Stack Tecnológico

- **Runtime**: Bun
- **Framework**: React (com versão LTS mais recente)
- **Node.js**: Versão LTS mais recente (recomendado: Node.js 22.x ou superior)
- **Linguagem**: TypeScript (strict mode)
- **Build Tool**: Integrado com Bun

## Padrões de Arquitetura

### Estrutura de Componentes

```
src/
├── components/
│   ├── common/           # Componentes reutilizáveis (botões, inputs, modais)
│   ├── features/         # Componentes específicos de funcionalidades
│   └── layout/           # Componentes de layout (header, sidebar, footer)
├── pages/                # Componentes de página (rotas)
├── hooks/                # Custom React hooks
├── services/             # Serviços de API e lógica externa
├── utils/                # Funções utilitárias e helpers
├── types/                # Tipos TypeScript compartilhados
├── constants/            # Constantes da aplicação
└── styles/               # Estilos globais e temas
```

### Padrões de Componentes

1. **Componentes Funcionais**: Usar apenas functional components com hooks
2. **Props Tipadas**: Sempre definir interfaces/types para props
3. **Single Responsibility**: Cada componente deve ter uma única responsabilidade
4. **Naming**: PascalCase para componentes, camelCase para funções/variáveis
5. **Exportação**: Exportar componentes por padrão e tipos nomeados

## Boas Práticas de Programação

### Gerais

- **DRY (Don't Repeat Yourself)**: Reutilizar componentes e lógica
- **SOLID Principles**: Aplicar especialmente Single Responsibility e Dependency Inversion
- **Clean Code**: Código legível, bem documentado e fácil de manter
- **Performance**: Lazy loading, memoization (React.memo, useMemo, useCallback) quando necessário
- **Acessibilidade**: Sempre considerar a11y (WCAG 2.1 nível AA)

### React Específico

- Evitar mutações diretas de estado
- Manter componentes pequenos e focados
- Usar Context API para estado global quando apropriado
- Evitar prop drilling; considerar composição ou Context
- Otimizar re-renders com useMemo e useCallback quando identificado gargalo

## Práticas de Programação TypeScript

### Configuração Strict

O projeto usa `"strict": true` no tsconfig.json, garantindo:
- `noImplicitAny`: true
- `strictNullChecks`: true
- `strictFunctionTypes`: true
- `strictBindCallApply`: true
- `strictPropertyInitialization`: true
- `noImplicitThis`: true
- `alwaysStrict`: true

### Convenções de Tipo

```typescript
// ✅ Bom
interface UserProps {
  id: string;
  name: string;
  email: string;
  isActive?: boolean;
}

type UserRole = 'admin' | 'user' | 'guest';

// ❌ Evitar
type UserProps = {
  id: any;
  name: string;
};
```

### Guias de Tipo

1. **Interfaces para objetos públicos**, types para tipos de negócio
2. **Evitar `any`** a todo custo; usar `unknown` se necessário
3. **Tipos descritivos**: `isLoading` em vez de `loading`
4. **Readonly para constantes**: `readonly` em propriedades imutáveis
5. **Discriminated Unions** para estado complexo:

```typescript
type Result<T> = 
  | { status: 'success'; data: T }
  | { status: 'error'; error: string }
  | { status: 'loading' };
```

## Linting e Formatação

### ESLint

- **Configuração**: Usar `.eslintrc.json` com preset recomendado
- **Plugins obrigatórios**:
  - `eslint-plugin-react`
  - `eslint-plugin-react-hooks`
  - `eslint-plugin-typescript`
  - `eslint-plugin-import`

### Prettier

- **Configuração padrão** com 2 espaços de indentação
- Formatação automática no save (VS Code)
- Linha máxima: 100 caracteres

### Comandos

```bash
# Lint
bun lint

# Lint com fix automático
bun lint:fix

# Formatação
bun format

# Formatação com verificação
bun format:check
```

## Padrões de Testes

### Estrutura

- **Unit Tests**: Testes de funções, hooks e componentes isolados
- **Integration Tests**: Testes de fluxo e interação entre componentes
- **E2E Tests**: Testes de cenários críticos do usuário

### Ferramentas

- **Framework**: Vitest (otimizado para Bun e React)
- **Rendering**: React Testing Library
- **Mocking**: MSW (Mock Service Worker) para API
- **Coverage**: Mínimo 80% de cobertura

### Padrões de Teste

```typescript
// ✅ Bom
describe('Button Component', () => {
  it('should render with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  it('should call onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledOnce();
  });
});
```

### Convenções

1. **Naming**: Descrever o comportamento esperado
2. **AAA Pattern**: Arrange, Act, Assert
3. **Um conceito por teste**: Não testar múltiplas coisas
4. **Testes independentes**: Sem dependências entre testes
5. **Fixtures reutilizáveis**: Para dados de teste comuns

### Comandos

```bash
# Rodar testes
bun test

# Rodar testes em watch mode
bun test:watch

# Gerar coverage
bun test:coverage
```

## Padrões de Commit

Usar Conventional Commits:
- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Mudanças na documentação
- `style:` Formatação, sem alterar código
- `refactor:` Refatoração de código
- `perf:` Melhorias de performance
- `test:` Adição ou modificação de testes

Exemplo: `feat(auth): add login form validation`

## PRDs e Roadmap

Consulte a documentação do produto e o roadmap por fases para orientar entregas e PRs:

- `docs/prd_foundation.md` — PRD por fases (Fase 1: MVP UI offline-friendly; Fase 2: integração backend; Fase 3: marketplace e agendamento)
- `docs/prd_pr_template.md` — Template sugerido para o PR da Fase 1 (use ao abrir o PR inicial)
- `docs/wireframes/phase1_screens.md` — Wireframes e descrição das telas da Fase 1

Use estes artefatos como referência ao implementar funcionalidades, criar fixtures ou validar critérios de aceite. Ao abrir PRs, inclua links para o PRD e screenshots dos fluxos implementados.

## Recursos Adicionais

- Consulte `.github/copilot-instructions.md` para instruções específicas do Copilot
- Mantenha o README.md atualizado com setup e documentação
- Use comentários JSDoc para funções públicas complexas
- Documente decisões arquiteturais significativas

## Checklist para Pull Requests

- [ ] Código segue padrões de estilo (ESLint + Prettier)
- [ ] Testes adicionados/atualizados com cobertura mínima
- [ ] Tipos TypeScript corretos sem `any`
- [ ] Componentes acessíveis (a11y)
- [ ] Performance otimizada (sem re-renders desnecessários)
- [ ] Documentação atualizada
- [ ] Commit messages seguem Conventional Commits
