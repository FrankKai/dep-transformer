# dep-transformer

## Feature
Transform package.json's json-format dependency to cli-format dependency for package install or upgrade.

Before: "lodash": "^4.17.21"
After transform: "lodash@^4.17.21"


## Online demo
todo

## Install

```js
yarn add dep-transformer
```

## Usage

```js
import { transformer } from 'dep-transformer'

transformer(`"lodash": "^4.17.21"`) // "lodash@^4.17.21"
```


