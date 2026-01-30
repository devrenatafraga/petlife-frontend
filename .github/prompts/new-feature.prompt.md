
# Prompt: New Activity Helper

Use this prompt to guide a developer through creating a feature/fix branch, grouping commits with emojis and concise English messages, preparing a Markdown PR description, and opening a Pull Request with the GitHub CLI using that file as the PR body.

## What I need from you
- A short purpose for the change (1 line). Example: `Add login form for users`.
- Scope (optional): the area affected, e.g. `auth`, `ui`, `api`.
- The files changed (or let Git detect changed files).

## Branch naming (semantic)
- Use this format: `<type>/<optional-scope>/<short-description>`
- Types: `feat`, `fix`, `chore`, `docs`, `perf`, `refactor`, `style`, `test`
- Use `kebab-case` for descriptions. Examples:
	- `feat/auth/add-login-form`
	- `fix/ui/button-loading`

Commands:
```bash
# create a branch
git checkout -b feat/auth/add-login-form
```

## Grouped commits with emojis and short English messages
- Group related file changes into logical commits (one context = one commit).
- Commit messages should be brief (English) and include an emoji at the start.
- Recommended format examples:
	- `✨ feat(auth): add login form`
	- `🐛 fix(api): handle null response`
	- `🧹 chore(deps): update eslint config`

Emoji quick-reference (choose the one that fits):
- ✨ `feat` (new feature)
- 🐛 `fix` (bugfix)
- 🧹 `chore` (maintenance)
- 📝 `docs` (documentation)
- ♻️ `refactor` (refactor code)
- ⚡ `perf` (performance)
- ✅ `test` (tests)

Example commit workflow for one context:
```bash
# stage only related files
git add src/components/LoginForm.tsx src/hooks/useLogin.ts
# commit with emoji + short English message
git commit -m "✨ feat(auth): add login form"

# push branch to origin
git push -u origin feat/auth/add-login-form
```

Notes:
- Keep each commit scoped to a single intent (UI, API, validation, tests).
- Use present-tense, imperative style ("Add", "Fix").

## Create a PR description in Markdown
- Create a PR description file and fill it with the information reviewers need. Use a path like:
	- `./.github/pr/descriptions/<branch>-pr.md`

Template (use this as a starting point):
```markdown
# Title: <short title>

## Summary
A one-paragraph summary of what this PR changes and why.

## Changes
- Bullet list of key changes (1-6 bullets).

## How to test
1. Step 1 to reproduce/test
2. Step 2

## Screenshots (if applicable)

## Checklist
- [ ] TypeScript types added/updated
- [ ] Tests added/updated
- [ ] Lint and format
- [ ] Manual verification steps completed

## Related issues / PRs
- Close or reference any issue numbers here.
```

Create the file (example):
```bash
mkdir -p .github/pr/descriptions
cat > .github/pr/descriptions/feat-auth-add-login-form-pr.md <<'EOF'
# Add login form

## Summary
Adds a login form for users with client-side validation and API integration.

## Changes
- New `LoginForm` component
- Added `useLogin` hook
- E2E test for login flow

## How to test
1. Start the app
2. Navigate to `/login`
3. Enter valid credentials

## Checklist
- [ ] Types
- [ ] Tests
- [ ] Lint

EOF
```

## Create the Pull Request using GitHub CLI
- Ensure `gh` is authenticated: `gh auth login` if needed.
- Create the PR using the markdown file as the body:
```bash
gh pr create \
	--title "feat(auth): add login form" \
	--body-file ".github/pr/descriptions/feat-auth-add-login-form-pr.md" \
	--base main \
	--head feat/auth/add-login-form
```

Or interactive (will open editor/guide):
```bash
gh pr create --base main --head feat/auth/add-login-form
```

## Tips for reviewers and CI
- Add a short PR description in the first lines of the file — the `gh` CLI will use that as the PR body.
- If you need reviewers or labels, pass them to `gh pr create`: `--reviewer user1,user2 --label "frontend,needs-review"`.

---
When you're ready, run the above commands replacing the example branch and file names with your actual branch and PR description file.

If you want, I can generate a ready-to-use PR description file now — tell me the branch name, short title, and a 1-paragraph summary.
