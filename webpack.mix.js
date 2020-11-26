const mix = require('laravel-mix');

require('laravel-mix-polyfill');

require('laravel-mix-clean');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .js('resources/js/app.js', 'public/js')
    .sourceMaps()
    .sass('resources/sass/app.scss', 'public/css')
    .copyDirectory('resources/img', 'public/img')
    .clean({
        cleanOnceBeforeBuildPatterns: [
            '**/*',
            '!.htaccess',
            '!favicon.ico',
            '!index.php',
            '!robots.txt',
            '!web.config',
        ],
    })
    .polyfill({
        enabled: true,
        useBuiltIns: "usage",
        targets: { "firefox": "50", "ie": 11 }
    });

mix.webpackConfig({
    output: {
        chunkFilename: 'js/chunks/[name].js?id=[chunkhash]',
    },
});

mix.sourceMaps(true, 'inline-cheap-source-map', 'source-map');

if (mix.inProduction()) {
    mix.version();
}
