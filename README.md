# unescaped-script-tag
This repo demonstrates the issue at play in https://github.com/sveltejs/svelte/pull/6822.

Sometimes it makes sense to inline a svelte app into an HTML document. If that app uses [DOM dimension bindings](https://svelte.dev/tutorial/dimensions), in development mode an unescaped `</script>` tag is generated, which a browser will interpret and break the app.

When using a minifier like `terser`, the closing script tag is escaped, and the app runs just fine if inline serverside.

This repro can be used to observe the difference in output.

## getting started

```sh
git clone git@github.com:noslouch/unescaped-script-tag.git
cd unescaped-script-tag
npm i
```

## Create Dev Build
```sh
npm run dev
```

Deposits a dev build in `./dist/main.dev.js`. Search for `</script>`.

## Create Production Build
```sh
npm run build
```

Deposits a minified build in `./dist/main.js`. Search fro <\\/script>`.
