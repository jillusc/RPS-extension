# ROCKPAPERSCISSORS!

## (Browser Extension)

This is a compact browser-extension adaptation of the classic chance-based game. It opens inside a small popup from the toolbar, making it suitable for short breaks or moments of downtime, or simply for fun. The interaction is kept clean and straightforward: pick rock, paper or scissors; get a (randomly-selected) response from the computer, and the result appears instantly. It's a fast, lightweight and familiar game that's quietly within reach.

<img src="README%20images/popup.jpg">

## Project overview

This repository contains a browser-extension version of the Rock-Paper-Scissors game. The original project began as a simple web page and later developed into two forms: a full, colourful, sound-enhanced page version, and this smaller extension designed to run inside a browser popup.
The extension uses the same core logic as the full-page version, but the layout has been adapted so it fits comfortably within the limited space of an extension window.

The main folder in this repo contains the complete source for the extension, including the manifest file, the popup interface, the JavaScript that powers the game, the TypeScript source I used during development, and all assets (images).
For convenience, a separate file, 'rps-extension-build.zip' is also included alongside the project files, containing only those that Chrome needs in order to load the extension.
To install the extension: download the .zip file from this repo; unzip it somewhere on the computer; open chrome://extensions in the browser; enable developer mode; choose 'Load unpacked' and select the unzipped folder. After loading, open the Chrome extensions menu (the puzzle-piece icon) and pin the extension so its icon appears on the toolbar.

The complete full-page version of the game can be viewed here: <a href="https://jillusc.github.io/ROCKPAPERSCISSORS-rebuild/">ROCKPAPERSCISSORS!</a>
