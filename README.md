
BUILD &amp; ENHANCE website source code.


### Requirements

- Node
- npm

> __Install information__: https://docs.npmjs.com/getting-started/installing-node

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
