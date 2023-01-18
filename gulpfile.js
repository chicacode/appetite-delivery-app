const { series, watch } = require('gulp');


exports.build = series(
    clean,
    parallel(
      cssTranspile,
      series(jsTranspile, jsBundle)
    ),
    parallel(cssMinify, jsMinify),
    publish
  );

