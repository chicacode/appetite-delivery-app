const { src, series, watch, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));





function css(done) {
    // body omitted
    src('src/scss/app.scss')
        .pipe(sass())
        .pipe(dest('build/css'))

        done();
  }
  
  exports.css = css;
