# PR: Fase 1 — MVP UI (Frontend only)

## Título sugerido

feat(mvp): fase 1 — UI offline-friendly com mock data

## Descrição

Este PR entrega a estrutura inicial do Portal Pet Life para a Fase 1: um MVP de front-end que não depende de backend. O objetivo é validar o fluxo de cadastro de pets, gerenciamento de rotinas e a navegação geral do produto usando dados mock e persistência local.

### O que está incluído

- Documentação atualizada (`docs/prd_foundation.md`, `docs/wireframes/phase1_screens.md`)
- Wireframes e descrição de telas
- Estrutura de pastas e arquivos iniciais para componentes
- Fixtures e providers (mock) — local-only
- Testes unitários e regras de lint/format
- Storybook com componentes básicos (se aplicável)

### Critérios de aceite

- [ ] Usuário pode criar/editar um pet e os dados persistem localmente
- [ ] Usuário pode criar/editar rotinas e visualizá-las
- [ ] UI funciona sem backend (fixtures/localStorage)
- [ ] Testes unitários cobrem os componentes críticos
- [ ] Lint e formatação OK
- [ ] Documentação (PRD + wireframes) atualizada

### Como revisar

1. Rodar `bun install` e `bun dev`
2. Validar fluxos manuais (criar pet, criar rotina)
3. Executar `bun test` e checar coverage
4. Checar Storybook se disponível

### Notas

- As integrações de backend serão adicionadas nas Fases 2 e 3; este PR deve focar em arquitetura, componentes e qualidade de código
- Adicionar screenshots ou GIFs das telas no PR para facilitar revisão
