import * as vscode from "vscode";
export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "unoinit" is now active!');
  const disposable = vscode.commands.registerCommand("unoinit.setupuno", () => {
    vscode.window.showInformationMessage("unoCSS is now actived!");
    const fs = require("fs");

    let data = `
    import { 
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
    presetWebFonts,
} from 'unocss'

export default defineConfig({
    shortcuts: [
        // ...
    ],
    theme: {
        breakpoints: {
            // ... media queries
        },
        colors: {
          // ...
        }
    },
    rules: [
        // ...
    ],
    presets: [
        presetAttributify({ /* preset options */}),
        presetUno({ /* preset options */}),
        presetIcons(),
        presetTypography(),
        presetWebFonts({
            fonts: {
                // ...
              },
        }),
      ],
})
`;

    fs.writeFile("/Users/marye/Documents/unoinit/uno.config.ts", data, (err: string) => {
      if (err) console.log(err);
      else {
        console.log("File written successfully\n");
        console.log("The written has the following contents:");
        console.log(fs.readFileSync("books.txt", "utf8"));
      }
    });
  });
  context.subscriptions.push(disposable);
}
export function deactivate() {}
