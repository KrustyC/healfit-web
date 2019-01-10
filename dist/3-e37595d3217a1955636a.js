(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    '9lQ0': function(e, t, r) {
      e.exports = r.p + '663ca709e0d52b034ce981c198f45f51.jpg';
    },
    FNAr: function(e, t, r) {
      'use strict';
      (function(e) {
        var a,
          _ = r('mXGw'),
          n = r.n(_),
          o = r('2y1a'),
          i = r('X03H'),
          u = r('qlrW'),
          l = r.n(u),
          c = r('5nvK'),
          s = r('PyLm'),
          p = r('0YRR'),
          f = r('SfGg');
        function d(e, t, r) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = r),
            e
          );
        }
        function E() {
          var e = (function(e, t) {
            return (
              t || (t = e.slice(0)),
              Object.freeze(
                Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
              )
            );
          })([
            '\n  mutation signup(\n    $email: String!\n    $firstName: String!\n    $lastName: String!\n    $type: Int!\n    $password: String!\n  ) {\n    signup(\n      input: {\n        email: $email\n        firstName: $firstName\n        lastName: $lastName\n        type: $type\n        password: $password\n      }\n    ) {\n      firstName\n    }\n  }\n',
          ]);
          return (
            (E = function() {
              return e;
            }),
            e
          );
        }
        (a = r('Za3l').enterModule) && a(e);
        var m,
          h,
          y = i.object().shape({
            email: i
              .string()
              .email()
              .required('Please provide your email'),
            firstName: i.string().required('Please provide your First Name'),
            lastName: i.string().required('Please provide your Last Name'),
            password: i.string().required('Please provide your password'),
          }),
          g = l()(E()),
          O = function() {
            return n.a.createElement(
              s.a,
              { size: 'large' },
              n.a.createElement(c.Mutation, { mutation: g }, function(e) {
                return n.a.createElement(
                  o.a,
                  {
                    initialValues: {
                      email: '',
                      password: '',
                      firstName: '',
                      lastName: '',
                    },
                    onSubmit: function(t) {
                      e({
                        variables: (function(e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                              a = Object.keys(r);
                            'function' == typeof Object.getOwnPropertySymbols &&
                              (a = a.concat(
                                Object.getOwnPropertySymbols(r).filter(function(
                                  e
                                ) {
                                  return Object.getOwnPropertyDescriptor(r, e)
                                    .enumerable;
                                })
                              )),
                              a.forEach(function(t) {
                                d(e, t, r[t]);
                              });
                          }
                          return e;
                        })({}, t, { type: 1 }),
                      })
                        .then(function(e) {
                          return console.log('Success', e);
                        })
                        .catch(function(e) {
                          return console.log('Error', e);
                        });
                    },
                    validationSchema: y,
                  },
                  function(e) {
                    var t = e.values,
                      r = e.touched,
                      a = e.errors,
                      _ = e.isSubmitting,
                      o = e.handleChange,
                      i = e.handleBlur,
                      u = e.handleSubmit;
                    return n.a.createElement(
                      p.a,
                      { onSubmit: u },
                      n.a.createElement(
                        p.a.FormGroup,
                        null,
                        n.a.createElement(
                          p.a.Label,
                          { htmlFor: 'email' },
                          'Email'
                        ),
                        n.a.createElement(p.a.Input, {
                          id: 'email',
                          placeholder: 'Enter your email',
                          type: 'text',
                          value: t.email,
                          onChange: o,
                          onBlur: i,
                        }),
                        n.a.createElement(
                          p.a.Feedback,
                          { show: a.email && r.email },
                          a.email
                        )
                      ),
                      n.a.createElement(
                        p.a.FormGroup,
                        null,
                        n.a.createElement(
                          p.a.Label,
                          { htmlFor: 'firstName' },
                          'First Name'
                        ),
                        n.a.createElement(p.a.Input, {
                          id: 'firstName',
                          placeholder: 'Enter your first name',
                          type: 'text',
                          value: t.firstName,
                          onChange: o,
                          onBlur: i,
                        }),
                        n.a.createElement(
                          p.a.Feedback,
                          { show: a.firstName && r.firstName },
                          a.firstName
                        )
                      ),
                      n.a.createElement(
                        p.a.FormGroup,
                        null,
                        n.a.createElement(
                          p.a.Label,
                          { htmlFor: 'lastName' },
                          'Last Name'
                        ),
                        n.a.createElement(p.a.Input, {
                          id: 'lastName',
                          placeholder: 'Enter your Last Name',
                          type: 'text',
                          value: t.lastName,
                          onChange: o,
                          onBlur: i,
                        }),
                        n.a.createElement(
                          p.a.Feedback,
                          { show: a.lastName && r.lastName },
                          a.lastName
                        )
                      ),
                      n.a.createElement(
                        p.a.FormGroup,
                        null,
                        n.a.createElement(
                          p.a.Label,
                          { htmlFor: 'password' },
                          'Password'
                        ),
                        n.a.createElement(p.a.Password, {
                          id: 'password',
                          placeholder: 'Enter your password',
                          value: t.password,
                          onChange: o,
                          onBlur: i,
                        }),
                        n.a.createElement(
                          p.a.Feedback,
                          { show: a.password && r.password },
                          a.password
                        )
                      ),
                      n.a.createElement(
                        f.b,
                        { type: 'submit', size: 'large', disabled: _ },
                        'Login'
                      )
                    );
                  }
                );
              })
            );
          },
          b = O;
        (t.a = b),
          (m = r('Za3l').default),
          (h = r('Za3l').leaveModule),
          m &&
            (m.register(
              1,
              'USER_TYPE',
              '/home/davidec/repos/healfit/healfit-web/src/pages/Auth/SignUp/index.js'
            ),
            m.register(
              y,
              'validationSchema',
              '/home/davidec/repos/healfit/healfit-web/src/pages/Auth/SignUp/index.js'
            ),
            m.register(
              g,
              'SignupMutation',
              '/home/davidec/repos/healfit/healfit-web/src/pages/Auth/SignUp/index.js'
            ),
            m.register(
              O,
              'SignUp',
              '/home/davidec/repos/healfit/healfit-web/src/pages/Auth/SignUp/index.js'
            ),
            m.register(
              b,
              'default',
              '/home/davidec/repos/healfit/healfit-web/src/pages/Auth/SignUp/index.js'
            ),
            h(e));
      }.call(this, r('Ono3')(e)));
    },
    KQAo: function(e, t, r) {
      'use strict';
      (function(e) {
        r.d(t, 'a', function() {
          return u;
        });
        var a,
          _ = r('NWgQ'),
          n = r.n(_);
        (a = r('Za3l').enterModule) && a(e);
        var o,
          i,
          u = function(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return n.a.parse(e.search, t);
          };
        (o = r('Za3l').default),
          (i = r('Za3l').leaveModule),
          o &&
            (o.register(
              u,
              'locationToString',
              '/home/davidec/repos/healfit/healfit-web/src/helpers/queryString.js'
            ),
            o.register(
              function(e) {
                return n.a.stringify(e);
              },
              'queryToString',
              '/home/davidec/repos/healfit/healfit-web/src/helpers/queryString.js'
            ),
            i(e));
      }.call(this, r('Ono3')(e)));
    },
    NAfW: function(e, t, r) {
      'use strict';
      r.r(t),
        function(e) {
          var a,
            _ = r('mXGw'),
            n = r.n(_),
            o = r('W0B4'),
            i = r.n(o),
            u = r('7+fG'),
            l = r('jf7e'),
            c = r('U8a7'),
            s = r('FNAr'),
            p = r('gEm+'),
            f = r('U62j'),
            d = r('fzck');
          (a = r('Za3l').enterModule) && a(e);
          var E = function(e) {
            var t = e.match.path;
            return n.a.createElement(
              u.a,
              null,
              n.a.createElement(l.a, {
                path: ''.concat(t, '/signin'),
                component: p.a,
              }),
              n.a.createElement(l.a, {
                path: ''.concat(t, '/signup'),
                component: s.a,
              }),
              n.a.createElement(l.a, {
                path: ''.concat(t, '/verify-account'),
                component: f.a,
              }),
              n.a.createElement(l.a, {
                path: ''.concat(t, '/logout'),
                component: d.a,
              }),
              n.a.createElement(c.a, { to: ''.concat(t, '/signin') })
            );
          };
          E.propTypes = {
            match: i.a.shape({ path: i.a.string.isRequired }).isRequired,
          };
          var m,
            h,
            y = E;
          (t.default = y),
            (m = r('Za3l').default),
            (h = r('Za3l').leaveModule),
            m &&
              (m.register(
                E,
                'AuthIndex',
                '/home/davidec/repos/healfit/healfit-web/src/pages/Auth/index.js'
              ),
              m.register(
                y,
                'default',
                '/home/davidec/repos/healfit/healfit-web/src/pages/Auth/index.js'
              ),
              h(e));
        }.call(this, r('Ono3')(e));
    },
    P2B7: function(e, t, r) {
      'use strict';
      (function(e) {
        var a,
          _ = r('mXGw'),
          n = r.n(_),
          o = r('W0B4'),
          i = r.n(o),
          u = r('UutA'),
          l = r('2y1a'),
          c = r('X03H'),
          s = r('IqpS'),
          p = r('0YRR'),
          f = r('SfGg');
        (a = r('Za3l').enterModule) && a(e);
        var d = Object(u.d)(p.a).withConfig({
            displayName: 'Form__StyledForm',
            componentId: 'cn1i03-0',
          })(['width:60%;margin:50px 0px;']),
          E = Object(u.d)(s.a).withConfig({
            displayName: 'Form__ForgotPassword',
            componentId: 'cn1i03-1',
          })(['font-size:12px;margin-bottom:15px;']),
          m = c.object().shape({
            email: c
              .string()
              .email()
              .required('Please provide your email'),
            password: c.string().required('Please provide your password'),
          }),
          h = function(e) {
            var t = e.onSubmit;
            return n.a.createElement(
              l.a,
              {
                initialValues: { email: '', password: '' },
                onSubmit: t,
                validationSchema: m,
              },
              function(e) {
                var t = e.values,
                  r = e.touched,
                  a = e.errors,
                  _ = e.isSubmitting,
                  o = e.handleChange,
                  i = e.handleBlur,
                  u = e.handleSubmit;
                return n.a.createElement(
                  d,
                  { onSubmit: u },
                  n.a.createElement(
                    p.a.FormGroup,
                    null,
                    n.a.createElement(p.a.Label, { htmlFor: 'name' }, 'Email'),
                    n.a.createElement(p.a.Input, {
                      id: 'email',
                      placeholder: 'Enter your email',
                      type: 'text',
                      value: t.email,
                      onChange: o,
                      onBlur: i,
                    }),
                    n.a.createElement(
                      p.a.Feedback,
                      { show: a.email && r.email },
                      a.email
                    )
                  ),
                  n.a.createElement(
                    p.a.FormGroup,
                    null,
                    n.a.createElement(
                      p.a.Label,
                      { htmlFor: 'password' },
                      'Password'
                    ),
                    n.a.createElement(p.a.Password, {
                      id: 'password',
                      placeholder: 'Enter your password',
                      value: t.password,
                      onChange: o,
                      onBlur: i,
                    }),
                    n.a.createElement(
                      p.a.Feedback,
                      { show: a.password && r.password },
                      a.password
                    )
                  ),
                  n.a.createElement(
                    E,
                    { to: '/forgot-password' },
                    'Forgot Password?'
                  ),
                  n.a.createElement(
                    f.b,
                    {
                      type: 'submit',
                      size: 'large',
                      color: 'primary',
                      disabled: _,
                    },
                    'Sign In'
                  )
                );
              }
            );
          };
        h.propTypes = { onSubmit: i.a.func.isRequired };
        var y,
          g,
          O = h;
        (t.a = O),
          (y = r('Za3l').default),
          (g = r('Za3l').leaveModule),
          y &&
            (y.register(
              d,
              'StyledForm',
              '/home/davidec/repos/healfit/healfit-web/src/pages/Auth/SignIn/Form.js'
            ),
            y.register(
              E,
              'ForgotPassword',
              '/home/davidec/repos/healfit/healfit-web/src/pages/Auth/SignIn/Form.js'
            ),
            y.register(
              m,
              'validationSchema',
              '/home/davidec/repos/healfit/healfit-web/src/pages/Auth/SignIn/Form.js'
            ),
            y.register(
              h,
              'SignInForm',
              '/home/davidec/repos/healfit/healfit-web/src/pages/Auth/SignIn/Form.js'
            ),
            y.register(
              O,
              'default',
              '/home/davidec/repos/healfit/healfit-web/src/pages/Auth/SignIn/Form.js'
            ),
            g(e));
      }.call(this, r('Ono3')(e)));
    },
    U62j: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      (function(module) {
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('mXGw'),
          react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          ),
          prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('W0B4'),
          prop_types__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
            prop_types__WEBPACK_IMPORTED_MODULE_1__
          ),
          react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            '5nvK'
          ),
          react_apollo__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
            react_apollo__WEBPACK_IMPORTED_MODULE_2__
          ),
          graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            'qlrW'
          ),
          graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
            graphql_tag__WEBPACK_IMPORTED_MODULE_3__
          ),
          possible_states__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            'YOt4'
          ),
          possible_states__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
            possible_states__WEBPACK_IMPORTED_MODULE_4__
          ),
          helpers_queryString__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
            'KQAo'
          ),
          uikit_blocks_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
            'PyLm'
          ),
          enterModule;
        function _typeof(e) {
          return (_typeof =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                })(e);
        }
        function _classCallCheck(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }
        function _defineProperties(e, t) {
          for (var r = 0; r < t.length; r++) {
            var a = t[r];
            (a.enumerable = a.enumerable || !1),
              (a.configurable = !0),
              'value' in a && (a.writable = !0),
              Object.defineProperty(e, a.key, a);
          }
        }
        function _createClass(e, t, r) {
          return (
            t && _defineProperties(e.prototype, t),
            r && _defineProperties(e, r),
            e
          );
        }
        function _possibleConstructorReturn(e, t) {
          return !t || ('object' !== _typeof(t) && 'function' != typeof t)
            ? _assertThisInitialized(e)
            : t;
        }
        function _getPrototypeOf(e) {
          return (_getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function _inherits(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && _setPrototypeOf(e, t);
        }
        function _setPrototypeOf(e, t) {
          return (_setPrototypeOf =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        function _assertThisInitialized(e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        }
        function _defineProperty(e, t, r) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = r),
            e
          );
        }
        function _templateObject() {
          var e = _taggedTemplateLiteral([
            '\n  mutation verifyAccount($email: String!, $token: String!) {\n    verifyAccount(input: { email: $email, token: $token })\n  }\n',
          ]);
          return (
            (_templateObject = function() {
              return e;
            }),
            e
          );
        }
        function _taggedTemplateLiteral(e, t) {
          return (
            t || (t = e.slice(0)),
            Object.freeze(
              Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
            )
          );
        }
        (enterModule = __webpack_require__('Za3l').enterModule),
          enterModule && enterModule(module);
        var VerifyAccountMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(
            _templateObject()
          ),
          VerifyAccount = (function(_Component) {
            function VerifyAccount() {
              var e, t;
              _classCallCheck(this, VerifyAccount);
              for (
                var r = arguments.length, a = new Array(r), _ = 0;
                _ < r;
                _++
              )
                a[_] = arguments[_];
              return (
                _defineProperty(
                  _assertThisInitialized(
                    _assertThisInitialized(
                      (t = _possibleConstructorReturn(
                        this,
                        (e = _getPrototypeOf(VerifyAccount)).call.apply(
                          e,
                          [this].concat(a)
                        )
                      ))
                    )
                  ),
                  'state',
                  {
                    ui: possible_states__WEBPACK_IMPORTED_MODULE_4___default()(
                      'idle',
                      'error',
                      'verified',
                      'notVerified<reason>'
                    ),
                  }
                ),
                t
              );
            }
            return (
              _inherits(VerifyAccount, _Component),
              _createClass(VerifyAccount, [
                {
                  key: 'componentDidMount',
                  value: function() {
                    var e = this,
                      t = Object(
                        helpers_queryString__WEBPACK_IMPORTED_MODULE_5__.a
                      )(this.props.location),
                      r = t.token,
                      a = t.email;
                    return r && a
                      ? this.props
                          .verifyAccount({ variables: { token: r, email: a } })
                          .then(function() {
                            return e.setState(function(e) {
                              return { ui: e.ui.toVerified() };
                            });
                          })
                          .catch(function(t) {
                            var r = t.graphQLErrors.map(function(e) {
                              return e.message;
                            });
                            e.setState(function(e) {
                              return { ui: e.ui.toNotVerified(r[0]) };
                            });
                          })
                      : this.setState(function(e) {
                          return { ui: e.ui.toError() };
                        });
                  },
                },
                {
                  key: 'render',
                  value: function() {
                    var e = this.state.ui;
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      uikit_blocks_Container__WEBPACK_IMPORTED_MODULE_6__.a,
                      { size: 'fullscreen' },
                      e.caseOf({
                        idle: function() {
                          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'h1',
                            null,
                            'we are verifing your account'
                          );
                        },
                        error: function() {
                          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'h1',
                            null,
                            'THe path is wrong'
                          );
                        },
                        verified: function() {
                          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'h1',
                            null,
                            'Verified!!'
                          );
                        },
                        notVerified: function(e) {
                          var t = e.reason;
                          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'h1',
                            null,
                            t,
                            ' :('
                          );
                        },
                      })
                    );
                  },
                },
                {
                  key: '__reactstandin__regenerateByEval',
                  value: function __reactstandin__regenerateByEval(key, code) {
                    this[key] = eval(code);
                  },
                },
              ]),
              VerifyAccount
            );
          })(react__WEBPACK_IMPORTED_MODULE_0__.Component);
        _defineProperty(VerifyAccount, 'propTypes', {
          location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
            search:
              prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
                .isRequired,
          }).isRequired,
          verifyAccount:
            prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
        });
        var _default = Object(
            react_apollo__WEBPACK_IMPORTED_MODULE_2__.graphql
          )(VerifyAccountMutation, { name: 'verifyAccount' })(VerifyAccount),
          reactHotLoader,
          leaveModule;
        (__webpack_exports__.a = _default),
          (reactHotLoader = __webpack_require__('Za3l').default),
          (leaveModule = __webpack_require__('Za3l').leaveModule),
          reactHotLoader &&
            (reactHotLoader.register(
              VerifyAccountMutation,
              'VerifyAccountMutation',
              '/home/davidec/repos/healfit/healfit-web/src/pages/Auth/VerifyAccount/index.js'
            ),
            reactHotLoader.register(
              VerifyAccount,
              'VerifyAccount',
              '/home/davidec/repos/healfit/healfit-web/src/pages/Auth/VerifyAccount/index.js'
            ),
            reactHotLoader.register(
              _default,
              'default',
              '/home/davidec/repos/healfit/healfit-web/src/pages/Auth/VerifyAccount/index.js'
            ),
            leaveModule(module));
      }.call(this, __webpack_require__('Ono3')(module)));
    },
    fzck: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      (function(module) {
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('mXGw'),
          react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          ),
          prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('W0B4'),
          prop_types__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
            prop_types__WEBPACK_IMPORTED_MODULE_1__
          ),
          app_apollo_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            'Ps6s'
          ),
          enterModule;
        function _typeof(e) {
          return (_typeof =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                })(e);
        }
        function _classCallCheck(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }
        function _defineProperties(e, t) {
          for (var r = 0; r < t.length; r++) {
            var a = t[r];
            (a.enumerable = a.enumerable || !1),
              (a.configurable = !0),
              'value' in a && (a.writable = !0),
              Object.defineProperty(e, a.key, a);
          }
        }
        function _createClass(e, t, r) {
          return (
            t && _defineProperties(e.prototype, t),
            r && _defineProperties(e, r),
            e
          );
        }
        function _possibleConstructorReturn(e, t) {
          return !t || ('object' !== _typeof(t) && 'function' != typeof t)
            ? _assertThisInitialized(e)
            : t;
        }
        function _assertThisInitialized(e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        }
        function _getPrototypeOf(e) {
          return (_getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function _inherits(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && _setPrototypeOf(e, t);
        }
        function _setPrototypeOf(e, t) {
          return (_setPrototypeOf =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        function _defineProperty(e, t, r) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = r),
            e
          );
        }
        (enterModule = __webpack_require__('Za3l').enterModule),
          enterModule && enterModule(module);
        var Logout = (function(_Component) {
          function Logout() {
            return (
              _classCallCheck(this, Logout),
              _possibleConstructorReturn(
                this,
                _getPrototypeOf(Logout).apply(this, arguments)
              )
            );
          }
          return (
            _inherits(Logout, _Component),
            _createClass(Logout, [
              {
                key: 'componentDidMount',
                value: function() {
                  this.props.clearUser();
                },
              },
              {
                key: 'render',
                value: function() {
                  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'h1',
                    null,
                    'Hope to see you back soon :)!'
                  );
                },
              },
              {
                key: '__reactstandin__regenerateByEval',
                value: function __reactstandin__regenerateByEval(key, code) {
                  this[key] = eval(code);
                },
              },
            ]),
            Logout
          );
        })(react__WEBPACK_IMPORTED_MODULE_0__.Component);
        _defineProperty(Logout, 'propTypes', {
          clearUser:
            prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
        });
        var _default = Object(app_apollo_auth__WEBPACK_IMPORTED_MODULE_2__.c)(
            Logout
          ),
          reactHotLoader,
          leaveModule;
        (__webpack_exports__.a = _default),
          (reactHotLoader = __webpack_require__('Za3l').default),
          (leaveModule = __webpack_require__('Za3l').leaveModule),
          reactHotLoader &&
            (reactHotLoader.register(
              Logout,
              'Logout',
              '/home/davidec/repos/healfit/healfit-web/src/pages/Auth/Logout/index.js'
            ),
            reactHotLoader.register(
              _default,
              'default',
              '/home/davidec/repos/healfit/healfit-web/src/pages/Auth/Logout/index.js'
            ),
            leaveModule(module));
      }.call(this, __webpack_require__('Ono3')(module)));
    },
    'gEm+': function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      (function(module) {
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('mXGw'),
          react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          ),
          prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('W0B4'),
          prop_types__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
            prop_types__WEBPACK_IMPORTED_MODULE_1__
          ),
          react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            'U8a7'
          ),
          styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            'UutA'
          ),
          graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            'qlrW'
          ),
          graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
            graphql_tag__WEBPACK_IMPORTED_MODULE_4__
          ),
          possible_states__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
            'YOt4'
          ),
          possible_states__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
            possible_states__WEBPACK_IMPORTED_MODULE_5__
          ),
          react_apollo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
            '5nvK'
          ),
          react_apollo__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
            react_apollo__WEBPACK_IMPORTED_MODULE_6__
          ),
          app_apollo_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
            'Ps6s'
          ),
          uikit_elements_Heading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
            'IiU9'
          ),
          uikit_elements_Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
            'IqpS'
          ),
          _Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('xbZW'),
          _Form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('P2B7'),
          enterModule;
        function _typeof(e) {
          return (_typeof =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                })(e);
        }
        function asyncGeneratorStep(e, t, r, a, _, n, o) {
          try {
            var i = e[n](o),
              u = i.value;
          } catch (e) {
            return void r(e);
          }
          i.done ? t(u) : Promise.resolve(u).then(a, _);
        }
        function _asyncToGenerator(e) {
          return function() {
            var t = this,
              r = arguments;
            return new Promise(function(a, _) {
              var n = e.apply(t, r);
              function o(e) {
                asyncGeneratorStep(n, a, _, o, i, 'next', e);
              }
              function i(e) {
                asyncGeneratorStep(n, a, _, o, i, 'throw', e);
              }
              o(void 0);
            });
          };
        }
        function _classCallCheck(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }
        function _defineProperties(e, t) {
          for (var r = 0; r < t.length; r++) {
            var a = t[r];
            (a.enumerable = a.enumerable || !1),
              (a.configurable = !0),
              'value' in a && (a.writable = !0),
              Object.defineProperty(e, a.key, a);
          }
        }
        function _createClass(e, t, r) {
          return (
            t && _defineProperties(e.prototype, t),
            r && _defineProperties(e, r),
            e
          );
        }
        function _possibleConstructorReturn(e, t) {
          return !t || ('object' !== _typeof(t) && 'function' != typeof t)
            ? _assertThisInitialized(e)
            : t;
        }
        function _getPrototypeOf(e) {
          return (_getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function _inherits(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && _setPrototypeOf(e, t);
        }
        function _setPrototypeOf(e, t) {
          return (_setPrototypeOf =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        function _assertThisInitialized(e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        }
        function _defineProperty(e, t, r) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = r),
            e
          );
        }
        function _templateObject() {
          var e = _taggedTemplateLiteral([
            '\n  mutation login($email: String!, $password: String!) {\n    login(input: { email: $email, password: $password }) {\n      token\n      account {\n        firstName\n        lastName\n      }\n    }\n  }\n',
          ]);
          return (
            (_templateObject = function() {
              return e;
            }),
            e
          );
        }
        function _taggedTemplateLiteral(e, t) {
          return (
            t || (t = e.slice(0)),
            Object.freeze(
              Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
            )
          );
        }
        (enterModule = __webpack_require__('Za3l').enterModule),
          enterModule && enterModule(module);
        var Frame = styled_components__WEBPACK_IMPORTED_MODULE_3__.d.div.withConfig(
            { displayName: 'SignIn__Frame', componentId: 'm8un9q-0' }
          )([
            'width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;',
          ]),
          Text = styled_components__WEBPACK_IMPORTED_MODULE_3__.d.p.withConfig({
            displayName: 'SignIn__Text',
            componentId: 'm8un9q-1',
          })(['width:100%;font-size:12px;text-align:center;']),
          LoginMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(
            _templateObject()
          ),
          SignIn = (function(_Component) {
            function SignIn() {
              var e, t;
              _classCallCheck(this, SignIn);
              for (
                var r = arguments.length, a = new Array(r), _ = 0;
                _ < r;
                _++
              )
                a[_] = arguments[_];
              return (
                _defineProperty(
                  _assertThisInitialized(
                    _assertThisInitialized(
                      (t = _possibleConstructorReturn(
                        this,
                        (e = _getPrototypeOf(SignIn)).call.apply(
                          e,
                          [this].concat(a)
                        )
                      ))
                    )
                  ),
                  'state',
                  {
                    ui: possible_states__WEBPACK_IMPORTED_MODULE_5___default()(
                      'idle',
                      'error<reason>',
                      'authenticated'
                    ),
                  }
                ),
                _defineProperty(
                  _assertThisInitialized(_assertThisInitialized(t)),
                  'onHandleSubmit',
                  (function() {
                    var e = _asyncToGenerator(
                      regeneratorRuntime.mark(function e(r) {
                        var a, _, n, o;
                        return regeneratorRuntime.wrap(
                          function(e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (e.next = 3),
                                    t.props.login({ variables: r })
                                  );
                                case 3:
                                  return (
                                    (a = e.sent),
                                    (_ = a.data.login),
                                    (n = _.account),
                                    (o = _.token),
                                    (e.next = 7),
                                    t.props.setCurrentUser({
                                      variables: { user: n },
                                    })
                                  );
                                case 7:
                                  return (
                                    localStorage.setItem('healfit:token', o),
                                    e.abrupt(
                                      'return',
                                      t.setState(function(e) {
                                        return { ui: e.ui.toAuthenticated() };
                                      })
                                    )
                                  );
                                case 11:
                                  return (
                                    (e.prev = 11),
                                    (e.t0 = e.catch(0)),
                                    e.abrupt(
                                      'return',
                                      t.setState(function(t) {
                                        return { ui: t.ui.toError(e.t0) };
                                      })
                                    )
                                  );
                                case 14:
                                case 'end':
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [[0, 11]]
                        );
                      })
                    );
                    return function(t) {
                      return e.apply(this, arguments);
                    };
                  })()
                ),
                t
              );
            }
            return (
              _inherits(SignIn, _Component),
              _createClass(SignIn, [
                {
                  key: 'componentDidMount',
                  value: function() {
                    this.props.isAuthenticated &&
                      this.setState(function(e) {
                        return { ui: e.ui.toAuthenticated() };
                      });
                  },
                },
                {
                  key: 'render',
                  value: function() {
                    var e = this.state.ui;
                    return 'authenticated' === e.current()
                      ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          react_router_dom__WEBPACK_IMPORTED_MODULE_2__.a,
                          { to: '/dashboard' }
                        )
                      : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _Layout__WEBPACK_IMPORTED_MODULE_10__.a,
                          null,
                          e.whenError(function() {
                            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              'h1',
                              null,
                              'Error'
                            );
                          }),
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            Frame,
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              uikit_elements_Heading__WEBPACK_IMPORTED_MODULE_8__.a,
                              { level: 'title' },
                              'Healfit'
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              _Form__WEBPACK_IMPORTED_MODULE_11__.a,
                              { onSubmit: this.handleSubmit }
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              Text,
                              null,
                              'Do you not have an account yet?',
                              ' ',
                              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                uikit_elements_Link__WEBPACK_IMPORTED_MODULE_9__.a,
                                {
                                  to: '/auth/signup',
                                  style: { fontWeight: 'bold' },
                                },
                                'Sign Up'
                              )
                            )
                          )
                        );
                  },
                },
                {
                  key: '__reactstandin__regenerateByEval',
                  value: function __reactstandin__regenerateByEval(key, code) {
                    this[key] = eval(code);
                  },
                },
              ]),
              SignIn
            );
          })(react__WEBPACK_IMPORTED_MODULE_0__.Component);
        _defineProperty(SignIn, 'propTypes', {
          isAuthenticated:
            prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
          login:
            prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
          setCurrentUser:
            prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
        });
        var _default = Object(
            react_apollo__WEBPACK_IMPORTED_MODULE_6__.compose
          )(
            Object(react_apollo__WEBPACK_IMPORTED_MODULE_6__.graphql)(
              LoginMutation,
              { name: 'login' }
            ),
            app_apollo_auth__WEBPACK_IMPORTED_MODULE_7__.c
          )(SignIn),
          reactHotLoader,
          leaveModule;
        (__webpack_exports__.a = _default),
          (reactHotLoader = __webpack_require__('Za3l').default),
          (leaveModule = __webpack_require__('Za3l').leaveModule),
          reactHotLoader &&
            (reactHotLoader.register(
              Frame,
              'Frame',
              '/home/davidec/repos/healfit/healfit-web/src/pages/Auth/SignIn/index.js'
            ),
            reactHotLoader.register(
              Text,
              'Text',
              '/home/davidec/repos/healfit/healfit-web/src/pages/Auth/SignIn/index.js'
            ),
            reactHotLoader.register(
              LoginMutation,
              'LoginMutation',
              '/home/davidec/repos/healfit/healfit-web/src/pages/Auth/SignIn/index.js'
            ),
            reactHotLoader.register(
              SignIn,
              'SignIn',
              '/home/davidec/repos/healfit/healfit-web/src/pages/Auth/SignIn/index.js'
            ),
            reactHotLoader.register(
              _default,
              'default',
              '/home/davidec/repos/healfit/healfit-web/src/pages/Auth/SignIn/index.js'
            ),
            leaveModule(module));
      }.call(this, __webpack_require__('Ono3')(module)));
    },
    xbZW: function(e, t, r) {
      'use strict';
      (function(e) {
        var a,
          _ = r('mXGw'),
          n = r.n(_),
          o = r('W0B4'),
          i = r.n(o),
          u = r('UutA');
        (a = r('Za3l').enterModule) && a(e);
        var l = u.d.div.withConfig({
            displayName: 'Layout__Container',
            componentId: 'wayur6-0',
          })(['height:100vh;width:100vw;display:flex;flex-direction:row;']),
          c = u.d.div.withConfig({
            displayName: 'Layout__LeftSide',
            componentId: 'wayur6-1',
          })(['height:100vh;flex:7;background-image:url(', ');'], r('9lQ0')),
          s = u.d.div.withConfig({
            displayName: 'Layout__RightSide',
            componentId: 'wayur6-2',
          })([
            'height:100vh;flex:4;display:flex;align-items:center;justify-content:center;',
          ]),
          p = function(e) {
            var t = e.children;
            return n.a.createElement(
              l,
              null,
              n.a.createElement(c, null),
              n.a.createElement(s, null, t)
            );
          };
        p.propTypes = { children: i.a.any.isRequired };
        var f,
          d,
          E = p;
        (t.a = E),
          (f = r('Za3l').default),
          (d = r('Za3l').leaveModule),
          f &&
            (f.register(
              l,
              'Container',
              '/home/davidec/repos/healfit/healfit-web/src/pages/Auth/SignIn/Layout.js'
            ),
            f.register(
              c,
              'LeftSide',
              '/home/davidec/repos/healfit/healfit-web/src/pages/Auth/SignIn/Layout.js'
            ),
            f.register(
              s,
              'RightSide',
              '/home/davidec/repos/healfit/healfit-web/src/pages/Auth/SignIn/Layout.js'
            ),
            f.register(
              p,
              'Layout',
              '/home/davidec/repos/healfit/healfit-web/src/pages/Auth/SignIn/Layout.js'
            ),
            f.register(
              E,
              'default',
              '/home/davidec/repos/healfit/healfit-web/src/pages/Auth/SignIn/Layout.js'
            ),
            d(e));
      }.call(this, r('Ono3')(e)));
    },
  },
]);
