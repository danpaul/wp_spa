## About
wp_spa is an experimental single page application WordPress theme. wp_spa is built using React, Immutable.js, and the WordPress rest api. All components are stateless and use Immutable.js to determine property (even deeploy nested properties) changes. Components only re-render when they have to. All data is maintained through a single Immutable.js map. Because of this, you can easily track the exact and entire history of the application. To demonstrate this, you can enable `config.recordHistory` in `app/config.js`. This will allow you track your apps history. With `recordHistory` enabled, at any time you can emit `document.dispatchEvent(new Event('wpspaRewindHistory'));` via the console to watch your application navigate backward through your entire browsing history.

wp_spa is not a typical WordPress theme. The entire back-end html and PHP is approximately 30 lines of code. Nearly all data is pulled in them via the WordPress API. Because of this, the theme will mostly likely not work with many back end plugins that rely on generating PHP.

The primary motivation of the theme is to be able to work with WordPress for it's admin/CMS  features but to be able to use the JS ecosystem for theming. The theme minimizes CSS and JS calls (assets are only loaded once). All other data is pulled in asynchronously from various WP API calls. One advantations of this approach is that transitions tend to be snappy. Posts, pages and other views tend to load quickly. Additionally, front end caching is enabled. If a user navigates to a given page more than once, no additional network request is made. Caching is handled by [super-agent-cache](https://github.com/jpodwys/superagent-cache) at the request level which makes caching opaque and effortless.

The theme and menu support standard wordpress posts, pages, categories and tags. Menus also support external links. Other post types and non-standard WordPress features probably won't work.

## Requirements
Permalink structure must be "plain". This could change in the future but seems suited for the app nature of the theme.

The following plugins must be enabled:
* [WP REST API](https://wordpress.org/plugins/json-rest-api/)
* [WP API MENUS](https://wordpress.org/plugins/wp-api-menus/)

## To build durring developent

`webpack --progress --colors --watch`