# builder-api

> Cliente de Builder - API
>A deadly simple Vue.js plugin to consume GeodirBuilder API.

## Using it

### Install and import

```bash
npm install --save @geodir/builder-api
```
In your main application JS file (typically `main.js` if you are using [vue-cli](https://github.com/vuejs/vue-cli) webpack template), simply use the plugin:

```javascript
// vue-resource is needed too
import VueResource from 'vue-resource'
Vue.use(VueResource)

// import GeodirBuilderApi
import GeodirBuilderApi from '@geodir/builder-api'
Vue.use(GeodirBuilderApi, { token: 'user Personal Access Token' })
```

You can configure _application wide_ options while `Vue.use`'ing this plugin:

| Name    | Description                                                           |
|---------|-----------------------------------------------------------------------|
| `token` | one of your Geodir Builder API user _Personal Access Token_ to connect to the API |

### Consume Geodir Builder API

You can also use it in your `.vue` components with `this.$geodirBuilderApi`:
```javascript
this.$geodirBuilderApi.builderTeams([this.myGeodirBuilderData, 'teams'])
```
### Geodir Builder Api
