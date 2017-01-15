# Serve Like A Pro

A minimalistic `connect` based web server for serving static web-sites in
a production environment.

## Key Features

1. Minimal footprint
2. Can cache specific files in the server memory
3. Can set HTTP cache headers on specific files
4. Automatically recognizes the `PORT` env var
5. Supports gzip compression

## Usage & Setup

Basically install and run the binary

```
npm install serve-like-a-pro --save
node_modules/.bin/serve-like-a-pro [dirname]
```

You can start the server programmatically from any other javascript file.

```
const serve = require('serve-like-a-pro');

const server = serve({
  root: "./build",
  port: process.env.PORT || 1234,
  memoize: ["**/*.js", "**/*.css"],
  cache: {
    "**/*.js": 60 * 60 * 24 * 365
  },
  fallback: "404.html",
  gzip: true
});
```


## Copyright & License

All code in this repository is released under the terms of the ISC license

Copyright (C) 2017 Nikolay Nemshilov
