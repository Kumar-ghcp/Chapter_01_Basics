# Taste (Continuously Learned by [CommandCode][cmd])

[cmd]: https://commandcode.ai/

# javascript
- Use JavaScript instead of TypeScript for this project. Confidence: 0.80

# testing
- Prefers running Playwright tests in headed mode (visible browser) rather than headless. Confidence: 0.6
- Writes Playwright specs as TypeScript `.spec.ts` files and relies on Playwright's built-in TypeScript transpilation, rather than pre-compiling specs with `tsc` before running. Confidence: 0.6
- Dislikes stray build artifacts (e.g. compiled `dist/` folders) being picked up by test runners; prefers excluding them via config rather than relying on manual cleanup. Confidence: 0.55

# environment
- Works on Windows, running commands from PowerShell (uses `npx` and Windows-style paths on the `D:` drive). Confidence: 0.7

# git
- Expects the agent to handle the git workflow end to end (stage, commit with a descriptive message, and push to the GitHub remote) rather than just preparing the commands. Confidence: 0.55
- Prefers to commit and push everything in the working tree, including generated test reports (Allure/Playwright HTML reports) and build output, rather than restricting commits to source files only. Confidence: 0.5
