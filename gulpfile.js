const { src, series, watch, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');


function css(done) {
    // body omitted
    src('src/scss/app.scss')
        .pipe(sass())
        .pipe(postcss( [autoprefixer()]))
        .pipe(dest('build/css'))

        done();
  }

  function dev(){
    watch('src/scss/app.scss', css)
  }
  
  exports.css = css;
  exports.dev = dev
