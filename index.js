'use strict';
var utils = require('./src/utils.js');

module.exports = function (url, routes) {

  console.log(url);
    // This logic should probably be better, has to Handle
    // /#/foo, #/foo, /foo, /foo/, /#/foo/, #/foo/
    var path = url.replace(location.origin, '').replace('#', '').replace('#', '').split('');
    if (path.length > 1 && path[path.length - 1] === '/') {
      path.pop();
    }
    path = path.join('');
    console.log('path', path);
    var route = utils.findMatchingRoute(routes, path);
    var params = utils.parseParams(route, path);

    routes[route]({
      path: path,
      params: params
    });

};