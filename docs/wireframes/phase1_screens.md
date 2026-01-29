# Fase 1 - Wireframes e Descrições de Tela

Este arquivo descreve os wireframes sugeridos para a Fase 1 (MVP offline-friendly).

## Lista de telas

1. Landing / Home
   - Objetivo: apresentar produto e CTA para começar (onboarding)
   - Contém: logo (`docs/img/petlife-logo.png`), breve copy, botão "Começar".

2. Onboarding / First run
   - Objetivo: coletar nome do tutor, e-mail (opcional) e criar primeiro pet
   - Contém: formulário simples, botão "Criar pet".

3. Dashboard do Tutor
   - Objetivo: visão geral dos pets cadastrados e próximas rotinas
   - Contém: cards de pet, resumo de próximas tarefas, link para "Criar rotina".

4. Perfil do Pet (criar/editar)
   - Objetivo: registrar dados do pet (nome, espécie, raça, data de nascimento)
   - Contém: formulário simples com persistência local

5. Gerenciador de Rotina
   - Objetivo: criar/editar/deletar rotinas (título, hora, notas)
   - Comportamento: persistência em LocalStorage e visualização em lista

6. Marketplace (stub)
   - Objetivo: demonstrar lista de produtos e parceiros com informações mock
   - Contém: cards de produto com imagem, nome, preço e botão "Ver" (não transacional)

7. Perfil do Parceiro (exibição)
   - Objetivo: mostrar como serão perfis de petshops/serviços
   - Contém: nome, localização, breve descrição e serviços oferecidos

## Observações

- Cada tela deve ser implementada com dados mock em `src/mocks/`
- Incluir screenshots e/ou imagens finais nos comentários do PR
- Wireframes visuais podem ser adicionados como imagens em `docs/wireframes/img/` se desejado
