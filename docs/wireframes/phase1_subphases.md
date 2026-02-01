# Fase 1 - Sub-fases por Tela (fragmentação de entregas)

Este documento divide a **Fase 1** em sub-fases independentes, uma para cada tela listada em `phase1_screens.md`. Cada sub-fase traz objetivo, critérios de aceite, tarefas e notas de testes para facilitar planejamento e PRs menores. ✅

---

## Sub-fase 1.1 — Landing / Home 🌐
**Objetivo:** Apresentar o produto e direcionar o usuário para o onboarding.

**Critérios de aceite:**
- Header com logo e copy curta visível
- CTA `Começar` navegando para a tela de onboarding
- Responsividade básica (mobile e desktop)

**Tarefas:**
- Implementar componente `Home` em `src/pages/Home` (UI + estilos)
- Adicionar rota `/` e link para `/onboarding`
- Tests unitários para renderização e ação do botão (Vitest + RTL)
- Mock de conteúdo em `src/mocks/`

**Estimativa:** 1-2 dias

---

## Sub-fase 1.2 — Onboarding / First run ✍️
**Objetivo:** Coletar dados do tutor e criar primeiro pet.

**Critérios de aceite:**
- Formulário com campos: nome do tutor (obrigatório), e-mail (opcional)
- Fluxo para criar primeiro pet com validação simples
- Persistência inicial em `localStorage` ou camada de mock

**Tarefas:**
- Criar `Onboarding` em `src/pages/Onboarding`
- Hook `useFirstRun` para lógica de persistência local
- Validações simples e feedbacks de erro
- Testes de integração do fluxo de criação

**Estimativa:** 2 dias

---

## Sub-fase 1.3 — Dashboard do Tutor 📊
**Objetivo:** Exibir pets cadastrados e próximas rotinas.

**Critérios de aceite:**
- Cards de pet com foto, nome e link para o perfil do pet
- Lista/resumo de próximas tarefas/rotinas
- CTA `Criar rotina` que abre modal ou página

**Tarefas:**
- Implementar `Dashboard` em `src/pages/Dashboard`
- Componentes: `PetCard`, `UpcomingList`
- Integração com mocks e estado local
- Tests para renderização e interação

**Estimativa:** 2-3 dias

---

## Sub-fase 1.4 — Perfil do Pet (criar/editar) 🐾
**Objetivo:** Registrar e editar dados do pet.

**Critérios de aceite:**
- Formulário com nome, espécie, raça, data de nascimento
- Salvamento em localStorage e retorno ao `Dashboard`
- Validações básicas e UI acessível

**Tarefas:**
- Criar `PetProfile` em `src/pages/PetProfile`
- Reutilizar componentes de formulário e validação
- Testes unitários e de integração

**Estimativa:** 2 dias

---

## Sub-fase 1.5 — Gerenciador de Rotina ⏰
**Objetivo:** Criar, editar e deletar rotinas do pet.

**Critérios de aceite:**
- CRUD de rotinas com título, hora e notas
- Persistência em `localStorage` e listagem clara
- UI para criar e editar (modal ou página dedicada)

**Tarefas:**
- Implementar `RoutinesManager` em `src/pages/Routines`
- Componentes: `RoutineForm`, `RoutineList`
- Testes cobrindo criação/edição/deleção

**Estimativa:** 2-3 dias

---

## Sub-fase 1.6 — Marketplace (stub) 🛒
**Objetivo:** Exibir lista mock de produtos/serviços sem transação.

**Critérios de aceite:**
- Lista de produtos com imagem, nome, preço e botão `Ver`
- Página de detalhe simples (não transacional)

**Tarefas:**
- Criar `Marketplace` e `ProductCard`
- Mocks em `src/mocks/marketplace.ts`
- Tests de renderização

**Estimativa:** 1-2 dias

---

## Sub-fase 1.7 — Perfil do Parceiro (exibição) 🏬
**Objetivo:** Mostrar perfis de petshops/serviços.

**Critérios de aceite:**
- Página com nome, localização, descrição e lista de serviços
- Layout reutilizável para futuros perfis reais

**Tarefas:**
- Implementar `PartnerProfile` em `src/pages/PartnerProfile`
- Reutilizar componente de cards para serviços
- Tests simples de apresentação

**Estimativa:** 1 dia

---

## Notas gerais 💡
- Cada sub-fase deve ter um PR separado com screenshots e checklist de aceitação cumprida.
- Usar `src/mocks/` para dados locais conforme definido em `phase1_screens.md`.
- Priorizar acessibilidade e testes mínimos (Vitest + React Testing Library).

---

### Sugestão de organização de entregas
- Planejar 1-2 sprints curtos (2 semanas) dividindo sub-fases por prioridade
- Criar issues por sub-fase com checklist de tarefas e estimativas

---

Se quiser, posso: 1) abrir as issues correspondentes no repo com templates; ou 2) criar um quadro de tarefas (Kanban) sugerido no `docs/` para acompanhar o progresso. 🔧