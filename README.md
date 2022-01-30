# Seedling

Tree growth simulator and model generator.

This is a fork of my earlier project, 'sapling', however there are some changes:

1) There's already a blender tree-growth plugin named sapling, so I decided to change the name.
2) This one is purely electron-based, there's no effort to make it run as a web site. Generally,
   a desktop app is much more useful in an artist workflow.
3) This uses a different algorithm, and is not compatible with the save files from the old app.
4) Using Vite rather than Webpack as the bundler.

## Getting Started

Easiest method is to check out the code and run:

```sh
npm install
npm start
```

## Uses:

* Electron
* React
* Three.js
* TypeScript
* Vite
* emotion
* Electron boilerplate copied from: https://github.com/caoxiemeihao/vite-react-electron
