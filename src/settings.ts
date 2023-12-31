/*
 * Copyright (c) 1986-2023 Ecmel Ercan <ecmel.ercan@gmail.com>
 * Licensed under the MIT License
 */

import { Uri, workspace } from "vscode";

export function getEnabledLanguages(): string[] {
  return workspace
    .getConfiguration("css")
    .get<string[]>("enabledLanguages", ["html"]);
}

export function getStyleSheets(uri: Uri): string[] {
  return workspace
    .getConfiguration("css", uri)
    .get<string[]>("styleSheets", []);
}