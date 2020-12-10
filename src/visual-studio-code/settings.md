# Settings JSON

```json
{
  // ==> Editor Basics <==
  // -----------------------------------------------
  "editor.fontLigatures": true,
  "editor.fontFamily": "'JetBrains Mono', 'Cascadia Code', Consolas, 'Courier New', monospace",
  "editor.fontSize": 15,
  "editor.suggestSelection": "first",
  "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
  // "editor.tabCompletion": "off",
  // "editor.quickSuggestions": {
  //     "other": true,
  //     "comments": false,
  //     "strings": false
  // },

  "editor.formatOnSave": true,
  "files.autoSave": "onFocusChange",
  // "files.autoSaveDelay": 3000

  // ==> Workbench - Themes <==
  // -----------------------------------------------
  "workbench.iconTheme": "vscode-icons",
  "workbench.colorTheme": "GitHub Dark",
  "workbench.editor.showTabs": false,
  "workbench.colorCustomizations": {
    "[GitHub Light]": {
      // "sideBar.background": "#3f2d3f",
      // "sideBar.foreground": "#888",
      // "sideBarTitle.foreground": "#999",
      "editor.selectionBackground": "#ff000020",
      "list.focusBackground": "#ff000015"
    }
  },

  // ==> Terminal Panel <==
  // -----------------------------------------------
  "terminal.integrated.fontFamily": "MesloLGS NF",
  // "terminal.integrated.fontSize": 14,
  // "[Log]": {
  //     "editor.fontSize": 15
  // },

  // ==> Exclude files/folders <==
  // -----------------------------------------------

  "files.exclude": {
    "**/.git": true,
    "**/node_modules": true
    //     "**/*.js": {
    //         "when": "$(basename).ts"
    //     }
  },
  // "search.exclude": {
  //     "someFolder/": true,
  //     "somefile": true
  // },

  // ==> emmet <==
  // -----------------------------------------------
  // "emmet.triggerExpansionOnTab": true,
  // "emmet.showSuggestionsAsSnippets": true,
  // "editor.snippetSuggestions": "top",
  // "emmet.includeLanguages": {
  //     "javascript": "javascriptreact",
  //     "razor": "html",
  //     "plaintext": "pug"
  // },

  // ==> Markdown <==
  // -----------------------------------------------
  "[markdown]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "markdown-preview-enhanced.previewTheme": "github-light.css"

  // ==> JSON <==
  // -----------------------------------------------
  // "[jsonc]": {
  //     "editor.defaultFormatter": "vscode.json-language-features"
  //   },

  // ==> Open Unknown file ext like foo.database <==
  // -----------------------------------------------
  // "files.associations": {
  //     ".database": "json"
  // },

  // ==> jsdocs <==
  // -----------------------------------------------
  // "javascript.suggest.completeJSDocs": false
}
```