import * as vscode from "vscode";
import { writeFile } from "fs";
import { join } from "path";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "unoinit" is now active!');
  const disposable = vscode.commands.registerCommand("unoinit.setupuno", () => {
    vscode.window.showInformationMessage("unoCSS is now actived!");

    const data = `
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
    writeFile(join(__dirname, "uno.config.ts"), data, () => {
      console.log(join(__dirname, "uno.config.ts"));
    });
  });
  context.subscriptions.push(disposable);
}
export function deactivate() {}
