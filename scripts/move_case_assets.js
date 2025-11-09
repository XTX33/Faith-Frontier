#!/usr/bin/env node
const fs = require('fs').promises;
const path = require('path');

const ROOT = process.cwd();
const CASES_DIR = path.join(ROOT, '_cases');
const TARGET_ROOT = path.join(ROOT, 'assets', 'cases');

const TEXT_EXTENSIONS = new Set(['.md', '.markdown', '.yml']);

async function ensureDir(dirPath) {
  await fs.mkdir(dirPath, { recursive: true });
}

async function traverseAndMove(sourceDir, baseSourceDir, targetBaseDir, movedFiles) {
  const entries = await fs.readdir(sourceDir, { withFileTypes: true });
  for (const entry of entries) {
    const sourcePath = path.join(sourceDir, entry.name);
    if (entry.isDirectory()) {
      await traverseAndMove(sourcePath, baseSourceDir, targetBaseDir, movedFiles);
      continue;
    }

    if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (TEXT_EXTENSIONS.has(ext)) {
        continue;
      }

      const relativePath = path.relative(baseSourceDir, sourcePath);
      const targetPath = path.join(targetBaseDir, relativePath);
      await ensureDir(path.dirname(targetPath));
      await fs.rename(sourcePath, targetPath);
      movedFiles.push(relativePath);
    }
  }
}

async function updateMarkdownLinks(caseDir, caseId) {
  const entries = await fs.readdir(caseDir, { withFileTypes: true });
  for (const entry of entries) {
    const entryPath = path.join(caseDir, entry.name);
    if (entry.isDirectory()) {
      await updateMarkdownLinks(entryPath, caseId);
      continue;
    }

    if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (ext !== '.md') {
        continue;
      }

      const originalContent = await fs.readFile(entryPath, 'utf8');
      const updatedContent = originalContent
        .replace(new RegExp(`/_cases/${caseId}/`, 'g'), `/${path.posix.join('assets', 'cases', caseId)}/`)
        .replace(new RegExp(`/_cases/${caseId}(?=["'\)\s])`, 'g'), `/${path.posix.join('assets', 'cases', caseId)}`);

      if (updatedContent !== originalContent) {
        await fs.writeFile(entryPath, updatedContent, 'utf8');
      }
    }
  }
}

async function main() {
  await ensureDir(TARGET_ROOT);
  const caseEntries = await fs.readdir(CASES_DIR, { withFileTypes: true });
  const summary = [];

  for (const entry of caseEntries) {
    if (!entry.isDirectory()) {
      continue;
    }
    const caseId = entry.name;
    const sourceDir = path.join(CASES_DIR, caseId);
    const targetDir = path.join(TARGET_ROOT, caseId);
    await ensureDir(targetDir);

    const movedFiles = [];
    await traverseAndMove(sourceDir, sourceDir, targetDir, movedFiles);
    await updateMarkdownLinks(sourceDir, caseId);

    summary.push({ caseId, count: movedFiles.length });
  }

  console.log('Files moved per case:');
  for (const { caseId, count } of summary) {
    console.log(`${caseId}: ${count}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
