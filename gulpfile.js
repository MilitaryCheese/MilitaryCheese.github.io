var gulp = require("gulp"),
  sass = require("gulp-sass"),
  browserSync = require("browser-sync"),
  autoprefixer = require("gulp-autoprefixer"),
  uglify = require("gulp-uglify"),
  jshint = require("gulp-jshint"),
  header = require("gulp-header"),
  rename = require("gulp-rename"),
  cssnano = require("gulp-cssnano"),
  package = require("./package.json");
var deploy = require('gulp-gh-pages');


var banner = [
  "/*!\n" +
  " * <%= package.name %>\n" +
  " * <%= package.title %>\n" +
  " * <%= package.url %>\n" +
  " * @author <%= package.author %>\n" +
  " * @version <%= package.version %>\n" +
  " * Copyright " +
  new Date().getFullYear() +
  ". <%= package.license %> licensed.\n" +
  " */",
  "\n"
].join("");

var sassImage = require('gulp-sass-image');

gulp.task("css", function () {
  return gulp
    .src("src/scss/style.scss")
    .pipe(sass({ errLogToConsole: true }))
    .pipe(autoprefixer("last 4 version"))
    .pipe(gulp.dest("app2/assets/css"))
    .pipe(cssnano())
    .pipe(rename({ suffix: ".min" }))
    .pipe(header(banner, { package: package }))
    .pipe(gulp.dest("app22/assets/css"))
    .pipe(browserSync.reload({ stream: true }));
});
gulp.task("js", function () {
  gulp
    .src("src/js/scripts.js")
    .pipe(jshint(".jshintrc"))
    .pipe(jshint.reporter("default"))
    .pipe(header(banner, { package: package }))
    .pipe(gulp.dest("app2/assets/js"))
    .pipe(uglify())
    .pipe(header(banner, { package: package }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("app2/assets/js"))
    .pipe(browserSync.reload({ stream: true, once: true }));
});
gulp.task("browser-sync", function () {
  browserSync.init(null, {
    server: {
      baseDir: "app2"
    }
  });
  gulp.watch("./src/scss/*/*.scss", ["css"]);
  gulp.watch("src/js/*.js", ["js"]);
  gulp.watch("app2/*.html", ["bs-reload"]);
});
gulp.task("bs-reload", function () {
  browserSync.reload();
});

gulp.task("deploy", function () {
  return gulp.src("./app2/**/*")
    .pipe(deploy())
});

gulp.task("default", ["css", "js", "browser-sync"], function () {
  gulp.watch("./src/scss/*.scss", ["css"]);
  gulp.watch("./src/js/*.js", ["js"]);
  gulp.watch("app2/*.html", ["bs-reload"]);
  gulp.watch("./app2/assets/css/*.css", ["bs-reload"]);
  gulp.watch("./src/scss/*.scss", ["sass-image"]);
});

gulp.task('sass-image', function () {
  return gulp.src('./app2/assets/img/**/*.+(jpeg|jpg|png|gif|svg)')
    .pipe(compassImagehelper({
      targetFile: '_generated-imagehelper.scss', // default target filename is '_sass-image.scss'
      // template: 'your-sass-image-template.mustache',
      images_path: './src/images/'
    }))
    .pipe(gulp.dest('sass'));
});