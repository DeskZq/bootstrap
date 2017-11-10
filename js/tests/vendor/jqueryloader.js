(function () {
  var path = '../../assets/js/vendor/jquery-slim.min.js'
  // get jquery param from the query string.
  var jQueryVersion = location.search.match(/[?&]jquery=(.*?)(?=&|$)/)

  // If a version was specified, use that version from our vendor folder
  if (jQueryVersion) {
    path = 'vendor/jquery-' + jQueryVersion[1] + '.min.js'
  }
  document.write('<script src="' + path + '"></script>')
}());
