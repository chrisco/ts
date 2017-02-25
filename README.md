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

### Section 5 (CSS Architecture): Lecture 12 (BEM)

__What's BEM?__

- __B__: Block: Blocks can be reused throughout the design. Class names of Blocks should have "-" between words.    
- __E__: Element: An Element depends on its Block and cannot be used outside of the Block belongs to. Class names of Elements should have "-" between words of the Block part of the class name and "\__" between words of the Element part of the class name.    
- __M__: Modifier: Modifiers can be used on Blocks or Elements. Used to indicate change to default state of whatever is being modified. Modifier class names have "--" between words.    

__About BEM__  

- With BEM, CSS selectors should target elements directly with classes (instead of relying on type selectors, descendent selectors, and the cascade).
- Because we limit the "cascade" part of CSS, we are free to move blocks around and reuse them throughout the page.
- Blocks can be nested inside of other Blocks.
- Identify patterns and then create *single-responsibility* blocks.
- BEM makes the relationship between our HTML and CSS clear.
- What about semantics? Not a problem See here for more: [About HTML semantics and front-end architecture](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/).

### Section 6 (Gulp Timeout): Lecture 14 (Browsersync)

Browsersync is pretty awesome. We use it as a web server and to automatically reload the browser when HTML changes and/or __inject__ CSS when CSS changes (no page reload required!). It also syncs across browsers, such as if you have an instance of Chrome open and an instance of Firefox open. And lets you test on a mobile device connected to the same network simply by going to an URL, such as http://10.0.0.0:3000.   

(1) Install:

```
$ npm i browser-sync -D
```

(2) Edit gulpfile's 'watch' task.    

(3) Run with ```$ gulp watch```    

### Section 7 (Mobile First Essentials): Lecture 17 (Mobile First, CSS, and Mixins)

* What does "mobile first" mean?
* It can mean different things in different contexts.
* How does it apply to the travel site?
* Begin with the __CSS__.

__Mixins__

(1) Install postcss-mixins:

```
$ npm i -D postcss-mixins
```

(2) Edit ```gulp/tasks/styles.css``` (require and use postcss-mixins).

(3) Create ```app/assets/styles/base/_mixins.css``` (define media query mixins).

(4) Begin using the mixins (in ```app/assets/styles/modules/_large-hero.css```)

### Section 7 (Mobile First Essentials): Lecture 18 (Responsive Images)

Two situations and coding patterns:    

(A) Art direction and cropping: Use the ```<picture>``` element solution.

(B) Image resolution and file size: Use the ```<img srcset="...">``` solution.

(C) Use both at the same time, as done in this project (see commit).

__Testing With Chrome Dev Tools__

### Section 8 (Let's Build): Lecture 20 (Creating Reusable Blocks)

* Good video to watch more than once.
* Create and use some new CSS modules (for page-section and wrapper classes).
* Modify a number of existing rules (for btn and hero large-hero classes).

### Section 8 (Let's Build): Lecture 21 (Headline Block)

Continue work started in previous lecture.

### Section 8 (Let's Build): Lecture 22 (Column Layout Block)

* Another good video to watch more than once.
* Create reusable block to apply column layouts.
* [Clearfix](https://www.google.com/search?q=clearfix) – "A clearfix is a way for an element to automatically clear its child elements, so that you don't need to add additional markup. It's generally used in float layouts where elements are floated to be stacked horizontally." (SOURCE: Stack Overflow)
* Gutters.

__Clearfix Mixin__    

```css
@define-mixin clearfix {
  &::after {
    content: "";
    clear: both;
    display: table;
  }
```

### Section 8 (Let's Build): Lecture 23 (Attention to Detail Part 1)

* Another good video to watch more than once.
* Make images responsive and use different sizes/resolutions.

### Section 8 (Let's Build): Lecture 24 (Attention to Detail Part 2)

* Fix headline's top margin.
* Improve paragraph typography (and do it __not__ using BEM).
* Some good general CSS and development tips.
* Responsive adjustments.

### Section 9 (Git Timeout): Lecture 25 (Git Branches)

* Branch and merge using command line.
* Merge using GitHub.

### Section 10 (Building "Our Features" Section): Lecture 26 (Part 1)

* Title element.
* 2-column layout.
* Feature items.
* Responsive.

### Section 10 (Building "Our Features" Section): Lecture 27 (Part 2)

* Make the "Our Features" section responsive
* Merge using Git's ```--no-ff``` option.

### Section 11 (Building "Testimonial" Section): Lecture 28 (Part 1 – Large Screens)

* Background image.
* Wrapper.
* Section title.
* Icon positioning.
* 3-column layout with gutters.
* Make and style reusable 'testimonial' Block (image and headlines).

### Section 11 (Building "Testimonial" Section): Lecture 29 (Part 2 – Small Screens)

* Paragraphs.
* Padding and gutters.
* Make the testimonial blocks equal height (with Flexbox).
* Style for mobile (multiple fixes and adjustments).

### Section 11 (Building "Testimonial" Section): Lecture 30 (Part 3 – Medium Screens)

* Adjust the breakpoints for the 3-column layout.
* Add high-DPI copies of testimonial images.
* Merge back into master.

### Section: 12 (Gulp Timeout): Lecture 31 (Automated Sprites Part 1)

* What's an Icon Sprite?
* Get started:
```
$ npm i gulp-svg-sprite@1.3.1 -D
```
* Create 'createSprite' gulp task.
* config svgSprite to generate CSS.
* Code the template (/gulp/templates/sprite.css) with Mustache.
* Test it. The /app/temp/sprite/css/sprite.css file should be complete.

### Section: 12 (Gulp Timeout): Lecture 32 (Automated Sprites Part 2)

* Begin using the sprite image made last time.
```
$ npm i gulp-rename -D
```
* Good video to watch more than once.

### Section: 12 (Gulp Timeout): Lecture 33 (Automated Sprites Part 3)

* Make new sprite-related gulp tasks (beginClean, endClean).
```
$ npm i del -D
```
* Adjust all icons on page so they use the sprite.

### Section: 13 (Finish Styling the Site): Lecture 34 (Footer)

* For desktop and mobile.

### Section: 13 (Finish Styling the Site): Lecture 35 (Header Part 1)

* Position and style header for large screens.
* Install and use postcss-hexrgba so can write code like ```rgba($mainBlue, .3)```
```
$ npm i postcss-hexrgba -D
```
* Good one to watch again for CSS basics practice.

### Section 13 (Finish Styling the Site): Lecture 36 (Header Part 2)

* Style header for mobile.
* Another good one to watch again for CSS basics practice.

### Section 14 (JavaScript Organization): Lecture 37 (OOP)

* Super-basic JavaScript OOP explanation and demo.

### Section 14 (JavaScript Organization): Lecture 38 (The JS Module Pattern and "webpack")

* Organizing JS with a "modules" folder.
* Install and use Webpack to bundle and output modules for use by index.html.
```
$ npm i webpack -g
```
* Good explanation of ```module.exports```.
* Install and demo jQuery (as part of module.experts demo).
```
$ npm i jquery -D
```

### Section 14 (JavaScript Organization): Lecture 39 (Integrating "webpack" and Gulp)

* Install, save, and use webpack.
```
$ npm i webpack -D
```
* Automate with gulp task, gulp watch, and Browsersync.
* Handle errors.

### Section 14 (JavaScript Organization): Lecture 40 (Babel)

* Install, save, and use babel.
```
$ npm i babel-core babel-loader babel-preset-es2015 -D
```
* Had to do some troubleshooting, as there was a problem with the build. The problem had to do with postcss-import. I fixed it by downgrading to an older version of postcss-import, as well as downgrading to Webpack 1 (from 2). That might not have been necessary. See [this commit](https://github.com/chrisco/ts/commit/e9aa58b3b0cc56a9d1dd41e23309ae3904833a7e) for troubleshooting details and the changes.

### Section 15 (Writing JavaScript for Our Header Menu): Lecture 41 (How to Avoid jQuery Spaghetti)

* Begin styling and building functionality (using jQuery) for mobile menu.
* TODO: Refactor to just use plain JS?

### Section 15 (Writing JavaScript for Our Header Menu): Lecture 42 (Adjusting Our Menu)

* Finish styling mobile menu for small screens.
* Fade and zoom transitions.

### Section 16 (Revealing Elements on Scroll): Lecture 43 (Revealing Elements on Scroll)

*
