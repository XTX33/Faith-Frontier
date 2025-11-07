# Copilot Instructions for faithfrontier.org

This repository powers **faithfrontier.org**, a Jekyll site for the **Faith Frontier Ecclesiastical Trust** and related work of **Tillerstead LLC** (a New Jersey HIC contractor aligned under the trust).

Copilot, when working in this repository, follow these rules.

## 1. Core Purpose

- Treat this site as a **public documentation and stewardship portal**, not a marketing-only site.
- Case materials, trust language, and legal filings must preserve:
  - Factual accuracy
  - Procedural integrity
  - Respect for New Jersey and federal law and court rules.

## 2. Tech Stack

- Static site using **Jekyll**.
- Key components:
  - `_config.yml` – site and collection configuration.
  - `_layouts/` – main templates (`default`, `case`, `essay`, etc.).
  - `_includes/` – header, footer, nav, shared partials.
  - `cases/` – Markdown case files with YAML front matter.
  - `_essays/` – essays and faith/trust reflections.
  - `assets/css/theme.css` – design tokens (colors, spacing, typography).
  - `assets/css/style.css` – layout, components, and page-specific styles.
  - `assets/js/main.js` – lightweight JS (e.g., navigation toggle).

## 3. Code Standards

- Prefer semantic HTML (landmarks, headings in proper order, descriptive link text).
- Respect and reuse CSS variables in `theme.css`. Do **not** hard-code random colors when tokens exist.
- Keep JS vanilla and minimal:
  - No new frameworks without explicit instructions.
  - Keep behavior accessible (keyboard users, screen readers).
- For Jekyll:
  - Use `{{ ... | relative_url }}` and `{{ ... | absolute_url }}` correctly.
  - Avoid breaking existing collection permalinks.

## 4. Legal and Trust Content Guardrails

- Do **not** invent or "fix":
  - Case names
  - Docket numbers
  - Citations to N.J.S.A., N.J. Ct. R., federal statutes, or case law
- Do not change the **substance** of:
  - Post-conviction filings
  - Case summaries that are clearly tracking actual filings
  - Trust / ecclesiastical declarations or doctrinal sections
- It is okay to:
  - Fix obvious typos in non-record summaries (if asked)
  - Improve layout or styling for readability
  - Add non-substantive labels (e.g., "Order", "Motion", "Opinion") where already clear.

If an issue asks for edits that might change legal meaning, respond conservatively:
- Focus on formatting, headings, and cross-references.
- Leave a note in the PR asking a human to confirm substantive language.

## 5. Workflows

### To build or preview

```bash
bundle install
bundle exec jekyll serve
```

Visit `http://localhost:4000` to preview changes.

### To lint or validate

- HTML validation: Use browser dev tools or an online validator.
- CSS: Check for syntax errors and ensure CSS variables are used consistently.
- Links: Verify internal links resolve correctly after Jekyll builds.

## 6. What Copilot SHOULD Work On

✅ **Jekyll infrastructure & build**
- `_config.yml`, `_layouts/*`, `_includes/*`, `assets/css/*`, `assets/js/*`
- Fixing broken nav, layout, theme, and responsive behavior
- Improving HTML semantics and accessibility (headings, aria attributes, landmark roles)
- Clarifying internal links, permalinks, and collection wiring for `cases` and `essays`

✅ **Front-end quality**
- Modernizing CSS using existing tokens/variables in `theme.css`
- Cleaning duplicate or conflicting styles between `theme.css` and `style.css`
- Improving mobile layout, readability, and contrast

✅ **Non-substantive text**
- Fixing typos, headings, and meta descriptions
- Improving copy in **non-record** sections (e.g., home page, about, generic summaries) if clearly requested
- Clarifying summaries of cases, as long as they don't contradict the underlying documents

## 7. What Copilot SHOULD AVOID (without explicit instructions)

🚫 **Do NOT edit without explicit instructions in the issue:**
- PDFs or source legal filings under `assets/cases/**`
- Legal arguments, prayer language, or trust/LLC instruments in any way that changes meaning
- Inventing or "cleaning up" case law, statutes, rules, or citations
- Renaming or deleting case asset files, dockets, or exhibits without explicit migration instructions
- Changing YAML front matter for cases in ways that conflict with the official record

## 8. Repository Structure

```
faithfrontier.org/
├── _config.yml           # Jekyll configuration
├── _layouts/             # Page templates (default, case, essay)
├── _includes/            # Shared components (header, footer, nav)
├── cases/                # Case Markdown files with YAML front matter
├── _essays/              # Faith and trust reflection essays
├── pages/                # Section index pages (cases, faith, public-trust, etc.)
├── assets/
│   ├── cases/            # Case documents (PDFs) - DO NOT MODIFY
│   ├── css/
│   │   ├── theme.css     # Design tokens and CSS variables
│   │   └── style.css     # Site-specific styles
│   └── js/
│       └── main.js       # Minimal vanilla JavaScript
└── index.md              # Homepage
```

## 9. Brand and Voice

- **Faith Frontier Ecclesiastical Trust** = umbrella organization
- **Tillerstead LLC** = tradesman/HIC side, operating under and in harmony with the trust
- The site must read as one unified ecosystem, not two separate projects
- Tone: Professional, transparent, respectful of law and faith
- Avoid marketing fluff; prioritize clarity and accuracy

## 10. Accessibility and SEO

- Always use semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`)
- Maintain proper heading hierarchy (only one `<h1>` per page, then `<h2>`, `<h3>`, etc.)
- Provide alt text for images
- Ensure sufficient color contrast for text readability
- Test keyboard navigation for interactive elements
- Use descriptive link text (avoid "click here")

## 11. Security and Privacy

- Do not commit secrets, API keys, or sensitive credentials
- Respect privacy in case documents (names and details are already public record)
- Maintain security best practices for any external dependencies

## 12. Git and Version Control

- Make focused, atomic commits with clear messages
- Do not commit build artifacts (`_site/`, `node_modules/`, etc.)
- Use `.gitignore` to exclude temporary and generated files
- Test changes locally before committing
