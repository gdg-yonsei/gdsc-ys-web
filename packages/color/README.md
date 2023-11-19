# @gdsc-ys/color package

Semantic color system package for GDSC Yonsei chapter system.

For additional infos, refer to [GDSC Yonsei chapter color system Figma page]().

## Getting Started

This package can be installed by using package manager.

> We recommend using 'yarn' package manager.

```zsh
# yarn (most recommmended)
yarn add @gdsc-ys/color

# npm
npm install --save @gdsc-ys/color
```

## Usage

### 1. Semantic Colors 🎨

```tsx
import { content, background } from '@gdsc-ys/color';

const ExampleComponent = () => {
   return (
      <main style={{ backgroundColor: background.common.primary.blue }}>
        <span style={{ color: content.tint.blue.a3.blue }}>
      </main>
   )
}
```

Semantic colors are color tokens which named after what they represents.

Colors are not exported itself, rather exported as a collection of usage.

**We recommend using semantic colors using hooks(_useSemanticColor_) or css variables.**

_useSemanticColor_ hooks provides colorset of components according to predefined theme or custom theme. For more information, refer to the docs of _useSemanticColor_ hooks.

If you wish to access color tokens by css variables, predefined css global variables are injected from \<GlobalStylesProvider />. Childrens of \<GlobalStylesProvider /> can access to css global variables by '--' prefix. Refer to example below for detailed usage.

> 🚨 **Direct usage of color tokens is not recommended** as each color tokens are automatically set by context. Import it when original color token string is required in particual situations.

```tsx
import { useSemanticColor, ColorTheme } from '@gdsc-ys/color';

const ExampleComponent = () => {
   // get background color token object according to theme defined in <GlobalStylesProvider />
   const { background } = useSemanticColor();

   // for color token of particular color theme.
   const { button } = useSemanticColor(ColorTheme.Green); 

   return (
      <main style={{ backgroundColor: background.common.primary }}>
        <button style={{ backgroundColor: button.primary.background.common }}>
      </main>
   )
};
```

```tsx
// if you are using styled-components or css
import styled from 'styled-components';

const Main = styled.main`
   // ...
   background-color: var(--background-common-primary);
   color: var(--background)
`;

const Button = styled.button`
   //...
   background-color: var(--button-primary-background-common);

   &:hover {
      background-color: var(--button-primary-background-active);
   }

   &:active {
      background-color: var(--button-primary-background-pressed);
   }
`

const ExampleComponent2 = () => {
   return (
      <Main>
         <Button />
         {...}
      </Main>
   )
};
```

| Name           | Description                                                |
| :------------- | :--------------------------------------------------------- |
| `content`      | Common colors for components like text or icon.            |
| `background`   | Defines background colors.                                 |
| `button`       | Defines button colors.                                     |
| `textButton`   | Defines text button colors.                                |
| `border`       | Defines border colors.                                     |
| `line`         | Defines line colors                                        |
| `tag`          | Defines tag colors.                                        |
| `tabBar`       | Defines tab bar colors.                                    |

### 2. GlobalStylesProvider & Theme 🌍

GlobalStylesProvider plays as a role of setting overall theme context and injecting css variables at the top of DOM tree.

>Changing theme will automatically change all semantic color tokens. (No need to worry about changing colors according to themes :P )

Children components or elements which desire to use semantic color tokens should be under GlobalStylesProvider, so **it is highly recommended to wrap overall application with \<GlobalStylesProvider /> at the uppermost component**.

---

Predefined theme can be set by importing 'ColorTheme' enum. ColorTheme enum has four members, Blue, Green, Yellow, and Red. If unset, default theme is **Blue(ColorTheme.Blue)**.

Details of each color theme can be found in Figma page. 

```tsx
import { GlobalStylesProvider } from '@gdsc-ys/color';

const MyGorgeousApp = () => {
   // if not given, default theme is set as blue(ColorTheme.Blue).
   return (
      <GlobalStylesProvider>
         {...}
      </GlobalStylesProvider>
   )
};
```

```tsx
import { GlobalStylesProvider, ColorTheme } from '@gdsc-ys/color';

const MyGorgeousGreenApp = () => {
   // Red theme is set!
   return (
      <GlobalStylesProvider theme={ColorTheme.Red}>
         {...}
      </GlobalStylesProvider>
   )
};
```

### 3. Utility Functions 🔧

GDSC Yonsei semantic color system providers color utilities for free transformation of semantic colors.

#### getHexcode

```typescript
declare function getHexcode(string, number): string;
```

**getHexcode** converts color & transparency into color hexcode. When passing color string and its transparency, the function returns the corresponding hexcode.

#### getRgba

```typescript
declare function getRgba(string, number): string;
```

**getRgba** provides the same result as _getHexcode_ functions, but returns color code as RGBA format(`rgba(R, G, B, A)`).

## Build & Publish 🛠️

@gdsc-ys/color and gdsc-ys-web monorepo uses _yarn berry_ as a package manager.

Before build, make sure all dependencies are ready by installing all packages.

```zsh
yarn
```

For ready-to-use build command, we recommend using command as follows at the root folder of monorepo package.

```zsh
yarn color ready
```

If build command is successfully executed, use publish command as follows at the root folder of monorepo package.

gdsc-ys-web monorepo uses lerna-lite for manaing & publishing packages.

```zsh
yarn lerna publish
```

## Bug Report 🐛 & Contribution 🤝

Looking for contribution and bug reports, feel free to leave any issues of PRs to this repository!