# GraphQL Import Node

This extension makes your NodeJS application able to import `graphql` files. It uses `require.extensions` to allow you to 
import/require from `.graphql` files in NodeJS environment. The imported content will be a GraphQL string as is.

This is fork of [graphql-import-node](https://github.com/ardatan/graphql-import-node), only difference is - it not use
`graphql` library for parsing string, but returns string as is.

```
npm i graphql-import-node-as-string
```

After that, you need to load this library before anything else.

## Usage with Node (JavaScript)

Make sure to run your NodeJS process with `-r` flag:

```
node -r graphql-import-node/register index.js
```

Or, you can require it manually in your index file:

```js
// CommonJS
require('graphql-import-node-as-string/register');
```

```js
// ES2016
import 'graphql-import-node-as-string';
```

Now you should be able to do:

```js
const schema = require('./schema.graphql');
```

## Usage with Jest

If you are running a test environment like Jest, you should add the following configuration to your Jest config:

```json
{
  "transform": {
    "^.+\\.graphql$": "graphql-import-node-as-string/jest"
  }
}
```
