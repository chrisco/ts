# Travel Site

A project to practice Node.js and Gulp (and HTML, CSS, and JavaScript, of course).

## Tutorial

### Initial Project Setup and Introduction to Gulp

(1) Clone initial commit.    
(2) Install [Gulp](http://gulpjs.com/) (if you haven't done so already):
```
$ npm install gulp-cli -g
```

__Tips__

1. NPM shortcuts: "-g" is shortcut for "--save-dev". [More tips and shortcuts](https://futurestud.io/tutorials/npm-quick-tips-2-use-shortcuts-to-install-packages).

2. Rule of thumb for installing Node.js packages ([source](http://stackoverflow.com/a/8951576/175882)):

* Install *globally* if the package provides CLI tools.
* Install *locally* if the package is part of your app.
* Install *globally* AND *locally* if both of the above use cases apply.

__Initial Project Setup and Introduction to Gulp (cont.)__

(3) Initialize npm and save some dependencies:

```
$ npm init -y
$ npm i -D jquery normalize-css
$ npm i -D gulp gulp-watch
```

(4) Install ESLint (optional), by following the directions at [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb), which are summarized below:

Run this command in your Terminal window:

```
(
  export PKG=eslint-config-airbnb;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

Then create your ESLint config file:

```
$ touch .eslintrc
```

(5) And edit it. At a minimum, you must add this to your .eslintrc file:

```
{"extends": "airbnb"}
```

What I did was copy and paste my work-in-progress rules from one of my other projects. I add or change rules as they come up. See my .eslintrc file for details.

(6) Create and edit gulpfile.js as shown in the next commit, which is only a "Hello World," which can be run from your Terminal in various ways, such as the following:

```
$ gulp
$ gulp html
$ gulp watch
```

The last one will 'watch' for changes and run tasks until you tell it to stop (with Ctrl + C).

### Section 4 (Gulp Essentials): Lecture 10 (Gulp and PostCSS)

```
$ npm i gulp-postcss -D
$ npm i autoprefixer -D
$ npm i postcss-simple-vars -D
$ npm i postcss-nested -D
```

### Section 5 (CSS Architecture): Lecture 11 (CSS File Architecture)

```
$ npm i postcss-import -D
```

__Position Hero Text in horizontal and vertical center of Hero Image__

Inside the `large-hero` div, nest the `large-hero__text-content` div. Then style:

```css
.large-hero {
  position: relative;
}

.large-hero__text-content {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  width: 100%;
  text-align: center;
}
```

### Section 5 (CSS Architecture): Lecture 12 (What is BEM?)

__What's BEM?__

- __B__: Block: Blocks can be reused throughout the design. Class names of Blocks should have "-" between words.    
- __E__: Element: An Element depends on its Block and cannot be used outside of the Block belongs to. Class names of Elements should have "-" between words of the Block part of the class name and "\__" between words of the Element part of the class name.    
- __M__: Modifier: Modifiers can be used on Blocks or Elements. Used to indicate change to default state of whatever is being modified.  

__About BEM__  

- With BEM, CSS selectors should target elements directly with classes (instead of relying on type selectors, descendent selectors, and the cascade).
- Because we limit the "cascade" part of CSS, we are free to move blocks around and reuse them throughout the page.
- Blocks can be nested inside of other Blocks.
- Identify patterns and then create *single-responsibility* blocks.
- BEM makes the relationship between our HTML and CSS clear.
- What about semantics? Not a problem See here for more: [About HTML semantics and front-end architecture](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/).
