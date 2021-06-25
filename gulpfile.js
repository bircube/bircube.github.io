const gulp = require("gulp");
const gap = require("gulp-append-prepend");

gulp.task("licenses", async function() {
  // this is to add Bircube Technologies licenses in the production mode for the minified js
  await gulp
    .src("build/static/js/*chunk.js", { base: "./" })
    .pipe(
      gap.prependText(`/*!

=========================================================
* bircube Design System React - v1.1.0
=========================================================

* Product Page: https://www.bircube.com
* Copyright 2020 Bircube Technologies (https://www.bircube.com)
* Licensed under MIT (https://github.com/creativetimofficial/bircube-design-system-react/blob/master/LICENSE.md)

* Coded by Bircube Technologies

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  // this is to add Bircube Technologies licenses in the production mode for the minified html
  await gulp
    .src("build/index.html", { base: "./" })
    .pipe(
      gap.prependText(`<!--

=========================================================
* bircube Design System React - v1.1.0
=========================================================

* Product Page: https://www.bircube.com
* Copyright 2020 Bircube Technologies (https://www.bircube.com)
* Licensed under MIT (https://github.com/bircube/bircube.github.io/blob/master/LICENSE.md)

* Coded by Bircube Technologies

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

-->`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  // this is to add Bircube Technologies licenses in the production mode for the minified css
  await gulp
    .src("build/static/css/*chunk.css", { base: "./" })
    .pipe(
      gap.prependText(`/*!

=========================================================
* bircube Design System React - v1.1.0
=========================================================

* Product Page: https://www.bircube.com
* Copyright 2020 Bircube Technologies (https://www.bircube.com)
* Licensed under MIT (https://github.com/bircube/bircube.github.io/blob/master/LICENSE.md)

* Coded by Bircube Technologies

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));
  return;
});
