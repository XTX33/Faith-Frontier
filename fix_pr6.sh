#!/bin/bash
# Script to fix PR #6 Liquid syntax errors
# This script applies the fix to the copilot/audit-refine-markdown-content branch

set -e

echo "=== PR #6 Liquid Syntax Error Fix Script ==="
echo ""

# Check if we're in the right repository
if [ ! -f "_config.yml" ]; then
    echo "ERROR: This script must be run from the repository root directory."
    exit 1
fi

echo "Checking out PR #6 branch..."
git fetch origin copilot/audit-refine-markdown-content
git checkout copilot/audit-refine-markdown-content

echo ""
echo "Applying fix to index.md..."

# Fix line 70: {{ \'/public-trust/\' | relative_url }} → {{ '/public-trust/' | relative_url }}
# Fix line 134: {{ \'/cases/\' | relative_url }} → {{ '/cases/' | relative_url }}
# Fix line 135: {{ \'/faith/\' | relative_url }} → {{ '/faith/' | relative_url }}

sed -i.bak "s/{{ \\\\'/{{ '/g; s/\\\\' |/' |/g" index.md

echo "Verifying changes..."
if grep -q "\\\\'" index.md; then
    echo "ERROR: Some backslashes were not removed. Please check index.md manually."
    mv index.md.bak index.md
    exit 1
fi

echo ""
echo "Changes made successfully!"
echo ""
echo "Showing diff:"
git diff index.md

echo ""
echo "To complete the fix:"
echo "  1. Review the changes above"
echo "  2. Run: git add index.md"
echo "  3. Run: git commit -m 'Fix Liquid syntax errors: remove stray backslashes in template tags'"
echo "  4. Run: git push origin copilot/audit-refine-markdown-content"
echo ""
echo "To undo changes:"
echo "  Run: mv index.md.bak index.md"
