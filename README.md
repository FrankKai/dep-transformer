# dep-transformer
Transform package.json's json-format dependency to cli-format dependency for package install or upgrade.
## Feature
When you copy npm package.json's some dependency' version, after copy that, you need to update it manually.
Now you can use dep-transformer to do that.

```
Before: "lodash": "^4.17.21"
After transform: "lodash@^4.17.21"
```


## Online App
https://dep-transform-app.vercel.app/

## Install

```js
yarn add dep-transformer
```

## Usage

```js
import { transformer } from 'dep-transformer'

transformer(`"lodash": "^4.17.21"`) // "lodash@^4.17.21"
```


