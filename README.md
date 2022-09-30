# elf framework 


This is an official elf framework document. 

## What's inside?

The elf framework is a package of libraries for creating editors.

* @elf-framework/base-editor
* @elf-framework/color
* @elf-framework/design-system
* @elf-framework/design-tokens
* @elf-framework/icon
* @elf-framework/sapa
* @elf-framework/sapa-router
* @elf-framework/ui
* vite-plugin-sapa

### Apps and Packages

- `editor-dev`: editor library test server  
- `test`:
- `ui-dev`: ui library test server 
- `ui-react-dev`: react ui library test server 

- `base-editor`: editor library 
- `color`: color library 
- `config`: config for monorepo (`eslint`, `tsconfig` , etc ...)
- `design-system`: design system css
- `design-tokens`: design token
- `icon`: icon for sapa
- `sapa`: core ui library like React 
- `sapa-router`: sapa based router 
- `ui`: sapa based many ui components
- `ui-react`: react ui components for design system 
- `vite-plugin-sapa`: sapa plugin for vite to support hmr 


### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Setup

```
git clone https://github.com/elf-framework/editor
cd editor
npm install

```

### Build

To build all apps and packages, run the following command:

```
cd editor
npm run build
```

### Develop

Testing by app

#### ui library test 
```
cd editor
npm run ui:dev
```


### Update npm packages 

```sh
cd apps/xxxx or packages/xxx
npx npm-check-updates -u
npm install
```

# LICENSE: MIT