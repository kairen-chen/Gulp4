 const { watch, src, dest, series, parallel } = require("gulp"),
      sass = require("gulp-sass"),
      babel = require("gulp-babel"),
      del = require("del")
      ;
const clear = () =>  {
    return del(["dist"])
}

const css = () =>  {
    return src("src/scss/*.scss")
        .pipe(
            sass({
                    outputStyle: "compressed"
                }).on("error", sass.logError)
        )
        .pipe(dest("dist/css"));
}

const js = () =>  {
    return src('src/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(dest('dist/js'))
}

const copyImages = () => {
    return src("src/images/**/*.{jpg,jpeg,png,gif,svg}")
    .pipe(dest("dist/images"))
}

const copyHTML = () => {
    return src("*.html")
    .pipe(dest("dist"))
}

exports.default = () => {
    watch("index.html", copyHTML);
    watch("src/scss/*.scss", css);
    watch("src/js/*.js", js);
};

exports.build =series(clear,parallel(copyHTML, css, js, copyImages));

// if (process.env.NODE_ENV === 'production') {
//     exports.build = series(transpile, minify);
// } else {
//     exports.build = series(transpile, livereload);
// }