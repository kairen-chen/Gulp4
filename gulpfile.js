const { src, dest, watch, series, parallel } = require("gulp");
const sass = require("gulp-dart-sass");
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const babel = require("gulp-babel");
const rename = require("gulp-rename");
const terser = require("gulp-terser");
const webpack = require("webpack-stream");
const sourcemaps = require("gulp-sourcemaps");
const del = require("del");
const mode = require("gulp-mode")();
const browserSync = require("browser-sync").create();

// clean tasks
const clean = () => {
    return del(["dist"]);
}

const cleanImages = () => {
    return del(["dist/src/images"]);
}

const cleanFonts = () => {
    return del(["dist/src/fonts"]);
}

// css tasks
const css = () => {
    return src("src/scss/index.scss")
            .pipe(mode.development( sourcemaps.init() ))
            .pipe(sass().on("error", sass.logError))
            .pipe(autoprefixer())
            .pipe(rename('app.css'))
            .pipe(mode.production( csso() ))
            .pipe(mode.development( sourcemaps.write() ))
            .pipe(dest("dist"))
            .pipe(mode.development( browserSync.stream() ));
}

// js tasks
const js = () => {
    return src('src/**/*.js')
            .pipe(babel({
                presets: ['es2015']
            }))
            // .pipe(babel({
            //     presets: ["@babel/preset-env"]
            // }))
            .pipe(webpack({
                mode: "development",
                devtool: "inline-source-map",
            }))
            .pipe(mode.development( sourcemaps.init({ loadMaps: true }) ))
            .pipe(rename('app.js'))
            .pipe(mode.production( terser({ output: { comments: false} }) ))
            .pipe(mode.development( sourcemaps.write() ))
            .pipe(dest("dist"))
            .pipe(mode.development( browserSync.stream() ));
}

// copy tasks
const copyImages = () => {
    return src("src/images/**/*.{jpg,jpeg,png,gif,svg}")
            .pipe(dest("dist/src/images"));
}

const copyFonts = () => {
    return src("src/fonts/**/*.{eot,ttf,woff,woff2,svg}")
            .pipe(dest("dist/src/fonts"));
}

// watch task
const watchForChanges = () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    watch("src/scss/**/*.scss", css);
    watch("src/**/*.js", js);
    watch("**/*.html").on("change", browserSync.reload);
    watch("src/images/**/*.{jpg,jpeg,png,gif,svg}", series(cleanImages, copyImages));
    watch("src/fonts/**/*.{eot,ttf,woff,woff2,svg}", series(cleanFonts, copyImages));
}

// public tasks
exports.default = series(clean, parallel(css,  copyImages, copyFonts), js, watchForChanges);
exports.build = series(clean, parallel(css, js, copyFonts, copyImages));