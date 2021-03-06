**Fork information:** This is a maintained fork which implements these additional options: `maxNesting`, `arrayMargins`, and `objectMargins`.


Overview [![Build Status](https://travis-ci.org/AitoDotAI/json-stringify-pretty-compact.svg?branch=master)](https://travis-ci.org/AitoDotAI/json-stringify-pretty-compact) [![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
========

The output of `JSON.stringify` comes in two flavors: _compact_ and _pretty._ The
former is usually too compact to be read by humans, while the latter sometimes
is too spacious. This module trades performance (and the “replacer” argument)
for a compromise between the two. The result is a _pretty_ compact string, where
“pretty” means both “kind of” and “nice”.

```json
{
  "bool": true,
  "short array": [1, 2, 3],
  "long array": [
    {"x": 1, "y": 2},
    {"x": 2, "y": 1},
    {"x": 1, "y": 1},
    {"x": 2, "y": 2}
  ]
}
```

While the “pretty” mode of `JSON.stringify` puts every item of arrays and
objects on its own line, this module puts the whole array or object on a single
line, unless the line becomes too long (the default maximum is 80 characters).
Making arrays and objects multi-line is the only attempt made to enforce the
maximum line length; if that doesn’t help then so be it.


Installation
============

`npm install @aitodotai/json-stringify-pretty-compact`

```js
var stringify = require('@aitodotai/json-stringify-pretty-compact')
```


Usage
=====

`stringify(obj, [options])`
---------------------------

It’s like `JSON.stringify(obj, null, options.indent)`, except that objects and
arrays are on one line if they fit (according to `options.maxLength`).

`options`:

- indent: Defaults to 2. Works exactly like the third parameter of
  `JSON.stringify`.
- maxLength: Defaults to 80. Lines will be tried to be kept at maximum this many
  characters long.
- maxNesting: Defaults to `Infinity`. The maximum amount of allowed inline nesting for objects or arrays

    By default, the output can contain arbitrary amount of nested structures (as long as
    the maxLength is not exceeded), like below:

    ```json
    {"a": [{"b": ["test1", "test2"]}, {"c": true}]}}
    ```

    When maxNesting is set to `0`, the output doesn't allow any nesting:
    ```json
    {
      "a": [
        {
          "b": [
            "test1",
            "test2"
          ]
        },
        {
          "c": true
        }
      ]
    }
    ```

- margins: Defaults to `false`. Whether or not to add “margins” around brackets
  and braces:
  - `false`: `{"a": [1]}`
  - `true`: `{ "a": [ 1 ] }`
- arrayMargins: Defaults to `false`. Whether or not to add “margins” around brackets:
  - `false`: `{"a": [1]}`
  - `true`: `{"a": [ 1 ]}`
- arrayMargins: Defaults to `true`. Whether or not to add “margins” around braces:
  - `false`: `{"a": [1]}`
  - `true`: `{ "a": [1] }`

`stringify(obj, {maxLength: 0, indent: indent})` gives the exact same result as
`JSON.stringify(obj, null, indent)`.

`stringify(obj, {maxLength: Infinity})` gives the exact same result as
`JSON.stringify(obj)`, except that there are spaces after colons and commas.


## Releasing

Example of publishing new release with patch change:

`npm run publish -- patch`


License
=======

[MIT](LICENSE).
