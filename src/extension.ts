import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    "toggle-relative-line-numbers.toggle",
    () => {
      const config = vscode.workspace.getConfiguration("editor");
      const currentLineNumbers = config.get("lineNumbers");

      config.update(
        "lineNumbers",
        currentLineNumbers === "on" ? "relative" : "on",
        true
      );
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
