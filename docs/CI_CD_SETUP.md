# Configuração de CI/CD - PetLife Frontend

## 📋 Visão Geral

Este projeto possui CI/CD completo com:
- ✅ Lint (ESLint + Prettier)
- ✅ Testes automatizados (Vitest)
- ✅ Análise de qualidade (SonarCloud)
- ✅ Scan de segurança (Snyk, CodeQL, OWASP, Trivy)
- ✅ Deploy automático (Vercel)
- ✅ Preview deployments para PRs
- ✅ Dependabot para atualizações

## 🔧 Configuração Necessária

### 1. SonarCloud

1. Acesse [sonarcloud.io](https://sonarcloud.io)
2. Conecte com sua conta GitHub
3. Importe o repositório `petlife-frontend`
4. Copie o token e adicione como secret `SONAR_TOKEN`
5. Configure organization name no `sonar-project.properties` se necessário

```bash
# GitHub Repository Settings > Secrets and variables > Actions
SONAR_TOKEN: seu-token-sonar
```

### 2. Snyk

1. Crie conta em [snyk.io](https://snyk.io)
2. Vá em Account Settings > API Token
3. Adicione como secret:

```bash
SNYK_TOKEN: seu-token-snyk
```

### 3. Vercel

#### Opção A: Integração Automática (Recomendado)
1. Acesse [vercel.com](https://vercel.com)
2. Importe o repositório do GitHub
3. Vercel detecta automaticamente e configura tudo

#### Opção B: GitHub Actions Manual
1. Instale Vercel CLI: `npm i -g vercel`
2. Execute: `vercel` e faça login
3. Obtenha tokens:
   ```bash
   # Project ID e Org ID
   vercel link
   cat .vercel/project.json
   
   # Token
   # Vá em Account Settings > Tokens no dashboard Vercel
   ```
4. Adicione secrets:
   ```bash
   VERCEL_TOKEN: seu-token-vercel
   VERCEL_ORG_ID: org_xxxxx
   VERCEL_PROJECT_ID: prj_xxxxx
   ```

### 4. GitHub Secrets

Adicione no GitHub (Settings > Secrets and variables > Actions):

```
SONAR_TOKEN          # Token do SonarCloud
SNYK_TOKEN           # Token do Snyk
VERCEL_TOKEN         # Token do Vercel (apenas se usar GitHub Actions)
VERCEL_ORG_ID        # ID da organização Vercel
VERCEL_PROJECT_ID    # ID do projeto Vercel
```

**GITHUB_TOKEN** é automaticamente fornecido pelo GitHub Actions.

## 🚀 Workflows

### 1. CI (`.github/workflows/ci.yml`)
**Trigger**: Push/PR em `main` ou `develop`

**Jobs**:
- **lint-and-test**: ESLint, Prettier, Vitest + Coverage
- **security-scan**: Snyk, OWASP Dependency Check
- **codeql-analysis**: GitHub CodeQL para vulnerabilidades

### 2. Deploy (`.github/workflows/deploy.yml`)
**Trigger**: Push em `main`

**Ações**: Build + Deploy para produção no Vercel

### 3. Preview (`.github/workflows/preview.yml`)
**Trigger**: Pull Request para `main`

**Ações**: Deploy de preview + comenta URL no PR

### 4. Security Audit (`.github/workflows/security.yml`)
**Trigger**: Toda segunda-feira às 9h UTC + manual

**Ações**: `bun audit` + Trivy scan + upload para GitHub Security

## 📊 Relatórios

- **Coverage**: Gerado pelo Vitest e enviado ao SonarCloud
- **Security**: Resultados no GitHub Security tab
- **Quality**: Dashboard do SonarCloud
- **Dependencies**: Dependabot cria PRs semanais

## 🛡️ Badges (Adicionar ao README)

```markdown
[![CI](https://github.com/seu-usuario/petlife-frontend/actions/workflows/ci.yml/badge.svg)](https://github.com/seu-usuario/petlife-frontend/actions/workflows/ci.yml)
[![Security](https://github.com/seu-usuario/petlife-frontend/actions/workflows/security.yml/badge.svg)](https://github.com/seu-usuario/petlife-frontend/actions/workflows/security.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=petlife-frontend&metric=alert_status)](https://sonarcloud.io/dashboard?id=petlife-frontend)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=petlife-frontend&metric=coverage)](https://sonarcloud.io/dashboard?id=petlife-frontend)
```

## 📝 Notas

- **CodeQL**: Gratuito para repositórios públicos
- **SonarCloud**: Gratuito para projetos open source
- **Snyk**: 200 testes/mês no plano gratuito
- **Vercel**: Deploy ilimitado no plano Hobby (grátis)
- **Dependabot**: Nativo do GitHub, totalmente gratuito

## 🔒 Segurança

O projeto implementa múltiplas camadas de segurança:
1. **SAST**: CodeQL analisa código-fonte
2. **SCA**: Snyk + OWASP verificam dependências
3. **Container**: Trivy escaneia vulnerabilidades
4. **Audit**: Dependabot mantém deps atualizadas

## 🚨 Resolução de Problemas

### CI falha no primeiro run
Normal! Configure os secrets primeiro.

### SonarCloud não aparece
Verifique se o `sonar-project.properties` tem a organization correta.

### Vercel não deploya
Use integração nativa do Vercel (mais simples) ou configure os 3 secrets manualmente.

### Snyk/OWASP falham
São configurados com `continue-on-error: true` para não bloquear o CI inicialmente.
