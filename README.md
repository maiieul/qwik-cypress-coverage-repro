## reproduction steps

- `npm i && rm -rf .nyc_output coverage && DEBUG_DEPTH=10 DEBUG=code-coverage npm run cypress.run`
- right click on `/coverage/index.html` and 'open with Live Server` (with vsCode extension)
- see that the report is broken

## Potential solution
- go to package.json
- change `"@cypress/code-coverage": "3.13.9",` in `devDependencies` to `"@cypress/code-coverage": "github:maiieul/code-coverage",` (the package can be found here: https://github.com/maiieul/code-coverage)
- `rm -rf node_modules package-lock.json && npm i && rm -rf .nyc_output coverage && DEBUG_DEPTH=10 DEBUG=code-coverage npm run cypress.run`
- right click on `/coverage/index.html` and 'open with Live Server` (with vsCode extension)
- see that the report now seems to be working, although I'm not certain the patch is the right fix.
