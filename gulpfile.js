/*
 Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */


// Include Gulp & tools we'll use
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var lost = require('lost');
var browserSync = require('browser-sync').create();
//var del = require('del');
//var runSequence = require('run-sequence');
//var browserSync = require('browser-sync');
//var reload = browserSync.reload;
//var merge = require('merge-stream');
//var path = require('path');
//var fs = require('fs');
//var glob = require('glob-all');
//var historyApiFallback = require('connect-history-api-fallback');
//var packageJson = require('./package.json');
//var crypto = require('crypto');
// var ghPages = require('gulp-gh-pages');


var JavaScript = {
    src: "resources/assets/{scripts,elements,test}/*.{js,html}",
    ignore: "!src/bower_components",
    dest: "public"
};
var SASS = {
    src: "resources/assets/{styles,elements}/**/*.scss",
    dest: "public"
};

var Bower = {
    src: "resources/assets/bower_components/**/*",
    dest: "public/bower_components"
};

var Images = {
    src: "resources/assets/images/**/*.{jpg,png,gif,svg}",
    dest: "public/images"
};

var HTML = {
    src: 'resources/assets/**/*.html',

    dest: "public"
};
var Vulcanize = {
    src: 'resources/assets/elements/elements.html',
    dest: "public/elements/vulcanized"
};



gulp.task('watch', function() {
    $.livereload.listen({
        host: null
    });
    gulp.start(['style','html','js']);
    gulp.watch(SASS.src, ['style']);
    gulp.watch(JavaScript.src, ['js']);
    gulp.watch(Images.src, ['images']);
    gulp.watch(Bower.src, ['bower']);
    gulp.watch(HTML.src, ['html']);
});

var AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
];


var styleTask = function (src, dest) {
    return gulp.src(src)
        .pipe($.changed(dest, {extension: '.css'}))
        .pipe($.sass().on('error', function (sass) {
            return sass.logError;
        }))
        .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
        .pipe($.postcss([
            lost()
        ]))
        .pipe(gulp.dest(dest))
        .pipe($.size({title: "styles"}))
        .pipe($.livereload());
};

gulp.task('style', function () {
    return styleTask(SASS.src, SASS.dest);
});


var imageOptimizeTask = function (src, dest) {
    return gulp.src(src)
        .pipe(gulp.dest(dest))
        .pipe($.size({title: 'images'}))
        .pipe($.livereload());
};

//Scan for images and optimize them
gulp.task('images', function () {
    return imageOptimizeTask(Images.src, Images.dest);
});


var optimizeHtmlTask = function (src, dest) {

    return gulp.src(src)
        .pipe($.changed(dest, {extension: '.html'}))
        .pipe($.useref())
        .pipe($.if('*.html', $.minifyHtml({quotes: true, empty: true, spare: true})))
        .pipe(gulp.dest(dest))
        .pipe($.size({title: 'html'}))
        .pipe($.livereload());
};


// Scan your HTML for assets & optimize them
gulp.task('html', function () {
    return optimizeHtmlTask(HTML.src, HTML.dest);
});

gulp.task('bower', function () {
    var src = Bower.src;
    var dest = Bower.dest;
    return gulp.src(src)
        .pipe($.changed(dest))
        .pipe(gulp.dest(dest))
        .pipe($.size({title: 'bower'}))
        .pipe($.livereload())
});

gulp.task('js', function () {
    return gulp.src([JavaScript.src, JavaScript.ignore])
        .pipe($.changed(JavaScript.src, {extension: '.{js,html}'}))
        .pipe($.sourcemaps.init())
        .pipe($.if('*.html', $.crisper())) // Extract JS from .html files
        .pipe($.if('*.js', $.browserify({transform: $.babel, extensions: ['.js']})))
        .pipe($.if('*.js', $.uglifyjs()))
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest(JavaScript.dest))
        .pipe($.size({title: 'ES2015'}))
        .pipe($.livereload())
});

//// Copy web fonts to dist
//gulp.task('fonts', function() {
//    return gulp.src(['app/fonts/**'])
//        .pipe(gulp.dest(dist('fonts')))
//        .pipe($.size({
//            title: 'fonts'
//        }));
//});
//
//
//// Vulcanize granular configuration
gulp.task('vulcanize', function() {
    return gulp.src(Vulcanize.src)
        .pipe($.vulcanize({
            stripComments: true,
            inlineCss: true,
            inlineScripts: true
        }))
        .pipe($.minifyInline())
        .pipe(gulp.dest(Vulcanize.dest))
        .pipe($.size({title: 'vulcanize'}));
});
//
//// Generate config data for the <sw-precache-cache> element.
//// This include a list of files that should be precached, as well as a (hopefully unique) cache
//// id that ensure that multiple PSK projects don't share the same Cache Storage.
//// This task does not run by default, but if you are interested in using service worker caching
//// in your project, please enable it within the 'default' task.
//// See https://github.com/PolymerElements/polymer-starter-kit#enable-service-worker-support
//// for more context.
//gulp.task('cache-config', function(callback) {
//    var dir = dist();
//    var config = {
//        cacheId: packageJson.name || path.basename(__dirname),
//        disabled: false
//    };
//
//    glob([
//            'index.html',
//            './',
//            'bower_components/webcomponentsjs/webcomponents-lite.min.js',
//            '{elements,scripts,styles}/**/*.*'],
//        {cwd: dir}, function(error, files) {
//            if (error) {
//                callback(error);
//            } else {
//                config.precache = files;
//
//                var md5 = crypto.createHash('md5');
//                md5.update(JSON.stringify(config.precache));
//                config.precacheFingerprint = md5.digest('hex');
//
//                var configPath = path.join(dir, 'cache-config.json');
//                fs.writeFile(configPath, JSON.stringify(config), callback);
//            }
//        });
//});
//
//// Clean output directory
//gulp.task('clean', function() {
//    return del(['.tmp', dist()]);
//});
//
//// Watch files for changes & reload
//gulp.task('serve', ['lint', 'styles', 'elements', 'images'], function() {
//    browserSync({
//        port: 5000,
//        notify: false,
//        logPrefix: 'PSK',
//        snippetOptions: {
//            rule: {
//                match: '<span id="browser-sync-binding"></span>',
//                fn: function(snippet) {
//                    return snippet;
//                }
//            }
//        },
//        // Run as an https by uncommenting 'https: true'
//        // Note: this uses an unsigned certificate which on first access
//        //       will present a certificate warning in the browser.
//        // https: true,
//        server: {
//            baseDir: ['.tmp', 'app'],
//            middleware: [historyApiFallback()],
//            routes: {
//                '/bower_components': 'bower_components'
//            }
//        }
//    });
//
//    gulp.watch(['app/**/*.html'], reload);
//    gulp.watch(['app/styles/**/*.css'], ['styles', reload]);
//    gulp.watch(['app/elements/**/*.css'], ['elements', reload]);
//    gulp.watch(['app/{scripts,elements}/**/{*.js,*.html}'], ['lint']);
//    gulp.watch(['app/images/**/*'], reload);
//});
//
//// Build and serve the output from the dist build
//gulp.task('serve:dist', ['default'], function() {
//    browserSync({
//        port: 5001,
//        notify: false,
//        logPrefix: 'PSK',
//        snippetOptions: {
//            rule: {
//                match: '<span id="browser-sync-binding"></span>',
//                fn: function(snippet) {
//                    return snippet;
//                }
//            }
//        },
//        // Run as an https by uncommenting 'https: true'
//        // Note: this uses an unsigned certificate which on first access
//        //       will present a certificate warning in the browser.
//        // https: true,
//        server: dist(),
//        middleware: [historyApiFallback()]
//    });
//});
//
//// Build production files, the default task
//gulp.task('default', ['clean'], function(cb) {
//    // Uncomment 'cache-config' if you are going to use service workers.
//    runSequence(
//        ['copy', 'styles'],
//        'elements',
//        ['lint', 'images', 'fonts', 'html'],
//        'vulcanize', // 'cache-config',
//        cb);
//});
//
//// Build then deploy to GitHub pages gh-pages branch
//gulp.task('build-deploy-gh-pages', function(cb) {
//    runSequence(
//        'default',
//        'deploy-gh-pages',
//        cb);
//});
//
//// Deploy to GitHub pages gh-pages branch
//gulp.task('deploy-gh-pages', function() {
//    return gulp.src(dist('**/*'))
//        // Check if running task from Travis Cl, if so run using GH_TOKEN
//        // otherwise run using ghPages defaults.
//        .pipe($.if(process.env.TRAVIS === 'true', $.ghPages({
//            remoteUrl: 'https://$GH_TOKEN@github.com/polymerelements/polymer-starter-kit.git',
//            silent: true,
//            branch: 'gh-pages'
//        }), $.ghPages()));
//});
//
//// Load tasks for web-component-tester
//// Adds tasks for `gulp test:local` and `gulp test:remote`
//require('web-component-tester').gulp.init(gulp);
//
//// Load custom tasks from the `tasks` directory
//try {
//    require('require-dir')('tasks');
//} catch (err) {}