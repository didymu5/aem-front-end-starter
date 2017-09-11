## ClientLib Sling content bundle

This project utelizes [Sling Content Loading](https://sling.apache.org/documentation/bundles/content-loading-jcr-contentloader.html) and nodeJs build scripts

## build watch (development only)
> 1. This auto-reload proccess is for **development only** and you should
> always run your typical maven build to deploy to local AEM

> 2. The watch/reload proccess only works for this clientlib (SCSS/JS) and will not work for html changes in you's ui.apps module

The following command trigger webpack process to bundle the JS/CSS and deploy them (only css and js) to AEM.

`yarn run watch`

for browser refresh support for all modern browsers:

1. Run`yarn run watch`.
2. Change a `.js/.scss` file on your local project. (this change kicks off the browser reload process)
3. Go to any page that has this clientlib.
4. Now make changes to `.js/.scss` file and watch the browser automatically reload!


# SCSS Lint
We use [sass-lint](https://github.com/sasstools/sass-lint) to lint all scss in this project, default config can be found [here](https://github.com/sasstools/sass-lint/blob/master/lib/config/sass-lint.yml) and the rules doc can be found [here](https://github.com/sasstools/sass-lint/tree/master/docs/rules)

to run scss lint on it's own, please run `yarn run sass-lint`, any lint errors will be added in `sass-lint/sass-lint.html`
