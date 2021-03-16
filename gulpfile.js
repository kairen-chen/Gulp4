
const
    { src, dest, watch, series, parallel } = require("gulp"),
    //pug
    pug = require('gulp-pug'),

    // css
    sass = require("gulp-dart-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    csso = require("gulp-csso"),

    //處理export
    browserify = require("browserify"),
    //ES6 翻譯成 ES5
    babelify = require("babelify"),
    buffer = require("vinyl-buffer"),
    uglify = require("gulp-uglify"),

    //other
    source = require("vinyl-source-stream"),
    sourcemaps = require("gulp-sourcemaps"),
    del = require("del"),
    rename = require("gulp-rename"),
    imageMin = require('gulp-imagemin'),
    replace = require('gulp-replace'),

    /**
     * gulp-mode
     * 
     * 注意: O -> npm run dev / build
     *      X -> gulp / gulp build
     */
    mode = require("gulp-mode")(), 
    browserSync = require("browser-sync").create(),

    // =========path setting START=========
    outPutBase = "dist",
    path = {
        html: {
            input: "src/**/*.html",
            output: outPutBase,
            watch: "src/**/*.html"
        },
        pug: {
            input: "src/**/*.pug",
            output: outPutBase,
            watch: "src/**/*.pug"
        },
        css: {
            input: "src/scss/index.scss",
            output: outPutBase,
            outPutName: "app.css",
            watch: "src/scss/**/*.scss"
        },
        js: {
            input: "src/js/index.js",
            output: outPutBase,
            outPutName: "app.js",
            watch: "src/**/*.js"
        },
        images:{
            input: "src/images/**/*.{jpg,jpeg,png,gif,svg}",
            output: `${outPutBase}/src/images`,
            watch: "src/images/**/*.{jpg,jpeg,png,gif,svg}"
        },
        fonts:{
            input: "src/fonts/**/*.{eot,ttf,woff,woff2,svg}",
            output: `${outPutBase}/src/fonts`,
            watch: "src/fonts/**/*.{eot,ttf,woff,woff2,svg}"
        }
    };

// =========path setting END=========
// clean tasks
const clean = () => {
    return del([outPutBase]);
}

const cleanImages = () => {
    return del([path.images.output]);
}

const cleanFonts = () => {
    return del([path.fonts.output]);
}

// css tasks
const css = () => { 
    return src(path.css.input)
            .pipe(mode.development( sourcemaps.init() ))
            .pipe(sass().on("error", sass.logError))
            .pipe(autoprefixer())
            .pipe(rename(path.css.outPutName))
            .pipe(mode.production( csso() ))
            .pipe(mode.development( sourcemaps.write() ))
            .pipe(dest(path.css.output))
            .pipe(mode.development( browserSync.stream() ));
} 

//js tasks
const js = () => {
    return browserify(path.js.input)
        .transform(babelify, { "presets": ["@babel/preset-env"] })
        .bundle()
        .pipe(source(path.js.outPutName))//將browserify讀取的data轉成gulp flow format
        .pipe(buffer())//轉完後不可直接做uglify,需緩存所有js完後
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
        .pipe(replace("##version##", Date.now()))
        .pipe(sourcemaps.write())
        .pipe(dest(path.js.output))
        .pipe(mode.development( browserSync.stream() ));
}

// pug tasks
const pugTfHtml = () => {
    return src(path.pug.input)
        .pipe(pug({
                pretty: mode.development() ? true : false,
            })
        )
        .pipe(sourcemaps.write())
        .pipe(replace("##version##", Date.now()))
        .pipe(dest(path.pug.output))
        .pipe(mode.development( browserSync.stream() ));
}

// copy tasks
const copyHTML = () => {
    return src(path.html.input)
            .pipe(dest(outPutBase));
}

const copyImages = () => {
    return src(path.images.input)
            .pipe(imageMin(
                [
                    imageMin.gifsicle({interlaced: true}),
                    imageMin.mozjpeg({quality: 50, progressive: true}),
                    imageMin.optipng({optimizationLevel: 5}),
                    imageMin.svgo({
                        plugins: [
                            {removeViewBox: true},
                            {cleanupIDs: false}
                        ]
                    })
                ]
            ))
            .pipe(dest(path.images.output));
}

const copyFonts = () => {
    return src(path.fonts.input)
            .pipe(dest(path.fonts.output));
}

// watch task
const watchForChanges = () => {
    watch(path.html.watch).on("change", series(copyHTML, browserSync.reload));
    watch(path.pug.watch, pugTfHtml);
    watch(path.css.watch, css);
    watch(path.js.watch, js);
    watch(path.images.watch, series(cleanImages));
    watch(path.fonts.watch, series(cleanFonts));
    // browserSync.watch("src/scss/**/*.scss", function (event, file) {
    //     if (event === "change") {
    //         css();
    //     }
    // });
    mode.development() && serverStart();
}   

const serverStart = () => {
        browserSync.init({
            server: {
                baseDir: `./${outPutBase}`
            }
        });
        browserSync.emitter.on("init", function () {
            console.log("Browsersync is running!");
        });
}

// public tasks
exports.default = series(clean, parallel(copyHTML, pugTfHtml, css, js, copyImages, copyFonts), watchForChanges);
exports.build = series(clean, parallel(copyHTML, pugTfHtml, css, js, copyFonts, copyImages));