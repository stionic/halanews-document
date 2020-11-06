---
id: installation
title: Installation
sidebar_label: Installation
---

> You need to connect to the network

## New to the Command Line?

This product was developed based on the Ionic framework, so you need to know about command-line tools. Something like Windows Command Prompt, Terminal,…

If you’re new to the command line, please read <a href="http://blog.ionicframework.com/new-to-the-command-line/" target="_blank">Ionic Command line tutorial</a>

> In Windows, please do not use PowerShell for this project, Command Prompt (cmd) recommended.

## Install Cordova and Ionic framework

1. Goto [Download page Node.js](https://nodejs.org/en/download/) get LTS version (make sure is LTS version).

1. Once the download is complete, open Node.js installer.

1. Simply follow the prompts in the installer.

1. Run the Terminal installation script: `npm i -g cordova @ionic/cli`

## Install WordPress plugin

As you know, our news application was designed for WordPress. If you already have a WordPress website, it is too simple! Otherwise, take a moment to learn about [WordPress](https://wordpress.org/).

Then just install plugin [Stionic core](https://wordpress.org/plugins/stionic-core/) to complete Backend process.

## Install Node modules

Extract Sources folder in .zip you get when purchase to wherever you want, you also can change Sources folder name.

![](/halanews-document/docs/assets/extract-sources.png)

> All Terminal commands from now should run in Sources folder

1. `cd Sources`

1. Run the Node modules initialization script `npm install`.

![](/halanews-document/docs/assets/node-modules-install.png)

* Ignore all `WARN` and NEVER run audit fix if you dont know what it is.

## Verifying Installation

After installation process you need check and verify that all working fine by run `ionic info`

(Version information maybe different, higher no problems)

![](/halanews-document/docs/assets/verifying-installation.png)

Along with previously existing files and directories, your root project directory will now contain a structure similar to:

```bash
root-directory
├── config
├── node_modules
├── resources
├── src
│   ├── app
│   │   ├── classes
│   │   ├── components
│   │   ├── const
│   │   ├── directives
│   │   ├── home
│   │   ├── pages
│   │   ├── pipes
│   │   ├── services
│   ├── assets
│   ├── environments
│   ├── theme
│   ├── global.scss
│   ├── index.html
│   ├── main.ts
│   └── test.ts
├── config.xml
├── ionic.config.json
├── package.json
├── tsconfig.json
└── tslint.json
```