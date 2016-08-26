## About
wp_spa is an experimental single page application WordPress theme. wp_spa is built using React, Immutable.js, and the WordPress rest api. All components are stateless and use Immutable.js to determine property (even deeply nested property) changes. Components only re-render when they have to. All data is maintained through a single Immutable.js map. Because of this, you can easily track the exact and entire history of the application. To demonstrate this, you can enable `config.recordHistory` in `app/config.js`. With `recordHistory` enabled, at any time you can emit `document.dispatchEvent(new Event('wpspaRewindHistory'));` via the console to watch your application navigate backward through your entire browsing history.

wp_spa is not a typical WordPress theme. The entire back-end html and PHP consists of around 30 lines of code. Nearly all data is pulled in via the WordPress API. Because of this, the theme will mostly likely not work with most existing WordPress plugins.

The primary motivation of the theme is to be able to utilize WordPress for it's admin/CMS features but to be able theme using tools from the JS ecosystem. Essentially, it allows you to develop writing mostly JS instead of mostly PHP.

One advantage of the SPA approach is that all theme assets are only loaded once. All other data is pulled in asynchronously from various WP API calls. This makes for a snappier feeling site. Posts, pages and other views tend to load quickly. Additionally, front end caching is enabled. If a user navigates to a given page more than once, no additional network request is made. Caching is handled by [super-agent-cache](https://github.com/jpodwys/superagent-cache) at the request level which makes caching opaque and effortless.

The theme and menu support standard wordpress posts, pages, categories and tags. Menus also support external links. Other post types and non-standard WordPress features probably won't work.

## Requirements
_Permalink structure must be "plain"._ This could change in the future but isn't a high prority. Given the app nature of the theme, keeping the data encoded via GET params seems approriate anyway.

The following plugins must be enabled:
* [WP REST API](https://wordpress.org/plugins/json-rest-api/)
* [WP API MENUS](https://wordpress.org/plugins/wp-api-menus/)

## Contact form
A basic contact form can be enabled which requires:
* [WP REST API Contact plugin](https://github.com/danpaul/wp_api_contact)
* Enable `config.enableContactForm` in `/app/config.js`
* Create a page called "contact" in the WP admin

## To build durring developent

First run `npm install` then:

`webpack --progress --colors --watch`

## Global events

Rewind app (`config.recordHistory` must be `true`): `document.dispatchEvent(new Event('wpspaRewindHistory'));`