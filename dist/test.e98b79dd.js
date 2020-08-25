// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n\u7ED9\u5927\u5BB6\u753B\u4E00\u4E2A\u53EF\u8FBE\u9E2D\n * {\n    box-sizing: border-box;\nmargin: 0;\npadding: 0;\n}\n*::before,\n*::after {\n    box-sizing: border-box;\n}\nbody {\n    min-height: 100vh;\n    background: yellow;\n}\n.skin {\n    position: relative;\n}\n.middle {\n    border: 2px solid #000;\n    width: 600px;\n    height: 450px;\n    position: relative;\n    left: 50%;\n    top: 60px;\n    margin-left: -300px;\n    border-radius: 100% 100% 100% 100%;\n}\n.eye {\n    border: 2px solid #000;\n    width: 200px;\n    height: 110px;\n    position: absolute;\n    left: 50%;\n    top: 220px;\n    margin-left: -100px;\n    background: #fff;\n    border-radius: 200px/110px;\n}\n.eye.left {\n    transform: translateX(150px);\n}\n.eye.right {\n    transform: translateX(-150px);\n}\n.eye::before {\n    content: \"\";\n    display: block;\n    border: 1px solid #000;\n    width: 10px;\n    height: 10px;\n    background: black;\n    border-radius: 50%;\n    position: relative;\n    left: 60px;\n    top: 45px;\n    margin-left: 33px;\n}\n\n.nose {\n    border: #000 1px solid;\n    width: 100px;\n    height: 100px;\n    position: absolute;\n    left: 50%;\n    top: 420px;\n    margin-left: -50px;\n}\n\n.nose .up {\n    border: 2px solid #000;\n    width: 150px;\n    height: 300px;\n    position: relative;\n    position: absolute;\n    top: -79px;\n    left: 50%;\n    margin-left: -75px;\n    border-radius: 70% 70%;\n    border-right-color: transparent;\n    border-left-color: transparent;\n    border-bottom-color: transparent;\n    background-color: #e0d9ab;\n    z-index: 2;\n}\n.nose .upleft1 {\n    border: 2px solid;\n    border-color: yellow transparent black transparent;\n    width: 44px;\n    height: 30px;\n    position: relative;\n    position: absolute;\n    top: -72px;\n    left: 50%;\n    margin-left: -78px;\n    border-radius: 0 0 70% 0;\n    background-color: yellow;\n}\n.nose .upleft1Under {\n    width: 40px;\n    height: 30px;\n    position: relative;\n    position: absolute;\n    top: -72px;\n    left: 50%;\n    margin-left: -76px;\n    background-color: #e0d9ab;\n    z-index: -1;\n}\n.nose .upleft2 {\n    border: 2px solid #000;\n    width: 80px;\n    height: 40px;\n    position: relative;\n    position: absolute;\n    top: -44px;\n    left: 50%;\n    margin-left: -150px;\n    border-radius: 100% 0 0 0;\n    border-right-color: transparent;\n    border-top-color: transparent;\n    border-bottom-color: transparent;\n    background-color: #e0d9ab;\n}\n.nose .upleft3 {\n    border: 2px solid;\n    width: 40px;\n    height: 24px;\n    position: relative;\n    position: absolute;\n    top: -5px;\n    left: 50%;\n    margin-left: -150px;\n    border-radius: 0 0 0 100%;\n    border-right-color: transparent;\n    border-top-color: transparent;\n    background-color: #e0d9ab;\n}\n.nose .upleft4 {\n    border: 2px solid #000;\n    transform: rotate(5deg);\n    width: 30px;\n    height: 60px;\n    position: relative;\n    position: absolute;\n    top: -4px;\n    left: 50%;\n    margin-left: -140px;\n    border-radius: 0 0 100% 50%;\n    border-left-color: transparent;\n    border-top-color: transparent;\n    border-bottom-color: transparent;\n    z-index: 1;\n}\n\n.nose .upleft5 {\n    border: 2px solid #000;\n    transform: rotate(-1deg);\n    width: 100px;\n    height: 130px;\n    position: absolute;\n    top: 15px;\n    left: 50%;\n    margin-left: -147px;\n    border-radius: 100% 15% 0 0;\n    border-top-color: transparent;\n    border-right-color: transparent;\n    border-bottom-color: transparent;\n    background-color: #e0d9ab;\n}\n\n.nose .upright1 {\n    border: 2px solid;\n    border-color: yellow transparent black transparent;\n    width: 44px;\n    height: 30px;\n    position: relative;\n    position: absolute;\n    top: -72px;\n    left: 50%;\n    margin-left: 34px; /*  left -78px*/\n    border-radius: 0 0 0 70%;\n    background-color: yellow;\n    z-index: 1;\n}\n.nose .upright1Under {\n    width: 40px;\n    height: 30px;\n    position: relative;\n    position: absolute;\n    top: -8px;\n    left: 50%;\n    margin-left: 36px;\n    background-color: #e0d9ab;\n    z-index: -1;\n}\n.nose .upright2 {\n    border: 2px solid #000;\n    width: 80px;\n    height: 40px;\n    position: relative;\n    position: absolute;\n    top: -44px;\n    left: 50%;\n    margin-left: 70px; /*  left -150px*/\n    border-radius: 0 100% 0 0;\n    border-left-color: transparent;\n    border-top-color: transparent;\n    border-bottom-color: transparent;\n    background-color: #e0d9ab;\n}\n.nose .upright3 {\n    border: 2px solid;\n    width: 40px;\n    height: 24px;\n    position: relative;\n    position: absolute;\n    top: -5px;\n    left: 50%;\n    margin-left: 110px; /*  left -150px*/\n    border-radius: 0 0 100% 0;\n    border-left-color: transparent;\n    border-top-color: transparent;\n    background-color: #e0d9ab;\n}\n\n.nose .upright4 {\n    border: 2px solid #000;\n    transform: rotate(-5deg);\n    width: 30px;\n    height: 60px;\n    position: relative;\n    position: absolute;\n    top: -4px;\n    left: 50%;\n    margin-left: 110px; /*  left -140px*/\n    border-radius: 0 0 50% 100%;\n    border-right-color: transparent;\n    border-top-color: transparent;\n    border-bottom-color: transparent;\n    z-index: 1;\n}\n\n.nose .upright5 {\n    border: 2px solid #000;\n    transform: rotate(1deg);\n    width: 100px;\n    height: 130px;\n    position: absolute;\n    top: 15px;\n    left: 50%;\n    margin-left: 47px; /*  left -147px*/\n    border-radius: 15% 100% 0 0;\n    border-top-color: transparent;\n    border-left-color: transparent;\n    border-bottom-color: transparent;\n    background-color: #e0d9ab;\n}\n\n.nose .downbottom {\n    border: 2px solid #000;\n    width: 292px;\n    height: 120px;\n    position: absolute;\n    top: 137px;\n    left: 50%;\n    margin-left: -146px;\n    border-radius: 50%/ 0 0 100% 100%;\n    border-top-color: #e0d9ab;\n    background-color: #e0d9ab;\n}\n.nose .downUnder1 {\n    width: 140px;\n    height: 200px;\n    position: absolute;\n    top: -42px;\n    left: 50%;\n    margin-left: -70px;\n    background-color: #e0d9ab;\n}\n.nose .downUnder2 {\n    transform: rotate(-5deg);\n    width: 50px;\n    height: 60px;\n    position: relative;\n    position: absolute;\n    top: -16px;\n    left: 50%;\n    margin-left: 60px;\n    background-color: #e0d9ab;\n}\n.nose .downUnder3 {\n    transform: rotate(5deg);\n    width: 50px;\n    height: 60px;\n    position: relative;\n    position: absolute;\n    top: -6px;\n    left: 50%;\n    margin-left: -110px;\n    background-color: #e0d9ab;\n}\n\n.hole1 {\n    transform: rotate(-30deg);\n    margin-left: -30px;\n    border: 1px solid red;\n    width: 6px;\n    height: 18px;\n    position: relative;\n    position: absolute;\n    top: -40px;\n    left: 50%;\n    border-radius: 100% 100% 70% 70%;\n    background-color: #000;\n    z-index: 2;\n}\n.hole2 {\n    transform: rotate(30deg);\n    margin-left: 24px;\n    border: 1px solid red;\n    width: 6px;\n    height: 18px;\n    position: relative;\n    position: absolute;\n    top: -40px;\n    left: 50%;\n    border-radius: 100% 100% 70% 70%;\n    background-color: #000;\n    z-index: 2;\n}\n.hair1 {\n    margin: 30px;\n    height: 0px;\n    width: 0px;\n    transform-origin: -20px 60px;\n    transform: rotate(-30deg);\n    border-top: solid 60px #000;\n    border-left: solid 30px rgba(0, 0, 0, 0);\n    position: relative;\n    left: 50%;\n    top: -454px;\n    margin-left: -26px;\n    border-radius: 100% 0 10% 10%;\n}\n.hair2 {\n    border: solid 1px;\n    transform-origin: -20px 60px;\n    transform: rotate(10deg);\n    border-radius: 0 0 0 100%;\n    height: 60px;\n    width: 20px;\n    position: relative;\n    left: 50%;\n    margin-left: -20px;\n    top: -580px;\n    border-color: transparent transparent transparent black;\n    background-color: #000;\n}\n.hair3 {\n    border: solid 1px;\n    transform-origin: -20px 60px;\n    transform: rotate(60deg);\n    border-radius: 0 0 0 100%;\n    height: 60px;\n    width: 20px;\n    position: relative;\n    left: 50%;\n    margin-left: -4px;\n    top: -663px;\n    border-color: transparent transparent transparent black;\n    background-color: #000;\n}\n";
var _default = string;
exports.default = _default;
},{}],"test.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var n = 1;
console.log(n);
demo.innerText = _css.default.substr(0, n);
demo2.innerHTML = _css.default.substr(0, n);

var x = function x() {
  n += 1;

  if (n > _css.default.length) {
    window.clearInterval(id);
    return;
  }

  demo.innerText = _css.default.substr(0, n);
  demo2.innerHTML = _css.default.substr(0, n);
  demo.scrollTop = demo.scrollHeight;
};

var time = 50;

var play = function play() {
  return setInterval(x, time);
};

var id = play();

var pause = function pause() {
  window.clearInterval(id);
};

buttonPause.onclick = function () {
  pause();
};

buttonPlay.onclick = function () {
  id = play();
};

buttonSlow.onclick = function () {
  pause();
  time = 200;
  id = play();
};

buttonFast.onclick = function () {
  pause();
  time = 0;
  id = play();
};
},{"./css.js":"css.js"}],"C:/Users/Jun/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53612" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/Jun/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map