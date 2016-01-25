BUILD &amp; ENHANCE website source code.

This code utilises [Gulp](http://gulpjs.com/) to build up the website from the source (src) code.

4 tasks for building the code;

- __clean__: removes any old files from dist (distribution)
- __html__: copies all the HTML files over
- __assets__: copies all assets over; images, favicon.ico and robots.txt
- __styles__: compiles the sass files into a single css file, creates a duplicate file, minimises the css and then appends a .min to the filename

2 additional tasks for the local development

- __watch__: watches the source files for any changes and runs any associated tasks (html, assets, styles)
- __connnect__: creates a local webserver pointing to the dist folder


### Requirements

- Node.js
- npm

> __Installation information__: https://docs.npmjs.com/getting-started/installing-node

### Installation

```
$ npm install
```

### Usage

```
$ gulp
```

> A local webserver will generated and the website will be available on http://127.0.0.0.1:8080


### Common Issues

If gulp errors out on gulp-ruby-sass, try updating sass. (https://github.com/sindresorhus/gulp-ruby-sass/issues/37#issuecomment-77928685)

```
[gulp] Error in plugin 'gulp-ruby-sass': Exited with error code 1
```

> __Try__: gem update sass
