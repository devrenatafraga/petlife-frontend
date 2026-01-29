(# Pet Life - PRD de Lançamento por Fases)

## 1. Visão Geral

A Pet Life é uma plataforma que simplifica o cuidado com pets, conectando tutores a uma rede de serviços e produtos (veterinários, pet sitters, adestradores, lojas) e oferecendo ferramentas para gerenciamento de rotina, agendamento e compras. Este documento define o Product Requirements Document (PRD) orientado por fases para permitir entregas incrementais à medida que funcionalidades de backend forem ficando disponíveis.

> Logo: `docs/img/petlife-logo.png` (adicionado ao repositório)

## 2. Problema

- Fragmentação de aplicativos e serviços (compras, agendamentos e gestão de saúde separados)
- Dificuldade em contratar pet sitters confiáveis
- Complexidade no gerenciamento de agendas, vacinas e compartilhamento de informações
- Falta de acesso centralizado a conteúdos educativos e recomendações confiáveis

Esses problemas geram frustração, risco de perda de dados e custos financeiros e sociais adicionais para tutores.

## 3. Objetivos do Produto

- Unificar experiência de tutores em um único portal intuitivo
- Permitir gerenciamento de rotina do pet com opção de compartilhamento seguro
- Oferecer marketplace e agendamento com visibilidade para parceiros
- Entregar conteúdo educativo relevante

## 4. Métricas de Sucesso (KPIs)

- Engajamento: % de usuários que cadastraram ao menos 1 pet (meta fase 1: 20%)
- Retenção: DAU/MAU alvo 10% no primeiro trimestre pós-lançamento da fase 1
- Conversão marketplace (futuro): % de sessões que resultam em compra
- Agendamentos: % de usuários que concluíram agendamento (futuro)

## 5. Jornada de Usuário (Exemplos)

- Compra e Agendamento: fluxo simplificado para pesquisar produtos e visualizar serviços.
- Contratação de Pet Sitter: busca, perfis com avaliações e processo de contratação.
- Gerenciamento de Cuidados: registro de vacinas, consultas e compartilhamento com cuidadores.

## 6. Escopo por Fase (Roadmap)

### Fase 1 — MVP (UI estático / Offline-friendly)

Objetivo: Lançar uma estrutura de front-end independente do backend para validar UX e permitir trabalho paralelo de backend.

Entregáveis principais:
- Landing page e fluxo de onboarding (cadastro local com mock persistente)
- Página de perfil do pet (criar/editar) usando dados locais
- Gerenciador de rotina do pet (criar/editar rotinas e tarefas — armazenamento local)
- Lista básica de parceiros / marketplace (mocked catalog)
- Navegação global, header/footer e tema
- Storybook básico com componentes principais (Button, Card, Form, Modal)

Regras de implementação:
- Não depender de APIs em produção — usar fixtures JSON e LocalStorage
- Todos os dados editáveis devem persistir localmente entre sessões
- Componentes e páginas devem ter testes unitários e de acessibilidade

Critérios de aceitação (fase 1):
- Usuário pode criar ao menos um pet e ver seus dados após reload
- Usuário pode criar uma rotina com título, horário e notas e ver lista atualizada
- Interfaces apresentam conteúdo realista (mock data) para marketplace e perfis
- Nenhum erro crítico no console, lint e testes passando

### Fase 2 — Integração Backend Básica

Objetivo: Conectar endpoints principais para sincronização de pets, rotinas, e marketplace.

Entregáveis principais:
- Consumo de API para CRUD de pets e rotinas
- Autenticação (token-based) e sincronização de dados
- Sincronização e resolução de conflitos simples entre local e remoto

### Fase 3 — Funcionalidades Avançadas e Marketplace

Objetivo: Recursos de marketplace, agendamentos, pagamentos, avaliações e painéis para parceiros.

Entregáveis principais:
- Agendamento online com confirmation flow
- Integração de pagamentos (parcialmente em sandbox)
- Perfil de parceiro com gestão de serviços e agenda

## 7. Requisitos de Produto e UX (Fase 1)

- Design responsivo (mobile-first)
- Acessibilidade (WCAG AA): navegação por teclado, contrastes, labels
- Internacionalização preparada (pt-BR inicial)
- Testes automatizados para componentes críticos

## 8. Arquitetura de Componentes e Padrões

- Seguir a estrutura `src/components/{common,features,layout}`
- Componentes pequenos, puramente funcionais, props tipadas com TypeScript
- Use Context para estado global leve (ex.: UserContext, ThemeContext)
- Fixtures localizados em `src/mocks/` e providers que simulam API

## 9. Mock Data & Contratos (Fase 1)

- Exemplos de fixtures (`src/mocks/pets.json`, `src/mocks/routines.json`, `src/mocks/catalog.json`)
- Exemplo de shape para `Pet`:

```
type Pet = {
	id: string;
	name: string;
	species: 'dog' | 'cat' | string;
	breed?: string;
	birthdate?: string; // ISO
	routines?: Routine[];
}

type Routine = {
	id: string;
	title: string;
	time: string; // HH:mm
	notes?: string;
}
```

## 10. Testes e Qualidade

- Unit tests: Vitest + React Testing Library
- Storybook para documentação de componentes
- Testes de acessibilidade com `axe` ou `vitest-axe`
- Coverage mínimo 80% (meta projeto)

## 11. Entregáveis do PR (Checklist do PR)

- [ ] Branch nomeada `feat/prd-phase1` ou similar
- [ ] Documentação atualizada (`docs/prd_foundation.md`, `README.md`, `AGENTS.md`)
- [ ] Fixtures adicionadas em `src/mocks/`
- [ ] Páginas e componentes com testes unitários
- [ ] Lint e format passando (usar `bun lint` / `bun format`)
- [ ] Storybook mínimo com componentes principais
- [ ] Screenshots/wireframes anexados ao PR

## 12. Riscos e Mitigações

- Risco: Diferenças entre shape local e shape backend → Mitigação: contratos JSON Schema e testes de integração quando API estiver disponível
- Risco: Reformulação de UX após integração backend → Mitigação: manter componentes desacoplados e cobertos por testes


## Planejamento de Entregas

As entregas seguem um modelo por fases (Fase 1, Fase 2, Fase 3) e serão executadas de forma iterativa. Não são incluídas estimativas de tempo neste documento para evitar expectativas fixas — o foco é priorizar acabamento da Fase 1 (UX e fluxos críticos) antes de avançar para integrações de backend e funcionalidades de marketplace.

---

### Observações finais

Este PRD funciona como documento vivo: conforme o backend evolui, iremos detalhar contratos e expandir cenários de aceitação. A prioridade inicial é entregar uma experiência front-end consistente e testável que permita validação do produto com usuários mesmo sem dependência de APIs.

