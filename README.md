# Transistor Garden Vite, React, Typescript Template

This template is my preferred starting point for building React web applications. It comes preloaded with packages that I use most often in my projects, as well as some additional tweaks to make things easier to use.

## Packages

- Material UI
- React Hook Form
- React Icons
- React Router Dom
- TailwindCSS, PostCSS & Autoprefixer

## Tweaks & Conventions

- _**Theme**_: ./src/theme is used to govern application wide color and font decisions. _theme.ts_ exports a _ThemeOptions_ object from Material UI. I recommend using [Zenoo's MUI Theme Creator](https://zenoo.github.io/mui-theme-creator/) to customize colors here. _bridge.cjs_ allows this theme to be consumed by TailwindCSS in _tailwind.config.js_. ( _I fussed with this for a little while, if you find a better way without the bridge.cjs file please submit a pull request!_ 😅 )
- _**Routing**_: I love routing with react-router-dom. Tons of flexibility and customization. I tend to abstract my routes to their own file to keep imports in _index.tsx_ under control - and I did just that here. This app only has two pages, but there is plenty of room for expansion.
- _**Host Port**_: I set this to 3000 because it's what I'm comfortable with.

## Use & Contributing

If you find this template to be useful for you, be sure to let me know! If you have any issues or suggestions for improvement please submit an issue or pull request.
