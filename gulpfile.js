const { src, dest, watch, series, parallel } = require("gulp"),
  // css
  sass = require("gulp-dart-sass"),
  autoprefixer = require("gulp-autoprefixer"),
  csso = require("gulp-csso"),
  //other
  sourcemaps = require("gulp-sourcemaps"),
  del = require("del"),
  imageMin = require("gulp-imagemin"),
  replace = require("gulp-replace"),
  mode = require("gulp-mode")(),
  browserSync = require("browser-sync").create(),
  babel = require("gulp-babel"),
  // htmlInline = require("gulp-html-inline"),
  babelHtml = require("babel-html-inline"),
  // =========path setting START=========
  outPutBase = "dist",
  path = {
    html: {
      input: "src/**/*.html",
      output: outPutBase,
      watch: "src/**/*.html",
    },
    css: {
      input: "src/**/*.scss",
      output: outPutBase,
      watch: "src/**/*.scss",
    },
    js: {
      input: "src/**/*.js",
      output: outPutBase,
      watch: "src/**/*.js",
    },
    images: {
      input: "src/images/**/*.{jpg,jpeg,png,gif,svg}",
      output: `${outPutBase}/images`,
      watch: "src/images/**/*.{jpg,jpeg,png,gif,svg}",
    },
    fonts: {
      input: "src/fonts/**/*.{eot,ttf,woff,woff2,svg}",
      output: `${outPutBase}/src/fonts`,
      watch: "src/fonts/**/*.{eot,ttf,woff,woff2,svg}",
    },
  };

// =========path setting END=========
// clean tasks
const clean = () => {
  return del([outPutBase]);
};

const cleanImages = () => {
  return del([path.images.output]);
};

const cleanFonts = () => {
  return del([path.fonts.output]);
};

// css tasks
const css = () => {
  return (
    src(path.css.input)
      .pipe(mode.development(sourcemaps.init()))
      .pipe(sass().on("error", sass.logError))
      .pipe(autoprefixer())
      // .pipe(rename(path.css.outPutName))
      .pipe(mode.production(csso()))
      .pipe(mode.development(sourcemaps.write()))
      .pipe(dest(path.css.output))
      .pipe(mode.development(browserSync.stream()))
  );
};

//js tasks
const js = () => {
  return src(path.js.input)
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
        // minified: true, // 壓縮代碼
      })
    )
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(replace("##version##", Date.now()))
    .pipe(sourcemaps.write())
    .pipe(dest(path.js.output));
};

// copy tasks
const copyHTML = () => {
  return (
    src(path.html.input)
      // .pipe(htmlInline({ minifyJs: true }))
      .pipe(babelHtml())
      .pipe(dest(outPutBase))
  );
};

const copyImages = () => {
  return src(path.images.input)
    .pipe(
      imageMin([
        imageMin.gifsicle({ interlaced: true }),
        imageMin.mozjpeg({ quality: 50, progressive: true }),
        imageMin.optipng({ optimizationLevel: 5 }),
        imageMin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(dest(path.images.output));
};

const copyFonts = () => {
  return src(path.fonts.input).pipe(dest(path.fonts.output));
};

// watch task
const watchForChanges = () => {
  watch(path.html.watch).on("change", series(copyHTML, browserSync.reload));
  watch(path.css.watch, css);
  watch(path.js.watch, js);
  watch(path.images.watch, series(cleanImages));
  watch(path.fonts.watch, series(cleanFonts));
  mode.development() && serverStart();
};

const serverStart = () => {
  browserSync.init({
    server: {
      baseDir: `./${outPutBase}`,
    },
  });
  browserSync.emitter.on("init", function () {
    console.log("Browsersync is running!");
  });
};

// public tasks
exports.default = series(
  clean,
  parallel(copyHTML, css, js, copyImages, copyFonts),
  watchForChanges
);
exports.build = series(
  clean,
  parallel(copyHTML, css, js, copyFonts, copyImages)
);
