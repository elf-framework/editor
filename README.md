# elf framework 


This is an official elf framework document. 

## What's inside?

elf 프레임워크는 에디터를 만들기 위한 라이브러리가 모여있는 패키지입니다. 

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
- `ui-dev`:
- `ui-react-dev`:

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

app 기준으로 테스트 하기 

#### ui library test 
```
cd editor
npm run ui:dev
```

#### ui react library test 

```
cd editor
npm run ui-react:dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching (Beta)](https://turborepo.org/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching (Beta) you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/core-concepts/pipelines)
- [Caching](https://turborepo.org/docs/core-concepts/caching)
- [Remote Caching (Beta)](https://turborepo.org/docs/core-concepts/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/core-concepts/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)
