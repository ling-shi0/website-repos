globalThis.requirejs(
  ["https://cdn.bootcdn.net/ajax/libs/antd/5.9.0/antd.min.js"],
  () => {
    /*! For license information please see bundle.js.LICENSE.txt */
    (() => {
      var e,
        t,
        n = {
          741: (e, t, n) => {
            "use strict";
            n.d(t, { A: () => l });
            var r = n(505),
              o = n.n(r),
              a = n(114),
              i = n.n(a)()(o());
            i.push([
              e.id,
              ".Az326SEzuWPD2QAphXRe{width:100%;padding-top:10px}.Az326SEzuWPD2QAphXRe a{text-decoration:none}",
              "",
            ]),
              (i.locals = { menuWrap: "Az326SEzuWPD2QAphXRe" });
            const l = i;
          },
          490: (e, t, n) => {
            "use strict";
            n.d(t, { A: () => l });
            var r = n(505),
              o = n.n(r),
              a = n(114),
              i = n.n(a)()(o());
            i.push([
              e.id,
              ".wQ5SkHtlxsRJ0xqE6VdP{margin:0 auto 12px;display:block;width:80%;height:30px;background:var(--primary-color-2, white);text-align:center;line-height:30px}",
              "",
            ]),
              (i.locals = { menuItem: "wQ5SkHtlxsRJ0xqE6VdP" });
            const l = i;
          },
          349: (e, t, n) => {
            "use strict";
            n.d(t, { A: () => d });
            var r = n(505),
              o = n.n(r),
              a = n(114),
              i = n.n(a),
              l = n(777),
              u = n.n(l),
              c = new URL(n(553), n.b),
              s = i()(o()),
              f = u()(c);
            s.push([
              e.id,
              `.YNpmNUNi5nBQ_D2ilf45{margin:0 !important;display:flex;box-sizing:border-box;width:100vw;height:100vh;padding:12px}.YNpmNUNi5nBQ_D2ilf45::before{position:absolute;left:0;top:-2px;z-index:-999;display:block;width:100vw;height:100vh;content:"";background:url(${f});background-size:100vw 100vh}.YNpmNUNi5nBQ_D2ilf45 .y9ccIX2UbGborDRxasNM{margin-right:20px;width:var(--workbench-menu-width, 120px);height:100%}.YNpmNUNi5nBQ_D2ilf45 .y9ccIX2UbGborDRxasNM .h_e1YppN61iwWNpPuad9{display:flex;justify-content:center;align-items:center;height:var(--workbench-tabs-height, 60px)}.YNpmNUNi5nBQ_D2ilf45 .y9ccIX2UbGborDRxasNM .kNx_lRCaDjekBPKO3HcR{margin-top:20px;width:var(--workbench-menu-width, 120px);height:calc(100% - var(--workbench-tabs-height, 60px) - 20px)}.YNpmNUNi5nBQ_D2ilf45 .ifmAgn4gqf0uKytaDVJ4{width:calc(100% - var(--workbench-menu-width, 120px));height:100%}.YNpmNUNi5nBQ_D2ilf45 .ifmAgn4gqf0uKytaDVJ4 .KggE_i2pwfmwsJowlDYa{height:var(--workbench-tabs-height, 60px)}.YNpmNUNi5nBQ_D2ilf45 .ifmAgn4gqf0uKytaDVJ4 .eKEOZfJB0YgzV2LeF3xY{margin-top:20px;width:100%;height:calc(100% - var(--workbench-tabs-height, 60px) - 20px)}.YNpmNUNi5nBQ_D2ilf45 .IKNVaYehfXroSYhbWx3O{background:var(--primary-color-4, rgba(255, 255, 255, 0.5));border-radius:var(--section-border-radius, 8px);box-shadow:var(--section-shadow)}`,
              "",
            ]),
              (s.locals = {
                mainPage: "YNpmNUNi5nBQ_D2ilf45",
                leftPane: "y9ccIX2UbGborDRxasNM",
                logo: "h_e1YppN61iwWNpPuad9",
                menu: "kNx_lRCaDjekBPKO3HcR",
                rightPane: "ifmAgn4gqf0uKytaDVJ4",
                tabs: "KggE_i2pwfmwsJowlDYa",
                contentContainer: "eKEOZfJB0YgzV2LeF3xY",
                section: "IKNVaYehfXroSYhbWx3O",
              });
            const d = s;
          },
          114: (e) => {
            "use strict";
            e.exports = function (e) {
              var t = [];
              return (
                (t.toString = function () {
                  return this.map(function (t) {
                    var n = "",
                      r = void 0 !== t[5];
                    return (
                      t[4] && (n += "@supports (".concat(t[4], ") {")),
                      t[2] && (n += "@media ".concat(t[2], " {")),
                      r &&
                        (n += "@layer".concat(
                          t[5].length > 0 ? " ".concat(t[5]) : "",
                          " {"
                        )),
                      (n += e(t)),
                      r && (n += "}"),
                      t[2] && (n += "}"),
                      t[4] && (n += "}"),
                      n
                    );
                  }).join("");
                }),
                (t.i = function (e, n, r, o, a) {
                  "string" == typeof e && (e = [[null, e, void 0]]);
                  var i = {};
                  if (r)
                    for (var l = 0; l < this.length; l++) {
                      var u = this[l][0];
                      null != u && (i[u] = !0);
                    }
                  for (var c = 0; c < e.length; c++) {
                    var s = [].concat(e[c]);
                    (r && i[s[0]]) ||
                      (void 0 !== a &&
                        (void 0 === s[5] ||
                          (s[1] = "@layer"
                            .concat(
                              s[5].length > 0 ? " ".concat(s[5]) : "",
                              " {"
                            )
                            .concat(s[1], "}")),
                        (s[5] = a)),
                      n &&
                        (s[2]
                          ? ((s[1] = "@media "
                              .concat(s[2], " {")
                              .concat(s[1], "}")),
                            (s[2] = n))
                          : (s[2] = n)),
                      o &&
                        (s[4]
                          ? ((s[1] = "@supports ("
                              .concat(s[4], ") {")
                              .concat(s[1], "}")),
                            (s[4] = o))
                          : (s[4] = "".concat(o))),
                      t.push(s));
                  }
                }),
                t
              );
            };
          },
          777: (e) => {
            "use strict";
            e.exports = function (e, t) {
              return (
                t || (t = {}),
                e
                  ? ((e = String(e.__esModule ? e.default : e)),
                    /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
                    t.hash && (e += t.hash),
                    /["'() \t\n]|(%20)/.test(e) || t.needQuotes
                      ? '"'.concat(
                          e.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
                          '"'
                        )
                      : e)
                  : e
              );
            };
          },
          505: (e) => {
            "use strict";
            e.exports = function (e) {
              return e[1];
            };
          },
          246: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => r });
            const r =
              n.p + "assets/default_ea8a0608412f9f09aeb3909d44b385f5.png";
          },
          96: (e, t, n) => {
            "use strict";
            var r = n(508);
            function o() {}
            function a() {}
            (a.resetWarningCache = o),
              (e.exports = function () {
                function e(e, t, n, o, a, i) {
                  if (i !== r) {
                    var l = new Error(
                      "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                    );
                    throw ((l.name = "Invariant Violation"), l);
                  }
                }
                function t() {
                  return e;
                }
                e.isRequired = e;
                var n = {
                  array: e,
                  bigint: e,
                  bool: e,
                  func: e,
                  number: e,
                  object: e,
                  string: e,
                  symbol: e,
                  any: e,
                  arrayOf: t,
                  element: e,
                  elementType: e,
                  instanceOf: t,
                  node: e,
                  objectOf: t,
                  oneOf: t,
                  oneOfType: t,
                  shape: t,
                  exact: t,
                  checkPropTypes: a,
                  resetWarningCache: o,
                };
                return (n.PropTypes = n), n;
              });
          },
          518: (e, t, n) => {
            e.exports = n(96)();
          },
          508: (e) => {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
          },
          56: (e, t, n) => {
            "use strict";
            var r = n(372),
              o = n(68);
            function a(e) {
              for (
                var t =
                    "https://reactjs.org/docs/error-decoder.html?invariant=" +
                    e,
                  n = 1;
                n < arguments.length;
                n++
              )
                t += "&args[]=" + encodeURIComponent(arguments[n]);
              return (
                "Minified React error #" +
                e +
                "; visit " +
                t +
                " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
              );
            }
            var i = new Set(),
              l = {};
            function u(e, t) {
              c(e, t), c(e + "Capture", t);
            }
            function c(e, t) {
              for (l[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
            }
            var s = !(
                "undefined" == typeof window ||
                void 0 === window.document ||
                void 0 === window.document.createElement
              ),
              f = Object.prototype.hasOwnProperty,
              d =
                /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
              p = {},
              h = {};
            function m(e, t, n, r, o, a, i) {
              (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
                (this.attributeName = r),
                (this.attributeNamespace = o),
                (this.mustUseProperty = n),
                (this.propertyName = e),
                (this.type = t),
                (this.sanitizeURL = a),
                (this.removeEmptyString = i);
            }
            var v = {};
            "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
              .split(" ")
              .forEach(function (e) {
                v[e] = new m(e, 0, !1, e, null, !1, !1);
              }),
              [
                ["acceptCharset", "accept-charset"],
                ["className", "class"],
                ["htmlFor", "for"],
                ["httpEquiv", "http-equiv"],
              ].forEach(function (e) {
                var t = e[0];
                v[t] = new m(t, 1, !1, e[1], null, !1, !1);
              }),
              ["contentEditable", "draggable", "spellCheck", "value"].forEach(
                function (e) {
                  v[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
                }
              ),
              [
                "autoReverse",
                "externalResourcesRequired",
                "focusable",
                "preserveAlpha",
              ].forEach(function (e) {
                v[e] = new m(e, 2, !1, e, null, !1, !1);
              }),
              "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
                .split(" ")
                .forEach(function (e) {
                  v[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
                }),
              ["checked", "multiple", "muted", "selected"].forEach(function (
                e
              ) {
                v[e] = new m(e, 3, !0, e, null, !1, !1);
              }),
              ["capture", "download"].forEach(function (e) {
                v[e] = new m(e, 4, !1, e, null, !1, !1);
              }),
              ["cols", "rows", "size", "span"].forEach(function (e) {
                v[e] = new m(e, 6, !1, e, null, !1, !1);
              }),
              ["rowSpan", "start"].forEach(function (e) {
                v[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
              });
            var y = /[\-:]([a-z])/g;
            function g(e) {
              return e[1].toUpperCase();
            }
            function b(e, t, n, r) {
              var o = v.hasOwnProperty(t) ? v[t] : null;
              (null !== o
                ? 0 !== o.type
                : r ||
                  !(2 < t.length) ||
                  ("o" !== t[0] && "O" !== t[0]) ||
                  ("n" !== t[1] && "N" !== t[1])) &&
                ((function (e, t, n, r) {
                  if (
                    null == t ||
                    (function (e, t, n, r) {
                      if (null !== n && 0 === n.type) return !1;
                      switch (typeof t) {
                        case "function":
                        case "symbol":
                          return !0;
                        case "boolean":
                          return (
                            !r &&
                            (null !== n
                              ? !n.acceptsBooleans
                              : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                                "aria-" !== e)
                          );
                        default:
                          return !1;
                      }
                    })(e, t, n, r)
                  )
                    return !0;
                  if (r) return !1;
                  if (null !== n)
                    switch (n.type) {
                      case 3:
                        return !t;
                      case 4:
                        return !1 === t;
                      case 5:
                        return isNaN(t);
                      case 6:
                        return isNaN(t) || 1 > t;
                    }
                  return !1;
                })(t, n, o, r) && (n = null),
                r || null === o
                  ? (function (e) {
                      return (
                        !!f.call(h, e) ||
                        (!f.call(p, e) &&
                          (d.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                      );
                    })(t) &&
                    (null === n
                      ? e.removeAttribute(t)
                      : e.setAttribute(t, "" + n))
                  : o.mustUseProperty
                  ? (e[o.propertyName] = null === n ? 3 !== o.type && "" : n)
                  : ((t = o.attributeName),
                    (r = o.attributeNamespace),
                    null === n
                      ? e.removeAttribute(t)
                      : ((n =
                          3 === (o = o.type) || (4 === o && !0 === n)
                            ? ""
                            : "" + n),
                        r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
            }
            "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
              .split(" ")
              .forEach(function (e) {
                var t = e.replace(y, g);
                v[t] = new m(t, 1, !1, e, null, !1, !1);
              }),
              "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
                .split(" ")
                .forEach(function (e) {
                  var t = e.replace(y, g);
                  v[t] = new m(
                    t,
                    1,
                    !1,
                    e,
                    "http://www.w3.org/1999/xlink",
                    !1,
                    !1
                  );
                }),
              ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
                var t = e.replace(y, g);
                v[t] = new m(
                  t,
                  1,
                  !1,
                  e,
                  "http://www.w3.org/XML/1998/namespace",
                  !1,
                  !1
                );
              }),
              ["tabIndex", "crossOrigin"].forEach(function (e) {
                v[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
              }),
              (v.xlinkHref = new m(
                "xlinkHref",
                1,
                !1,
                "xlink:href",
                "http://www.w3.org/1999/xlink",
                !0,
                !1
              )),
              ["src", "href", "action", "formAction"].forEach(function (e) {
                v[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
              });
            var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
              E = Symbol.for("react.element"),
              S = Symbol.for("react.portal"),
              x = Symbol.for("react.fragment"),
              _ = Symbol.for("react.strict_mode"),
              k = Symbol.for("react.profiler"),
              P = Symbol.for("react.provider"),
              C = Symbol.for("react.context"),
              O = Symbol.for("react.forward_ref"),
              L = Symbol.for("react.suspense"),
              R = Symbol.for("react.suspense_list"),
              T = Symbol.for("react.memo"),
              N = Symbol.for("react.lazy");
            Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
            var D = Symbol.for("react.offscreen");
            Symbol.for("react.legacy_hidden"),
              Symbol.for("react.cache"),
              Symbol.for("react.tracing_marker");
            var j = Symbol.iterator;
            function M(e) {
              return null === e || "object" != typeof e
                ? null
                : "function" == typeof (e = (j && e[j]) || e["@@iterator"])
                ? e
                : null;
            }
            var U,
              I = Object.assign;
            function A(e) {
              if (void 0 === U)
                try {
                  throw Error();
                } catch (e) {
                  var t = e.stack.trim().match(/\n( *(at )?)/);
                  U = (t && t[1]) || "";
                }
              return "\n" + U + e;
            }
            var W = !1;
            function z(e, t) {
              if (!e || W) return "";
              W = !0;
              var n = Error.prepareStackTrace;
              Error.prepareStackTrace = void 0;
              try {
                if (t)
                  if (
                    ((t = function () {
                      throw Error();
                    }),
                    Object.defineProperty(t.prototype, "props", {
                      set: function () {
                        throw Error();
                      },
                    }),
                    "object" == typeof Reflect && Reflect.construct)
                  ) {
                    try {
                      Reflect.construct(t, []);
                    } catch (e) {
                      var r = e;
                    }
                    Reflect.construct(e, [], t);
                  } else {
                    try {
                      t.call();
                    } catch (e) {
                      r = e;
                    }
                    e.call(t.prototype);
                  }
                else {
                  try {
                    throw Error();
                  } catch (e) {
                    r = e;
                  }
                  e();
                }
              } catch (t) {
                if (t && r && "string" == typeof t.stack) {
                  for (
                    var o = t.stack.split("\n"),
                      a = r.stack.split("\n"),
                      i = o.length - 1,
                      l = a.length - 1;
                    1 <= i && 0 <= l && o[i] !== a[l];

                  )
                    l--;
                  for (; 1 <= i && 0 <= l; i--, l--)
                    if (o[i] !== a[l]) {
                      if (1 !== i || 1 !== l)
                        do {
                          if ((i--, 0 > --l || o[i] !== a[l])) {
                            var u = "\n" + o[i].replace(" at new ", " at ");
                            return (
                              e.displayName &&
                                u.includes("<anonymous>") &&
                                (u = u.replace("<anonymous>", e.displayName)),
                              u
                            );
                          }
                        } while (1 <= i && 0 <= l);
                      break;
                    }
                }
              } finally {
                (W = !1), (Error.prepareStackTrace = n);
              }
              return (e = e ? e.displayName || e.name : "") ? A(e) : "";
            }
            function F(e) {
              switch (e.tag) {
                case 5:
                  return A(e.type);
                case 16:
                  return A("Lazy");
                case 13:
                  return A("Suspense");
                case 19:
                  return A("SuspenseList");
                case 0:
                case 2:
                case 15:
                  return z(e.type, !1);
                case 11:
                  return z(e.type.render, !1);
                case 1:
                  return z(e.type, !0);
                default:
                  return "";
              }
            }
            function B(e) {
              if (null == e) return null;
              if ("function" == typeof e)
                return e.displayName || e.name || null;
              if ("string" == typeof e) return e;
              switch (e) {
                case x:
                  return "Fragment";
                case S:
                  return "Portal";
                case k:
                  return "Profiler";
                case _:
                  return "StrictMode";
                case L:
                  return "Suspense";
                case R:
                  return "SuspenseList";
              }
              if ("object" == typeof e)
                switch (e.$$typeof) {
                  case C:
                    return (e.displayName || "Context") + ".Consumer";
                  case P:
                    return (e._context.displayName || "Context") + ".Provider";
                  case O:
                    var t = e.render;
                    return (
                      (e = e.displayName) ||
                        (e =
                          "" !== (e = t.displayName || t.name || "")
                            ? "ForwardRef(" + e + ")"
                            : "ForwardRef"),
                      e
                    );
                  case T:
                    return null !== (t = e.displayName || null)
                      ? t
                      : B(e.type) || "Memo";
                  case N:
                    (t = e._payload), (e = e._init);
                    try {
                      return B(e(t));
                    } catch (e) {}
                }
              return null;
            }
            function H(e) {
              var t = e.type;
              switch (e.tag) {
                case 24:
                  return "Cache";
                case 9:
                  return (t.displayName || "Context") + ".Consumer";
                case 10:
                  return (t._context.displayName || "Context") + ".Provider";
                case 18:
                  return "DehydratedFragment";
                case 11:
                  return (
                    (e = (e = t.render).displayName || e.name || ""),
                    t.displayName ||
                      ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
                  );
                case 7:
                  return "Fragment";
                case 5:
                  return t;
                case 4:
                  return "Portal";
                case 3:
                  return "Root";
                case 6:
                  return "Text";
                case 16:
                  return B(t);
                case 8:
                  return t === _ ? "StrictMode" : "Mode";
                case 22:
                  return "Offscreen";
                case 12:
                  return "Profiler";
                case 21:
                  return "Scope";
                case 13:
                  return "Suspense";
                case 19:
                  return "SuspenseList";
                case 25:
                  return "TracingMarker";
                case 1:
                case 0:
                case 17:
                case 2:
                case 14:
                case 15:
                  if ("function" == typeof t)
                    return t.displayName || t.name || null;
                  if ("string" == typeof t) return t;
              }
              return null;
            }
            function $(e) {
              switch (typeof e) {
                case "boolean":
                case "number":
                case "string":
                case "undefined":
                case "object":
                  return e;
                default:
                  return "";
              }
            }
            function V(e) {
              var t = e.type;
              return (
                (e = e.nodeName) &&
                "input" === e.toLowerCase() &&
                ("checkbox" === t || "radio" === t)
              );
            }
            function J(e) {
              e._valueTracker ||
                (e._valueTracker = (function (e) {
                  var t = V(e) ? "checked" : "value",
                    n = Object.getOwnPropertyDescriptor(
                      e.constructor.prototype,
                      t
                    ),
                    r = "" + e[t];
                  if (
                    !e.hasOwnProperty(t) &&
                    void 0 !== n &&
                    "function" == typeof n.get &&
                    "function" == typeof n.set
                  ) {
                    var o = n.get,
                      a = n.set;
                    return (
                      Object.defineProperty(e, t, {
                        configurable: !0,
                        get: function () {
                          return o.call(this);
                        },
                        set: function (e) {
                          (r = "" + e), a.call(this, e);
                        },
                      }),
                      Object.defineProperty(e, t, { enumerable: n.enumerable }),
                      {
                        getValue: function () {
                          return r;
                        },
                        setValue: function (e) {
                          r = "" + e;
                        },
                        stopTracking: function () {
                          (e._valueTracker = null), delete e[t];
                        },
                      }
                    );
                  }
                })(e));
            }
            function Q(e) {
              if (!e) return !1;
              var t = e._valueTracker;
              if (!t) return !0;
              var n = t.getValue(),
                r = "";
              return (
                e && (r = V(e) ? (e.checked ? "true" : "false") : e.value),
                (e = r) !== n && (t.setValue(e), !0)
              );
            }
            function q(e) {
              if (
                void 0 ===
                (e = e || ("undefined" != typeof document ? document : void 0))
              )
                return null;
              try {
                return e.activeElement || e.body;
              } catch (t) {
                return e.body;
              }
            }
            function Y(e, t) {
              var n = t.checked;
              return I({}, t, {
                defaultChecked: void 0,
                defaultValue: void 0,
                value: void 0,
                checked: null != n ? n : e._wrapperState.initialChecked,
              });
            }
            function K(e, t) {
              var n = null == t.defaultValue ? "" : t.defaultValue,
                r = null != t.checked ? t.checked : t.defaultChecked;
              (n = $(null != t.value ? t.value : n)),
                (e._wrapperState = {
                  initialChecked: r,
                  initialValue: n,
                  controlled:
                    "checkbox" === t.type || "radio" === t.type
                      ? null != t.checked
                      : null != t.value,
                });
            }
            function G(e, t) {
              null != (t = t.checked) && b(e, "checked", t, !1);
            }
            function X(e, t) {
              G(e, t);
              var n = $(t.value),
                r = t.type;
              if (null != n)
                "number" === r
                  ? ((0 === n && "" === e.value) || e.value != n) &&
                    (e.value = "" + n)
                  : e.value !== "" + n && (e.value = "" + n);
              else if ("submit" === r || "reset" === r)
                return void e.removeAttribute("value");
              t.hasOwnProperty("value")
                ? ee(e, t.type, n)
                : t.hasOwnProperty("defaultValue") &&
                  ee(e, t.type, $(t.defaultValue)),
                null == t.checked &&
                  null != t.defaultChecked &&
                  (e.defaultChecked = !!t.defaultChecked);
            }
            function Z(e, t, n) {
              if (
                t.hasOwnProperty("value") ||
                t.hasOwnProperty("defaultValue")
              ) {
                var r = t.type;
                if (
                  !(
                    ("submit" !== r && "reset" !== r) ||
                    (void 0 !== t.value && null !== t.value)
                  )
                )
                  return;
                (t = "" + e._wrapperState.initialValue),
                  n || t === e.value || (e.value = t),
                  (e.defaultValue = t);
              }
              "" !== (n = e.name) && (e.name = ""),
                (e.defaultChecked = !!e._wrapperState.initialChecked),
                "" !== n && (e.name = n);
            }
            function ee(e, t, n) {
              ("number" === t && q(e.ownerDocument) === e) ||
                (null == n
                  ? (e.defaultValue = "" + e._wrapperState.initialValue)
                  : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
            }
            var te = Array.isArray;
            function ne(e, t, n, r) {
              if (((e = e.options), t)) {
                t = {};
                for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
                for (n = 0; n < e.length; n++)
                  (o = t.hasOwnProperty("$" + e[n].value)),
                    e[n].selected !== o && (e[n].selected = o),
                    o && r && (e[n].defaultSelected = !0);
              } else {
                for (n = "" + $(n), t = null, o = 0; o < e.length; o++) {
                  if (e[o].value === n)
                    return (
                      (e[o].selected = !0),
                      void (r && (e[o].defaultSelected = !0))
                    );
                  null !== t || e[o].disabled || (t = e[o]);
                }
                null !== t && (t.selected = !0);
              }
            }
            function re(e, t) {
              if (null != t.dangerouslySetInnerHTML) throw Error(a(91));
              return I({}, t, {
                value: void 0,
                defaultValue: void 0,
                children: "" + e._wrapperState.initialValue,
              });
            }
            function oe(e, t) {
              var n = t.value;
              if (null == n) {
                if (((n = t.children), (t = t.defaultValue), null != n)) {
                  if (null != t) throw Error(a(92));
                  if (te(n)) {
                    if (1 < n.length) throw Error(a(93));
                    n = n[0];
                  }
                  t = n;
                }
                null == t && (t = ""), (n = t);
              }
              e._wrapperState = { initialValue: $(n) };
            }
            function ae(e, t) {
              var n = $(t.value),
                r = $(t.defaultValue);
              null != n &&
                ((n = "" + n) !== e.value && (e.value = n),
                null == t.defaultValue &&
                  e.defaultValue !== n &&
                  (e.defaultValue = n)),
                null != r && (e.defaultValue = "" + r);
            }
            function ie(e) {
              var t = e.textContent;
              t === e._wrapperState.initialValue &&
                "" !== t &&
                null !== t &&
                (e.value = t);
            }
            function le(e) {
              switch (e) {
                case "svg":
                  return "http://www.w3.org/2000/svg";
                case "math":
                  return "http://www.w3.org/1998/Math/MathML";
                default:
                  return "http://www.w3.org/1999/xhtml";
              }
            }
            function ue(e, t) {
              return null == e || "http://www.w3.org/1999/xhtml" === e
                ? le(t)
                : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
                ? "http://www.w3.org/1999/xhtml"
                : e;
            }
            var ce,
              se,
              fe =
                ((se = function (e, t) {
                  if (
                    "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                    "innerHTML" in e
                  )
                    e.innerHTML = t;
                  else {
                    for (
                      (ce = ce || document.createElement("div")).innerHTML =
                        "<svg>" + t.valueOf().toString() + "</svg>",
                        t = ce.firstChild;
                      e.firstChild;

                    )
                      e.removeChild(e.firstChild);
                    for (; t.firstChild; ) e.appendChild(t.firstChild);
                  }
                }),
                "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
                  ? function (e, t, n, r) {
                      MSApp.execUnsafeLocalFunction(function () {
                        return se(e, t);
                      });
                    }
                  : se);
            function de(e, t) {
              if (t) {
                var n = e.firstChild;
                if (n && n === e.lastChild && 3 === n.nodeType)
                  return void (n.nodeValue = t);
              }
              e.textContent = t;
            }
            var pe = {
                animationIterationCount: !0,
                aspectRatio: !0,
                borderImageOutset: !0,
                borderImageSlice: !0,
                borderImageWidth: !0,
                boxFlex: !0,
                boxFlexGroup: !0,
                boxOrdinalGroup: !0,
                columnCount: !0,
                columns: !0,
                flex: !0,
                flexGrow: !0,
                flexPositive: !0,
                flexShrink: !0,
                flexNegative: !0,
                flexOrder: !0,
                gridArea: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowSpan: !0,
                gridRowStart: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnSpan: !0,
                gridColumnStart: !0,
                fontWeight: !0,
                lineClamp: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                tabSize: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
                fillOpacity: !0,
                floodOpacity: !0,
                stopOpacity: !0,
                strokeDasharray: !0,
                strokeDashoffset: !0,
                strokeMiterlimit: !0,
                strokeOpacity: !0,
                strokeWidth: !0,
              },
              he = ["Webkit", "ms", "Moz", "O"];
            function me(e, t, n) {
              return null == t || "boolean" == typeof t || "" === t
                ? ""
                : n ||
                  "number" != typeof t ||
                  0 === t ||
                  (pe.hasOwnProperty(e) && pe[e])
                ? ("" + t).trim()
                : t + "px";
            }
            function ve(e, t) {
              for (var n in ((e = e.style), t))
                if (t.hasOwnProperty(n)) {
                  var r = 0 === n.indexOf("--"),
                    o = me(n, t[n], r);
                  "float" === n && (n = "cssFloat"),
                    r ? e.setProperty(n, o) : (e[n] = o);
                }
            }
            Object.keys(pe).forEach(function (e) {
              he.forEach(function (t) {
                (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
                  (pe[t] = pe[e]);
              });
            });
            var ye = I(
              { menuitem: !0 },
              {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                embed: !0,
                hr: !0,
                img: !0,
                input: !0,
                keygen: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0,
              }
            );
            function ge(e, t) {
              if (t) {
                if (
                  ye[e] &&
                  (null != t.children || null != t.dangerouslySetInnerHTML)
                )
                  throw Error(a(137, e));
                if (null != t.dangerouslySetInnerHTML) {
                  if (null != t.children) throw Error(a(60));
                  if (
                    "object" != typeof t.dangerouslySetInnerHTML ||
                    !("__html" in t.dangerouslySetInnerHTML)
                  )
                    throw Error(a(61));
                }
                if (null != t.style && "object" != typeof t.style)
                  throw Error(a(62));
              }
            }
            function be(e, t) {
              if (-1 === e.indexOf("-")) return "string" == typeof t.is;
              switch (e) {
                case "annotation-xml":
                case "color-profile":
                case "font-face":
                case "font-face-src":
                case "font-face-uri":
                case "font-face-format":
                case "font-face-name":
                case "missing-glyph":
                  return !1;
                default:
                  return !0;
              }
            }
            var we = null;
            function Ee(e) {
              return (
                (e = e.target || e.srcElement || window)
                  .correspondingUseElement && (e = e.correspondingUseElement),
                3 === e.nodeType ? e.parentNode : e
              );
            }
            var Se = null,
              xe = null,
              _e = null;
            function ke(e) {
              if ((e = wo(e))) {
                if ("function" != typeof Se) throw Error(a(280));
                var t = e.stateNode;
                t && ((t = So(t)), Se(e.stateNode, e.type, t));
              }
            }
            function Pe(e) {
              xe ? (_e ? _e.push(e) : (_e = [e])) : (xe = e);
            }
            function Ce() {
              if (xe) {
                var e = xe,
                  t = _e;
                if (((_e = xe = null), ke(e), t))
                  for (e = 0; e < t.length; e++) ke(t[e]);
              }
            }
            function Oe(e, t) {
              return e(t);
            }
            function Le() {}
            var Re = !1;
            function Te(e, t, n) {
              if (Re) return e(t, n);
              Re = !0;
              try {
                return Oe(e, t, n);
              } finally {
                (Re = !1), (null !== xe || null !== _e) && (Le(), Ce());
              }
            }
            function Ne(e, t) {
              var n = e.stateNode;
              if (null === n) return null;
              var r = So(n);
              if (null === r) return null;
              n = r[t];
              e: switch (t) {
                case "onClick":
                case "onClickCapture":
                case "onDoubleClick":
                case "onDoubleClickCapture":
                case "onMouseDown":
                case "onMouseDownCapture":
                case "onMouseMove":
                case "onMouseMoveCapture":
                case "onMouseUp":
                case "onMouseUpCapture":
                case "onMouseEnter":
                  (r = !r.disabled) ||
                    (r = !(
                      "button" === (e = e.type) ||
                      "input" === e ||
                      "select" === e ||
                      "textarea" === e
                    )),
                    (e = !r);
                  break e;
                default:
                  e = !1;
              }
              if (e) return null;
              if (n && "function" != typeof n) throw Error(a(231, t, typeof n));
              return n;
            }
            var De = !1;
            if (s)
              try {
                var je = {};
                Object.defineProperty(je, "passive", {
                  get: function () {
                    De = !0;
                  },
                }),
                  window.addEventListener("test", je, je),
                  window.removeEventListener("test", je, je);
              } catch (se) {
                De = !1;
              }
            function Me(e, t, n, r, o, a, i, l, u) {
              var c = Array.prototype.slice.call(arguments, 3);
              try {
                t.apply(n, c);
              } catch (e) {
                this.onError(e);
              }
            }
            var Ue = !1,
              Ie = null,
              Ae = !1,
              We = null,
              ze = {
                onError: function (e) {
                  (Ue = !0), (Ie = e);
                },
              };
            function Fe(e, t, n, r, o, a, i, l, u) {
              (Ue = !1), (Ie = null), Me.apply(ze, arguments);
            }
            function Be(e) {
              var t = e,
                n = e;
              if (e.alternate) for (; t.return; ) t = t.return;
              else {
                e = t;
                do {
                  0 != (4098 & (t = e).flags) && (n = t.return), (e = t.return);
                } while (e);
              }
              return 3 === t.tag ? n : null;
            }
            function He(e) {
              if (13 === e.tag) {
                var t = e.memoizedState;
                if (
                  (null === t &&
                    null !== (e = e.alternate) &&
                    (t = e.memoizedState),
                  null !== t)
                )
                  return t.dehydrated;
              }
              return null;
            }
            function $e(e) {
              if (Be(e) !== e) throw Error(a(188));
            }
            function Ve(e) {
              return null !==
                (e = (function (e) {
                  var t = e.alternate;
                  if (!t) {
                    if (null === (t = Be(e))) throw Error(a(188));
                    return t !== e ? null : e;
                  }
                  for (var n = e, r = t; ; ) {
                    var o = n.return;
                    if (null === o) break;
                    var i = o.alternate;
                    if (null === i) {
                      if (null !== (r = o.return)) {
                        n = r;
                        continue;
                      }
                      break;
                    }
                    if (o.child === i.child) {
                      for (i = o.child; i; ) {
                        if (i === n) return $e(o), e;
                        if (i === r) return $e(o), t;
                        i = i.sibling;
                      }
                      throw Error(a(188));
                    }
                    if (n.return !== r.return) (n = o), (r = i);
                    else {
                      for (var l = !1, u = o.child; u; ) {
                        if (u === n) {
                          (l = !0), (n = o), (r = i);
                          break;
                        }
                        if (u === r) {
                          (l = !0), (r = o), (n = i);
                          break;
                        }
                        u = u.sibling;
                      }
                      if (!l) {
                        for (u = i.child; u; ) {
                          if (u === n) {
                            (l = !0), (n = i), (r = o);
                            break;
                          }
                          if (u === r) {
                            (l = !0), (r = i), (n = o);
                            break;
                          }
                          u = u.sibling;
                        }
                        if (!l) throw Error(a(189));
                      }
                    }
                    if (n.alternate !== r) throw Error(a(190));
                  }
                  if (3 !== n.tag) throw Error(a(188));
                  return n.stateNode.current === n ? e : t;
                })(e))
                ? Je(e)
                : null;
            }
            function Je(e) {
              if (5 === e.tag || 6 === e.tag) return e;
              for (e = e.child; null !== e; ) {
                var t = Je(e);
                if (null !== t) return t;
                e = e.sibling;
              }
              return null;
            }
            var Qe = o.unstable_scheduleCallback,
              qe = o.unstable_cancelCallback,
              Ye = o.unstable_shouldYield,
              Ke = o.unstable_requestPaint,
              Ge = o.unstable_now,
              Xe = o.unstable_getCurrentPriorityLevel,
              Ze = o.unstable_ImmediatePriority,
              et = o.unstable_UserBlockingPriority,
              tt = o.unstable_NormalPriority,
              nt = o.unstable_LowPriority,
              rt = o.unstable_IdlePriority,
              ot = null,
              at = null,
              it = Math.clz32
                ? Math.clz32
                : function (e) {
                    return 0 === (e >>>= 0)
                      ? 32
                      : (31 - ((lt(e) / ut) | 0)) | 0;
                  },
              lt = Math.log,
              ut = Math.LN2,
              ct = 64,
              st = 4194304;
            function ft(e) {
              switch (e & -e) {
                case 1:
                  return 1;
                case 2:
                  return 2;
                case 4:
                  return 4;
                case 8:
                  return 8;
                case 16:
                  return 16;
                case 32:
                  return 32;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                  return 4194240 & e;
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                  return 130023424 & e;
                case 134217728:
                  return 134217728;
                case 268435456:
                  return 268435456;
                case 536870912:
                  return 536870912;
                case 1073741824:
                  return 1073741824;
                default:
                  return e;
              }
            }
            function dt(e, t) {
              var n = e.pendingLanes;
              if (0 === n) return 0;
              var r = 0,
                o = e.suspendedLanes,
                a = e.pingedLanes,
                i = 268435455 & n;
              if (0 !== i) {
                var l = i & ~o;
                0 !== l ? (r = ft(l)) : 0 != (a &= i) && (r = ft(a));
              } else 0 != (i = n & ~o) ? (r = ft(i)) : 0 !== a && (r = ft(a));
              if (0 === r) return 0;
              if (
                0 !== t &&
                t !== r &&
                0 == (t & o) &&
                ((o = r & -r) >= (a = t & -t) ||
                  (16 === o && 0 != (4194240 & a)))
              )
                return t;
              if ((0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
                for (e = e.entanglements, t &= r; 0 < t; )
                  (o = 1 << (n = 31 - it(t))), (r |= e[n]), (t &= ~o);
              return r;
            }
            function pt(e, t) {
              switch (e) {
                case 1:
                case 2:
                case 4:
                  return t + 250;
                case 8:
                case 16:
                case 32:
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                  return t + 5e3;
                default:
                  return -1;
              }
            }
            function ht(e) {
              return 0 != (e = -1073741825 & e.pendingLanes)
                ? e
                : 1073741824 & e
                ? 1073741824
                : 0;
            }
            function mt() {
              var e = ct;
              return 0 == (4194240 & (ct <<= 1)) && (ct = 64), e;
            }
            function vt(e) {
              for (var t = [], n = 0; 31 > n; n++) t.push(e);
              return t;
            }
            function yt(e, t, n) {
              (e.pendingLanes |= t),
                536870912 !== t &&
                  ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
                ((e = e.eventTimes)[(t = 31 - it(t))] = n);
            }
            function gt(e, t) {
              var n = (e.entangledLanes |= t);
              for (e = e.entanglements; n; ) {
                var r = 31 - it(n),
                  o = 1 << r;
                (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
              }
            }
            var bt = 0;
            function wt(e) {
              return 1 < (e &= -e)
                ? 4 < e
                  ? 0 != (268435455 & e)
                    ? 16
                    : 536870912
                  : 4
                : 1;
            }
            var Et,
              St,
              xt,
              _t,
              kt,
              Pt = !1,
              Ct = [],
              Ot = null,
              Lt = null,
              Rt = null,
              Tt = new Map(),
              Nt = new Map(),
              Dt = [],
              jt =
                "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
                  " "
                );
            function Mt(e, t) {
              switch (e) {
                case "focusin":
                case "focusout":
                  Ot = null;
                  break;
                case "dragenter":
                case "dragleave":
                  Lt = null;
                  break;
                case "mouseover":
                case "mouseout":
                  Rt = null;
                  break;
                case "pointerover":
                case "pointerout":
                  Tt.delete(t.pointerId);
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                  Nt.delete(t.pointerId);
              }
            }
            function Ut(e, t, n, r, o, a) {
              return null === e || e.nativeEvent !== a
                ? ((e = {
                    blockedOn: t,
                    domEventName: n,
                    eventSystemFlags: r,
                    nativeEvent: a,
                    targetContainers: [o],
                  }),
                  null !== t && null !== (t = wo(t)) && St(t),
                  e)
                : ((e.eventSystemFlags |= r),
                  (t = e.targetContainers),
                  null !== o && -1 === t.indexOf(o) && t.push(o),
                  e);
            }
            function It(e) {
              var t = bo(e.target);
              if (null !== t) {
                var n = Be(t);
                if (null !== n)
                  if (13 === (t = n.tag)) {
                    if (null !== (t = He(n)))
                      return (
                        (e.blockedOn = t),
                        void kt(e.priority, function () {
                          xt(n);
                        })
                      );
                  } else if (
                    3 === t &&
                    n.stateNode.current.memoizedState.isDehydrated
                  )
                    return void (e.blockedOn =
                      3 === n.tag ? n.stateNode.containerInfo : null);
              }
              e.blockedOn = null;
            }
            function At(e) {
              if (null !== e.blockedOn) return !1;
              for (var t = e.targetContainers; 0 < t.length; ) {
                var n = Yt(
                  e.domEventName,
                  e.eventSystemFlags,
                  t[0],
                  e.nativeEvent
                );
                if (null !== n)
                  return null !== (t = wo(n)) && St(t), (e.blockedOn = n), !1;
                var r = new (n = e.nativeEvent).constructor(n.type, n);
                (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
              }
              return !0;
            }
            function Wt(e, t, n) {
              At(e) && n.delete(t);
            }
            function zt() {
              (Pt = !1),
                null !== Ot && At(Ot) && (Ot = null),
                null !== Lt && At(Lt) && (Lt = null),
                null !== Rt && At(Rt) && (Rt = null),
                Tt.forEach(Wt),
                Nt.forEach(Wt);
            }
            function Ft(e, t) {
              e.blockedOn === t &&
                ((e.blockedOn = null),
                Pt ||
                  ((Pt = !0),
                  o.unstable_scheduleCallback(o.unstable_NormalPriority, zt)));
            }
            function Bt(e) {
              function t(t) {
                return Ft(t, e);
              }
              if (0 < Ct.length) {
                Ft(Ct[0], e);
                for (var n = 1; n < Ct.length; n++) {
                  var r = Ct[n];
                  r.blockedOn === e && (r.blockedOn = null);
                }
              }
              for (
                null !== Ot && Ft(Ot, e),
                  null !== Lt && Ft(Lt, e),
                  null !== Rt && Ft(Rt, e),
                  Tt.forEach(t),
                  Nt.forEach(t),
                  n = 0;
                n < Dt.length;
                n++
              )
                (r = Dt[n]).blockedOn === e && (r.blockedOn = null);
              for (; 0 < Dt.length && null === (n = Dt[0]).blockedOn; )
                It(n), null === n.blockedOn && Dt.shift();
            }
            var Ht = w.ReactCurrentBatchConfig,
              $t = !0;
            function Vt(e, t, n, r) {
              var o = bt,
                a = Ht.transition;
              Ht.transition = null;
              try {
                (bt = 1), Qt(e, t, n, r);
              } finally {
                (bt = o), (Ht.transition = a);
              }
            }
            function Jt(e, t, n, r) {
              var o = bt,
                a = Ht.transition;
              Ht.transition = null;
              try {
                (bt = 4), Qt(e, t, n, r);
              } finally {
                (bt = o), (Ht.transition = a);
              }
            }
            function Qt(e, t, n, r) {
              if ($t) {
                var o = Yt(e, t, n, r);
                if (null === o) $r(e, t, r, qt, n), Mt(e, r);
                else if (
                  (function (e, t, n, r, o) {
                    switch (t) {
                      case "focusin":
                        return (Ot = Ut(Ot, e, t, n, r, o)), !0;
                      case "dragenter":
                        return (Lt = Ut(Lt, e, t, n, r, o)), !0;
                      case "mouseover":
                        return (Rt = Ut(Rt, e, t, n, r, o)), !0;
                      case "pointerover":
                        var a = o.pointerId;
                        return (
                          Tt.set(a, Ut(Tt.get(a) || null, e, t, n, r, o)), !0
                        );
                      case "gotpointercapture":
                        return (
                          (a = o.pointerId),
                          Nt.set(a, Ut(Nt.get(a) || null, e, t, n, r, o)),
                          !0
                        );
                    }
                    return !1;
                  })(o, e, t, n, r)
                )
                  r.stopPropagation();
                else if ((Mt(e, r), 4 & t && -1 < jt.indexOf(e))) {
                  for (; null !== o; ) {
                    var a = wo(o);
                    if (
                      (null !== a && Et(a),
                      null === (a = Yt(e, t, n, r)) && $r(e, t, r, qt, n),
                      a === o)
                    )
                      break;
                    o = a;
                  }
                  null !== o && r.stopPropagation();
                } else $r(e, t, r, null, n);
              }
            }
            var qt = null;
            function Yt(e, t, n, r) {
              if (((qt = null), null !== (e = bo((e = Ee(r))))))
                if (null === (t = Be(e))) e = null;
                else if (13 === (n = t.tag)) {
                  if (null !== (e = He(t))) return e;
                  e = null;
                } else if (3 === n) {
                  if (t.stateNode.current.memoizedState.isDehydrated)
                    return 3 === t.tag ? t.stateNode.containerInfo : null;
                  e = null;
                } else t !== e && (e = null);
              return (qt = e), null;
            }
            function Kt(e) {
              switch (e) {
                case "cancel":
                case "click":
                case "close":
                case "contextmenu":
                case "copy":
                case "cut":
                case "auxclick":
                case "dblclick":
                case "dragend":
                case "dragstart":
                case "drop":
                case "focusin":
                case "focusout":
                case "input":
                case "invalid":
                case "keydown":
                case "keypress":
                case "keyup":
                case "mousedown":
                case "mouseup":
                case "paste":
                case "pause":
                case "play":
                case "pointercancel":
                case "pointerdown":
                case "pointerup":
                case "ratechange":
                case "reset":
                case "resize":
                case "seeked":
                case "submit":
                case "touchcancel":
                case "touchend":
                case "touchstart":
                case "volumechange":
                case "change":
                case "selectionchange":
                case "textInput":
                case "compositionstart":
                case "compositionend":
                case "compositionupdate":
                case "beforeblur":
                case "afterblur":
                case "beforeinput":
                case "blur":
                case "fullscreenchange":
                case "focus":
                case "hashchange":
                case "popstate":
                case "select":
                case "selectstart":
                  return 1;
                case "drag":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "mousemove":
                case "mouseout":
                case "mouseover":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "scroll":
                case "toggle":
                case "touchmove":
                case "wheel":
                case "mouseenter":
                case "mouseleave":
                case "pointerenter":
                case "pointerleave":
                  return 4;
                case "message":
                  switch (Xe()) {
                    case Ze:
                      return 1;
                    case et:
                      return 4;
                    case tt:
                    case nt:
                      return 16;
                    case rt:
                      return 536870912;
                    default:
                      return 16;
                  }
                default:
                  return 16;
              }
            }
            var Gt = null,
              Xt = null,
              Zt = null;
            function en() {
              if (Zt) return Zt;
              var e,
                t,
                n = Xt,
                r = n.length,
                o = "value" in Gt ? Gt.value : Gt.textContent,
                a = o.length;
              for (e = 0; e < r && n[e] === o[e]; e++);
              var i = r - e;
              for (t = 1; t <= i && n[r - t] === o[a - t]; t++);
              return (Zt = o.slice(e, 1 < t ? 1 - t : void 0));
            }
            function tn(e) {
              var t = e.keyCode;
              return (
                "charCode" in e
                  ? 0 === (e = e.charCode) && 13 === t && (e = 13)
                  : (e = t),
                10 === e && (e = 13),
                32 <= e || 13 === e ? e : 0
              );
            }
            function nn() {
              return !0;
            }
            function rn() {
              return !1;
            }
            function on(e) {
              function t(t, n, r, o, a) {
                for (var i in ((this._reactName = t),
                (this._targetInst = r),
                (this.type = n),
                (this.nativeEvent = o),
                (this.target = a),
                (this.currentTarget = null),
                e))
                  e.hasOwnProperty(i) &&
                    ((t = e[i]), (this[i] = t ? t(o) : o[i]));
                return (
                  (this.isDefaultPrevented = (
                    null != o.defaultPrevented
                      ? o.defaultPrevented
                      : !1 === o.returnValue
                  )
                    ? nn
                    : rn),
                  (this.isPropagationStopped = rn),
                  this
                );
              }
              return (
                I(t.prototype, {
                  preventDefault: function () {
                    this.defaultPrevented = !0;
                    var e = this.nativeEvent;
                    e &&
                      (e.preventDefault
                        ? e.preventDefault()
                        : "unknown" != typeof e.returnValue &&
                          (e.returnValue = !1),
                      (this.isDefaultPrevented = nn));
                  },
                  stopPropagation: function () {
                    var e = this.nativeEvent;
                    e &&
                      (e.stopPropagation
                        ? e.stopPropagation()
                        : "unknown" != typeof e.cancelBubble &&
                          (e.cancelBubble = !0),
                      (this.isPropagationStopped = nn));
                  },
                  persist: function () {},
                  isPersistent: nn,
                }),
                t
              );
            }
            var an,
              ln,
              un,
              cn = {
                eventPhase: 0,
                bubbles: 0,
                cancelable: 0,
                timeStamp: function (e) {
                  return e.timeStamp || Date.now();
                },
                defaultPrevented: 0,
                isTrusted: 0,
              },
              sn = on(cn),
              fn = I({}, cn, { view: 0, detail: 0 }),
              dn = on(fn),
              pn = I({}, fn, {
                screenX: 0,
                screenY: 0,
                clientX: 0,
                clientY: 0,
                pageX: 0,
                pageY: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                getModifierState: kn,
                button: 0,
                buttons: 0,
                relatedTarget: function (e) {
                  return void 0 === e.relatedTarget
                    ? e.fromElement === e.srcElement
                      ? e.toElement
                      : e.fromElement
                    : e.relatedTarget;
                },
                movementX: function (e) {
                  return "movementX" in e
                    ? e.movementX
                    : (e !== un &&
                        (un && "mousemove" === e.type
                          ? ((an = e.screenX - un.screenX),
                            (ln = e.screenY - un.screenY))
                          : (ln = an = 0),
                        (un = e)),
                      an);
                },
                movementY: function (e) {
                  return "movementY" in e ? e.movementY : ln;
                },
              }),
              hn = on(pn),
              mn = on(I({}, pn, { dataTransfer: 0 })),
              vn = on(I({}, fn, { relatedTarget: 0 })),
              yn = on(
                I({}, cn, {
                  animationName: 0,
                  elapsedTime: 0,
                  pseudoElement: 0,
                })
              ),
              gn = I({}, cn, {
                clipboardData: function (e) {
                  return "clipboardData" in e
                    ? e.clipboardData
                    : window.clipboardData;
                },
              }),
              bn = on(gn),
              wn = on(I({}, cn, { data: 0 })),
              En = {
                Esc: "Escape",
                Spacebar: " ",
                Left: "ArrowLeft",
                Up: "ArrowUp",
                Right: "ArrowRight",
                Down: "ArrowDown",
                Del: "Delete",
                Win: "OS",
                Menu: "ContextMenu",
                Apps: "ContextMenu",
                Scroll: "ScrollLock",
                MozPrintableKey: "Unidentified",
              },
              Sn = {
                8: "Backspace",
                9: "Tab",
                12: "Clear",
                13: "Enter",
                16: "Shift",
                17: "Control",
                18: "Alt",
                19: "Pause",
                20: "CapsLock",
                27: "Escape",
                32: " ",
                33: "PageUp",
                34: "PageDown",
                35: "End",
                36: "Home",
                37: "ArrowLeft",
                38: "ArrowUp",
                39: "ArrowRight",
                40: "ArrowDown",
                45: "Insert",
                46: "Delete",
                112: "F1",
                113: "F2",
                114: "F3",
                115: "F4",
                116: "F5",
                117: "F6",
                118: "F7",
                119: "F8",
                120: "F9",
                121: "F10",
                122: "F11",
                123: "F12",
                144: "NumLock",
                145: "ScrollLock",
                224: "Meta",
              },
              xn = {
                Alt: "altKey",
                Control: "ctrlKey",
                Meta: "metaKey",
                Shift: "shiftKey",
              };
            function _n(e) {
              var t = this.nativeEvent;
              return t.getModifierState
                ? t.getModifierState(e)
                : !!(e = xn[e]) && !!t[e];
            }
            function kn() {
              return _n;
            }
            var Pn = I({}, fn, {
                key: function (e) {
                  if (e.key) {
                    var t = En[e.key] || e.key;
                    if ("Unidentified" !== t) return t;
                  }
                  return "keypress" === e.type
                    ? 13 === (e = tn(e))
                      ? "Enter"
                      : String.fromCharCode(e)
                    : "keydown" === e.type || "keyup" === e.type
                    ? Sn[e.keyCode] || "Unidentified"
                    : "";
                },
                code: 0,
                location: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                repeat: 0,
                locale: 0,
                getModifierState: kn,
                charCode: function (e) {
                  return "keypress" === e.type ? tn(e) : 0;
                },
                keyCode: function (e) {
                  return "keydown" === e.type || "keyup" === e.type
                    ? e.keyCode
                    : 0;
                },
                which: function (e) {
                  return "keypress" === e.type
                    ? tn(e)
                    : "keydown" === e.type || "keyup" === e.type
                    ? e.keyCode
                    : 0;
                },
              }),
              Cn = on(Pn),
              On = on(
                I({}, pn, {
                  pointerId: 0,
                  width: 0,
                  height: 0,
                  pressure: 0,
                  tangentialPressure: 0,
                  tiltX: 0,
                  tiltY: 0,
                  twist: 0,
                  pointerType: 0,
                  isPrimary: 0,
                })
              ),
              Ln = on(
                I({}, fn, {
                  touches: 0,
                  targetTouches: 0,
                  changedTouches: 0,
                  altKey: 0,
                  metaKey: 0,
                  ctrlKey: 0,
                  shiftKey: 0,
                  getModifierState: kn,
                })
              ),
              Rn = on(
                I({}, cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
              ),
              Tn = I({}, pn, {
                deltaX: function (e) {
                  return "deltaX" in e
                    ? e.deltaX
                    : "wheelDeltaX" in e
                    ? -e.wheelDeltaX
                    : 0;
                },
                deltaY: function (e) {
                  return "deltaY" in e
                    ? e.deltaY
                    : "wheelDeltaY" in e
                    ? -e.wheelDeltaY
                    : "wheelDelta" in e
                    ? -e.wheelDelta
                    : 0;
                },
                deltaZ: 0,
                deltaMode: 0,
              }),
              Nn = on(Tn),
              Dn = [9, 13, 27, 32],
              jn = s && "CompositionEvent" in window,
              Mn = null;
            s && "documentMode" in document && (Mn = document.documentMode);
            var Un = s && "TextEvent" in window && !Mn,
              In = s && (!jn || (Mn && 8 < Mn && 11 >= Mn)),
              An = String.fromCharCode(32),
              Wn = !1;
            function zn(e, t) {
              switch (e) {
                case "keyup":
                  return -1 !== Dn.indexOf(t.keyCode);
                case "keydown":
                  return 229 !== t.keyCode;
                case "keypress":
                case "mousedown":
                case "focusout":
                  return !0;
                default:
                  return !1;
              }
            }
            function Fn(e) {
              return "object" == typeof (e = e.detail) && "data" in e
                ? e.data
                : null;
            }
            var Bn = !1,
              Hn = {
                color: !0,
                date: !0,
                datetime: !0,
                "datetime-local": !0,
                email: !0,
                month: !0,
                number: !0,
                password: !0,
                range: !0,
                search: !0,
                tel: !0,
                text: !0,
                time: !0,
                url: !0,
                week: !0,
              };
            function $n(e) {
              var t = e && e.nodeName && e.nodeName.toLowerCase();
              return "input" === t ? !!Hn[e.type] : "textarea" === t;
            }
            function Vn(e, t, n, r) {
              Pe(r),
                0 < (t = Jr(t, "onChange")).length &&
                  ((n = new sn("onChange", "change", null, n, r)),
                  e.push({ event: n, listeners: t }));
            }
            var Jn = null,
              Qn = null;
            function qn(e) {
              Ar(e, 0);
            }
            function Yn(e) {
              if (Q(Eo(e))) return e;
            }
            function Kn(e, t) {
              if ("change" === e) return t;
            }
            var Gn = !1;
            if (s) {
              var Xn;
              if (s) {
                var Zn = "oninput" in document;
                if (!Zn) {
                  var er = document.createElement("div");
                  er.setAttribute("oninput", "return;"),
                    (Zn = "function" == typeof er.oninput);
                }
                Xn = Zn;
              } else Xn = !1;
              Gn = Xn && (!document.documentMode || 9 < document.documentMode);
            }
            function tr() {
              Jn && (Jn.detachEvent("onpropertychange", nr), (Qn = Jn = null));
            }
            function nr(e) {
              if ("value" === e.propertyName && Yn(Qn)) {
                var t = [];
                Vn(t, Qn, e, Ee(e)), Te(qn, t);
              }
            }
            function rr(e, t, n) {
              "focusin" === e
                ? (tr(), (Qn = n), (Jn = t).attachEvent("onpropertychange", nr))
                : "focusout" === e && tr();
            }
            function or(e) {
              if ("selectionchange" === e || "keyup" === e || "keydown" === e)
                return Yn(Qn);
            }
            function ar(e, t) {
              if ("click" === e) return Yn(t);
            }
            function ir(e, t) {
              if ("input" === e || "change" === e) return Yn(t);
            }
            var lr =
              "function" == typeof Object.is
                ? Object.is
                : function (e, t) {
                    return (
                      (e === t && (0 !== e || 1 / e == 1 / t)) ||
                      (e != e && t != t)
                    );
                  };
            function ur(e, t) {
              if (lr(e, t)) return !0;
              if (
                "object" != typeof e ||
                null === e ||
                "object" != typeof t ||
                null === t
              )
                return !1;
              var n = Object.keys(e),
                r = Object.keys(t);
              if (n.length !== r.length) return !1;
              for (r = 0; r < n.length; r++) {
                var o = n[r];
                if (!f.call(t, o) || !lr(e[o], t[o])) return !1;
              }
              return !0;
            }
            function cr(e) {
              for (; e && e.firstChild; ) e = e.firstChild;
              return e;
            }
            function sr(e, t) {
              var n,
                r = cr(e);
              for (e = 0; r; ) {
                if (3 === r.nodeType) {
                  if (((n = e + r.textContent.length), e <= t && n >= t))
                    return { node: r, offset: t - e };
                  e = n;
                }
                e: {
                  for (; r; ) {
                    if (r.nextSibling) {
                      r = r.nextSibling;
                      break e;
                    }
                    r = r.parentNode;
                  }
                  r = void 0;
                }
                r = cr(r);
              }
            }
            function fr(e, t) {
              return (
                !(!e || !t) &&
                (e === t ||
                  ((!e || 3 !== e.nodeType) &&
                    (t && 3 === t.nodeType
                      ? fr(e, t.parentNode)
                      : "contains" in e
                      ? e.contains(t)
                      : !!e.compareDocumentPosition &&
                        !!(16 & e.compareDocumentPosition(t)))))
              );
            }
            function dr() {
              for (
                var e = window, t = q();
                t instanceof e.HTMLIFrameElement;

              ) {
                try {
                  var n = "string" == typeof t.contentWindow.location.href;
                } catch (e) {
                  n = !1;
                }
                if (!n) break;
                t = q((e = t.contentWindow).document);
              }
              return t;
            }
            function pr(e) {
              var t = e && e.nodeName && e.nodeName.toLowerCase();
              return (
                t &&
                (("input" === t &&
                  ("text" === e.type ||
                    "search" === e.type ||
                    "tel" === e.type ||
                    "url" === e.type ||
                    "password" === e.type)) ||
                  "textarea" === t ||
                  "true" === e.contentEditable)
              );
            }
            function hr(e) {
              var t = dr(),
                n = e.focusedElem,
                r = e.selectionRange;
              if (
                t !== n &&
                n &&
                n.ownerDocument &&
                fr(n.ownerDocument.documentElement, n)
              ) {
                if (null !== r && pr(n))
                  if (
                    ((t = r.start),
                    void 0 === (e = r.end) && (e = t),
                    "selectionStart" in n)
                  )
                    (n.selectionStart = t),
                      (n.selectionEnd = Math.min(e, n.value.length));
                  else if (
                    (e =
                      ((t = n.ownerDocument || document) && t.defaultView) ||
                      window).getSelection
                  ) {
                    e = e.getSelection();
                    var o = n.textContent.length,
                      a = Math.min(r.start, o);
                    (r = void 0 === r.end ? a : Math.min(r.end, o)),
                      !e.extend && a > r && ((o = r), (r = a), (a = o)),
                      (o = sr(n, a));
                    var i = sr(n, r);
                    o &&
                      i &&
                      (1 !== e.rangeCount ||
                        e.anchorNode !== o.node ||
                        e.anchorOffset !== o.offset ||
                        e.focusNode !== i.node ||
                        e.focusOffset !== i.offset) &&
                      ((t = t.createRange()).setStart(o.node, o.offset),
                      e.removeAllRanges(),
                      a > r
                        ? (e.addRange(t), e.extend(i.node, i.offset))
                        : (t.setEnd(i.node, i.offset), e.addRange(t)));
                  }
                for (t = [], e = n; (e = e.parentNode); )
                  1 === e.nodeType &&
                    t.push({
                      element: e,
                      left: e.scrollLeft,
                      top: e.scrollTop,
                    });
                for (
                  "function" == typeof n.focus && n.focus(), n = 0;
                  n < t.length;
                  n++
                )
                  ((e = t[n]).element.scrollLeft = e.left),
                    (e.element.scrollTop = e.top);
              }
            }
            var mr =
                s && "documentMode" in document && 11 >= document.documentMode,
              vr = null,
              yr = null,
              gr = null,
              br = !1;
            function wr(e, t, n) {
              var r =
                n.window === n
                  ? n.document
                  : 9 === n.nodeType
                  ? n
                  : n.ownerDocument;
              br ||
                null == vr ||
                vr !== q(r) ||
                ((r =
                  "selectionStart" in (r = vr) && pr(r)
                    ? { start: r.selectionStart, end: r.selectionEnd }
                    : {
                        anchorNode: (r = (
                          (r.ownerDocument && r.ownerDocument.defaultView) ||
                          window
                        ).getSelection()).anchorNode,
                        anchorOffset: r.anchorOffset,
                        focusNode: r.focusNode,
                        focusOffset: r.focusOffset,
                      }),
                (gr && ur(gr, r)) ||
                  ((gr = r),
                  0 < (r = Jr(yr, "onSelect")).length &&
                    ((t = new sn("onSelect", "select", null, t, n)),
                    e.push({ event: t, listeners: r }),
                    (t.target = vr))));
            }
            function Er(e, t) {
              var n = {};
              return (
                (n[e.toLowerCase()] = t.toLowerCase()),
                (n["Webkit" + e] = "webkit" + t),
                (n["Moz" + e] = "moz" + t),
                n
              );
            }
            var Sr = {
                animationend: Er("Animation", "AnimationEnd"),
                animationiteration: Er("Animation", "AnimationIteration"),
                animationstart: Er("Animation", "AnimationStart"),
                transitionend: Er("Transition", "TransitionEnd"),
              },
              xr = {},
              _r = {};
            function kr(e) {
              if (xr[e]) return xr[e];
              if (!Sr[e]) return e;
              var t,
                n = Sr[e];
              for (t in n)
                if (n.hasOwnProperty(t) && t in _r) return (xr[e] = n[t]);
              return e;
            }
            s &&
              ((_r = document.createElement("div").style),
              "AnimationEvent" in window ||
                (delete Sr.animationend.animation,
                delete Sr.animationiteration.animation,
                delete Sr.animationstart.animation),
              "TransitionEvent" in window ||
                delete Sr.transitionend.transition);
            var Pr = kr("animationend"),
              Cr = kr("animationiteration"),
              Or = kr("animationstart"),
              Lr = kr("transitionend"),
              Rr = new Map(),
              Tr =
                "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
                  " "
                );
            function Nr(e, t) {
              Rr.set(e, t), u(t, [e]);
            }
            for (var Dr = 0; Dr < Tr.length; Dr++) {
              var jr = Tr[Dr];
              Nr(jr.toLowerCase(), "on" + (jr[0].toUpperCase() + jr.slice(1)));
            }
            Nr(Pr, "onAnimationEnd"),
              Nr(Cr, "onAnimationIteration"),
              Nr(Or, "onAnimationStart"),
              Nr("dblclick", "onDoubleClick"),
              Nr("focusin", "onFocus"),
              Nr("focusout", "onBlur"),
              Nr(Lr, "onTransitionEnd"),
              c("onMouseEnter", ["mouseout", "mouseover"]),
              c("onMouseLeave", ["mouseout", "mouseover"]),
              c("onPointerEnter", ["pointerout", "pointerover"]),
              c("onPointerLeave", ["pointerout", "pointerover"]),
              u(
                "onChange",
                "change click focusin focusout input keydown keyup selectionchange".split(
                  " "
                )
              ),
              u(
                "onSelect",
                "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
                  " "
                )
              ),
              u("onBeforeInput", [
                "compositionend",
                "keypress",
                "textInput",
                "paste",
              ]),
              u(
                "onCompositionEnd",
                "compositionend focusout keydown keypress keyup mousedown".split(
                  " "
                )
              ),
              u(
                "onCompositionStart",
                "compositionstart focusout keydown keypress keyup mousedown".split(
                  " "
                )
              ),
              u(
                "onCompositionUpdate",
                "compositionupdate focusout keydown keypress keyup mousedown".split(
                  " "
                )
              );
            var Mr =
                "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
                  " "
                ),
              Ur = new Set(
                "cancel close invalid load scroll toggle".split(" ").concat(Mr)
              );
            function Ir(e, t, n) {
              var r = e.type || "unknown-event";
              (e.currentTarget = n),
                (function (e, t, n, r, o, i, l, u, c) {
                  if ((Fe.apply(this, arguments), Ue)) {
                    if (!Ue) throw Error(a(198));
                    var s = Ie;
                    (Ue = !1), (Ie = null), Ae || ((Ae = !0), (We = s));
                  }
                })(r, t, void 0, e),
                (e.currentTarget = null);
            }
            function Ar(e, t) {
              t = 0 != (4 & t);
              for (var n = 0; n < e.length; n++) {
                var r = e[n],
                  o = r.event;
                r = r.listeners;
                e: {
                  var a = void 0;
                  if (t)
                    for (var i = r.length - 1; 0 <= i; i--) {
                      var l = r[i],
                        u = l.instance,
                        c = l.currentTarget;
                      if (
                        ((l = l.listener), u !== a && o.isPropagationStopped())
                      )
                        break e;
                      Ir(o, l, c), (a = u);
                    }
                  else
                    for (i = 0; i < r.length; i++) {
                      if (
                        ((u = (l = r[i]).instance),
                        (c = l.currentTarget),
                        (l = l.listener),
                        u !== a && o.isPropagationStopped())
                      )
                        break e;
                      Ir(o, l, c), (a = u);
                    }
                }
              }
              if (Ae) throw ((e = We), (Ae = !1), (We = null), e);
            }
            function Wr(e, t) {
              var n = t[vo];
              void 0 === n && (n = t[vo] = new Set());
              var r = e + "__bubble";
              n.has(r) || (Hr(t, e, 2, !1), n.add(r));
            }
            function zr(e, t, n) {
              var r = 0;
              t && (r |= 4), Hr(n, e, r, t);
            }
            var Fr = "_reactListening" + Math.random().toString(36).slice(2);
            function Br(e) {
              if (!e[Fr]) {
                (e[Fr] = !0),
                  i.forEach(function (t) {
                    "selectionchange" !== t &&
                      (Ur.has(t) || zr(t, !1, e), zr(t, !0, e));
                  });
                var t = 9 === e.nodeType ? e : e.ownerDocument;
                null === t ||
                  t[Fr] ||
                  ((t[Fr] = !0), zr("selectionchange", !1, t));
              }
            }
            function Hr(e, t, n, r) {
              switch (Kt(t)) {
                case 1:
                  var o = Vt;
                  break;
                case 4:
                  o = Jt;
                  break;
                default:
                  o = Qt;
              }
              (n = o.bind(null, t, n, e)),
                (o = void 0),
                !De ||
                  ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
                  (o = !0),
                r
                  ? void 0 !== o
                    ? e.addEventListener(t, n, { capture: !0, passive: o })
                    : e.addEventListener(t, n, !0)
                  : void 0 !== o
                  ? e.addEventListener(t, n, { passive: o })
                  : e.addEventListener(t, n, !1);
            }
            function $r(e, t, n, r, o) {
              var a = r;
              if (0 == (1 & t) && 0 == (2 & t) && null !== r)
                e: for (;;) {
                  if (null === r) return;
                  var i = r.tag;
                  if (3 === i || 4 === i) {
                    var l = r.stateNode.containerInfo;
                    if (l === o || (8 === l.nodeType && l.parentNode === o))
                      break;
                    if (4 === i)
                      for (i = r.return; null !== i; ) {
                        var u = i.tag;
                        if (
                          (3 === u || 4 === u) &&
                          ((u = i.stateNode.containerInfo) === o ||
                            (8 === u.nodeType && u.parentNode === o))
                        )
                          return;
                        i = i.return;
                      }
                    for (; null !== l; ) {
                      if (null === (i = bo(l))) return;
                      if (5 === (u = i.tag) || 6 === u) {
                        r = a = i;
                        continue e;
                      }
                      l = l.parentNode;
                    }
                  }
                  r = r.return;
                }
              Te(function () {
                var r = a,
                  o = Ee(n),
                  i = [];
                e: {
                  var l = Rr.get(e);
                  if (void 0 !== l) {
                    var u = sn,
                      c = e;
                    switch (e) {
                      case "keypress":
                        if (0 === tn(n)) break e;
                      case "keydown":
                      case "keyup":
                        u = Cn;
                        break;
                      case "focusin":
                        (c = "focus"), (u = vn);
                        break;
                      case "focusout":
                        (c = "blur"), (u = vn);
                        break;
                      case "beforeblur":
                      case "afterblur":
                        u = vn;
                        break;
                      case "click":
                        if (2 === n.button) break e;
                      case "auxclick":
                      case "dblclick":
                      case "mousedown":
                      case "mousemove":
                      case "mouseup":
                      case "mouseout":
                      case "mouseover":
                      case "contextmenu":
                        u = hn;
                        break;
                      case "drag":
                      case "dragend":
                      case "dragenter":
                      case "dragexit":
                      case "dragleave":
                      case "dragover":
                      case "dragstart":
                      case "drop":
                        u = mn;
                        break;
                      case "touchcancel":
                      case "touchend":
                      case "touchmove":
                      case "touchstart":
                        u = Ln;
                        break;
                      case Pr:
                      case Cr:
                      case Or:
                        u = yn;
                        break;
                      case Lr:
                        u = Rn;
                        break;
                      case "scroll":
                        u = dn;
                        break;
                      case "wheel":
                        u = Nn;
                        break;
                      case "copy":
                      case "cut":
                      case "paste":
                        u = bn;
                        break;
                      case "gotpointercapture":
                      case "lostpointercapture":
                      case "pointercancel":
                      case "pointerdown":
                      case "pointermove":
                      case "pointerout":
                      case "pointerover":
                      case "pointerup":
                        u = On;
                    }
                    var s = 0 != (4 & t),
                      f = !s && "scroll" === e,
                      d = s ? (null !== l ? l + "Capture" : null) : l;
                    s = [];
                    for (var p, h = r; null !== h; ) {
                      var m = (p = h).stateNode;
                      if (
                        (5 === p.tag &&
                          null !== m &&
                          ((p = m),
                          null !== d &&
                            null != (m = Ne(h, d)) &&
                            s.push(Vr(h, m, p))),
                        f)
                      )
                        break;
                      h = h.return;
                    }
                    0 < s.length &&
                      ((l = new u(l, c, null, n, o)),
                      i.push({ event: l, listeners: s }));
                  }
                }
                if (0 == (7 & t)) {
                  if (
                    ((u = "mouseout" === e || "pointerout" === e),
                    (!(l = "mouseover" === e || "pointerover" === e) ||
                      n === we ||
                      !(c = n.relatedTarget || n.fromElement) ||
                      (!bo(c) && !c[mo])) &&
                      (u || l) &&
                      ((l =
                        o.window === o
                          ? o
                          : (l = o.ownerDocument)
                          ? l.defaultView || l.parentWindow
                          : window),
                      u
                        ? ((u = r),
                          null !==
                            (c = (c = n.relatedTarget || n.toElement)
                              ? bo(c)
                              : null) &&
                            (c !== (f = Be(c)) ||
                              (5 !== c.tag && 6 !== c.tag)) &&
                            (c = null))
                        : ((u = null), (c = r)),
                      u !== c))
                  ) {
                    if (
                      ((s = hn),
                      (m = "onMouseLeave"),
                      (d = "onMouseEnter"),
                      (h = "mouse"),
                      ("pointerout" !== e && "pointerover" !== e) ||
                        ((s = On),
                        (m = "onPointerLeave"),
                        (d = "onPointerEnter"),
                        (h = "pointer")),
                      (f = null == u ? l : Eo(u)),
                      (p = null == c ? l : Eo(c)),
                      ((l = new s(m, h + "leave", u, n, o)).target = f),
                      (l.relatedTarget = p),
                      (m = null),
                      bo(o) === r &&
                        (((s = new s(d, h + "enter", c, n, o)).target = p),
                        (s.relatedTarget = f),
                        (m = s)),
                      (f = m),
                      u && c)
                    )
                      e: {
                        for (d = c, h = 0, p = s = u; p; p = Qr(p)) h++;
                        for (p = 0, m = d; m; m = Qr(m)) p++;
                        for (; 0 < h - p; ) (s = Qr(s)), h--;
                        for (; 0 < p - h; ) (d = Qr(d)), p--;
                        for (; h--; ) {
                          if (s === d || (null !== d && s === d.alternate))
                            break e;
                          (s = Qr(s)), (d = Qr(d));
                        }
                        s = null;
                      }
                    else s = null;
                    null !== u && qr(i, l, u, s, !1),
                      null !== c && null !== f && qr(i, f, c, s, !0);
                  }
                  if (
                    "select" ===
                      (u =
                        (l = r ? Eo(r) : window).nodeName &&
                        l.nodeName.toLowerCase()) ||
                    ("input" === u && "file" === l.type)
                  )
                    var v = Kn;
                  else if ($n(l))
                    if (Gn) v = ir;
                    else {
                      v = or;
                      var y = rr;
                    }
                  else
                    (u = l.nodeName) &&
                      "input" === u.toLowerCase() &&
                      ("checkbox" === l.type || "radio" === l.type) &&
                      (v = ar);
                  switch (
                    (v && (v = v(e, r))
                      ? Vn(i, v, n, o)
                      : (y && y(e, l, r),
                        "focusout" === e &&
                          (y = l._wrapperState) &&
                          y.controlled &&
                          "number" === l.type &&
                          ee(l, "number", l.value)),
                    (y = r ? Eo(r) : window),
                    e)
                  ) {
                    case "focusin":
                      ($n(y) || "true" === y.contentEditable) &&
                        ((vr = y), (yr = r), (gr = null));
                      break;
                    case "focusout":
                      gr = yr = vr = null;
                      break;
                    case "mousedown":
                      br = !0;
                      break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                      (br = !1), wr(i, n, o);
                      break;
                    case "selectionchange":
                      if (mr) break;
                    case "keydown":
                    case "keyup":
                      wr(i, n, o);
                  }
                  var g;
                  if (jn)
                    e: {
                      switch (e) {
                        case "compositionstart":
                          var b = "onCompositionStart";
                          break e;
                        case "compositionend":
                          b = "onCompositionEnd";
                          break e;
                        case "compositionupdate":
                          b = "onCompositionUpdate";
                          break e;
                      }
                      b = void 0;
                    }
                  else
                    Bn
                      ? zn(e, n) && (b = "onCompositionEnd")
                      : "keydown" === e &&
                        229 === n.keyCode &&
                        (b = "onCompositionStart");
                  b &&
                    (In &&
                      "ko" !== n.locale &&
                      (Bn || "onCompositionStart" !== b
                        ? "onCompositionEnd" === b && Bn && (g = en())
                        : ((Xt =
                            "value" in (Gt = o) ? Gt.value : Gt.textContent),
                          (Bn = !0))),
                    0 < (y = Jr(r, b)).length &&
                      ((b = new wn(b, e, null, n, o)),
                      i.push({ event: b, listeners: y }),
                      (g || null !== (g = Fn(n))) && (b.data = g))),
                    (g = Un
                      ? (function (e, t) {
                          switch (e) {
                            case "compositionend":
                              return Fn(t);
                            case "keypress":
                              return 32 !== t.which ? null : ((Wn = !0), An);
                            case "textInput":
                              return (e = t.data) === An && Wn ? null : e;
                            default:
                              return null;
                          }
                        })(e, n)
                      : (function (e, t) {
                          if (Bn)
                            return "compositionend" === e || (!jn && zn(e, t))
                              ? ((e = en()),
                                (Zt = Xt = Gt = null),
                                (Bn = !1),
                                e)
                              : null;
                          switch (e) {
                            case "paste":
                            default:
                              return null;
                            case "keypress":
                              if (
                                !(t.ctrlKey || t.altKey || t.metaKey) ||
                                (t.ctrlKey && t.altKey)
                              ) {
                                if (t.char && 1 < t.char.length) return t.char;
                                if (t.which)
                                  return String.fromCharCode(t.which);
                              }
                              return null;
                            case "compositionend":
                              return In && "ko" !== t.locale ? null : t.data;
                          }
                        })(e, n)) &&
                      0 < (r = Jr(r, "onBeforeInput")).length &&
                      ((o = new wn("onBeforeInput", "beforeinput", null, n, o)),
                      i.push({ event: o, listeners: r }),
                      (o.data = g));
                }
                Ar(i, t);
              });
            }
            function Vr(e, t, n) {
              return { instance: e, listener: t, currentTarget: n };
            }
            function Jr(e, t) {
              for (var n = t + "Capture", r = []; null !== e; ) {
                var o = e,
                  a = o.stateNode;
                5 === o.tag &&
                  null !== a &&
                  ((o = a),
                  null != (a = Ne(e, n)) && r.unshift(Vr(e, a, o)),
                  null != (a = Ne(e, t)) && r.push(Vr(e, a, o))),
                  (e = e.return);
              }
              return r;
            }
            function Qr(e) {
              if (null === e) return null;
              do {
                e = e.return;
              } while (e && 5 !== e.tag);
              return e || null;
            }
            function qr(e, t, n, r, o) {
              for (var a = t._reactName, i = []; null !== n && n !== r; ) {
                var l = n,
                  u = l.alternate,
                  c = l.stateNode;
                if (null !== u && u === r) break;
                5 === l.tag &&
                  null !== c &&
                  ((l = c),
                  o
                    ? null != (u = Ne(n, a)) && i.unshift(Vr(n, u, l))
                    : o || (null != (u = Ne(n, a)) && i.push(Vr(n, u, l)))),
                  (n = n.return);
              }
              0 !== i.length && e.push({ event: t, listeners: i });
            }
            var Yr = /\r\n?/g,
              Kr = /\u0000|\uFFFD/g;
            function Gr(e) {
              return ("string" == typeof e ? e : "" + e)
                .replace(Yr, "\n")
                .replace(Kr, "");
            }
            function Xr(e, t, n) {
              if (((t = Gr(t)), Gr(e) !== t && n)) throw Error(a(425));
            }
            function Zr() {}
            var eo = null,
              to = null;
            function no(e, t) {
              return (
                "textarea" === e ||
                "noscript" === e ||
                "string" == typeof t.children ||
                "number" == typeof t.children ||
                ("object" == typeof t.dangerouslySetInnerHTML &&
                  null !== t.dangerouslySetInnerHTML &&
                  null != t.dangerouslySetInnerHTML.__html)
              );
            }
            var ro = "function" == typeof setTimeout ? setTimeout : void 0,
              oo = "function" == typeof clearTimeout ? clearTimeout : void 0,
              ao = "function" == typeof Promise ? Promise : void 0,
              io =
                "function" == typeof queueMicrotask
                  ? queueMicrotask
                  : void 0 !== ao
                  ? function (e) {
                      return ao.resolve(null).then(e).catch(lo);
                    }
                  : ro;
            function lo(e) {
              setTimeout(function () {
                throw e;
              });
            }
            function uo(e, t) {
              var n = t,
                r = 0;
              do {
                var o = n.nextSibling;
                if ((e.removeChild(n), o && 8 === o.nodeType))
                  if ("/$" === (n = o.data)) {
                    if (0 === r) return e.removeChild(o), void Bt(t);
                    r--;
                  } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
                n = o;
              } while (n);
              Bt(t);
            }
            function co(e) {
              for (; null != e; e = e.nextSibling) {
                var t = e.nodeType;
                if (1 === t || 3 === t) break;
                if (8 === t) {
                  if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
                  if ("/$" === t) return null;
                }
              }
              return e;
            }
            function so(e) {
              e = e.previousSibling;
              for (var t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("$" === n || "$!" === n || "$?" === n) {
                    if (0 === t) return e;
                    t--;
                  } else "/$" === n && t++;
                }
                e = e.previousSibling;
              }
              return null;
            }
            var fo = Math.random().toString(36).slice(2),
              po = "__reactFiber$" + fo,
              ho = "__reactProps$" + fo,
              mo = "__reactContainer$" + fo,
              vo = "__reactEvents$" + fo,
              yo = "__reactListeners$" + fo,
              go = "__reactHandles$" + fo;
            function bo(e) {
              var t = e[po];
              if (t) return t;
              for (var n = e.parentNode; n; ) {
                if ((t = n[mo] || n[po])) {
                  if (
                    ((n = t.alternate),
                    null !== t.child || (null !== n && null !== n.child))
                  )
                    for (e = so(e); null !== e; ) {
                      if ((n = e[po])) return n;
                      e = so(e);
                    }
                  return t;
                }
                n = (e = n).parentNode;
              }
              return null;
            }
            function wo(e) {
              return !(e = e[po] || e[mo]) ||
                (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
                ? null
                : e;
            }
            function Eo(e) {
              if (5 === e.tag || 6 === e.tag) return e.stateNode;
              throw Error(a(33));
            }
            function So(e) {
              return e[ho] || null;
            }
            var xo = [],
              _o = -1;
            function ko(e) {
              return { current: e };
            }
            function Po(e) {
              0 > _o || ((e.current = xo[_o]), (xo[_o] = null), _o--);
            }
            function Co(e, t) {
              _o++, (xo[_o] = e.current), (e.current = t);
            }
            var Oo = {},
              Lo = ko(Oo),
              Ro = ko(!1),
              To = Oo;
            function No(e, t) {
              var n = e.type.contextTypes;
              if (!n) return Oo;
              var r = e.stateNode;
              if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
                return r.__reactInternalMemoizedMaskedChildContext;
              var o,
                a = {};
              for (o in n) a[o] = t[o];
              return (
                r &&
                  (((e =
                    e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                    t),
                  (e.__reactInternalMemoizedMaskedChildContext = a)),
                a
              );
            }
            function Do(e) {
              return null != e.childContextTypes;
            }
            function jo() {
              Po(Ro), Po(Lo);
            }
            function Mo(e, t, n) {
              if (Lo.current !== Oo) throw Error(a(168));
              Co(Lo, t), Co(Ro, n);
            }
            function Uo(e, t, n) {
              var r = e.stateNode;
              if (
                ((t = t.childContextTypes),
                "function" != typeof r.getChildContext)
              )
                return n;
              for (var o in (r = r.getChildContext()))
                if (!(o in t)) throw Error(a(108, H(e) || "Unknown", o));
              return I({}, n, r);
            }
            function Io(e) {
              return (
                (e =
                  ((e = e.stateNode) &&
                    e.__reactInternalMemoizedMergedChildContext) ||
                  Oo),
                (To = Lo.current),
                Co(Lo, e),
                Co(Ro, Ro.current),
                !0
              );
            }
            function Ao(e, t, n) {
              var r = e.stateNode;
              if (!r) throw Error(a(169));
              n
                ? ((e = Uo(e, t, To)),
                  (r.__reactInternalMemoizedMergedChildContext = e),
                  Po(Ro),
                  Po(Lo),
                  Co(Lo, e))
                : Po(Ro),
                Co(Ro, n);
            }
            var Wo = null,
              zo = !1,
              Fo = !1;
            function Bo(e) {
              null === Wo ? (Wo = [e]) : Wo.push(e);
            }
            function Ho() {
              if (!Fo && null !== Wo) {
                Fo = !0;
                var e = 0,
                  t = bt;
                try {
                  var n = Wo;
                  for (bt = 1; e < n.length; e++) {
                    var r = n[e];
                    do {
                      r = r(!0);
                    } while (null !== r);
                  }
                  (Wo = null), (zo = !1);
                } catch (t) {
                  throw (null !== Wo && (Wo = Wo.slice(e + 1)), Qe(Ze, Ho), t);
                } finally {
                  (bt = t), (Fo = !1);
                }
              }
              return null;
            }
            var $o = [],
              Vo = 0,
              Jo = null,
              Qo = 0,
              qo = [],
              Yo = 0,
              Ko = null,
              Go = 1,
              Xo = "";
            function Zo(e, t) {
              ($o[Vo++] = Qo), ($o[Vo++] = Jo), (Jo = e), (Qo = t);
            }
            function ea(e, t, n) {
              (qo[Yo++] = Go), (qo[Yo++] = Xo), (qo[Yo++] = Ko), (Ko = e);
              var r = Go;
              e = Xo;
              var o = 32 - it(r) - 1;
              (r &= ~(1 << o)), (n += 1);
              var a = 32 - it(t) + o;
              if (30 < a) {
                var i = o - (o % 5);
                (a = (r & ((1 << i) - 1)).toString(32)),
                  (r >>= i),
                  (o -= i),
                  (Go = (1 << (32 - it(t) + o)) | (n << o) | r),
                  (Xo = a + e);
              } else (Go = (1 << a) | (n << o) | r), (Xo = e);
            }
            function ta(e) {
              null !== e.return && (Zo(e, 1), ea(e, 1, 0));
            }
            function na(e) {
              for (; e === Jo; )
                (Jo = $o[--Vo]),
                  ($o[Vo] = null),
                  (Qo = $o[--Vo]),
                  ($o[Vo] = null);
              for (; e === Ko; )
                (Ko = qo[--Yo]),
                  (qo[Yo] = null),
                  (Xo = qo[--Yo]),
                  (qo[Yo] = null),
                  (Go = qo[--Yo]),
                  (qo[Yo] = null);
            }
            var ra = null,
              oa = null,
              aa = !1,
              ia = null;
            function la(e, t) {
              var n = Nc(5, null, null, 0);
              (n.elementType = "DELETED"),
                (n.stateNode = t),
                (n.return = e),
                null === (t = e.deletions)
                  ? ((e.deletions = [n]), (e.flags |= 16))
                  : t.push(n);
            }
            function ua(e, t) {
              switch (e.tag) {
                case 5:
                  var n = e.type;
                  return (
                    null !==
                      (t =
                        1 !== t.nodeType ||
                        n.toLowerCase() !== t.nodeName.toLowerCase()
                          ? null
                          : t) &&
                    ((e.stateNode = t), (ra = e), (oa = co(t.firstChild)), !0)
                  );
                case 6:
                  return (
                    null !==
                      (t =
                        "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                    ((e.stateNode = t), (ra = e), (oa = null), !0)
                  );
                case 13:
                  return (
                    null !== (t = 8 !== t.nodeType ? null : t) &&
                    ((n = null !== Ko ? { id: Go, overflow: Xo } : null),
                    (e.memoizedState = {
                      dehydrated: t,
                      treeContext: n,
                      retryLane: 1073741824,
                    }),
                    ((n = Nc(18, null, null, 0)).stateNode = t),
                    (n.return = e),
                    (e.child = n),
                    (ra = e),
                    (oa = null),
                    !0)
                  );
                default:
                  return !1;
              }
            }
            function ca(e) {
              return 0 != (1 & e.mode) && 0 == (128 & e.flags);
            }
            function sa(e) {
              if (aa) {
                var t = oa;
                if (t) {
                  var n = t;
                  if (!ua(e, t)) {
                    if (ca(e)) throw Error(a(418));
                    t = co(n.nextSibling);
                    var r = ra;
                    t && ua(e, t)
                      ? la(r, n)
                      : ((e.flags = (-4097 & e.flags) | 2),
                        (aa = !1),
                        (ra = e));
                  }
                } else {
                  if (ca(e)) throw Error(a(418));
                  (e.flags = (-4097 & e.flags) | 2), (aa = !1), (ra = e);
                }
              }
            }
            function fa(e) {
              for (
                e = e.return;
                null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

              )
                e = e.return;
              ra = e;
            }
            function da(e) {
              if (e !== ra) return !1;
              if (!aa) return fa(e), (aa = !0), !1;
              var t;
              if (
                ((t = 3 !== e.tag) &&
                  !(t = 5 !== e.tag) &&
                  (t =
                    "head" !== (t = e.type) &&
                    "body" !== t &&
                    !no(e.type, e.memoizedProps)),
                t && (t = oa))
              ) {
                if (ca(e)) throw (pa(), Error(a(418)));
                for (; t; ) la(e, t), (t = co(t.nextSibling));
              }
              if ((fa(e), 13 === e.tag)) {
                if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
                  throw Error(a(317));
                e: {
                  for (e = e.nextSibling, t = 0; e; ) {
                    if (8 === e.nodeType) {
                      var n = e.data;
                      if ("/$" === n) {
                        if (0 === t) {
                          oa = co(e.nextSibling);
                          break e;
                        }
                        t--;
                      } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                    }
                    e = e.nextSibling;
                  }
                  oa = null;
                }
              } else oa = ra ? co(e.stateNode.nextSibling) : null;
              return !0;
            }
            function pa() {
              for (var e = oa; e; ) e = co(e.nextSibling);
            }
            function ha() {
              (oa = ra = null), (aa = !1);
            }
            function ma(e) {
              null === ia ? (ia = [e]) : ia.push(e);
            }
            var va = w.ReactCurrentBatchConfig;
            function ya(e, t) {
              if (e && e.defaultProps) {
                for (var n in ((t = I({}, t)), (e = e.defaultProps)))
                  void 0 === t[n] && (t[n] = e[n]);
                return t;
              }
              return t;
            }
            var ga = ko(null),
              ba = null,
              wa = null,
              Ea = null;
            function Sa() {
              Ea = wa = ba = null;
            }
            function xa(e) {
              var t = ga.current;
              Po(ga), (e._currentValue = t);
            }
            function _a(e, t, n) {
              for (; null !== e; ) {
                var r = e.alternate;
                if (
                  ((e.childLanes & t) !== t
                    ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                    : null !== r &&
                      (r.childLanes & t) !== t &&
                      (r.childLanes |= t),
                  e === n)
                )
                  break;
                e = e.return;
              }
            }
            function ka(e, t) {
              (ba = e),
                (Ea = wa = null),
                null !== (e = e.dependencies) &&
                  null !== e.firstContext &&
                  (0 != (e.lanes & t) && (wl = !0), (e.firstContext = null));
            }
            function Pa(e) {
              var t = e._currentValue;
              if (Ea !== e)
                if (
                  ((e = { context: e, memoizedValue: t, next: null }),
                  null === wa)
                ) {
                  if (null === ba) throw Error(a(308));
                  (wa = e), (ba.dependencies = { lanes: 0, firstContext: e });
                } else wa = wa.next = e;
              return t;
            }
            var Ca = null;
            function Oa(e) {
              null === Ca ? (Ca = [e]) : Ca.push(e);
            }
            function La(e, t, n, r) {
              var o = t.interleaved;
              return (
                null === o
                  ? ((n.next = n), Oa(t))
                  : ((n.next = o.next), (o.next = n)),
                (t.interleaved = n),
                Ra(e, r)
              );
            }
            function Ra(e, t) {
              e.lanes |= t;
              var n = e.alternate;
              for (
                null !== n && (n.lanes |= t), n = e, e = e.return;
                null !== e;

              )
                (e.childLanes |= t),
                  null !== (n = e.alternate) && (n.childLanes |= t),
                  (n = e),
                  (e = e.return);
              return 3 === n.tag ? n.stateNode : null;
            }
            var Ta = !1;
            function Na(e) {
              e.updateQueue = {
                baseState: e.memoizedState,
                firstBaseUpdate: null,
                lastBaseUpdate: null,
                shared: { pending: null, interleaved: null, lanes: 0 },
                effects: null,
              };
            }
            function Da(e, t) {
              (e = e.updateQueue),
                t.updateQueue === e &&
                  (t.updateQueue = {
                    baseState: e.baseState,
                    firstBaseUpdate: e.firstBaseUpdate,
                    lastBaseUpdate: e.lastBaseUpdate,
                    shared: e.shared,
                    effects: e.effects,
                  });
            }
            function ja(e, t) {
              return {
                eventTime: e,
                lane: t,
                tag: 0,
                payload: null,
                callback: null,
                next: null,
              };
            }
            function Ma(e, t, n) {
              var r = e.updateQueue;
              if (null === r) return null;
              if (((r = r.shared), 0 != (2 & Lu))) {
                var o = r.pending;
                return (
                  null === o ? (t.next = t) : ((t.next = o.next), (o.next = t)),
                  (r.pending = t),
                  Ra(e, n)
                );
              }
              return (
                null === (o = r.interleaved)
                  ? ((t.next = t), Oa(r))
                  : ((t.next = o.next), (o.next = t)),
                (r.interleaved = t),
                Ra(e, n)
              );
            }
            function Ua(e, t, n) {
              if (
                null !== (t = t.updateQueue) &&
                ((t = t.shared), 0 != (4194240 & n))
              ) {
                var r = t.lanes;
                (n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n);
              }
            }
            function Ia(e, t) {
              var n = e.updateQueue,
                r = e.alternate;
              if (null !== r && n === (r = r.updateQueue)) {
                var o = null,
                  a = null;
                if (null !== (n = n.firstBaseUpdate)) {
                  do {
                    var i = {
                      eventTime: n.eventTime,
                      lane: n.lane,
                      tag: n.tag,
                      payload: n.payload,
                      callback: n.callback,
                      next: null,
                    };
                    null === a ? (o = a = i) : (a = a.next = i), (n = n.next);
                  } while (null !== n);
                  null === a ? (o = a = t) : (a = a.next = t);
                } else o = a = t;
                return (
                  (n = {
                    baseState: r.baseState,
                    firstBaseUpdate: o,
                    lastBaseUpdate: a,
                    shared: r.shared,
                    effects: r.effects,
                  }),
                  void (e.updateQueue = n)
                );
              }
              null === (e = n.lastBaseUpdate)
                ? (n.firstBaseUpdate = t)
                : (e.next = t),
                (n.lastBaseUpdate = t);
            }
            function Aa(e, t, n, r) {
              var o = e.updateQueue;
              Ta = !1;
              var a = o.firstBaseUpdate,
                i = o.lastBaseUpdate,
                l = o.shared.pending;
              if (null !== l) {
                o.shared.pending = null;
                var u = l,
                  c = u.next;
                (u.next = null), null === i ? (a = c) : (i.next = c), (i = u);
                var s = e.alternate;
                null !== s &&
                  (l = (s = s.updateQueue).lastBaseUpdate) !== i &&
                  (null === l ? (s.firstBaseUpdate = c) : (l.next = c),
                  (s.lastBaseUpdate = u));
              }
              if (null !== a) {
                var f = o.baseState;
                for (i = 0, s = c = u = null, l = a; ; ) {
                  var d = l.lane,
                    p = l.eventTime;
                  if ((r & d) === d) {
                    null !== s &&
                      (s = s.next =
                        {
                          eventTime: p,
                          lane: 0,
                          tag: l.tag,
                          payload: l.payload,
                          callback: l.callback,
                          next: null,
                        });
                    e: {
                      var h = e,
                        m = l;
                      switch (((d = t), (p = n), m.tag)) {
                        case 1:
                          if ("function" == typeof (h = m.payload)) {
                            f = h.call(p, f, d);
                            break e;
                          }
                          f = h;
                          break e;
                        case 3:
                          h.flags = (-65537 & h.flags) | 128;
                        case 0:
                          if (
                            null ==
                            (d =
                              "function" == typeof (h = m.payload)
                                ? h.call(p, f, d)
                                : h)
                          )
                            break e;
                          f = I({}, f, d);
                          break e;
                        case 2:
                          Ta = !0;
                      }
                    }
                    null !== l.callback &&
                      0 !== l.lane &&
                      ((e.flags |= 64),
                      null === (d = o.effects) ? (o.effects = [l]) : d.push(l));
                  } else
                    (p = {
                      eventTime: p,
                      lane: d,
                      tag: l.tag,
                      payload: l.payload,
                      callback: l.callback,
                      next: null,
                    }),
                      null === s ? ((c = s = p), (u = f)) : (s = s.next = p),
                      (i |= d);
                  if (null === (l = l.next)) {
                    if (null === (l = o.shared.pending)) break;
                    (l = (d = l).next),
                      (d.next = null),
                      (o.lastBaseUpdate = d),
                      (o.shared.pending = null);
                  }
                }
                if (
                  (null === s && (u = f),
                  (o.baseState = u),
                  (o.firstBaseUpdate = c),
                  (o.lastBaseUpdate = s),
                  null !== (t = o.shared.interleaved))
                ) {
                  o = t;
                  do {
                    (i |= o.lane), (o = o.next);
                  } while (o !== t);
                } else null === a && (o.shared.lanes = 0);
                (Iu |= i), (e.lanes = i), (e.memoizedState = f);
              }
            }
            function Wa(e, t, n) {
              if (((e = t.effects), (t.effects = null), null !== e))
                for (t = 0; t < e.length; t++) {
                  var r = e[t],
                    o = r.callback;
                  if (null !== o) {
                    if (((r.callback = null), (r = n), "function" != typeof o))
                      throw Error(a(191, o));
                    o.call(r);
                  }
                }
            }
            var za = new r.Component().refs;
            function Fa(e, t, n, r) {
              (n = null == (n = n(r, (t = e.memoizedState))) ? t : I({}, t, n)),
                (e.memoizedState = n),
                0 === e.lanes && (e.updateQueue.baseState = n);
            }
            var Ba = {
              isMounted: function (e) {
                return !!(e = e._reactInternals) && Be(e) === e;
              },
              enqueueSetState: function (e, t, n) {
                e = e._reactInternals;
                var r = tc(),
                  o = nc(e),
                  a = ja(r, o);
                (a.payload = t),
                  null != n && (a.callback = n),
                  null !== (t = Ma(e, a, o)) && (rc(t, e, o, r), Ua(t, e, o));
              },
              enqueueReplaceState: function (e, t, n) {
                e = e._reactInternals;
                var r = tc(),
                  o = nc(e),
                  a = ja(r, o);
                (a.tag = 1),
                  (a.payload = t),
                  null != n && (a.callback = n),
                  null !== (t = Ma(e, a, o)) && (rc(t, e, o, r), Ua(t, e, o));
              },
              enqueueForceUpdate: function (e, t) {
                e = e._reactInternals;
                var n = tc(),
                  r = nc(e),
                  o = ja(n, r);
                (o.tag = 2),
                  null != t && (o.callback = t),
                  null !== (t = Ma(e, o, r)) && (rc(t, e, r, n), Ua(t, e, r));
              },
            };
            function Ha(e, t, n, r, o, a, i) {
              return "function" ==
                typeof (e = e.stateNode).shouldComponentUpdate
                ? e.shouldComponentUpdate(r, a, i)
                : !(
                    t.prototype &&
                    t.prototype.isPureReactComponent &&
                    ur(n, r) &&
                    ur(o, a)
                  );
            }
            function $a(e, t, n) {
              var r = !1,
                o = Oo,
                a = t.contextType;
              return (
                "object" == typeof a && null !== a
                  ? (a = Pa(a))
                  : ((o = Do(t) ? To : Lo.current),
                    (a = (r = null != (r = t.contextTypes)) ? No(e, o) : Oo)),
                (t = new t(n, a)),
                (e.memoizedState =
                  null !== t.state && void 0 !== t.state ? t.state : null),
                (t.updater = Ba),
                (e.stateNode = t),
                (t._reactInternals = e),
                r &&
                  (((e =
                    e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                    o),
                  (e.__reactInternalMemoizedMaskedChildContext = a)),
                t
              );
            }
            function Va(e, t, n, r) {
              (e = t.state),
                "function" == typeof t.componentWillReceiveProps &&
                  t.componentWillReceiveProps(n, r),
                "function" == typeof t.UNSAFE_componentWillReceiveProps &&
                  t.UNSAFE_componentWillReceiveProps(n, r),
                t.state !== e && Ba.enqueueReplaceState(t, t.state, null);
            }
            function Ja(e, t, n, r) {
              var o = e.stateNode;
              (o.props = n), (o.state = e.memoizedState), (o.refs = za), Na(e);
              var a = t.contextType;
              "object" == typeof a && null !== a
                ? (o.context = Pa(a))
                : ((a = Do(t) ? To : Lo.current), (o.context = No(e, a))),
                (o.state = e.memoizedState),
                "function" == typeof (a = t.getDerivedStateFromProps) &&
                  (Fa(e, t, a, n), (o.state = e.memoizedState)),
                "function" == typeof t.getDerivedStateFromProps ||
                  "function" == typeof o.getSnapshotBeforeUpdate ||
                  ("function" != typeof o.UNSAFE_componentWillMount &&
                    "function" != typeof o.componentWillMount) ||
                  ((t = o.state),
                  "function" == typeof o.componentWillMount &&
                    o.componentWillMount(),
                  "function" == typeof o.UNSAFE_componentWillMount &&
                    o.UNSAFE_componentWillMount(),
                  t !== o.state && Ba.enqueueReplaceState(o, o.state, null),
                  Aa(e, n, o, r),
                  (o.state = e.memoizedState)),
                "function" == typeof o.componentDidMount &&
                  (e.flags |= 4194308);
            }
            function Qa(e, t, n) {
              if (
                null !== (e = n.ref) &&
                "function" != typeof e &&
                "object" != typeof e
              ) {
                if (n._owner) {
                  if ((n = n._owner)) {
                    if (1 !== n.tag) throw Error(a(309));
                    var r = n.stateNode;
                  }
                  if (!r) throw Error(a(147, e));
                  var o = r,
                    i = "" + e;
                  return null !== t &&
                    null !== t.ref &&
                    "function" == typeof t.ref &&
                    t.ref._stringRef === i
                    ? t.ref
                    : ((t = function (e) {
                        var t = o.refs;
                        t === za && (t = o.refs = {}),
                          null === e ? delete t[i] : (t[i] = e);
                      }),
                      (t._stringRef = i),
                      t);
                }
                if ("string" != typeof e) throw Error(a(284));
                if (!n._owner) throw Error(a(290, e));
              }
              return e;
            }
            function qa(e, t) {
              throw (
                ((e = Object.prototype.toString.call(t)),
                Error(
                  a(
                    31,
                    "[object Object]" === e
                      ? "object with keys {" + Object.keys(t).join(", ") + "}"
                      : e
                  )
                ))
              );
            }
            function Ya(e) {
              return (0, e._init)(e._payload);
            }
            function Ka(e) {
              function t(t, n) {
                if (e) {
                  var r = t.deletions;
                  null === r
                    ? ((t.deletions = [n]), (t.flags |= 16))
                    : r.push(n);
                }
              }
              function n(n, r) {
                if (!e) return null;
                for (; null !== r; ) t(n, r), (r = r.sibling);
                return null;
              }
              function r(e, t) {
                for (e = new Map(); null !== t; )
                  null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                    (t = t.sibling);
                return e;
              }
              function o(e, t) {
                return ((e = jc(e, t)).index = 0), (e.sibling = null), e;
              }
              function i(t, n, r) {
                return (
                  (t.index = r),
                  e
                    ? null !== (r = t.alternate)
                      ? (r = r.index) < n
                        ? ((t.flags |= 2), n)
                        : r
                      : ((t.flags |= 2), n)
                    : ((t.flags |= 1048576), n)
                );
              }
              function l(t) {
                return e && null === t.alternate && (t.flags |= 2), t;
              }
              function u(e, t, n, r) {
                return null === t || 6 !== t.tag
                  ? (((t = Ac(n, e.mode, r)).return = e), t)
                  : (((t = o(t, n)).return = e), t);
              }
              function c(e, t, n, r) {
                var a = n.type;
                return a === x
                  ? f(e, t, n.props.children, r, n.key)
                  : null !== t &&
                    (t.elementType === a ||
                      ("object" == typeof a &&
                        null !== a &&
                        a.$$typeof === N &&
                        Ya(a) === t.type))
                  ? (((r = o(t, n.props)).ref = Qa(e, t, n)), (r.return = e), r)
                  : (((r = Mc(n.type, n.key, n.props, null, e.mode, r)).ref =
                      Qa(e, t, n)),
                    (r.return = e),
                    r);
              }
              function s(e, t, n, r) {
                return null === t ||
                  4 !== t.tag ||
                  t.stateNode.containerInfo !== n.containerInfo ||
                  t.stateNode.implementation !== n.implementation
                  ? (((t = Wc(n, e.mode, r)).return = e), t)
                  : (((t = o(t, n.children || [])).return = e), t);
              }
              function f(e, t, n, r, a) {
                return null === t || 7 !== t.tag
                  ? (((t = Uc(n, e.mode, r, a)).return = e), t)
                  : (((t = o(t, n)).return = e), t);
              }
              function d(e, t, n) {
                if (("string" == typeof t && "" !== t) || "number" == typeof t)
                  return ((t = Ac("" + t, e.mode, n)).return = e), t;
                if ("object" == typeof t && null !== t) {
                  switch (t.$$typeof) {
                    case E:
                      return (
                        ((n = Mc(t.type, t.key, t.props, null, e.mode, n)).ref =
                          Qa(e, null, t)),
                        (n.return = e),
                        n
                      );
                    case S:
                      return ((t = Wc(t, e.mode, n)).return = e), t;
                    case N:
                      return d(e, (0, t._init)(t._payload), n);
                  }
                  if (te(t) || M(t))
                    return ((t = Uc(t, e.mode, n, null)).return = e), t;
                  qa(e, t);
                }
                return null;
              }
              function p(e, t, n, r) {
                var o = null !== t ? t.key : null;
                if (("string" == typeof n && "" !== n) || "number" == typeof n)
                  return null !== o ? null : u(e, t, "" + n, r);
                if ("object" == typeof n && null !== n) {
                  switch (n.$$typeof) {
                    case E:
                      return n.key === o ? c(e, t, n, r) : null;
                    case S:
                      return n.key === o ? s(e, t, n, r) : null;
                    case N:
                      return p(e, t, (o = n._init)(n._payload), r);
                  }
                  if (te(n) || M(n))
                    return null !== o ? null : f(e, t, n, r, null);
                  qa(e, n);
                }
                return null;
              }
              function h(e, t, n, r, o) {
                if (("string" == typeof r && "" !== r) || "number" == typeof r)
                  return u(t, (e = e.get(n) || null), "" + r, o);
                if ("object" == typeof r && null !== r) {
                  switch (r.$$typeof) {
                    case E:
                      return c(
                        t,
                        (e = e.get(null === r.key ? n : r.key) || null),
                        r,
                        o
                      );
                    case S:
                      return s(
                        t,
                        (e = e.get(null === r.key ? n : r.key) || null),
                        r,
                        o
                      );
                    case N:
                      return h(e, t, n, (0, r._init)(r._payload), o);
                  }
                  if (te(r) || M(r))
                    return f(t, (e = e.get(n) || null), r, o, null);
                  qa(t, r);
                }
                return null;
              }
              function m(o, a, l, u) {
                for (
                  var c = null, s = null, f = a, m = (a = 0), v = null;
                  null !== f && m < l.length;
                  m++
                ) {
                  f.index > m ? ((v = f), (f = null)) : (v = f.sibling);
                  var y = p(o, f, l[m], u);
                  if (null === y) {
                    null === f && (f = v);
                    break;
                  }
                  e && f && null === y.alternate && t(o, f),
                    (a = i(y, a, m)),
                    null === s ? (c = y) : (s.sibling = y),
                    (s = y),
                    (f = v);
                }
                if (m === l.length) return n(o, f), aa && Zo(o, m), c;
                if (null === f) {
                  for (; m < l.length; m++)
                    null !== (f = d(o, l[m], u)) &&
                      ((a = i(f, a, m)),
                      null === s ? (c = f) : (s.sibling = f),
                      (s = f));
                  return aa && Zo(o, m), c;
                }
                for (f = r(o, f); m < l.length; m++)
                  null !== (v = h(f, o, m, l[m], u)) &&
                    (e &&
                      null !== v.alternate &&
                      f.delete(null === v.key ? m : v.key),
                    (a = i(v, a, m)),
                    null === s ? (c = v) : (s.sibling = v),
                    (s = v));
                return (
                  e &&
                    f.forEach(function (e) {
                      return t(o, e);
                    }),
                  aa && Zo(o, m),
                  c
                );
              }
              function v(o, l, u, c) {
                var s = M(u);
                if ("function" != typeof s) throw Error(a(150));
                if (null == (u = s.call(u))) throw Error(a(151));
                for (
                  var f = (s = null),
                    m = l,
                    v = (l = 0),
                    y = null,
                    g = u.next();
                  null !== m && !g.done;
                  v++, g = u.next()
                ) {
                  m.index > v ? ((y = m), (m = null)) : (y = m.sibling);
                  var b = p(o, m, g.value, c);
                  if (null === b) {
                    null === m && (m = y);
                    break;
                  }
                  e && m && null === b.alternate && t(o, m),
                    (l = i(b, l, v)),
                    null === f ? (s = b) : (f.sibling = b),
                    (f = b),
                    (m = y);
                }
                if (g.done) return n(o, m), aa && Zo(o, v), s;
                if (null === m) {
                  for (; !g.done; v++, g = u.next())
                    null !== (g = d(o, g.value, c)) &&
                      ((l = i(g, l, v)),
                      null === f ? (s = g) : (f.sibling = g),
                      (f = g));
                  return aa && Zo(o, v), s;
                }
                for (m = r(o, m); !g.done; v++, g = u.next())
                  null !== (g = h(m, o, v, g.value, c)) &&
                    (e &&
                      null !== g.alternate &&
                      m.delete(null === g.key ? v : g.key),
                    (l = i(g, l, v)),
                    null === f ? (s = g) : (f.sibling = g),
                    (f = g));
                return (
                  e &&
                    m.forEach(function (e) {
                      return t(o, e);
                    }),
                  aa && Zo(o, v),
                  s
                );
              }
              return function e(r, a, i, u) {
                if (
                  ("object" == typeof i &&
                    null !== i &&
                    i.type === x &&
                    null === i.key &&
                    (i = i.props.children),
                  "object" == typeof i && null !== i)
                ) {
                  switch (i.$$typeof) {
                    case E:
                      e: {
                        for (var c = i.key, s = a; null !== s; ) {
                          if (s.key === c) {
                            if ((c = i.type) === x) {
                              if (7 === s.tag) {
                                n(r, s.sibling),
                                  ((a = o(s, i.props.children)).return = r),
                                  (r = a);
                                break e;
                              }
                            } else if (
                              s.elementType === c ||
                              ("object" == typeof c &&
                                null !== c &&
                                c.$$typeof === N &&
                                Ya(c) === s.type)
                            ) {
                              n(r, s.sibling),
                                ((a = o(s, i.props)).ref = Qa(r, s, i)),
                                (a.return = r),
                                (r = a);
                              break e;
                            }
                            n(r, s);
                            break;
                          }
                          t(r, s), (s = s.sibling);
                        }
                        i.type === x
                          ? (((a = Uc(
                              i.props.children,
                              r.mode,
                              u,
                              i.key
                            )).return = r),
                            (r = a))
                          : (((u = Mc(
                              i.type,
                              i.key,
                              i.props,
                              null,
                              r.mode,
                              u
                            )).ref = Qa(r, a, i)),
                            (u.return = r),
                            (r = u));
                      }
                      return l(r);
                    case S:
                      e: {
                        for (s = i.key; null !== a; ) {
                          if (a.key === s) {
                            if (
                              4 === a.tag &&
                              a.stateNode.containerInfo === i.containerInfo &&
                              a.stateNode.implementation === i.implementation
                            ) {
                              n(r, a.sibling),
                                ((a = o(a, i.children || [])).return = r),
                                (r = a);
                              break e;
                            }
                            n(r, a);
                            break;
                          }
                          t(r, a), (a = a.sibling);
                        }
                        ((a = Wc(i, r.mode, u)).return = r), (r = a);
                      }
                      return l(r);
                    case N:
                      return e(r, a, (s = i._init)(i._payload), u);
                  }
                  if (te(i)) return m(r, a, i, u);
                  if (M(i)) return v(r, a, i, u);
                  qa(r, i);
                }
                return ("string" == typeof i && "" !== i) ||
                  "number" == typeof i
                  ? ((i = "" + i),
                    null !== a && 6 === a.tag
                      ? (n(r, a.sibling), ((a = o(a, i)).return = r), (r = a))
                      : (n(r, a), ((a = Ac(i, r.mode, u)).return = r), (r = a)),
                    l(r))
                  : n(r, a);
              };
            }
            var Ga = Ka(!0),
              Xa = Ka(!1),
              Za = {},
              ei = ko(Za),
              ti = ko(Za),
              ni = ko(Za);
            function ri(e) {
              if (e === Za) throw Error(a(174));
              return e;
            }
            function oi(e, t) {
              switch ((Co(ni, t), Co(ti, e), Co(ei, Za), (e = t.nodeType))) {
                case 9:
                case 11:
                  t = (t = t.documentElement) ? t.namespaceURI : ue(null, "");
                  break;
                default:
                  t = ue(
                    (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                    (e = e.tagName)
                  );
              }
              Po(ei), Co(ei, t);
            }
            function ai() {
              Po(ei), Po(ti), Po(ni);
            }
            function ii(e) {
              ri(ni.current);
              var t = ri(ei.current),
                n = ue(t, e.type);
              t !== n && (Co(ti, e), Co(ei, n));
            }
            function li(e) {
              ti.current === e && (Po(ei), Po(ti));
            }
            var ui = ko(0);
            function ci(e) {
              for (var t = e; null !== t; ) {
                if (13 === t.tag) {
                  var n = t.memoizedState;
                  if (
                    null !== n &&
                    (null === (n = n.dehydrated) ||
                      "$?" === n.data ||
                      "$!" === n.data)
                  )
                    return t;
                } else if (
                  19 === t.tag &&
                  void 0 !== t.memoizedProps.revealOrder
                ) {
                  if (0 != (128 & t.flags)) return t;
                } else if (null !== t.child) {
                  (t.child.return = t), (t = t.child);
                  continue;
                }
                if (t === e) break;
                for (; null === t.sibling; ) {
                  if (null === t.return || t.return === e) return null;
                  t = t.return;
                }
                (t.sibling.return = t.return), (t = t.sibling);
              }
              return null;
            }
            var si = [];
            function fi() {
              for (var e = 0; e < si.length; e++)
                si[e]._workInProgressVersionPrimary = null;
              si.length = 0;
            }
            var di = w.ReactCurrentDispatcher,
              pi = w.ReactCurrentBatchConfig,
              hi = 0,
              mi = null,
              vi = null,
              yi = null,
              gi = !1,
              bi = !1,
              wi = 0,
              Ei = 0;
            function Si() {
              throw Error(a(321));
            }
            function xi(e, t) {
              if (null === t) return !1;
              for (var n = 0; n < t.length && n < e.length; n++)
                if (!lr(e[n], t[n])) return !1;
              return !0;
            }
            function _i(e, t, n, r, o, i) {
              if (
                ((hi = i),
                (mi = t),
                (t.memoizedState = null),
                (t.updateQueue = null),
                (t.lanes = 0),
                (di.current = null === e || null === e.memoizedState ? ll : ul),
                (e = n(r, o)),
                bi)
              ) {
                i = 0;
                do {
                  if (((bi = !1), (wi = 0), 25 <= i)) throw Error(a(301));
                  (i += 1),
                    (yi = vi = null),
                    (t.updateQueue = null),
                    (di.current = cl),
                    (e = n(r, o));
                } while (bi);
              }
              if (
                ((di.current = il),
                (t = null !== vi && null !== vi.next),
                (hi = 0),
                (yi = vi = mi = null),
                (gi = !1),
                t)
              )
                throw Error(a(300));
              return e;
            }
            function ki() {
              var e = 0 !== wi;
              return (wi = 0), e;
            }
            function Pi() {
              var e = {
                memoizedState: null,
                baseState: null,
                baseQueue: null,
                queue: null,
                next: null,
              };
              return (
                null === yi ? (mi.memoizedState = yi = e) : (yi = yi.next = e),
                yi
              );
            }
            function Ci() {
              if (null === vi) {
                var e = mi.alternate;
                e = null !== e ? e.memoizedState : null;
              } else e = vi.next;
              var t = null === yi ? mi.memoizedState : yi.next;
              if (null !== t) (yi = t), (vi = e);
              else {
                if (null === e) throw Error(a(310));
                (e = {
                  memoizedState: (vi = e).memoizedState,
                  baseState: vi.baseState,
                  baseQueue: vi.baseQueue,
                  queue: vi.queue,
                  next: null,
                }),
                  null === yi
                    ? (mi.memoizedState = yi = e)
                    : (yi = yi.next = e);
              }
              return yi;
            }
            function Oi(e, t) {
              return "function" == typeof t ? t(e) : t;
            }
            function Li(e) {
              var t = Ci(),
                n = t.queue;
              if (null === n) throw Error(a(311));
              n.lastRenderedReducer = e;
              var r = vi,
                o = r.baseQueue,
                i = n.pending;
              if (null !== i) {
                if (null !== o) {
                  var l = o.next;
                  (o.next = i.next), (i.next = l);
                }
                (r.baseQueue = o = i), (n.pending = null);
              }
              if (null !== o) {
                (i = o.next), (r = r.baseState);
                var u = (l = null),
                  c = null,
                  s = i;
                do {
                  var f = s.lane;
                  if ((hi & f) === f)
                    null !== c &&
                      (c = c.next =
                        {
                          lane: 0,
                          action: s.action,
                          hasEagerState: s.hasEagerState,
                          eagerState: s.eagerState,
                          next: null,
                        }),
                      (r = s.hasEagerState ? s.eagerState : e(r, s.action));
                  else {
                    var d = {
                      lane: f,
                      action: s.action,
                      hasEagerState: s.hasEagerState,
                      eagerState: s.eagerState,
                      next: null,
                    };
                    null === c ? ((u = c = d), (l = r)) : (c = c.next = d),
                      (mi.lanes |= f),
                      (Iu |= f);
                  }
                  s = s.next;
                } while (null !== s && s !== i);
                null === c ? (l = r) : (c.next = u),
                  lr(r, t.memoizedState) || (wl = !0),
                  (t.memoizedState = r),
                  (t.baseState = l),
                  (t.baseQueue = c),
                  (n.lastRenderedState = r);
              }
              if (null !== (e = n.interleaved)) {
                o = e;
                do {
                  (i = o.lane), (mi.lanes |= i), (Iu |= i), (o = o.next);
                } while (o !== e);
              } else null === o && (n.lanes = 0);
              return [t.memoizedState, n.dispatch];
            }
            function Ri(e) {
              var t = Ci(),
                n = t.queue;
              if (null === n) throw Error(a(311));
              n.lastRenderedReducer = e;
              var r = n.dispatch,
                o = n.pending,
                i = t.memoizedState;
              if (null !== o) {
                n.pending = null;
                var l = (o = o.next);
                do {
                  (i = e(i, l.action)), (l = l.next);
                } while (l !== o);
                lr(i, t.memoizedState) || (wl = !0),
                  (t.memoizedState = i),
                  null === t.baseQueue && (t.baseState = i),
                  (n.lastRenderedState = i);
              }
              return [i, r];
            }
            function Ti() {}
            function Ni(e, t) {
              var n = mi,
                r = Ci(),
                o = t(),
                i = !lr(r.memoizedState, o);
              if (
                (i && ((r.memoizedState = o), (wl = !0)),
                (r = r.queue),
                $i(Mi.bind(null, n, r, e), [e]),
                r.getSnapshot !== t ||
                  i ||
                  (null !== yi && 1 & yi.memoizedState.tag))
              ) {
                if (
                  ((n.flags |= 2048),
                  Wi(9, ji.bind(null, n, r, o, t), void 0, null),
                  null === Ru)
                )
                  throw Error(a(349));
                0 != (30 & hi) || Di(n, t, o);
              }
              return o;
            }
            function Di(e, t, n) {
              (e.flags |= 16384),
                (e = { getSnapshot: t, value: n }),
                null === (t = mi.updateQueue)
                  ? ((t = { lastEffect: null, stores: null }),
                    (mi.updateQueue = t),
                    (t.stores = [e]))
                  : null === (n = t.stores)
                  ? (t.stores = [e])
                  : n.push(e);
            }
            function ji(e, t, n, r) {
              (t.value = n), (t.getSnapshot = r), Ui(t) && Ii(e);
            }
            function Mi(e, t, n) {
              return n(function () {
                Ui(t) && Ii(e);
              });
            }
            function Ui(e) {
              var t = e.getSnapshot;
              e = e.value;
              try {
                var n = t();
                return !lr(e, n);
              } catch (e) {
                return !0;
              }
            }
            function Ii(e) {
              var t = Ra(e, 1);
              null !== t && rc(t, e, 1, -1);
            }
            function Ai(e) {
              var t = Pi();
              return (
                "function" == typeof e && (e = e()),
                (t.memoizedState = t.baseState = e),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: Oi,
                  lastRenderedState: e,
                }),
                (t.queue = e),
                (e = e.dispatch = nl.bind(null, mi, e)),
                [t.memoizedState, e]
              );
            }
            function Wi(e, t, n, r) {
              return (
                (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
                null === (t = mi.updateQueue)
                  ? ((t = { lastEffect: null, stores: null }),
                    (mi.updateQueue = t),
                    (t.lastEffect = e.next = e))
                  : null === (n = t.lastEffect)
                  ? (t.lastEffect = e.next = e)
                  : ((r = n.next),
                    (n.next = e),
                    (e.next = r),
                    (t.lastEffect = e)),
                e
              );
            }
            function zi() {
              return Ci().memoizedState;
            }
            function Fi(e, t, n, r) {
              var o = Pi();
              (mi.flags |= e),
                (o.memoizedState = Wi(
                  1 | t,
                  n,
                  void 0,
                  void 0 === r ? null : r
                ));
            }
            function Bi(e, t, n, r) {
              var o = Ci();
              r = void 0 === r ? null : r;
              var a = void 0;
              if (null !== vi) {
                var i = vi.memoizedState;
                if (((a = i.destroy), null !== r && xi(r, i.deps)))
                  return void (o.memoizedState = Wi(t, n, a, r));
              }
              (mi.flags |= e), (o.memoizedState = Wi(1 | t, n, a, r));
            }
            function Hi(e, t) {
              return Fi(8390656, 8, e, t);
            }
            function $i(e, t) {
              return Bi(2048, 8, e, t);
            }
            function Vi(e, t) {
              return Bi(4, 2, e, t);
            }
            function Ji(e, t) {
              return Bi(4, 4, e, t);
            }
            function Qi(e, t) {
              return "function" == typeof t
                ? ((e = e()),
                  t(e),
                  function () {
                    t(null);
                  })
                : null != t
                ? ((e = e()),
                  (t.current = e),
                  function () {
                    t.current = null;
                  })
                : void 0;
            }
            function qi(e, t, n) {
              return (
                (n = null != n ? n.concat([e]) : null),
                Bi(4, 4, Qi.bind(null, t, e), n)
              );
            }
            function Yi() {}
            function Ki(e, t) {
              var n = Ci();
              t = void 0 === t ? null : t;
              var r = n.memoizedState;
              return null !== r && null !== t && xi(t, r[1])
                ? r[0]
                : ((n.memoizedState = [e, t]), e);
            }
            function Gi(e, t) {
              var n = Ci();
              t = void 0 === t ? null : t;
              var r = n.memoizedState;
              return null !== r && null !== t && xi(t, r[1])
                ? r[0]
                : ((e = e()), (n.memoizedState = [e, t]), e);
            }
            function Xi(e, t, n) {
              return 0 == (21 & hi)
                ? (e.baseState && ((e.baseState = !1), (wl = !0)),
                  (e.memoizedState = n))
                : (lr(n, t) ||
                    ((n = mt()),
                    (mi.lanes |= n),
                    (Iu |= n),
                    (e.baseState = !0)),
                  t);
            }
            function Zi(e, t) {
              var n = bt;
              (bt = 0 !== n && 4 > n ? n : 4), e(!0);
              var r = pi.transition;
              pi.transition = {};
              try {
                e(!1), t();
              } finally {
                (bt = n), (pi.transition = r);
              }
            }
            function el() {
              return Ci().memoizedState;
            }
            function tl(e, t, n) {
              var r = nc(e);
              (n = {
                lane: r,
                action: n,
                hasEagerState: !1,
                eagerState: null,
                next: null,
              }),
                rl(e)
                  ? ol(t, n)
                  : null !== (n = La(e, t, n, r)) &&
                    (rc(n, e, r, tc()), al(n, t, r));
            }
            function nl(e, t, n) {
              var r = nc(e),
                o = {
                  lane: r,
                  action: n,
                  hasEagerState: !1,
                  eagerState: null,
                  next: null,
                };
              if (rl(e)) ol(t, o);
              else {
                var a = e.alternate;
                if (
                  0 === e.lanes &&
                  (null === a || 0 === a.lanes) &&
                  null !== (a = t.lastRenderedReducer)
                )
                  try {
                    var i = t.lastRenderedState,
                      l = a(i, n);
                    if (
                      ((o.hasEagerState = !0), (o.eagerState = l), lr(l, i))
                    ) {
                      var u = t.interleaved;
                      return (
                        null === u
                          ? ((o.next = o), Oa(t))
                          : ((o.next = u.next), (u.next = o)),
                        void (t.interleaved = o)
                      );
                    }
                  } catch (e) {}
                null !== (n = La(e, t, o, r)) &&
                  (rc(n, e, r, (o = tc())), al(n, t, r));
              }
            }
            function rl(e) {
              var t = e.alternate;
              return e === mi || (null !== t && t === mi);
            }
            function ol(e, t) {
              bi = gi = !0;
              var n = e.pending;
              null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
                (e.pending = t);
            }
            function al(e, t, n) {
              if (0 != (4194240 & n)) {
                var r = t.lanes;
                (n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n);
              }
            }
            var il = {
                readContext: Pa,
                useCallback: Si,
                useContext: Si,
                useEffect: Si,
                useImperativeHandle: Si,
                useInsertionEffect: Si,
                useLayoutEffect: Si,
                useMemo: Si,
                useReducer: Si,
                useRef: Si,
                useState: Si,
                useDebugValue: Si,
                useDeferredValue: Si,
                useTransition: Si,
                useMutableSource: Si,
                useSyncExternalStore: Si,
                useId: Si,
                unstable_isNewReconciler: !1,
              },
              ll = {
                readContext: Pa,
                useCallback: function (e, t) {
                  return (Pi().memoizedState = [e, void 0 === t ? null : t]), e;
                },
                useContext: Pa,
                useEffect: Hi,
                useImperativeHandle: function (e, t, n) {
                  return (
                    (n = null != n ? n.concat([e]) : null),
                    Fi(4194308, 4, Qi.bind(null, t, e), n)
                  );
                },
                useLayoutEffect: function (e, t) {
                  return Fi(4194308, 4, e, t);
                },
                useInsertionEffect: function (e, t) {
                  return Fi(4, 2, e, t);
                },
                useMemo: function (e, t) {
                  var n = Pi();
                  return (
                    (t = void 0 === t ? null : t),
                    (e = e()),
                    (n.memoizedState = [e, t]),
                    e
                  );
                },
                useReducer: function (e, t, n) {
                  var r = Pi();
                  return (
                    (t = void 0 !== n ? n(t) : t),
                    (r.memoizedState = r.baseState = t),
                    (e = {
                      pending: null,
                      interleaved: null,
                      lanes: 0,
                      dispatch: null,
                      lastRenderedReducer: e,
                      lastRenderedState: t,
                    }),
                    (r.queue = e),
                    (e = e.dispatch = tl.bind(null, mi, e)),
                    [r.memoizedState, e]
                  );
                },
                useRef: function (e) {
                  return (e = { current: e }), (Pi().memoizedState = e);
                },
                useState: Ai,
                useDebugValue: Yi,
                useDeferredValue: function (e) {
                  return (Pi().memoizedState = e);
                },
                useTransition: function () {
                  var e = Ai(!1),
                    t = e[0];
                  return (
                    (e = Zi.bind(null, e[1])), (Pi().memoizedState = e), [t, e]
                  );
                },
                useMutableSource: function () {},
                useSyncExternalStore: function (e, t, n) {
                  var r = mi,
                    o = Pi();
                  if (aa) {
                    if (void 0 === n) throw Error(a(407));
                    n = n();
                  } else {
                    if (((n = t()), null === Ru)) throw Error(a(349));
                    0 != (30 & hi) || Di(r, t, n);
                  }
                  o.memoizedState = n;
                  var i = { value: n, getSnapshot: t };
                  return (
                    (o.queue = i),
                    Hi(Mi.bind(null, r, i, e), [e]),
                    (r.flags |= 2048),
                    Wi(9, ji.bind(null, r, i, n, t), void 0, null),
                    n
                  );
                },
                useId: function () {
                  var e = Pi(),
                    t = Ru.identifierPrefix;
                  if (aa) {
                    var n = Xo;
                    (t =
                      ":" +
                      t +
                      "R" +
                      (n = (Go & ~(1 << (32 - it(Go) - 1))).toString(32) + n)),
                      0 < (n = wi++) && (t += "H" + n.toString(32)),
                      (t += ":");
                  } else t = ":" + t + "r" + (n = Ei++).toString(32) + ":";
                  return (e.memoizedState = t);
                },
                unstable_isNewReconciler: !1,
              },
              ul = {
                readContext: Pa,
                useCallback: Ki,
                useContext: Pa,
                useEffect: $i,
                useImperativeHandle: qi,
                useInsertionEffect: Vi,
                useLayoutEffect: Ji,
                useMemo: Gi,
                useReducer: Li,
                useRef: zi,
                useState: function () {
                  return Li(Oi);
                },
                useDebugValue: Yi,
                useDeferredValue: function (e) {
                  return Xi(Ci(), vi.memoizedState, e);
                },
                useTransition: function () {
                  return [Li(Oi)[0], Ci().memoizedState];
                },
                useMutableSource: Ti,
                useSyncExternalStore: Ni,
                useId: el,
                unstable_isNewReconciler: !1,
              },
              cl = {
                readContext: Pa,
                useCallback: Ki,
                useContext: Pa,
                useEffect: $i,
                useImperativeHandle: qi,
                useInsertionEffect: Vi,
                useLayoutEffect: Ji,
                useMemo: Gi,
                useReducer: Ri,
                useRef: zi,
                useState: function () {
                  return Ri(Oi);
                },
                useDebugValue: Yi,
                useDeferredValue: function (e) {
                  var t = Ci();
                  return null === vi
                    ? (t.memoizedState = e)
                    : Xi(t, vi.memoizedState, e);
                },
                useTransition: function () {
                  return [Ri(Oi)[0], Ci().memoizedState];
                },
                useMutableSource: Ti,
                useSyncExternalStore: Ni,
                useId: el,
                unstable_isNewReconciler: !1,
              };
            function sl(e, t) {
              try {
                var n = "",
                  r = t;
                do {
                  (n += F(r)), (r = r.return);
                } while (r);
                var o = n;
              } catch (e) {
                o = "\nError generating stack: " + e.message + "\n" + e.stack;
              }
              return { value: e, source: t, stack: o, digest: null };
            }
            function fl(e, t, n) {
              return {
                value: e,
                source: null,
                stack: null != n ? n : null,
                digest: null != t ? t : null,
              };
            }
            function dl(e, t) {
              try {
                console.error(t.value);
              } catch (e) {
                setTimeout(function () {
                  throw e;
                });
              }
            }
            var pl = "function" == typeof WeakMap ? WeakMap : Map;
            function hl(e, t, n) {
              ((n = ja(-1, n)).tag = 3), (n.payload = { element: null });
              var r = t.value;
              return (
                (n.callback = function () {
                  Vu || ((Vu = !0), (Ju = r)), dl(0, t);
                }),
                n
              );
            }
            function ml(e, t, n) {
              (n = ja(-1, n)).tag = 3;
              var r = e.type.getDerivedStateFromError;
              if ("function" == typeof r) {
                var o = t.value;
                (n.payload = function () {
                  return r(o);
                }),
                  (n.callback = function () {
                    dl(0, t);
                  });
              }
              var a = e.stateNode;
              return (
                null !== a &&
                  "function" == typeof a.componentDidCatch &&
                  (n.callback = function () {
                    dl(0, t),
                      "function" != typeof r &&
                        (null === Qu ? (Qu = new Set([this])) : Qu.add(this));
                    var e = t.stack;
                    this.componentDidCatch(t.value, {
                      componentStack: null !== e ? e : "",
                    });
                  }),
                n
              );
            }
            function vl(e, t, n) {
              var r = e.pingCache;
              if (null === r) {
                r = e.pingCache = new pl();
                var o = new Set();
                r.set(t, o);
              } else
                void 0 === (o = r.get(t)) && ((o = new Set()), r.set(t, o));
              o.has(n) ||
                (o.add(n), (e = Pc.bind(null, e, t, n)), t.then(e, e));
            }
            function yl(e) {
              do {
                var t;
                if (
                  ((t = 13 === e.tag) &&
                    (t =
                      null === (t = e.memoizedState) || null !== t.dehydrated),
                  t)
                )
                  return e;
                e = e.return;
              } while (null !== e);
              return null;
            }
            function gl(e, t, n, r, o) {
              return 0 == (1 & e.mode)
                ? (e === t
                    ? (e.flags |= 65536)
                    : ((e.flags |= 128),
                      (n.flags |= 131072),
                      (n.flags &= -52805),
                      1 === n.tag &&
                        (null === n.alternate
                          ? (n.tag = 17)
                          : (((t = ja(-1, 1)).tag = 2), Ma(n, t, 1))),
                      (n.lanes |= 1)),
                  e)
                : ((e.flags |= 65536), (e.lanes = o), e);
            }
            var bl = w.ReactCurrentOwner,
              wl = !1;
            function El(e, t, n, r) {
              t.child = null === e ? Xa(t, null, n, r) : Ga(t, e.child, n, r);
            }
            function Sl(e, t, n, r, o) {
              n = n.render;
              var a = t.ref;
              return (
                ka(t, o),
                (r = _i(e, t, n, r, a, o)),
                (n = ki()),
                null === e || wl
                  ? (aa && n && ta(t), (t.flags |= 1), El(e, t, r, o), t.child)
                  : ((t.updateQueue = e.updateQueue),
                    (t.flags &= -2053),
                    (e.lanes &= ~o),
                    Vl(e, t, o))
              );
            }
            function xl(e, t, n, r, o) {
              if (null === e) {
                var a = n.type;
                return "function" != typeof a ||
                  Dc(a) ||
                  void 0 !== a.defaultProps ||
                  null !== n.compare ||
                  void 0 !== n.defaultProps
                  ? (((e = Mc(n.type, null, r, t, t.mode, o)).ref = t.ref),
                    (e.return = t),
                    (t.child = e))
                  : ((t.tag = 15), (t.type = a), _l(e, t, a, r, o));
              }
              if (((a = e.child), 0 == (e.lanes & o))) {
                var i = a.memoizedProps;
                if (
                  (n = null !== (n = n.compare) ? n : ur)(i, r) &&
                  e.ref === t.ref
                )
                  return Vl(e, t, o);
              }
              return (
                (t.flags |= 1),
                ((e = jc(a, r)).ref = t.ref),
                (e.return = t),
                (t.child = e)
              );
            }
            function _l(e, t, n, r, o) {
              if (null !== e) {
                var a = e.memoizedProps;
                if (ur(a, r) && e.ref === t.ref) {
                  if (((wl = !1), (t.pendingProps = r = a), 0 == (e.lanes & o)))
                    return (t.lanes = e.lanes), Vl(e, t, o);
                  0 != (131072 & e.flags) && (wl = !0);
                }
              }
              return Cl(e, t, n, r, o);
            }
            function kl(e, t, n) {
              var r = t.pendingProps,
                o = r.children,
                a = null !== e ? e.memoizedState : null;
              if ("hidden" === r.mode)
                if (0 == (1 & t.mode))
                  (t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null,
                  }),
                    Co(ju, Du),
                    (Du |= n);
                else {
                  if (0 == (1073741824 & n))
                    return (
                      (e = null !== a ? a.baseLanes | n : n),
                      (t.lanes = t.childLanes = 1073741824),
                      (t.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null,
                      }),
                      (t.updateQueue = null),
                      Co(ju, Du),
                      (Du |= e),
                      null
                    );
                  (t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null,
                  }),
                    (r = null !== a ? a.baseLanes : n),
                    Co(ju, Du),
                    (Du |= r);
                }
              else
                null !== a
                  ? ((r = a.baseLanes | n), (t.memoizedState = null))
                  : (r = n),
                  Co(ju, Du),
                  (Du |= r);
              return El(e, t, o, n), t.child;
            }
            function Pl(e, t) {
              var n = t.ref;
              ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
                ((t.flags |= 512), (t.flags |= 2097152));
            }
            function Cl(e, t, n, r, o) {
              var a = Do(n) ? To : Lo.current;
              return (
                (a = No(t, a)),
                ka(t, o),
                (n = _i(e, t, n, r, a, o)),
                (r = ki()),
                null === e || wl
                  ? (aa && r && ta(t), (t.flags |= 1), El(e, t, n, o), t.child)
                  : ((t.updateQueue = e.updateQueue),
                    (t.flags &= -2053),
                    (e.lanes &= ~o),
                    Vl(e, t, o))
              );
            }
            function Ol(e, t, n, r, o) {
              if (Do(n)) {
                var a = !0;
                Io(t);
              } else a = !1;
              if ((ka(t, o), null === t.stateNode))
                $l(e, t), $a(t, n, r), Ja(t, n, r, o), (r = !0);
              else if (null === e) {
                var i = t.stateNode,
                  l = t.memoizedProps;
                i.props = l;
                var u = i.context,
                  c = n.contextType;
                c =
                  "object" == typeof c && null !== c
                    ? Pa(c)
                    : No(t, (c = Do(n) ? To : Lo.current));
                var s = n.getDerivedStateFromProps,
                  f =
                    "function" == typeof s ||
                    "function" == typeof i.getSnapshotBeforeUpdate;
                f ||
                  ("function" != typeof i.UNSAFE_componentWillReceiveProps &&
                    "function" != typeof i.componentWillReceiveProps) ||
                  ((l !== r || u !== c) && Va(t, i, r, c)),
                  (Ta = !1);
                var d = t.memoizedState;
                (i.state = d),
                  Aa(t, r, i, o),
                  (u = t.memoizedState),
                  l !== r || d !== u || Ro.current || Ta
                    ? ("function" == typeof s &&
                        (Fa(t, n, s, r), (u = t.memoizedState)),
                      (l = Ta || Ha(t, n, l, r, d, u, c))
                        ? (f ||
                            ("function" != typeof i.UNSAFE_componentWillMount &&
                              "function" != typeof i.componentWillMount) ||
                            ("function" == typeof i.componentWillMount &&
                              i.componentWillMount(),
                            "function" == typeof i.UNSAFE_componentWillMount &&
                              i.UNSAFE_componentWillMount()),
                          "function" == typeof i.componentDidMount &&
                            (t.flags |= 4194308))
                        : ("function" == typeof i.componentDidMount &&
                            (t.flags |= 4194308),
                          (t.memoizedProps = r),
                          (t.memoizedState = u)),
                      (i.props = r),
                      (i.state = u),
                      (i.context = c),
                      (r = l))
                    : ("function" == typeof i.componentDidMount &&
                        (t.flags |= 4194308),
                      (r = !1));
              } else {
                (i = t.stateNode),
                  Da(e, t),
                  (l = t.memoizedProps),
                  (c = t.type === t.elementType ? l : ya(t.type, l)),
                  (i.props = c),
                  (f = t.pendingProps),
                  (d = i.context),
                  (u =
                    "object" == typeof (u = n.contextType) && null !== u
                      ? Pa(u)
                      : No(t, (u = Do(n) ? To : Lo.current)));
                var p = n.getDerivedStateFromProps;
                (s =
                  "function" == typeof p ||
                  "function" == typeof i.getSnapshotBeforeUpdate) ||
                  ("function" != typeof i.UNSAFE_componentWillReceiveProps &&
                    "function" != typeof i.componentWillReceiveProps) ||
                  ((l !== f || d !== u) && Va(t, i, r, u)),
                  (Ta = !1),
                  (d = t.memoizedState),
                  (i.state = d),
                  Aa(t, r, i, o);
                var h = t.memoizedState;
                l !== f || d !== h || Ro.current || Ta
                  ? ("function" == typeof p &&
                      (Fa(t, n, p, r), (h = t.memoizedState)),
                    (c = Ta || Ha(t, n, c, r, d, h, u) || !1)
                      ? (s ||
                          ("function" != typeof i.UNSAFE_componentWillUpdate &&
                            "function" != typeof i.componentWillUpdate) ||
                          ("function" == typeof i.componentWillUpdate &&
                            i.componentWillUpdate(r, h, u),
                          "function" == typeof i.UNSAFE_componentWillUpdate &&
                            i.UNSAFE_componentWillUpdate(r, h, u)),
                        "function" == typeof i.componentDidUpdate &&
                          (t.flags |= 4),
                        "function" == typeof i.getSnapshotBeforeUpdate &&
                          (t.flags |= 1024))
                      : ("function" != typeof i.componentDidUpdate ||
                          (l === e.memoizedProps && d === e.memoizedState) ||
                          (t.flags |= 4),
                        "function" != typeof i.getSnapshotBeforeUpdate ||
                          (l === e.memoizedProps && d === e.memoizedState) ||
                          (t.flags |= 1024),
                        (t.memoizedProps = r),
                        (t.memoizedState = h)),
                    (i.props = r),
                    (i.state = h),
                    (i.context = u),
                    (r = c))
                  : ("function" != typeof i.componentDidUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" != typeof i.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (r = !1));
              }
              return Ll(e, t, n, r, a, o);
            }
            function Ll(e, t, n, r, o, a) {
              Pl(e, t);
              var i = 0 != (128 & t.flags);
              if (!r && !i) return o && Ao(t, n, !1), Vl(e, t, a);
              (r = t.stateNode), (bl.current = t);
              var l =
                i && "function" != typeof n.getDerivedStateFromError
                  ? null
                  : r.render();
              return (
                (t.flags |= 1),
                null !== e && i
                  ? ((t.child = Ga(t, e.child, null, a)),
                    (t.child = Ga(t, null, l, a)))
                  : El(e, t, l, a),
                (t.memoizedState = r.state),
                o && Ao(t, n, !0),
                t.child
              );
            }
            function Rl(e) {
              var t = e.stateNode;
              t.pendingContext
                ? Mo(0, t.pendingContext, t.pendingContext !== t.context)
                : t.context && Mo(0, t.context, !1),
                oi(e, t.containerInfo);
            }
            function Tl(e, t, n, r, o) {
              return ha(), ma(o), (t.flags |= 256), El(e, t, n, r), t.child;
            }
            var Nl,
              Dl,
              jl,
              Ml,
              Ul = { dehydrated: null, treeContext: null, retryLane: 0 };
            function Il(e) {
              return { baseLanes: e, cachePool: null, transitions: null };
            }
            function Al(e, t, n) {
              var r,
                o = t.pendingProps,
                i = ui.current,
                l = !1,
                u = 0 != (128 & t.flags);
              if (
                ((r = u) ||
                  (r =
                    (null === e || null !== e.memoizedState) && 0 != (2 & i)),
                r
                  ? ((l = !0), (t.flags &= -129))
                  : (null !== e && null === e.memoizedState) || (i |= 1),
                Co(ui, 1 & i),
                null === e)
              )
                return (
                  sa(t),
                  null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                    ? (0 == (1 & t.mode)
                        ? (t.lanes = 1)
                        : "$!" === e.data
                        ? (t.lanes = 8)
                        : (t.lanes = 1073741824),
                      null)
                    : ((u = o.children),
                      (e = o.fallback),
                      l
                        ? ((o = t.mode),
                          (l = t.child),
                          (u = { mode: "hidden", children: u }),
                          0 == (1 & o) && null !== l
                            ? ((l.childLanes = 0), (l.pendingProps = u))
                            : (l = Ic(u, o, 0, null)),
                          (e = Uc(e, o, n, null)),
                          (l.return = t),
                          (e.return = t),
                          (l.sibling = e),
                          (t.child = l),
                          (t.child.memoizedState = Il(n)),
                          (t.memoizedState = Ul),
                          e)
                        : Wl(t, u))
                );
              if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
                return (function (e, t, n, r, o, i, l) {
                  if (n)
                    return 256 & t.flags
                      ? ((t.flags &= -257),
                        zl(e, t, l, (r = fl(Error(a(422))))))
                      : null !== t.memoizedState
                      ? ((t.child = e.child), (t.flags |= 128), null)
                      : ((i = r.fallback),
                        (o = t.mode),
                        (r = Ic(
                          { mode: "visible", children: r.children },
                          o,
                          0,
                          null
                        )),
                        ((i = Uc(i, o, l, null)).flags |= 2),
                        (r.return = t),
                        (i.return = t),
                        (r.sibling = i),
                        (t.child = r),
                        0 != (1 & t.mode) && Ga(t, e.child, null, l),
                        (t.child.memoizedState = Il(l)),
                        (t.memoizedState = Ul),
                        i);
                  if (0 == (1 & t.mode)) return zl(e, t, l, null);
                  if ("$!" === o.data) {
                    if ((r = o.nextSibling && o.nextSibling.dataset))
                      var u = r.dgst;
                    return (
                      (r = u),
                      zl(e, t, l, (r = fl((i = Error(a(419))), r, void 0)))
                    );
                  }
                  if (((u = 0 != (l & e.childLanes)), wl || u)) {
                    if (null !== (r = Ru)) {
                      switch (l & -l) {
                        case 4:
                          o = 2;
                          break;
                        case 16:
                          o = 8;
                          break;
                        case 64:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                        case 4194304:
                        case 8388608:
                        case 16777216:
                        case 33554432:
                        case 67108864:
                          o = 32;
                          break;
                        case 536870912:
                          o = 268435456;
                          break;
                        default:
                          o = 0;
                      }
                      0 !== (o = 0 != (o & (r.suspendedLanes | l)) ? 0 : o) &&
                        o !== i.retryLane &&
                        ((i.retryLane = o), Ra(e, o), rc(r, e, o, -1));
                    }
                    return vc(), zl(e, t, l, (r = fl(Error(a(421)))));
                  }
                  return "$?" === o.data
                    ? ((t.flags |= 128),
                      (t.child = e.child),
                      (t = Oc.bind(null, e)),
                      (o._reactRetry = t),
                      null)
                    : ((e = i.treeContext),
                      (oa = co(o.nextSibling)),
                      (ra = t),
                      (aa = !0),
                      (ia = null),
                      null !== e &&
                        ((qo[Yo++] = Go),
                        (qo[Yo++] = Xo),
                        (qo[Yo++] = Ko),
                        (Go = e.id),
                        (Xo = e.overflow),
                        (Ko = t)),
                      ((t = Wl(t, r.children)).flags |= 4096),
                      t);
                })(e, t, u, o, r, i, n);
              if (l) {
                (l = o.fallback), (u = t.mode), (r = (i = e.child).sibling);
                var c = { mode: "hidden", children: o.children };
                return (
                  0 == (1 & u) && t.child !== i
                    ? (((o = t.child).childLanes = 0),
                      (o.pendingProps = c),
                      (t.deletions = null))
                    : ((o = jc(i, c)).subtreeFlags = 14680064 & i.subtreeFlags),
                  null !== r
                    ? (l = jc(r, l))
                    : ((l = Uc(l, u, n, null)).flags |= 2),
                  (l.return = t),
                  (o.return = t),
                  (o.sibling = l),
                  (t.child = o),
                  (o = l),
                  (l = t.child),
                  (u =
                    null === (u = e.child.memoizedState)
                      ? Il(n)
                      : {
                          baseLanes: u.baseLanes | n,
                          cachePool: null,
                          transitions: u.transitions,
                        }),
                  (l.memoizedState = u),
                  (l.childLanes = e.childLanes & ~n),
                  (t.memoizedState = Ul),
                  o
                );
              }
              return (
                (e = (l = e.child).sibling),
                (o = jc(l, { mode: "visible", children: o.children })),
                0 == (1 & t.mode) && (o.lanes = n),
                (o.return = t),
                (o.sibling = null),
                null !== e &&
                  (null === (n = t.deletions)
                    ? ((t.deletions = [e]), (t.flags |= 16))
                    : n.push(e)),
                (t.child = o),
                (t.memoizedState = null),
                o
              );
            }
            function Wl(e, t) {
              return (
                ((t = Ic(
                  { mode: "visible", children: t },
                  e.mode,
                  0,
                  null
                )).return = e),
                (e.child = t)
              );
            }
            function zl(e, t, n, r) {
              return (
                null !== r && ma(r),
                Ga(t, e.child, null, n),
                ((e = Wl(t, t.pendingProps.children)).flags |= 2),
                (t.memoizedState = null),
                e
              );
            }
            function Fl(e, t, n) {
              e.lanes |= t;
              var r = e.alternate;
              null !== r && (r.lanes |= t), _a(e.return, t, n);
            }
            function Bl(e, t, n, r, o) {
              var a = e.memoizedState;
              null === a
                ? (e.memoizedState = {
                    isBackwards: t,
                    rendering: null,
                    renderingStartTime: 0,
                    last: r,
                    tail: n,
                    tailMode: o,
                  })
                : ((a.isBackwards = t),
                  (a.rendering = null),
                  (a.renderingStartTime = 0),
                  (a.last = r),
                  (a.tail = n),
                  (a.tailMode = o));
            }
            function Hl(e, t, n) {
              var r = t.pendingProps,
                o = r.revealOrder,
                a = r.tail;
              if ((El(e, t, r.children, n), 0 != (2 & (r = ui.current))))
                (r = (1 & r) | 2), (t.flags |= 128);
              else {
                if (null !== e && 0 != (128 & e.flags))
                  e: for (e = t.child; null !== e; ) {
                    if (13 === e.tag) null !== e.memoizedState && Fl(e, n, t);
                    else if (19 === e.tag) Fl(e, n, t);
                    else if (null !== e.child) {
                      (e.child.return = e), (e = e.child);
                      continue;
                    }
                    if (e === t) break e;
                    for (; null === e.sibling; ) {
                      if (null === e.return || e.return === t) break e;
                      e = e.return;
                    }
                    (e.sibling.return = e.return), (e = e.sibling);
                  }
                r &= 1;
              }
              if ((Co(ui, r), 0 == (1 & t.mode))) t.memoizedState = null;
              else
                switch (o) {
                  case "forwards":
                    for (n = t.child, o = null; null !== n; )
                      null !== (e = n.alternate) && null === ci(e) && (o = n),
                        (n = n.sibling);
                    null === (n = o)
                      ? ((o = t.child), (t.child = null))
                      : ((o = n.sibling), (n.sibling = null)),
                      Bl(t, !1, o, n, a);
                    break;
                  case "backwards":
                    for (n = null, o = t.child, t.child = null; null !== o; ) {
                      if (null !== (e = o.alternate) && null === ci(e)) {
                        t.child = o;
                        break;
                      }
                      (e = o.sibling), (o.sibling = n), (n = o), (o = e);
                    }
                    Bl(t, !0, n, null, a);
                    break;
                  case "together":
                    Bl(t, !1, null, null, void 0);
                    break;
                  default:
                    t.memoizedState = null;
                }
              return t.child;
            }
            function $l(e, t) {
              0 == (1 & t.mode) &&
                null !== e &&
                ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
            }
            function Vl(e, t, n) {
              if (
                (null !== e && (t.dependencies = e.dependencies),
                (Iu |= t.lanes),
                0 == (n & t.childLanes))
              )
                return null;
              if (null !== e && t.child !== e.child) throw Error(a(153));
              if (null !== t.child) {
                for (
                  n = jc((e = t.child), e.pendingProps),
                    t.child = n,
                    n.return = t;
                  null !== e.sibling;

                )
                  (e = e.sibling),
                    ((n = n.sibling = jc(e, e.pendingProps)).return = t);
                n.sibling = null;
              }
              return t.child;
            }
            function Jl(e, t) {
              if (!aa)
                switch (e.tailMode) {
                  case "hidden":
                    t = e.tail;
                    for (var n = null; null !== t; )
                      null !== t.alternate && (n = t), (t = t.sibling);
                    null === n ? (e.tail = null) : (n.sibling = null);
                    break;
                  case "collapsed":
                    n = e.tail;
                    for (var r = null; null !== n; )
                      null !== n.alternate && (r = n), (n = n.sibling);
                    null === r
                      ? t || null === e.tail
                        ? (e.tail = null)
                        : (e.tail.sibling = null)
                      : (r.sibling = null);
                }
            }
            function Ql(e) {
              var t = null !== e.alternate && e.alternate.child === e.child,
                n = 0,
                r = 0;
              if (t)
                for (var o = e.child; null !== o; )
                  (n |= o.lanes | o.childLanes),
                    (r |= 14680064 & o.subtreeFlags),
                    (r |= 14680064 & o.flags),
                    (o.return = e),
                    (o = o.sibling);
              else
                for (o = e.child; null !== o; )
                  (n |= o.lanes | o.childLanes),
                    (r |= o.subtreeFlags),
                    (r |= o.flags),
                    (o.return = e),
                    (o = o.sibling);
              return (e.subtreeFlags |= r), (e.childLanes = n), t;
            }
            function ql(e, t, n) {
              var r = t.pendingProps;
              switch ((na(t), t.tag)) {
                case 2:
                case 16:
                case 15:
                case 0:
                case 11:
                case 7:
                case 8:
                case 12:
                case 9:
                case 14:
                  return Ql(t), null;
                case 1:
                case 17:
                  return Do(t.type) && jo(), Ql(t), null;
                case 3:
                  return (
                    (r = t.stateNode),
                    ai(),
                    Po(Ro),
                    Po(Lo),
                    fi(),
                    r.pendingContext &&
                      ((r.context = r.pendingContext),
                      (r.pendingContext = null)),
                    (null !== e && null !== e.child) ||
                      (da(t)
                        ? (t.flags |= 4)
                        : null === e ||
                          (e.memoizedState.isDehydrated &&
                            0 == (256 & t.flags)) ||
                          ((t.flags |= 1024),
                          null !== ia && (lc(ia), (ia = null)))),
                    Dl(e, t),
                    Ql(t),
                    null
                  );
                case 5:
                  li(t);
                  var o = ri(ni.current);
                  if (((n = t.type), null !== e && null != t.stateNode))
                    jl(e, t, n, r, o),
                      e.ref !== t.ref &&
                        ((t.flags |= 512), (t.flags |= 2097152));
                  else {
                    if (!r) {
                      if (null === t.stateNode) throw Error(a(166));
                      return Ql(t), null;
                    }
                    if (((e = ri(ei.current)), da(t))) {
                      (r = t.stateNode), (n = t.type);
                      var i = t.memoizedProps;
                      switch (
                        ((r[po] = t), (r[ho] = i), (e = 0 != (1 & t.mode)), n)
                      ) {
                        case "dialog":
                          Wr("cancel", r), Wr("close", r);
                          break;
                        case "iframe":
                        case "object":
                        case "embed":
                          Wr("load", r);
                          break;
                        case "video":
                        case "audio":
                          for (o = 0; o < Mr.length; o++) Wr(Mr[o], r);
                          break;
                        case "source":
                          Wr("error", r);
                          break;
                        case "img":
                        case "image":
                        case "link":
                          Wr("error", r), Wr("load", r);
                          break;
                        case "details":
                          Wr("toggle", r);
                          break;
                        case "input":
                          K(r, i), Wr("invalid", r);
                          break;
                        case "select":
                          (r._wrapperState = { wasMultiple: !!i.multiple }),
                            Wr("invalid", r);
                          break;
                        case "textarea":
                          oe(r, i), Wr("invalid", r);
                      }
                      for (var u in (ge(n, i), (o = null), i))
                        if (i.hasOwnProperty(u)) {
                          var c = i[u];
                          "children" === u
                            ? "string" == typeof c
                              ? r.textContent !== c &&
                                (!0 !== i.suppressHydrationWarning &&
                                  Xr(r.textContent, c, e),
                                (o = ["children", c]))
                              : "number" == typeof c &&
                                r.textContent !== "" + c &&
                                (!0 !== i.suppressHydrationWarning &&
                                  Xr(r.textContent, c, e),
                                (o = ["children", "" + c]))
                            : l.hasOwnProperty(u) &&
                              null != c &&
                              "onScroll" === u &&
                              Wr("scroll", r);
                        }
                      switch (n) {
                        case "input":
                          J(r), Z(r, i, !0);
                          break;
                        case "textarea":
                          J(r), ie(r);
                          break;
                        case "select":
                        case "option":
                          break;
                        default:
                          "function" == typeof i.onClick && (r.onclick = Zr);
                      }
                      (r = o),
                        (t.updateQueue = r),
                        null !== r && (t.flags |= 4);
                    } else {
                      (u = 9 === o.nodeType ? o : o.ownerDocument),
                        "http://www.w3.org/1999/xhtml" === e && (e = le(n)),
                        "http://www.w3.org/1999/xhtml" === e
                          ? "script" === n
                            ? (((e = u.createElement("div")).innerHTML =
                                "<script></script>"),
                              (e = e.removeChild(e.firstChild)))
                            : "string" == typeof r.is
                            ? (e = u.createElement(n, { is: r.is }))
                            : ((e = u.createElement(n)),
                              "select" === n &&
                                ((u = e),
                                r.multiple
                                  ? (u.multiple = !0)
                                  : r.size && (u.size = r.size)))
                          : (e = u.createElementNS(e, n)),
                        (e[po] = t),
                        (e[ho] = r),
                        Nl(e, t, !1, !1),
                        (t.stateNode = e);
                      e: {
                        switch (((u = be(n, r)), n)) {
                          case "dialog":
                            Wr("cancel", e), Wr("close", e), (o = r);
                            break;
                          case "iframe":
                          case "object":
                          case "embed":
                            Wr("load", e), (o = r);
                            break;
                          case "video":
                          case "audio":
                            for (o = 0; o < Mr.length; o++) Wr(Mr[o], e);
                            o = r;
                            break;
                          case "source":
                            Wr("error", e), (o = r);
                            break;
                          case "img":
                          case "image":
                          case "link":
                            Wr("error", e), Wr("load", e), (o = r);
                            break;
                          case "details":
                            Wr("toggle", e), (o = r);
                            break;
                          case "input":
                            K(e, r), (o = Y(e, r)), Wr("invalid", e);
                            break;
                          case "option":
                          default:
                            o = r;
                            break;
                          case "select":
                            (e._wrapperState = { wasMultiple: !!r.multiple }),
                              (o = I({}, r, { value: void 0 })),
                              Wr("invalid", e);
                            break;
                          case "textarea":
                            oe(e, r), (o = re(e, r)), Wr("invalid", e);
                        }
                        for (i in (ge(n, o), (c = o)))
                          if (c.hasOwnProperty(i)) {
                            var s = c[i];
                            "style" === i
                              ? ve(e, s)
                              : "dangerouslySetInnerHTML" === i
                              ? null != (s = s ? s.__html : void 0) && fe(e, s)
                              : "children" === i
                              ? "string" == typeof s
                                ? ("textarea" !== n || "" !== s) && de(e, s)
                                : "number" == typeof s && de(e, "" + s)
                              : "suppressContentEditableWarning" !== i &&
                                "suppressHydrationWarning" !== i &&
                                "autoFocus" !== i &&
                                (l.hasOwnProperty(i)
                                  ? null != s &&
                                    "onScroll" === i &&
                                    Wr("scroll", e)
                                  : null != s && b(e, i, s, u));
                          }
                        switch (n) {
                          case "input":
                            J(e), Z(e, r, !1);
                            break;
                          case "textarea":
                            J(e), ie(e);
                            break;
                          case "option":
                            null != r.value &&
                              e.setAttribute("value", "" + $(r.value));
                            break;
                          case "select":
                            (e.multiple = !!r.multiple),
                              null != (i = r.value)
                                ? ne(e, !!r.multiple, i, !1)
                                : null != r.defaultValue &&
                                  ne(e, !!r.multiple, r.defaultValue, !0);
                            break;
                          default:
                            "function" == typeof o.onClick && (e.onclick = Zr);
                        }
                        switch (n) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            r = !!r.autoFocus;
                            break e;
                          case "img":
                            r = !0;
                            break e;
                          default:
                            r = !1;
                        }
                      }
                      r && (t.flags |= 4);
                    }
                    null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
                  }
                  return Ql(t), null;
                case 6:
                  if (e && null != t.stateNode) Ml(e, t, e.memoizedProps, r);
                  else {
                    if ("string" != typeof r && null === t.stateNode)
                      throw Error(a(166));
                    if (((n = ri(ni.current)), ri(ei.current), da(t))) {
                      if (
                        ((r = t.stateNode),
                        (n = t.memoizedProps),
                        (r[po] = t),
                        (i = r.nodeValue !== n) && null !== (e = ra))
                      )
                        switch (e.tag) {
                          case 3:
                            Xr(r.nodeValue, n, 0 != (1 & e.mode));
                            break;
                          case 5:
                            !0 !== e.memoizedProps.suppressHydrationWarning &&
                              Xr(r.nodeValue, n, 0 != (1 & e.mode));
                        }
                      i && (t.flags |= 4);
                    } else
                      ((r = (
                        9 === n.nodeType ? n : n.ownerDocument
                      ).createTextNode(r))[po] = t),
                        (t.stateNode = r);
                  }
                  return Ql(t), null;
                case 13:
                  if (
                    (Po(ui),
                    (r = t.memoizedState),
                    null === e ||
                      (null !== e.memoizedState &&
                        null !== e.memoizedState.dehydrated))
                  ) {
                    if (
                      aa &&
                      null !== oa &&
                      0 != (1 & t.mode) &&
                      0 == (128 & t.flags)
                    )
                      pa(), ha(), (t.flags |= 98560), (i = !1);
                    else if (
                      ((i = da(t)), null !== r && null !== r.dehydrated)
                    ) {
                      if (null === e) {
                        if (!i) throw Error(a(318));
                        if (
                          !(i =
                            null !== (i = t.memoizedState)
                              ? i.dehydrated
                              : null)
                        )
                          throw Error(a(317));
                        i[po] = t;
                      } else
                        ha(),
                          0 == (128 & t.flags) && (t.memoizedState = null),
                          (t.flags |= 4);
                      Ql(t), (i = !1);
                    } else null !== ia && (lc(ia), (ia = null)), (i = !0);
                    if (!i) return 65536 & t.flags ? t : null;
                  }
                  return 0 != (128 & t.flags)
                    ? ((t.lanes = n), t)
                    : ((r = null !== r) !=
                        (null !== e && null !== e.memoizedState) &&
                        r &&
                        ((t.child.flags |= 8192),
                        0 != (1 & t.mode) &&
                          (null === e || 0 != (1 & ui.current)
                            ? 0 === Mu && (Mu = 3)
                            : vc())),
                      null !== t.updateQueue && (t.flags |= 4),
                      Ql(t),
                      null);
                case 4:
                  return (
                    ai(),
                    Dl(e, t),
                    null === e && Br(t.stateNode.containerInfo),
                    Ql(t),
                    null
                  );
                case 10:
                  return xa(t.type._context), Ql(t), null;
                case 19:
                  if ((Po(ui), null === (i = t.memoizedState)))
                    return Ql(t), null;
                  if (((r = 0 != (128 & t.flags)), null === (u = i.rendering)))
                    if (r) Jl(i, !1);
                    else {
                      if (0 !== Mu || (null !== e && 0 != (128 & e.flags)))
                        for (e = t.child; null !== e; ) {
                          if (null !== (u = ci(e))) {
                            for (
                              t.flags |= 128,
                                Jl(i, !1),
                                null !== (r = u.updateQueue) &&
                                  ((t.updateQueue = r), (t.flags |= 4)),
                                t.subtreeFlags = 0,
                                r = n,
                                n = t.child;
                              null !== n;

                            )
                              (e = r),
                                ((i = n).flags &= 14680066),
                                null === (u = i.alternate)
                                  ? ((i.childLanes = 0),
                                    (i.lanes = e),
                                    (i.child = null),
                                    (i.subtreeFlags = 0),
                                    (i.memoizedProps = null),
                                    (i.memoizedState = null),
                                    (i.updateQueue = null),
                                    (i.dependencies = null),
                                    (i.stateNode = null))
                                  : ((i.childLanes = u.childLanes),
                                    (i.lanes = u.lanes),
                                    (i.child = u.child),
                                    (i.subtreeFlags = 0),
                                    (i.deletions = null),
                                    (i.memoizedProps = u.memoizedProps),
                                    (i.memoizedState = u.memoizedState),
                                    (i.updateQueue = u.updateQueue),
                                    (i.type = u.type),
                                    (e = u.dependencies),
                                    (i.dependencies =
                                      null === e
                                        ? null
                                        : {
                                            lanes: e.lanes,
                                            firstContext: e.firstContext,
                                          })),
                                (n = n.sibling);
                            return Co(ui, (1 & ui.current) | 2), t.child;
                          }
                          e = e.sibling;
                        }
                      null !== i.tail &&
                        Ge() > Hu &&
                        ((t.flags |= 128),
                        (r = !0),
                        Jl(i, !1),
                        (t.lanes = 4194304));
                    }
                  else {
                    if (!r)
                      if (null !== (e = ci(u))) {
                        if (
                          ((t.flags |= 128),
                          (r = !0),
                          null !== (n = e.updateQueue) &&
                            ((t.updateQueue = n), (t.flags |= 4)),
                          Jl(i, !0),
                          null === i.tail &&
                            "hidden" === i.tailMode &&
                            !u.alternate &&
                            !aa)
                        )
                          return Ql(t), null;
                      } else
                        2 * Ge() - i.renderingStartTime > Hu &&
                          1073741824 !== n &&
                          ((t.flags |= 128),
                          (r = !0),
                          Jl(i, !1),
                          (t.lanes = 4194304));
                    i.isBackwards
                      ? ((u.sibling = t.child), (t.child = u))
                      : (null !== (n = i.last)
                          ? (n.sibling = u)
                          : (t.child = u),
                        (i.last = u));
                  }
                  return null !== i.tail
                    ? ((t = i.tail),
                      (i.rendering = t),
                      (i.tail = t.sibling),
                      (i.renderingStartTime = Ge()),
                      (t.sibling = null),
                      (n = ui.current),
                      Co(ui, r ? (1 & n) | 2 : 1 & n),
                      t)
                    : (Ql(t), null);
                case 22:
                case 23:
                  return (
                    dc(),
                    (r = null !== t.memoizedState),
                    null !== e &&
                      (null !== e.memoizedState) !== r &&
                      (t.flags |= 8192),
                    r && 0 != (1 & t.mode)
                      ? 0 != (1073741824 & Du) &&
                        (Ql(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                      : Ql(t),
                    null
                  );
                case 24:
                case 25:
                  return null;
              }
              throw Error(a(156, t.tag));
            }
            function Yl(e, t) {
              switch ((na(t), t.tag)) {
                case 1:
                  return (
                    Do(t.type) && jo(),
                    65536 & (e = t.flags)
                      ? ((t.flags = (-65537 & e) | 128), t)
                      : null
                  );
                case 3:
                  return (
                    ai(),
                    Po(Ro),
                    Po(Lo),
                    fi(),
                    0 != (65536 & (e = t.flags)) && 0 == (128 & e)
                      ? ((t.flags = (-65537 & e) | 128), t)
                      : null
                  );
                case 5:
                  return li(t), null;
                case 13:
                  if (
                    (Po(ui),
                    null !== (e = t.memoizedState) && null !== e.dehydrated)
                  ) {
                    if (null === t.alternate) throw Error(a(340));
                    ha();
                  }
                  return 65536 & (e = t.flags)
                    ? ((t.flags = (-65537 & e) | 128), t)
                    : null;
                case 19:
                  return Po(ui), null;
                case 4:
                  return ai(), null;
                case 10:
                  return xa(t.type._context), null;
                case 22:
                case 23:
                  return dc(), null;
                default:
                  return null;
              }
            }
            (Nl = function (e, t) {
              for (var n = t.child; null !== n; ) {
                if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
                else if (4 !== n.tag && null !== n.child) {
                  (n.child.return = n), (n = n.child);
                  continue;
                }
                if (n === t) break;
                for (; null === n.sibling; ) {
                  if (null === n.return || n.return === t) return;
                  n = n.return;
                }
                (n.sibling.return = n.return), (n = n.sibling);
              }
            }),
              (Dl = function () {}),
              (jl = function (e, t, n, r) {
                var o = e.memoizedProps;
                if (o !== r) {
                  (e = t.stateNode), ri(ei.current);
                  var a,
                    i = null;
                  switch (n) {
                    case "input":
                      (o = Y(e, o)), (r = Y(e, r)), (i = []);
                      break;
                    case "select":
                      (o = I({}, o, { value: void 0 })),
                        (r = I({}, r, { value: void 0 })),
                        (i = []);
                      break;
                    case "textarea":
                      (o = re(e, o)), (r = re(e, r)), (i = []);
                      break;
                    default:
                      "function" != typeof o.onClick &&
                        "function" == typeof r.onClick &&
                        (e.onclick = Zr);
                  }
                  for (s in (ge(n, r), (n = null), o))
                    if (
                      !r.hasOwnProperty(s) &&
                      o.hasOwnProperty(s) &&
                      null != o[s]
                    )
                      if ("style" === s) {
                        var u = o[s];
                        for (a in u)
                          u.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
                      } else
                        "dangerouslySetInnerHTML" !== s &&
                          "children" !== s &&
                          "suppressContentEditableWarning" !== s &&
                          "suppressHydrationWarning" !== s &&
                          "autoFocus" !== s &&
                          (l.hasOwnProperty(s)
                            ? i || (i = [])
                            : (i = i || []).push(s, null));
                  for (s in r) {
                    var c = r[s];
                    if (
                      ((u = null != o ? o[s] : void 0),
                      r.hasOwnProperty(s) &&
                        c !== u &&
                        (null != c || null != u))
                    )
                      if ("style" === s)
                        if (u) {
                          for (a in u)
                            !u.hasOwnProperty(a) ||
                              (c && c.hasOwnProperty(a)) ||
                              (n || (n = {}), (n[a] = ""));
                          for (a in c)
                            c.hasOwnProperty(a) &&
                              u[a] !== c[a] &&
                              (n || (n = {}), (n[a] = c[a]));
                        } else n || (i || (i = []), i.push(s, n)), (n = c);
                      else
                        "dangerouslySetInnerHTML" === s
                          ? ((c = c ? c.__html : void 0),
                            (u = u ? u.__html : void 0),
                            null != c && u !== c && (i = i || []).push(s, c))
                          : "children" === s
                          ? ("string" != typeof c && "number" != typeof c) ||
                            (i = i || []).push(s, "" + c)
                          : "suppressContentEditableWarning" !== s &&
                            "suppressHydrationWarning" !== s &&
                            (l.hasOwnProperty(s)
                              ? (null != c &&
                                  "onScroll" === s &&
                                  Wr("scroll", e),
                                i || u === c || (i = []))
                              : (i = i || []).push(s, c));
                  }
                  n && (i = i || []).push("style", n);
                  var s = i;
                  (t.updateQueue = s) && (t.flags |= 4);
                }
              }),
              (Ml = function (e, t, n, r) {
                n !== r && (t.flags |= 4);
              });
            var Kl = !1,
              Gl = !1,
              Xl = "function" == typeof WeakSet ? WeakSet : Set,
              Zl = null;
            function eu(e, t) {
              var n = e.ref;
              if (null !== n)
                if ("function" == typeof n)
                  try {
                    n(null);
                  } catch (n) {
                    kc(e, t, n);
                  }
                else n.current = null;
            }
            function tu(e, t, n) {
              try {
                n();
              } catch (n) {
                kc(e, t, n);
              }
            }
            var nu = !1;
            function ru(e, t, n) {
              var r = t.updateQueue;
              if (null !== (r = null !== r ? r.lastEffect : null)) {
                var o = (r = r.next);
                do {
                  if ((o.tag & e) === e) {
                    var a = o.destroy;
                    (o.destroy = void 0), void 0 !== a && tu(t, n, a);
                  }
                  o = o.next;
                } while (o !== r);
              }
            }
            function ou(e, t) {
              if (
                null !==
                (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
              ) {
                var n = (t = t.next);
                do {
                  if ((n.tag & e) === e) {
                    var r = n.create;
                    n.destroy = r();
                  }
                  n = n.next;
                } while (n !== t);
              }
            }
            function au(e) {
              var t = e.ref;
              if (null !== t) {
                var n = e.stateNode;
                e.tag, (e = n), "function" == typeof t ? t(e) : (t.current = e);
              }
            }
            function iu(e) {
              var t = e.alternate;
              null !== t && ((e.alternate = null), iu(t)),
                (e.child = null),
                (e.deletions = null),
                (e.sibling = null),
                5 === e.tag &&
                  null !== (t = e.stateNode) &&
                  (delete t[po],
                  delete t[ho],
                  delete t[vo],
                  delete t[yo],
                  delete t[go]),
                (e.stateNode = null),
                (e.return = null),
                (e.dependencies = null),
                (e.memoizedProps = null),
                (e.memoizedState = null),
                (e.pendingProps = null),
                (e.stateNode = null),
                (e.updateQueue = null);
            }
            function lu(e) {
              return 5 === e.tag || 3 === e.tag || 4 === e.tag;
            }
            function uu(e) {
              e: for (;;) {
                for (; null === e.sibling; ) {
                  if (null === e.return || lu(e.return)) return null;
                  e = e.return;
                }
                for (
                  e.sibling.return = e.return, e = e.sibling;
                  5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

                ) {
                  if (2 & e.flags) continue e;
                  if (null === e.child || 4 === e.tag) continue e;
                  (e.child.return = e), (e = e.child);
                }
                if (!(2 & e.flags)) return e.stateNode;
              }
            }
            function cu(e, t, n) {
              var r = e.tag;
              if (5 === r || 6 === r)
                (e = e.stateNode),
                  t
                    ? 8 === n.nodeType
                      ? n.parentNode.insertBefore(e, t)
                      : n.insertBefore(e, t)
                    : (8 === n.nodeType
                        ? (t = n.parentNode).insertBefore(e, n)
                        : (t = n).appendChild(e),
                      null != (n = n._reactRootContainer) ||
                        null !== t.onclick ||
                        (t.onclick = Zr));
              else if (4 !== r && null !== (e = e.child))
                for (cu(e, t, n), e = e.sibling; null !== e; )
                  cu(e, t, n), (e = e.sibling);
            }
            function su(e, t, n) {
              var r = e.tag;
              if (5 === r || 6 === r)
                (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
              else if (4 !== r && null !== (e = e.child))
                for (su(e, t, n), e = e.sibling; null !== e; )
                  su(e, t, n), (e = e.sibling);
            }
            var fu = null,
              du = !1;
            function pu(e, t, n) {
              for (n = n.child; null !== n; ) hu(e, t, n), (n = n.sibling);
            }
            function hu(e, t, n) {
              if (at && "function" == typeof at.onCommitFiberUnmount)
                try {
                  at.onCommitFiberUnmount(ot, n);
                } catch (e) {}
              switch (n.tag) {
                case 5:
                  Gl || eu(n, t);
                case 6:
                  var r = fu,
                    o = du;
                  (fu = null),
                    pu(e, t, n),
                    (du = o),
                    null !== (fu = r) &&
                      (du
                        ? ((e = fu),
                          (n = n.stateNode),
                          8 === e.nodeType
                            ? e.parentNode.removeChild(n)
                            : e.removeChild(n))
                        : fu.removeChild(n.stateNode));
                  break;
                case 18:
                  null !== fu &&
                    (du
                      ? ((e = fu),
                        (n = n.stateNode),
                        8 === e.nodeType
                          ? uo(e.parentNode, n)
                          : 1 === e.nodeType && uo(e, n),
                        Bt(e))
                      : uo(fu, n.stateNode));
                  break;
                case 4:
                  (r = fu),
                    (o = du),
                    (fu = n.stateNode.containerInfo),
                    (du = !0),
                    pu(e, t, n),
                    (fu = r),
                    (du = o);
                  break;
                case 0:
                case 11:
                case 14:
                case 15:
                  if (
                    !Gl &&
                    null !== (r = n.updateQueue) &&
                    null !== (r = r.lastEffect)
                  ) {
                    o = r = r.next;
                    do {
                      var a = o,
                        i = a.destroy;
                      (a = a.tag),
                        void 0 !== i &&
                          (0 != (2 & a) || 0 != (4 & a)) &&
                          tu(n, t, i),
                        (o = o.next);
                    } while (o !== r);
                  }
                  pu(e, t, n);
                  break;
                case 1:
                  if (
                    !Gl &&
                    (eu(n, t),
                    "function" == typeof (r = n.stateNode).componentWillUnmount)
                  )
                    try {
                      (r.props = n.memoizedProps),
                        (r.state = n.memoizedState),
                        r.componentWillUnmount();
                    } catch (e) {
                      kc(n, t, e);
                    }
                  pu(e, t, n);
                  break;
                case 21:
                  pu(e, t, n);
                  break;
                case 22:
                  1 & n.mode
                    ? ((Gl = (r = Gl) || null !== n.memoizedState),
                      pu(e, t, n),
                      (Gl = r))
                    : pu(e, t, n);
                  break;
                default:
                  pu(e, t, n);
              }
            }
            function mu(e) {
              var t = e.updateQueue;
              if (null !== t) {
                e.updateQueue = null;
                var n = e.stateNode;
                null === n && (n = e.stateNode = new Xl()),
                  t.forEach(function (t) {
                    var r = Lc.bind(null, e, t);
                    n.has(t) || (n.add(t), t.then(r, r));
                  });
              }
            }
            function vu(e, t) {
              var n = t.deletions;
              if (null !== n)
                for (var r = 0; r < n.length; r++) {
                  var o = n[r];
                  try {
                    var i = e,
                      l = t,
                      u = l;
                    e: for (; null !== u; ) {
                      switch (u.tag) {
                        case 5:
                          (fu = u.stateNode), (du = !1);
                          break e;
                        case 3:
                        case 4:
                          (fu = u.stateNode.containerInfo), (du = !0);
                          break e;
                      }
                      u = u.return;
                    }
                    if (null === fu) throw Error(a(160));
                    hu(i, l, o), (fu = null), (du = !1);
                    var c = o.alternate;
                    null !== c && (c.return = null), (o.return = null);
                  } catch (e) {
                    kc(o, t, e);
                  }
                }
              if (12854 & t.subtreeFlags)
                for (t = t.child; null !== t; ) yu(t, e), (t = t.sibling);
            }
            function yu(e, t) {
              var n = e.alternate,
                r = e.flags;
              switch (e.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  if ((vu(t, e), gu(e), 4 & r)) {
                    try {
                      ru(3, e, e.return), ou(3, e);
                    } catch (t) {
                      kc(e, e.return, t);
                    }
                    try {
                      ru(5, e, e.return);
                    } catch (t) {
                      kc(e, e.return, t);
                    }
                  }
                  break;
                case 1:
                  vu(t, e), gu(e), 512 & r && null !== n && eu(n, n.return);
                  break;
                case 5:
                  if (
                    (vu(t, e),
                    gu(e),
                    512 & r && null !== n && eu(n, n.return),
                    32 & e.flags)
                  ) {
                    var o = e.stateNode;
                    try {
                      de(o, "");
                    } catch (t) {
                      kc(e, e.return, t);
                    }
                  }
                  if (4 & r && null != (o = e.stateNode)) {
                    var i = e.memoizedProps,
                      l = null !== n ? n.memoizedProps : i,
                      u = e.type,
                      c = e.updateQueue;
                    if (((e.updateQueue = null), null !== c))
                      try {
                        "input" === u &&
                          "radio" === i.type &&
                          null != i.name &&
                          G(o, i),
                          be(u, l);
                        var s = be(u, i);
                        for (l = 0; l < c.length; l += 2) {
                          var f = c[l],
                            d = c[l + 1];
                          "style" === f
                            ? ve(o, d)
                            : "dangerouslySetInnerHTML" === f
                            ? fe(o, d)
                            : "children" === f
                            ? de(o, d)
                            : b(o, f, d, s);
                        }
                        switch (u) {
                          case "input":
                            X(o, i);
                            break;
                          case "textarea":
                            ae(o, i);
                            break;
                          case "select":
                            var p = o._wrapperState.wasMultiple;
                            o._wrapperState.wasMultiple = !!i.multiple;
                            var h = i.value;
                            null != h
                              ? ne(o, !!i.multiple, h, !1)
                              : p !== !!i.multiple &&
                                (null != i.defaultValue
                                  ? ne(o, !!i.multiple, i.defaultValue, !0)
                                  : ne(
                                      o,
                                      !!i.multiple,
                                      i.multiple ? [] : "",
                                      !1
                                    ));
                        }
                        o[ho] = i;
                      } catch (t) {
                        kc(e, e.return, t);
                      }
                  }
                  break;
                case 6:
                  if ((vu(t, e), gu(e), 4 & r)) {
                    if (null === e.stateNode) throw Error(a(162));
                    (o = e.stateNode), (i = e.memoizedProps);
                    try {
                      o.nodeValue = i;
                    } catch (t) {
                      kc(e, e.return, t);
                    }
                  }
                  break;
                case 3:
                  if (
                    (vu(t, e),
                    gu(e),
                    4 & r && null !== n && n.memoizedState.isDehydrated)
                  )
                    try {
                      Bt(t.containerInfo);
                    } catch (t) {
                      kc(e, e.return, t);
                    }
                  break;
                case 4:
                default:
                  vu(t, e), gu(e);
                  break;
                case 13:
                  vu(t, e),
                    gu(e),
                    8192 & (o = e.child).flags &&
                      ((i = null !== o.memoizedState),
                      (o.stateNode.isHidden = i),
                      !i ||
                        (null !== o.alternate &&
                          null !== o.alternate.memoizedState) ||
                        (Bu = Ge())),
                    4 & r && mu(e);
                  break;
                case 22:
                  if (
                    ((f = null !== n && null !== n.memoizedState),
                    1 & e.mode
                      ? ((Gl = (s = Gl) || f), vu(t, e), (Gl = s))
                      : vu(t, e),
                    gu(e),
                    8192 & r)
                  ) {
                    if (
                      ((s = null !== e.memoizedState),
                      (e.stateNode.isHidden = s) && !f && 0 != (1 & e.mode))
                    )
                      for (Zl = e, f = e.child; null !== f; ) {
                        for (d = Zl = f; null !== Zl; ) {
                          switch (((h = (p = Zl).child), p.tag)) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                              ru(4, p, p.return);
                              break;
                            case 1:
                              eu(p, p.return);
                              var m = p.stateNode;
                              if ("function" == typeof m.componentWillUnmount) {
                                (r = p), (n = p.return);
                                try {
                                  (t = r),
                                    (m.props = t.memoizedProps),
                                    (m.state = t.memoizedState),
                                    m.componentWillUnmount();
                                } catch (e) {
                                  kc(r, n, e);
                                }
                              }
                              break;
                            case 5:
                              eu(p, p.return);
                              break;
                            case 22:
                              if (null !== p.memoizedState) {
                                Su(d);
                                continue;
                              }
                          }
                          null !== h ? ((h.return = p), (Zl = h)) : Su(d);
                        }
                        f = f.sibling;
                      }
                    e: for (f = null, d = e; ; ) {
                      if (5 === d.tag) {
                        if (null === f) {
                          f = d;
                          try {
                            (o = d.stateNode),
                              s
                                ? "function" == typeof (i = o.style).setProperty
                                  ? i.setProperty(
                                      "display",
                                      "none",
                                      "important"
                                    )
                                  : (i.display = "none")
                                : ((u = d.stateNode),
                                  (l =
                                    null != (c = d.memoizedProps.style) &&
                                    c.hasOwnProperty("display")
                                      ? c.display
                                      : null),
                                  (u.style.display = me("display", l)));
                          } catch (t) {
                            kc(e, e.return, t);
                          }
                        }
                      } else if (6 === d.tag) {
                        if (null === f)
                          try {
                            d.stateNode.nodeValue = s ? "" : d.memoizedProps;
                          } catch (t) {
                            kc(e, e.return, t);
                          }
                      } else if (
                        ((22 !== d.tag && 23 !== d.tag) ||
                          null === d.memoizedState ||
                          d === e) &&
                        null !== d.child
                      ) {
                        (d.child.return = d), (d = d.child);
                        continue;
                      }
                      if (d === e) break e;
                      for (; null === d.sibling; ) {
                        if (null === d.return || d.return === e) break e;
                        f === d && (f = null), (d = d.return);
                      }
                      f === d && (f = null),
                        (d.sibling.return = d.return),
                        (d = d.sibling);
                    }
                  }
                  break;
                case 19:
                  vu(t, e), gu(e), 4 & r && mu(e);
                case 21:
              }
            }
            function gu(e) {
              var t = e.flags;
              if (2 & t) {
                try {
                  e: {
                    for (var n = e.return; null !== n; ) {
                      if (lu(n)) {
                        var r = n;
                        break e;
                      }
                      n = n.return;
                    }
                    throw Error(a(160));
                  }
                  switch (r.tag) {
                    case 5:
                      var o = r.stateNode;
                      32 & r.flags && (de(o, ""), (r.flags &= -33)),
                        su(e, uu(e), o);
                      break;
                    case 3:
                    case 4:
                      var i = r.stateNode.containerInfo;
                      cu(e, uu(e), i);
                      break;
                    default:
                      throw Error(a(161));
                  }
                } catch (t) {
                  kc(e, e.return, t);
                }
                e.flags &= -3;
              }
              4096 & t && (e.flags &= -4097);
            }
            function bu(e, t, n) {
              (Zl = e), wu(e, t, n);
            }
            function wu(e, t, n) {
              for (var r = 0 != (1 & e.mode); null !== Zl; ) {
                var o = Zl,
                  a = o.child;
                if (22 === o.tag && r) {
                  var i = null !== o.memoizedState || Kl;
                  if (!i) {
                    var l = o.alternate,
                      u = (null !== l && null !== l.memoizedState) || Gl;
                    l = Kl;
                    var c = Gl;
                    if (((Kl = i), (Gl = u) && !c))
                      for (Zl = o; null !== Zl; )
                        (u = (i = Zl).child),
                          22 === i.tag && null !== i.memoizedState
                            ? xu(o)
                            : null !== u
                            ? ((u.return = i), (Zl = u))
                            : xu(o);
                    for (; null !== a; ) (Zl = a), wu(a, t, n), (a = a.sibling);
                    (Zl = o), (Kl = l), (Gl = c);
                  }
                  Eu(e);
                } else
                  0 != (8772 & o.subtreeFlags) && null !== a
                    ? ((a.return = o), (Zl = a))
                    : Eu(e);
              }
            }
            function Eu(e) {
              for (; null !== Zl; ) {
                var t = Zl;
                if (0 != (8772 & t.flags)) {
                  var n = t.alternate;
                  try {
                    if (0 != (8772 & t.flags))
                      switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Gl || ou(5, t);
                          break;
                        case 1:
                          var r = t.stateNode;
                          if (4 & t.flags && !Gl)
                            if (null === n) r.componentDidMount();
                            else {
                              var o =
                                t.elementType === t.type
                                  ? n.memoizedProps
                                  : ya(t.type, n.memoizedProps);
                              r.componentDidUpdate(
                                o,
                                n.memoizedState,
                                r.__reactInternalSnapshotBeforeUpdate
                              );
                            }
                          var i = t.updateQueue;
                          null !== i && Wa(t, i, r);
                          break;
                        case 3:
                          var l = t.updateQueue;
                          if (null !== l) {
                            if (((n = null), null !== t.child))
                              switch (t.child.tag) {
                                case 5:
                                case 1:
                                  n = t.child.stateNode;
                              }
                            Wa(t, l, n);
                          }
                          break;
                        case 5:
                          var u = t.stateNode;
                          if (null === n && 4 & t.flags) {
                            n = u;
                            var c = t.memoizedProps;
                            switch (t.type) {
                              case "button":
                              case "input":
                              case "select":
                              case "textarea":
                                c.autoFocus && n.focus();
                                break;
                              case "img":
                                c.src && (n.src = c.src);
                            }
                          }
                          break;
                        case 6:
                        case 4:
                        case 12:
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                          break;
                        case 13:
                          if (null === t.memoizedState) {
                            var s = t.alternate;
                            if (null !== s) {
                              var f = s.memoizedState;
                              if (null !== f) {
                                var d = f.dehydrated;
                                null !== d && Bt(d);
                              }
                            }
                          }
                          break;
                        default:
                          throw Error(a(163));
                      }
                    Gl || (512 & t.flags && au(t));
                  } catch (e) {
                    kc(t, t.return, e);
                  }
                }
                if (t === e) {
                  Zl = null;
                  break;
                }
                if (null !== (n = t.sibling)) {
                  (n.return = t.return), (Zl = n);
                  break;
                }
                Zl = t.return;
              }
            }
            function Su(e) {
              for (; null !== Zl; ) {
                var t = Zl;
                if (t === e) {
                  Zl = null;
                  break;
                }
                var n = t.sibling;
                if (null !== n) {
                  (n.return = t.return), (Zl = n);
                  break;
                }
                Zl = t.return;
              }
            }
            function xu(e) {
              for (; null !== Zl; ) {
                var t = Zl;
                try {
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      var n = t.return;
                      try {
                        ou(4, t);
                      } catch (e) {
                        kc(t, n, e);
                      }
                      break;
                    case 1:
                      var r = t.stateNode;
                      if ("function" == typeof r.componentDidMount) {
                        var o = t.return;
                        try {
                          r.componentDidMount();
                        } catch (e) {
                          kc(t, o, e);
                        }
                      }
                      var a = t.return;
                      try {
                        au(t);
                      } catch (e) {
                        kc(t, a, e);
                      }
                      break;
                    case 5:
                      var i = t.return;
                      try {
                        au(t);
                      } catch (e) {
                        kc(t, i, e);
                      }
                  }
                } catch (e) {
                  kc(t, t.return, e);
                }
                if (t === e) {
                  Zl = null;
                  break;
                }
                var l = t.sibling;
                if (null !== l) {
                  (l.return = t.return), (Zl = l);
                  break;
                }
                Zl = t.return;
              }
            }
            var _u,
              ku = Math.ceil,
              Pu = w.ReactCurrentDispatcher,
              Cu = w.ReactCurrentOwner,
              Ou = w.ReactCurrentBatchConfig,
              Lu = 0,
              Ru = null,
              Tu = null,
              Nu = 0,
              Du = 0,
              ju = ko(0),
              Mu = 0,
              Uu = null,
              Iu = 0,
              Au = 0,
              Wu = 0,
              zu = null,
              Fu = null,
              Bu = 0,
              Hu = 1 / 0,
              $u = null,
              Vu = !1,
              Ju = null,
              Qu = null,
              qu = !1,
              Yu = null,
              Ku = 0,
              Gu = 0,
              Xu = null,
              Zu = -1,
              ec = 0;
            function tc() {
              return 0 != (6 & Lu) ? Ge() : -1 !== Zu ? Zu : (Zu = Ge());
            }
            function nc(e) {
              return 0 == (1 & e.mode)
                ? 1
                : 0 != (2 & Lu) && 0 !== Nu
                ? Nu & -Nu
                : null !== va.transition
                ? (0 === ec && (ec = mt()), ec)
                : 0 !== (e = bt)
                ? e
                : (e = void 0 === (e = window.event) ? 16 : Kt(e.type));
            }
            function rc(e, t, n, r) {
              if (50 < Gu) throw ((Gu = 0), (Xu = null), Error(a(185)));
              yt(e, n, r),
                (0 != (2 & Lu) && e === Ru) ||
                  (e === Ru &&
                    (0 == (2 & Lu) && (Au |= n), 4 === Mu && uc(e, Nu)),
                  oc(e, r),
                  1 === n &&
                    0 === Lu &&
                    0 == (1 & t.mode) &&
                    ((Hu = Ge() + 500), zo && Ho()));
            }
            function oc(e, t) {
              var n = e.callbackNode;
              !(function (e, t) {
                for (
                  var n = e.suspendedLanes,
                    r = e.pingedLanes,
                    o = e.expirationTimes,
                    a = e.pendingLanes;
                  0 < a;

                ) {
                  var i = 31 - it(a),
                    l = 1 << i,
                    u = o[i];
                  -1 === u
                    ? (0 != (l & n) && 0 == (l & r)) || (o[i] = pt(l, t))
                    : u <= t && (e.expiredLanes |= l),
                    (a &= ~l);
                }
              })(e, t);
              var r = dt(e, e === Ru ? Nu : 0);
              if (0 === r)
                null !== n && qe(n),
                  (e.callbackNode = null),
                  (e.callbackPriority = 0);
              else if (((t = r & -r), e.callbackPriority !== t)) {
                if ((null != n && qe(n), 1 === t))
                  0 === e.tag
                    ? (function (e) {
                        (zo = !0), Bo(e);
                      })(cc.bind(null, e))
                    : Bo(cc.bind(null, e)),
                    io(function () {
                      0 == (6 & Lu) && Ho();
                    }),
                    (n = null);
                else {
                  switch (wt(r)) {
                    case 1:
                      n = Ze;
                      break;
                    case 4:
                      n = et;
                      break;
                    case 16:
                    default:
                      n = tt;
                      break;
                    case 536870912:
                      n = rt;
                  }
                  n = Rc(n, ac.bind(null, e));
                }
                (e.callbackPriority = t), (e.callbackNode = n);
              }
            }
            function ac(e, t) {
              if (((Zu = -1), (ec = 0), 0 != (6 & Lu))) throw Error(a(327));
              var n = e.callbackNode;
              if (xc() && e.callbackNode !== n) return null;
              var r = dt(e, e === Ru ? Nu : 0);
              if (0 === r) return null;
              if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = yc(e, r);
              else {
                t = r;
                var o = Lu;
                Lu |= 2;
                var i = mc();
                for (
                  (Ru === e && Nu === t) ||
                  (($u = null), (Hu = Ge() + 500), pc(e, t));
                  ;

                )
                  try {
                    bc();
                    break;
                  } catch (t) {
                    hc(e, t);
                  }
                Sa(),
                  (Pu.current = i),
                  (Lu = o),
                  null !== Tu ? (t = 0) : ((Ru = null), (Nu = 0), (t = Mu));
              }
              if (0 !== t) {
                if (
                  (2 === t && 0 !== (o = ht(e)) && ((r = o), (t = ic(e, o))),
                  1 === t)
                )
                  throw ((n = Uu), pc(e, 0), uc(e, r), oc(e, Ge()), n);
                if (6 === t) uc(e, r);
                else {
                  if (
                    ((o = e.current.alternate),
                    0 == (30 & r) &&
                      !(function (e) {
                        for (var t = e; ; ) {
                          if (16384 & t.flags) {
                            var n = t.updateQueue;
                            if (null !== n && null !== (n = n.stores))
                              for (var r = 0; r < n.length; r++) {
                                var o = n[r],
                                  a = o.getSnapshot;
                                o = o.value;
                                try {
                                  if (!lr(a(), o)) return !1;
                                } catch (e) {
                                  return !1;
                                }
                              }
                          }
                          if (
                            ((n = t.child),
                            16384 & t.subtreeFlags && null !== n)
                          )
                            (n.return = t), (t = n);
                          else {
                            if (t === e) break;
                            for (; null === t.sibling; ) {
                              if (null === t.return || t.return === e)
                                return !0;
                              t = t.return;
                            }
                            (t.sibling.return = t.return), (t = t.sibling);
                          }
                        }
                        return !0;
                      })(o) &&
                      (2 === (t = yc(e, r)) &&
                        0 !== (i = ht(e)) &&
                        ((r = i), (t = ic(e, i))),
                      1 === t))
                  )
                    throw ((n = Uu), pc(e, 0), uc(e, r), oc(e, Ge()), n);
                  switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
                    case 0:
                    case 1:
                      throw Error(a(345));
                    case 2:
                    case 5:
                      Sc(e, Fu, $u);
                      break;
                    case 3:
                      if (
                        (uc(e, r),
                        (130023424 & r) === r && 10 < (t = Bu + 500 - Ge()))
                      ) {
                        if (0 !== dt(e, 0)) break;
                        if (((o = e.suspendedLanes) & r) !== r) {
                          tc(), (e.pingedLanes |= e.suspendedLanes & o);
                          break;
                        }
                        e.timeoutHandle = ro(Sc.bind(null, e, Fu, $u), t);
                        break;
                      }
                      Sc(e, Fu, $u);
                      break;
                    case 4:
                      if ((uc(e, r), (4194240 & r) === r)) break;
                      for (t = e.eventTimes, o = -1; 0 < r; ) {
                        var l = 31 - it(r);
                        (i = 1 << l), (l = t[l]) > o && (o = l), (r &= ~i);
                      }
                      if (
                        ((r = o),
                        10 <
                          (r =
                            (120 > (r = Ge() - r)
                              ? 120
                              : 480 > r
                              ? 480
                              : 1080 > r
                              ? 1080
                              : 1920 > r
                              ? 1920
                              : 3e3 > r
                              ? 3e3
                              : 4320 > r
                              ? 4320
                              : 1960 * ku(r / 1960)) - r))
                      ) {
                        e.timeoutHandle = ro(Sc.bind(null, e, Fu, $u), r);
                        break;
                      }
                      Sc(e, Fu, $u);
                      break;
                    default:
                      throw Error(a(329));
                  }
                }
              }
              return (
                oc(e, Ge()), e.callbackNode === n ? ac.bind(null, e) : null
              );
            }
            function ic(e, t) {
              var n = zu;
              return (
                e.current.memoizedState.isDehydrated && (pc(e, t).flags |= 256),
                2 !== (e = yc(e, t)) &&
                  ((t = Fu), (Fu = n), null !== t && lc(t)),
                e
              );
            }
            function lc(e) {
              null === Fu ? (Fu = e) : Fu.push.apply(Fu, e);
            }
            function uc(e, t) {
              for (
                t &= ~Wu,
                  t &= ~Au,
                  e.suspendedLanes |= t,
                  e.pingedLanes &= ~t,
                  e = e.expirationTimes;
                0 < t;

              ) {
                var n = 31 - it(t),
                  r = 1 << n;
                (e[n] = -1), (t &= ~r);
              }
            }
            function cc(e) {
              if (0 != (6 & Lu)) throw Error(a(327));
              xc();
              var t = dt(e, 0);
              if (0 == (1 & t)) return oc(e, Ge()), null;
              var n = yc(e, t);
              if (0 !== e.tag && 2 === n) {
                var r = ht(e);
                0 !== r && ((t = r), (n = ic(e, r)));
              }
              if (1 === n) throw ((n = Uu), pc(e, 0), uc(e, t), oc(e, Ge()), n);
              if (6 === n) throw Error(a(345));
              return (
                (e.finishedWork = e.current.alternate),
                (e.finishedLanes = t),
                Sc(e, Fu, $u),
                oc(e, Ge()),
                null
              );
            }
            function sc(e, t) {
              var n = Lu;
              Lu |= 1;
              try {
                return e(t);
              } finally {
                0 === (Lu = n) && ((Hu = Ge() + 500), zo && Ho());
              }
            }
            function fc(e) {
              null !== Yu && 0 === Yu.tag && 0 == (6 & Lu) && xc();
              var t = Lu;
              Lu |= 1;
              var n = Ou.transition,
                r = bt;
              try {
                if (((Ou.transition = null), (bt = 1), e)) return e();
              } finally {
                (bt = r), (Ou.transition = n), 0 == (6 & (Lu = t)) && Ho();
              }
            }
            function dc() {
              (Du = ju.current), Po(ju);
            }
            function pc(e, t) {
              (e.finishedWork = null), (e.finishedLanes = 0);
              var n = e.timeoutHandle;
              if ((-1 !== n && ((e.timeoutHandle = -1), oo(n)), null !== Tu))
                for (n = Tu.return; null !== n; ) {
                  var r = n;
                  switch ((na(r), r.tag)) {
                    case 1:
                      null != (r = r.type.childContextTypes) && jo();
                      break;
                    case 3:
                      ai(), Po(Ro), Po(Lo), fi();
                      break;
                    case 5:
                      li(r);
                      break;
                    case 4:
                      ai();
                      break;
                    case 13:
                    case 19:
                      Po(ui);
                      break;
                    case 10:
                      xa(r.type._context);
                      break;
                    case 22:
                    case 23:
                      dc();
                  }
                  n = n.return;
                }
              if (
                ((Ru = e),
                (Tu = e = jc(e.current, null)),
                (Nu = Du = t),
                (Mu = 0),
                (Uu = null),
                (Wu = Au = Iu = 0),
                (Fu = zu = null),
                null !== Ca)
              ) {
                for (t = 0; t < Ca.length; t++)
                  if (null !== (r = (n = Ca[t]).interleaved)) {
                    n.interleaved = null;
                    var o = r.next,
                      a = n.pending;
                    if (null !== a) {
                      var i = a.next;
                      (a.next = o), (r.next = i);
                    }
                    n.pending = r;
                  }
                Ca = null;
              }
              return e;
            }
            function hc(e, t) {
              for (;;) {
                var n = Tu;
                try {
                  if ((Sa(), (di.current = il), gi)) {
                    for (var r = mi.memoizedState; null !== r; ) {
                      var o = r.queue;
                      null !== o && (o.pending = null), (r = r.next);
                    }
                    gi = !1;
                  }
                  if (
                    ((hi = 0),
                    (yi = vi = mi = null),
                    (bi = !1),
                    (wi = 0),
                    (Cu.current = null),
                    null === n || null === n.return)
                  ) {
                    (Mu = 1), (Uu = t), (Tu = null);
                    break;
                  }
                  e: {
                    var i = e,
                      l = n.return,
                      u = n,
                      c = t;
                    if (
                      ((t = Nu),
                      (u.flags |= 32768),
                      null !== c &&
                        "object" == typeof c &&
                        "function" == typeof c.then)
                    ) {
                      var s = c,
                        f = u,
                        d = f.tag;
                      if (
                        0 == (1 & f.mode) &&
                        (0 === d || 11 === d || 15 === d)
                      ) {
                        var p = f.alternate;
                        p
                          ? ((f.updateQueue = p.updateQueue),
                            (f.memoizedState = p.memoizedState),
                            (f.lanes = p.lanes))
                          : ((f.updateQueue = null), (f.memoizedState = null));
                      }
                      var h = yl(l);
                      if (null !== h) {
                        (h.flags &= -257),
                          gl(h, l, u, 0, t),
                          1 & h.mode && vl(i, s, t),
                          (c = s);
                        var m = (t = h).updateQueue;
                        if (null === m) {
                          var v = new Set();
                          v.add(c), (t.updateQueue = v);
                        } else m.add(c);
                        break e;
                      }
                      if (0 == (1 & t)) {
                        vl(i, s, t), vc();
                        break e;
                      }
                      c = Error(a(426));
                    } else if (aa && 1 & u.mode) {
                      var y = yl(l);
                      if (null !== y) {
                        0 == (65536 & y.flags) && (y.flags |= 256),
                          gl(y, l, u, 0, t),
                          ma(sl(c, u));
                        break e;
                      }
                    }
                    (i = c = sl(c, u)),
                      4 !== Mu && (Mu = 2),
                      null === zu ? (zu = [i]) : zu.push(i),
                      (i = l);
                    do {
                      switch (i.tag) {
                        case 3:
                          (i.flags |= 65536),
                            (t &= -t),
                            (i.lanes |= t),
                            Ia(i, hl(0, c, t));
                          break e;
                        case 1:
                          u = c;
                          var g = i.type,
                            b = i.stateNode;
                          if (
                            0 == (128 & i.flags) &&
                            ("function" == typeof g.getDerivedStateFromError ||
                              (null !== b &&
                                "function" == typeof b.componentDidCatch &&
                                (null === Qu || !Qu.has(b))))
                          ) {
                            (i.flags |= 65536),
                              (t &= -t),
                              (i.lanes |= t),
                              Ia(i, ml(i, u, t));
                            break e;
                          }
                      }
                      i = i.return;
                    } while (null !== i);
                  }
                  Ec(n);
                } catch (e) {
                  (t = e), Tu === n && null !== n && (Tu = n = n.return);
                  continue;
                }
                break;
              }
            }
            function mc() {
              var e = Pu.current;
              return (Pu.current = il), null === e ? il : e;
            }
            function vc() {
              (0 !== Mu && 3 !== Mu && 2 !== Mu) || (Mu = 4),
                null === Ru ||
                  (0 == (268435455 & Iu) && 0 == (268435455 & Au)) ||
                  uc(Ru, Nu);
            }
            function yc(e, t) {
              var n = Lu;
              Lu |= 2;
              var r = mc();
              for ((Ru === e && Nu === t) || (($u = null), pc(e, t)); ; )
                try {
                  gc();
                  break;
                } catch (t) {
                  hc(e, t);
                }
              if ((Sa(), (Lu = n), (Pu.current = r), null !== Tu))
                throw Error(a(261));
              return (Ru = null), (Nu = 0), Mu;
            }
            function gc() {
              for (; null !== Tu; ) wc(Tu);
            }
            function bc() {
              for (; null !== Tu && !Ye(); ) wc(Tu);
            }
            function wc(e) {
              var t = _u(e.alternate, e, Du);
              (e.memoizedProps = e.pendingProps),
                null === t ? Ec(e) : (Tu = t),
                (Cu.current = null);
            }
            function Ec(e) {
              var t = e;
              do {
                var n = t.alternate;
                if (((e = t.return), 0 == (32768 & t.flags))) {
                  if (null !== (n = ql(n, t, Du))) return void (Tu = n);
                } else {
                  if (null !== (n = Yl(n, t)))
                    return (n.flags &= 32767), void (Tu = n);
                  if (null === e) return (Mu = 6), void (Tu = null);
                  (e.flags |= 32768),
                    (e.subtreeFlags = 0),
                    (e.deletions = null);
                }
                if (null !== (t = t.sibling)) return void (Tu = t);
                Tu = t = e;
              } while (null !== t);
              0 === Mu && (Mu = 5);
            }
            function Sc(e, t, n) {
              var r = bt,
                o = Ou.transition;
              try {
                (Ou.transition = null),
                  (bt = 1),
                  (function (e, t, n, r) {
                    do {
                      xc();
                    } while (null !== Yu);
                    if (0 != (6 & Lu)) throw Error(a(327));
                    n = e.finishedWork;
                    var o = e.finishedLanes;
                    if (null === n) return null;
                    if (
                      ((e.finishedWork = null),
                      (e.finishedLanes = 0),
                      n === e.current)
                    )
                      throw Error(a(177));
                    (e.callbackNode = null), (e.callbackPriority = 0);
                    var i = n.lanes | n.childLanes;
                    if (
                      ((function (e, t) {
                        var n = e.pendingLanes & ~t;
                        (e.pendingLanes = t),
                          (e.suspendedLanes = 0),
                          (e.pingedLanes = 0),
                          (e.expiredLanes &= t),
                          (e.mutableReadLanes &= t),
                          (e.entangledLanes &= t),
                          (t = e.entanglements);
                        var r = e.eventTimes;
                        for (e = e.expirationTimes; 0 < n; ) {
                          var o = 31 - it(n),
                            a = 1 << o;
                          (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~a);
                        }
                      })(e, i),
                      e === Ru && ((Tu = Ru = null), (Nu = 0)),
                      (0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags)) ||
                        qu ||
                        ((qu = !0),
                        Rc(tt, function () {
                          return xc(), null;
                        })),
                      (i = 0 != (15990 & n.flags)),
                      0 != (15990 & n.subtreeFlags) || i)
                    ) {
                      (i = Ou.transition), (Ou.transition = null);
                      var l = bt;
                      bt = 1;
                      var u = Lu;
                      (Lu |= 4),
                        (Cu.current = null),
                        (function (e, t) {
                          if (((eo = $t), pr((e = dr())))) {
                            if ("selectionStart" in e)
                              var n = {
                                start: e.selectionStart,
                                end: e.selectionEnd,
                              };
                            else
                              e: {
                                var r =
                                  (n =
                                    ((n = e.ownerDocument) && n.defaultView) ||
                                    window).getSelection && n.getSelection();
                                if (r && 0 !== r.rangeCount) {
                                  n = r.anchorNode;
                                  var o = r.anchorOffset,
                                    i = r.focusNode;
                                  r = r.focusOffset;
                                  try {
                                    n.nodeType, i.nodeType;
                                  } catch (e) {
                                    n = null;
                                    break e;
                                  }
                                  var l = 0,
                                    u = -1,
                                    c = -1,
                                    s = 0,
                                    f = 0,
                                    d = e,
                                    p = null;
                                  t: for (;;) {
                                    for (
                                      var h;
                                      d !== n ||
                                        (0 !== o && 3 !== d.nodeType) ||
                                        (u = l + o),
                                        d !== i ||
                                          (0 !== r && 3 !== d.nodeType) ||
                                          (c = l + r),
                                        3 === d.nodeType &&
                                          (l += d.nodeValue.length),
                                        null !== (h = d.firstChild);

                                    )
                                      (p = d), (d = h);
                                    for (;;) {
                                      if (d === e) break t;
                                      if (
                                        (p === n && ++s === o && (u = l),
                                        p === i && ++f === r && (c = l),
                                        null !== (h = d.nextSibling))
                                      )
                                        break;
                                      p = (d = p).parentNode;
                                    }
                                    d = h;
                                  }
                                  n =
                                    -1 === u || -1 === c
                                      ? null
                                      : { start: u, end: c };
                                } else n = null;
                              }
                            n = n || { start: 0, end: 0 };
                          } else n = null;
                          for (
                            to = { focusedElem: e, selectionRange: n },
                              $t = !1,
                              Zl = t;
                            null !== Zl;

                          )
                            if (
                              ((e = (t = Zl).child),
                              0 != (1028 & t.subtreeFlags) && null !== e)
                            )
                              (e.return = t), (Zl = e);
                            else
                              for (; null !== Zl; ) {
                                t = Zl;
                                try {
                                  var m = t.alternate;
                                  if (0 != (1024 & t.flags))
                                    switch (t.tag) {
                                      case 0:
                                      case 11:
                                      case 15:
                                      case 5:
                                      case 6:
                                      case 4:
                                      case 17:
                                        break;
                                      case 1:
                                        if (null !== m) {
                                          var v = m.memoizedProps,
                                            y = m.memoizedState,
                                            g = t.stateNode,
                                            b = g.getSnapshotBeforeUpdate(
                                              t.elementType === t.type
                                                ? v
                                                : ya(t.type, v),
                                              y
                                            );
                                          g.__reactInternalSnapshotBeforeUpdate =
                                            b;
                                        }
                                        break;
                                      case 3:
                                        var w = t.stateNode.containerInfo;
                                        1 === w.nodeType
                                          ? (w.textContent = "")
                                          : 9 === w.nodeType &&
                                            w.documentElement &&
                                            w.removeChild(w.documentElement);
                                        break;
                                      default:
                                        throw Error(a(163));
                                    }
                                } catch (e) {
                                  kc(t, t.return, e);
                                }
                                if (null !== (e = t.sibling)) {
                                  (e.return = t.return), (Zl = e);
                                  break;
                                }
                                Zl = t.return;
                              }
                          (m = nu), (nu = !1);
                        })(e, n),
                        yu(n, e),
                        hr(to),
                        ($t = !!eo),
                        (to = eo = null),
                        (e.current = n),
                        bu(n, e, o),
                        Ke(),
                        (Lu = u),
                        (bt = l),
                        (Ou.transition = i);
                    } else e.current = n;
                    if (
                      (qu && ((qu = !1), (Yu = e), (Ku = o)),
                      0 === (i = e.pendingLanes) && (Qu = null),
                      (function (e) {
                        if (at && "function" == typeof at.onCommitFiberRoot)
                          try {
                            at.onCommitFiberRoot(
                              ot,
                              e,
                              void 0,
                              128 == (128 & e.current.flags)
                            );
                          } catch (e) {}
                      })(n.stateNode),
                      oc(e, Ge()),
                      null !== t)
                    )
                      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                        r((o = t[n]).value, {
                          componentStack: o.stack,
                          digest: o.digest,
                        });
                    if (Vu) throw ((Vu = !1), (e = Ju), (Ju = null), e);
                    0 != (1 & Ku) && 0 !== e.tag && xc(),
                      0 != (1 & (i = e.pendingLanes))
                        ? e === Xu
                          ? Gu++
                          : ((Gu = 0), (Xu = e))
                        : (Gu = 0),
                      Ho();
                  })(e, t, n, r);
              } finally {
                (Ou.transition = o), (bt = r);
              }
              return null;
            }
            function xc() {
              if (null !== Yu) {
                var e = wt(Ku),
                  t = Ou.transition,
                  n = bt;
                try {
                  if (
                    ((Ou.transition = null),
                    (bt = 16 > e ? 16 : e),
                    null === Yu)
                  )
                    var r = !1;
                  else {
                    if (((e = Yu), (Yu = null), (Ku = 0), 0 != (6 & Lu)))
                      throw Error(a(331));
                    var o = Lu;
                    for (Lu |= 4, Zl = e.current; null !== Zl; ) {
                      var i = Zl,
                        l = i.child;
                      if (0 != (16 & Zl.flags)) {
                        var u = i.deletions;
                        if (null !== u) {
                          for (var c = 0; c < u.length; c++) {
                            var s = u[c];
                            for (Zl = s; null !== Zl; ) {
                              var f = Zl;
                              switch (f.tag) {
                                case 0:
                                case 11:
                                case 15:
                                  ru(8, f, i);
                              }
                              var d = f.child;
                              if (null !== d) (d.return = f), (Zl = d);
                              else
                                for (; null !== Zl; ) {
                                  var p = (f = Zl).sibling,
                                    h = f.return;
                                  if ((iu(f), f === s)) {
                                    Zl = null;
                                    break;
                                  }
                                  if (null !== p) {
                                    (p.return = h), (Zl = p);
                                    break;
                                  }
                                  Zl = h;
                                }
                            }
                          }
                          var m = i.alternate;
                          if (null !== m) {
                            var v = m.child;
                            if (null !== v) {
                              m.child = null;
                              do {
                                var y = v.sibling;
                                (v.sibling = null), (v = y);
                              } while (null !== v);
                            }
                          }
                          Zl = i;
                        }
                      }
                      if (0 != (2064 & i.subtreeFlags) && null !== l)
                        (l.return = i), (Zl = l);
                      else
                        e: for (; null !== Zl; ) {
                          if (0 != (2048 & (i = Zl).flags))
                            switch (i.tag) {
                              case 0:
                              case 11:
                              case 15:
                                ru(9, i, i.return);
                            }
                          var g = i.sibling;
                          if (null !== g) {
                            (g.return = i.return), (Zl = g);
                            break e;
                          }
                          Zl = i.return;
                        }
                    }
                    var b = e.current;
                    for (Zl = b; null !== Zl; ) {
                      var w = (l = Zl).child;
                      if (0 != (2064 & l.subtreeFlags) && null !== w)
                        (w.return = l), (Zl = w);
                      else
                        e: for (l = b; null !== Zl; ) {
                          if (0 != (2048 & (u = Zl).flags))
                            try {
                              switch (u.tag) {
                                case 0:
                                case 11:
                                case 15:
                                  ou(9, u);
                              }
                            } catch (e) {
                              kc(u, u.return, e);
                            }
                          if (u === l) {
                            Zl = null;
                            break e;
                          }
                          var E = u.sibling;
                          if (null !== E) {
                            (E.return = u.return), (Zl = E);
                            break e;
                          }
                          Zl = u.return;
                        }
                    }
                    if (
                      ((Lu = o),
                      Ho(),
                      at && "function" == typeof at.onPostCommitFiberRoot)
                    )
                      try {
                        at.onPostCommitFiberRoot(ot, e);
                      } catch (e) {}
                    r = !0;
                  }
                  return r;
                } finally {
                  (bt = n), (Ou.transition = t);
                }
              }
              return !1;
            }
            function _c(e, t, n) {
              (e = Ma(e, (t = hl(0, (t = sl(n, t)), 1)), 1)),
                (t = tc()),
                null !== e && (yt(e, 1, t), oc(e, t));
            }
            function kc(e, t, n) {
              if (3 === e.tag) _c(e, e, n);
              else
                for (; null !== t; ) {
                  if (3 === t.tag) {
                    _c(t, e, n);
                    break;
                  }
                  if (1 === t.tag) {
                    var r = t.stateNode;
                    if (
                      "function" == typeof t.type.getDerivedStateFromError ||
                      ("function" == typeof r.componentDidCatch &&
                        (null === Qu || !Qu.has(r)))
                    ) {
                      (t = Ma(t, (e = ml(t, (e = sl(n, e)), 1)), 1)),
                        (e = tc()),
                        null !== t && (yt(t, 1, e), oc(t, e));
                      break;
                    }
                  }
                  t = t.return;
                }
            }
            function Pc(e, t, n) {
              var r = e.pingCache;
              null !== r && r.delete(t),
                (t = tc()),
                (e.pingedLanes |= e.suspendedLanes & n),
                Ru === e &&
                  (Nu & n) === n &&
                  (4 === Mu ||
                  (3 === Mu && (130023424 & Nu) === Nu && 500 > Ge() - Bu)
                    ? pc(e, 0)
                    : (Wu |= n)),
                oc(e, t);
            }
            function Cc(e, t) {
              0 === t &&
                (0 == (1 & e.mode)
                  ? (t = 1)
                  : ((t = st),
                    0 == (130023424 & (st <<= 1)) && (st = 4194304)));
              var n = tc();
              null !== (e = Ra(e, t)) && (yt(e, t, n), oc(e, n));
            }
            function Oc(e) {
              var t = e.memoizedState,
                n = 0;
              null !== t && (n = t.retryLane), Cc(e, n);
            }
            function Lc(e, t) {
              var n = 0;
              switch (e.tag) {
                case 13:
                  var r = e.stateNode,
                    o = e.memoizedState;
                  null !== o && (n = o.retryLane);
                  break;
                case 19:
                  r = e.stateNode;
                  break;
                default:
                  throw Error(a(314));
              }
              null !== r && r.delete(t), Cc(e, n);
            }
            function Rc(e, t) {
              return Qe(e, t);
            }
            function Tc(e, t, n, r) {
              (this.tag = e),
                (this.key = n),
                (this.sibling =
                  this.child =
                  this.return =
                  this.stateNode =
                  this.type =
                  this.elementType =
                    null),
                (this.index = 0),
                (this.ref = null),
                (this.pendingProps = t),
                (this.dependencies =
                  this.memoizedState =
                  this.updateQueue =
                  this.memoizedProps =
                    null),
                (this.mode = r),
                (this.subtreeFlags = this.flags = 0),
                (this.deletions = null),
                (this.childLanes = this.lanes = 0),
                (this.alternate = null);
            }
            function Nc(e, t, n, r) {
              return new Tc(e, t, n, r);
            }
            function Dc(e) {
              return !(!(e = e.prototype) || !e.isReactComponent);
            }
            function jc(e, t) {
              var n = e.alternate;
              return (
                null === n
                  ? (((n = Nc(e.tag, t, e.key, e.mode)).elementType =
                      e.elementType),
                    (n.type = e.type),
                    (n.stateNode = e.stateNode),
                    (n.alternate = e),
                    (e.alternate = n))
                  : ((n.pendingProps = t),
                    (n.type = e.type),
                    (n.flags = 0),
                    (n.subtreeFlags = 0),
                    (n.deletions = null)),
                (n.flags = 14680064 & e.flags),
                (n.childLanes = e.childLanes),
                (n.lanes = e.lanes),
                (n.child = e.child),
                (n.memoizedProps = e.memoizedProps),
                (n.memoizedState = e.memoizedState),
                (n.updateQueue = e.updateQueue),
                (t = e.dependencies),
                (n.dependencies =
                  null === t
                    ? null
                    : { lanes: t.lanes, firstContext: t.firstContext }),
                (n.sibling = e.sibling),
                (n.index = e.index),
                (n.ref = e.ref),
                n
              );
            }
            function Mc(e, t, n, r, o, i) {
              var l = 2;
              if (((r = e), "function" == typeof e)) Dc(e) && (l = 1);
              else if ("string" == typeof e) l = 5;
              else
                e: switch (e) {
                  case x:
                    return Uc(n.children, o, i, t);
                  case _:
                    (l = 8), (o |= 8);
                    break;
                  case k:
                    return (
                      ((e = Nc(12, n, t, 2 | o)).elementType = k),
                      (e.lanes = i),
                      e
                    );
                  case L:
                    return (
                      ((e = Nc(13, n, t, o)).elementType = L), (e.lanes = i), e
                    );
                  case R:
                    return (
                      ((e = Nc(19, n, t, o)).elementType = R), (e.lanes = i), e
                    );
                  case D:
                    return Ic(n, o, i, t);
                  default:
                    if ("object" == typeof e && null !== e)
                      switch (e.$$typeof) {
                        case P:
                          l = 10;
                          break e;
                        case C:
                          l = 9;
                          break e;
                        case O:
                          l = 11;
                          break e;
                        case T:
                          l = 14;
                          break e;
                        case N:
                          (l = 16), (r = null);
                          break e;
                      }
                    throw Error(a(130, null == e ? e : typeof e, ""));
                }
              return (
                ((t = Nc(l, n, t, o)).elementType = e),
                (t.type = r),
                (t.lanes = i),
                t
              );
            }
            function Uc(e, t, n, r) {
              return ((e = Nc(7, e, r, t)).lanes = n), e;
            }
            function Ic(e, t, n, r) {
              return (
                ((e = Nc(22, e, r, t)).elementType = D),
                (e.lanes = n),
                (e.stateNode = { isHidden: !1 }),
                e
              );
            }
            function Ac(e, t, n) {
              return ((e = Nc(6, e, null, t)).lanes = n), e;
            }
            function Wc(e, t, n) {
              return (
                ((t = Nc(
                  4,
                  null !== e.children ? e.children : [],
                  e.key,
                  t
                )).lanes = n),
                (t.stateNode = {
                  containerInfo: e.containerInfo,
                  pendingChildren: null,
                  implementation: e.implementation,
                }),
                t
              );
            }
            function zc(e, t, n, r, o) {
              (this.tag = t),
                (this.containerInfo = e),
                (this.finishedWork =
                  this.pingCache =
                  this.current =
                  this.pendingChildren =
                    null),
                (this.timeoutHandle = -1),
                (this.callbackNode = this.pendingContext = this.context = null),
                (this.callbackPriority = 0),
                (this.eventTimes = vt(0)),
                (this.expirationTimes = vt(-1)),
                (this.entangledLanes =
                  this.finishedLanes =
                  this.mutableReadLanes =
                  this.expiredLanes =
                  this.pingedLanes =
                  this.suspendedLanes =
                  this.pendingLanes =
                    0),
                (this.entanglements = vt(0)),
                (this.identifierPrefix = r),
                (this.onRecoverableError = o),
                (this.mutableSourceEagerHydrationData = null);
            }
            function Fc(e, t, n, r, o, a, i, l, u) {
              return (
                (e = new zc(e, t, n, l, u)),
                1 === t ? ((t = 1), !0 === a && (t |= 8)) : (t = 0),
                (a = Nc(3, null, null, t)),
                (e.current = a),
                (a.stateNode = e),
                (a.memoizedState = {
                  element: r,
                  isDehydrated: n,
                  cache: null,
                  transitions: null,
                  pendingSuspenseBoundaries: null,
                }),
                Na(a),
                e
              );
            }
            function Bc(e) {
              if (!e) return Oo;
              e: {
                if (Be((e = e._reactInternals)) !== e || 1 !== e.tag)
                  throw Error(a(170));
                var t = e;
                do {
                  switch (t.tag) {
                    case 3:
                      t = t.stateNode.context;
                      break e;
                    case 1:
                      if (Do(t.type)) {
                        t =
                          t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e;
                      }
                  }
                  t = t.return;
                } while (null !== t);
                throw Error(a(171));
              }
              if (1 === e.tag) {
                var n = e.type;
                if (Do(n)) return Uo(e, n, t);
              }
              return t;
            }
            function Hc(e, t, n, r, o, a, i, l, u) {
              return (
                ((e = Fc(n, r, !0, e, 0, a, 0, l, u)).context = Bc(null)),
                (n = e.current),
                ((a = ja((r = tc()), (o = nc(n)))).callback =
                  null != t ? t : null),
                Ma(n, a, o),
                (e.current.lanes = o),
                yt(e, o, r),
                oc(e, r),
                e
              );
            }
            function $c(e, t, n, r) {
              var o = t.current,
                a = tc(),
                i = nc(o);
              return (
                (n = Bc(n)),
                null === t.context ? (t.context = n) : (t.pendingContext = n),
                ((t = ja(a, i)).payload = { element: e }),
                null !== (r = void 0 === r ? null : r) && (t.callback = r),
                null !== (e = Ma(o, t, i)) && (rc(e, o, i, a), Ua(e, o, i)),
                i
              );
            }
            function Vc(e) {
              return (e = e.current).child
                ? (e.child.tag, e.child.stateNode)
                : null;
            }
            function Jc(e, t) {
              if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                var n = e.retryLane;
                e.retryLane = 0 !== n && n < t ? n : t;
              }
            }
            function Qc(e, t) {
              Jc(e, t), (e = e.alternate) && Jc(e, t);
            }
            _u = function (e, t, n) {
              if (null !== e)
                if (e.memoizedProps !== t.pendingProps || Ro.current) wl = !0;
                else {
                  if (0 == (e.lanes & n) && 0 == (128 & t.flags))
                    return (
                      (wl = !1),
                      (function (e, t, n) {
                        switch (t.tag) {
                          case 3:
                            Rl(t), ha();
                            break;
                          case 5:
                            ii(t);
                            break;
                          case 1:
                            Do(t.type) && Io(t);
                            break;
                          case 4:
                            oi(t, t.stateNode.containerInfo);
                            break;
                          case 10:
                            var r = t.type._context,
                              o = t.memoizedProps.value;
                            Co(ga, r._currentValue), (r._currentValue = o);
                            break;
                          case 13:
                            if (null !== (r = t.memoizedState))
                              return null !== r.dehydrated
                                ? (Co(ui, 1 & ui.current),
                                  (t.flags |= 128),
                                  null)
                                : 0 != (n & t.child.childLanes)
                                ? Al(e, t, n)
                                : (Co(ui, 1 & ui.current),
                                  null !== (e = Vl(e, t, n))
                                    ? e.sibling
                                    : null);
                            Co(ui, 1 & ui.current);
                            break;
                          case 19:
                            if (
                              ((r = 0 != (n & t.childLanes)),
                              0 != (128 & e.flags))
                            ) {
                              if (r) return Hl(e, t, n);
                              t.flags |= 128;
                            }
                            if (
                              (null !== (o = t.memoizedState) &&
                                ((o.rendering = null),
                                (o.tail = null),
                                (o.lastEffect = null)),
                              Co(ui, ui.current),
                              r)
                            )
                              break;
                            return null;
                          case 22:
                          case 23:
                            return (t.lanes = 0), kl(e, t, n);
                        }
                        return Vl(e, t, n);
                      })(e, t, n)
                    );
                  wl = 0 != (131072 & e.flags);
                }
              else
                (wl = !1), aa && 0 != (1048576 & t.flags) && ea(t, Qo, t.index);
              switch (((t.lanes = 0), t.tag)) {
                case 2:
                  var r = t.type;
                  $l(e, t), (e = t.pendingProps);
                  var o = No(t, Lo.current);
                  ka(t, n), (o = _i(null, t, r, e, o, n));
                  var i = ki();
                  return (
                    (t.flags |= 1),
                    "object" == typeof o &&
                    null !== o &&
                    "function" == typeof o.render &&
                    void 0 === o.$$typeof
                      ? ((t.tag = 1),
                        (t.memoizedState = null),
                        (t.updateQueue = null),
                        Do(r) ? ((i = !0), Io(t)) : (i = !1),
                        (t.memoizedState =
                          null !== o.state && void 0 !== o.state
                            ? o.state
                            : null),
                        Na(t),
                        (o.updater = Ba),
                        (t.stateNode = o),
                        (o._reactInternals = t),
                        Ja(t, r, e, n),
                        (t = Ll(null, t, r, !0, i, n)))
                      : ((t.tag = 0),
                        aa && i && ta(t),
                        El(null, t, o, n),
                        (t = t.child)),
                    t
                  );
                case 16:
                  r = t.elementType;
                  e: {
                    switch (
                      ($l(e, t),
                      (e = t.pendingProps),
                      (r = (o = r._init)(r._payload)),
                      (t.type = r),
                      (o = t.tag =
                        (function (e) {
                          if ("function" == typeof e) return Dc(e) ? 1 : 0;
                          if (null != e) {
                            if ((e = e.$$typeof) === O) return 11;
                            if (e === T) return 14;
                          }
                          return 2;
                        })(r)),
                      (e = ya(r, e)),
                      o)
                    ) {
                      case 0:
                        t = Cl(null, t, r, e, n);
                        break e;
                      case 1:
                        t = Ol(null, t, r, e, n);
                        break e;
                      case 11:
                        t = Sl(null, t, r, e, n);
                        break e;
                      case 14:
                        t = xl(null, t, r, ya(r.type, e), n);
                        break e;
                    }
                    throw Error(a(306, r, ""));
                  }
                  return t;
                case 0:
                  return (
                    (r = t.type),
                    (o = t.pendingProps),
                    Cl(e, t, r, (o = t.elementType === r ? o : ya(r, o)), n)
                  );
                case 1:
                  return (
                    (r = t.type),
                    (o = t.pendingProps),
                    Ol(e, t, r, (o = t.elementType === r ? o : ya(r, o)), n)
                  );
                case 3:
                  e: {
                    if ((Rl(t), null === e)) throw Error(a(387));
                    (r = t.pendingProps),
                      (o = (i = t.memoizedState).element),
                      Da(e, t),
                      Aa(t, r, null, n);
                    var l = t.memoizedState;
                    if (((r = l.element), i.isDehydrated)) {
                      if (
                        ((i = {
                          element: r,
                          isDehydrated: !1,
                          cache: l.cache,
                          pendingSuspenseBoundaries:
                            l.pendingSuspenseBoundaries,
                          transitions: l.transitions,
                        }),
                        (t.updateQueue.baseState = i),
                        (t.memoizedState = i),
                        256 & t.flags)
                      ) {
                        t = Tl(e, t, r, n, (o = sl(Error(a(423)), t)));
                        break e;
                      }
                      if (r !== o) {
                        t = Tl(e, t, r, n, (o = sl(Error(a(424)), t)));
                        break e;
                      }
                      for (
                        oa = co(t.stateNode.containerInfo.firstChild),
                          ra = t,
                          aa = !0,
                          ia = null,
                          n = Xa(t, null, r, n),
                          t.child = n;
                        n;

                      )
                        (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                    } else {
                      if ((ha(), r === o)) {
                        t = Vl(e, t, n);
                        break e;
                      }
                      El(e, t, r, n);
                    }
                    t = t.child;
                  }
                  return t;
                case 5:
                  return (
                    ii(t),
                    null === e && sa(t),
                    (r = t.type),
                    (o = t.pendingProps),
                    (i = null !== e ? e.memoizedProps : null),
                    (l = o.children),
                    no(r, o)
                      ? (l = null)
                      : null !== i && no(r, i) && (t.flags |= 32),
                    Pl(e, t),
                    El(e, t, l, n),
                    t.child
                  );
                case 6:
                  return null === e && sa(t), null;
                case 13:
                  return Al(e, t, n);
                case 4:
                  return (
                    oi(t, t.stateNode.containerInfo),
                    (r = t.pendingProps),
                    null === e ? (t.child = Ga(t, null, r, n)) : El(e, t, r, n),
                    t.child
                  );
                case 11:
                  return (
                    (r = t.type),
                    (o = t.pendingProps),
                    Sl(e, t, r, (o = t.elementType === r ? o : ya(r, o)), n)
                  );
                case 7:
                  return El(e, t, t.pendingProps, n), t.child;
                case 8:
                case 12:
                  return El(e, t, t.pendingProps.children, n), t.child;
                case 10:
                  e: {
                    if (
                      ((r = t.type._context),
                      (o = t.pendingProps),
                      (i = t.memoizedProps),
                      (l = o.value),
                      Co(ga, r._currentValue),
                      (r._currentValue = l),
                      null !== i)
                    )
                      if (lr(i.value, l)) {
                        if (i.children === o.children && !Ro.current) {
                          t = Vl(e, t, n);
                          break e;
                        }
                      } else
                        for (
                          null !== (i = t.child) && (i.return = t);
                          null !== i;

                        ) {
                          var u = i.dependencies;
                          if (null !== u) {
                            l = i.child;
                            for (var c = u.firstContext; null !== c; ) {
                              if (c.context === r) {
                                if (1 === i.tag) {
                                  (c = ja(-1, n & -n)).tag = 2;
                                  var s = i.updateQueue;
                                  if (null !== s) {
                                    var f = (s = s.shared).pending;
                                    null === f
                                      ? (c.next = c)
                                      : ((c.next = f.next), (f.next = c)),
                                      (s.pending = c);
                                  }
                                }
                                (i.lanes |= n),
                                  null !== (c = i.alternate) && (c.lanes |= n),
                                  _a(i.return, n, t),
                                  (u.lanes |= n);
                                break;
                              }
                              c = c.next;
                            }
                          } else if (10 === i.tag)
                            l = i.type === t.type ? null : i.child;
                          else if (18 === i.tag) {
                            if (null === (l = i.return)) throw Error(a(341));
                            (l.lanes |= n),
                              null !== (u = l.alternate) && (u.lanes |= n),
                              _a(l, n, t),
                              (l = i.sibling);
                          } else l = i.child;
                          if (null !== l) l.return = i;
                          else
                            for (l = i; null !== l; ) {
                              if (l === t) {
                                l = null;
                                break;
                              }
                              if (null !== (i = l.sibling)) {
                                (i.return = l.return), (l = i);
                                break;
                              }
                              l = l.return;
                            }
                          i = l;
                        }
                    El(e, t, o.children, n), (t = t.child);
                  }
                  return t;
                case 9:
                  return (
                    (o = t.type),
                    (r = t.pendingProps.children),
                    ka(t, n),
                    (r = r((o = Pa(o)))),
                    (t.flags |= 1),
                    El(e, t, r, n),
                    t.child
                  );
                case 14:
                  return (
                    (o = ya((r = t.type), t.pendingProps)),
                    xl(e, t, r, (o = ya(r.type, o)), n)
                  );
                case 15:
                  return _l(e, t, t.type, t.pendingProps, n);
                case 17:
                  return (
                    (r = t.type),
                    (o = t.pendingProps),
                    (o = t.elementType === r ? o : ya(r, o)),
                    $l(e, t),
                    (t.tag = 1),
                    Do(r) ? ((e = !0), Io(t)) : (e = !1),
                    ka(t, n),
                    $a(t, r, o),
                    Ja(t, r, o, n),
                    Ll(null, t, r, !0, e, n)
                  );
                case 19:
                  return Hl(e, t, n);
                case 22:
                  return kl(e, t, n);
              }
              throw Error(a(156, t.tag));
            };
            var qc =
              "function" == typeof reportError
                ? reportError
                : function (e) {
                    console.error(e);
                  };
            function Yc(e) {
              this._internalRoot = e;
            }
            function Kc(e) {
              this._internalRoot = e;
            }
            function Gc(e) {
              return !(
                !e ||
                (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
              );
            }
            function Xc(e) {
              return !(
                !e ||
                (1 !== e.nodeType &&
                  9 !== e.nodeType &&
                  11 !== e.nodeType &&
                  (8 !== e.nodeType ||
                    " react-mount-point-unstable " !== e.nodeValue))
              );
            }
            function Zc() {}
            function es(e, t, n, r, o) {
              var a = n._reactRootContainer;
              if (a) {
                var i = a;
                if ("function" == typeof o) {
                  var l = o;
                  o = function () {
                    var e = Vc(i);
                    l.call(e);
                  };
                }
                $c(t, i, e, o);
              } else
                i = (function (e, t, n, r, o) {
                  if (o) {
                    if ("function" == typeof r) {
                      var a = r;
                      r = function () {
                        var e = Vc(i);
                        a.call(e);
                      };
                    }
                    var i = Hc(t, r, e, 0, null, !1, 0, "", Zc);
                    return (
                      (e._reactRootContainer = i),
                      (e[mo] = i.current),
                      Br(8 === e.nodeType ? e.parentNode : e),
                      fc(),
                      i
                    );
                  }
                  for (; (o = e.lastChild); ) e.removeChild(o);
                  if ("function" == typeof r) {
                    var l = r;
                    r = function () {
                      var e = Vc(u);
                      l.call(e);
                    };
                  }
                  var u = Fc(e, 0, !1, null, 0, !1, 0, "", Zc);
                  return (
                    (e._reactRootContainer = u),
                    (e[mo] = u.current),
                    Br(8 === e.nodeType ? e.parentNode : e),
                    fc(function () {
                      $c(t, u, n, r);
                    }),
                    u
                  );
                })(n, t, e, o, r);
              return Vc(i);
            }
            (Kc.prototype.render = Yc.prototype.render =
              function (e) {
                var t = this._internalRoot;
                if (null === t) throw Error(a(409));
                $c(e, t, null, null);
              }),
              (Kc.prototype.unmount = Yc.prototype.unmount =
                function () {
                  var e = this._internalRoot;
                  if (null !== e) {
                    this._internalRoot = null;
                    var t = e.containerInfo;
                    fc(function () {
                      $c(null, e, null, null);
                    }),
                      (t[mo] = null);
                  }
                }),
              (Kc.prototype.unstable_scheduleHydration = function (e) {
                if (e) {
                  var t = _t();
                  e = { blockedOn: null, target: e, priority: t };
                  for (
                    var n = 0;
                    n < Dt.length && 0 !== t && t < Dt[n].priority;
                    n++
                  );
                  Dt.splice(n, 0, e), 0 === n && It(e);
                }
              }),
              (Et = function (e) {
                switch (e.tag) {
                  case 3:
                    var t = e.stateNode;
                    if (t.current.memoizedState.isDehydrated) {
                      var n = ft(t.pendingLanes);
                      0 !== n &&
                        (gt(t, 1 | n),
                        oc(t, Ge()),
                        0 == (6 & Lu) && ((Hu = Ge() + 500), Ho()));
                    }
                    break;
                  case 13:
                    fc(function () {
                      var t = Ra(e, 1);
                      if (null !== t) {
                        var n = tc();
                        rc(t, e, 1, n);
                      }
                    }),
                      Qc(e, 1);
                }
              }),
              (St = function (e) {
                if (13 === e.tag) {
                  var t = Ra(e, 134217728);
                  null !== t && rc(t, e, 134217728, tc()), Qc(e, 134217728);
                }
              }),
              (xt = function (e) {
                if (13 === e.tag) {
                  var t = nc(e),
                    n = Ra(e, t);
                  null !== n && rc(n, e, t, tc()), Qc(e, t);
                }
              }),
              (_t = function () {
                return bt;
              }),
              (kt = function (e, t) {
                var n = bt;
                try {
                  return (bt = e), t();
                } finally {
                  bt = n;
                }
              }),
              (Se = function (e, t, n) {
                switch (t) {
                  case "input":
                    if (
                      (X(e, n), (t = n.name), "radio" === n.type && null != t)
                    ) {
                      for (n = e; n.parentNode; ) n = n.parentNode;
                      for (
                        n = n.querySelectorAll(
                          "input[name=" +
                            JSON.stringify("" + t) +
                            '][type="radio"]'
                        ),
                          t = 0;
                        t < n.length;
                        t++
                      ) {
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                          var o = So(r);
                          if (!o) throw Error(a(90));
                          Q(r), X(r, o);
                        }
                      }
                    }
                    break;
                  case "textarea":
                    ae(e, n);
                    break;
                  case "select":
                    null != (t = n.value) && ne(e, !!n.multiple, t, !1);
                }
              }),
              (Oe = sc),
              (Le = fc);
            var ts = {
                usingClientEntryPoint: !1,
                Events: [wo, Eo, So, Pe, Ce, sc],
              },
              ns = {
                findFiberByHostInstance: bo,
                bundleType: 0,
                version: "18.2.0",
                rendererPackageName: "react-dom",
              },
              rs = {
                bundleType: ns.bundleType,
                version: ns.version,
                rendererPackageName: ns.rendererPackageName,
                rendererConfig: ns.rendererConfig,
                overrideHookState: null,
                overrideHookStateDeletePath: null,
                overrideHookStateRenamePath: null,
                overrideProps: null,
                overridePropsDeletePath: null,
                overridePropsRenamePath: null,
                setErrorHandler: null,
                setSuspenseHandler: null,
                scheduleUpdate: null,
                currentDispatcherRef: w.ReactCurrentDispatcher,
                findHostInstanceByFiber: function (e) {
                  return null === (e = Ve(e)) ? null : e.stateNode;
                },
                findFiberByHostInstance:
                  ns.findFiberByHostInstance ||
                  function () {
                    return null;
                  },
                findHostInstancesForRefresh: null,
                scheduleRefresh: null,
                scheduleRoot: null,
                setRefreshHandler: null,
                getCurrentFiber: null,
                reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
              };
            if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
              var os = __REACT_DEVTOOLS_GLOBAL_HOOK__;
              if (!os.isDisabled && os.supportsFiber)
                try {
                  (ot = os.inject(rs)), (at = os);
                } catch (se) {}
            }
            (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ts),
              (t.createPortal = function (e, t) {
                var n =
                  2 < arguments.length && void 0 !== arguments[2]
                    ? arguments[2]
                    : null;
                if (!Gc(t)) throw Error(a(200));
                return (function (e, t, n) {
                  var r =
                    3 < arguments.length && void 0 !== arguments[3]
                      ? arguments[3]
                      : null;
                  return {
                    $$typeof: S,
                    key: null == r ? null : "" + r,
                    children: e,
                    containerInfo: t,
                    implementation: n,
                  };
                })(e, t, null, n);
              }),
              (t.createRoot = function (e, t) {
                if (!Gc(e)) throw Error(a(299));
                var n = !1,
                  r = "",
                  o = qc;
                return (
                  null != t &&
                    (!0 === t.unstable_strictMode && (n = !0),
                    void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                    void 0 !== t.onRecoverableError &&
                      (o = t.onRecoverableError)),
                  (t = Fc(e, 1, !1, null, 0, n, 0, r, o)),
                  (e[mo] = t.current),
                  Br(8 === e.nodeType ? e.parentNode : e),
                  new Yc(t)
                );
              }),
              (t.findDOMNode = function (e) {
                if (null == e) return null;
                if (1 === e.nodeType) return e;
                var t = e._reactInternals;
                if (void 0 === t) {
                  if ("function" == typeof e.render) throw Error(a(188));
                  throw ((e = Object.keys(e).join(",")), Error(a(268, e)));
                }
                return null === (e = Ve(t)) ? null : e.stateNode;
              }),
              (t.flushSync = function (e) {
                return fc(e);
              }),
              (t.hydrate = function (e, t, n) {
                if (!Xc(t)) throw Error(a(200));
                return es(null, e, t, !0, n);
              }),
              (t.hydrateRoot = function (e, t, n) {
                if (!Gc(e)) throw Error(a(405));
                var r = (null != n && n.hydratedSources) || null,
                  o = !1,
                  i = "",
                  l = qc;
                if (
                  (null != n &&
                    (!0 === n.unstable_strictMode && (o = !0),
                    void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                    void 0 !== n.onRecoverableError &&
                      (l = n.onRecoverableError)),
                  (t = Hc(t, null, e, 1, null != n ? n : null, o, 0, i, l)),
                  (e[mo] = t.current),
                  Br(e),
                  r)
                )
                  for (e = 0; e < r.length; e++)
                    (o = (o = (n = r[e])._getVersion)(n._source)),
                      null == t.mutableSourceEagerHydrationData
                        ? (t.mutableSourceEagerHydrationData = [n, o])
                        : t.mutableSourceEagerHydrationData.push(n, o);
                return new Kc(t);
              }),
              (t.render = function (e, t, n) {
                if (!Xc(t)) throw Error(a(200));
                return es(null, e, t, !1, n);
              }),
              (t.unmountComponentAtNode = function (e) {
                if (!Xc(e)) throw Error(a(40));
                return (
                  !!e._reactRootContainer &&
                  (fc(function () {
                    es(null, null, e, !1, function () {
                      (e._reactRootContainer = null), (e[mo] = null);
                    });
                  }),
                  !0)
                );
              }),
              (t.unstable_batchedUpdates = sc),
              (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
                if (!Xc(n)) throw Error(a(200));
                if (null == e || void 0 === e._reactInternals)
                  throw Error(a(38));
                return es(e, t, n, !1, r);
              }),
              (t.version = "18.2.0-next-9e3b772b8-20220608");
          },
          801: (e, t, n) => {
            "use strict";
            var r = n(392);
            (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
          },
          392: (e, t, n) => {
            "use strict";
            !(function e() {
              if (
                "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
                "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
              )
                try {
                  __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
                } catch (e) {
                  console.error(e);
                }
            })(),
              (e.exports = n(56));
          },
          804: (e, t, n) => {
            "use strict";
            n.r(t),
              n.d(t, {
                AbortedDeferredError: () => K,
                Await: () => $t,
                BrowserRouter: () => kn,
                Form: () => Nn,
                HashRouter: () => Pn,
                Link: () => Rn,
                MemoryRouter: () => At,
                NavLink: () => Tn,
                Navigate: () => Wt,
                NavigationType: () => r,
                Outlet: () => zt,
                Route: () => Ft,
                Router: () => Bt,
                RouterProvider: () => xn,
                Routes: () => Ht,
                ScrollRestoration: () => Dn,
                UNSAFE_DataRouterContext: () => Qe,
                UNSAFE_DataRouterStateContext: () => qe,
                UNSAFE_FetchersContext: () => yn,
                UNSAFE_LocationContext: () => Ge,
                UNSAFE_NavigationContext: () => Ke,
                UNSAFE_RouteContext: () => Xe,
                UNSAFE_ViewTransitionContext: () => vn,
                UNSAFE_useRouteId: () => _t,
                UNSAFE_useScrollRestoration: () => qn,
                createBrowserRouter: () => dn,
                createHashRouter: () => pn,
                createMemoryRouter: () => Xt,
                createPath: () => y,
                createRoutesFromChildren: () => Yt,
                createRoutesFromElements: () => Yt,
                createSearchParams: () => on,
                defer: () => Z,
                generatePath: () => U,
                isRouteErrorResponse: () => re,
                json: () => Y,
                matchPath: () => I,
                matchRoutes: () => x,
                parsePath: () => g,
                redirect: () => ee,
                redirectDocument: () => te,
                renderMatches: () => Kt,
                resolvePath: () => z,
                unstable_HistoryRouter: () => Cn,
                unstable_usePrompt: () => Kn,
                unstable_useViewTransitionState: () => Gn,
                useActionData: () => Rt,
                useAsyncError: () => Dt,
                useAsyncValue: () => Nt,
                useBeforeUnload: () => Yn,
                useBlocker: () => Mt,
                useFetcher: () => $n,
                useFetchers: () => Vn,
                useFormAction: () => Hn,
                useHref: () => et,
                useInRouterContext: () => tt,
                useLinkClickHandler: () => An,
                useLoaderData: () => Ot,
                useLocation: () => nt,
                useMatch: () => ot,
                useMatches: () => Ct,
                useNavigate: () => it,
                useNavigation: () => kt,
                useNavigationType: () => rt,
                useOutlet: () => ct,
                useOutletContext: () => ut,
                useParams: () => st,
                useResolvedPath: () => ft,
                useRevalidator: () => Pt,
                useRouteError: () => Tt,
                useRouteLoaderData: () => Lt,
                useRoutes: () => dt,
                useSearchParams: () => Wn,
                useSubmit: () => Bn,
              });
            var r,
              o = n(372),
              a = n.t(o, 2),
              i = n(392),
              l = n.t(i, 2);
            function u() {
              return (
                (u = Object.assign
                  ? Object.assign.bind()
                  : function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                          Object.prototype.hasOwnProperty.call(n, r) &&
                            (e[r] = n[r]);
                      }
                      return e;
                    }),
                u.apply(this, arguments)
              );
            }
            !(function (e) {
              (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
            })(r || (r = {}));
            const c = "popstate";
            function s(e) {
              void 0 === e && (e = {});
              let t,
                {
                  initialEntries: n = ["/"],
                  initialIndex: o,
                  v5Compat: a = !1,
                } = e;
              t = n.map((e, t) =>
                f(
                  e,
                  "string" == typeof e ? null : e.state,
                  0 === t ? "default" : void 0
                )
              );
              let i = c(null == o ? t.length - 1 : o),
                l = r.Pop,
                u = null;
              function c(e) {
                return Math.min(Math.max(e, 0), t.length - 1);
              }
              function s() {
                return t[i];
              }
              function f(e, n, r) {
                void 0 === n && (n = null);
                let o = v(t ? s().pathname : "/", e, n, r);
                return (
                  h(
                    "/" === o.pathname.charAt(0),
                    "relative pathnames are not supported in memory history: " +
                      JSON.stringify(e)
                  ),
                  o
                );
              }
              function d(e) {
                return "string" == typeof e ? e : y(e);
              }
              return {
                get index() {
                  return i;
                },
                get action() {
                  return l;
                },
                get location() {
                  return s();
                },
                createHref: d,
                createURL: (e) => new URL(d(e), "http://localhost"),
                encodeLocation(e) {
                  let t = "string" == typeof e ? g(e) : e;
                  return {
                    pathname: t.pathname || "",
                    search: t.search || "",
                    hash: t.hash || "",
                  };
                },
                push(e, n) {
                  l = r.Push;
                  let o = f(e, n);
                  (i += 1),
                    t.splice(i, t.length, o),
                    a && u && u({ action: l, location: o, delta: 1 });
                },
                replace(e, n) {
                  l = r.Replace;
                  let o = f(e, n);
                  (t[i] = o), a && u && u({ action: l, location: o, delta: 0 });
                },
                go(e) {
                  l = r.Pop;
                  let n = c(i + e),
                    o = t[n];
                  (i = n), u && u({ action: l, location: o, delta: e });
                },
                listen: (e) => (
                  (u = e),
                  () => {
                    u = null;
                  }
                ),
              };
            }
            function f(e) {
              return (
                void 0 === e && (e = {}),
                b(
                  function (e, t) {
                    let { pathname: n, search: r, hash: o } = e.location;
                    return v(
                      "",
                      { pathname: n, search: r, hash: o },
                      (t.state && t.state.usr) || null,
                      (t.state && t.state.key) || "default"
                    );
                  },
                  function (e, t) {
                    return "string" == typeof t ? t : y(t);
                  },
                  null,
                  e
                )
              );
            }
            function d(e) {
              return (
                void 0 === e && (e = {}),
                b(
                  function (e, t) {
                    let {
                      pathname: n = "/",
                      search: r = "",
                      hash: o = "",
                    } = g(e.location.hash.substr(1));
                    return (
                      n.startsWith("/") || n.startsWith(".") || (n = "/" + n),
                      v(
                        "",
                        { pathname: n, search: r, hash: o },
                        (t.state && t.state.usr) || null,
                        (t.state && t.state.key) || "default"
                      )
                    );
                  },
                  function (e, t) {
                    let n = e.document.querySelector("base"),
                      r = "";
                    if (n && n.getAttribute("href")) {
                      let t = e.location.href,
                        n = t.indexOf("#");
                      r = -1 === n ? t : t.slice(0, n);
                    }
                    return r + "#" + ("string" == typeof t ? t : y(t));
                  },
                  function (e, t) {
                    h(
                      "/" === e.pathname.charAt(0),
                      "relative pathnames are not supported in hash history.push(" +
                        JSON.stringify(t) +
                        ")"
                    );
                  },
                  e
                )
              );
            }
            function p(e, t) {
              if (!1 === e || null == e) throw new Error(t);
            }
            function h(e, t) {
              if (!e) {
                "undefined" != typeof console && console.warn(t);
                try {
                  throw new Error(t);
                } catch (e) {}
              }
            }
            function m(e, t) {
              return { usr: e.state, key: e.key, idx: t };
            }
            function v(e, t, n, r) {
              return (
                void 0 === n && (n = null),
                u(
                  {
                    pathname: "string" == typeof e ? e : e.pathname,
                    search: "",
                    hash: "",
                  },
                  "string" == typeof t ? g(t) : t,
                  {
                    state: n,
                    key:
                      (t && t.key) ||
                      r ||
                      Math.random().toString(36).substr(2, 8),
                  }
                )
              );
            }
            function y(e) {
              let { pathname: t = "/", search: n = "", hash: r = "" } = e;
              return (
                n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n),
                r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r),
                t
              );
            }
            function g(e) {
              let t = {};
              if (e) {
                let n = e.indexOf("#");
                n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
                let r = e.indexOf("?");
                r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
                  e && (t.pathname = e);
              }
              return t;
            }
            function b(e, t, n, o) {
              void 0 === o && (o = {});
              let { window: a = document.defaultView, v5Compat: i = !1 } = o,
                l = a.history,
                s = r.Pop,
                f = null,
                d = h();
              function h() {
                return (l.state || { idx: null }).idx;
              }
              function g() {
                s = r.Pop;
                let e = h(),
                  t = null == e ? null : e - d;
                (d = e), f && f({ action: s, location: w.location, delta: t });
              }
              function b(e) {
                let t =
                    "null" !== a.location.origin
                      ? a.location.origin
                      : a.location.href,
                  n = "string" == typeof e ? e : y(e);
                return (
                  (n = n.replace(/ $/, "%20")),
                  p(
                    t,
                    "No window.location.(origin|href) available to create URL for href: " +
                      n
                  ),
                  new URL(n, t)
                );
              }
              null == d &&
                ((d = 0), l.replaceState(u({}, l.state, { idx: d }), ""));
              let w = {
                get action() {
                  return s;
                },
                get location() {
                  return e(a, l);
                },
                listen(e) {
                  if (f)
                    throw new Error(
                      "A history only accepts one active listener"
                    );
                  return (
                    a.addEventListener(c, g),
                    (f = e),
                    () => {
                      a.removeEventListener(c, g), (f = null);
                    }
                  );
                },
                createHref: (e) => t(a, e),
                createURL: b,
                encodeLocation(e) {
                  let t = b(e);
                  return {
                    pathname: t.pathname,
                    search: t.search,
                    hash: t.hash,
                  };
                },
                push: function (e, t) {
                  s = r.Push;
                  let o = v(w.location, e, t);
                  n && n(o, e), (d = h() + 1);
                  let u = m(o, d),
                    c = w.createHref(o);
                  try {
                    l.pushState(u, "", c);
                  } catch (e) {
                    if (
                      e instanceof DOMException &&
                      "DataCloneError" === e.name
                    )
                      throw e;
                    a.location.assign(c);
                  }
                  i && f && f({ action: s, location: w.location, delta: 1 });
                },
                replace: function (e, t) {
                  s = r.Replace;
                  let o = v(w.location, e, t);
                  n && n(o, e), (d = h());
                  let a = m(o, d),
                    u = w.createHref(o);
                  l.replaceState(a, "", u),
                    i && f && f({ action: s, location: w.location, delta: 0 });
                },
                go: (e) => l.go(e),
              };
              return w;
            }
            var w;
            !(function (e) {
              (e.data = "data"),
                (e.deferred = "deferred"),
                (e.redirect = "redirect"),
                (e.error = "error");
            })(w || (w = {}));
            const E = new Set([
              "lazy",
              "caseSensitive",
              "path",
              "id",
              "index",
              "children",
            ]);
            function S(e, t, n, r) {
              return (
                void 0 === n && (n = []),
                void 0 === r && (r = {}),
                e.map((e, o) => {
                  let a = [...n, o],
                    i = "string" == typeof e.id ? e.id : a.join("-");
                  if (
                    (p(
                      !0 !== e.index || !e.children,
                      "Cannot specify children on an index route"
                    ),
                    p(
                      !r[i],
                      'Found a route id collision on id "' +
                        i +
                        "\".  Route id's must be globally unique within Data Router usages"
                    ),
                    (function (e) {
                      return !0 === e.index;
                    })(e))
                  ) {
                    let n = u({}, e, t(e), { id: i });
                    return (r[i] = n), n;
                  }
                  {
                    let n = u({}, e, t(e), { id: i, children: void 0 });
                    return (
                      (r[i] = n),
                      e.children && (n.children = S(e.children, t, a, r)),
                      n
                    );
                  }
                })
              );
            }
            function x(e, t, n) {
              void 0 === n && (n = "/");
              let r = W(("string" == typeof t ? g(t) : t).pathname || "/", n);
              if (null == r) return null;
              let o = k(e);
              !(function (e) {
                e.sort((e, t) =>
                  e.score !== t.score
                    ? t.score - e.score
                    : (function (e, t) {
                        return e.length === t.length &&
                          e.slice(0, -1).every((e, n) => e === t[n])
                          ? e[e.length - 1] - t[t.length - 1]
                          : 0;
                      })(
                        e.routesMeta.map((e) => e.childrenIndex),
                        t.routesMeta.map((e) => e.childrenIndex)
                      )
                );
              })(o);
              let a = null;
              for (let e = 0; null == a && e < o.length; ++e) {
                let t = A(r);
                a = M(o[e], t);
              }
              return a;
            }
            function _(e, t) {
              let { route: n, pathname: r, params: o } = e;
              return {
                id: n.id,
                pathname: r,
                params: o,
                data: t[n.id],
                handle: n.handle,
              };
            }
            function k(e, t, n, r) {
              void 0 === t && (t = []),
                void 0 === n && (n = []),
                void 0 === r && (r = "");
              let o = (e, o, a) => {
                let i = {
                  relativePath: void 0 === a ? e.path || "" : a,
                  caseSensitive: !0 === e.caseSensitive,
                  childrenIndex: o,
                  route: e,
                };
                i.relativePath.startsWith("/") &&
                  (p(
                    i.relativePath.startsWith(r),
                    'Absolute route path "' +
                      i.relativePath +
                      '" nested under path "' +
                      r +
                      '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
                  ),
                  (i.relativePath = i.relativePath.slice(r.length)));
                let l = V([r, i.relativePath]),
                  u = n.concat(i);
                e.children &&
                  e.children.length > 0 &&
                  (p(
                    !0 !== e.index,
                    'Index routes must not have child routes. Please remove all child routes from route path "' +
                      l +
                      '".'
                  ),
                  k(e.children, t, u, l)),
                  (null != e.path || e.index) &&
                    t.push({ path: l, score: j(l, e.index), routesMeta: u });
              };
              return (
                e.forEach((e, t) => {
                  var n;
                  if ("" !== e.path && null != (n = e.path) && n.includes("?"))
                    for (let n of P(e.path)) o(e, t, n);
                  else o(e, t);
                }),
                t
              );
            }
            function P(e) {
              let t = e.split("/");
              if (0 === t.length) return [];
              let [n, ...r] = t,
                o = n.endsWith("?"),
                a = n.replace(/\?$/, "");
              if (0 === r.length) return o ? [a, ""] : [a];
              let i = P(r.join("/")),
                l = [];
              return (
                l.push(...i.map((e) => ("" === e ? a : [a, e].join("/")))),
                o && l.push(...i),
                l.map((t) => (e.startsWith("/") && "" === t ? "/" : t))
              );
            }
            const C = /^:[\w-]+$/,
              O = 3,
              L = 2,
              R = 1,
              T = 10,
              N = -2,
              D = (e) => "*" === e;
            function j(e, t) {
              let n = e.split("/"),
                r = n.length;
              return (
                n.some(D) && (r += N),
                t && (r += L),
                n
                  .filter((e) => !D(e))
                  .reduce((e, t) => e + (C.test(t) ? O : "" === t ? R : T), r)
              );
            }
            function M(e, t) {
              let { routesMeta: n } = e,
                r = {},
                o = "/",
                a = [];
              for (let e = 0; e < n.length; ++e) {
                let i = n[e],
                  l = e === n.length - 1,
                  u = "/" === o ? t : t.slice(o.length) || "/",
                  c = I(
                    {
                      path: i.relativePath,
                      caseSensitive: i.caseSensitive,
                      end: l,
                    },
                    u
                  );
                if (!c) return null;
                Object.assign(r, c.params);
                let s = i.route;
                a.push({
                  params: r,
                  pathname: V([o, c.pathname]),
                  pathnameBase: J(V([o, c.pathnameBase])),
                  route: s,
                }),
                  "/" !== c.pathnameBase && (o = V([o, c.pathnameBase]));
              }
              return a;
            }
            function U(e, t) {
              void 0 === t && (t = {});
              let n = e;
              n.endsWith("*") &&
                "*" !== n &&
                !n.endsWith("/*") &&
                (h(
                  !1,
                  'Route path "' +
                    n +
                    '" will be treated as if it were "' +
                    n.replace(/\*$/, "/*") +
                    '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                    n.replace(/\*$/, "/*") +
                    '".'
                ),
                (n = n.replace(/\*$/, "/*")));
              const r = n.startsWith("/") ? "/" : "",
                o = (e) =>
                  null == e ? "" : "string" == typeof e ? e : String(e);
              return (
                r +
                n
                  .split(/\/+/)
                  .map((e, n, r) => {
                    if (n === r.length - 1 && "*" === e) return o(t["*"]);
                    const a = e.match(/^:([\w-]+)(\??)$/);
                    if (a) {
                      const [, e, n] = a;
                      let r = t[e];
                      return (
                        p("?" === n || null != r, 'Missing ":' + e + '" param'),
                        o(r)
                      );
                    }
                    return e.replace(/\?$/g, "");
                  })
                  .filter((e) => !!e)
                  .join("/")
              );
            }
            function I(e, t) {
              "string" == typeof e &&
                (e = { path: e, caseSensitive: !1, end: !0 });
              let [n, r] = (function (e, t, n) {
                  void 0 === t && (t = !1),
                    void 0 === n && (n = !0),
                    h(
                      "*" === e || !e.endsWith("*") || e.endsWith("/*"),
                      'Route path "' +
                        e +
                        '" will be treated as if it were "' +
                        e.replace(/\*$/, "/*") +
                        '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                        e.replace(/\*$/, "/*") +
                        '".'
                    );
                  let r = [],
                    o =
                      "^" +
                      e
                        .replace(/\/*\*?$/, "")
                        .replace(/^\/*/, "/")
                        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
                        .replace(
                          /\/:([\w-]+)(\?)?/g,
                          (e, t, n) => (
                            r.push({ paramName: t, isOptional: null != n }),
                            n ? "/?([^\\/]+)?" : "/([^\\/]+)"
                          )
                        );
                  return (
                    e.endsWith("*")
                      ? (r.push({ paramName: "*" }),
                        (o +=
                          "*" === e || "/*" === e
                            ? "(.*)$"
                            : "(?:\\/(.+)|\\/*)$"))
                      : n
                      ? (o += "\\/*$")
                      : "" !== e && "/" !== e && (o += "(?:(?=\\/|$))"),
                    [new RegExp(o, t ? void 0 : "i"), r]
                  );
                })(e.path, e.caseSensitive, e.end),
                o = t.match(n);
              if (!o) return null;
              let a = o[0],
                i = a.replace(/(.)\/+$/, "$1"),
                l = o.slice(1);
              return {
                params: r.reduce((e, t, n) => {
                  let { paramName: r, isOptional: o } = t;
                  if ("*" === r) {
                    let e = l[n] || "";
                    i = a
                      .slice(0, a.length - e.length)
                      .replace(/(.)\/+$/, "$1");
                  }
                  const u = l[n];
                  return (
                    (e[r] = o && !u ? void 0 : (u || "").replace(/%2F/g, "/")),
                    e
                  );
                }, {}),
                pathname: a,
                pathnameBase: i,
                pattern: e,
              };
            }
            function A(e) {
              try {
                return e
                  .split("/")
                  .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
                  .join("/");
              } catch (t) {
                return (
                  h(
                    !1,
                    'The URL path "' +
                      e +
                      '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
                      t +
                      ")."
                  ),
                  e
                );
              }
            }
            function W(e, t) {
              if ("/" === t) return e;
              if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
              let n = t.endsWith("/") ? t.length - 1 : t.length,
                r = e.charAt(n);
              return r && "/" !== r ? null : e.slice(n) || "/";
            }
            function z(e, t) {
              void 0 === t && (t = "/");
              let {
                  pathname: n,
                  search: r = "",
                  hash: o = "",
                } = "string" == typeof e ? g(e) : e,
                a = n
                  ? n.startsWith("/")
                    ? n
                    : (function (e, t) {
                        let n = t.replace(/\/+$/, "").split("/");
                        return (
                          e.split("/").forEach((e) => {
                            ".." === e
                              ? n.length > 1 && n.pop()
                              : "." !== e && n.push(e);
                          }),
                          n.length > 1 ? n.join("/") : "/"
                        );
                      })(n, t)
                  : t;
              return { pathname: a, search: Q(r), hash: q(o) };
            }
            function F(e, t, n, r) {
              return (
                "Cannot include a '" +
                e +
                "' character in a manually specified `to." +
                t +
                "` field [" +
                JSON.stringify(r) +
                "].  Please separate it out to the `to." +
                n +
                '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
              );
            }
            function B(e) {
              return e.filter(
                (e, t) => 0 === t || (e.route.path && e.route.path.length > 0)
              );
            }
            function H(e, t) {
              let n = B(e);
              return t
                ? n.map((t, n) =>
                    n === e.length - 1 ? t.pathname : t.pathnameBase
                  )
                : n.map((e) => e.pathnameBase);
            }
            function $(e, t, n, r) {
              let o;
              void 0 === r && (r = !1),
                "string" == typeof e
                  ? (o = g(e))
                  : ((o = u({}, e)),
                    p(
                      !o.pathname || !o.pathname.includes("?"),
                      F("?", "pathname", "search", o)
                    ),
                    p(
                      !o.pathname || !o.pathname.includes("#"),
                      F("#", "pathname", "hash", o)
                    ),
                    p(
                      !o.search || !o.search.includes("#"),
                      F("#", "search", "hash", o)
                    ));
              let a,
                i = "" === e || "" === o.pathname,
                l = i ? "/" : o.pathname;
              if (null == l) a = n;
              else {
                let e = t.length - 1;
                if (!r && l.startsWith("..")) {
                  let t = l.split("/");
                  for (; ".." === t[0]; ) t.shift(), (e -= 1);
                  o.pathname = t.join("/");
                }
                a = e >= 0 ? t[e] : "/";
              }
              let c = z(o, a),
                s = l && "/" !== l && l.endsWith("/"),
                f = (i || "." === l) && n.endsWith("/");
              return (
                c.pathname.endsWith("/") || (!s && !f) || (c.pathname += "/"), c
              );
            }
            const V = (e) => e.join("/").replace(/\/\/+/g, "/"),
              J = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
              Q = (e) =>
                e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : "",
              q = (e) =>
                e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "",
              Y = function (e, t) {
                void 0 === t && (t = {});
                let n = "number" == typeof t ? { status: t } : t,
                  r = new Headers(n.headers);
                return (
                  r.has("Content-Type") ||
                    r.set("Content-Type", "application/json; charset=utf-8"),
                  new Response(JSON.stringify(e), u({}, n, { headers: r }))
                );
              };
            class K extends Error {}
            class G {
              constructor(e, t) {
                let n;
                (this.pendingKeysSet = new Set()),
                  (this.subscribers = new Set()),
                  (this.deferredKeys = []),
                  p(
                    e && "object" == typeof e && !Array.isArray(e),
                    "defer() only accepts plain objects"
                  ),
                  (this.abortPromise = new Promise((e, t) => (n = t))),
                  (this.controller = new AbortController());
                let r = () => n(new K("Deferred data aborted"));
                (this.unlistenAbortSignal = () =>
                  this.controller.signal.removeEventListener("abort", r)),
                  this.controller.signal.addEventListener("abort", r),
                  (this.data = Object.entries(e).reduce((e, t) => {
                    let [n, r] = t;
                    return Object.assign(e, { [n]: this.trackPromise(n, r) });
                  }, {})),
                  this.done && this.unlistenAbortSignal(),
                  (this.init = t);
              }
              trackPromise(e, t) {
                if (!(t instanceof Promise)) return t;
                this.deferredKeys.push(e), this.pendingKeysSet.add(e);
                let n = Promise.race([t, this.abortPromise]).then(
                  (t) => this.onSettle(n, e, void 0, t),
                  (t) => this.onSettle(n, e, t)
                );
                return (
                  n.catch(() => {}),
                  Object.defineProperty(n, "_tracked", { get: () => !0 }),
                  n
                );
              }
              onSettle(e, t, n, r) {
                if (this.controller.signal.aborted && n instanceof K)
                  return (
                    this.unlistenAbortSignal(),
                    Object.defineProperty(e, "_error", { get: () => n }),
                    Promise.reject(n)
                  );
                if (
                  (this.pendingKeysSet.delete(t),
                  this.done && this.unlistenAbortSignal(),
                  void 0 === n && void 0 === r)
                ) {
                  let n = new Error(
                    'Deferred data for key "' +
                      t +
                      '" resolved/rejected with `undefined`, you must resolve/reject with a value or `null`.'
                  );
                  return (
                    Object.defineProperty(e, "_error", { get: () => n }),
                    this.emit(!1, t),
                    Promise.reject(n)
                  );
                }
                return void 0 === r
                  ? (Object.defineProperty(e, "_error", { get: () => n }),
                    this.emit(!1, t),
                    Promise.reject(n))
                  : (Object.defineProperty(e, "_data", { get: () => r }),
                    this.emit(!1, t),
                    r);
              }
              emit(e, t) {
                this.subscribers.forEach((n) => n(e, t));
              }
              subscribe(e) {
                return (
                  this.subscribers.add(e), () => this.subscribers.delete(e)
                );
              }
              cancel() {
                this.controller.abort(),
                  this.pendingKeysSet.forEach((e, t) =>
                    this.pendingKeysSet.delete(t)
                  ),
                  this.emit(!0);
              }
              async resolveData(e) {
                let t = !1;
                if (!this.done) {
                  let n = () => this.cancel();
                  e.addEventListener("abort", n),
                    (t = await new Promise((t) => {
                      this.subscribe((r) => {
                        e.removeEventListener("abort", n),
                          (r || this.done) && t(r);
                      });
                    }));
                }
                return t;
              }
              get done() {
                return 0 === this.pendingKeysSet.size;
              }
              get unwrappedData() {
                return (
                  p(
                    null !== this.data && this.done,
                    "Can only unwrap data on initialized and settled deferreds"
                  ),
                  Object.entries(this.data).reduce((e, t) => {
                    let [n, r] = t;
                    return Object.assign(e, { [n]: X(r) });
                  }, {})
                );
              }
              get pendingKeys() {
                return Array.from(this.pendingKeysSet);
              }
            }
            function X(e) {
              if (
                !(function (e) {
                  return e instanceof Promise && !0 === e._tracked;
                })(e)
              )
                return e;
              if (e._error) throw e._error;
              return e._data;
            }
            const Z = function (e, t) {
                return (
                  void 0 === t && (t = {}),
                  new G(e, "number" == typeof t ? { status: t } : t)
                );
              },
              ee = function (e, t) {
                void 0 === t && (t = 302);
                let n = t;
                "number" == typeof n
                  ? (n = { status: n })
                  : void 0 === n.status && (n.status = 302);
                let r = new Headers(n.headers);
                return (
                  r.set("Location", e),
                  new Response(null, u({}, n, { headers: r }))
                );
              },
              te = (e, t) => {
                let n = ee(e, t);
                return n.headers.set("X-Remix-Reload-Document", "true"), n;
              };
            class ne {
              constructor(e, t, n, r) {
                void 0 === r && (r = !1),
                  (this.status = e),
                  (this.statusText = t || ""),
                  (this.internal = r),
                  n instanceof Error
                    ? ((this.data = n.toString()), (this.error = n))
                    : (this.data = n);
              }
            }
            function re(e) {
              return (
                null != e &&
                "number" == typeof e.status &&
                "string" == typeof e.statusText &&
                "boolean" == typeof e.internal &&
                "data" in e
              );
            }
            const oe = ["post", "put", "patch", "delete"],
              ae = new Set(oe),
              ie = ["get", ...oe],
              le = new Set(ie),
              ue = new Set([301, 302, 303, 307, 308]),
              ce = new Set([307, 308]),
              se = {
                state: "idle",
                location: void 0,
                formMethod: void 0,
                formAction: void 0,
                formEncType: void 0,
                formData: void 0,
                json: void 0,
                text: void 0,
              },
              fe = {
                state: "idle",
                data: void 0,
                formMethod: void 0,
                formAction: void 0,
                formEncType: void 0,
                formData: void 0,
                json: void 0,
                text: void 0,
              },
              de = {
                state: "unblocked",
                proceed: void 0,
                reset: void 0,
                location: void 0,
              },
              pe = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
              he = (e) => ({ hasErrorBoundary: Boolean(e.hasErrorBoundary) }),
              me = "remix-router-transitions";
            function ve(e) {
              const t = e.window
                  ? e.window
                  : "undefined" != typeof window
                  ? window
                  : void 0,
                n =
                  void 0 !== t &&
                  void 0 !== t.document &&
                  void 0 !== t.document.createElement,
                o = !n;
              let a;
              if (
                (p(
                  e.routes.length > 0,
                  "You must provide a non-empty routes array to createRouter"
                ),
                e.mapRouteProperties)
              )
                a = e.mapRouteProperties;
              else if (e.detectErrorBoundary) {
                let t = e.detectErrorBoundary;
                a = (e) => ({ hasErrorBoundary: t(e) });
              } else a = he;
              let i,
                l,
                c = {},
                s = S(e.routes, a, void 0, c),
                f = e.basename || "/",
                d = u(
                  {
                    v7_fetcherPersist: !1,
                    v7_normalizeFormMethod: !1,
                    v7_partialHydration: !1,
                    v7_prependBasename: !1,
                    v7_relativeSplatPath: !1,
                  },
                  e.future
                ),
                m = null,
                y = new Set(),
                g = null,
                b = null,
                E = null,
                k = null != e.hydrationData,
                P = x(s, e.history.location, f),
                C = null;
              if (null == P) {
                let t = Te(404, { pathname: e.history.location.pathname }),
                  { matches: n, route: r } = Re(s);
                (P = n), (C = { [r.id]: t });
              }
              let O,
                L = P.some((e) => e.route.lazy),
                R = P.some((e) => e.route.loader);
              if (L) l = !1;
              else if (R)
                if (d.v7_partialHydration) {
                  let t = e.hydrationData ? e.hydrationData.loaderData : null,
                    n = e.hydrationData ? e.hydrationData.errors : null;
                  l = P.every(
                    (e) =>
                      e.route.loader &&
                      !0 !== e.route.loader.hydrate &&
                      ((t && void 0 !== t[e.route.id]) ||
                        (n && void 0 !== n[e.route.id]))
                  );
                } else l = null != e.hydrationData;
              else l = !0;
              let T,
                N = {
                  historyAction: e.history.action,
                  location: e.history.location,
                  matches: P,
                  initialized: l,
                  navigation: se,
                  restoreScrollPosition: null == e.hydrationData && null,
                  preventScrollReset: !1,
                  revalidation: "idle",
                  loaderData:
                    (e.hydrationData && e.hydrationData.loaderData) || {},
                  actionData:
                    (e.hydrationData && e.hydrationData.actionData) || null,
                  errors: (e.hydrationData && e.hydrationData.errors) || C,
                  fetchers: new Map(),
                  blockers: new Map(),
                },
                D = r.Pop,
                j = !1,
                M = !1,
                U = new Map(),
                I = null,
                A = !1,
                z = !1,
                F = [],
                B = [],
                H = new Map(),
                $ = 0,
                V = -1,
                J = new Map(),
                Q = new Set(),
                q = new Map(),
                Y = new Map(),
                K = new Set(),
                G = new Map(),
                X = new Map(),
                Z = !1;
              function ee(e, t) {
                void 0 === t && (t = {}), (N = u({}, N, e));
                let n = [],
                  r = [];
                d.v7_fetcherPersist &&
                  N.fetchers.forEach((e, t) => {
                    "idle" === e.state && (K.has(t) ? r.push(t) : n.push(t));
                  }),
                  [...y].forEach((e) =>
                    e(N, {
                      deletedFetchers: r,
                      unstable_viewTransitionOpts: t.viewTransitionOpts,
                      unstable_flushSync: !0 === t.flushSync,
                    })
                  ),
                  d.v7_fetcherPersist &&
                    (n.forEach((e) => N.fetchers.delete(e)),
                    r.forEach((e) => ve(e)));
              }
              function te(t, n, o) {
                var a, l;
                let c,
                  { flushSync: f } = void 0 === o ? {} : o,
                  d =
                    null != N.actionData &&
                    null != N.navigation.formMethod &&
                    Ie(N.navigation.formMethod) &&
                    "loading" === N.navigation.state &&
                    !0 !== (null == (a = t.state) ? void 0 : a._isRedirect);
                c = n.actionData
                  ? Object.keys(n.actionData).length > 0
                    ? n.actionData
                    : null
                  : d
                  ? N.actionData
                  : null;
                let p = n.loaderData
                    ? Oe(N.loaderData, n.loaderData, n.matches || [], n.errors)
                    : N.loaderData,
                  h = N.blockers;
                h.size > 0 &&
                  ((h = new Map(h)), h.forEach((e, t) => h.set(t, de)));
                let m,
                  v =
                    !0 === j ||
                    (null != N.navigation.formMethod &&
                      Ie(N.navigation.formMethod) &&
                      !0 !== (null == (l = t.state) ? void 0 : l._isRedirect));
                if (
                  (i && ((s = i), (i = void 0)),
                  A ||
                    D === r.Pop ||
                    (D === r.Push
                      ? e.history.push(t, t.state)
                      : D === r.Replace && e.history.replace(t, t.state)),
                  D === r.Pop)
                ) {
                  let e = U.get(N.location.pathname);
                  e && e.has(t.pathname)
                    ? (m = { currentLocation: N.location, nextLocation: t })
                    : U.has(t.pathname) &&
                      (m = { currentLocation: t, nextLocation: N.location });
                } else if (M) {
                  let e = U.get(N.location.pathname);
                  e
                    ? e.add(t.pathname)
                    : ((e = new Set([t.pathname])),
                      U.set(N.location.pathname, e)),
                    (m = { currentLocation: N.location, nextLocation: t });
                }
                ee(
                  u({}, n, {
                    actionData: c,
                    loaderData: p,
                    historyAction: D,
                    location: t,
                    initialized: !0,
                    navigation: se,
                    revalidation: "idle",
                    restoreScrollPosition: qe(t, n.matches || N.matches),
                    preventScrollReset: v,
                    blockers: h,
                  }),
                  { viewTransitionOpts: m, flushSync: !0 === f }
                ),
                  (D = r.Pop),
                  (j = !1),
                  (M = !1),
                  (A = !1),
                  (z = !1),
                  (F = []),
                  (B = []);
              }
              async function ne(t, n, o) {
                T && T.abort(),
                  (T = null),
                  (D = t),
                  (A = !0 === (o && o.startUninterruptedRevalidation)),
                  (function (e, t) {
                    if (g && E) {
                      let n = Qe(e, t);
                      g[n] = E();
                    }
                  })(N.location, N.matches),
                  (j = !0 === (o && o.preventScrollReset)),
                  (M = !0 === (o && o.enableViewTransition));
                let l = i || s,
                  p = o && o.overrideNavigation,
                  h = x(l, n, f),
                  m = !0 === (o && o.flushSync);
                if (!h) {
                  let e = Te(404, { pathname: n.pathname }),
                    { matches: t, route: r } = Re(l);
                  return (
                    Je(),
                    void te(
                      n,
                      { matches: t, loaderData: {}, errors: { [r.id]: e } },
                      { flushSync: m }
                    )
                  );
                }
                if (
                  N.initialized &&
                  !z &&
                  ((v = N.location),
                  (y = n),
                  v.pathname === y.pathname &&
                    v.search === y.search &&
                    ("" === v.hash
                      ? "" !== y.hash
                      : v.hash === y.hash || "" !== y.hash)) &&
                  !(o && o.submission && Ie(o.submission.formMethod))
                )
                  return void te(n, { matches: h }, { flushSync: m });
                var v, y;
                T = new AbortController();
                let b,
                  S,
                  _ = _e(e.history, n, T.signal, o && o.submission);
                if (o && o.pendingError)
                  S = { [Le(h).route.id]: o.pendingError };
                else if (o && o.submission && Ie(o.submission.formMethod)) {
                  let e = await (async function (e, t, n, o, i) {
                    void 0 === i && (i = {}), ae();
                    let l,
                      u = (function (e, t) {
                        return {
                          state: "submitting",
                          location: e,
                          formMethod: t.formMethod,
                          formAction: t.formAction,
                          formEncType: t.formEncType,
                          formData: t.formData,
                          json: t.json,
                          text: t.text,
                        };
                      })(t, n);
                    ee({ navigation: u }, { flushSync: !0 === i.flushSync });
                    let s = Fe(o, t);
                    if (s.route.action || s.route.lazy) {
                      if (
                        ((l = await xe(
                          "action",
                          e,
                          s,
                          o,
                          c,
                          a,
                          f,
                          d.v7_relativeSplatPath
                        )),
                        e.signal.aborted)
                      )
                        return { shortCircuited: !0 };
                    } else
                      l = {
                        type: w.error,
                        error: Te(405, {
                          method: e.method,
                          pathname: t.pathname,
                          routeId: s.route.id,
                        }),
                      };
                    if (Ue(l)) {
                      let e;
                      return (
                        (e =
                          i && null != i.replace
                            ? i.replace
                            : l.location ===
                              N.location.pathname + N.location.search),
                        await re(N, l, { submission: n, replace: e }),
                        { shortCircuited: !0 }
                      );
                    }
                    if (Me(l)) {
                      let e = Le(o, s.route.id);
                      return (
                        !0 !== (i && i.replace) && (D = r.Push),
                        {
                          pendingActionData: {},
                          pendingActionError: { [e.route.id]: l.error },
                        }
                      );
                    }
                    if (je(l)) throw Te(400, { type: "defer-action" });
                    return { pendingActionData: { [s.route.id]: l.data } };
                  })(_, n, o.submission, h, {
                    replace: o.replace,
                    flushSync: m,
                  });
                  if (e.shortCircuited) return;
                  (b = e.pendingActionData),
                    (S = e.pendingActionError),
                    (p = He(n, o.submission)),
                    (m = !1),
                    (_ = new Request(_.url, { signal: _.signal }));
                }
                let {
                  shortCircuited: k,
                  loaderData: P,
                  errors: C,
                } = await (async function (t, n, r, o, a, l, c, p, h, m, v) {
                  let y = o || He(n, a),
                    g = a || l || Be(y),
                    b = i || s,
                    [w, E] = be(
                      e.history,
                      N,
                      r,
                      g,
                      n,
                      d.v7_partialHydration && !0 === p,
                      z,
                      F,
                      B,
                      K,
                      q,
                      Q,
                      b,
                      f,
                      m,
                      v
                    );
                  if (
                    (Je(
                      (e) =>
                        !(r && r.some((t) => t.route.id === e)) ||
                        (w && w.some((t) => t.route.id === e))
                    ),
                    (V = ++$),
                    0 === w.length && 0 === E.length)
                  ) {
                    let e = Se();
                    return (
                      te(
                        n,
                        u(
                          { matches: r, loaderData: {}, errors: v || null },
                          m ? { actionData: m } : {},
                          e ? { fetchers: new Map(N.fetchers) } : {}
                        ),
                        { flushSync: h }
                      ),
                      { shortCircuited: !0 }
                    );
                  }
                  if (!(A || (d.v7_partialHydration && p))) {
                    E.forEach((e) => {
                      let t = N.fetchers.get(e.key),
                        n = $e(void 0, t ? t.data : void 0);
                      N.fetchers.set(e.key, n);
                    });
                    let e = m || N.actionData;
                    ee(
                      u(
                        { navigation: y },
                        e
                          ? 0 === Object.keys(e).length
                            ? { actionData: null }
                            : { actionData: e }
                          : {},
                        E.length > 0 ? { fetchers: new Map(N.fetchers) } : {}
                      ),
                      { flushSync: h }
                    );
                  }
                  E.forEach((e) => {
                    H.has(e.key) && we(e.key),
                      e.controller && H.set(e.key, e.controller);
                  });
                  let S = () => E.forEach((e) => we(e.key));
                  T && T.signal.addEventListener("abort", S);
                  let {
                    results: x,
                    loaderResults: _,
                    fetcherResults: k,
                  } = await oe(N.matches, r, w, E, t);
                  if (t.signal.aborted) return { shortCircuited: !0 };
                  T && T.signal.removeEventListener("abort", S),
                    E.forEach((e) => H.delete(e.key));
                  let P = Ne(x);
                  if (P) {
                    if (P.idx >= w.length) {
                      let e = E[P.idx - w.length].key;
                      Q.add(e);
                    }
                    return (
                      await re(N, P.result, { replace: c }),
                      { shortCircuited: !0 }
                    );
                  }
                  let { loaderData: C, errors: O } = Ce(N, r, w, _, v, E, k, G);
                  G.forEach((e, t) => {
                    e.subscribe((n) => {
                      (n || e.done) && G.delete(t);
                    });
                  });
                  let L = Se(),
                    R = ke(V);
                  return u(
                    { loaderData: C, errors: O },
                    L || R || E.length > 0
                      ? { fetchers: new Map(N.fetchers) }
                      : {}
                  );
                })(
                  _,
                  n,
                  h,
                  p,
                  o && o.submission,
                  o && o.fetcherSubmission,
                  o && o.replace,
                  o && !0 === o.initialHydration,
                  m,
                  b,
                  S
                );
                k ||
                  ((T = null),
                  te(
                    n,
                    u({ matches: h }, b ? { actionData: b } : {}, {
                      loaderData: P,
                      errors: C,
                    })
                  ));
              }
              async function re(o, a, i) {
                let {
                  submission: l,
                  fetcherSubmission: c,
                  replace: s,
                } = void 0 === i ? {} : i;
                a.revalidate && (z = !0);
                let d = v(o.location, a.location, { _isRedirect: !0 });
                if (
                  (p(d, "Expected a location on the redirect navigation"), n)
                ) {
                  let n = !1;
                  if (a.reloadDocument) n = !0;
                  else if (pe.test(a.location)) {
                    const r = e.history.createURL(a.location);
                    n =
                      r.origin !== t.location.origin ||
                      null == W(r.pathname, f);
                  }
                  if (n)
                    return void (s
                      ? t.location.replace(a.location)
                      : t.location.assign(a.location));
                }
                T = null;
                let h = !0 === s ? r.Replace : r.Push,
                  {
                    formMethod: m,
                    formAction: y,
                    formEncType: g,
                  } = o.navigation;
                !l && !c && m && y && g && (l = Be(o.navigation));
                let b = l || c;
                if (ce.has(a.status) && b && Ie(b.formMethod))
                  await ne(h, d, {
                    submission: u({}, b, { formAction: a.location }),
                    preventScrollReset: j,
                  });
                else {
                  let e = He(d, l);
                  await ne(h, d, {
                    overrideNavigation: e,
                    fetcherSubmission: c,
                    preventScrollReset: j,
                  });
                }
              }
              async function oe(t, n, r, o, i) {
                let l = await Promise.all([
                    ...r.map((e) =>
                      xe("loader", i, e, n, c, a, f, d.v7_relativeSplatPath)
                    ),
                    ...o.map((t) =>
                      t.matches && t.match && t.controller
                        ? xe(
                            "loader",
                            _e(e.history, t.path, t.controller.signal),
                            t.match,
                            t.matches,
                            c,
                            a,
                            f,
                            d.v7_relativeSplatPath
                          )
                        : {
                            type: w.error,
                            error: Te(404, { pathname: t.path }),
                          }
                    ),
                  ]),
                  u = l.slice(0, r.length),
                  s = l.slice(r.length);
                return (
                  await Promise.all([
                    Ae(
                      t,
                      r,
                      u,
                      u.map(() => i.signal),
                      !1,
                      N.loaderData
                    ),
                    Ae(
                      t,
                      o.map((e) => e.match),
                      s,
                      o.map((e) => (e.controller ? e.controller.signal : null)),
                      !0
                    ),
                  ]),
                  { results: l, loaderResults: u, fetcherResults: s }
                );
              }
              function ae() {
                (z = !0),
                  F.push(...Je()),
                  q.forEach((e, t) => {
                    H.has(t) && (B.push(t), we(t));
                  });
              }
              function ie(e, t, n) {
                void 0 === n && (n = {}),
                  N.fetchers.set(e, t),
                  ee(
                    { fetchers: new Map(N.fetchers) },
                    { flushSync: !0 === (n && n.flushSync) }
                  );
              }
              function le(e, t, n, r) {
                void 0 === r && (r = {});
                let o = Le(N.matches, t);
                ve(e),
                  ee(
                    {
                      errors: { [o.route.id]: n },
                      fetchers: new Map(N.fetchers),
                    },
                    { flushSync: !0 === (r && r.flushSync) }
                  );
              }
              function ue(e) {
                return (
                  d.v7_fetcherPersist &&
                    (Y.set(e, (Y.get(e) || 0) + 1), K.has(e) && K.delete(e)),
                  N.fetchers.get(e) || fe
                );
              }
              function ve(e) {
                let t = N.fetchers.get(e);
                !H.has(e) || (t && "loading" === t.state && J.has(e)) || we(e),
                  q.delete(e),
                  J.delete(e),
                  Q.delete(e),
                  K.delete(e),
                  N.fetchers.delete(e);
              }
              function we(e) {
                let t = H.get(e);
                p(t, "Expected fetch controller: " + e), t.abort(), H.delete(e);
              }
              function Ee(e) {
                for (let t of e) {
                  let e = Ve(ue(t).data);
                  N.fetchers.set(t, e);
                }
              }
              function Se() {
                let e = [],
                  t = !1;
                for (let n of Q) {
                  let r = N.fetchers.get(n);
                  p(r, "Expected fetcher: " + n),
                    "loading" === r.state && (Q.delete(n), e.push(n), (t = !0));
                }
                return Ee(e), t;
              }
              function ke(e) {
                let t = [];
                for (let [n, r] of J)
                  if (r < e) {
                    let e = N.fetchers.get(n);
                    p(e, "Expected fetcher: " + n),
                      "loading" === e.state && (we(n), J.delete(n), t.push(n));
                  }
                return Ee(t), t.length > 0;
              }
              function Pe(e) {
                N.blockers.delete(e), X.delete(e);
              }
              function De(e, t) {
                let n = N.blockers.get(e) || de;
                p(
                  ("unblocked" === n.state && "blocked" === t.state) ||
                    ("blocked" === n.state && "blocked" === t.state) ||
                    ("blocked" === n.state && "proceeding" === t.state) ||
                    ("blocked" === n.state && "unblocked" === t.state) ||
                    ("proceeding" === n.state && "unblocked" === t.state),
                  "Invalid blocker state transition: " +
                    n.state +
                    " -> " +
                    t.state
                );
                let r = new Map(N.blockers);
                r.set(e, t), ee({ blockers: r });
              }
              function ze(e) {
                let {
                  currentLocation: t,
                  nextLocation: n,
                  historyAction: r,
                } = e;
                if (0 === X.size) return;
                X.size > 1 &&
                  h(!1, "A router only supports one blocker at a time");
                let o = Array.from(X.entries()),
                  [a, i] = o[o.length - 1],
                  l = N.blockers.get(a);
                return l && "proceeding" === l.state
                  ? void 0
                  : i({ currentLocation: t, nextLocation: n, historyAction: r })
                  ? a
                  : void 0;
              }
              function Je(e) {
                let t = [];
                return (
                  G.forEach((n, r) => {
                    (e && !e(r)) || (n.cancel(), t.push(r), G.delete(r));
                  }),
                  t
                );
              }
              function Qe(e, t) {
                return (
                  (b &&
                    b(
                      e,
                      t.map((e) => _(e, N.loaderData))
                    )) ||
                  e.key
                );
              }
              function qe(e, t) {
                if (g) {
                  let n = Qe(e, t),
                    r = g[n];
                  if ("number" == typeof r) return r;
                }
                return null;
              }
              return (
                (O = {
                  get basename() {
                    return f;
                  },
                  get future() {
                    return d;
                  },
                  get state() {
                    return N;
                  },
                  get routes() {
                    return s;
                  },
                  get window() {
                    return t;
                  },
                  initialize: function () {
                    if (
                      ((m = e.history.listen((t) => {
                        let { action: n, location: r, delta: o } = t;
                        if (Z) return void (Z = !1);
                        h(
                          0 === X.size || null != o,
                          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
                        );
                        let a = ze({
                          currentLocation: N.location,
                          nextLocation: r,
                          historyAction: n,
                        });
                        return a && null != o
                          ? ((Z = !0),
                            e.history.go(-1 * o),
                            void De(a, {
                              state: "blocked",
                              location: r,
                              proceed() {
                                De(a, {
                                  state: "proceeding",
                                  proceed: void 0,
                                  reset: void 0,
                                  location: r,
                                }),
                                  e.history.go(o);
                              },
                              reset() {
                                let e = new Map(N.blockers);
                                e.set(a, de), ee({ blockers: e });
                              },
                            }))
                          : ne(n, r);
                      })),
                      n)
                    ) {
                      !(function (e, t) {
                        try {
                          let n = e.sessionStorage.getItem(me);
                          if (n) {
                            let e = JSON.parse(n);
                            for (let [n, r] of Object.entries(e || {}))
                              r &&
                                Array.isArray(r) &&
                                t.set(n, new Set(r || []));
                          }
                        } catch (e) {}
                      })(t, U);
                      let e = () =>
                        (function (e, t) {
                          if (t.size > 0) {
                            let n = {};
                            for (let [e, r] of t) n[e] = [...r];
                            try {
                              e.sessionStorage.setItem(me, JSON.stringify(n));
                            } catch (e) {
                              h(
                                !1,
                                "Failed to save applied view transitions in sessionStorage (" +
                                  e +
                                  ")."
                              );
                            }
                          }
                        })(t, U);
                      t.addEventListener("pagehide", e),
                        (I = () => t.removeEventListener("pagehide", e));
                    }
                    return (
                      N.initialized ||
                        ne(r.Pop, N.location, { initialHydration: !0 }),
                      O
                    );
                  },
                  subscribe: function (e) {
                    return y.add(e), () => y.delete(e);
                  },
                  enableScrollRestoration: function (e, t, n) {
                    if (
                      ((g = e),
                      (E = t),
                      (b = n || null),
                      !k && N.navigation === se)
                    ) {
                      k = !0;
                      let e = qe(N.location, N.matches);
                      null != e && ee({ restoreScrollPosition: e });
                    }
                    return () => {
                      (g = null), (E = null), (b = null);
                    };
                  },
                  navigate: async function t(n, o) {
                    if ("number" == typeof n) return void e.history.go(n);
                    let a = ye(
                        N.location,
                        N.matches,
                        f,
                        d.v7_prependBasename,
                        n,
                        d.v7_relativeSplatPath,
                        null == o ? void 0 : o.fromRouteId,
                        null == o ? void 0 : o.relative
                      ),
                      {
                        path: i,
                        submission: l,
                        error: c,
                      } = ge(d.v7_normalizeFormMethod, !1, a, o),
                      s = N.location,
                      p = v(N.location, i, o && o.state);
                    p = u({}, p, e.history.encodeLocation(p));
                    let h = o && null != o.replace ? o.replace : void 0,
                      m = r.Push;
                    !0 === h
                      ? (m = r.Replace)
                      : !1 === h ||
                        (null != l &&
                          Ie(l.formMethod) &&
                          l.formAction ===
                            N.location.pathname + N.location.search &&
                          (m = r.Replace));
                    let y =
                        o && "preventScrollReset" in o
                          ? !0 === o.preventScrollReset
                          : void 0,
                      g = !0 === (o && o.unstable_flushSync),
                      b = ze({
                        currentLocation: s,
                        nextLocation: p,
                        historyAction: m,
                      });
                    if (!b)
                      return await ne(m, p, {
                        submission: l,
                        pendingError: c,
                        preventScrollReset: y,
                        replace: o && o.replace,
                        enableViewTransition: o && o.unstable_viewTransition,
                        flushSync: g,
                      });
                    De(b, {
                      state: "blocked",
                      location: p,
                      proceed() {
                        De(b, {
                          state: "proceeding",
                          proceed: void 0,
                          reset: void 0,
                          location: p,
                        }),
                          t(n, o);
                      },
                      reset() {
                        let e = new Map(N.blockers);
                        e.set(b, de), ee({ blockers: e });
                      },
                    });
                  },
                  fetch: function (t, n, r, l) {
                    if (o)
                      throw new Error(
                        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
                      );
                    H.has(t) && we(t);
                    let u = !0 === (l && l.unstable_flushSync),
                      h = i || s,
                      m = ye(
                        N.location,
                        N.matches,
                        f,
                        d.v7_prependBasename,
                        r,
                        d.v7_relativeSplatPath,
                        n,
                        null == l ? void 0 : l.relative
                      ),
                      v = x(h, m, f);
                    if (!v)
                      return void le(t, n, Te(404, { pathname: m }), {
                        flushSync: u,
                      });
                    let {
                      path: y,
                      submission: g,
                      error: b,
                    } = ge(d.v7_normalizeFormMethod, !0, m, l);
                    if (b) return void le(t, n, b, { flushSync: u });
                    let w = Fe(v, y);
                    (j = !0 === (l && l.preventScrollReset)),
                      g && Ie(g.formMethod)
                        ? (async function (t, n, r, o, l, u, h) {
                            if (
                              (ae(),
                              q.delete(t),
                              !o.route.action && !o.route.lazy)
                            ) {
                              let e = Te(405, {
                                method: h.formMethod,
                                pathname: r,
                                routeId: n,
                              });
                              return void le(t, n, e, { flushSync: u });
                            }
                            let m = N.fetchers.get(t);
                            ie(
                              t,
                              (function (e, t) {
                                return {
                                  state: "submitting",
                                  formMethod: e.formMethod,
                                  formAction: e.formAction,
                                  formEncType: e.formEncType,
                                  formData: e.formData,
                                  json: e.json,
                                  text: e.text,
                                  data: t ? t.data : void 0,
                                };
                              })(h, m),
                              { flushSync: u }
                            );
                            let v = new AbortController(),
                              y = _e(e.history, r, v.signal, h);
                            H.set(t, v);
                            let g = $,
                              b = await xe(
                                "action",
                                y,
                                o,
                                l,
                                c,
                                a,
                                f,
                                d.v7_relativeSplatPath
                              );
                            if (y.signal.aborted)
                              return void (H.get(t) === v && H.delete(t));
                            if (d.v7_fetcherPersist && K.has(t)) {
                              if (Ue(b) || Me(b)) return void ie(t, Ve(void 0));
                            } else {
                              if (Ue(b))
                                return (
                                  H.delete(t),
                                  V > g
                                    ? void ie(t, Ve(void 0))
                                    : (Q.add(t),
                                      ie(t, $e(h)),
                                      re(N, b, { fetcherSubmission: h }))
                                );
                              if (Me(b)) return void le(t, n, b.error);
                            }
                            if (je(b)) throw Te(400, { type: "defer-action" });
                            let w = N.navigation.location || N.location,
                              E = _e(e.history, w, v.signal),
                              S = i || s,
                              _ =
                                "idle" !== N.navigation.state
                                  ? x(S, N.navigation.location, f)
                                  : N.matches;
                            p(
                              _,
                              "Didn't find any matches after fetcher action"
                            );
                            let k = ++$;
                            J.set(t, k);
                            let P = $e(h, b.data);
                            N.fetchers.set(t, P);
                            let [C, O] = be(
                              e.history,
                              N,
                              _,
                              h,
                              w,
                              !1,
                              z,
                              F,
                              B,
                              K,
                              q,
                              Q,
                              S,
                              f,
                              { [o.route.id]: b.data },
                              void 0
                            );
                            O.filter((e) => e.key !== t).forEach((e) => {
                              let t = e.key,
                                n = N.fetchers.get(t),
                                r = $e(void 0, n ? n.data : void 0);
                              N.fetchers.set(t, r),
                                H.has(t) && we(t),
                                e.controller && H.set(t, e.controller);
                            }),
                              ee({ fetchers: new Map(N.fetchers) });
                            let L = () => O.forEach((e) => we(e.key));
                            v.signal.addEventListener("abort", L);
                            let {
                              results: R,
                              loaderResults: j,
                              fetcherResults: M,
                            } = await oe(N.matches, _, C, O, E);
                            if (v.signal.aborted) return;
                            v.signal.removeEventListener("abort", L),
                              J.delete(t),
                              H.delete(t),
                              O.forEach((e) => H.delete(e.key));
                            let U = Ne(R);
                            if (U) {
                              if (U.idx >= C.length) {
                                let e = O[U.idx - C.length].key;
                                Q.add(e);
                              }
                              return re(N, U.result);
                            }
                            let { loaderData: I, errors: A } = Ce(
                              N,
                              N.matches,
                              C,
                              j,
                              void 0,
                              O,
                              M,
                              G
                            );
                            if (N.fetchers.has(t)) {
                              let e = Ve(b.data);
                              N.fetchers.set(t, e);
                            }
                            ke(k),
                              "loading" === N.navigation.state && k > V
                                ? (p(D, "Expected pending action"),
                                  T && T.abort(),
                                  te(N.navigation.location, {
                                    matches: _,
                                    loaderData: I,
                                    errors: A,
                                    fetchers: new Map(N.fetchers),
                                  }))
                                : (ee({
                                    errors: A,
                                    loaderData: Oe(N.loaderData, I, _, A),
                                    fetchers: new Map(N.fetchers),
                                  }),
                                  (z = !1));
                          })(t, n, y, w, v, u, g)
                        : (q.set(t, { routeId: n, path: y }),
                          (async function (t, n, r, o, i, l, u) {
                            let s = N.fetchers.get(t);
                            ie(t, $e(u, s ? s.data : void 0), { flushSync: l });
                            let h = new AbortController(),
                              m = _e(e.history, r, h.signal);
                            H.set(t, h);
                            let v = $,
                              y = await xe(
                                "loader",
                                m,
                                o,
                                i,
                                c,
                                a,
                                f,
                                d.v7_relativeSplatPath
                              );
                            if (
                              (je(y) && (y = (await We(y, m.signal, !0)) || y),
                              H.get(t) === h && H.delete(t),
                              !m.signal.aborted)
                            ) {
                              if (!K.has(t))
                                return Ue(y)
                                  ? V > v
                                    ? void ie(t, Ve(void 0))
                                    : (Q.add(t), void (await re(N, y)))
                                  : void (Me(y)
                                      ? le(t, n, y.error)
                                      : (p(
                                          !je(y),
                                          "Unhandled fetcher deferred data"
                                        ),
                                        ie(t, Ve(y.data))));
                              ie(t, Ve(void 0));
                            }
                          })(t, n, y, w, v, u, g));
                  },
                  revalidate: function () {
                    ae(),
                      ee({ revalidation: "loading" }),
                      "submitting" !== N.navigation.state &&
                        ("idle" !== N.navigation.state
                          ? ne(D || N.historyAction, N.navigation.location, {
                              overrideNavigation: N.navigation,
                            })
                          : ne(N.historyAction, N.location, {
                              startUninterruptedRevalidation: !0,
                            }));
                  },
                  createHref: (t) => e.history.createHref(t),
                  encodeLocation: (t) => e.history.encodeLocation(t),
                  getFetcher: ue,
                  deleteFetcher: function (e) {
                    if (d.v7_fetcherPersist) {
                      let t = (Y.get(e) || 0) - 1;
                      t <= 0 ? (Y.delete(e), K.add(e)) : Y.set(e, t);
                    } else ve(e);
                    ee({ fetchers: new Map(N.fetchers) });
                  },
                  dispose: function () {
                    m && m(),
                      I && I(),
                      y.clear(),
                      T && T.abort(),
                      N.fetchers.forEach((e, t) => ve(t)),
                      N.blockers.forEach((e, t) => Pe(t));
                  },
                  getBlocker: function (e, t) {
                    let n = N.blockers.get(e) || de;
                    return X.get(e) !== t && X.set(e, t), n;
                  },
                  deleteBlocker: Pe,
                  _internalFetchControllers: H,
                  _internalActiveDeferreds: G,
                  _internalSetRoutes: function (e) {
                    (c = {}), (i = S(e, a, void 0, c));
                  },
                }),
                O
              );
            }
            function ye(e, t, n, r, o, a, i, l) {
              let u, c;
              if (i) {
                u = [];
                for (let e of t)
                  if ((u.push(e), e.route.id === i)) {
                    c = e;
                    break;
                  }
              } else (u = t), (c = t[t.length - 1]);
              let s = $(
                o || ".",
                H(u, a),
                W(e.pathname, n) || e.pathname,
                "path" === l
              );
              return (
                null == o && ((s.search = e.search), (s.hash = e.hash)),
                (null != o && "" !== o && "." !== o) ||
                  !c ||
                  !c.route.index ||
                  ze(s.search) ||
                  (s.search = s.search
                    ? s.search.replace(/^\?/, "?index&")
                    : "?index"),
                r &&
                  "/" !== n &&
                  (s.pathname = "/" === s.pathname ? n : V([n, s.pathname])),
                y(s)
              );
            }
            function ge(e, t, n, r) {
              if (
                !r ||
                !(function (e) {
                  return (
                    null != e &&
                    (("formData" in e && null != e.formData) ||
                      ("body" in e && void 0 !== e.body))
                  );
                })(r)
              )
                return { path: n };
              if (
                r.formMethod &&
                ((o = r.formMethod), !le.has(o.toLowerCase()))
              )
                return { path: n, error: Te(405, { method: r.formMethod }) };
              var o;
              let a,
                i,
                l = () => ({
                  path: n,
                  error: Te(400, { type: "invalid-body" }),
                }),
                u = r.formMethod || "get",
                c = e ? u.toUpperCase() : u.toLowerCase(),
                s = De(n);
              if (void 0 !== r.body) {
                if ("text/plain" === r.formEncType) {
                  if (!Ie(c)) return l();
                  let e =
                    "string" == typeof r.body
                      ? r.body
                      : r.body instanceof FormData ||
                        r.body instanceof URLSearchParams
                      ? Array.from(r.body.entries()).reduce((e, t) => {
                          let [n, r] = t;
                          return "" + e + n + "=" + r + "\n";
                        }, "")
                      : String(r.body);
                  return {
                    path: n,
                    submission: {
                      formMethod: c,
                      formAction: s,
                      formEncType: r.formEncType,
                      formData: void 0,
                      json: void 0,
                      text: e,
                    },
                  };
                }
                if ("application/json" === r.formEncType) {
                  if (!Ie(c)) return l();
                  try {
                    let e =
                      "string" == typeof r.body ? JSON.parse(r.body) : r.body;
                    return {
                      path: n,
                      submission: {
                        formMethod: c,
                        formAction: s,
                        formEncType: r.formEncType,
                        formData: void 0,
                        json: e,
                        text: void 0,
                      },
                    };
                  } catch (e) {
                    return l();
                  }
                }
              }
              if (
                (p(
                  "function" == typeof FormData,
                  "FormData is not available in this environment"
                ),
                r.formData)
              )
                (a = ke(r.formData)), (i = r.formData);
              else if (r.body instanceof FormData)
                (a = ke(r.body)), (i = r.body);
              else if (r.body instanceof URLSearchParams)
                (a = r.body), (i = Pe(a));
              else if (null == r.body)
                (a = new URLSearchParams()), (i = new FormData());
              else
                try {
                  (a = new URLSearchParams(r.body)), (i = Pe(a));
                } catch (e) {
                  return l();
                }
              let f = {
                formMethod: c,
                formAction: s,
                formEncType:
                  (r && r.formEncType) || "application/x-www-form-urlencoded",
                formData: i,
                json: void 0,
                text: void 0,
              };
              if (Ie(f.formMethod)) return { path: n, submission: f };
              let d = g(n);
              return (
                t && d.search && ze(d.search) && a.append("index", ""),
                (d.search = "?" + a),
                { path: y(d), submission: f }
              );
            }
            function be(e, t, n, r, o, a, i, l, c, s, f, d, p, h, m, v) {
              let y = v
                  ? Object.values(v)[0]
                  : m
                  ? Object.values(m)[0]
                  : void 0,
                g = e.createURL(t.location),
                b = e.createURL(o),
                w = v ? Object.keys(v)[0] : void 0,
                E = (function (e, t) {
                  let n = e;
                  if (t) {
                    let r = e.findIndex((e) => e.route.id === t);
                    r >= 0 && (n = e.slice(0, r));
                  }
                  return n;
                })(n, w).filter((e, n) => {
                  let { route: o } = e;
                  if (o.lazy) return !0;
                  if (null == o.loader) return !1;
                  if (a)
                    return (
                      !!o.loader.hydrate ||
                      (void 0 === t.loaderData[o.id] &&
                        (!t.errors || void 0 === t.errors[o.id]))
                    );
                  if (
                    (function (e, t, n) {
                      let r = !t || n.route.id !== t.route.id,
                        o = void 0 === e[n.route.id];
                      return r || o;
                    })(t.loaderData, t.matches[n], e) ||
                    l.some((t) => t === e.route.id)
                  )
                    return !0;
                  let c = t.matches[n],
                    s = e;
                  return Ee(
                    e,
                    u(
                      {
                        currentUrl: g,
                        currentParams: c.params,
                        nextUrl: b,
                        nextParams: s.params,
                      },
                      r,
                      {
                        actionResult: y,
                        defaultShouldRevalidate:
                          i ||
                          g.pathname + g.search === b.pathname + b.search ||
                          g.search !== b.search ||
                          we(c, s),
                      }
                    )
                  );
                }),
                S = [];
              return (
                f.forEach((e, o) => {
                  if (a || !n.some((t) => t.route.id === e.routeId) || s.has(o))
                    return;
                  let l = x(p, e.path, h);
                  if (!l)
                    return void S.push({
                      key: o,
                      routeId: e.routeId,
                      path: e.path,
                      matches: null,
                      match: null,
                      controller: null,
                    });
                  let f = t.fetchers.get(o),
                    m = Fe(l, e.path),
                    v = !1;
                  (v =
                    !d.has(o) &&
                    (!!c.includes(o) ||
                      (f && "idle" !== f.state && void 0 === f.data
                        ? i
                        : Ee(
                            m,
                            u(
                              {
                                currentUrl: g,
                                currentParams:
                                  t.matches[t.matches.length - 1].params,
                                nextUrl: b,
                                nextParams: n[n.length - 1].params,
                              },
                              r,
                              { actionResult: y, defaultShouldRevalidate: i }
                            )
                          )))),
                    v &&
                      S.push({
                        key: o,
                        routeId: e.routeId,
                        path: e.path,
                        matches: l,
                        match: m,
                        controller: new AbortController(),
                      });
                }),
                [E, S]
              );
            }
            function we(e, t) {
              let n = e.route.path;
              return (
                e.pathname !== t.pathname ||
                (null != n &&
                  n.endsWith("*") &&
                  e.params["*"] !== t.params["*"])
              );
            }
            function Ee(e, t) {
              if (e.route.shouldRevalidate) {
                let n = e.route.shouldRevalidate(t);
                if ("boolean" == typeof n) return n;
              }
              return t.defaultShouldRevalidate;
            }
            async function Se(e, t, n) {
              if (!e.lazy) return;
              let r = await e.lazy();
              if (!e.lazy) return;
              let o = n[e.id];
              p(o, "No route found in manifest");
              let a = {};
              for (let e in r) {
                let t = void 0 !== o[e] && "hasErrorBoundary" !== e;
                h(
                  !t,
                  'Route "' +
                    o.id +
                    '" has a static property "' +
                    e +
                    '" defined but its lazy function is also returning a value for this property. The lazy route property "' +
                    e +
                    '" will be ignored.'
                ),
                  t || E.has(e) || (a[e] = r[e]);
              }
              Object.assign(o, a),
                Object.assign(o, u({}, t(o), { lazy: void 0 }));
            }
            async function xe(e, t, n, r, o, a, i, l, u) {
              let c, s, f;
              void 0 === u && (u = {});
              let d = (e) => {
                let r,
                  o = new Promise((e, t) => (r = t));
                return (
                  (f = () => r()),
                  t.signal.addEventListener("abort", f),
                  Promise.race([
                    e({
                      request: t,
                      params: n.params,
                      context: u.requestContext,
                    }),
                    o,
                  ])
                );
              };
              try {
                let r = n.route[e];
                if (n.route.lazy)
                  if (r) {
                    let e,
                      t = await Promise.all([
                        d(r).catch((t) => {
                          e = t;
                        }),
                        Se(n.route, a, o),
                      ]);
                    if (e) throw e;
                    s = t[0];
                  } else {
                    if ((await Se(n.route, a, o), (r = n.route[e]), !r)) {
                      if ("action" === e) {
                        let e = new URL(t.url),
                          r = e.pathname + e.search;
                        throw Te(405, {
                          method: t.method,
                          pathname: r,
                          routeId: n.route.id,
                        });
                      }
                      return { type: w.data, data: void 0 };
                    }
                    s = await d(r);
                  }
                else {
                  if (!r) {
                    let e = new URL(t.url);
                    throw Te(404, { pathname: e.pathname + e.search });
                  }
                  s = await d(r);
                }
                p(
                  void 0 !== s,
                  "You defined " +
                    ("action" === e ? "an action" : "a loader") +
                    ' for route "' +
                    n.route.id +
                    "\" but didn't return anything from your `" +
                    e +
                    "` function. Please return a value or `null`."
                );
              } catch (e) {
                (c = w.error), (s = e);
              } finally {
                f && t.signal.removeEventListener("abort", f);
              }
              if (
                null != (h = s) &&
                "number" == typeof h.status &&
                "string" == typeof h.statusText &&
                "object" == typeof h.headers &&
                void 0 !== h.body
              ) {
                let e,
                  o = s.status;
                if (ue.has(o)) {
                  let e = s.headers.get("Location");
                  if (
                    (p(
                      e,
                      "Redirects returned/thrown from loaders/actions must have a Location header"
                    ),
                    pe.test(e))
                  ) {
                    if (!u.isStaticRequest) {
                      let n = new URL(t.url),
                        r = e.startsWith("//")
                          ? new URL(n.protocol + e)
                          : new URL(e),
                        o = null != W(r.pathname, i);
                      r.origin === n.origin &&
                        o &&
                        (e = r.pathname + r.search + r.hash);
                    }
                  } else
                    e = ye(
                      new URL(t.url),
                      r.slice(0, r.indexOf(n) + 1),
                      i,
                      !0,
                      e,
                      l
                    );
                  if (u.isStaticRequest)
                    throw (s.headers.set("Location", e), s);
                  return {
                    type: w.redirect,
                    status: o,
                    location: e,
                    revalidate: null !== s.headers.get("X-Remix-Revalidate"),
                    reloadDocument:
                      null !== s.headers.get("X-Remix-Reload-Document"),
                  };
                }
                if (u.isRouteRequest)
                  throw { type: c === w.error ? w.error : w.data, response: s };
                try {
                  let t = s.headers.get("Content-Type");
                  e =
                    t && /\bapplication\/json\b/.test(t)
                      ? null == s.body
                        ? null
                        : await s.json()
                      : await s.text();
                } catch (e) {
                  return { type: w.error, error: e };
                }
                return c === w.error
                  ? {
                      type: c,
                      error: new ne(o, s.statusText, e),
                      headers: s.headers,
                    }
                  : {
                      type: w.data,
                      data: e,
                      statusCode: s.status,
                      headers: s.headers,
                    };
              }
              var h, m, v;
              return c === w.error
                ? { type: c, error: s }
                : (function (e) {
                    let t = e;
                    return (
                      t &&
                      "object" == typeof t &&
                      "object" == typeof t.data &&
                      "function" == typeof t.subscribe &&
                      "function" == typeof t.cancel &&
                      "function" == typeof t.resolveData
                    );
                  })(s)
                ? {
                    type: w.deferred,
                    deferredData: s,
                    statusCode: null == (m = s.init) ? void 0 : m.status,
                    headers:
                      (null == (v = s.init) ? void 0 : v.headers) &&
                      new Headers(s.init.headers),
                  }
                : { type: w.data, data: s };
            }
            function _e(e, t, n, r) {
              let o = e.createURL(De(t)).toString(),
                a = { signal: n };
              if (r && Ie(r.formMethod)) {
                let { formMethod: e, formEncType: t } = r;
                (a.method = e.toUpperCase()),
                  "application/json" === t
                    ? ((a.headers = new Headers({ "Content-Type": t })),
                      (a.body = JSON.stringify(r.json)))
                    : "text/plain" === t
                    ? (a.body = r.text)
                    : "application/x-www-form-urlencoded" === t && r.formData
                    ? (a.body = ke(r.formData))
                    : (a.body = r.formData);
              }
              return new Request(o, a);
            }
            function ke(e) {
              let t = new URLSearchParams();
              for (let [n, r] of e.entries())
                t.append(n, "string" == typeof r ? r : r.name);
              return t;
            }
            function Pe(e) {
              let t = new FormData();
              for (let [n, r] of e.entries()) t.append(n, r);
              return t;
            }
            function Ce(e, t, n, r, o, a, i, l) {
              let { loaderData: c, errors: s } = (function (e, t, n, r, o) {
                let a,
                  i = {},
                  l = null,
                  u = !1,
                  c = {};
                return (
                  n.forEach((n, s) => {
                    let f = t[s].route.id;
                    if (
                      (p(
                        !Ue(n),
                        "Cannot handle redirect results in processLoaderData"
                      ),
                      Me(n))
                    ) {
                      let t = Le(e, f),
                        o = n.error;
                      r && ((o = Object.values(r)[0]), (r = void 0)),
                        (l = l || {}),
                        null == l[t.route.id] && (l[t.route.id] = o),
                        (i[f] = void 0),
                        u ||
                          ((u = !0), (a = re(n.error) ? n.error.status : 500)),
                        n.headers && (c[f] = n.headers);
                    } else
                      je(n)
                        ? (o.set(f, n.deferredData),
                          (i[f] = n.deferredData.data))
                        : (i[f] = n.data),
                        null == n.statusCode ||
                          200 === n.statusCode ||
                          u ||
                          (a = n.statusCode),
                        n.headers && (c[f] = n.headers);
                  }),
                  r && ((l = r), (i[Object.keys(r)[0]] = void 0)),
                  {
                    loaderData: i,
                    errors: l,
                    statusCode: a || 200,
                    loaderHeaders: c,
                  }
                );
              })(t, n, r, o, l);
              for (let t = 0; t < a.length; t++) {
                let { key: n, match: r, controller: o } = a[t];
                p(
                  void 0 !== i && void 0 !== i[t],
                  "Did not find corresponding fetcher result"
                );
                let l = i[t];
                if (!o || !o.signal.aborted)
                  if (Me(l)) {
                    let t = Le(e.matches, null == r ? void 0 : r.route.id);
                    (s && s[t.route.id]) ||
                      (s = u({}, s, { [t.route.id]: l.error })),
                      e.fetchers.delete(n);
                  } else if (Ue(l))
                    p(!1, "Unhandled fetcher revalidation redirect");
                  else if (je(l)) p(!1, "Unhandled fetcher deferred data");
                  else {
                    let t = Ve(l.data);
                    e.fetchers.set(n, t);
                  }
              }
              return { loaderData: c, errors: s };
            }
            function Oe(e, t, n, r) {
              let o = u({}, t);
              for (let a of n) {
                let n = a.route.id;
                if (
                  (t.hasOwnProperty(n)
                    ? void 0 !== t[n] && (o[n] = t[n])
                    : void 0 !== e[n] && a.route.loader && (o[n] = e[n]),
                  r && r.hasOwnProperty(n))
                )
                  break;
              }
              return o;
            }
            function Le(e, t) {
              return (
                (t
                  ? e.slice(0, e.findIndex((e) => e.route.id === t) + 1)
                  : [...e]
                )
                  .reverse()
                  .find((e) => !0 === e.route.hasErrorBoundary) || e[0]
              );
            }
            function Re(e) {
              let t =
                1 === e.length
                  ? e[0]
                  : e.find((e) => e.index || !e.path || "/" === e.path) || {
                      id: "__shim-error-route__",
                    };
              return {
                matches: [
                  { params: {}, pathname: "", pathnameBase: "", route: t },
                ],
                route: t,
              };
            }
            function Te(e, t) {
              let {
                  pathname: n,
                  routeId: r,
                  method: o,
                  type: a,
                } = void 0 === t ? {} : t,
                i = "Unknown Server Error",
                l = "Unknown @remix-run/router error";
              return (
                400 === e
                  ? ((i = "Bad Request"),
                    o && n && r
                      ? (l =
                          "You made a " +
                          o +
                          ' request to "' +
                          n +
                          '" but did not provide a `loader` for route "' +
                          r +
                          '", so there is no way to handle the request.')
                      : "defer-action" === a
                      ? (l = "defer() is not supported in actions")
                      : "invalid-body" === a &&
                        (l = "Unable to encode submission body"))
                  : 403 === e
                  ? ((i = "Forbidden"),
                    (l = 'Route "' + r + '" does not match URL "' + n + '"'))
                  : 404 === e
                  ? ((i = "Not Found"),
                    (l = 'No route matches URL "' + n + '"'))
                  : 405 === e &&
                    ((i = "Method Not Allowed"),
                    o && n && r
                      ? (l =
                          "You made a " +
                          o.toUpperCase() +
                          ' request to "' +
                          n +
                          '" but did not provide an `action` for route "' +
                          r +
                          '", so there is no way to handle the request.')
                      : o &&
                        (l =
                          'Invalid request method "' + o.toUpperCase() + '"')),
                new ne(e || 500, i, new Error(l), !0)
              );
            }
            function Ne(e) {
              for (let t = e.length - 1; t >= 0; t--) {
                let n = e[t];
                if (Ue(n)) return { result: n, idx: t };
              }
            }
            function De(e) {
              return y(u({}, "string" == typeof e ? g(e) : e, { hash: "" }));
            }
            function je(e) {
              return e.type === w.deferred;
            }
            function Me(e) {
              return e.type === w.error;
            }
            function Ue(e) {
              return (e && e.type) === w.redirect;
            }
            function Ie(e) {
              return ae.has(e.toLowerCase());
            }
            async function Ae(e, t, n, r, o, a) {
              for (let i = 0; i < n.length; i++) {
                let l = n[i],
                  u = t[i];
                if (!u) continue;
                let c = e.find((e) => e.route.id === u.route.id),
                  s = null != c && !we(c, u) && void 0 !== (a && a[u.route.id]);
                if (je(l) && (o || s)) {
                  let e = r[i];
                  p(
                    e,
                    "Expected an AbortSignal for revalidating fetcher deferred result"
                  ),
                    await We(l, e, o).then((e) => {
                      e && (n[i] = e || n[i]);
                    });
                }
              }
            }
            async function We(e, t, n) {
              if (
                (void 0 === n && (n = !1),
                !(await e.deferredData.resolveData(t)))
              ) {
                if (n)
                  try {
                    return { type: w.data, data: e.deferredData.unwrappedData };
                  } catch (e) {
                    return { type: w.error, error: e };
                  }
                return { type: w.data, data: e.deferredData.data };
              }
            }
            function ze(e) {
              return new URLSearchParams(e)
                .getAll("index")
                .some((e) => "" === e);
            }
            function Fe(e, t) {
              let n = "string" == typeof t ? g(t).search : t.search;
              if (e[e.length - 1].route.index && ze(n || ""))
                return e[e.length - 1];
              let r = B(e);
              return r[r.length - 1];
            }
            function Be(e) {
              let {
                formMethod: t,
                formAction: n,
                formEncType: r,
                text: o,
                formData: a,
                json: i,
              } = e;
              if (t && n && r)
                return null != o
                  ? {
                      formMethod: t,
                      formAction: n,
                      formEncType: r,
                      formData: void 0,
                      json: void 0,
                      text: o,
                    }
                  : null != a
                  ? {
                      formMethod: t,
                      formAction: n,
                      formEncType: r,
                      formData: a,
                      json: void 0,
                      text: void 0,
                    }
                  : void 0 !== i
                  ? {
                      formMethod: t,
                      formAction: n,
                      formEncType: r,
                      formData: void 0,
                      json: i,
                      text: void 0,
                    }
                  : void 0;
            }
            function He(e, t) {
              return t
                ? {
                    state: "loading",
                    location: e,
                    formMethod: t.formMethod,
                    formAction: t.formAction,
                    formEncType: t.formEncType,
                    formData: t.formData,
                    json: t.json,
                    text: t.text,
                  }
                : {
                    state: "loading",
                    location: e,
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                    json: void 0,
                    text: void 0,
                  };
            }
            function $e(e, t) {
              return e
                ? {
                    state: "loading",
                    formMethod: e.formMethod,
                    formAction: e.formAction,
                    formEncType: e.formEncType,
                    formData: e.formData,
                    json: e.json,
                    text: e.text,
                    data: t,
                  }
                : {
                    state: "loading",
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                    json: void 0,
                    text: void 0,
                    data: t,
                  };
            }
            function Ve(e) {
              return {
                state: "idle",
                formMethod: void 0,
                formAction: void 0,
                formEncType: void 0,
                formData: void 0,
                json: void 0,
                text: void 0,
                data: e,
              };
            }
            function Je() {
              return (
                (Je = Object.assign
                  ? Object.assign.bind()
                  : function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                          Object.prototype.hasOwnProperty.call(n, r) &&
                            (e[r] = n[r]);
                      }
                      return e;
                    }),
                Je.apply(this, arguments)
              );
            }
            Symbol("deferred");
            const Qe = o.createContext(null),
              qe = o.createContext(null),
              Ye = o.createContext(null),
              Ke = o.createContext(null),
              Ge = o.createContext(null),
              Xe = o.createContext({
                outlet: null,
                matches: [],
                isDataRoute: !1,
              }),
              Ze = o.createContext(null);
            function et(e, t) {
              let { relative: n } = void 0 === t ? {} : t;
              tt() || p(!1);
              let { basename: r, navigator: a } = o.useContext(Ke),
                { hash: i, pathname: l, search: u } = ft(e, { relative: n }),
                c = l;
              return (
                "/" !== r && (c = "/" === l ? r : V([r, l])),
                a.createHref({ pathname: c, search: u, hash: i })
              );
            }
            function tt() {
              return null != o.useContext(Ge);
            }
            function nt() {
              return tt() || p(!1), o.useContext(Ge).location;
            }
            function rt() {
              return o.useContext(Ge).navigationType;
            }
            function ot(e) {
              tt() || p(!1);
              let { pathname: t } = nt();
              return o.useMemo(() => I(e, t), [t, e]);
            }
            function at(e) {
              o.useContext(Ke).static || o.useLayoutEffect(e);
            }
            function it() {
              let { isDataRoute: e } = o.useContext(Xe);
              return e
                ? (function () {
                    let { router: e } = Et(bt.UseNavigateStable),
                      t = xt(wt.UseNavigateStable),
                      n = o.useRef(!1);
                    return (
                      at(() => {
                        n.current = !0;
                      }),
                      o.useCallback(
                        function (r, o) {
                          void 0 === o && (o = {}),
                            n.current &&
                              ("number" == typeof r
                                ? e.navigate(r)
                                : e.navigate(r, Je({ fromRouteId: t }, o)));
                        },
                        [e, t]
                      )
                    );
                  })()
                : (function () {
                    tt() || p(!1);
                    let e = o.useContext(Qe),
                      {
                        basename: t,
                        future: n,
                        navigator: r,
                      } = o.useContext(Ke),
                      { matches: a } = o.useContext(Xe),
                      { pathname: i } = nt(),
                      l = JSON.stringify(H(a, n.v7_relativeSplatPath)),
                      u = o.useRef(!1);
                    return (
                      at(() => {
                        u.current = !0;
                      }),
                      o.useCallback(
                        function (n, o) {
                          if ((void 0 === o && (o = {}), !u.current)) return;
                          if ("number" == typeof n) return void r.go(n);
                          let a = $(n, JSON.parse(l), i, "path" === o.relative);
                          null == e &&
                            "/" !== t &&
                            (a.pathname =
                              "/" === a.pathname ? t : V([t, a.pathname])),
                            (o.replace ? r.replace : r.push)(a, o.state, o);
                        },
                        [t, r, l, i, e]
                      )
                    );
                  })();
            }
            const lt = o.createContext(null);
            function ut() {
              return o.useContext(lt);
            }
            function ct(e) {
              let t = o.useContext(Xe).outlet;
              return t ? o.createElement(lt.Provider, { value: e }, t) : t;
            }
            function st() {
              let { matches: e } = o.useContext(Xe),
                t = e[e.length - 1];
              return t ? t.params : {};
            }
            function ft(e, t) {
              let { relative: n } = void 0 === t ? {} : t,
                { future: r } = o.useContext(Ke),
                { matches: a } = o.useContext(Xe),
                { pathname: i } = nt(),
                l = JSON.stringify(H(a, r.v7_relativeSplatPath));
              return o.useMemo(
                () => $(e, JSON.parse(l), i, "path" === n),
                [e, l, i, n]
              );
            }
            function dt(e, t) {
              return pt(e, t);
            }
            function pt(e, t, n, a) {
              tt() || p(!1);
              let { navigator: i } = o.useContext(Ke),
                { matches: l } = o.useContext(Xe),
                u = l[l.length - 1],
                c = u ? u.params : {},
                s = (u && u.pathname, u ? u.pathnameBase : "/");
              u && u.route;
              let f,
                d = nt();
              if (t) {
                var h;
                let e = "string" == typeof t ? g(t) : t;
                "/" === s ||
                  (null == (h = e.pathname) ? void 0 : h.startsWith(s)) ||
                  p(!1),
                  (f = e);
              } else f = d;
              let m = f.pathname || "/",
                v = m;
              if ("/" !== s) {
                let e = s.replace(/^\//, "").split("/");
                v =
                  "/" +
                  m.replace(/^\//, "").split("/").slice(e.length).join("/");
              }
              let y = x(e, { pathname: v }),
                b = gt(
                  y &&
                    y.map((e) =>
                      Object.assign({}, e, {
                        params: Object.assign({}, c, e.params),
                        pathname: V([
                          s,
                          i.encodeLocation
                            ? i.encodeLocation(e.pathname).pathname
                            : e.pathname,
                        ]),
                        pathnameBase:
                          "/" === e.pathnameBase
                            ? s
                            : V([
                                s,
                                i.encodeLocation
                                  ? i.encodeLocation(e.pathnameBase).pathname
                                  : e.pathnameBase,
                              ]),
                      })
                    ),
                  l,
                  n,
                  a
                );
              return t && b
                ? o.createElement(
                    Ge.Provider,
                    {
                      value: {
                        location: Je(
                          {
                            pathname: "/",
                            search: "",
                            hash: "",
                            state: null,
                            key: "default",
                          },
                          f
                        ),
                        navigationType: r.Pop,
                      },
                    },
                    b
                  )
                : b;
            }
            function ht() {
              let e = Tt(),
                t = re(e)
                  ? e.status + " " + e.statusText
                  : e instanceof Error
                  ? e.message
                  : JSON.stringify(e),
                n = e instanceof Error ? e.stack : null,
                r = {
                  padding: "0.5rem",
                  backgroundColor: "rgba(200,200,200, 0.5)",
                };
              return o.createElement(
                o.Fragment,
                null,
                o.createElement("h2", null, "Unexpected Application Error!"),
                o.createElement("h3", { style: { fontStyle: "italic" } }, t),
                n ? o.createElement("pre", { style: r }, n) : null,
                null
              );
            }
            const mt = o.createElement(ht, null);
            class vt extends o.Component {
              constructor(e) {
                super(e),
                  (this.state = {
                    location: e.location,
                    revalidation: e.revalidation,
                    error: e.error,
                  });
              }
              static getDerivedStateFromError(e) {
                return { error: e };
              }
              static getDerivedStateFromProps(e, t) {
                return t.location !== e.location ||
                  ("idle" !== t.revalidation && "idle" === e.revalidation)
                  ? {
                      error: e.error,
                      location: e.location,
                      revalidation: e.revalidation,
                    }
                  : {
                      error: void 0 !== e.error ? e.error : t.error,
                      location: t.location,
                      revalidation: e.revalidation || t.revalidation,
                    };
              }
              componentDidCatch(e, t) {
                console.error(
                  "React Router caught the following error during render",
                  e,
                  t
                );
              }
              render() {
                return void 0 !== this.state.error
                  ? o.createElement(
                      Xe.Provider,
                      { value: this.props.routeContext },
                      o.createElement(Ze.Provider, {
                        value: this.state.error,
                        children: this.props.component,
                      })
                    )
                  : this.props.children;
              }
            }
            function yt(e) {
              let { routeContext: t, match: n, children: r } = e,
                a = o.useContext(Qe);
              return (
                a &&
                  a.static &&
                  a.staticContext &&
                  (n.route.errorElement || n.route.ErrorBoundary) &&
                  (a.staticContext._deepestRenderedBoundaryId = n.route.id),
                o.createElement(Xe.Provider, { value: t }, r)
              );
            }
            function gt(e, t, n, r) {
              var a;
              if (
                (void 0 === t && (t = []),
                void 0 === n && (n = null),
                void 0 === r && (r = null),
                null == e)
              ) {
                var i;
                if (null == (i = n) || !i.errors) return null;
                e = n.matches;
              }
              let l = e,
                u = null == (a = n) ? void 0 : a.errors;
              if (null != u) {
                let e = l.findIndex(
                  (e) => e.route.id && (null == u ? void 0 : u[e.route.id])
                );
                e >= 0 || p(!1), (l = l.slice(0, Math.min(l.length, e + 1)));
              }
              let c = !1,
                s = -1;
              if (n && r && r.v7_partialHydration)
                for (let e = 0; e < l.length; e++) {
                  let t = l[e];
                  if (
                    ((t.route.HydrateFallback ||
                      t.route.hydrateFallbackElement) &&
                      (s = e),
                    t.route.id)
                  ) {
                    let { loaderData: e, errors: r } = n,
                      o =
                        t.route.loader &&
                        void 0 === e[t.route.id] &&
                        (!r || void 0 === r[t.route.id]);
                    if (t.route.lazy || o) {
                      (c = !0), (l = s >= 0 ? l.slice(0, s + 1) : [l[0]]);
                      break;
                    }
                  }
                }
              return l.reduceRight((e, r, a) => {
                let i,
                  f = !1,
                  d = null,
                  p = null;
                var h;
                n &&
                  ((i = u && r.route.id ? u[r.route.id] : void 0),
                  (d = r.route.errorElement || mt),
                  c &&
                    (s < 0 && 0 === a
                      ? (Ut[(h = "route-fallback")] || (Ut[h] = !0),
                        (f = !0),
                        (p = null))
                      : s === a &&
                        ((f = !0),
                        (p = r.route.hydrateFallbackElement || null))));
                let m = t.concat(l.slice(0, a + 1)),
                  v = () => {
                    let t;
                    return (
                      (t = i
                        ? d
                        : f
                        ? p
                        : r.route.Component
                        ? o.createElement(r.route.Component, null)
                        : r.route.element
                        ? r.route.element
                        : e),
                      o.createElement(yt, {
                        match: r,
                        routeContext: {
                          outlet: e,
                          matches: m,
                          isDataRoute: null != n,
                        },
                        children: t,
                      })
                    );
                  };
                return n &&
                  (r.route.ErrorBoundary || r.route.errorElement || 0 === a)
                  ? o.createElement(vt, {
                      location: n.location,
                      revalidation: n.revalidation,
                      component: d,
                      error: i,
                      children: v(),
                      routeContext: {
                        outlet: null,
                        matches: m,
                        isDataRoute: !0,
                      },
                    })
                  : v();
              }, null);
            }
            var bt = (function (e) {
                return (
                  (e.UseBlocker = "useBlocker"),
                  (e.UseRevalidator = "useRevalidator"),
                  (e.UseNavigateStable = "useNavigate"),
                  e
                );
              })(bt || {}),
              wt = (function (e) {
                return (
                  (e.UseBlocker = "useBlocker"),
                  (e.UseLoaderData = "useLoaderData"),
                  (e.UseActionData = "useActionData"),
                  (e.UseRouteError = "useRouteError"),
                  (e.UseNavigation = "useNavigation"),
                  (e.UseRouteLoaderData = "useRouteLoaderData"),
                  (e.UseMatches = "useMatches"),
                  (e.UseRevalidator = "useRevalidator"),
                  (e.UseNavigateStable = "useNavigate"),
                  (e.UseRouteId = "useRouteId"),
                  e
                );
              })(wt || {});
            function Et(e) {
              let t = o.useContext(Qe);
              return t || p(!1), t;
            }
            function St(e) {
              let t = o.useContext(qe);
              return t || p(!1), t;
            }
            function xt(e) {
              let t = (function (e) {
                  let t = o.useContext(Xe);
                  return t || p(!1), t;
                })(),
                n = t.matches[t.matches.length - 1];
              return n.route.id || p(!1), n.route.id;
            }
            function _t() {
              return xt(wt.UseRouteId);
            }
            function kt() {
              return St(wt.UseNavigation).navigation;
            }
            function Pt() {
              let e = Et(bt.UseRevalidator),
                t = St(wt.UseRevalidator);
              return o.useMemo(
                () => ({
                  revalidate: e.router.revalidate,
                  state: t.revalidation,
                }),
                [e.router.revalidate, t.revalidation]
              );
            }
            function Ct() {
              let { matches: e, loaderData: t } = St(wt.UseMatches);
              return o.useMemo(() => e.map((e) => _(e, t)), [e, t]);
            }
            function Ot() {
              let e = St(wt.UseLoaderData),
                t = xt(wt.UseLoaderData);
              if (!e.errors || null == e.errors[t]) return e.loaderData[t];
              console.error(
                "You cannot `useLoaderData` in an errorElement (routeId: " +
                  t +
                  ")"
              );
            }
            function Lt(e) {
              return St(wt.UseRouteLoaderData).loaderData[e];
            }
            function Rt() {
              let e = St(wt.UseActionData),
                t = xt(wt.UseLoaderData);
              return e.actionData ? e.actionData[t] : void 0;
            }
            function Tt() {
              var e;
              let t = o.useContext(Ze),
                n = St(wt.UseRouteError),
                r = xt(wt.UseRouteError);
              return void 0 !== t ? t : null == (e = n.errors) ? void 0 : e[r];
            }
            function Nt() {
              let e = o.useContext(Ye);
              return null == e ? void 0 : e._data;
            }
            function Dt() {
              let e = o.useContext(Ye);
              return null == e ? void 0 : e._error;
            }
            let jt = 0;
            function Mt(e) {
              let { router: t, basename: n } = Et(bt.UseBlocker),
                r = St(wt.UseBlocker),
                [a, i] = o.useState(""),
                l = o.useCallback(
                  (t) => {
                    if ("function" != typeof e) return !!e;
                    if ("/" === n) return e(t);
                    let {
                      currentLocation: r,
                      nextLocation: o,
                      historyAction: a,
                    } = t;
                    return e({
                      currentLocation: Je({}, r, {
                        pathname: W(r.pathname, n) || r.pathname,
                      }),
                      nextLocation: Je({}, o, {
                        pathname: W(o.pathname, n) || o.pathname,
                      }),
                      historyAction: a,
                    });
                  },
                  [n, e]
                );
              return (
                o.useEffect(() => {
                  let e = String(++jt);
                  return i(e), () => t.deleteBlocker(e);
                }, [t]),
                o.useEffect(() => {
                  "" !== a && t.getBlocker(a, l);
                }, [t, a, l]),
                a && r.blockers.has(a) ? r.blockers.get(a) : de
              );
            }
            const Ut = {},
              It = a.startTransition;
            function At(e) {
              let {
                  basename: t,
                  children: n,
                  initialEntries: r,
                  initialIndex: a,
                  future: i,
                } = e,
                l = o.useRef();
              null == l.current &&
                (l.current = s({
                  initialEntries: r,
                  initialIndex: a,
                  v5Compat: !0,
                }));
              let u = l.current,
                [c, f] = o.useState({ action: u.action, location: u.location }),
                { v7_startTransition: d } = i || {},
                p = o.useCallback(
                  (e) => {
                    d && It ? It(() => f(e)) : f(e);
                  },
                  [f, d]
                );
              return (
                o.useLayoutEffect(() => u.listen(p), [u, p]),
                o.createElement(Bt, {
                  basename: t,
                  children: n,
                  location: c.location,
                  navigationType: c.action,
                  navigator: u,
                  future: i,
                })
              );
            }
            function Wt(e) {
              let { to: t, replace: n, state: r, relative: a } = e;
              tt() || p(!1);
              let { future: i, static: l } = o.useContext(Ke),
                { matches: u } = o.useContext(Xe),
                { pathname: c } = nt(),
                s = it(),
                f = $(t, H(u, i.v7_relativeSplatPath), c, "path" === a),
                d = JSON.stringify(f);
              return (
                o.useEffect(
                  () => s(JSON.parse(d), { replace: n, state: r, relative: a }),
                  [s, d, a, n, r]
                ),
                null
              );
            }
            function zt(e) {
              return ct(e.context);
            }
            function Ft(e) {
              p(!1);
            }
            function Bt(e) {
              let {
                basename: t = "/",
                children: n = null,
                location: a,
                navigationType: i = r.Pop,
                navigator: l,
                static: u = !1,
                future: c,
              } = e;
              tt() && p(!1);
              let s = t.replace(/^\/*/, "/"),
                f = o.useMemo(
                  () => ({
                    basename: s,
                    navigator: l,
                    static: u,
                    future: Je({ v7_relativeSplatPath: !1 }, c),
                  }),
                  [s, c, l, u]
                );
              "string" == typeof a && (a = g(a));
              let {
                  pathname: d = "/",
                  search: h = "",
                  hash: m = "",
                  state: v = null,
                  key: y = "default",
                } = a,
                b = o.useMemo(() => {
                  let e = W(d, s);
                  return null == e
                    ? null
                    : {
                        location: {
                          pathname: e,
                          search: h,
                          hash: m,
                          state: v,
                          key: y,
                        },
                        navigationType: i,
                      };
                }, [s, d, h, m, v, y, i]);
              return null == b
                ? null
                : o.createElement(
                    Ke.Provider,
                    { value: f },
                    o.createElement(Ge.Provider, { children: n, value: b })
                  );
            }
            function Ht(e) {
              let { children: t, location: n } = e;
              return dt(Yt(t), n);
            }
            function $t(e) {
              let { children: t, errorElement: n, resolve: r } = e;
              return o.createElement(
                Qt,
                { resolve: r, errorElement: n },
                o.createElement(qt, null, t)
              );
            }
            var Vt = (function (e) {
              return (
                (e[(e.pending = 0)] = "pending"),
                (e[(e.success = 1)] = "success"),
                (e[(e.error = 2)] = "error"),
                e
              );
            })(Vt || {});
            const Jt = new Promise(() => {});
            class Qt extends o.Component {
              constructor(e) {
                super(e), (this.state = { error: null });
              }
              static getDerivedStateFromError(e) {
                return { error: e };
              }
              componentDidCatch(e, t) {
                console.error(
                  "<Await> caught the following error during render",
                  e,
                  t
                );
              }
              render() {
                let { children: e, errorElement: t, resolve: n } = this.props,
                  r = null,
                  a = Vt.pending;
                if (n instanceof Promise)
                  if (this.state.error) {
                    a = Vt.error;
                    let e = this.state.error;
                    (r = Promise.reject().catch(() => {})),
                      Object.defineProperty(r, "_tracked", { get: () => !0 }),
                      Object.defineProperty(r, "_error", { get: () => e });
                  } else
                    n._tracked
                      ? ((r = n),
                        (a =
                          void 0 !== r._error
                            ? Vt.error
                            : void 0 !== r._data
                            ? Vt.success
                            : Vt.pending))
                      : ((a = Vt.pending),
                        Object.defineProperty(n, "_tracked", { get: () => !0 }),
                        (r = n.then(
                          (e) =>
                            Object.defineProperty(n, "_data", { get: () => e }),
                          (e) =>
                            Object.defineProperty(n, "_error", { get: () => e })
                        )));
                else
                  (a = Vt.success),
                    (r = Promise.resolve()),
                    Object.defineProperty(r, "_tracked", { get: () => !0 }),
                    Object.defineProperty(r, "_data", { get: () => n });
                if (a === Vt.error && r._error instanceof K) throw Jt;
                if (a === Vt.error && !t) throw r._error;
                if (a === Vt.error)
                  return o.createElement(Ye.Provider, {
                    value: r,
                    children: t,
                  });
                if (a === Vt.success)
                  return o.createElement(Ye.Provider, {
                    value: r,
                    children: e,
                  });
                throw r;
              }
            }
            function qt(e) {
              let { children: t } = e,
                n = Nt(),
                r = "function" == typeof t ? t(n) : t;
              return o.createElement(o.Fragment, null, r);
            }
            function Yt(e, t) {
              void 0 === t && (t = []);
              let n = [];
              return (
                o.Children.forEach(e, (e, r) => {
                  if (!o.isValidElement(e)) return;
                  let a = [...t, r];
                  if (e.type === o.Fragment)
                    return void n.push.apply(n, Yt(e.props.children, a));
                  e.type !== Ft && p(!1),
                    e.props.index && e.props.children && p(!1);
                  let i = {
                    id: e.props.id || a.join("-"),
                    caseSensitive: e.props.caseSensitive,
                    element: e.props.element,
                    Component: e.props.Component,
                    index: e.props.index,
                    path: e.props.path,
                    loader: e.props.loader,
                    action: e.props.action,
                    errorElement: e.props.errorElement,
                    ErrorBoundary: e.props.ErrorBoundary,
                    hasErrorBoundary:
                      null != e.props.ErrorBoundary ||
                      null != e.props.errorElement,
                    shouldRevalidate: e.props.shouldRevalidate,
                    handle: e.props.handle,
                    lazy: e.props.lazy,
                  };
                  e.props.children && (i.children = Yt(e.props.children, a)),
                    n.push(i);
                }),
                n
              );
            }
            function Kt(e) {
              return gt(e);
            }
            function Gt(e) {
              let t = {
                hasErrorBoundary:
                  null != e.ErrorBoundary || null != e.errorElement,
              };
              return (
                e.Component &&
                  Object.assign(t, {
                    element: o.createElement(e.Component),
                    Component: void 0,
                  }),
                e.HydrateFallback &&
                  Object.assign(t, {
                    hydrateFallbackElement: o.createElement(e.HydrateFallback),
                    HydrateFallback: void 0,
                  }),
                e.ErrorBoundary &&
                  Object.assign(t, {
                    errorElement: o.createElement(e.ErrorBoundary),
                    ErrorBoundary: void 0,
                  }),
                t
              );
            }
            function Xt(e, t) {
              return ve({
                basename: null == t ? void 0 : t.basename,
                future: Je({}, null == t ? void 0 : t.future, {
                  v7_prependBasename: !0,
                }),
                history: s({
                  initialEntries: null == t ? void 0 : t.initialEntries,
                  initialIndex: null == t ? void 0 : t.initialIndex,
                }),
                hydrationData: null == t ? void 0 : t.hydrationData,
                routes: e,
                mapRouteProperties: Gt,
              }).initialize();
            }
            function Zt() {
              return (
                (Zt = Object.assign
                  ? Object.assign.bind()
                  : function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                          Object.prototype.hasOwnProperty.call(n, r) &&
                            (e[r] = n[r]);
                      }
                      return e;
                    }),
                Zt.apply(this, arguments)
              );
            }
            function en(e, t) {
              if (null == e) return {};
              var n,
                r,
                o = {},
                a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o;
            }
            const tn = "get",
              nn = "application/x-www-form-urlencoded";
            function rn(e) {
              return null != e && "string" == typeof e.tagName;
            }
            function on(e) {
              return (
                void 0 === e && (e = ""),
                new URLSearchParams(
                  "string" == typeof e ||
                  Array.isArray(e) ||
                  e instanceof URLSearchParams
                    ? e
                    : Object.keys(e).reduce((t, n) => {
                        let r = e[n];
                        return t.concat(
                          Array.isArray(r) ? r.map((e) => [n, e]) : [[n, r]]
                        );
                      }, [])
                )
              );
            }
            let an = null;
            const ln = new Set([
              "application/x-www-form-urlencoded",
              "multipart/form-data",
              "text/plain",
            ]);
            function un(e) {
              return null == e || ln.has(e) ? e : null;
            }
            const cn = [
                "onClick",
                "relative",
                "reloadDocument",
                "replace",
                "state",
                "target",
                "to",
                "preventScrollReset",
                "unstable_viewTransition",
              ],
              sn = [
                "aria-current",
                "caseSensitive",
                "className",
                "end",
                "style",
                "to",
                "unstable_viewTransition",
                "children",
              ],
              fn = [
                "fetcherKey",
                "navigate",
                "reloadDocument",
                "replace",
                "state",
                "method",
                "action",
                "onSubmit",
                "relative",
                "preventScrollReset",
                "unstable_viewTransition",
              ];
            try {
              window.__reactRouterVersion = "6";
            } catch (e) {}
            function dn(e, t) {
              return ve({
                basename: null == t ? void 0 : t.basename,
                future: Zt({}, null == t ? void 0 : t.future, {
                  v7_prependBasename: !0,
                }),
                history: f({ window: null == t ? void 0 : t.window }),
                hydrationData: (null == t ? void 0 : t.hydrationData) || hn(),
                routes: e,
                mapRouteProperties: Gt,
                window: null == t ? void 0 : t.window,
              }).initialize();
            }
            function pn(e, t) {
              return ve({
                basename: null == t ? void 0 : t.basename,
                future: Zt({}, null == t ? void 0 : t.future, {
                  v7_prependBasename: !0,
                }),
                history: d({ window: null == t ? void 0 : t.window }),
                hydrationData: (null == t ? void 0 : t.hydrationData) || hn(),
                routes: e,
                mapRouteProperties: Gt,
                window: null == t ? void 0 : t.window,
              }).initialize();
            }
            function hn() {
              var e;
              let t =
                null == (e = window) ? void 0 : e.__staticRouterHydrationData;
              return (
                t && t.errors && (t = Zt({}, t, { errors: mn(t.errors) })), t
              );
            }
            function mn(e) {
              if (!e) return null;
              let t = Object.entries(e),
                n = {};
              for (let [e, r] of t)
                if (r && "RouteErrorResponse" === r.__type)
                  n[e] = new ne(
                    r.status,
                    r.statusText,
                    r.data,
                    !0 === r.internal
                  );
                else if (r && "Error" === r.__type) {
                  if (r.__subType) {
                    let t = window[r.__subType];
                    if ("function" == typeof t)
                      try {
                        let o = new t(r.message);
                        (o.stack = ""), (n[e] = o);
                      } catch (e) {}
                  }
                  if (null == n[e]) {
                    let t = new Error(r.message);
                    (t.stack = ""), (n[e] = t);
                  }
                } else n[e] = r;
              return n;
            }
            const vn = o.createContext({ isTransitioning: !1 }),
              yn = o.createContext(new Map()),
              gn = a.startTransition,
              bn = l.flushSync,
              wn = a.useId;
            function En(e) {
              bn ? bn(e) : e();
            }
            class Sn {
              constructor() {
                (this.status = "pending"),
                  (this.promise = new Promise((e, t) => {
                    (this.resolve = (t) => {
                      "pending" === this.status &&
                        ((this.status = "resolved"), e(t));
                    }),
                      (this.reject = (e) => {
                        "pending" === this.status &&
                          ((this.status = "rejected"), t(e));
                      });
                  }));
              }
            }
            function xn(e) {
              let { fallbackElement: t, router: n, future: r } = e,
                [a, i] = o.useState(n.state),
                [l, u] = o.useState(),
                [c, s] = o.useState({ isTransitioning: !1 }),
                [f, d] = o.useState(),
                [p, h] = o.useState(),
                [m, v] = o.useState(),
                y = o.useRef(new Map()),
                { v7_startTransition: g } = r || {},
                b = o.useCallback(
                  (e) => {
                    g
                      ? (function (e) {
                          gn ? gn(e) : e();
                        })(e)
                      : e();
                  },
                  [g]
                ),
                w = o.useCallback(
                  (e, t) => {
                    let {
                      deletedFetchers: r,
                      unstable_flushSync: o,
                      unstable_viewTransitionOpts: a,
                    } = t;
                    r.forEach((e) => y.current.delete(e)),
                      e.fetchers.forEach((e, t) => {
                        void 0 !== e.data && y.current.set(t, e.data);
                      });
                    let l =
                      null == n.window ||
                      "function" !=
                        typeof n.window.document.startViewTransition;
                    if (a && !l) {
                      if (o) {
                        En(() => {
                          p && (f && f.resolve(), p.skipTransition()),
                            s({
                              isTransitioning: !0,
                              flushSync: !0,
                              currentLocation: a.currentLocation,
                              nextLocation: a.nextLocation,
                            });
                        });
                        let t = n.window.document.startViewTransition(() => {
                          En(() => i(e));
                        });
                        return (
                          t.finished.finally(() => {
                            En(() => {
                              d(void 0),
                                h(void 0),
                                u(void 0),
                                s({ isTransitioning: !1 });
                            });
                          }),
                          void En(() => h(t))
                        );
                      }
                      p
                        ? (f && f.resolve(),
                          p.skipTransition(),
                          v({
                            state: e,
                            currentLocation: a.currentLocation,
                            nextLocation: a.nextLocation,
                          }))
                        : (u(e),
                          s({
                            isTransitioning: !0,
                            flushSync: !1,
                            currentLocation: a.currentLocation,
                            nextLocation: a.nextLocation,
                          }));
                    } else o ? En(() => i(e)) : b(() => i(e));
                  },
                  [n.window, p, f, y, b]
                );
              o.useLayoutEffect(() => n.subscribe(w), [n, w]),
                o.useEffect(() => {
                  c.isTransitioning && !c.flushSync && d(new Sn());
                }, [c]),
                o.useEffect(() => {
                  if (f && l && n.window) {
                    let e = l,
                      t = f.promise,
                      r = n.window.document.startViewTransition(async () => {
                        b(() => i(e)), await t;
                      });
                    r.finished.finally(() => {
                      d(void 0),
                        h(void 0),
                        u(void 0),
                        s({ isTransitioning: !1 });
                    }),
                      h(r);
                  }
                }, [b, l, f, n.window]),
                o.useEffect(() => {
                  f && l && a.location.key === l.location.key && f.resolve();
                }, [f, p, a.location, l]),
                o.useEffect(() => {
                  !c.isTransitioning &&
                    m &&
                    (u(m.state),
                    s({
                      isTransitioning: !0,
                      flushSync: !1,
                      currentLocation: m.currentLocation,
                      nextLocation: m.nextLocation,
                    }),
                    v(void 0));
                }, [c.isTransitioning, m]),
                o.useEffect(() => {}, []);
              let E = o.useMemo(
                  () => ({
                    createHref: n.createHref,
                    encodeLocation: n.encodeLocation,
                    go: (e) => n.navigate(e),
                    push: (e, t, r) =>
                      n.navigate(e, {
                        state: t,
                        preventScrollReset:
                          null == r ? void 0 : r.preventScrollReset,
                      }),
                    replace: (e, t, r) =>
                      n.navigate(e, {
                        replace: !0,
                        state: t,
                        preventScrollReset:
                          null == r ? void 0 : r.preventScrollReset,
                      }),
                  }),
                  [n]
                ),
                S = n.basename || "/",
                x = o.useMemo(
                  () => ({ router: n, navigator: E, static: !1, basename: S }),
                  [n, E, S]
                );
              return o.createElement(
                o.Fragment,
                null,
                o.createElement(
                  Qe.Provider,
                  { value: x },
                  o.createElement(
                    qe.Provider,
                    { value: a },
                    o.createElement(
                      yn.Provider,
                      { value: y.current },
                      o.createElement(
                        vn.Provider,
                        { value: c },
                        o.createElement(
                          Bt,
                          {
                            basename: S,
                            location: a.location,
                            navigationType: a.historyAction,
                            navigator: E,
                            future: {
                              v7_relativeSplatPath:
                                n.future.v7_relativeSplatPath,
                            },
                          },
                          a.initialized || n.future.v7_partialHydration
                            ? o.createElement(_n, {
                                routes: n.routes,
                                future: n.future,
                                state: a,
                              })
                            : t
                        )
                      )
                    )
                  )
                ),
                null
              );
            }
            function _n(e) {
              let { routes: t, future: n, state: r } = e;
              return pt(t, void 0, r, n);
            }
            function kn(e) {
              let { basename: t, children: n, future: r, window: a } = e,
                i = o.useRef();
              null == i.current && (i.current = f({ window: a, v5Compat: !0 }));
              let l = i.current,
                [u, c] = o.useState({ action: l.action, location: l.location }),
                { v7_startTransition: s } = r || {},
                d = o.useCallback(
                  (e) => {
                    s && gn ? gn(() => c(e)) : c(e);
                  },
                  [c, s]
                );
              return (
                o.useLayoutEffect(() => l.listen(d), [l, d]),
                o.createElement(Bt, {
                  basename: t,
                  children: n,
                  location: u.location,
                  navigationType: u.action,
                  navigator: l,
                  future: r,
                })
              );
            }
            function Pn(e) {
              let { basename: t, children: n, future: r, window: a } = e,
                i = o.useRef();
              null == i.current && (i.current = d({ window: a, v5Compat: !0 }));
              let l = i.current,
                [u, c] = o.useState({ action: l.action, location: l.location }),
                { v7_startTransition: s } = r || {},
                f = o.useCallback(
                  (e) => {
                    s && gn ? gn(() => c(e)) : c(e);
                  },
                  [c, s]
                );
              return (
                o.useLayoutEffect(() => l.listen(f), [l, f]),
                o.createElement(Bt, {
                  basename: t,
                  children: n,
                  location: u.location,
                  navigationType: u.action,
                  navigator: l,
                  future: r,
                })
              );
            }
            function Cn(e) {
              let { basename: t, children: n, future: r, history: a } = e,
                [i, l] = o.useState({ action: a.action, location: a.location }),
                { v7_startTransition: u } = r || {},
                c = o.useCallback(
                  (e) => {
                    u && gn ? gn(() => l(e)) : l(e);
                  },
                  [l, u]
                );
              return (
                o.useLayoutEffect(() => a.listen(c), [a, c]),
                o.createElement(Bt, {
                  basename: t,
                  children: n,
                  location: i.location,
                  navigationType: i.action,
                  navigator: a,
                  future: r,
                })
              );
            }
            const On =
                "undefined" != typeof window &&
                void 0 !== window.document &&
                void 0 !== window.document.createElement,
              Ln = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
              Rn = o.forwardRef(function (e, t) {
                let n,
                  {
                    onClick: r,
                    relative: a,
                    reloadDocument: i,
                    replace: l,
                    state: u,
                    target: c,
                    to: s,
                    preventScrollReset: f,
                    unstable_viewTransition: d,
                  } = e,
                  p = en(e, cn),
                  { basename: h } = o.useContext(Ke),
                  m = !1;
                if ("string" == typeof s && Ln.test(s) && ((n = s), On))
                  try {
                    let e = new URL(window.location.href),
                      t = s.startsWith("//")
                        ? new URL(e.protocol + s)
                        : new URL(s),
                      n = W(t.pathname, h);
                    t.origin === e.origin && null != n
                      ? (s = n + t.search + t.hash)
                      : (m = !0);
                  } catch (e) {}
                let v = et(s, { relative: a }),
                  y = An(s, {
                    replace: l,
                    state: u,
                    target: c,
                    preventScrollReset: f,
                    relative: a,
                    unstable_viewTransition: d,
                  });
                return o.createElement(
                  "a",
                  Zt({}, p, {
                    href: n || v,
                    onClick:
                      m || i
                        ? r
                        : function (e) {
                            r && r(e), e.defaultPrevented || y(e);
                          },
                    ref: t,
                    target: c,
                  })
                );
              }),
              Tn = o.forwardRef(function (e, t) {
                let {
                    "aria-current": n = "page",
                    caseSensitive: r = !1,
                    className: a = "",
                    end: i = !1,
                    style: l,
                    to: u,
                    unstable_viewTransition: c,
                    children: s,
                  } = e,
                  f = en(e, sn),
                  d = ft(u, { relative: f.relative }),
                  p = nt(),
                  h = o.useContext(qe),
                  { navigator: m, basename: v } = o.useContext(Ke),
                  y = null != h && Gn(d) && !0 === c,
                  g = m.encodeLocation
                    ? m.encodeLocation(d).pathname
                    : d.pathname,
                  b = p.pathname,
                  w =
                    h && h.navigation && h.navigation.location
                      ? h.navigation.location.pathname
                      : null;
                r ||
                  ((b = b.toLowerCase()),
                  (w = w ? w.toLowerCase() : null),
                  (g = g.toLowerCase())),
                  w && v && (w = W(w, v) || w);
                const E =
                  "/" !== g && g.endsWith("/") ? g.length - 1 : g.length;
                let S,
                  x = b === g || (!i && b.startsWith(g) && "/" === b.charAt(E)),
                  _ =
                    null != w &&
                    (w === g ||
                      (!i && w.startsWith(g) && "/" === w.charAt(g.length))),
                  k = { isActive: x, isPending: _, isTransitioning: y },
                  P = x ? n : void 0;
                S =
                  "function" == typeof a
                    ? a(k)
                    : [
                        a,
                        x ? "active" : null,
                        _ ? "pending" : null,
                        y ? "transitioning" : null,
                      ]
                        .filter(Boolean)
                        .join(" ");
                let C = "function" == typeof l ? l(k) : l;
                return o.createElement(
                  Rn,
                  Zt({}, f, {
                    "aria-current": P,
                    className: S,
                    ref: t,
                    style: C,
                    to: u,
                    unstable_viewTransition: c,
                  }),
                  "function" == typeof s ? s(k) : s
                );
              }),
              Nn = o.forwardRef((e, t) => {
                let {
                    fetcherKey: n,
                    navigate: r,
                    reloadDocument: a,
                    replace: i,
                    state: l,
                    method: u = tn,
                    action: c,
                    onSubmit: s,
                    relative: f,
                    preventScrollReset: d,
                    unstable_viewTransition: p,
                  } = e,
                  h = en(e, fn),
                  m = Bn(),
                  v = Hn(c, { relative: f }),
                  y = "get" === u.toLowerCase() ? "get" : "post";
                return o.createElement(
                  "form",
                  Zt(
                    {
                      ref: t,
                      method: y,
                      action: v,
                      onSubmit: a
                        ? s
                        : (e) => {
                            if ((s && s(e), e.defaultPrevented)) return;
                            e.preventDefault();
                            let t = e.nativeEvent.submitter,
                              o =
                                (null == t
                                  ? void 0
                                  : t.getAttribute("formmethod")) || u;
                            m(t || e.currentTarget, {
                              fetcherKey: n,
                              method: o,
                              navigate: r,
                              replace: i,
                              state: l,
                              relative: f,
                              preventScrollReset: d,
                              unstable_viewTransition: p,
                            });
                          },
                    },
                    h
                  )
                );
              });
            function Dn(e) {
              let { getKey: t, storageKey: n } = e;
              return qn({ getKey: t, storageKey: n }), null;
            }
            var jn, Mn;
            function Un(e) {
              let t = o.useContext(Qe);
              return t || p(!1), t;
            }
            function In(e) {
              let t = o.useContext(qe);
              return t || p(!1), t;
            }
            function An(e, t) {
              let {
                  target: n,
                  replace: r,
                  state: a,
                  preventScrollReset: i,
                  relative: l,
                  unstable_viewTransition: u,
                } = void 0 === t ? {} : t,
                c = it(),
                s = nt(),
                f = ft(e, { relative: l });
              return o.useCallback(
                (t) => {
                  if (
                    (function (e, t) {
                      return !(
                        0 !== e.button ||
                        (t && "_self" !== t) ||
                        (function (e) {
                          return !!(
                            e.metaKey ||
                            e.altKey ||
                            e.ctrlKey ||
                            e.shiftKey
                          );
                        })(e)
                      );
                    })(t, n)
                  ) {
                    t.preventDefault();
                    let n = void 0 !== r ? r : y(s) === y(f);
                    c(e, {
                      replace: n,
                      state: a,
                      preventScrollReset: i,
                      relative: l,
                      unstable_viewTransition: u,
                    });
                  }
                },
                [s, c, f, r, a, n, e, i, l, u]
              );
            }
            function Wn(e) {
              let t = o.useRef(on(e)),
                n = o.useRef(!1),
                r = nt(),
                a = o.useMemo(
                  () =>
                    (function (e, t) {
                      let n = on(e);
                      return (
                        t &&
                          t.forEach((e, r) => {
                            n.has(r) ||
                              t.getAll(r).forEach((e) => {
                                n.append(r, e);
                              });
                          }),
                        n
                      );
                    })(r.search, n.current ? null : t.current),
                  [r.search]
                ),
                i = it(),
                l = o.useCallback(
                  (e, t) => {
                    const r = on("function" == typeof e ? e(a) : e);
                    (n.current = !0), i("?" + r, t);
                  },
                  [i, a]
                );
              return [a, l];
            }
            (function (e) {
              (e.UseScrollRestoration = "useScrollRestoration"),
                (e.UseSubmit = "useSubmit"),
                (e.UseSubmitFetcher = "useSubmitFetcher"),
                (e.UseFetcher = "useFetcher"),
                (e.useViewTransitionState = "useViewTransitionState");
            })(jn || (jn = {})),
              (function (e) {
                (e.UseFetcher = "useFetcher"),
                  (e.UseFetchers = "useFetchers"),
                  (e.UseScrollRestoration = "useScrollRestoration");
              })(Mn || (Mn = {}));
            let zn = 0,
              Fn = () => "__" + String(++zn) + "__";
            function Bn() {
              let { router: e } = Un(jn.UseSubmit),
                { basename: t } = o.useContext(Ke),
                n = _t();
              return o.useCallback(
                function (r, o) {
                  void 0 === o && (o = {}),
                    (function () {
                      if ("undefined" == typeof document)
                        throw new Error(
                          "You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead."
                        );
                    })();
                  let {
                    action: a,
                    method: i,
                    encType: l,
                    formData: u,
                    body: c,
                  } = (function (e, t) {
                    let n, r, o, a, i;
                    if (rn((l = e)) && "form" === l.tagName.toLowerCase()) {
                      let i = e.getAttribute("action");
                      (r = i ? W(i, t) : null),
                        (n = e.getAttribute("method") || tn),
                        (o = un(e.getAttribute("enctype")) || nn),
                        (a = new FormData(e));
                    } else if (
                      (function (e) {
                        return rn(e) && "button" === e.tagName.toLowerCase();
                      })(e) ||
                      ((function (e) {
                        return rn(e) && "input" === e.tagName.toLowerCase();
                      })(e) &&
                        ("submit" === e.type || "image" === e.type))
                    ) {
                      let i = e.form;
                      if (null == i)
                        throw new Error(
                          'Cannot submit a <button> or <input type="submit"> without a <form>'
                        );
                      let l =
                        e.getAttribute("formaction") ||
                        i.getAttribute("action");
                      if (
                        ((r = l ? W(l, t) : null),
                        (n =
                          e.getAttribute("formmethod") ||
                          i.getAttribute("method") ||
                          tn),
                        (o =
                          un(e.getAttribute("formenctype")) ||
                          un(i.getAttribute("enctype")) ||
                          nn),
                        (a = new FormData(i, e)),
                        !(function () {
                          if (null === an)
                            try {
                              new FormData(document.createElement("form"), 0),
                                (an = !1);
                            } catch (e) {
                              an = !0;
                            }
                          return an;
                        })())
                      ) {
                        let { name: t, type: n, value: r } = e;
                        if ("image" === n) {
                          let e = t ? t + "." : "";
                          a.append(e + "x", "0"), a.append(e + "y", "0");
                        } else t && a.append(t, r);
                      }
                    } else {
                      if (rn(e))
                        throw new Error(
                          'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
                        );
                      (n = tn), (r = null), (o = nn), (i = e);
                    }
                    var l;
                    return (
                      a && "text/plain" === o && ((i = a), (a = void 0)),
                      {
                        action: r,
                        method: n.toLowerCase(),
                        encType: o,
                        formData: a,
                        body: i,
                      }
                    );
                  })(r, t);
                  if (!1 === o.navigate) {
                    let t = o.fetcherKey || Fn();
                    e.fetch(t, n, o.action || a, {
                      preventScrollReset: o.preventScrollReset,
                      formData: u,
                      body: c,
                      formMethod: o.method || i,
                      formEncType: o.encType || l,
                      unstable_flushSync: o.unstable_flushSync,
                    });
                  } else
                    e.navigate(o.action || a, {
                      preventScrollReset: o.preventScrollReset,
                      formData: u,
                      body: c,
                      formMethod: o.method || i,
                      formEncType: o.encType || l,
                      replace: o.replace,
                      state: o.state,
                      fromRouteId: n,
                      unstable_flushSync: o.unstable_flushSync,
                      unstable_viewTransition: o.unstable_viewTransition,
                    });
                },
                [e, t, n]
              );
            }
            function Hn(e, t) {
              let { relative: n } = void 0 === t ? {} : t,
                { basename: r } = o.useContext(Ke),
                a = o.useContext(Xe);
              a || p(!1);
              let [i] = a.matches.slice(-1),
                l = Zt({}, ft(e || ".", { relative: n })),
                u = nt();
              if (null == e) {
                l.search = u.search;
                let e = new URLSearchParams(l.search);
                e.has("index") &&
                  "" === e.get("index") &&
                  (e.delete("index"),
                  (l.search = e.toString() ? "?" + e.toString() : ""));
              }
              return (
                (e && "." !== e) ||
                  !i.route.index ||
                  (l.search = l.search
                    ? l.search.replace(/^\?/, "?index&")
                    : "?index"),
                "/" !== r &&
                  (l.pathname = "/" === l.pathname ? r : V([r, l.pathname])),
                y(l)
              );
            }
            function $n(e) {
              var t;
              let { key: n } = void 0 === e ? {} : e,
                { router: r } = Un(jn.UseFetcher),
                a = In(Mn.UseFetcher),
                i = o.useContext(yn),
                l = o.useContext(Xe),
                u =
                  null == (t = l.matches[l.matches.length - 1])
                    ? void 0
                    : t.route.id;
              i || p(!1), l || p(!1), null == u && p(!1);
              let c = wn ? wn() : "",
                [s, f] = o.useState(n || c);
              n && n !== s ? f(n) : s || f(Fn()),
                o.useEffect(
                  () => (
                    r.getFetcher(s),
                    () => {
                      r.deleteFetcher(s);
                    }
                  ),
                  [r, s]
                );
              let d = o.useCallback(
                  (e, t) => {
                    u || p(!1), r.fetch(s, u, e, t);
                  },
                  [s, u, r]
                ),
                h = Bn(),
                m = o.useCallback(
                  (e, t) => {
                    h(e, Zt({}, t, { navigate: !1, fetcherKey: s }));
                  },
                  [s, h]
                ),
                v = o.useMemo(
                  () =>
                    o.forwardRef((e, t) =>
                      o.createElement(
                        Nn,
                        Zt({}, e, { navigate: !1, fetcherKey: s, ref: t })
                      )
                    ),
                  [s]
                ),
                y = a.fetchers.get(s) || fe,
                g = i.get(s);
              return o.useMemo(
                () => Zt({ Form: v, submit: m, load: d }, y, { data: g }),
                [v, m, d, y, g]
              );
            }
            function Vn() {
              let e = In(Mn.UseFetchers);
              return Array.from(e.fetchers.entries()).map((e) => {
                let [t, n] = e;
                return Zt({}, n, { key: t });
              });
            }
            const Jn = "react-router-scroll-positions";
            let Qn = {};
            function qn(e) {
              let { getKey: t, storageKey: n } = void 0 === e ? {} : e,
                { router: r } = Un(jn.UseScrollRestoration),
                { restoreScrollPosition: a, preventScrollReset: i } = In(
                  Mn.UseScrollRestoration
                ),
                { basename: l } = o.useContext(Ke),
                u = nt(),
                c = Ct(),
                s = kt();
              o.useEffect(
                () => (
                  (window.history.scrollRestoration = "manual"),
                  () => {
                    window.history.scrollRestoration = "auto";
                  }
                ),
                []
              ),
                (function (e, t) {
                  let { capture: n } = {};
                  o.useEffect(() => {
                    let t = null != n ? { capture: n } : void 0;
                    return (
                      window.addEventListener("pagehide", e, t),
                      () => {
                        window.removeEventListener("pagehide", e, t);
                      }
                    );
                  }, [e, n]);
                })(
                  o.useCallback(() => {
                    if ("idle" === s.state) {
                      let e = (t ? t(u, c) : null) || u.key;
                      Qn[e] = window.scrollY;
                    }
                    try {
                      sessionStorage.setItem(n || Jn, JSON.stringify(Qn));
                    } catch (e) {}
                    window.history.scrollRestoration = "auto";
                  }, [n, t, s.state, u, c])
                ),
                "undefined" != typeof document &&
                  (o.useLayoutEffect(() => {
                    try {
                      let e = sessionStorage.getItem(n || Jn);
                      e && (Qn = JSON.parse(e));
                    } catch (e) {}
                  }, [n]),
                  o.useLayoutEffect(() => {
                    let e =
                        t && "/" !== l
                          ? (e, n) =>
                              t(
                                Zt({}, e, {
                                  pathname: W(e.pathname, l) || e.pathname,
                                }),
                                n
                              )
                          : t,
                      n =
                        null == r
                          ? void 0
                          : r.enableScrollRestoration(
                              Qn,
                              () => window.scrollY,
                              e
                            );
                    return () => n && n();
                  }, [r, l, t]),
                  o.useLayoutEffect(() => {
                    if (!1 !== a)
                      if ("number" != typeof a) {
                        if (u.hash) {
                          let e = document.getElementById(
                            decodeURIComponent(u.hash.slice(1))
                          );
                          if (e) return void e.scrollIntoView();
                        }
                        !0 !== i && window.scrollTo(0, 0);
                      } else window.scrollTo(0, a);
                  }, [u, a, i]));
            }
            function Yn(e, t) {
              let { capture: n } = t || {};
              o.useEffect(() => {
                let t = null != n ? { capture: n } : void 0;
                return (
                  window.addEventListener("beforeunload", e, t),
                  () => {
                    window.removeEventListener("beforeunload", e, t);
                  }
                );
              }, [e, n]);
            }
            function Kn(e) {
              let { when: t, message: n } = e,
                r = Mt(t);
              o.useEffect(() => {
                "blocked" === r.state &&
                  (window.confirm(n) ? setTimeout(r.proceed, 0) : r.reset());
              }, [r, n]),
                o.useEffect(() => {
                  "blocked" !== r.state || t || r.reset();
                }, [r, t]);
            }
            function Gn(e, t) {
              void 0 === t && (t = {});
              let n = o.useContext(vn);
              null == n && p(!1);
              let { basename: r } = Un(jn.useViewTransitionState),
                a = ft(e, { relative: t.relative });
              if (!n.isTransitioning) return !1;
              let i =
                  W(n.currentLocation.pathname, r) ||
                  n.currentLocation.pathname,
                l = W(n.nextLocation.pathname, r) || n.nextLocation.pathname;
              return null != I(a.pathname, l) || null != I(a.pathname, i);
            }
          },
          127: (e, t) => {
            "use strict";
            var n = Symbol.for("react.element"),
              r = Symbol.for("react.portal"),
              o = Symbol.for("react.fragment"),
              a = Symbol.for("react.strict_mode"),
              i = Symbol.for("react.profiler"),
              l = Symbol.for("react.provider"),
              u = Symbol.for("react.context"),
              c = Symbol.for("react.forward_ref"),
              s = Symbol.for("react.suspense"),
              f = Symbol.for("react.memo"),
              d = Symbol.for("react.lazy"),
              p = Symbol.iterator,
              h = {
                isMounted: function () {
                  return !1;
                },
                enqueueForceUpdate: function () {},
                enqueueReplaceState: function () {},
                enqueueSetState: function () {},
              },
              m = Object.assign,
              v = {};
            function y(e, t, n) {
              (this.props = e),
                (this.context = t),
                (this.refs = v),
                (this.updater = n || h);
            }
            function g() {}
            function b(e, t, n) {
              (this.props = e),
                (this.context = t),
                (this.refs = v),
                (this.updater = n || h);
            }
            (y.prototype.isReactComponent = {}),
              (y.prototype.setState = function (e, t) {
                if ("object" != typeof e && "function" != typeof e && null != e)
                  throw Error(
                    "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
                  );
                this.updater.enqueueSetState(this, e, t, "setState");
              }),
              (y.prototype.forceUpdate = function (e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate");
              }),
              (g.prototype = y.prototype);
            var w = (b.prototype = new g());
            (w.constructor = b),
              m(w, y.prototype),
              (w.isPureReactComponent = !0);
            var E = Array.isArray,
              S = Object.prototype.hasOwnProperty,
              x = { current: null },
              _ = { key: !0, ref: !0, __self: !0, __source: !0 };
            function k(e, t, r) {
              var o,
                a = {},
                i = null,
                l = null;
              if (null != t)
                for (o in (void 0 !== t.ref && (l = t.ref),
                void 0 !== t.key && (i = "" + t.key),
                t))
                  S.call(t, o) && !_.hasOwnProperty(o) && (a[o] = t[o]);
              var u = arguments.length - 2;
              if (1 === u) a.children = r;
              else if (1 < u) {
                for (var c = Array(u), s = 0; s < u; s++)
                  c[s] = arguments[s + 2];
                a.children = c;
              }
              if (e && e.defaultProps)
                for (o in (u = e.defaultProps))
                  void 0 === a[o] && (a[o] = u[o]);
              return {
                $$typeof: n,
                type: e,
                key: i,
                ref: l,
                props: a,
                _owner: x.current,
              };
            }
            function P(e) {
              return "object" == typeof e && null !== e && e.$$typeof === n;
            }
            var C = /\/+/g;
            function O(e, t) {
              return "object" == typeof e && null !== e && null != e.key
                ? (function (e) {
                    var t = { "=": "=0", ":": "=2" };
                    return (
                      "$" +
                      e.replace(/[=:]/g, function (e) {
                        return t[e];
                      })
                    );
                  })("" + e.key)
                : t.toString(36);
            }
            function L(e, t, o, a, i) {
              var l = typeof e;
              ("undefined" !== l && "boolean" !== l) || (e = null);
              var u = !1;
              if (null === e) u = !0;
              else
                switch (l) {
                  case "string":
                  case "number":
                    u = !0;
                    break;
                  case "object":
                    switch (e.$$typeof) {
                      case n:
                      case r:
                        u = !0;
                    }
                }
              if (u)
                return (
                  (i = i((u = e))),
                  (e = "" === a ? "." + O(u, 0) : a),
                  E(i)
                    ? ((o = ""),
                      null != e && (o = e.replace(C, "$&/") + "/"),
                      L(i, t, o, "", function (e) {
                        return e;
                      }))
                    : null != i &&
                      (P(i) &&
                        (i = (function (e, t) {
                          return {
                            $$typeof: n,
                            type: e.type,
                            key: t,
                            ref: e.ref,
                            props: e.props,
                            _owner: e._owner,
                          };
                        })(
                          i,
                          o +
                            (!i.key || (u && u.key === i.key)
                              ? ""
                              : ("" + i.key).replace(C, "$&/") + "/") +
                            e
                        )),
                      t.push(i)),
                  1
                );
              if (((u = 0), (a = "" === a ? "." : a + ":"), E(e)))
                for (var c = 0; c < e.length; c++) {
                  var s = a + O((l = e[c]), c);
                  u += L(l, t, o, s, i);
                }
              else if (
                ((s = (function (e) {
                  return null === e || "object" != typeof e
                    ? null
                    : "function" == typeof (e = (p && e[p]) || e["@@iterator"])
                    ? e
                    : null;
                })(e)),
                "function" == typeof s)
              )
                for (e = s.call(e), c = 0; !(l = e.next()).done; )
                  u += L((l = l.value), t, o, (s = a + O(l, c++)), i);
              else if ("object" === l)
                throw (
                  ((t = String(e)),
                  Error(
                    "Objects are not valid as a React child (found: " +
                      ("[object Object]" === t
                        ? "object with keys {" + Object.keys(e).join(", ") + "}"
                        : t) +
                      "). If you meant to render a collection of children, use an array instead."
                  ))
                );
              return u;
            }
            function R(e, t, n) {
              if (null == e) return e;
              var r = [],
                o = 0;
              return (
                L(e, r, "", "", function (e) {
                  return t.call(n, e, o++);
                }),
                r
              );
            }
            function T(e) {
              if (-1 === e._status) {
                var t = e._result;
                (t = t()).then(
                  function (t) {
                    (0 !== e._status && -1 !== e._status) ||
                      ((e._status = 1), (e._result = t));
                  },
                  function (t) {
                    (0 !== e._status && -1 !== e._status) ||
                      ((e._status = 2), (e._result = t));
                  }
                ),
                  -1 === e._status && ((e._status = 0), (e._result = t));
              }
              if (1 === e._status) return e._result.default;
              throw e._result;
            }
            var N = { current: null },
              D = { transition: null },
              j = {
                ReactCurrentDispatcher: N,
                ReactCurrentBatchConfig: D,
                ReactCurrentOwner: x,
              };
            (t.Children = {
              map: R,
              forEach: function (e, t, n) {
                R(
                  e,
                  function () {
                    t.apply(this, arguments);
                  },
                  n
                );
              },
              count: function (e) {
                var t = 0;
                return (
                  R(e, function () {
                    t++;
                  }),
                  t
                );
              },
              toArray: function (e) {
                return (
                  R(e, function (e) {
                    return e;
                  }) || []
                );
              },
              only: function (e) {
                if (!P(e))
                  throw Error(
                    "React.Children.only expected to receive a single React element child."
                  );
                return e;
              },
            }),
              (t.Component = y),
              (t.Fragment = o),
              (t.Profiler = i),
              (t.PureComponent = b),
              (t.StrictMode = a),
              (t.Suspense = s),
              (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = j),
              (t.cloneElement = function (e, t, r) {
                if (null == e)
                  throw Error(
                    "React.cloneElement(...): The argument must be a React element, but you passed " +
                      e +
                      "."
                  );
                var o = m({}, e.props),
                  a = e.key,
                  i = e.ref,
                  l = e._owner;
                if (null != t) {
                  if (
                    (void 0 !== t.ref && ((i = t.ref), (l = x.current)),
                    void 0 !== t.key && (a = "" + t.key),
                    e.type && e.type.defaultProps)
                  )
                    var u = e.type.defaultProps;
                  for (c in t)
                    S.call(t, c) &&
                      !_.hasOwnProperty(c) &&
                      (o[c] = void 0 === t[c] && void 0 !== u ? u[c] : t[c]);
                }
                var c = arguments.length - 2;
                if (1 === c) o.children = r;
                else if (1 < c) {
                  u = Array(c);
                  for (var s = 0; s < c; s++) u[s] = arguments[s + 2];
                  o.children = u;
                }
                return {
                  $$typeof: n,
                  type: e.type,
                  key: a,
                  ref: i,
                  props: o,
                  _owner: l,
                };
              }),
              (t.createContext = function (e) {
                return (
                  ((e = {
                    $$typeof: u,
                    _currentValue: e,
                    _currentValue2: e,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                    _defaultValue: null,
                    _globalName: null,
                  }).Provider = { $$typeof: l, _context: e }),
                  (e.Consumer = e)
                );
              }),
              (t.createElement = k),
              (t.createFactory = function (e) {
                var t = k.bind(null, e);
                return (t.type = e), t;
              }),
              (t.createRef = function () {
                return { current: null };
              }),
              (t.forwardRef = function (e) {
                return { $$typeof: c, render: e };
              }),
              (t.isValidElement = P),
              (t.lazy = function (e) {
                return {
                  $$typeof: d,
                  _payload: { _status: -1, _result: e },
                  _init: T,
                };
              }),
              (t.memo = function (e, t) {
                return {
                  $$typeof: f,
                  type: e,
                  compare: void 0 === t ? null : t,
                };
              }),
              (t.startTransition = function (e) {
                var t = D.transition;
                D.transition = {};
                try {
                  e();
                } finally {
                  D.transition = t;
                }
              }),
              (t.unstable_act = function () {
                throw Error(
                  "act(...) is not supported in production builds of React."
                );
              }),
              (t.useCallback = function (e, t) {
                return N.current.useCallback(e, t);
              }),
              (t.useContext = function (e) {
                return N.current.useContext(e);
              }),
              (t.useDebugValue = function () {}),
              (t.useDeferredValue = function (e) {
                return N.current.useDeferredValue(e);
              }),
              (t.useEffect = function (e, t) {
                return N.current.useEffect(e, t);
              }),
              (t.useId = function () {
                return N.current.useId();
              }),
              (t.useImperativeHandle = function (e, t, n) {
                return N.current.useImperativeHandle(e, t, n);
              }),
              (t.useInsertionEffect = function (e, t) {
                return N.current.useInsertionEffect(e, t);
              }),
              (t.useLayoutEffect = function (e, t) {
                return N.current.useLayoutEffect(e, t);
              }),
              (t.useMemo = function (e, t) {
                return N.current.useMemo(e, t);
              }),
              (t.useReducer = function (e, t, n) {
                return N.current.useReducer(e, t, n);
              }),
              (t.useRef = function (e) {
                return N.current.useRef(e);
              }),
              (t.useState = function (e) {
                return N.current.useState(e);
              }),
              (t.useSyncExternalStore = function (e, t, n) {
                return N.current.useSyncExternalStore(e, t, n);
              }),
              (t.useTransition = function () {
                return N.current.useTransition();
              }),
              (t.version = "18.2.0");
          },
          372: (e, t, n) => {
            "use strict";
            e.exports = n(127);
          },
          745: (e, t) => {
            "use strict";
            function n(e, t) {
              var n = e.length;
              e.push(t);
              e: for (; 0 < n; ) {
                var r = (n - 1) >>> 1,
                  o = e[r];
                if (!(0 < a(o, t))) break e;
                (e[r] = t), (e[n] = o), (n = r);
              }
            }
            function r(e) {
              return 0 === e.length ? null : e[0];
            }
            function o(e) {
              if (0 === e.length) return null;
              var t = e[0],
                n = e.pop();
              if (n !== t) {
                e[0] = n;
                e: for (var r = 0, o = e.length, i = o >>> 1; r < i; ) {
                  var l = 2 * (r + 1) - 1,
                    u = e[l],
                    c = l + 1,
                    s = e[c];
                  if (0 > a(u, n))
                    c < o && 0 > a(s, u)
                      ? ((e[r] = s), (e[c] = n), (r = c))
                      : ((e[r] = u), (e[l] = n), (r = l));
                  else {
                    if (!(c < o && 0 > a(s, n))) break e;
                    (e[r] = s), (e[c] = n), (r = c);
                  }
                }
              }
              return t;
            }
            function a(e, t) {
              var n = e.sortIndex - t.sortIndex;
              return 0 !== n ? n : e.id - t.id;
            }
            if (
              "object" == typeof performance &&
              "function" == typeof performance.now
            ) {
              var i = performance;
              t.unstable_now = function () {
                return i.now();
              };
            } else {
              var l = Date,
                u = l.now();
              t.unstable_now = function () {
                return l.now() - u;
              };
            }
            var c = [],
              s = [],
              f = 1,
              d = null,
              p = 3,
              h = !1,
              m = !1,
              v = !1,
              y = "function" == typeof setTimeout ? setTimeout : null,
              g = "function" == typeof clearTimeout ? clearTimeout : null,
              b = "undefined" != typeof setImmediate ? setImmediate : null;
            function w(e) {
              for (var t = r(s); null !== t; ) {
                if (null === t.callback) o(s);
                else {
                  if (!(t.startTime <= e)) break;
                  o(s), (t.sortIndex = t.expirationTime), n(c, t);
                }
                t = r(s);
              }
            }
            function E(e) {
              if (((v = !1), w(e), !m))
                if (null !== r(c)) (m = !0), D(S);
                else {
                  var t = r(s);
                  null !== t && j(E, t.startTime - e);
                }
            }
            function S(e, n) {
              (m = !1), v && ((v = !1), g(P), (P = -1)), (h = !0);
              var a = p;
              try {
                for (
                  w(n), d = r(c);
                  null !== d && (!(d.expirationTime > n) || (e && !L()));

                ) {
                  var i = d.callback;
                  if ("function" == typeof i) {
                    (d.callback = null), (p = d.priorityLevel);
                    var l = i(d.expirationTime <= n);
                    (n = t.unstable_now()),
                      "function" == typeof l
                        ? (d.callback = l)
                        : d === r(c) && o(c),
                      w(n);
                  } else o(c);
                  d = r(c);
                }
                if (null !== d) var u = !0;
                else {
                  var f = r(s);
                  null !== f && j(E, f.startTime - n), (u = !1);
                }
                return u;
              } finally {
                (d = null), (p = a), (h = !1);
              }
            }
            "undefined" != typeof navigator &&
              void 0 !== navigator.scheduling &&
              void 0 !== navigator.scheduling.isInputPending &&
              navigator.scheduling.isInputPending.bind(navigator.scheduling);
            var x,
              _ = !1,
              k = null,
              P = -1,
              C = 5,
              O = -1;
            function L() {
              return !(t.unstable_now() - O < C);
            }
            function R() {
              if (null !== k) {
                var e = t.unstable_now();
                O = e;
                var n = !0;
                try {
                  n = k(!0, e);
                } finally {
                  n ? x() : ((_ = !1), (k = null));
                }
              } else _ = !1;
            }
            if ("function" == typeof b)
              x = function () {
                b(R);
              };
            else if ("undefined" != typeof MessageChannel) {
              var T = new MessageChannel(),
                N = T.port2;
              (T.port1.onmessage = R),
                (x = function () {
                  N.postMessage(null);
                });
            } else
              x = function () {
                y(R, 0);
              };
            function D(e) {
              (k = e), _ || ((_ = !0), x());
            }
            function j(e, n) {
              P = y(function () {
                e(t.unstable_now());
              }, n);
            }
            (t.unstable_IdlePriority = 5),
              (t.unstable_ImmediatePriority = 1),
              (t.unstable_LowPriority = 4),
              (t.unstable_NormalPriority = 3),
              (t.unstable_Profiling = null),
              (t.unstable_UserBlockingPriority = 2),
              (t.unstable_cancelCallback = function (e) {
                e.callback = null;
              }),
              (t.unstable_continueExecution = function () {
                m || h || ((m = !0), D(S));
              }),
              (t.unstable_forceFrameRate = function (e) {
                0 > e || 125 < e
                  ? console.error(
                      "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                    )
                  : (C = 0 < e ? Math.floor(1e3 / e) : 5);
              }),
              (t.unstable_getCurrentPriorityLevel = function () {
                return p;
              }),
              (t.unstable_getFirstCallbackNode = function () {
                return r(c);
              }),
              (t.unstable_next = function (e) {
                switch (p) {
                  case 1:
                  case 2:
                  case 3:
                    var t = 3;
                    break;
                  default:
                    t = p;
                }
                var n = p;
                p = t;
                try {
                  return e();
                } finally {
                  p = n;
                }
              }),
              (t.unstable_pauseExecution = function () {}),
              (t.unstable_requestPaint = function () {}),
              (t.unstable_runWithPriority = function (e, t) {
                switch (e) {
                  case 1:
                  case 2:
                  case 3:
                  case 4:
                  case 5:
                    break;
                  default:
                    e = 3;
                }
                var n = p;
                p = e;
                try {
                  return t();
                } finally {
                  p = n;
                }
              }),
              (t.unstable_scheduleCallback = function (e, o, a) {
                var i = t.unstable_now();
                switch (
                  ((a =
                    "object" == typeof a &&
                    null !== a &&
                    "number" == typeof (a = a.delay) &&
                    0 < a
                      ? i + a
                      : i),
                  e)
                ) {
                  case 1:
                    var l = -1;
                    break;
                  case 2:
                    l = 250;
                    break;
                  case 5:
                    l = 1073741823;
                    break;
                  case 4:
                    l = 1e4;
                    break;
                  default:
                    l = 5e3;
                }
                return (
                  (e = {
                    id: f++,
                    callback: o,
                    priorityLevel: e,
                    startTime: a,
                    expirationTime: (l = a + l),
                    sortIndex: -1,
                  }),
                  a > i
                    ? ((e.sortIndex = a),
                      n(s, e),
                      null === r(c) &&
                        e === r(s) &&
                        (v ? (g(P), (P = -1)) : (v = !0), j(E, a - i)))
                    : ((e.sortIndex = l), n(c, e), m || h || ((m = !0), D(S))),
                  e
                );
              }),
              (t.unstable_shouldYield = L),
              (t.unstable_wrapCallback = function (e) {
                var t = p;
                return function () {
                  var n = p;
                  p = t;
                  try {
                    return e.apply(this, arguments);
                  } finally {
                    p = n;
                  }
                };
              });
          },
          68: (e, t, n) => {
            "use strict";
            e.exports = n(745);
          },
          361: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => y });
            var r = n(597),
              o = n.n(r),
              a = n(138),
              i = n.n(a),
              l = n(578),
              u = n.n(l),
              c = n(229),
              s = n.n(c),
              f = n(753),
              d = n.n(f),
              p = n(238),
              h = n.n(p),
              m = n(741),
              v = {};
            (v.styleTagTransform = h()),
              (v.setAttributes = s()),
              (v.insert = u().bind(null, "head")),
              (v.domAPI = i()),
              (v.insertStyleElement = d()),
              o()(m.A, v);
            const y = m.A && m.A.locals ? m.A.locals : void 0;
          },
          30: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => y });
            var r = n(597),
              o = n.n(r),
              a = n(138),
              i = n.n(a),
              l = n(578),
              u = n.n(l),
              c = n(229),
              s = n.n(c),
              f = n(753),
              d = n.n(f),
              p = n(238),
              h = n.n(p),
              m = n(490),
              v = {};
            (v.styleTagTransform = h()),
              (v.setAttributes = s()),
              (v.insert = u().bind(null, "head")),
              (v.domAPI = i()),
              (v.insertStyleElement = d()),
              o()(m.A, v);
            const y = m.A && m.A.locals ? m.A.locals : void 0;
          },
          905: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => y });
            var r = n(597),
              o = n.n(r),
              a = n(138),
              i = n.n(a),
              l = n(578),
              u = n.n(l),
              c = n(229),
              s = n.n(c),
              f = n(753),
              d = n.n(f),
              p = n(238),
              h = n.n(p),
              m = n(349),
              v = {};
            (v.styleTagTransform = h()),
              (v.setAttributes = s()),
              (v.insert = u().bind(null, "head")),
              (v.domAPI = i()),
              (v.insertStyleElement = d()),
              o()(m.A, v);
            const y = m.A && m.A.locals ? m.A.locals : void 0;
          },
          597: (e) => {
            "use strict";
            var t = [];
            function n(e) {
              for (var n = -1, r = 0; r < t.length; r++)
                if (t[r].identifier === e) {
                  n = r;
                  break;
                }
              return n;
            }
            function r(e, r) {
              for (var a = {}, i = [], l = 0; l < e.length; l++) {
                var u = e[l],
                  c = r.base ? u[0] + r.base : u[0],
                  s = a[c] || 0,
                  f = "".concat(c, " ").concat(s);
                a[c] = s + 1;
                var d = n(f),
                  p = {
                    css: u[1],
                    media: u[2],
                    sourceMap: u[3],
                    supports: u[4],
                    layer: u[5],
                  };
                if (-1 !== d) t[d].references++, t[d].updater(p);
                else {
                  var h = o(p, r);
                  (r.byIndex = l),
                    t.splice(l, 0, {
                      identifier: f,
                      updater: h,
                      references: 1,
                    });
                }
                i.push(f);
              }
              return i;
            }
            function o(e, t) {
              var n = t.domAPI(t);
              return (
                n.update(e),
                function (t) {
                  if (t) {
                    if (
                      t.css === e.css &&
                      t.media === e.media &&
                      t.sourceMap === e.sourceMap &&
                      t.supports === e.supports &&
                      t.layer === e.layer
                    )
                      return;
                    n.update((e = t));
                  } else n.remove();
                }
              );
            }
            e.exports = function (e, o) {
              var a = r((e = e || []), (o = o || {}));
              return function (e) {
                e = e || [];
                for (var i = 0; i < a.length; i++) {
                  var l = n(a[i]);
                  t[l].references--;
                }
                for (var u = r(e, o), c = 0; c < a.length; c++) {
                  var s = n(a[c]);
                  0 === t[s].references && (t[s].updater(), t.splice(s, 1));
                }
                a = u;
              };
            };
          },
          578: (e) => {
            "use strict";
            var t = {};
            e.exports = function (e, n) {
              var r = (function (e) {
                if (void 0 === t[e]) {
                  var n = document.querySelector(e);
                  if (
                    window.HTMLIFrameElement &&
                    n instanceof window.HTMLIFrameElement
                  )
                    try {
                      n = n.contentDocument.head;
                    } catch (e) {
                      n = null;
                    }
                  t[e] = n;
                }
                return t[e];
              })(e);
              if (!r)
                throw new Error(
                  "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                );
              r.appendChild(n);
            };
          },
          753: (e) => {
            "use strict";
            e.exports = function (e) {
              var t = document.createElement("style");
              return (
                e.setAttributes(t, e.attributes), e.insert(t, e.options), t
              );
            };
          },
          229: (e, t, n) => {
            "use strict";
            e.exports = function (e) {
              var t = n.nc;
              t && e.setAttribute("nonce", t);
            };
          },
          138: (e) => {
            "use strict";
            e.exports = function (e) {
              if ("undefined" == typeof document)
                return { update: function () {}, remove: function () {} };
              var t = e.insertStyleElement(e);
              return {
                update: function (n) {
                  !(function (e, t, n) {
                    var r = "";
                    n.supports &&
                      (r += "@supports (".concat(n.supports, ") {")),
                      n.media && (r += "@media ".concat(n.media, " {"));
                    var o = void 0 !== n.layer;
                    o &&
                      (r += "@layer".concat(
                        n.layer.length > 0 ? " ".concat(n.layer) : "",
                        " {"
                      )),
                      (r += n.css),
                      o && (r += "}"),
                      n.media && (r += "}"),
                      n.supports && (r += "}");
                    var a = n.sourceMap;
                    a &&
                      "undefined" != typeof btoa &&
                      (r +=
                        "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                          btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                          " */"
                        )),
                      t.styleTagTransform(r, e, t.options);
                  })(t, e, n);
                },
                remove: function () {
                  !(function (e) {
                    if (null === e.parentNode) return !1;
                    e.parentNode.removeChild(e);
                  })(t);
                },
              };
            };
          },
          238: (e) => {
            "use strict";
            e.exports = function (e, t) {
              if (t.styleSheet) t.styleSheet.cssText = e;
              else {
                for (; t.firstChild; ) t.removeChild(t.firstChild);
                t.appendChild(document.createTextNode(e));
              }
            };
          },
          301: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            const r = n(372),
              o = n(804),
              a = n(398),
              i = n(109);
            t.default = () =>
              r.createElement(
                a.WorkbenchContext.Provider,
                { value: {} },
                r.createElement(
                  o.HashRouter,
                  null,
                  r.createElement(i.default, null)
                )
              );
          },
          397: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.ManualMenu = void 0);
            const r = n(372),
              o = n(804),
              a = n(334),
              i = n(361);
            t.ManualMenu = (e) => {
              const { menuConfig: t = [] } = e;
              return r.createElement(
                "div",
                { className: i.default.menuWrap },
                (t || []).map((e) =>
                  r.createElement(
                    o.NavLink,
                    { key: e.key, to: `/${e.key}` },
                    r.createElement(a.MenuItem, null, e.title)
                  )
                )
              );
            };
          },
          334: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.MenuItem = void 0);
            const r = n(372),
              o = n(30);
            t.MenuItem = (e) =>
              r.createElement(
                "div",
                { className: o.default.menuItem },
                e.children
              );
          },
          273: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.NavTabs = void 0);
            const r = n(372),
              o = n(372),
              a = n(440);
            t.NavTabs = () => {
              const [e, t] = (0, o.useState)(""),
                [n, i] = (0, o.useState)([]);
              return r.createElement(a.Tabs, {
                hideAdd: !0,
                onChange: (e) => {
                  t(e);
                },
                activeKey: e,
                type: "editable-card",
                onEdit: (e, t) => {},
                items: n,
              });
            };
          },
          457: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.RemoteContainer = t.loadRemoteApp = void 0);
            const r = n(372),
              o = n(804),
              a = n(890),
              i = n(978),
              l = n(182);
            (t.loadRemoteApp = (e) => {
              const t = (0, i.useGetReqHost)(),
                { bundle: n = [] } = (0, a.useGetG_Config)() || {};
              if (!e) return r.createElement("div", null, "暂无此应用哦～～～");
              if (e.bundleName) {
                const o = n.filter((t) => t.bundleName === e.bundleName);
                if (!o[0])
                  return r.createElement("div", null, "暂无此应用哦～～～");
                const a = t + o[0].url.replace("packages://", "");
                return r.createElement(l.default, {
                  width: "100%",
                  height: "100%",
                  name: "react16",
                  url: a,
                  sync: !a,
                  props: () => {},
                });
              }
              return r.createElement("div", null, "123");
            }),
              (t.RemoteContainer = (e) => {
                const { apps: n = [] } = (0, a.useGetG_Config)() || {},
                  { menuConfig: i = [] } = e,
                  l = (e) => {
                    let { url: t = "" } = e;
                    if (t) {
                      t = t.replace("app://", "");
                      const e = n.filter((e) => e.uuid === t);
                      if (e.length) return e[0];
                    }
                    return null;
                  };
                return r.createElement(
                  o.Routes,
                  null,
                  i.map((e) =>
                    r.createElement(o.Route, {
                      path: `/${e.key}`,
                      element: (0, t.loadRemoteApp)(l(e)),
                    })
                  )
                );
              });
          },
          890: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useGetG_Config = void 0),
              (t.useGetG_Config = () => {
                var e, t;
                return (
                  (null ===
                    (t = (e = globalThis["web-base-services"])
                      .getBootstrapConfig) || void 0 === t
                    ? void 0
                    : t.call(e)) || {}
                );
              });
          },
          893: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useGetMenu = void 0);
            const r = n(890);
            t.useGetMenu = () => {
              const { workbenchMenu: e } = (0, r.useGetG_Config)();
              return e;
            };
          },
          978: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.useGetReqHost = void 0);
            const r = n(890);
            t.useGetReqHost = () => {
              const { baseFileHost: e = "" } = (0, r.useGetG_Config)() || {};
              return "development" === window.__SERVER_ENV__ ? "/packages/" : e;
            };
          },
          109: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            const r = n(372),
              o = n(468),
              a = n(397),
              i = n(273),
              l = n(457),
              u = n(905),
              c = n(893),
              s = n(890),
              f = n(246);
            t.default = (e) => {
              const t = (0, c.useGetMenu)(),
                n = (0, s.useGetG_Config)(),
                { accountInfo: d } = n;
              return r.createElement(
                "div",
                { className: u.default.mainPage },
                r.createElement(
                  "div",
                  { className: u.default.leftPane },
                  r.createElement(
                    "div",
                    {
                      className: (0, o.default)(
                        u.default.logo,
                        u.default.section
                      ),
                    },
                    "小铭",
                    r.createElement("img", {
                      src: (null == d ? void 0 : d.logo) || f.default,
                      width: "40",
                      height: "40",
                    })
                  ),
                  r.createElement(
                    "div",
                    {
                      className: (0, o.default)(
                        u.default.menu,
                        u.default.section
                      ),
                    },
                    r.createElement(a.ManualMenu, { menuConfig: t })
                  )
                ),
                r.createElement(
                  "div",
                  { className: u.default.rightPane },
                  r.createElement(
                    "div",
                    {
                      className: (0, o.default)(
                        u.default.tabs,
                        u.default.section
                      ),
                    },
                    r.createElement(i.NavTabs, null)
                  ),
                  r.createElement(
                    "div",
                    {
                      className: (0, o.default)(
                        u.default.contentContainer,
                        u.default.section
                      ),
                    },
                    r.createElement(l.RemoteContainer, { menuConfig: t })
                  )
                )
              );
            };
          },
          398: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.WorkbenchContext = t.globalContext = void 0);
            const r = n(372);
            (t.globalContext = { userInfo: {}, workbenchInfo: {} }),
              (t.WorkbenchContext = r.createContext({
                state: t.globalContext,
                dispatch: () => {
                  throw new Error(
                    "Dispatch Must be called within the component"
                  );
                },
              }));
          },
          182: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => lr });
            var r = n(372),
              o = n(518),
              a = n.n(o);
            function i(e) {
              return (
                (i =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
                    ? function (e) {
                        return typeof e;
                      }
                    : function (e) {
                        return e &&
                          "function" == typeof Symbol &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? "symbol"
                          : typeof e;
                      }),
                i(e)
              );
            }
            function l(e) {
              var t = (function (e, t) {
                if ("object" != i(e) || !e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var r = n.call(e, "string");
                  if ("object" != i(r)) return r;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(e);
              })(e);
              return "symbol" == i(t) ? t : String(t);
            }
            function u(e, t, n) {
              return (
                (t = l(t)) in e
                  ? Object.defineProperty(e, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (e[t] = n),
                e
              );
            }
            function c(e, t, n, r, o, a, i) {
              try {
                var l = e[a](i),
                  u = l.value;
              } catch (e) {
                return void n(e);
              }
              l.done ? t(u) : Promise.resolve(u).then(r, o);
            }
            function s(e) {
              return function () {
                var t = this,
                  n = arguments;
                return new Promise(function (r, o) {
                  var a = e.apply(t, n);
                  function i(e) {
                    c(a, r, o, i, l, "next", e);
                  }
                  function l(e) {
                    c(a, r, o, i, l, "throw", e);
                  }
                  i(void 0);
                });
              };
            }
            var f = n(614),
              d = n.n(f);
            function p(e, t) {
              (null == t || t > e.length) && (t = e.length);
              for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
              return r;
            }
            function h(e, t) {
              if (e) {
                if ("string" == typeof e) return p(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(e)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? p(e, t)
                    : void 0
                );
              }
            }
            function m(e, t) {
              return (
                (function (e) {
                  if (Array.isArray(e)) return e;
                })(e) ||
                (function (e, t) {
                  var n =
                    null == e
                      ? null
                      : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                        e["@@iterator"];
                  if (null != n) {
                    var r,
                      o,
                      a,
                      i,
                      l = [],
                      u = !0,
                      c = !1;
                    try {
                      if (((a = (n = n.call(e)).next), 0 === t)) {
                        if (Object(n) !== n) return;
                        u = !1;
                      } else
                        for (
                          ;
                          !(u = (r = a.call(n)).done) &&
                          (l.push(r.value), l.length !== t);
                          u = !0
                        );
                    } catch (e) {
                      (c = !0), (o = e);
                    } finally {
                      try {
                        if (
                          !u &&
                          null != n.return &&
                          ((i = n.return()), Object(i) !== i)
                        )
                          return;
                      } finally {
                        if (c) throw o;
                      }
                    }
                    return l;
                  }
                })(e, t) ||
                h(e, t) ||
                (function () {
                  throw new TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })()
              );
            }
            var v = "data-wujie-id",
              y = "data-wujie-script-id",
              g = "data-wujie-Flag",
              b = "data-container-position-flag",
              w = "data-container-overflow-flag",
              E = "data-loading-flag",
              S = "data-wujie-attach-css-flag",
              x = "_wujie_all_event",
              _ =
                "position: fixed; z-index: 2147483647; visibility: hidden; inset: 0px; backface-visibility: hidden;",
              k =
                "position: absolute; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; z-index:1;",
              P =
                '<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="30px" viewBox="0 0 24 30">\n<rect x="0" y="13" width="4" height="5" fill="#909090">\n  <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0s" dur="0.6s" repeatCount="indefinite"></animate>\n  <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0s" dur="0.6s" repeatCount="indefinite"></animate>\n</rect>\n<rect x="10" y="13" width="4" height="5" fill="#909090">\n  <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate>\n  <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate>\n</rect>\n<rect x="20" y="13" width="4" height="5" fill="#909090">\n  <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate>\n  <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate>\n</rect>\n</svg>',
              C = "url参数为空",
              O = "子应用调用reload无法生效",
              L = "此报错可以忽略，iframe主动中断主应用代码在子应用运行",
              R = L + "，详见：https://github.com/Tencent/wujie/issues/54",
              T = "事件订阅数量为空",
              N = "脚本请求出现错误",
              D = "样式请求出现错误",
              j = "html请求出现错误",
              M = "无界组件短时间重复渲染了两次，可能存在性能问题请检查代码",
              U = "目标Script尚未准备好或已经被移除";
            function I(e) {
              return "function" == typeof e;
            }
            var A = window.Proxy && window.CustomElementRegistry,
              W = "function" == typeof document.all && void 0 === document.all,
              z = new WeakMap(),
              F = function (e) {
                if (z.has(e)) return !0;
                var t = W
                  ? "function" == typeof e && void 0 !== e
                  : "function" == typeof e;
                return t && z.set(e, t), t;
              },
              B = new WeakMap();
            function H(e) {
              if (B.has(e)) return B.get(e);
              var t =
                0 === e.name.indexOf("bound ") &&
                !e.hasOwnProperty("prototype");
              return B.set(e, t), t;
            }
            var $ = new WeakMap();
            function V(e) {
              var t =
                e.prototype &&
                e.prototype.constructor === e &&
                Object.getOwnPropertyNames(e.prototype).length > 1;
              if (t) return !0;
              if ($.has(e)) return $.get(e);
              var n = t;
              if (!n) {
                var r = e.toString();
                n = /^function\b\s[A-Z].*/.test(r) || /^class\b/.test(r);
              }
              return $.set(e, n), n;
            }
            var J = new WeakMap();
            function Q(e, t) {
              var n = e[t];
              if (J.has(n)) return J.get(n);
              if (F(n) && !H(n) && !V(n)) {
                var r = Function.prototype.bind.call(n, e);
                for (var o in (J.set(n, r), n)) r[o] = n[o];
                return (
                  n.hasOwnProperty("prototype") &&
                    !r.hasOwnProperty("prototype") &&
                    Object.defineProperty(r, "prototype", {
                      value: n.prototype,
                      enumerable: !1,
                      writable: !0,
                    }),
                  r
                );
              }
              return n;
            }
            function q(e) {
              return window.document.querySelector(
                "iframe[".concat(v, '="').concat(e, '"]')
              );
            }
            function Y(e, t) {
              Object.keys(t).forEach(function (n) {
                e.setAttribute(n, t[n]);
              });
            }
            function K(e) {
              if (!e) throw (ie(C), new Error());
              var t = G(e),
                n = t.protocol + "//" + t.host,
                r = t.pathname + t.search + t.hash;
              return (
                r.startsWith("/") || (r = "/" + r),
                { urlElement: t, appHostPath: n, appRoutePath: r }
              );
            }
            function G(e) {
              var t = window.document.createElement("a");
              return (t.href = e), (t.href = t.href), t;
            }
            function X(e) {
              var t = e.search.replace("?", "").split("&"),
                n = {};
              return (
                t.forEach(function (e) {
                  var t = m(e.split("="), 2),
                    r = t[0],
                    o = t[1];
                  r && o && (n[r] = o);
                }),
                n
              );
            }
            function Z(e) {
              var t = X(G(window.location.href));
              return Object.keys(t).includes(e);
            }
            function ee(e, t, n) {
              var r = e.Element.prototype.setAttribute;
              t.prototype.setAttribute = function (e, t) {
                var o = t;
                e === n && (o = ne(t, this.baseURI || "", !0)),
                  r.call(this, e, o);
              };
              var o = Object.getOwnPropertyDescriptor(t.prototype, n),
                a = o.enumerable,
                i = o.configurable,
                l = o.get,
                u = o.set;
              Object.defineProperty(t.prototype, n, {
                enumerable: a,
                configurable: i,
                get: function () {
                  return l.call(this);
                },
                set: function (e) {
                  u.call(this, ne(e, this.baseURI, !0));
                },
              });
            }
            function te(e) {
              var t = e;
              return t.protocol + "//" + t.host + t.pathname;
            }
            function ne(e, t, n) {
              try {
                return e
                  ? n && e.startsWith("#")
                    ? e
                    : new URL(e, t).href
                  : e;
              } catch (t) {
                return e;
              }
            }
            var re =
              window.requestIdleCallback ||
              function (e) {
                return setTimeout(e, 1);
              };
            function oe(e) {
              return "string" == typeof e ? document.querySelector(e) : e;
            }
            function ae(e, t) {
              var n;
              null === (n = console) ||
                void 0 === n ||
                n.warn("[wujie warn]: ".concat(e), t);
            }
            function ie(e, t) {
              var n;
              null === (n = console) ||
                void 0 === n ||
                n.error("[wujie error]: ".concat(e), t);
            }
            function le(e) {
              var t = e.indexOf(">") + 1,
                n = e.lastIndexOf("<");
              return e.substring(t, n);
            }
            function ue(e) {
              if ("object" === i(e)) return "/";
              try {
                var t = new URL(e, location.href),
                  n = t.origin,
                  r = t.pathname.split("/");
                return r.pop(), "".concat(n).concat(r.join("/"), "/");
              } catch (e) {
                return console.warn(e), "";
              }
            }
            function ce(e) {
              return function (t) {
                for (
                  var n = arguments.length,
                    r = new Array(n > 1 ? n - 1 : 0),
                    o = 1;
                  o < n;
                  o++
                )
                  r[o - 1] = arguments[o];
                return e.reduce(function (e, t) {
                  return I(t) ? t.apply(void 0, [e].concat(r)) : e;
                }, t || "");
              };
            }
            function se(e) {
              Promise.resolve().then(e);
            }
            function fe(e, t) {
              for (
                var n = arguments.length,
                  r = new Array(n > 2 ? n - 2 : 0),
                  o = 2;
                o < n;
                o++
              )
                r[o - 2] = arguments[o];
              try {
                e &&
                  e.length > 0 &&
                  e
                    .map(function (e) {
                      return e[t];
                    })
                    .filter(function (e) {
                      return I(e);
                    })
                    .forEach(function (e) {
                      return e.apply(void 0, r);
                    });
              } catch (e) {
                ie(e);
              }
            }
            function de(e) {
              var t;
              return (
                "SCRIPT" ===
                (null === (t = e.tagName) || void 0 === t
                  ? void 0
                  : t.toUpperCase())
              );
            }
            var pe = 1;
            function he(e, t) {
              if (de(e)) {
                var n = t || String(pe++);
                e.setAttribute(y, n);
              }
            }
            function me(e) {
              return de(e) ? e.getAttribute(y) : null;
            }
            function ve(e, t) {
              return {
                name: e.name,
                el: e.el || (null == t ? void 0 : t.el),
                url: e.url || (null == t ? void 0 : t.url),
                html: e.html || (null == t ? void 0 : t.html),
                exec: void 0 !== e.exec ? e.exec : null == t ? void 0 : t.exec,
                replace: e.replace || (null == t ? void 0 : t.replace),
                fetch: e.fetch || (null == t ? void 0 : t.fetch),
                props: e.props || (null == t ? void 0 : t.props),
                sync: void 0 !== e.sync ? e.sync : null == t ? void 0 : t.sync,
                prefix: e.prefix || (null == t ? void 0 : t.prefix),
                loading: e.loading || (null == t ? void 0 : t.loading),
                attrs:
                  void 0 !== e.attrs
                    ? e.attrs
                    : (null == t ? void 0 : t.attrs) || {},
                degradeAttrs:
                  void 0 !== e.degradeAttrs
                    ? e.degradeAttrs
                    : (null == t ? void 0 : t.degradeAttrs) || {},
                fiber:
                  void 0 !== e.fiber
                    ? e.fiber
                    : void 0 === (null == t ? void 0 : t.fiber) ||
                      (null == t ? void 0 : t.fiber),
                alive:
                  void 0 !== e.alive ? e.alive : null == t ? void 0 : t.alive,
                degrade:
                  void 0 !== e.degrade
                    ? e.degrade
                    : null == t
                    ? void 0
                    : t.degrade,
                plugins: e.plugins || (null == t ? void 0 : t.plugins),
                lifecycles: {
                  beforeLoad:
                    e.beforeLoad || (null == t ? void 0 : t.beforeLoad),
                  beforeMount:
                    e.beforeMount || (null == t ? void 0 : t.beforeMount),
                  afterMount:
                    e.afterMount || (null == t ? void 0 : t.afterMount),
                  beforeUnmount:
                    e.beforeUnmount || (null == t ? void 0 : t.beforeUnmount),
                  afterUnmount:
                    e.afterUnmount || (null == t ? void 0 : t.afterUnmount),
                  activated: e.activated || (null == t ? void 0 : t.activated),
                  deactivated:
                    e.deactivated || (null == t ? void 0 : t.deactivated),
                  loadError: e.loadError || (null == t ? void 0 : t.loadError),
                },
              };
            }
            function ye(e, t, n) {
              var r;
              "function" == typeof window.CustomEvent
                ? (r = new CustomEvent(t, { detail: n }))
                : (r = document.createEvent("CustomEvent")).initCustomEvent(
                    t,
                    !0,
                    !1,
                    n
                  ),
                e.dispatchEvent(r);
            }
            function ge() {
              throw (ae(R), new Error(L));
            }
            var be = /(<script[\s\S]*?>)[\s\S]*?<\/script>/gi,
              we =
                /<(script)\s+((?!type=('|")text\/ng\x2Dtemplate\3)[\s\S])*?>[\s\S]*?<\/\1>/i,
              Ee = /.*\ssrc=('|")?([^>'"\s]+)/,
              Se = /.*\stype=('|")?([^>'"\s]+)/,
              xe = /.*\sentry\s*.*/,
              _e = /.*\sasync\s*.*/,
              ke = /.*\sdefer\s*.*/,
              Pe = /.*\snomodule\s*.*/,
              Ce = /.*\stype=('|")?module('|")?\s*.*/,
              Oe = /<(link)\s+[\s\S]*?>/gi,
              Le = /\srel=('|")?(preload|prefetch|modulepreload)\1/,
              Re = /.*\shref=('|")?([^>'"\s]+)/,
              Te = /.*\sas=('|")?font\1.*/,
              Ne = /<style[^>]*>[\s\S]*?<\/style>/gi,
              De = /\s+rel=('|")?stylesheet\1.*/,
              je = /.*\shref=('|")?([^>'"\s]+)/,
              Me = /<!--([\s\S]*?)-->/g,
              Ue = /<link(\s+|\s+[\s\S]+\s+)ignore(\s*|\s+[\s\S]*|=[\s\S]*)>/i,
              Ie = /<style(\s+|\s+[\s\S]+\s+)ignore(\s*|\s+[\s\S]*|=[\s\S]*)>/i,
              Ae =
                /<script(\s+|\s+[\s\S]+\s+)ignore(\s*|\s+[\s\S]*|=[\s\S]*)>/i,
              We = /.*\scrossorigin=?('|")?(use-credentials|anonymous)?('|")?/i;
            function ze(e) {
              return (
                e.startsWith("//") ||
                e.startsWith("http://") ||
                e.startsWith("https://")
              );
            }
            function Fe(e, t) {
              return new URL(e, t).toString();
            }
            function Be(e) {
              var t = /<[-\w]+\s+([^>]*)>/i.exec(e);
              if (!t) return {};
              for (
                var n, r = t[1], o = /([^\s=]+)\s*=\s*(['"])(.*?)\2/g, a = {};
                null !== (n = o.exec(r));

              ) {
                var i = n[1],
                  l = n[3];
                a[i] = l;
              }
              return a;
            }
            var He = function (e) {
                return "\x3c!-- "
                  .concat(
                    arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1]
                      ? "prefetch/preload/modulepreload"
                      : "",
                    " link "
                  )
                  .concat(e, " replaced by wujie --\x3e");
              },
              $e = function (e) {
                return "\x3c!-- inline-style-".concat(
                  e,
                  " replaced by wujie --\x3e"
                );
              },
              Ve = function (e) {
                return "\x3c!-- "
                  .concat(
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "",
                    " script "
                  )
                  .concat(e, " replaced by wujie --\x3e");
              },
              Je = "\x3c!-- inline scripts replaced by wujie --\x3e",
              Qe = function (e) {
                return "\x3c!-- ignore asset ".concat(
                  e || "file",
                  " replaced by wujie --\x3e"
                );
              },
              qe = function (e, t) {
                return "\x3c!-- "
                  .concat(t ? "nomodule" : "module", " script ")
                  .concat(e, " ignored by wujie --\x3e");
              };
            function Ye(e) {
              return (
                (function (e) {
                  if (Array.isArray(e)) return p(e);
                })(e) ||
                (function (e) {
                  if (
                    ("undefined" != typeof Symbol &&
                      null != e[Symbol.iterator]) ||
                    null != e["@@iterator"]
                  )
                    return Array.from(e);
                })(e) ||
                h(e) ||
                (function () {
                  throw new TypeError(
                    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })()
              );
            }
            function Ke(e) {
              var t = e.plugins,
                n = e.replace;
              return function (e) {
                var r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "",
                  o = arguments.length > 2 ? arguments[2] : void 0;
                return ce(
                  t.map(function (e) {
                    return e.cssLoader;
                  })
                )(n ? n(e) : e, r, o);
              };
            }
            function Ge(e, t) {
              var n = t
                .map(function (t) {
                  return t[e];
                })
                .filter(function (e) {
                  return null == e ? void 0 : e.length;
                })
                .reduce(function (e, t) {
                  return e.concat(t);
                }, []);
              return "cssBeforeLoaders" === e ? n.reverse() : n;
            }
            function Xe(e, t) {
              return t
                .map(function (t) {
                  return t[e];
                })
                .filter(function (e) {
                  return null == e ? void 0 : e.length;
                })
                .reduce(function (e, t) {
                  return e.concat(t);
                }, []);
            }
            function Ze(e, t) {
              return t.some(function (t) {
                return "string" == typeof t ? e === t : t.test(e);
              });
            }
            var et = {
              cssLoader: function (e, t, n) {
                var r = t ? ne(t, n) : n;
                return e.replace(
                  /(url\((?!['"]?(?:data):)['"]?)([^'")]*)(['"]?\))/g,
                  function (e, t, n, o) {
                    return t + ne(n, r) + o;
                  }
                );
              },
              cssBeforeLoaders: [
                { content: "html {view-transition-name: none;}" },
              ],
            };
            function tt(e) {
              return Array.isArray(e) ? [et].concat(Ye(e)) : [et];
            }
            function nt(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t &&
                  (r = r.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                  })),
                  n.push.apply(n, r);
              }
              return n;
            }
            function rt(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? nt(Object(n), !0).forEach(function (t) {
                      u(e, t, n[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : nt(Object(n)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(n, t)
                      );
                    });
              }
              return e;
            }
            var ot = {},
              at = {},
              it = {};
            if (!window.fetch)
              throw (
                (ie("window上不存在fetch属性，需要自行polyfill"), new Error())
              );
            var lt = window.fetch.bind(window);
            function ut(e) {
              return e;
            }
            function ct(e, t, n) {
              return st.apply(this, arguments);
            }
            function st() {
              return (st = s(
                d().mark(function e(t, n, r) {
                  var o, a, i, l;
                  return d().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (o = te(t.proxyLocation)),
                            (a = ce(
                              t.plugins.map(function (e) {
                                return e.cssLoader;
                              })
                            )),
                            (i = r().map(function (e) {
                              var t = e.src,
                                n = e.ignore,
                                r = e.contentPromise;
                              return {
                                src: t,
                                ignore: n,
                                contentPromise: r.then(function (e) {
                                  return a(e, t, o);
                                }),
                              };
                            })),
                            (e.next = 5),
                            ft(n, i)
                          );
                        case 5:
                          return (
                            (l = e.sent),
                            e.abrupt("return", t.replace ? t.replace(l) : l)
                          );
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )).apply(this, arguments);
            }
            function ft(e, t) {
              return dt.apply(this, arguments);
            }
            function dt() {
              return (dt = s(
                d().mark(function e(t, n) {
                  var r;
                  return d().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (r = t),
                            e.abrupt(
                              "return",
                              Promise.all(
                                n.map(function (e, t) {
                                  return e.contentPromise.then(function (n) {
                                    e.src
                                      ? (r = r.replace(
                                          He(e.src),
                                          e.ignore
                                            ? '<link href="'.concat(
                                                e.src,
                                                '" rel="stylesheet" type="text/css">'
                                              )
                                            : "<style>/* "
                                                .concat(e.src, " */")
                                                .concat(n, "</style>")
                                        ))
                                      : n &&
                                        (r = r.replace(
                                          $e(t),
                                          "<style>/* inline-style-"
                                            .concat(t, " */")
                                            .concat(n, "</style>")
                                        ));
                                  });
                                })
                              ).then(function () {
                                return r;
                              })
                            )
                          );
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )).apply(this, arguments);
            }
            var pt = function (e) {
                return e.startsWith("<");
              },
              ht = function (e, t, n, r, o) {
                return (
                  t[e] ||
                  (t[e] = n(e)
                    .then(function (n) {
                      if (n.status >= 400) {
                        if (((t[e] = null), r))
                          return (
                            ie(D, { src: e, response: n }),
                            null == o || o(e, new Error(D)),
                            ""
                          );
                        throw (
                          (ie(N, { src: e, response: n }),
                          null == o || o(e, new Error(N)),
                          new Error(N))
                        );
                      }
                      return n.text();
                    })
                    .catch(function (n) {
                      return (
                        (t[e] = null),
                        r
                          ? (ie(D, e), null == o || o(e, n), "")
                          : (ie(N, e), null == o || o(e, n), "")
                      );
                    }))
                );
              };
            function mt(e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : lt,
                n = arguments.length > 2 ? arguments[2] : void 0;
              return e.map(function (e) {
                var r = e.src,
                  o = e.content,
                  a = e.ignore;
                return o
                  ? { src: "", contentPromise: Promise.resolve(o) }
                  : pt(r)
                  ? { src: "", contentPromise: Promise.resolve(le(r)) }
                  : {
                      src: r,
                      ignore: a,
                      contentPromise: a
                        ? Promise.resolve("")
                        : ht(r, ot, t, !0, n),
                    };
              });
            }
            function vt(e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : lt,
                n = arguments.length > 2 ? arguments[2] : void 0,
                r = arguments.length > 3 ? arguments[3] : void 0;
              return e.map(function (e) {
                var o,
                  a = e.src,
                  i = e.async,
                  l = e.defer,
                  u = e.module,
                  c = e.ignore;
                return (
                  (o =
                    (i || l) && a && !u
                      ? new Promise(function (e, o) {
                          return r
                            ? re(function () {
                                return ht(a, at, t, !1, n).then(e, o);
                              })
                            : ht(a, at, t, !1, n).then(e, o);
                        })
                      : (u && a) || c
                      ? Promise.resolve("")
                      : a
                      ? ht(a, at, t, !1, n)
                      : Promise.resolve(e.content)),
                  u && !i && (e.defer = !0),
                  rt(rt({}, e), {}, { contentPromise: o })
                );
              });
            }
            function yt(e) {
              var t,
                n,
                r = e.url,
                o = e.opts,
                a = e.html,
                i = null !== (t = o.fetch) && void 0 !== t ? t : lt,
                l = null === (n = o.fiber) || void 0 === n || n,
                u = o.plugins,
                c = o.loadError,
                s = u
                  ? ce(
                      u.map(function (e) {
                        return e.htmlLoader;
                      })
                    )
                  : ut,
                f = Xe("jsExcludes", u),
                d = Xe("cssExcludes", u),
                p = Xe("jsIgnores", u),
                h = Xe("cssIgnores", u),
                v = ue,
                y = function (e, t, n) {
                  return (
                    t
                      ? Promise.resolve(t)
                      : i(e)
                          .then(function (t) {
                            return t.status >= 400
                              ? (ie(j, { url: e, response: t }),
                                null == c || c(e, new Error(j)),
                                "")
                              : t.text();
                          })
                          .catch(function (t) {
                            return (
                              (it[e] = null),
                              null == c || c(e, t),
                              Promise.reject(t)
                            );
                          })
                  ).then(function (t) {
                    var r = v(e),
                      o = (function (e, t, n) {
                        var r = [],
                          o = [],
                          a = null,
                          i =
                            "noModule" in
                            window.document.createElement("script"),
                          l = {
                            template: e
                              .replace(Me, "")
                              .replace(Oe, function (e) {
                                if (e.match(De)) {
                                  var n = e.match(je),
                                    r = e.match(Ue);
                                  if (n) {
                                    var a = n && n[2],
                                      i = a;
                                    return (
                                      a && !ze(a) && (i = Fe(a, t)),
                                      r ? Qe(i) : (o.push({ src: i }), He(i))
                                    );
                                  }
                                }
                                if (
                                  e.match(Le) &&
                                  e.match(Re) &&
                                  !e.match(Te)
                                ) {
                                  var l = m(e.match(Re), 3)[2];
                                  return He(l, !0);
                                }
                                return e;
                              })
                              .replace(Ne, function (e) {
                                if (Ie.test(e)) return Qe("style file");
                                var t = le(e);
                                return (
                                  o.push({ src: "", content: t }),
                                  $e(o.length - 1)
                                );
                              })
                              .replace(be, function (e, n) {
                                var o,
                                  l = n.match(Ae),
                                  u = !!n.match(Ce),
                                  c = n.match(We),
                                  s = (null == c ? void 0 : c[2]) || "",
                                  f = (i && !!n.match(Pe)) || (!i && u),
                                  d = n.match(Se);
                                if (
                                  (o = d && d[2]) &&
                                  -1 ===
                                    [
                                      "text/javascript",
                                      "module",
                                      "application/javascript",
                                      "text/ecmascript",
                                      "application/ecmascript",
                                    ].indexOf(o)
                                )
                                  return e;
                                if (we.test(e) && n.match(Ee)) {
                                  var p = n.match(xe),
                                    h = n.match(Ee),
                                    m = h && h[2];
                                  if (a && p)
                                    throw new SyntaxError(
                                      "You should not set multiply entry script!"
                                    );
                                  if (
                                    (m && !ze(m) && (m = Fe(m, t)),
                                    (a = a || (p && m)),
                                    l)
                                  )
                                    return Qe(m || "js file");
                                  if (f) return qe(m || "js file", i);
                                  if (m) {
                                    var v = !!n.match(_e),
                                      y = !!n.match(ke);
                                    return (
                                      r.push(
                                        v || y
                                          ? {
                                              async: v,
                                              defer: y,
                                              src: m,
                                              module: u,
                                              crossorigin: !!c,
                                              crossoriginType: s,
                                              attrs: Be(e),
                                            }
                                          : {
                                              src: m,
                                              module: u,
                                              crossorigin: !!c,
                                              crossoriginType: s,
                                              attrs: Be(e),
                                            }
                                      ),
                                      Ve(m, (v ? "async" : y && "defer") || "")
                                    );
                                  }
                                  return e;
                                }
                                if (l) return Qe("js file");
                                if (f) return qe("js file", i);
                                var g = le(e);
                                return (
                                  !g.split(/[\r\n]+/).every(function (e) {
                                    return (
                                      !e.trim() || e.trim().startsWith("//")
                                    );
                                  }) &&
                                    g &&
                                    r.push({
                                      src: "",
                                      content: g,
                                      module: u,
                                      crossorigin: !!c,
                                      crossoriginType: s,
                                      attrs: Be(e),
                                    }),
                                  Je
                                );
                              }),
                            scripts: r,
                            styles: o,
                            entry: a || r[r.length - 1],
                          };
                        return "function" == typeof n && (l = n(l)), l;
                      })(n(t), r),
                      a = o.template,
                      u = o.scripts,
                      s = o.styles;
                    return {
                      template: a,
                      assetPublicPath: r,
                      getExternalScripts: function () {
                        return vt(
                          u
                            .filter(function (e) {
                              return !e.src || !Ze(e.src, f);
                            })
                            .map(function (e) {
                              return rt(
                                rt({}, e),
                                {},
                                { ignore: e.src && Ze(e.src, p) }
                              );
                            }),
                          i,
                          c,
                          l
                        );
                      },
                      getExternalStyleSheets: function () {
                        return mt(
                          s
                            .filter(function (e) {
                              return !e.src || !Ze(e.src, d);
                            })
                            .map(function (e) {
                              return rt(
                                rt({}, e),
                                {},
                                { ignore: e.src && Ze(e.src, h) }
                              );
                            }),
                          i,
                          c
                        );
                      },
                    };
                  });
                };
              return null != o &&
                o.plugins.some(function (e) {
                  return e.htmlLoader;
                })
                ? y(r, a, s)
                : it[r] || (it[r] = y(r, a, s));
            }
            function gt(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            }
            function bt(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, l(r.key), r);
              }
            }
            function wt(e, t, n) {
              return (
                t && bt(e.prototype, t),
                n && bt(e, n),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                e
              );
            }
            function Et(e, t) {
              return (
                (Et = Object.setPrototypeOf
                  ? Object.setPrototypeOf.bind()
                  : function (e, t) {
                      return (e.__proto__ = t), e;
                    }),
                Et(e, t)
              );
            }
            function St(e) {
              return (
                (St = Object.setPrototypeOf
                  ? Object.getPrototypeOf.bind()
                  : function (e) {
                      return e.__proto__ || Object.getPrototypeOf(e);
                    }),
                St(e)
              );
            }
            function xt() {
              try {
                var e = !Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                );
              } catch (e) {}
              return (xt = function () {
                return !!e;
              })();
            }
            function _t(e) {
              var t = "function" == typeof Map ? new Map() : void 0;
              return (
                (_t = function (e) {
                  if (
                    null === e ||
                    !(function (e) {
                      try {
                        return (
                          -1 !==
                          Function.toString.call(e).indexOf("[native code]")
                        );
                      } catch (t) {
                        return "function" == typeof e;
                      }
                    })(e)
                  )
                    return e;
                  if ("function" != typeof e)
                    throw new TypeError(
                      "Super expression must either be null or a function"
                    );
                  if (void 0 !== t) {
                    if (t.has(e)) return t.get(e);
                    t.set(e, n);
                  }
                  function n() {
                    return (function (e, t, n) {
                      if (xt()) return Reflect.construct.apply(null, arguments);
                      var r = [null];
                      r.push.apply(r, t);
                      var o = new (e.bind.apply(e, r))();
                      return n && Et(o, n.prototype), o;
                    })(e, arguments, St(this).constructor);
                  }
                  return (
                    (n.prototype = Object.create(e.prototype, {
                      constructor: {
                        value: n,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0,
                      },
                    })),
                    Et(n, e)
                  );
                }),
                _t(e)
              );
            }
            function kt(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t &&
                  (r = r.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                  })),
                  n.push.apply(n, r);
              }
              return n;
            }
            function Pt(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? kt(Object(n), !0).forEach(function (t) {
                      u(e, t, n[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : kt(Object(n)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(n, t)
                      );
                    });
              }
              return e;
            }
            var Ct = window.__POWERED_BY_WUJIE__
              ? window.__WUJIE.inject.idToSandboxMap
              : new Map();
            function Ot(e) {
              var t;
              return (
                (null === (t = Ct.get(e)) || void 0 === t ? void 0 : t.wujie) ||
                null
              );
            }
            function Lt(e) {
              var t;
              return (
                (null === (t = Ct.get(e)) || void 0 === t
                  ? void 0
                  : t.options) || null
              );
            }
            var Rt = {
                modifyLocalProperties: [
                  "createElement",
                  "createTextNode",
                  "documentURI",
                  "URL",
                  "getElementsByTagName",
                ],
                modifyProperties: [
                  "createElement",
                  "createTextNode",
                  "documentURI",
                  "URL",
                  "getElementsByTagName",
                  "getElementsByClassName",
                  "getElementsByName",
                  "getElementById",
                  "querySelector",
                  "querySelectorAll",
                  "documentElement",
                  "scrollingElement",
                  "forms",
                  "images",
                  "links",
                ],
                shadowProperties: [
                  "activeElement",
                  "childElementCount",
                  "children",
                  "firstElementChild",
                  "firstChild",
                  "fullscreenElement",
                  "lastElementChild",
                  "pictureInPictureElement",
                  "pointerLockElement",
                  "styleSheets",
                ],
                shadowMethods: [
                  "append",
                  "contains",
                  "getSelection",
                  "elementFromPoint",
                  "elementsFromPoint",
                  "getAnimations",
                  "replaceChildren",
                ],
                documentProperties: [
                  "characterSet",
                  "compatMode",
                  "contentType",
                  "designMode",
                  "dir",
                  "doctype",
                  "embeds",
                  "fullscreenEnabled",
                  "hidden",
                  "implementation",
                  "lastModified",
                  "pictureInPictureEnabled",
                  "plugins",
                  "readyState",
                  "referrer",
                  "visibilityState",
                  "fonts",
                ],
                documentMethods: [
                  "execCommand",
                  "caretPositionFromPoint",
                  "createRange",
                  "exitFullscreen",
                  "exitPictureInPicture",
                  "getElementsByTagNameNS",
                  "hasFocus",
                  "prepend",
                ],
                documentEvents: [
                  "onpointerlockchange",
                  "onpointerlockerror",
                  "onbeforecopy",
                  "onbeforecut",
                  "onbeforepaste",
                  "onfreeze",
                  "onresume",
                  "onsearch",
                  "onfullscreenchange",
                  "onfullscreenerror",
                  "onsecuritypolicyviolation",
                  "onvisibilitychange",
                ],
                ownerProperties: ["head", "body"],
              },
              Tt = ["DOMContentLoaded", "readystatechange"],
              Nt = ["onreadystatechange"],
              Dt = [
                "fullscreenchange",
                "fullscreenerror",
                "selectionchange",
                "visibilitychange",
                "wheel",
                "keydown",
                "keypress",
                "keyup",
              ],
              jt = ["gotpointercapture", "lostpointercapture"],
              Mt = [
                "hashchange",
                "popstate",
                "DOMContentLoaded",
                "load",
                "beforeunload",
                "unload",
                "message",
                "error",
                "unhandledrejection",
              ],
              Ut = ["onload", "onbeforeunload", "onunload"],
              It = { IMG: "src", A: "href", SOURCE: "src" },
              At = [
                "getComputedStyle",
                "visualViewport",
                "matchMedia",
                "DOMParser",
              ],
              Wt = [
                /animationFrame$/i,
                /resizeObserver$|mutationObserver$|intersectionObserver$/i,
                /height$|width$|left$/i,
                /^screen/i,
                /X$|Y$/,
              ],
              zt = HTMLElement.prototype.appendChild,
              Ft = HTMLElement.prototype.removeChild,
              Bt = HTMLElement.prototype.contains,
              Ht = HTMLHeadElement.prototype.insertBefore,
              $t = HTMLBodyElement.prototype.insertBefore,
              Vt = Node.prototype.addEventListener,
              Jt = Node.prototype.removeEventListener,
              Qt = window.addEventListener,
              qt = window.removeEventListener,
              Yt = Node.prototype.appendChild,
              Kt = window.__POWERED_BY_WUJIE__
                ? window.__WUJIE_RAW_DOCUMENT_QUERY_SELECTOR__
                : Document.prototype.querySelector;
            function Gt(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t &&
                  (r = r.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                  })),
                  n.push.apply(n, r);
              }
              return n;
            }
            function Xt(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? Gt(Object(n), !0).forEach(function (t) {
                      u(e, t, n[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : Gt(Object(n)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(n, t)
                      );
                    });
              }
              return e;
            }
            function Zt(e, t) {
              var n,
                r,
                o =
                  ((n = new CustomEvent(t)),
                  (r = function () {
                    return e;
                  }),
                  Object.defineProperties(n, {
                    srcElement: { get: r },
                    target: { get: r },
                  }),
                  n);
              I(e["on".concat(t)]) ? e["on".concat(t)](o) : e.dispatchEvent(o);
            }
            function en(e, t) {
              e.innerHTML &&
                !t.degrade &&
                (e._patcher && clearTimeout(e._patcher),
                (e._patcher = setTimeout(function () {
                  var n = m(kn([e.sheet]), 2),
                    r = n[0],
                    o = n[1];
                  r && t.shadowRoot.head.appendChild(r),
                    o && t.shadowRoot.host.appendChild(o),
                    (e._patcher = void 0);
                }, 50)));
            }
            var tn = Promise.resolve();
            function nn(e) {
              return function (t, n) {
                var r,
                  o = this,
                  a = t,
                  i = e.rawDOMAppendOrInsertBefore,
                  l = e.wujieId,
                  u = Ot(l),
                  c = u.styleSheetElements,
                  s = u.replace,
                  f = u.fetch,
                  d = u.plugins,
                  p = u.iframe,
                  h = u.lifecycles,
                  m = u.proxyLocation,
                  v = u.fiber;
                if (
                  ("LINK" !==
                    (null == (r = a.tagName) ? void 0 : r.toUpperCase()) &&
                    "STYLE" !== (null == r ? void 0 : r.toUpperCase()) &&
                    "SCRIPT" !== (null == r ? void 0 : r.toUpperCase()) &&
                    "IFRAME" !== (null == r ? void 0 : r.toUpperCase())) ||
                  !l
                ) {
                  var y = i.call(this, a, n);
                  return (
                    Mn(a, p.contentWindow),
                    fe(d, "appendOrInsertElementHook", a, p.contentWindow),
                    y
                  );
                }
                var b,
                  w = p.contentDocument,
                  E = te(m);
                if (a.tagName)
                  switch (
                    null === (b = a.tagName) || void 0 === b
                      ? void 0
                      : b.toUpperCase()
                  ) {
                    case "LINK":
                      var S = a,
                        x = S.href,
                        _ = S.rel,
                        k = S.type;
                      if (
                        "stylesheet" !== _ &&
                        "text/css" !== k &&
                        !x.endsWith(".css")
                      ) {
                        var P = i.call(this, a, n);
                        return (
                          fe(
                            d,
                            "appendOrInsertElementHook",
                            a,
                            p.contentWindow
                          ),
                          P
                        );
                      }
                      x &&
                        !Ze(x, Xe("cssExcludes", d)) &&
                        mt(
                          [{ src: x, ignore: Ze(x, Xe("cssIgnores", d)) }],
                          f,
                          h.loadError
                        ).forEach(function (e) {
                          var t = e.src,
                            r = e.ignore;
                          return e.contentPromise.then(
                            function (e) {
                              var l = Be(a.outerHTML);
                              if (r && t) i.call(o, a, n);
                              else {
                                var f = w.createElement("style"),
                                  p = Ke({ plugins: d, replace: s });
                                (f.innerHTML = p(e, t, E)),
                                  c.push(f),
                                  Y(f, l),
                                  i.call(o, f, n),
                                  en(f, u),
                                  Zt(a, "load");
                              }
                              a = null;
                            },
                            function () {
                              Zt(a, "error"), (a = null);
                            }
                          );
                        });
                      var C = w.createComment(
                        "dynamic link ".concat(x, " replaced by wujie")
                      );
                      return i.call(this, C, n);
                    case "STYLE":
                      var O = t;
                      c.push(O);
                      var L = O.innerHTML,
                        R = Ke({ plugins: d, replace: s });
                      L && (O.innerHTML = R(L, "", E));
                      var T = i.call(this, a, n);
                      return (
                        (function (e, t, n, r) {
                          var o;
                          if (!e._hasPatchStyle) {
                            var a = Object.getOwnPropertyDescriptor(
                                Element.prototype,
                                "innerHTML"
                              ),
                              i = Object.getOwnPropertyDescriptor(
                                HTMLElement.prototype,
                                "innerText"
                              ),
                              l = Object.getOwnPropertyDescriptor(
                                Node.prototype,
                                "textContent"
                              ),
                              u =
                                null === (o = e.sheet) || void 0 === o
                                  ? void 0
                                  : o.insertRule;
                            c(),
                              a &&
                                Object.defineProperties(e, {
                                  innerHTML: {
                                    get: function () {
                                      return a.get.call(e);
                                    },
                                    set: function (o) {
                                      var i = this;
                                      a.set.call(e, t(o, "", r)),
                                        se(function () {
                                          return en(i, n);
                                        });
                                    },
                                  },
                                }),
                              Object.defineProperties(e, {
                                innerText: {
                                  get: function () {
                                    return i.get.call(e);
                                  },
                                  set: function (o) {
                                    var a = this;
                                    i.set.call(e, t(o, "", r)),
                                      se(function () {
                                        return en(a, n);
                                      });
                                  },
                                },
                                textContent: {
                                  get: function () {
                                    return l.get.call(e);
                                  },
                                  set: function (o) {
                                    var a = this;
                                    l.set.call(e, t(o, "", r)),
                                      se(function () {
                                        return en(a, n);
                                      });
                                  },
                                },
                                appendChild: {
                                  value: function (o) {
                                    var a = this;
                                    if (
                                      (se(function () {
                                        return en(a, n);
                                      }),
                                      o.nodeType === Node.TEXT_NODE)
                                    ) {
                                      var i = Yt.call(
                                        e,
                                        e.ownerDocument.createTextNode(
                                          t(o.textContent, "", r)
                                        )
                                      );
                                      return c(), i;
                                    }
                                    return Yt(o);
                                  },
                                },
                                _hasPatchStyle: {
                                  get: function () {
                                    return !0;
                                  },
                                },
                              });
                          }
                          function c() {
                            u &&
                              (e.sheet.insertRule = function (t, n) {
                                return (
                                  a ? (e.innerHTML += t) : (e.innerText += t),
                                  u.call(e.sheet, t, n)
                                );
                              });
                          }
                        })(O, R, u, E),
                        en(O, u),
                        fe(d, "appendOrInsertElementHook", a, p.contentWindow),
                        T
                      );
                    case "SCRIPT":
                      he(a);
                      var N = a,
                        D = N.src,
                        j = N.text,
                        U = N.type,
                        I = N.crossOrigin;
                      if (D && !Ze(D, Xe("jsExcludes", d))) {
                        var A = function (e) {
                          if (null === u.iframe) return ae(M);
                          Un(
                            Xt(
                              Xt({}, e),
                              {},
                              {
                                onload: function () {
                                  Zt(a, "load"), (a = null);
                                },
                              }
                            ),
                            u.iframe.contentWindow,
                            a
                          );
                        };
                        vt(
                          [
                            {
                              src: D,
                              module: "module" === U,
                              crossorigin: null !== I,
                              crossoriginType: I || "",
                              ignore: Ze(D, Xe("jsIgnores", d)),
                              attrs: Be(a.outerHTML),
                            },
                          ],
                          f,
                          h.loadError,
                          v
                        ).forEach(function (e) {
                          tn = tn.then(function () {
                            return e.contentPromise.then(
                              function (t) {
                                var n;
                                if (null === u.execQueue) return ae(M);
                                var r =
                                  null === (n = u.execQueue) || void 0 === n
                                    ? void 0
                                    : n.length;
                                u.execQueue.push(function () {
                                  return v
                                    ? u.requestIdleCallback(function () {
                                        A(Xt(Xt({}, e), {}, { content: t }));
                                      })
                                    : A(Xt(Xt({}, e), {}, { content: t }));
                                }),
                                  r || u.execQueue.shift()();
                              },
                              function () {
                                Zt(a, "error"), (a = null);
                              }
                            );
                          });
                        });
                      } else {
                        var W,
                          z =
                            null === (W = u.execQueue) || void 0 === W
                              ? void 0
                              : W.length;
                        u.execQueue.push(function () {
                          return v
                            ? u.requestIdleCallback(function () {
                                Un(
                                  {
                                    src: null,
                                    content: j,
                                    attrs: Be(a.outerHTML),
                                  },
                                  u.iframe.contentWindow,
                                  a
                                );
                              })
                            : Un(
                                {
                                  src: null,
                                  content: j,
                                  attrs: Be(a.outerHTML),
                                },
                                u.iframe.contentWindow,
                                a
                              );
                        }),
                          z || u.execQueue.shift()();
                      }
                      var F = w.createComment(
                        "dynamic script ".concat(D, " replaced by wujie")
                      );
                      return i.call(this, F, n);
                    case "IFRAME":
                      if ("" === a.getAttribute(g))
                        return Yt.call(Kt.call(this.ownerDocument, "html"), a);
                      var B = i.call(this, a, n);
                      return (
                        fe(d, "appendOrInsertElementHook", a, p.contentWindow),
                        B
                      );
                  }
              };
            }
            function rn(e, t) {
              var n = me(e),
                r = Ot(t).iframe,
                o = r.contentWindow.__WUJIE_RAW_DOCUMENT_HEAD__.querySelector(
                  "script[".concat(y, "='").concat(n, "']")
                );
              return (
                null === o &&
                  ae(U, "<script ".concat(y, "='").concat(n, "'/>")),
                { targetScript: o, iframe: r }
              );
            }
            function on(e) {
              return function (t) {
                var n = t,
                  r = e.rawElementContains,
                  o = e.wujieId;
                return n && de(n) ? null !== rn(n, o).targetScript : r(n);
              };
            }
            function an(e) {
              var t = new Map();
              (e._cacheListeners = t),
                (e.addEventListener = function (n, r, o) {
                  var a = t.get(n) || [];
                  return t.set(n, [].concat(Ye(a), [r])), Vt.call(e, n, r, o);
                }),
                (e.removeEventListener = function (n, r, o) {
                  var a = t.get(n),
                    i = null == a ? void 0 : a.indexOf(r);
                  return (
                    null != a && a.length && -1 !== i && a.splice(i, 1),
                    Jt.call(e, n, r, o)
                  );
                });
            }
            function ln(e) {
              Ye(e._cacheListeners.entries()).forEach(function (t) {
                var n = m(t, 2),
                  r = n[0];
                n[1].forEach(function (t) {
                  return Jt.call(e, r, t);
                });
              });
            }
            function un(e, t, n) {
              var r;
              n || (an(e.head), an(e.body)),
                (e.head.appendChild = nn({
                  rawDOMAppendOrInsertBefore: Yt,
                  wujieId: t,
                })),
                (e.head.insertBefore = nn({
                  rawDOMAppendOrInsertBefore: Ht,
                  wujieId: t,
                })),
                (e.head.removeChild =
                  ((r = { rawElementRemoveChild: Ft.bind(e.head), wujieId: t }),
                  function (e) {
                    var t = e,
                      n = r.rawElementRemoveChild,
                      o = r.wujieId;
                    if (t && de(t)) {
                      var a = rn(t, o),
                        i = a.targetScript,
                        l = a.iframe;
                      return null !== i
                        ? l.contentWindow.__WUJIE_RAW_DOCUMENT_HEAD__.removeChild(
                            i
                          )
                        : null;
                    }
                    return n(t);
                  })),
                (e.head.contains = on({
                  rawElementContains: Bt.bind(e.head),
                  wujieId: t,
                })),
                (e.contains = on({
                  rawElementContains: Bt.bind(e),
                  wujieId: t,
                })),
                (e.body.appendChild = nn({
                  rawDOMAppendOrInsertBefore: Yt,
                  wujieId: t,
                })),
                (e.body.insertBefore = nn({
                  rawDOMAppendOrInsertBefore: $t,
                  wujieId: t,
                }));
            }
            function cn(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t &&
                  (r = r.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                  })),
                  n.push.apply(n, r);
              }
              return n;
            }
            function sn(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? cn(Object(n), !0).forEach(function (t) {
                      u(e, t, n[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : cn(Object(n)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(n, t)
                      );
                    });
              }
              return e;
            }
            function fn(e) {
              var t = (function () {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {})
                    ),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              })();
              return function () {
                var n,
                  r = St(e);
                if (t) {
                  var o = St(this).constructor;
                  n = Reflect.construct(r, arguments, o);
                } else n = r.apply(this, arguments);
                return (function (e, t) {
                  if (t && ("object" === i(t) || "function" == typeof t))
                    return t;
                  if (void 0 !== t)
                    throw new TypeError(
                      "Derived constructors may only return object or undefined"
                    );
                  return (function (e) {
                    if (void 0 === e)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return e;
                  })(e);
                })(this, n);
              };
            }
            var dn = { ":root": ":host" };
            function pn(e, t) {
              var n = oe(t);
              return (
                n &&
                  !n.contains(e) &&
                  (n.querySelector("div[".concat(E, "]")) || Sn(n),
                  e && zt.call(n, e)),
                n
              );
            }
            function hn(e, t) {
              var n = (function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    n = document.createElement("iframe");
                  return (
                    Y(
                      n,
                      sn(
                        sn({}, t),
                        {},
                        u(
                          {
                            style: ["height:100%;width:100%", t.style].join(
                              ";"
                            ),
                          },
                          v,
                          e
                        )
                      )
                    ),
                    n
                  );
                })(
                  e,
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {}
                ),
                r = pn(n, t),
                o = n.contentWindow.document;
              return (
                o.open(),
                o.write(
                  "<!DOCTYPE html><html><head></head><body></body></html>"
                ),
                o.close(),
                { iframe: n, container: r }
              );
            }
            function mn(e, t) {
              return vn.apply(this, arguments);
            }
            function vn() {
              return (vn = s(
                d().mark(function e(t, n) {
                  var r, o, a, i, l, u, c, s;
                  return d().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (r = t.iframe.contentDocument),
                            (o = t.plugins),
                            (a = t.replace),
                            (i = t.proxyLocation),
                            (l = Ke({ plugins: o, replace: a })),
                            (u = Ge("cssBeforeLoaders", o)),
                            (c = Ge("cssAfterLoaders", o)),
                            (s = te(i)),
                            (e.next = 8),
                            Promise.all([
                              Promise.all(
                                mt(u, t.fetch, t.lifecycles.loadError).map(
                                  function (e) {
                                    var t = e.src;
                                    return e.contentPromise.then(function (e) {
                                      return { src: t, content: e };
                                    });
                                  }
                                )
                              ).then(function (e) {
                                e.forEach(function (e) {
                                  var t = e.src,
                                    o = e.content;
                                  if (o) {
                                    var a = r.createElement("style");
                                    a.setAttribute("type", "text/css"),
                                      a.appendChild(
                                        r.createTextNode(o ? l(o, t, s) : o)
                                      );
                                    var i = n.querySelector("head"),
                                      u = n.querySelector("body");
                                    n.insertBefore(a, i || u || n.firstChild);
                                  }
                                });
                              }),
                              Promise.all(
                                mt(c, t.fetch, t.lifecycles.loadError).map(
                                  function (e) {
                                    var t = e.src;
                                    return e.contentPromise.then(function (e) {
                                      return { src: t, content: e };
                                    });
                                  }
                                )
                              ).then(function (e) {
                                e.forEach(function (e) {
                                  var t = e.src,
                                    o = e.content;
                                  if (o) {
                                    var a = r.createElement("style");
                                    a.setAttribute("type", "text/css"),
                                      a.appendChild(
                                        r.createTextNode(o ? l(o, t, s) : o)
                                      ),
                                      n.appendChild(a);
                                  }
                                });
                              }),
                            ]).then(
                              function () {
                                return n;
                              },
                              function () {
                                return n;
                              }
                            )
                          );
                        case 8:
                          return e.abrupt("return", e.sent);
                        case 9:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )).apply(this, arguments);
            }
            function yn(e, t) {
              var n = e.__WUJIE,
                r = n.head,
                o = n.body,
                a = n.alive,
                i = n.execFlag,
                l = e.document,
                u = l.createElement("html");
              (u.innerHTML = t),
                !a && i
                  ? (u = (function (e, t, n) {
                      var r = e.querySelector("head"),
                        o = e.querySelector("body");
                      if (r) {
                        for (; r.firstChild; )
                          Yt.call(t, r.firstChild.cloneNode(!0)),
                            r.removeChild(r.firstChild);
                        r.parentNode.replaceChild(t, r);
                      }
                      if (o) {
                        for (; o.firstChild; )
                          Yt.call(n, o.firstChild.cloneNode(!0)),
                            o.removeChild(o.firstChild);
                        o.parentNode.replaceChild(n, o);
                      }
                      return e;
                    })(u, r, o))
                  : ((n.head = u.querySelector("head")),
                    (n.body = u.querySelector("body")));
              for (
                var c = l.createTreeWalker(
                    u,
                    NodeFilter.SHOW_ELEMENT,
                    null,
                    !1
                  ),
                  s = c.currentNode;
                s;

              ) {
                Mn(s, e);
                var f = It[s.tagName],
                  d = s[f];
                f && s.setAttribute(f, ne(d, s.baseURI || "")),
                  (s = c.nextNode());
              }
              if (!u.querySelector("head")) {
                var p = l.createElement("head");
                u.appendChild(p);
              }
              if (!u.querySelector("body")) {
                var h = l.createElement("body");
                u.appendChild(h);
              }
              return u;
            }
            function gn(e, t, n) {
              return bn.apply(this, arguments);
            }
            function bn() {
              return (bn = s(
                d().mark(function e(t, n, r) {
                  var o, a, i;
                  return d().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (o = yn(n, r)), (e.next = 3), mn(n.__WUJIE, o);
                        case 3:
                          (a = e.sent),
                            t.appendChild(a),
                            (i = document.createElement("div")).setAttribute(
                              "style",
                              _
                            ),
                            a.insertBefore(i, a.firstChild),
                            (t.head = t.querySelector("head")),
                            (t.body = t.querySelector("body")),
                            Object.defineProperty(t.firstChild, "parentNode", {
                              enumerable: !0,
                              configurable: !0,
                              get: function () {
                                return n.document;
                              },
                            }),
                            un(t, n.__WUJIE.id, !1);
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )).apply(this, arguments);
            }
            function wn(e, t, n) {
              return En.apply(this, arguments);
            }
            function En() {
              return (En = s(
                d().mark(function e(t, n, r) {
                  var o, a;
                  return d().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (o = yn(n, r)), (e.next = 3), mn(n.__WUJIE, o);
                        case 3:
                          (a = e.sent),
                            t.replaceChild(a, t.documentElement),
                            Object.defineProperty(
                              t.documentElement,
                              "parentNode",
                              {
                                enumerable: !0,
                                configurable: !0,
                                get: function () {
                                  return n.document;
                                },
                              }
                            ),
                            un(t, n.__WUJIE.id, !0);
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )).apply(this, arguments);
            }
            function Sn(e) {
              for (; null != e && e.firstChild; ) Ft.call(e, e.firstChild);
            }
            function xn(e, t) {
              var n = oe(e);
              Sn(n);
              var r = null;
              try {
                r = window.getComputedStyle(n);
              } catch (e) {
                return;
              }
              "static" === r.position
                ? (n.setAttribute(b, r.position),
                  n.setAttribute(w, "visible" === r.overflow ? "" : r.overflow),
                  n.style.setProperty("position", "relative"),
                  n.style.setProperty("overflow", "hidden"))
                : ["relative", "sticky"].includes(r.position) &&
                  (n.setAttribute(
                    w,
                    "visible" === r.overflow ? "" : r.overflow
                  ),
                  n.style.setProperty("overflow", "hidden"));
              var o = document.createElement("div");
              o.setAttribute(E, ""),
                o.setAttribute("style", k),
                t ? o.appendChild(t) : (o.innerHTML = P),
                n.appendChild(o);
            }
            function _n(e) {
              var t = e.getAttribute(b),
                n = e.getAttribute(w);
              t && e.style.removeProperty("position"),
                null !== n &&
                  (n
                    ? e.style.setProperty("overflow", n)
                    : e.style.removeProperty("overflow")),
                e.removeAttribute(b),
                e.removeAttribute(w);
              var r = e.querySelector("div[".concat(E, "]"));
              r && e.removeChild(r);
            }
            function kn(e) {
              for (var t = [], n = [], r = /:root/g, o = 0; o < e.length; o++)
                for (
                  var a,
                    i,
                    l =
                      null !==
                        (a =
                          null === (i = e[o]) || void 0 === i
                            ? void 0
                            : i.cssRules) && void 0 !== a
                        ? a
                        : [],
                    u = 0;
                  u < l.length;
                  u++
                ) {
                  var c = l[u].cssText;
                  r.test(c) &&
                    t.push(
                      c.replace(r, function (e) {
                        return dn[e];
                      })
                    ),
                    l[u].type === CSSRule.FONT_FACE_RULE && n.push(c);
                }
              var s = null,
                f = null;
              return (
                t.length &&
                  ((s = window.document.createElement("style")).innerHTML =
                    t.join("")),
                n.length &&
                  ((f = window.document.createElement("style")).innerHTML =
                    n.join("")),
                [s, f]
              );
            }
            function Pn(e) {
              var t = e.__WUJIE,
                n = t.sync,
                r = t.id,
                o = t.prefix,
                a = G(window.location.href),
                i = X(a);
              if (!n && !i[r]) return null;
              var l = e.location.pathname + e.location.search + e.location.hash,
                u = "";
              o &&
                Object.keys(o).forEach(function (e) {
                  var t = o[e];
                  l.startsWith(t) && (!u || t.length > o[u].length) && (u = e);
                }),
                n
                  ? (i[r] = window.encodeURIComponent(
                      u ? l.replace(o[u], "{".concat(u, "}")) : l
                    ))
                  : delete i[r];
              var c =
                "?" +
                Object.keys(i)
                  .map(function (e) {
                    return e + "=" + i[e];
                  })
                  .join("&");
              (a.search = c),
                a.href !== window.location.href &&
                  window.history.replaceState(null, "", a.href),
                (a = null);
            }
            function Cn(e) {
              var t = e.location,
                n = t.pathname,
                r = t.search,
                o = t.hash,
                a = e.__WUJIE,
                i = a.id,
                l = a.url,
                u = a.sync,
                c = a.execFlag,
                s = a.prefix,
                f = a.inject,
                d =
                  u && !c
                    ? (function (e, t) {
                        var n,
                          r = G(window.location.href),
                          o = X(r);
                        r = null;
                        var a = window.decodeURIComponent(o[e] || ""),
                          i =
                            null === (n = a.match(/^{([^}]*)}/)) || void 0 === n
                              ? void 0
                              : n[1];
                        return t && i ? a.replace("{".concat(i, "}"), t[i]) : a;
                      })(i, s)
                    : l,
                p = K((/^http/.test(d) ? null : d) || l).appRoutePath;
              n + r + o !== p &&
                e.history.replaceState(null, "", f.mainHostPath + p);
            }
            function On(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t &&
                  (r = r.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                  })),
                  n.push.apply(n, r);
              }
              return n;
            }
            function Ln(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? On(Object(n), !0).forEach(function (t) {
                      u(e, t, n[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : On(Object(n)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(n, t)
                      );
                    });
              }
              return e;
            }
            function Rn(e, t, n) {
              (e.__WUJIE = t),
                (e.__WUJIE_PUBLIC_PATH__ = n + "/"),
                (e.$wujie = t.provide),
                (e.__WUJIE_RAW_WINDOW__ = e);
            }
            function Tn(e, t, n) {
              var r,
                o = new URL(
                  null === (r = e.location.href) || void 0 === r
                    ? void 0
                    : r.replace(n, ""),
                  t
                ),
                a = Kt.call(e.document, "base");
              a && a.setAttribute("href", t + o.pathname);
            }
            function Nn(e, t) {
              for (
                var n = t.__WUJIE,
                  r = new WeakMap(),
                  o = document.createTreeWalker(
                    e,
                    NodeFilter.SHOW_ELEMENT,
                    null,
                    !1
                  ),
                  a = o.currentNode;
                a;

              ) {
                var i = n.elementEventCacheMap.get(a);
                null != i &&
                  i.length &&
                  (r.set(a, i),
                  i.forEach(function (e) {
                    a.addEventListener(e.type, e.handler, e.options);
                  })),
                  (a = o.nextNode());
              }
              n.elementEventCacheMap = r;
            }
            function Dn(e, t, n) {
              var r = n.__WUJIE,
                o = new WeakMap(),
                a = r.elementEventCacheMap.get(e);
              null != a &&
                a.length &&
                (o.set(t, a),
                a.forEach(function (e) {
                  t.addEventListener(e.type, e.handler, e.options);
                })),
                (r.elementEventCacheMap = o);
            }
            function jn(e, t) {
              Object.defineProperty(e.Event.prototype, "timeStamp", {
                get: function () {
                  return t.document.createEvent("Event").timeStamp;
                },
              });
            }
            function Mn(e, t) {
              var n = t.__WUJIE.proxyLocation;
              if (!e._hasPatch) {
                try {
                  Object.defineProperties(e, {
                    baseURI: {
                      configurable: !0,
                      get: function () {
                        return n.protocol + "//" + n.host + n.pathname;
                      },
                      set: void 0,
                    },
                    ownerDocument: {
                      configurable: !0,
                      get: function () {
                        return t.document;
                      },
                    },
                    _hasPatch: {
                      get: function () {
                        return !0;
                      },
                    },
                  });
                } catch (e) {
                  console.warn(e);
                }
                fe(t.__WUJIE.plugins, "patchElementHook", e, t);
              }
            }
            function Un(e, t, n) {
              var r = e,
                o = r.src,
                a = r.module,
                i = r.content,
                l = r.crossorigin,
                u = r.crossoriginType,
                c = r.async,
                s = r.attrs,
                f = r.callback,
                d = r.onload,
                p = t.document.createElement("script"),
                h = t.document.createElement("script"),
                m = t.__WUJIE,
                v = m.replace,
                y = m.plugins,
                g = m.proxyLocation,
                b = (function (e) {
                  var t = e.plugins,
                    n = e.replace;
                  return function (e) {
                    var r =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : "",
                      o = arguments.length > 2 ? arguments[2] : void 0;
                    return ce(
                      t.map(function (e) {
                        return e.jsLoader;
                      })
                    )(n ? n(e) : e, r, o);
                  };
                })({ plugins: y, replace: v }),
                w = b(i, o, te(g));
              if (
                (s &&
                  Object.keys(s)
                    .filter(function (t) {
                      return !Object.keys(e).includes(t);
                    })
                    .forEach(function (e) {
                      return p.setAttribute(e, String(s[e]));
                    }),
                i)
              ) {
                t.__WUJIE.degrade ||
                  a ||
                  (w =
                    "(function(window, self, global, location) {\n      ".concat(
                      w,
                      "\n}).bind(window.__WUJIE.proxy)(\n  window.__WUJIE.proxy,\n  window.__WUJIE.proxy,\n  window.__WUJIE.proxy,\n  window.__WUJIE.proxyLocation,\n);"
                    ));
                var E = Object.getOwnPropertyDescriptor(p, "src");
                if ((null != E && E.configurable) || !E)
                  try {
                    Object.defineProperty(p, "src", {
                      get: function () {
                        return o || "";
                      },
                    });
                  } catch (e) {
                    console.warn(e);
                  }
              } else
                o && p.setAttribute("src", o),
                  l && p.setAttribute("crossorigin", u);
              a && p.setAttribute("type", "module"),
                (p.textContent = w || ""),
                (h.textContent =
                  "if(window.__WUJIE.execQueue && window.__WUJIE.execQueue.length){ window.__WUJIE.execQueue.shift()()}");
              var S = Kt.call(t.document, "head"),
                x = function () {
                  return !c && S.appendChild(h);
                },
                _ = function () {
                  null == d || d(), x();
                };
              if (/^<!DOCTYPE html/i.test(w)) return ie(N, e), x();
              n && he(p, me(n));
              var k = !i && o;
              k && ((p.onload = _), (p.onerror = _)),
                S.appendChild(p),
                null == f || f(t),
                fe(y, "appendOrInsertElementHook", p, t, n),
                !k && _();
            }
            function In(e, t) {
              var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                r = window.document.createElement("iframe");
              Y(
                r,
                Ln(
                  Ln({}, n),
                  {},
                  {
                    src: e,
                    style: ["height:100%;width:100%", n.style].join(";"),
                  }
                )
              ),
                pn(r, t);
            }
            function An(e, t, n, r, o) {
              var a = window.document.createElement("iframe");
              Y(
                a,
                Ln(
                  Ln({ src: n, style: "display: none" }, t),
                  {},
                  u({ name: e.id }, g, "")
                )
              ),
                window.document.body.appendChild(a);
              var l = a.contentWindow;
              return (
                Rn(l, e, r),
                (e.iframeReady = (function (e) {
                  var t = e.document;
                  return new Promise(function (n) {
                    !(function r() {
                      setTimeout(function () {
                        var o;
                        try {
                          o = e.document;
                        } catch (e) {
                          o = null;
                        }
                        o && o != t
                          ? (e.stop ? e.stop() : e.document.execCommand("Stop"),
                            n())
                          : r();
                      }, 1);
                    })();
                  });
                })(l).then(function () {
                  l.__WUJIE || Rn(l, e, r),
                    (function (e, t, n, r) {
                      var o = e.document,
                        a =
                          window.document.implementation.createHTMLDocument(""),
                        l = o.importNode(a.documentElement, !0);
                      o.documentElement
                        ? o.replaceChild(l, o.documentElement)
                        : o.appendChild(l),
                        (e.__WUJIE_RAW_DOCUMENT_HEAD__ = o.head),
                        (e.__WUJIE_RAW_DOCUMENT_QUERY_SELECTOR__ =
                          e.Document.prototype.querySelector),
                        (e.__WUJIE_RAW_DOCUMENT_QUERY_SELECTOR_ALL__ =
                          e.Document.prototype.querySelectorAll),
                        (e.__WUJIE_RAW_DOCUMENT_CREATE_ELEMENT__ =
                          e.Document.prototype.createElement),
                        (e.__WUJIE_RAW_DOCUMENT_CREATE_TEXT_NODE__ =
                          e.Document.prototype.createTextNode),
                        (function (e, t) {
                          var n = e.document,
                            r = n.createElement("base"),
                            o = G(e.location.href),
                            a = G(t);
                          r.setAttribute(
                            "href",
                            a.protocol + "//" + a.host + o.pathname
                          ),
                            n.head.appendChild(r);
                        })(e, t.url),
                        (function (e, t, n) {
                          var r = e.history,
                            o = r.pushState,
                            a = r.replaceState;
                          (r.pushState = function (a, i, l) {
                            var u =
                                n +
                                e.location.pathname +
                                e.location.search +
                                e.location.hash,
                              c = ne(null == l ? void 0 : l.replace(t, ""), u),
                              s = void 0 === l;
                            o.call(r, a, i, s ? void 0 : c),
                              s || (Tn(e, t, n), Pn(e));
                          }),
                            (r.replaceState = function (o, i, l) {
                              var u =
                                  n +
                                  e.location.pathname +
                                  e.location.search +
                                  e.location.hash,
                                c = ne(
                                  null == l ? void 0 : l.replace(t, ""),
                                  u
                                ),
                                s = void 0 === l;
                              a.call(r, o, i, s ? void 0 : c),
                                s || (Tn(e, t, n), Pn(e));
                            });
                        })(e, r, n),
                        (function (e) {
                          (e.__WUJIE_EVENTLISTENER__ =
                            e.__WUJIE_EVENTLISTENER__ || new Set()),
                            (e.addEventListener = function (t, n, r) {
                              if (
                                (fe(
                                  e.__WUJIE.plugins,
                                  "windowAddEventListenerHook",
                                  e,
                                  t,
                                  n,
                                  r
                                ),
                                e.__WUJIE_EVENTLISTENER__.add({
                                  type: t,
                                  listener: n,
                                  options: r,
                                }),
                                Mt.includes(t) ||
                                  ("object" === i(r) && r.targetWindow))
                              ) {
                                var o =
                                  "object" === i(r) && r.targetWindow
                                    ? null == r
                                      ? void 0
                                      : r.targetWindow
                                    : e;
                                return Qt.call(o, t, n, r);
                              }
                              Qt.call(
                                window.__WUJIE_RAW_WINDOW__ || window,
                                t,
                                n,
                                r
                              );
                            }),
                            (e.removeEventListener = function (t, n, r) {
                              if (
                                (fe(
                                  e.__WUJIE.plugins,
                                  "windowRemoveEventListenerHook",
                                  e,
                                  t,
                                  n,
                                  r
                                ),
                                e.__WUJIE_EVENTLISTENER__.forEach(function (o) {
                                  o.listener === n &&
                                    o.type === t &&
                                    r == o.options &&
                                    e.__WUJIE_EVENTLISTENER__.delete(o);
                                }),
                                Mt.includes(t) ||
                                  ("object" === i(r) && r.targetWindow))
                              ) {
                                var o =
                                  "object" === i(r) && r.targetWindow
                                    ? null == r
                                      ? void 0
                                      : r.targetWindow
                                    : e;
                                return qt.call(o, t, n, r);
                              }
                              qt.call(
                                window.__WUJIE_RAW_WINDOW__ || window,
                                t,
                                n,
                                r
                              );
                            });
                        })(e),
                        t.degrade &&
                          (function (e) {
                            var t = e.__WUJIE;
                            (e.Node.prototype.addEventListener = function (
                              e,
                              n,
                              r
                            ) {
                              var o = t.elementEventCacheMap.get(this);
                              return (
                                o
                                  ? o.find(function (t) {
                                      return t.type === e && t.handler === n;
                                    }) ||
                                    o.push({ type: e, handler: n, options: r })
                                  : t.elementEventCacheMap.set(this, [
                                      { type: e, handler: n, options: r },
                                    ]),
                                Vt.call(this, e, n, r)
                              );
                            }),
                              (e.Node.prototype.removeEventListener = function (
                                e,
                                n,
                                r
                              ) {
                                var o = t.elementEventCacheMap.get(this);
                                if (o) {
                                  var a =
                                    null == o
                                      ? void 0
                                      : o.findIndex(function (t) {
                                          return (
                                            t.type === e && t.handler === n
                                          );
                                        });
                                  o.splice(a, 1);
                                }
                                return (
                                  (null != o && o.length) ||
                                    t.elementEventCacheMap.delete(this),
                                  Jt.call(this, e, n, r)
                                );
                              });
                          })(e),
                        (function (e) {
                          e.addEventListener("hashchange", function () {
                            return Pn(e);
                          }),
                            e.addEventListener("popstate", function () {
                              Pn(e);
                            });
                        })(e),
                        (function (e) {
                          function t(t) {
                            var n = e[t];
                            try {
                              return (
                                "function" != typeof n || V(n)
                                  ? (e[t] = window[t])
                                  : (e[t] = window[t].bind(window)),
                                !0
                              );
                            } catch (e) {
                              return ae(e.message), !1;
                            }
                          }
                          Object.getOwnPropertyNames(e).forEach(function (n) {
                            "getSelection" !== n
                              ? At.includes(n)
                                ? t(n)
                                : Wt.some(function (r) {
                                    return (
                                      !(!r.test(n) || !(n in e.parent)) && t(n)
                                    );
                                  })
                              : Object.defineProperty(e, n, {
                                  get: function () {
                                    return e.document[n];
                                  },
                                });
                          }),
                            Object.getOwnPropertyNames(window)
                              .filter(function (e) {
                                return /^on/.test(e);
                              })
                              .filter(function (e) {
                                return !Ut.includes(e);
                              })
                              .forEach(function (t) {
                                var n = Object.getOwnPropertyDescriptor(
                                  e,
                                  t
                                ) || {
                                  enumerable: !0,
                                  writable: !0,
                                };
                                try {
                                  Object.defineProperty(e, t, {
                                    enumerable: n.enumerable,
                                    configurable: !0,
                                    get: function () {
                                      return window[t];
                                    },
                                    set:
                                      n.writable || n.set
                                        ? function (n) {
                                            window[t] =
                                              "function" == typeof n
                                                ? n.bind(e)
                                                : n;
                                          }
                                        : void 0,
                                  });
                                } catch (t) {
                                  ae(t.message);
                                }
                              }),
                            fe(e.__WUJIE.plugins, "windowPropertyOverride", e);
                        })(e),
                        (function (e) {
                          var t = e.__WUJIE,
                            n = new WeakMap(),
                            r = new WeakMap();
                          (e.Document.prototype.addEventListener = function (
                            o,
                            a,
                            i
                          ) {
                            if (a) {
                              var l = n.get(a),
                                u = r.get(a);
                              return (
                                l ||
                                  ((l =
                                    "function" == typeof a ? a.bind(this) : a),
                                  n.set(a, l)),
                                u ? u.includes(o) || u.push(o) : r.set(a, [o]),
                                fe(
                                  e.__WUJIE.plugins,
                                  "documentAddEventListenerHook",
                                  e,
                                  o,
                                  l,
                                  i
                                ),
                                Tt.includes(o)
                                  ? Vt.call(this, o, l, i)
                                  : t.degrade
                                  ? t.document.addEventListener(o, l, i)
                                  : Dt.includes(o)
                                  ? window.document.addEventListener(o, l, i)
                                  : jt.includes(o)
                                  ? (window.document.addEventListener(o, l, i),
                                    void t.shadowRoot.addEventListener(o, l, i))
                                  : void t.shadowRoot.addEventListener(o, l, i)
                              );
                            }
                          }),
                            (e.Document.prototype.removeEventListener =
                              function (o, a, i) {
                                var l = n.get(a),
                                  u = r.get(a);
                                if (l) {
                                  if (
                                    (null != u &&
                                      u.includes(o) &&
                                      (u.splice(u.indexOf(o), 1),
                                      u.length || (n.delete(a), r.delete(a))),
                                    fe(
                                      e.__WUJIE.plugins,
                                      "documentRemoveEventListenerHook",
                                      e,
                                      o,
                                      l,
                                      i
                                    ),
                                    Tt.includes(o))
                                  )
                                    return Jt.call(this, o, l, i);
                                  if (t.degrade)
                                    return t.document.removeEventListener(
                                      o,
                                      l,
                                      i
                                    );
                                  if (Dt.includes(o))
                                    return window.document.removeEventListener(
                                      o,
                                      l,
                                      i
                                    );
                                  if (jt.includes(o))
                                    return (
                                      window.document.removeEventListener(
                                        o,
                                        l,
                                        i
                                      ),
                                      void t.shadowRoot.removeEventListener(
                                        o,
                                        l,
                                        i
                                      )
                                    );
                                  t.shadowRoot.removeEventListener(o, l, i);
                                }
                              });
                          var o = Object.keys(e.HTMLElement.prototype).filter(
                              function (e) {
                                return /^on/.test(e);
                              }
                            ),
                            a = Object.keys(e.Document.prototype)
                              .filter(function (e) {
                                return /^on/.test(e);
                              })
                              .filter(function (e) {
                                return !Nt.includes(e);
                              });
                          o.filter(function (e) {
                            return a.includes(e);
                          }).forEach(function (n) {
                            var r = Object.getOwnPropertyDescriptor(
                              e.Document.prototype,
                              n
                            ) || { enumerable: !0, writable: !0 };
                            try {
                              Object.defineProperty(e.Document.prototype, n, {
                                enumerable: r.enumerable,
                                configurable: !0,
                                get: function () {
                                  return t.degrade
                                    ? t.document[n]
                                    : t.shadowRoot.firstElementChild[n];
                                },
                                set:
                                  r.writable || r.set
                                    ? function (r) {
                                        var o =
                                          "function" == typeof r
                                            ? r.bind(e.document)
                                            : r;
                                        t.degrade
                                          ? (t.document[n] = o)
                                          : (t.shadowRoot.firstElementChild[n] =
                                              o);
                                      }
                                    : void 0,
                              });
                            } catch (n) {
                              ae(n.message);
                            }
                          });
                          var i = Rt.ownerProperties,
                            l = Rt.modifyProperties,
                            u = Rt.shadowProperties,
                            c = Rt.shadowMethods,
                            s = Rt.documentProperties,
                            f = Rt.documentMethods,
                            d = Rt.documentEvents;
                          l.concat(u, c, s, f).forEach(function (n) {
                            var r = Object.getOwnPropertyDescriptor(
                              e.Document.prototype,
                              n
                            ) || { enumerable: !0, writable: !0 };
                            try {
                              Object.defineProperty(e.Document.prototype, n, {
                                enumerable: r.enumerable,
                                configurable: !0,
                                get: function () {
                                  return t.proxyDocument[n];
                                },
                                set: void 0,
                              });
                            } catch (e) {
                              ae(e.message);
                            }
                          }),
                            d.forEach(function (n) {
                              var r = Object.getOwnPropertyDescriptor(
                                e.Document.prototype,
                                n
                              ) || { enumerable: !0, writable: !0 };
                              try {
                                Object.defineProperty(e.Document.prototype, n, {
                                  enumerable: r.enumerable,
                                  configurable: !0,
                                  get: function () {
                                    return (t.degrade ? t : window).document[n];
                                  },
                                  set:
                                    r.writable || r.set
                                      ? function (r) {
                                          (t.degrade ? t : window).document[n] =
                                            "function" == typeof r
                                              ? r.bind(e.document)
                                              : r;
                                        }
                                      : void 0,
                                });
                              } catch (e) {
                                ae(e.message);
                              }
                            }),
                            i.forEach(function (n) {
                              Object.defineProperty(e.document, n, {
                                enumerable: !0,
                                configurable: !0,
                                get: function () {
                                  return t.proxyDocument[n];
                                },
                                set: void 0,
                              });
                            }),
                            fe(
                              e.__WUJIE.plugins,
                              "documentPropertyOverride",
                              e
                            );
                        })(e),
                        (function (e) {
                          var t = e.Node.prototype.getRootNode,
                            n = e.Node.prototype.appendChild,
                            r = e.Node.prototype.insertBefore;
                          (e.Node.prototype.getRootNode = function (n) {
                            var r = t.call(this, n);
                            return r === e.__WUJIE.shadowRoot ? e.document : r;
                          }),
                            (e.Node.prototype.appendChild = function (t) {
                              var r = n.call(this, t);
                              return Mn(t, e), r;
                            }),
                            (e.Node.prototype.insertBefore = function (t, n) {
                              var o = r.call(this, t, n);
                              return Mn(t, e), o;
                            });
                        })(e),
                        (function (e) {
                          ee(e, e.HTMLImageElement, "src"),
                            ee(e, e.HTMLAnchorElement, "href"),
                            ee(e, e.HTMLSourceElement, "src"),
                            ee(e, e.HTMLLinkElement, "href"),
                            ee(e, e.HTMLScriptElement, "src"),
                            ee(e, e.HTMLMediaElement, "src");
                        })(e);
                    })(l, e, n, r),
                    Z(l.__WUJIE.id) || l.history.replaceState(null, "", n + o);
                })),
                a
              );
            }
            function Wn(e, t, n) {
              var r = e.contentWindow.__WUJIE,
                o = r.shadowRoot,
                a = r.id,
                i = r.degrade,
                l = r.document,
                u = r.degradeAttrs,
                c = t;
              if (!/^http/.test(c)) {
                var s = G(c);
                (c = n + s.pathname + s.search + s.hash), (s = null);
              }
              if (((e.contentWindow.__WUJIE.hrefFlag = !0), i)) {
                var f = Kt.call(e.contentDocument, "body");
                pn(l.documentElement, f),
                  In(window.decodeURIComponent(c), q(a).parentElement, u);
              } else In(c, o.host.parentElement, u);
              return (
                (function (e, t) {
                  var n = G(window.location.href),
                    r = X(n);
                  r[e] = window.encodeURIComponent(t);
                  var o =
                    "?" +
                    Object.keys(r)
                      .map(function (e) {
                        return e + "=" + r[e];
                      })
                      .join("&");
                  (n.search = o),
                    window.history.pushState(null, "", n.href),
                    (n = null);
                })(a, c),
                !0
              );
            }
            var zn = window.__POWERED_BY_WUJIE__
                ? window.__WUJIE.inject.appEventObjMap
                : new Map(),
              Fn = (function () {
                function e(t) {
                  gt(this, e),
                    (this.id = t),
                    this.$clear(),
                    zn.get(this.id) || zn.set(this.id, {}),
                    (this.eventObj = zn.get(this.id));
                }
                return (
                  wt(e, [
                    {
                      key: "$on",
                      value: function (e, t) {
                        var n = this.eventObj[e];
                        return n
                          ? (n.includes(t) || n.push(t), this)
                          : ((this.eventObj[e] = [t]), this);
                      },
                    },
                    {
                      key: "$onAll",
                      value: function (e) {
                        return this.$on(x, e);
                      },
                    },
                    {
                      key: "$once",
                      value: function (e, t) {
                        var n = function () {
                          this.$off(e, n), t.apply(void 0, arguments);
                        }.bind(this);
                        this.$on(e, n);
                      },
                    },
                    {
                      key: "$off",
                      value: function (e, t) {
                        var n = this.eventObj[e];
                        if (!e || !n || !n.length)
                          return ae("".concat(e, " ").concat(T)), this;
                        for (var r = n.length; r--; )
                          if (n[r] === t) {
                            n.splice(r, 1);
                            break;
                          }
                        return this;
                      },
                    },
                    {
                      key: "$offAll",
                      value: function (e) {
                        return this.$off(x, e);
                      },
                    },
                    {
                      key: "$emit",
                      value: function (e) {
                        var t = [],
                          n = [];
                        if (
                          (zn.forEach(function (r) {
                            r[e] && (t = t.concat(r[e])),
                              r[x] && (n = n.concat(r[x]));
                          }),
                          !e || (0 === t.length && 0 === n.length))
                        )
                          ae("".concat(e, " ").concat(T));
                        else
                          try {
                            for (
                              var r = arguments.length,
                                o = new Array(r > 1 ? r - 1 : 0),
                                a = 1;
                              a < r;
                              a++
                            )
                              o[a - 1] = arguments[a];
                            for (var i = 0, l = t.length; i < l; i++) {
                              var u;
                              (u = t)[i].apply(u, o);
                            }
                            for (var c = 0, s = n.length; c < s; c++) {
                              var f;
                              (f = n)[c].apply(f, [e].concat(o));
                            }
                          } catch (e) {
                            ie(e);
                          }
                        return this;
                      },
                    },
                    {
                      key: "$clear",
                      value: function () {
                        var e,
                          t =
                            null !== (e = zn.get(this.id)) && void 0 !== e
                              ? e
                              : {};
                        return (
                          Object.keys(t).forEach(function (e) {
                            return delete t[e];
                          }),
                          this
                        );
                      },
                    },
                  ]),
                  e
                );
              })();
            function Bn(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t &&
                  (r = r.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                  })),
                  n.push.apply(n, r);
              }
              return n;
            }
            function Hn(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? Bn(Object(n), !0).forEach(function (t) {
                      u(e, t, n[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : Bn(Object(n)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(n, t)
                      );
                    });
              }
              return e;
            }
            var $n = (function () {
              function e(t) {
                gt(this, e),
                  u(this, "elementEventCacheMap", new WeakMap()),
                  window.__POWERED_BY_WUJIE__
                    ? (this.inject = window.__WUJIE.inject)
                    : (this.inject = {
                        idToSandboxMap: Ct,
                        appEventObjMap: zn,
                        mainHostPath:
                          window.location.protocol +
                          "//" +
                          window.location.host,
                      });
                var n = t.name,
                  r = t.url,
                  o = t.attrs,
                  a = t.fiber,
                  i = t.degradeAttrs,
                  l = t.degrade,
                  c = t.lifecycles,
                  s = t.plugins;
                (this.id = n),
                  (this.fiber = a),
                  (this.degrade = l || !A),
                  (this.bus = new Fn(this.id)),
                  (this.url = r),
                  (this.degradeAttrs = i),
                  (this.provide = { bus: this.bus }),
                  (this.styleSheetElements = []),
                  (this.execQueue = []),
                  (this.lifecycles = c),
                  (this.plugins = tt(s));
                var f,
                  d,
                  p = K(r),
                  h = p.urlElement,
                  m = p.appHostPath,
                  v = p.appRoutePath,
                  y = this.inject.mainHostPath;
                if (((this.iframe = An(this, o, y, m, v)), this.degrade)) {
                  var g = (function (e, t, n, r) {
                      var o = {},
                        a = e.contentWindow.__WUJIE;
                      Object.defineProperties(o, {
                        createElement: {
                          get: function () {
                            return function () {
                              for (
                                var t = arguments.length,
                                  n = new Array(t),
                                  r = 0;
                                r < t;
                                r++
                              )
                                n[r] = arguments[r];
                              var o =
                                e.contentWindow.__WUJIE_RAW_DOCUMENT_CREATE_ELEMENT__.apply(
                                  e.contentDocument,
                                  n
                                );
                              return Mn(o, e.contentWindow), o;
                            };
                          },
                        },
                        createTextNode: {
                          get: function () {
                            return function () {
                              for (
                                var t = arguments.length,
                                  n = new Array(t),
                                  r = 0;
                                r < t;
                                r++
                              )
                                n[r] = arguments[r];
                              var o =
                                e.contentWindow.__WUJIE_RAW_DOCUMENT_CREATE_TEXT_NODE__.apply(
                                  e.contentDocument,
                                  n
                                );
                              return Mn(o, e.contentWindow), o;
                            };
                          },
                        },
                        documentURI: {
                          get: function () {
                            return a.proxyLocation.href;
                          },
                        },
                        URL: {
                          get: function () {
                            return a.proxyLocation.href;
                          },
                        },
                        getElementsByTagName: {
                          get: function () {
                            return function () {
                              var t =
                                arguments.length <= 0 ? void 0 : arguments[0];
                              return "script" === t
                                ? e.contentDocument.scripts
                                : a.document.getElementsByTagName(t);
                            };
                          },
                        },
                      });
                      var i = Rt.modifyLocalProperties,
                        l = Rt.modifyProperties,
                        u = Rt.ownerProperties,
                        c = Rt.shadowProperties,
                        s = Rt.shadowMethods,
                        f = Rt.documentProperties,
                        d = Rt.documentMethods;
                      l.filter(function (e) {
                        return !i.includes(e);
                      })
                        .concat(u, c, s, f, d)
                        .forEach(function (e) {
                          Object.defineProperty(o, e, {
                            get: function () {
                              var t,
                                n =
                                  null === (t = a.document) || void 0 === t
                                    ? void 0
                                    : t[e];
                              return F(n) ? n.bind(a.document) : n;
                            },
                          });
                        });
                      var p = {},
                        h = e.contentWindow.location,
                        m = Object.keys(h),
                        v = ["host", "hostname", "port", "protocol", "port"];
                      return (
                        v.forEach(function (e) {
                          p[e] = t[e];
                        }),
                        Object.defineProperties(p, {
                          href: {
                            get: function () {
                              return h.href.replace(n, r);
                            },
                            set: function (t) {
                              Wn(e, t, r);
                            },
                          },
                          reload: {
                            get: function () {
                              return (
                                ae(O),
                                function () {
                                  return null;
                                }
                              );
                            },
                          },
                        }),
                        m
                          .filter(function (e) {
                            return !v.concat(["href", "reload"]).includes(e);
                          })
                          .forEach(function (e) {
                            Object.defineProperty(p, e, {
                              get: function () {
                                return F(h[e]) ? h[e].bind(h) : h[e];
                              },
                            });
                          }),
                        { proxyDocument: o, proxyLocation: p }
                      );
                    })(this.iframe, h, y, m),
                    b = g.proxyDocument,
                    w = g.proxyLocation;
                  (this.proxyDocument = b), (this.proxyLocation = w);
                } else {
                  var E = (function (e, t, n, r) {
                      return {
                        proxyWindow: new Proxy(e.contentWindow, {
                          get: function (e, t) {
                            if ("location" === t)
                              return e.__WUJIE.proxyLocation;
                            if (
                              "self" === t ||
                              ("window" === t &&
                                Object.getOwnPropertyDescriptor(
                                  window,
                                  "window"
                                ).get)
                            )
                              return e.__WUJIE.proxy;
                            if (
                              "__WUJIE_RAW_DOCUMENT_QUERY_SELECTOR__" === t ||
                              "__WUJIE_RAW_DOCUMENT_QUERY_SELECTOR_ALL__" === t
                            )
                              return e[t];
                            var n = Object.getOwnPropertyDescriptor(e, t);
                            return !1 ===
                              (null == n ? void 0 : n.configurable) &&
                              !1 === (null == n ? void 0 : n.writable)
                              ? e[t]
                              : Q(e, t);
                          },
                          set: function (e, t, n) {
                            return (
                              (function (e) {
                                !F(e) ||
                                  H(e) ||
                                  V(e) ||
                                  J.has(e) ||
                                  J.set(e, e);
                              })(n),
                              (e[t] = n),
                              !0
                            );
                          },
                          has: function (e, t) {
                            return t in e;
                          },
                        }),
                        proxyDocument: new Proxy(
                          {},
                          {
                            get: function (t, n) {
                              var r = window.document,
                                o = e.contentWindow.__WUJIE,
                                a = o.shadowRoot,
                                i = o.proxyLocation;
                              a || ge();
                              var l =
                                  e.contentWindow
                                    .__WUJIE_RAW_DOCUMENT_CREATE_ELEMENT__,
                                u =
                                  e.contentWindow
                                    .__WUJIE_RAW_DOCUMENT_CREATE_TEXT_NODE__;
                              if (
                                "createElement" === n ||
                                "createTextNode" === n
                              )
                                return new Proxy(r[n], {
                                  apply: function (t, r, o) {
                                    var a = (
                                      "createElement" === n ? l : u
                                    ).apply(e.contentDocument, o);
                                    return Mn(a, e.contentWindow), a;
                                  },
                                });
                              if ("documentURI" === n || "URL" === n)
                                return i.href;
                              if (
                                "getElementsByTagName" === n ||
                                "getElementsByClassName" === n ||
                                "getElementsByName" === n
                              )
                                return new Proxy(a.querySelectorAll, {
                                  apply: function (t, r, o) {
                                    var i,
                                      l = o[0];
                                    if (r !== e.contentDocument)
                                      return r[n].apply(r, o);
                                    if (
                                      "getElementsByTagName" === n &&
                                      "script" === l
                                    )
                                      return e.contentDocument.scripts;
                                    "getElementsByClassName" === n &&
                                      (l = "." + l),
                                      "getElementsByName" === n &&
                                        (l = '[name="'.concat(l, '"]'));
                                    try {
                                      i = t.call(a, l);
                                    } catch (e) {
                                      i = [];
                                    }
                                    return i;
                                  },
                                });
                              if ("getElementById" === n)
                                return new Proxy(a.querySelector, {
                                  apply: function (t, r, o) {
                                    var i;
                                    if (r !== e.contentDocument)
                                      return null === (i = r[n]) || void 0 === i
                                        ? void 0
                                        : i.apply(r, o);
                                    try {
                                      return (
                                        t.call(a, '[id="'.concat(o[0], '"]')) ||
                                        e.contentWindow.__WUJIE_RAW_DOCUMENT_QUERY_SELECTOR__.call(
                                          e.contentWindow.document,
                                          "#".concat(o[0])
                                        )
                                      );
                                    } catch (e) {
                                      return (
                                        ae(
                                          "不支持document.getElementById()传入特殊字符，请参考document.querySelector文档"
                                        ),
                                        null
                                      );
                                    }
                                  },
                                });
                              if (
                                "querySelector" === n ||
                                "querySelectorAll" === n
                              ) {
                                var c = {
                                  querySelector:
                                    "__WUJIE_RAW_DOCUMENT_QUERY_SELECTOR__",
                                  querySelectorAll:
                                    "__WUJIE_RAW_DOCUMENT_QUERY_SELECTOR_ALL__",
                                };
                                return new Proxy(a[n], {
                                  apply: function (t, r, o) {
                                    var i;
                                    return r !== e.contentDocument
                                      ? null === (i = r[n]) || void 0 === i
                                        ? void 0
                                        : i.apply(r, o)
                                      : t.apply(a, o) ||
                                          ("base" === o[0]
                                            ? null
                                            : e.contentWindow[c[n]].call(
                                                e.contentWindow.document,
                                                o[0]
                                              ));
                                  },
                                });
                              }
                              if (
                                "documentElement" === n ||
                                "scrollingElement" === n
                              )
                                return a.firstElementChild;
                              if ("forms" === n)
                                return a.querySelectorAll("form");
                              if ("images" === n)
                                return a.querySelectorAll("img");
                              if ("links" === n) return a.querySelectorAll("a");
                              var s,
                                f = Rt.ownerProperties,
                                d = Rt.shadowProperties,
                                p = Rt.shadowMethods,
                                h = Rt.documentProperties,
                                m = Rt.documentMethods;
                              return f.concat(d).includes(n.toString())
                                ? "activeElement" === n &&
                                  null === a.activeElement
                                  ? a.body
                                  : a[n]
                                : p.includes(n.toString())
                                ? null !== (s = Q(a, n)) && void 0 !== s
                                  ? s
                                  : Q(r, n)
                                : h.includes(n.toString())
                                ? r[n]
                                : m.includes(n.toString())
                                ? Q(r, n)
                                : void 0;
                            },
                          }
                        ),
                        proxyLocation: new Proxy(
                          {},
                          {
                            get: function (o, a) {
                              var i = e.contentWindow.location;
                              return "host" === a ||
                                "hostname" === a ||
                                "protocol" === a ||
                                "port" === a ||
                                "origin" === a
                                ? t[a]
                                : "href" === a
                                ? i[a].replace(n, r)
                                : "reload" === a
                                ? (ae(O),
                                  function () {
                                    return null;
                                  })
                                : "replace" === a
                                ? new Proxy(i[a], {
                                    apply: function (e, t, o) {
                                      var a;
                                      return e.call(
                                        i,
                                        null === (a = o[0]) || void 0 === a
                                          ? void 0
                                          : a.replace(r, n)
                                      );
                                    },
                                  })
                                : Q(i, a);
                            },
                            set: function (t, n, o) {
                              return "href" === n
                                ? Wn(e, o, r)
                                : ((e.contentWindow.location[n] = o), !0);
                            },
                            ownKeys: function () {
                              return Object.keys(
                                e.contentWindow.location
                              ).filter(function (e) {
                                return "reload" !== e;
                              });
                            },
                            getOwnPropertyDescriptor: function (e, t) {
                              return {
                                enumerable: !0,
                                configurable: !0,
                                value: this[t],
                              };
                            },
                          }
                        ),
                      };
                    })(this.iframe, h, y, m),
                    S = E.proxyWindow,
                    x = E.proxyDocument,
                    _ = E.proxyLocation;
                  (this.proxy = S),
                    (this.proxyDocument = x),
                    (this.proxyLocation = _);
                }
                (this.provide.location = this.proxyLocation),
                  (f = this.id),
                  (d = Ct.get(f))
                    ? Ct.set(f, Pt(Pt({}, d), {}, { wujie: this }))
                    : Ct.set(f, { wujie: this });
              }
              var t, n;
              return (
                wt(e, [
                  {
                    key: "active",
                    value:
                      ((n = s(
                        d().mark(function e(t) {
                          var n,
                            r,
                            o,
                            a,
                            i,
                            l,
                            u,
                            c,
                            s,
                            f,
                            p,
                            h,
                            m,
                            y,
                            g,
                            b,
                            w = this;
                          return d().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (n = t.sync),
                                      (r = t.url),
                                      (o = t.el),
                                      (a = t.template),
                                      (i = t.props),
                                      (l = t.alive),
                                      (u = t.prefix),
                                      (c = t.fetch),
                                      (s = t.replace),
                                      (this.url = r),
                                      (this.sync = n),
                                      (this.alive = l),
                                      (this.hrefFlag = !1),
                                      (this.prefix =
                                        null != u ? u : this.prefix),
                                      (this.replace =
                                        null != s ? s : this.replace),
                                      (this.provide.props =
                                        null != i ? i : this.provide.props),
                                      (this.activeFlag = !0),
                                      (e.next = 11),
                                      this.iframeReady
                                    );
                                  case 11:
                                    if (
                                      ((f = this.iframe.contentWindow),
                                      (p = c
                                        ? function (e, t) {
                                            return c(
                                              "string" == typeof e
                                                ? ne(e, w.proxyLocation.href)
                                                : e,
                                              t
                                            );
                                          }
                                        : this.fetch) &&
                                        ((f.fetch = p), (this.fetch = p)),
                                      (this.execFlag && this.alive) || Cn(f),
                                      Pn(f),
                                      (this.template =
                                        null != a ? a : this.template),
                                      !this.degrade)
                                    ) {
                                      e.next = 38;
                                      break;
                                    }
                                    if (
                                      ((h = Kt.call(f.document, "body")),
                                      (m = hn(
                                        this.id,
                                        null != o ? o : h,
                                        this.degradeAttrs
                                      )),
                                      (y = m.iframe),
                                      (g = m.container),
                                      (this.el = g),
                                      o && Sn(h),
                                      jn(y.contentWindow, f),
                                      (y.contentWindow.onunload = function () {
                                        w.unmount();
                                      }),
                                      !this.document)
                                    ) {
                                      e.next = 34;
                                      break;
                                    }
                                    if (!this.alive) {
                                      e.next = 29;
                                      break;
                                    }
                                    y.contentDocument.replaceChild(
                                      this.document.documentElement,
                                      y.contentDocument.documentElement
                                    ),
                                      Nn(y.contentDocument.documentElement, f),
                                      (e.next = 32);
                                    break;
                                  case 29:
                                    return (
                                      (e.next = 31),
                                      wn(
                                        y.contentDocument,
                                        this.iframe.contentWindow,
                                        this.template
                                      )
                                    );
                                  case 31:
                                    Dn(
                                      this.document.documentElement,
                                      y.contentDocument.documentElement,
                                      f
                                    );
                                  case 32:
                                    e.next = 36;
                                    break;
                                  case 34:
                                    return (
                                      (e.next = 36),
                                      wn(
                                        y.contentDocument,
                                        this.iframe.contentWindow,
                                        this.template
                                      )
                                    );
                                  case 36:
                                    return (
                                      (this.document = y.contentDocument),
                                      e.abrupt("return")
                                    );
                                  case 38:
                                    if (!this.shadowRoot) {
                                      e.next = 44;
                                      break;
                                    }
                                    if (
                                      ((this.el = pn(this.shadowRoot.host, o)),
                                      !this.alive)
                                    ) {
                                      e.next = 42;
                                      break;
                                    }
                                    return e.abrupt("return");
                                  case 42:
                                    e.next = 46;
                                    break;
                                  case 44:
                                    (b = Kt.call(f.document, "body")),
                                      (this.el = pn(
                                        ((d = this.id),
                                        (E = void 0),
                                        (E =
                                          window.document.createElement(
                                            "wujie-app"
                                          )).setAttribute(v, d),
                                        E.classList.add("wujie_iframe"),
                                        E),
                                        null != o ? o : b
                                      ));
                                  case 46:
                                    return (
                                      (e.next = 48),
                                      gn(this.shadowRoot, f, this.template)
                                    );
                                  case 48:
                                    this.patchCssRules(),
                                      (this.provide.shadowRoot =
                                        this.shadowRoot);
                                  case 50:
                                  case "end":
                                    return e.stop();
                                }
                              var d, E;
                            },
                            e,
                            this
                          );
                        })
                      )),
                      function (e) {
                        return n.apply(this, arguments);
                      }),
                  },
                  {
                    key: "requestIdleCallback",
                    value: function (e) {
                      var t = this;
                      return re(function () {
                        t.iframe && e.apply(t);
                      });
                    },
                  },
                  {
                    key: "start",
                    value:
                      ((t = s(
                        d().mark(function e(t) {
                          var n,
                            r,
                            o,
                            a,
                            i,
                            l,
                            u,
                            c,
                            s,
                            f = this;
                          return d().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (this.execFlag = !0), (e.next = 3), t()
                                    );
                                  case 3:
                                    if (((n = e.sent), this.iframe)) {
                                      e.next = 6;
                                      break;
                                    }
                                    return e.abrupt("return");
                                  case 6:
                                    return (
                                      ((r =
                                        this.iframe
                                          .contentWindow).__POWERED_BY_WUJIE__ =
                                        !0),
                                      (o = Ge("jsBeforeLoaders", this.plugins)),
                                      (a = Ge("jsAfterLoaders", this.plugins)),
                                      (i = []),
                                      (l = []),
                                      (u = []),
                                      n.forEach(function (e) {
                                        e.defer
                                          ? u.push(e)
                                          : e.async
                                          ? l.push(e)
                                          : i.push(e);
                                      }),
                                      o.forEach(function (e) {
                                        f.execQueue.push(function () {
                                          return f.fiber
                                            ? f.requestIdleCallback(
                                                function () {
                                                  return Un(e, r);
                                                }
                                              )
                                            : Un(e, r);
                                        });
                                      }),
                                      i.concat(u).forEach(function (e) {
                                        f.execQueue.push(function () {
                                          return e.contentPromise.then(
                                            function (t) {
                                              return f.fiber
                                                ? f.requestIdleCallback(
                                                    function () {
                                                      return Un(
                                                        Hn(
                                                          Hn({}, e),
                                                          {},
                                                          { content: t }
                                                        ),
                                                        r
                                                      );
                                                    }
                                                  )
                                                : Un(
                                                    Hn(
                                                      Hn({}, e),
                                                      {},
                                                      { content: t }
                                                    ),
                                                    r
                                                  );
                                            }
                                          );
                                        });
                                      }),
                                      l.forEach(function (e) {
                                        e.contentPromise.then(function (t) {
                                          f.fiber
                                            ? f.requestIdleCallback(
                                                function () {
                                                  return Un(
                                                    Hn(
                                                      Hn({}, e),
                                                      {},
                                                      { content: t }
                                                    ),
                                                    r
                                                  );
                                                }
                                              )
                                            : Un(
                                                Hn(
                                                  Hn({}, e),
                                                  {},
                                                  { content: t }
                                                ),
                                                r
                                              );
                                        });
                                      }),
                                      this.execQueue.push(
                                        this.fiber
                                          ? function () {
                                              return f.requestIdleCallback(
                                                function () {
                                                  return f.mount();
                                                }
                                              );
                                            }
                                          : function () {
                                              return f.mount();
                                            }
                                      ),
                                      (c = function () {
                                        var e;
                                        ye(r.document, "DOMContentLoaded"),
                                          ye(r, "DOMContentLoaded"),
                                          null === (e = f.execQueue.shift()) ||
                                            void 0 === e ||
                                            e();
                                      }),
                                      this.execQueue.push(
                                        this.fiber
                                          ? function () {
                                              return f.requestIdleCallback(c);
                                            }
                                          : c
                                      ),
                                      a.forEach(function (e) {
                                        f.execQueue.push(function () {
                                          return f.fiber
                                            ? f.requestIdleCallback(
                                                function () {
                                                  return Un(e, r);
                                                }
                                              )
                                            : Un(e, r);
                                        });
                                      }),
                                      (s = function () {
                                        var e;
                                        ye(r.document, "readystatechange"),
                                          ye(r, "load"),
                                          null === (e = f.execQueue.shift()) ||
                                            void 0 === e ||
                                            e();
                                      }),
                                      this.execQueue.push(
                                        this.fiber
                                          ? function () {
                                              return f.requestIdleCallback(s);
                                            }
                                          : s
                                      ),
                                      (!this.alive &&
                                        I(
                                          this.iframe.contentWindow
                                            .__WUJIE_UNMOUNT
                                        )) ||
                                        _n(this.el),
                                      this.execQueue.shift()(),
                                      e.abrupt(
                                        "return",
                                        new Promise(function (e) {
                                          f.execQueue.push(function () {
                                            var t;
                                            e(),
                                              null ===
                                                (t = f.execQueue.shift()) ||
                                                void 0 === t ||
                                                t();
                                          });
                                        })
                                      )
                                    );
                                  case 26:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            this
                          );
                        })
                      )),
                      function (e) {
                        return t.apply(this, arguments);
                      }),
                  },
                  {
                    key: "mount",
                    value: function () {
                      var e, t, n, r, o, a, i;
                      this.mountFlag ||
                        (I(this.iframe.contentWindow.__WUJIE_MOUNT) &&
                          (_n(this.el),
                          null === (t = this.lifecycles) ||
                            void 0 === t ||
                            null === (n = t.beforeMount) ||
                            void 0 === n ||
                            n.call(t, this.iframe.contentWindow),
                          this.iframe.contentWindow.__WUJIE_MOUNT(),
                          null === (r = this.lifecycles) ||
                            void 0 === r ||
                            null === (o = r.afterMount) ||
                            void 0 === o ||
                            o.call(r, this.iframe.contentWindow),
                          (this.mountFlag = !0)),
                        this.alive &&
                          (null === (a = this.lifecycles) ||
                            void 0 === a ||
                            null === (i = a.activated) ||
                            void 0 === i ||
                            i.call(a, this.iframe.contentWindow)),
                        null === (e = this.execQueue.shift()) ||
                          void 0 === e ||
                          e());
                    },
                  },
                  {
                    key: "unmount",
                    value: function () {
                      var e, t, n, r, o, a;
                      (this.activeFlag = !1),
                        (function () {
                          var e = G(window.location.href),
                            t = X(e);
                          Object.keys(t).forEach(function (e) {
                            var n = Ot(e);
                            n &&
                              n.execFlag &&
                              n.sync &&
                              !n.hrefFlag &&
                              !n.activeFlag &&
                              delete t[e];
                          });
                          var n =
                            "?" +
                            Object.keys(t)
                              .map(function (e) {
                                return e + "=" + t[e];
                              })
                              .join("&");
                          (e.search = n),
                            e.href !== window.location.href &&
                              window.history.replaceState(null, "", e.href),
                            (e = null);
                        })(),
                        this.alive &&
                          (null === (e = this.lifecycles) ||
                            void 0 === e ||
                            null === (t = e.deactivated) ||
                            void 0 === t ||
                            t.call(e, this.iframe.contentWindow)),
                        this.mountFlag &&
                          (!I(this.iframe.contentWindow.__WUJIE_UNMOUNT) ||
                            this.alive ||
                            this.hrefFlag ||
                            (null === (n = this.lifecycles) ||
                              void 0 === n ||
                              null === (r = n.beforeUnmount) ||
                              void 0 === r ||
                              r.call(n, this.iframe.contentWindow),
                            this.iframe.contentWindow.__WUJIE_UNMOUNT(),
                            null === (o = this.lifecycles) ||
                              void 0 === o ||
                              null === (a = o.afterUnmount) ||
                              void 0 === a ||
                              a.call(o, this.iframe.contentWindow),
                            (this.mountFlag = !1),
                            this.bus.$clear(),
                            this.degrade ||
                              (Sn(this.shadowRoot),
                              ln(this.head),
                              ln(this.body)),
                            Sn(this.head),
                            Sn(this.body)));
                    },
                  },
                  {
                    key: "destroy",
                    value: function () {
                      if (
                        (this.unmount(),
                        this.bus.$clear(),
                        (this.shadowRoot = null),
                        (this.proxy = null),
                        (this.proxyDocument = null),
                        (this.proxyLocation = null),
                        (this.execQueue = null),
                        (this.provide = null),
                        (this.degradeAttrs = null),
                        (this.styleSheetElements = null),
                        (this.bus = null),
                        (this.replace = null),
                        (this.fetch = null),
                        (this.execFlag = null),
                        (this.mountFlag = null),
                        (this.hrefFlag = null),
                        (this.document = null),
                        (this.head = null),
                        (this.body = null),
                        (this.elementEventCacheMap = null),
                        (this.lifecycles = null),
                        (this.plugins = null),
                        (this.provide = null),
                        (this.inject = null),
                        (this.execQueue = null),
                        (this.prefix = null),
                        this.el && (Sn(this.el), (this.el = null)),
                        this.iframe)
                      ) {
                        var e,
                          t = this.iframe.contentWindow;
                        null != t &&
                          t.__WUJIE_EVENTLISTENER__ &&
                          t.__WUJIE_EVENTLISTENER__.forEach(function (e) {
                            t.removeEventListener(
                              e.type,
                              e.listener,
                              e.options
                            );
                          }),
                          null === (e = this.iframe.parentNode) ||
                            void 0 === e ||
                            e.removeChild(this.iframe),
                          (this.iframe = null);
                      }
                      var n, r;
                      (n = this.id),
                        null != (r = Ct.get(n)) &&
                          r.options &&
                          Ct.set(n, { options: r.options }),
                        Ct.delete(n);
                    },
                  },
                  {
                    key: "rebuildStyleSheets",
                    value: function () {
                      var e = this;
                      this.styleSheetElements &&
                        this.styleSheetElements.length &&
                        this.styleSheetElements.forEach(function (t) {
                          zt.call(
                            e.degrade ? e.document.head : e.shadowRoot.head,
                            t
                          );
                        }),
                        this.patchCssRules();
                    },
                  },
                  {
                    key: "patchCssRules",
                    value: function () {
                      if (
                        !this.degrade &&
                        !this.shadowRoot.host.hasAttribute(S)
                      ) {
                        var e = m(
                            kn(
                              Array.from(
                                this.iframe.contentDocument.querySelectorAll(
                                  "style"
                                )
                              ).map(function (e) {
                                return e.sheet;
                              })
                            ),
                            2
                          ),
                          t = e[0],
                          n = e[1];
                        t &&
                          (this.shadowRoot.head.appendChild(t),
                          this.styleSheetElements.push(t)),
                          n && this.shadowRoot.host.appendChild(n),
                          (t || n) && this.shadowRoot.host.setAttribute(S, "");
                      }
                    },
                  },
                ]),
                e
              );
            })();
            function Vn(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t &&
                  (r = r.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                  })),
                  n.push.apply(n, r);
              }
              return n;
            }
            var Jn = new Fn(Date.now().toString());
            function Qn(e) {
              return qn.apply(this, arguments);
            }
            function qn() {
              return (
                (qn = s(
                  d().mark(function e(t) {
                    var n,
                      r,
                      o,
                      a,
                      i,
                      l,
                      u,
                      c,
                      s,
                      f,
                      p,
                      h,
                      m,
                      v,
                      y,
                      g,
                      b,
                      w,
                      E,
                      S,
                      x,
                      _,
                      k,
                      P,
                      C,
                      O,
                      L,
                      R,
                      T,
                      N,
                      D,
                      j,
                      M,
                      U,
                      A,
                      W,
                      z,
                      F,
                      B;
                    return d().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((o = Ot(t.name)),
                              (a = Lt(t.name)),
                              (i = ve(t, a)),
                              (l = i.name),
                              (u = i.url),
                              (c = i.html),
                              (s = i.replace),
                              (f = i.fetch),
                              (p = i.props),
                              (h = i.attrs),
                              (m = i.degradeAttrs),
                              (v = i.fiber),
                              (y = i.alive),
                              (g = i.degrade),
                              (b = i.sync),
                              (w = i.prefix),
                              (E = i.el),
                              (S = i.loading),
                              (x = i.plugins),
                              (_ = i.lifecycles),
                              !o)
                            ) {
                              e.next = 39;
                              break;
                            }
                            if (
                              ((o.plugins = tt(x)),
                              (o.lifecycles = _),
                              (k = o.iframe.contentWindow),
                              !o.preload)
                            ) {
                              e.next = 11;
                              break;
                            }
                            return (e.next = 11), o.preload;
                          case 11:
                            if (!y) {
                              e.next = 26;
                              break;
                            }
                            return (
                              (e.next = 14),
                              o.active({
                                url: u,
                                sync: b,
                                prefix: w,
                                el: E,
                                props: p,
                                alive: y,
                                fetch: f,
                                replace: s,
                              })
                            );
                          case 14:
                            if (o.execFlag) {
                              e.next = 22;
                              break;
                            }
                            return (
                              null === (O = o.lifecycles) ||
                                void 0 === O ||
                                null === (L = O.beforeLoad) ||
                                void 0 === L ||
                                L.call(O, o.iframe.contentWindow),
                              (e.next = 18),
                              yt({
                                url: u,
                                html: c,
                                opts: {
                                  fetch: f || window.fetch,
                                  plugins: o.plugins,
                                  loadError: o.lifecycles.loadError,
                                  fiber: v,
                                },
                              })
                            );
                          case 18:
                            return (
                              (R = e.sent),
                              (T = R.getExternalScripts),
                              (e.next = 22),
                              o.start(T)
                            );
                          case 22:
                            return (
                              null === (P = o.lifecycles) ||
                                void 0 === P ||
                                null === (C = P.activated) ||
                                void 0 === C ||
                                C.call(P, o.iframe.contentWindow),
                              e.abrupt("return", o.destroy)
                            );
                          case 26:
                            if (!I(k.__WUJIE_MOUNT)) {
                              e.next = 38;
                              break;
                            }
                            return (
                              o.unmount(),
                              (e.next = 30),
                              o.active({
                                url: u,
                                sync: b,
                                prefix: w,
                                el: E,
                                props: p,
                                alive: y,
                                fetch: f,
                                replace: s,
                              })
                            );
                          case 30:
                            return (
                              o.rebuildStyleSheets(),
                              null === (N = o.lifecycles) ||
                                void 0 === N ||
                                null === (D = N.beforeMount) ||
                                void 0 === D ||
                                D.call(N, o.iframe.contentWindow),
                              k.__WUJIE_MOUNT(),
                              null === (j = o.lifecycles) ||
                                void 0 === j ||
                                null === (M = j.afterMount) ||
                                void 0 === M ||
                                M.call(j, o.iframe.contentWindow),
                              (o.mountFlag = !0),
                              e.abrupt("return", o.destroy)
                            );
                          case 38:
                            o.destroy();
                          case 39:
                            return (
                              xn(E, S),
                              (U = new $n({
                                name: l,
                                url: u,
                                attrs: h,
                                degradeAttrs: m,
                                fiber: v,
                                degrade: g,
                                plugins: x,
                                lifecycles: _,
                              })),
                              null === (n = U.lifecycles) ||
                                void 0 === n ||
                                null === (r = n.beforeLoad) ||
                                void 0 === r ||
                                r.call(n, U.iframe.contentWindow),
                              (e.next = 44),
                              yt({
                                url: u,
                                html: c,
                                opts: {
                                  fetch: f || window.fetch,
                                  plugins: U.plugins,
                                  loadError: U.lifecycles.loadError,
                                  fiber: v,
                                },
                              })
                            );
                          case 44:
                            return (
                              (A = e.sent),
                              (W = A.template),
                              (z = A.getExternalScripts),
                              (F = A.getExternalStyleSheets),
                              (e.next = 50),
                              ct(U, W, F)
                            );
                          case 50:
                            return (
                              (B = e.sent),
                              (e.next = 53),
                              U.active({
                                url: u,
                                sync: b,
                                prefix: w,
                                template: B,
                                el: E,
                                props: p,
                                alive: y,
                                fetch: f,
                                replace: s,
                              })
                            );
                          case 53:
                            return (e.next = 55), U.start(z);
                          case 55:
                            return e.abrupt("return", U.destroy);
                          case 56:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )),
                qn.apply(this, arguments)
              );
            }
            function Yn(e) {
              return (
                (Yn =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
                    ? function (e) {
                        return typeof e;
                      }
                    : function (e) {
                        return e &&
                          "function" == typeof Symbol &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? "symbol"
                          : typeof e;
                      }),
                Yn(e)
              );
            }
            function Kn() {
              Kn = function () {
                return t;
              };
              var e,
                t = {},
                n = Object.prototype,
                r = n.hasOwnProperty,
                o =
                  Object.defineProperty ||
                  function (e, t, n) {
                    e[t] = n.value;
                  },
                a = "function" == typeof Symbol ? Symbol : {},
                i = a.iterator || "@@iterator",
                l = a.asyncIterator || "@@asyncIterator",
                u = a.toStringTag || "@@toStringTag";
              function c(e, t, n) {
                return (
                  Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  }),
                  e[t]
                );
              }
              try {
                c({}, "");
              } catch (e) {
                c = function (e, t, n) {
                  return (e[t] = n);
                };
              }
              function s(e, t, n, r) {
                var a = t && t.prototype instanceof y ? t : y,
                  i = Object.create(a.prototype),
                  l = new R(r || []);
                return o(i, "_invoke", { value: P(e, n, l) }), i;
              }
              function f(e, t, n) {
                try {
                  return { type: "normal", arg: e.call(t, n) };
                } catch (e) {
                  return { type: "throw", arg: e };
                }
              }
              t.wrap = s;
              var d = "suspendedStart",
                p = "suspendedYield",
                h = "executing",
                m = "completed",
                v = {};
              function y() {}
              function g() {}
              function b() {}
              var w = {};
              c(w, i, function () {
                return this;
              });
              var E = Object.getPrototypeOf,
                S = E && E(E(T([])));
              S && S !== n && r.call(S, i) && (w = S);
              var x = (b.prototype = y.prototype = Object.create(w));
              function _(e) {
                ["next", "throw", "return"].forEach(function (t) {
                  c(e, t, function (e) {
                    return this._invoke(t, e);
                  });
                });
              }
              function k(e, t) {
                function n(o, a, i, l) {
                  var u = f(e[o], e, a);
                  if ("throw" !== u.type) {
                    var c = u.arg,
                      s = c.value;
                    return s && "object" == Yn(s) && r.call(s, "__await")
                      ? t.resolve(s.__await).then(
                          function (e) {
                            n("next", e, i, l);
                          },
                          function (e) {
                            n("throw", e, i, l);
                          }
                        )
                      : t.resolve(s).then(
                          function (e) {
                            (c.value = e), i(c);
                          },
                          function (e) {
                            return n("throw", e, i, l);
                          }
                        );
                  }
                  l(u.arg);
                }
                var a;
                o(this, "_invoke", {
                  value: function (e, r) {
                    function o() {
                      return new t(function (t, o) {
                        n(e, r, t, o);
                      });
                    }
                    return (a = a ? a.then(o, o) : o());
                  },
                });
              }
              function P(t, n, r) {
                var o = d;
                return function (a, i) {
                  if (o === h) throw new Error("Generator is already running");
                  if (o === m) {
                    if ("throw" === a) throw i;
                    return { value: e, done: !0 };
                  }
                  for (r.method = a, r.arg = i; ; ) {
                    var l = r.delegate;
                    if (l) {
                      var u = C(l, r);
                      if (u) {
                        if (u === v) continue;
                        return u;
                      }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                      if (o === d) throw ((o = m), r.arg);
                      r.dispatchException(r.arg);
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    o = h;
                    var c = f(t, n, r);
                    if ("normal" === c.type) {
                      if (((o = r.done ? m : p), c.arg === v)) continue;
                      return { value: c.arg, done: r.done };
                    }
                    "throw" === c.type &&
                      ((o = m), (r.method = "throw"), (r.arg = c.arg));
                  }
                };
              }
              function C(t, n) {
                var r = n.method,
                  o = t.iterator[r];
                if (o === e)
                  return (
                    (n.delegate = null),
                    ("throw" === r &&
                      t.iterator.return &&
                      ((n.method = "return"),
                      (n.arg = e),
                      C(t, n),
                      "throw" === n.method)) ||
                      ("return" !== r &&
                        ((n.method = "throw"),
                        (n.arg = new TypeError(
                          "The iterator does not provide a '" + r + "' method"
                        )))),
                    v
                  );
                var a = f(o, t.iterator, n.arg);
                if ("throw" === a.type)
                  return (
                    (n.method = "throw"),
                    (n.arg = a.arg),
                    (n.delegate = null),
                    v
                  );
                var i = a.arg;
                return i
                  ? i.done
                    ? ((n[t.resultName] = i.value),
                      (n.next = t.nextLoc),
                      "return" !== n.method &&
                        ((n.method = "next"), (n.arg = e)),
                      (n.delegate = null),
                      v)
                    : i
                  : ((n.method = "throw"),
                    (n.arg = new TypeError("iterator result is not an object")),
                    (n.delegate = null),
                    v);
              }
              function O(e) {
                var t = { tryLoc: e[0] };
                1 in e && (t.catchLoc = e[1]),
                  2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
                  this.tryEntries.push(t);
              }
              function L(e) {
                var t = e.completion || {};
                (t.type = "normal"), delete t.arg, (e.completion = t);
              }
              function R(e) {
                (this.tryEntries = [{ tryLoc: "root" }]),
                  e.forEach(O, this),
                  this.reset(!0);
              }
              function T(t) {
                if (t || "" === t) {
                  var n = t[i];
                  if (n) return n.call(t);
                  if ("function" == typeof t.next) return t;
                  if (!isNaN(t.length)) {
                    var o = -1,
                      a = function n() {
                        for (; ++o < t.length; )
                          if (r.call(t, o))
                            return (n.value = t[o]), (n.done = !1), n;
                        return (n.value = e), (n.done = !0), n;
                      };
                    return (a.next = a);
                  }
                }
                throw new TypeError(Yn(t) + " is not iterable");
              }
              return (
                (g.prototype = b),
                o(x, "constructor", { value: b, configurable: !0 }),
                o(b, "constructor", { value: g, configurable: !0 }),
                (g.displayName = c(b, u, "GeneratorFunction")),
                (t.isGeneratorFunction = function (e) {
                  var t = "function" == typeof e && e.constructor;
                  return (
                    !!t &&
                    (t === g ||
                      "GeneratorFunction" === (t.displayName || t.name))
                  );
                }),
                (t.mark = function (e) {
                  return (
                    Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, b)
                      : ((e.__proto__ = b), c(e, u, "GeneratorFunction")),
                    (e.prototype = Object.create(x)),
                    e
                  );
                }),
                (t.awrap = function (e) {
                  return { __await: e };
                }),
                _(k.prototype),
                c(k.prototype, l, function () {
                  return this;
                }),
                (t.AsyncIterator = k),
                (t.async = function (e, n, r, o, a) {
                  void 0 === a && (a = Promise);
                  var i = new k(s(e, n, r, o), a);
                  return t.isGeneratorFunction(n)
                    ? i
                    : i.next().then(function (e) {
                        return e.done ? e.value : i.next();
                      });
                }),
                _(x),
                c(x, u, "Generator"),
                c(x, i, function () {
                  return this;
                }),
                c(x, "toString", function () {
                  return "[object Generator]";
                }),
                (t.keys = function (e) {
                  var t = Object(e),
                    n = [];
                  for (var r in t) n.push(r);
                  return (
                    n.reverse(),
                    function e() {
                      for (; n.length; ) {
                        var r = n.pop();
                        if (r in t) return (e.value = r), (e.done = !1), e;
                      }
                      return (e.done = !0), e;
                    }
                  );
                }),
                (t.values = T),
                (R.prototype = {
                  constructor: R,
                  reset: function (t) {
                    if (
                      ((this.prev = 0),
                      (this.next = 0),
                      (this.sent = this._sent = e),
                      (this.done = !1),
                      (this.delegate = null),
                      (this.method = "next"),
                      (this.arg = e),
                      this.tryEntries.forEach(L),
                      !t)
                    )
                      for (var n in this)
                        "t" === n.charAt(0) &&
                          r.call(this, n) &&
                          !isNaN(+n.slice(1)) &&
                          (this[n] = e);
                  },
                  stop: function () {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval;
                  },
                  dispatchException: function (t) {
                    if (this.done) throw t;
                    var n = this;
                    function o(r, o) {
                      return (
                        (l.type = "throw"),
                        (l.arg = t),
                        (n.next = r),
                        o && ((n.method = "next"), (n.arg = e)),
                        !!o
                      );
                    }
                    for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                      var i = this.tryEntries[a],
                        l = i.completion;
                      if ("root" === i.tryLoc) return o("end");
                      if (i.tryLoc <= this.prev) {
                        var u = r.call(i, "catchLoc"),
                          c = r.call(i, "finallyLoc");
                        if (u && c) {
                          if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                          if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                        } else if (u) {
                          if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                        } else {
                          if (!c)
                            throw new Error(
                              "try statement without catch or finally"
                            );
                          if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                        }
                      }
                    }
                  },
                  abrupt: function (e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                      var o = this.tryEntries[n];
                      if (
                        o.tryLoc <= this.prev &&
                        r.call(o, "finallyLoc") &&
                        this.prev < o.finallyLoc
                      ) {
                        var a = o;
                        break;
                      }
                    }
                    a &&
                      ("break" === e || "continue" === e) &&
                      a.tryLoc <= t &&
                      t <= a.finallyLoc &&
                      (a = null);
                    var i = a ? a.completion : {};
                    return (
                      (i.type = e),
                      (i.arg = t),
                      a
                        ? ((this.method = "next"),
                          (this.next = a.finallyLoc),
                          v)
                        : this.complete(i)
                    );
                  },
                  complete: function (e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return (
                      "break" === e.type || "continue" === e.type
                        ? (this.next = e.arg)
                        : "return" === e.type
                        ? ((this.rval = this.arg = e.arg),
                          (this.method = "return"),
                          (this.next = "end"))
                        : "normal" === e.type && t && (this.next = t),
                      v
                    );
                  },
                  finish: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                      var n = this.tryEntries[t];
                      if (n.finallyLoc === e)
                        return this.complete(n.completion, n.afterLoc), L(n), v;
                    }
                  },
                  catch: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                      var n = this.tryEntries[t];
                      if (n.tryLoc === e) {
                        var r = n.completion;
                        if ("throw" === r.type) {
                          var o = r.arg;
                          L(n);
                        }
                        return o;
                      }
                    }
                    throw new Error("illegal catch attempt");
                  },
                  delegateYield: function (t, n, r) {
                    return (
                      (this.delegate = {
                        iterator: T(t),
                        resultName: n,
                        nextLoc: r,
                      }),
                      "next" === this.method && (this.arg = e),
                      v
                    );
                  },
                }),
                t
              );
            }
            function Gn(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t &&
                  (r = r.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                  })),
                  n.push.apply(n, r);
              }
              return n;
            }
            function Xn(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? Gn(Object(n), !0).forEach(function (t) {
                      ar(e, t, n[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : Gn(Object(n)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(n, t)
                      );
                    });
              }
              return e;
            }
            function Zn(e, t, n, r, o, a, i) {
              try {
                var l = e[a](i),
                  u = l.value;
              } catch (e) {
                return void n(e);
              }
              l.done ? t(u) : Promise.resolve(u).then(r, o);
            }
            function er(e) {
              return function () {
                var t = this,
                  n = arguments;
                return new Promise(function (r, o) {
                  var a = e.apply(t, n);
                  function i(e) {
                    Zn(a, r, o, i, l, "next", e);
                  }
                  function l(e) {
                    Zn(a, r, o, i, l, "throw", e);
                  }
                  i(void 0);
                });
              };
            }
            function tr(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, ir(r.key), r);
              }
            }
            function nr(e, t) {
              return (
                (nr = Object.setPrototypeOf
                  ? Object.setPrototypeOf.bind()
                  : function (e, t) {
                      return (e.__proto__ = t), e;
                    }),
                nr(e, t)
              );
            }
            function rr(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            }
            function or(e) {
              return (
                (or = Object.setPrototypeOf
                  ? Object.getPrototypeOf.bind()
                  : function (e) {
                      return e.__proto__ || Object.getPrototypeOf(e);
                    }),
                or(e)
              );
            }
            function ar(e, t, n) {
              return (
                (t = ir(t)) in e
                  ? Object.defineProperty(e, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (e[t] = n),
                e
              );
            }
            function ir(e) {
              var t = (function (e, t) {
                if ("object" != Yn(e) || !e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var r = n.call(e, "string");
                  if ("object" != Yn(r)) return r;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(e);
              })(e);
              return "symbol" == Yn(t) ? t : String(t);
            }
            window.__WUJIE && !window.__POWERED_BY_WUJIE__ && ge(),
              window.addEventListener("popstate", function () {
                var e = G(window.location.href),
                  t = X(e);
                (e = null),
                  Object.keys(t)
                    .map(function (e) {
                      return Ot(e);
                    })
                    .filter(function (e) {
                      return e;
                    })
                    .forEach(function (e) {
                      var n = t[e.id],
                        r = Kt.call(e.iframe.contentDocument, "body");
                      if (/http/.test(n))
                        e.degrade
                          ? (pn(e.document.documentElement, r),
                            In(
                              window.decodeURIComponent(n),
                              q(e.id).parentElement,
                              e.degradeAttrs
                            ))
                          : In(
                              window.decodeURIComponent(n),
                              e.shadowRoot.host.parentElement,
                              e.degradeAttrs
                            ),
                          (e.hrefFlag = !0);
                      else if (e.hrefFlag) {
                        if (e.degrade) {
                          var o = hn(e.id, e.el, e.degradeAttrs).iframe;
                          jn(o.contentWindow, e.iframe.contentWindow),
                            (o.contentWindow.onunload = function () {
                              e.unmount();
                            }),
                            o.contentDocument.appendChild(r.firstElementChild),
                            (e.document = o.contentDocument);
                        } else pn(e.shadowRoot.host, e.el);
                        e.hrefFlag = !1;
                      }
                    });
              }),
              (function () {
                var e = window.customElements;
                if (e && (null == e || !e.get("wujie-app"))) {
                  var t = (function (e) {
                    !(function (e, t) {
                      if ("function" != typeof t && null !== t)
                        throw new TypeError(
                          "Super expression must either be null or a function"
                        );
                      (e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                          value: e,
                          writable: !0,
                          configurable: !0,
                        },
                      })),
                        Object.defineProperty(e, "prototype", { writable: !1 }),
                        t && Et(e, t);
                    })(n, e);
                    var t = fn(n);
                    function n() {
                      return gt(this, n), t.apply(this, arguments);
                    }
                    return (
                      wt(n, [
                        {
                          key: "connectedCallback",
                          value: function () {
                            if (!this.shadowRoot) {
                              var e = this.attachShadow({ mode: "open" }),
                                t = Ot(this.getAttribute(v));
                              Mn(e, t.iframe.contentWindow), (t.shadowRoot = e);
                            }
                          },
                        },
                        {
                          key: "disconnectedCallback",
                          value: function () {
                            var e = Ot(this.getAttribute(v));
                            null == e || e.unmount();
                          },
                        },
                      ]),
                      n
                    );
                  })(_t(HTMLElement));
                  null == e || e.define("wujie-app", t);
                }
              })(),
              A || ae("当前浏览器不支持无界，子应用将采用iframe方式渲染");
            var lr = (function (e) {
              !(function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  Object.defineProperty(e, "prototype", { writable: !1 }),
                  t && nr(e, t);
              })(l, e);
              var t,
                n,
                o,
                a,
                i =
                  ((o = l),
                  (a = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                      return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                      return (
                        Boolean.prototype.valueOf.call(
                          Reflect.construct(Boolean, [], function () {})
                        ),
                        !0
                      );
                    } catch (e) {
                      return !1;
                    }
                  })()),
                  function () {
                    var e,
                      t = or(o);
                    if (a) {
                      var n = or(this).constructor;
                      e = Reflect.construct(t, arguments, n);
                    } else e = t.apply(this, arguments);
                    return (function (e, t) {
                      if (t && ("object" === Yn(t) || "function" == typeof t))
                        return t;
                      if (void 0 !== t)
                        throw new TypeError(
                          "Derived constructors may only return object or undefined"
                        );
                      return rr(e);
                    })(this, e);
                  });
              function l() {
                var e;
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, l);
                for (
                  var t = arguments.length, n = new Array(t), o = 0;
                  o < t;
                  o++
                )
                  n[o] = arguments[o];
                return (
                  ar(rr((e = i.call.apply(i, [this].concat(n)))), "state", {
                    myRef: r.createRef(),
                  }),
                  ar(rr(e), "destroy", null),
                  ar(rr(e), "startAppQueue", Promise.resolve()),
                  ar(
                    rr(e),
                    "startApp",
                    er(
                      Kn().mark(function t() {
                        var n, r;
                        return Kn().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (t.prev = 0),
                                    (n = e.props),
                                    (r = e.state.myRef.current),
                                    (t.next = 5),
                                    Qn(Xn(Xn({}, n), {}, { el: r }))
                                  );
                                case 5:
                                  (e.destroy = t.sent), (t.next = 11);
                                  break;
                                case 8:
                                  (t.prev = 8),
                                    (t.t0 = t.catch(0)),
                                    console.log(t.t0);
                                case 11:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          null,
                          [[0, 8]]
                        );
                      })
                    )
                  ),
                  e
                );
              }
              return (
                (t = l),
                (n = [
                  {
                    key: "componentDidMount",
                    value: function () {
                      this.startApp();
                    },
                  },
                  {
                    key: "componentDidUpdate",
                    value: function (e) {
                      (this.props.name === e.name &&
                        this.props.url === e.url) ||
                        this.startApp();
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this.props,
                        t = e.width,
                        n = e.height,
                        o = this.state.myRef;
                      return r.createElement("div", {
                        style: { width: t, height: n },
                        ref: o,
                      });
                    },
                  },
                ]) && tr(t.prototype, n),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                l
              );
            })(r.PureComponent);
            ar(lr, "propTypes", ur),
              ar(lr, "bus", Jn),
              ar(lr, "setupApp", function (e) {
                e.name &&
                  (function (e, t) {
                    var n = Ct.get(e);
                    n
                      ? Ct.set(e, Pt(Pt({}, n), {}, { options: t }))
                      : Ct.set(e, { options: t });
                  })(e.name, e);
              }),
              ar(lr, "preloadApp", function (e) {
                re(function () {
                  if (!Ot(e.name) && !Z(e.name)) {
                    var t = Lt(e.name),
                      n = ve(
                        (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2
                              ? Vn(Object(n), !0).forEach(function (t) {
                                  u(e, t, n[t]);
                                })
                              : Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(
                                  e,
                                  Object.getOwnPropertyDescriptors(n)
                                )
                              : Vn(Object(n)).forEach(function (t) {
                                  Object.defineProperty(
                                    e,
                                    t,
                                    Object.getOwnPropertyDescriptor(n, t)
                                  );
                                });
                          }
                          return e;
                        })({}, e),
                        t
                      ),
                      r = n.name,
                      o = n.url,
                      a = n.html,
                      i = n.props,
                      l = n.alive,
                      c = n.replace,
                      f = n.fetch,
                      p = n.exec,
                      h = n.attrs,
                      m = n.degradeAttrs,
                      v = n.fiber,
                      y = n.degrade,
                      g = n.prefix,
                      b = n.plugins,
                      w = n.lifecycles,
                      E = new $n({
                        name: r,
                        url: o,
                        attrs: h,
                        degradeAttrs: m,
                        fiber: v,
                        degrade: y,
                        plugins: b,
                        lifecycles: w,
                      });
                    if (E.preload) return E.preload;
                    var S = (function () {
                      var e = s(
                        d().mark(function e() {
                          var t, n, r, u, s, h, m;
                          return d().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    null === (t = E.lifecycles) ||
                                      void 0 === t ||
                                      null === (n = t.beforeLoad) ||
                                      void 0 === n ||
                                      n.call(t, E.iframe.contentWindow),
                                    (e.next = 3),
                                    yt({
                                      url: o,
                                      html: a,
                                      opts: {
                                        fetch: f || window.fetch,
                                        plugins: E.plugins,
                                        loadError: E.lifecycles.loadError,
                                        fiber: v,
                                      },
                                    })
                                  );
                                case 3:
                                  return (
                                    (r = e.sent),
                                    (u = r.template),
                                    (s = r.getExternalScripts),
                                    (h = r.getExternalStyleSheets),
                                    (e.next = 9),
                                    ct(E, u, h)
                                  );
                                case 9:
                                  return (
                                    (m = e.sent),
                                    (e.next = 12),
                                    E.active({
                                      url: o,
                                      props: i,
                                      prefix: g,
                                      alive: l,
                                      template: m,
                                      fetch: f,
                                      replace: c,
                                    })
                                  );
                                case 12:
                                  if (!p) {
                                    e.next = 17;
                                    break;
                                  }
                                  return (e.next = 15), E.start(s);
                                case 15:
                                  e.next = 19;
                                  break;
                                case 17:
                                  return (e.next = 19), s();
                                case 19:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      );
                      return function () {
                        return e.apply(this, arguments);
                      };
                    })();
                    E.preload = S();
                  }
                });
              }),
              ar(lr, "destroyApp", function (e) {
                var t = Ot(e);
                t && t.destroy();
              });
            var ur = {
              height: a().string,
              width: a().string,
              name: a().string,
              loading: a().element,
              url: a().string,
              alive: a().bool,
              fetch: a().func,
              props: a().object,
              attrs: a().object,
              replace: a().func,
              sync: a().bool,
              prefix: a().object,
              fiber: a().bool,
              degrade: a().bool,
              plugins: a().array,
              beforeLoad: a().func,
              beforeMount: a().func,
              afterMount: a().func,
              beforeUnmount: a().func,
              afterUnmount: a().func,
              activated: a().func,
              deactivated: a().func,
              loadError: a().func,
            };
          },
          553: (e, t, n) => {
            "use strict";
            e.exports = n.p + "c79350810b9647b1c5a3.JPG";
          },
          440: (e) => {
            "use strict";
            e.exports = antd;
          },
          91: (e, t, n) => {
            var r = n(423).default;
            function o() {
              "use strict";
              (e.exports = o =
                function () {
                  return n;
                }),
                (e.exports.__esModule = !0),
                (e.exports.default = e.exports);
              var t,
                n = {},
                a = Object.prototype,
                i = a.hasOwnProperty,
                l =
                  Object.defineProperty ||
                  function (e, t, n) {
                    e[t] = n.value;
                  },
                u = "function" == typeof Symbol ? Symbol : {},
                c = u.iterator || "@@iterator",
                s = u.asyncIterator || "@@asyncIterator",
                f = u.toStringTag || "@@toStringTag";
              function d(e, t, n) {
                return (
                  Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  }),
                  e[t]
                );
              }
              try {
                d({}, "");
              } catch (t) {
                d = function (e, t, n) {
                  return (e[t] = n);
                };
              }
              function p(e, t, n, r) {
                var o = t && t.prototype instanceof w ? t : w,
                  a = Object.create(o.prototype),
                  i = new D(r || []);
                return l(a, "_invoke", { value: L(e, n, i) }), a;
              }
              function h(e, t, n) {
                try {
                  return { type: "normal", arg: e.call(t, n) };
                } catch (e) {
                  return { type: "throw", arg: e };
                }
              }
              n.wrap = p;
              var m = "suspendedStart",
                v = "suspendedYield",
                y = "executing",
                g = "completed",
                b = {};
              function w() {}
              function E() {}
              function S() {}
              var x = {};
              d(x, c, function () {
                return this;
              });
              var _ = Object.getPrototypeOf,
                k = _ && _(_(j([])));
              k && k !== a && i.call(k, c) && (x = k);
              var P = (S.prototype = w.prototype = Object.create(x));
              function C(e) {
                ["next", "throw", "return"].forEach(function (t) {
                  d(e, t, function (e) {
                    return this._invoke(t, e);
                  });
                });
              }
              function O(e, t) {
                function n(o, a, l, u) {
                  var c = h(e[o], e, a);
                  if ("throw" !== c.type) {
                    var s = c.arg,
                      f = s.value;
                    return f && "object" == r(f) && i.call(f, "__await")
                      ? t.resolve(f.__await).then(
                          function (e) {
                            n("next", e, l, u);
                          },
                          function (e) {
                            n("throw", e, l, u);
                          }
                        )
                      : t.resolve(f).then(
                          function (e) {
                            (s.value = e), l(s);
                          },
                          function (e) {
                            return n("throw", e, l, u);
                          }
                        );
                  }
                  u(c.arg);
                }
                var o;
                l(this, "_invoke", {
                  value: function (e, r) {
                    function a() {
                      return new t(function (t, o) {
                        n(e, r, t, o);
                      });
                    }
                    return (o = o ? o.then(a, a) : a());
                  },
                });
              }
              function L(e, n, r) {
                var o = m;
                return function (a, i) {
                  if (o === y) throw new Error("Generator is already running");
                  if (o === g) {
                    if ("throw" === a) throw i;
                    return { value: t, done: !0 };
                  }
                  for (r.method = a, r.arg = i; ; ) {
                    var l = r.delegate;
                    if (l) {
                      var u = R(l, r);
                      if (u) {
                        if (u === b) continue;
                        return u;
                      }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                      if (o === m) throw ((o = g), r.arg);
                      r.dispatchException(r.arg);
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    o = y;
                    var c = h(e, n, r);
                    if ("normal" === c.type) {
                      if (((o = r.done ? g : v), c.arg === b)) continue;
                      return { value: c.arg, done: r.done };
                    }
                    "throw" === c.type &&
                      ((o = g), (r.method = "throw"), (r.arg = c.arg));
                  }
                };
              }
              function R(e, n) {
                var r = n.method,
                  o = e.iterator[r];
                if (o === t)
                  return (
                    (n.delegate = null),
                    ("throw" === r &&
                      e.iterator.return &&
                      ((n.method = "return"),
                      (n.arg = t),
                      R(e, n),
                      "throw" === n.method)) ||
                      ("return" !== r &&
                        ((n.method = "throw"),
                        (n.arg = new TypeError(
                          "The iterator does not provide a '" + r + "' method"
                        )))),
                    b
                  );
                var a = h(o, e.iterator, n.arg);
                if ("throw" === a.type)
                  return (
                    (n.method = "throw"),
                    (n.arg = a.arg),
                    (n.delegate = null),
                    b
                  );
                var i = a.arg;
                return i
                  ? i.done
                    ? ((n[e.resultName] = i.value),
                      (n.next = e.nextLoc),
                      "return" !== n.method &&
                        ((n.method = "next"), (n.arg = t)),
                      (n.delegate = null),
                      b)
                    : i
                  : ((n.method = "throw"),
                    (n.arg = new TypeError("iterator result is not an object")),
                    (n.delegate = null),
                    b);
              }
              function T(e) {
                var t = { tryLoc: e[0] };
                1 in e && (t.catchLoc = e[1]),
                  2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
                  this.tryEntries.push(t);
              }
              function N(e) {
                var t = e.completion || {};
                (t.type = "normal"), delete t.arg, (e.completion = t);
              }
              function D(e) {
                (this.tryEntries = [{ tryLoc: "root" }]),
                  e.forEach(T, this),
                  this.reset(!0);
              }
              function j(e) {
                if (e || "" === e) {
                  var n = e[c];
                  if (n) return n.call(e);
                  if ("function" == typeof e.next) return e;
                  if (!isNaN(e.length)) {
                    var o = -1,
                      a = function n() {
                        for (; ++o < e.length; )
                          if (i.call(e, o))
                            return (n.value = e[o]), (n.done = !1), n;
                        return (n.value = t), (n.done = !0), n;
                      };
                    return (a.next = a);
                  }
                }
                throw new TypeError(r(e) + " is not iterable");
              }
              return (
                (E.prototype = S),
                l(P, "constructor", { value: S, configurable: !0 }),
                l(S, "constructor", { value: E, configurable: !0 }),
                (E.displayName = d(S, f, "GeneratorFunction")),
                (n.isGeneratorFunction = function (e) {
                  var t = "function" == typeof e && e.constructor;
                  return (
                    !!t &&
                    (t === E ||
                      "GeneratorFunction" === (t.displayName || t.name))
                  );
                }),
                (n.mark = function (e) {
                  return (
                    Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, S)
                      : ((e.__proto__ = S), d(e, f, "GeneratorFunction")),
                    (e.prototype = Object.create(P)),
                    e
                  );
                }),
                (n.awrap = function (e) {
                  return { __await: e };
                }),
                C(O.prototype),
                d(O.prototype, s, function () {
                  return this;
                }),
                (n.AsyncIterator = O),
                (n.async = function (e, t, r, o, a) {
                  void 0 === a && (a = Promise);
                  var i = new O(p(e, t, r, o), a);
                  return n.isGeneratorFunction(t)
                    ? i
                    : i.next().then(function (e) {
                        return e.done ? e.value : i.next();
                      });
                }),
                C(P),
                d(P, f, "Generator"),
                d(P, c, function () {
                  return this;
                }),
                d(P, "toString", function () {
                  return "[object Generator]";
                }),
                (n.keys = function (e) {
                  var t = Object(e),
                    n = [];
                  for (var r in t) n.push(r);
                  return (
                    n.reverse(),
                    function e() {
                      for (; n.length; ) {
                        var r = n.pop();
                        if (r in t) return (e.value = r), (e.done = !1), e;
                      }
                      return (e.done = !0), e;
                    }
                  );
                }),
                (n.values = j),
                (D.prototype = {
                  constructor: D,
                  reset: function (e) {
                    if (
                      ((this.prev = 0),
                      (this.next = 0),
                      (this.sent = this._sent = t),
                      (this.done = !1),
                      (this.delegate = null),
                      (this.method = "next"),
                      (this.arg = t),
                      this.tryEntries.forEach(N),
                      !e)
                    )
                      for (var n in this)
                        "t" === n.charAt(0) &&
                          i.call(this, n) &&
                          !isNaN(+n.slice(1)) &&
                          (this[n] = t);
                  },
                  stop: function () {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval;
                  },
                  dispatchException: function (e) {
                    if (this.done) throw e;
                    var n = this;
                    function r(r, o) {
                      return (
                        (l.type = "throw"),
                        (l.arg = e),
                        (n.next = r),
                        o && ((n.method = "next"), (n.arg = t)),
                        !!o
                      );
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                      var a = this.tryEntries[o],
                        l = a.completion;
                      if ("root" === a.tryLoc) return r("end");
                      if (a.tryLoc <= this.prev) {
                        var u = i.call(a, "catchLoc"),
                          c = i.call(a, "finallyLoc");
                        if (u && c) {
                          if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                          if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                        } else if (u) {
                          if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                        } else {
                          if (!c)
                            throw new Error(
                              "try statement without catch or finally"
                            );
                          if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                        }
                      }
                    }
                  },
                  abrupt: function (e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                      var r = this.tryEntries[n];
                      if (
                        r.tryLoc <= this.prev &&
                        i.call(r, "finallyLoc") &&
                        this.prev < r.finallyLoc
                      ) {
                        var o = r;
                        break;
                      }
                    }
                    o &&
                      ("break" === e || "continue" === e) &&
                      o.tryLoc <= t &&
                      t <= o.finallyLoc &&
                      (o = null);
                    var a = o ? o.completion : {};
                    return (
                      (a.type = e),
                      (a.arg = t),
                      o
                        ? ((this.method = "next"),
                          (this.next = o.finallyLoc),
                          b)
                        : this.complete(a)
                    );
                  },
                  complete: function (e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return (
                      "break" === e.type || "continue" === e.type
                        ? (this.next = e.arg)
                        : "return" === e.type
                        ? ((this.rval = this.arg = e.arg),
                          (this.method = "return"),
                          (this.next = "end"))
                        : "normal" === e.type && t && (this.next = t),
                      b
                    );
                  },
                  finish: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                      var n = this.tryEntries[t];
                      if (n.finallyLoc === e)
                        return this.complete(n.completion, n.afterLoc), N(n), b;
                    }
                  },
                  catch: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                      var n = this.tryEntries[t];
                      if (n.tryLoc === e) {
                        var r = n.completion;
                        if ("throw" === r.type) {
                          var o = r.arg;
                          N(n);
                        }
                        return o;
                      }
                    }
                    throw new Error("illegal catch attempt");
                  },
                  delegateYield: function (e, n, r) {
                    return (
                      (this.delegate = {
                        iterator: j(e),
                        resultName: n,
                        nextLoc: r,
                      }),
                      "next" === this.method && (this.arg = t),
                      b
                    );
                  },
                }),
                n
              );
            }
            (e.exports = o),
              (e.exports.__esModule = !0),
              (e.exports.default = e.exports);
          },
          423: (e) => {
            function t(n) {
              return (
                (e.exports = t =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
                    ? function (e) {
                        return typeof e;
                      }
                    : function (e) {
                        return e &&
                          "function" == typeof Symbol &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? "symbol"
                          : typeof e;
                      }),
                (e.exports.__esModule = !0),
                (e.exports.default = e.exports),
                t(n)
              );
            }
            (e.exports = t),
              (e.exports.__esModule = !0),
              (e.exports.default = e.exports);
          },
          614: (e, t, n) => {
            var r = n(91)();
            e.exports = r;
            try {
              regeneratorRuntime = r;
            } catch (e) {
              "object" == typeof globalThis
                ? (globalThis.regeneratorRuntime = r)
                : Function("r", "regeneratorRuntime = r")(r);
            }
          },
          468: (e, t) => {
            var n;
            !(function () {
              "use strict";
              var r = {}.hasOwnProperty;
              function o() {
                for (var e = "", t = 0; t < arguments.length; t++) {
                  var n = arguments[t];
                  n && (e = i(e, a(n)));
                }
                return e;
              }
              function a(e) {
                if ("string" == typeof e || "number" == typeof e) return e;
                if ("object" != typeof e) return "";
                if (Array.isArray(e)) return o.apply(null, e);
                if (
                  e.toString !== Object.prototype.toString &&
                  !e.toString.toString().includes("[native code]")
                )
                  return e.toString();
                var t = "";
                for (var n in e) r.call(e, n) && e[n] && (t = i(t, n));
                return t;
              }
              function i(e, t) {
                return t ? (e ? e + " " + t : e + t) : e;
              }
              e.exports
                ? ((o.default = o), (e.exports = o))
                : void 0 ===
                    (n = function () {
                      return o;
                    }.apply(t, [])) || (e.exports = n);
            })();
          },
        },
        r = {};
      function o(e) {
        var t = r[e];
        if (void 0 !== t) return t.exports;
        var a = (r[e] = { id: e, exports: {} });
        return n[e](a, a.exports, o), a.exports;
      }
      (o.m = n),
        (o.n = (e) => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return o.d(t, { a: t }), t;
        }),
        (t = Object.getPrototypeOf
          ? (e) => Object.getPrototypeOf(e)
          : (e) => e.__proto__),
        (o.t = function (n, r) {
          if ((1 & r && (n = this(n)), 8 & r)) return n;
          if ("object" == typeof n && n) {
            if (4 & r && n.__esModule) return n;
            if (16 & r && "function" == typeof n.then) return n;
          }
          var a = Object.create(null);
          o.r(a);
          var i = {};
          e = e || [null, t({}), t([]), t(t)];
          for (
            var l = 2 & r && n;
            "object" == typeof l && !~e.indexOf(l);
            l = t(l)
          )
            Object.getOwnPropertyNames(l).forEach((e) => (i[e] = () => n[e]));
          return (i.default = () => n), o.d(a, i), a;
        }),
        (o.d = (e, t) => {
          for (var n in t)
            o.o(t, n) &&
              !o.o(e, n) &&
              Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        }),
        (o.g = (function () {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")();
          } catch (e) {
            if ("object" == typeof window) return window;
          }
        })()),
        (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (o.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (() => {
          var e;
          o.g.importScripts && (e = o.g.location + "");
          var t = o.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var n = t.getElementsByTagName("script");
            if (n.length)
              for (
                var r = n.length - 1;
                r > -1 && (!e || !/^http(s?):/.test(e));

              )
                e = n[r--].src;
          }
          if (!e)
            throw new Error(
              "Automatic publicPath is not supported in this browser"
            );
          (e = e
            .replace(/#.*$/, "")
            .replace(/\?.*$/, "")
            .replace(/\/[^\/]+$/, "/")),
            (o.p = e);
        })(),
        (o.b = document.baseURI || self.location.href),
        (o.nc = void 0),
        (() => {
          "use strict";
          const e = o(372),
            t = o(801),
            n = o(301),
            r = document.getElementById("app"),
            a = (0, t.createRoot)(r);
          Object.defineProperty(window, "__SERVER_ENV__", {
            set() {
              console.log("禁止修改此值");
            },
            get: () => production,
          }),
            a.render(e.createElement(n.default, null));
        })();
    })();
  }
);
