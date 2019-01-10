(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    LRig: function(e, a, r) {
      'use strict';
      r.r(a),
        function(e) {
          var s,
            t = r('mXGw'),
            o = r.n(t),
            i = r('W0B4'),
            d = r.n(i),
            l = r('Ps6s');
          (s = r('Za3l').enterModule) && s(e);
          var n = function(e) {
            var a = e.authUser;
            return o.a.createElement(
              'div',
              null,
              'Welcome to your dashboard ',
              a.firstName
            );
          };
          n.propTypes = { authUser: d.a.object.isRequired };
          var c,
            u,
            h = Object(l.c)(n);
          (a.default = h),
            (c = r('Za3l').default),
            (u = r('Za3l').leaveModule),
            c &&
              (c.register(
                n,
                'Dashboard',
                '/home/davidec/repos/healfit/healfit-web/src/pages/Dashboard/index.js'
              ),
              c.register(
                h,
                'default',
                '/home/davidec/repos/healfit/healfit-web/src/pages/Dashboard/index.js'
              ),
              u(e));
        }.call(this, r('Ono3')(e));
    },
  },
]);
