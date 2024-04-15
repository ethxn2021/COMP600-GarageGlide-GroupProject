import {
  require_react
} from "/build/_shared/chunk-CJ4MY3PQ.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var import_react = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/env.js
var i = Object.defineProperty;
var d = (t4, e2, n2) => e2 in t4 ? i(t4, e2, { enumerable: true, configurable: true, writable: true, value: n2 }) : t4[e2] = n2;
var r = (t4, e2, n2) => (d(t4, typeof e2 != "symbol" ? e2 + "" : e2, n2), n2);
var o = class {
  constructor() {
    r(this, "current", this.detect());
    r(this, "handoffState", "pending");
    r(this, "currentId", 0);
  }
  set(e2) {
    this.current !== e2 && (this.handoffState = "pending", this.currentId = 0, this.current = e2);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
};
var s = new o();

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var l = (e2, f) => {
  s.isServer ? (0, import_react.useEffect)(e2, f) : (0, import_react.useLayoutEffect)(e2, f);
};

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
var import_react2 = __toESM(require_react(), 1);
function s2(e2) {
  let r3 = (0, import_react2.useRef)(e2);
  return l(() => {
    r3.current = e2;
  }, [e2]), r3;
}

// node_modules/@headlessui/react/dist/hooks/use-event.js
var import_react3 = __toESM(require_react(), 1);
var o2 = function(t4) {
  let e2 = s2(t4);
  return import_react3.default.useCallback((...r3) => e2.current(...r3), [e2]);
};

// node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
var import_react4 = __toESM(require_react(), 1);
function l2() {
  let [e2, f] = (0, import_react4.useState)(s.isHandoffComplete);
  return e2 && s.isHandoffComplete === false && f(false), (0, import_react4.useEffect)(() => {
    e2 !== true && f(true);
  }, [e2]), (0, import_react4.useEffect)(() => s.handoff(), []), e2;
}

// node_modules/@headlessui/react/dist/utils/match.js
function u(r3, n2, ...a2) {
  if (r3 in n2) {
    let e2 = n2[r3];
    return typeof e2 == "function" ? e2(...a2) : e2;
  }
  let t4 = new Error(`Tried to handle "${r3}" but there is no handler defined. Only defined handlers are: ${Object.keys(n2).map((e2) => `"${e2}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t4, u), t4;
}

// node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var import_react5 = __toESM(require_react(), 1);
var u2 = Symbol();
function T(t4, n2 = true) {
  return Object.assign(t4, { [u2]: n2 });
}
function y(...t4) {
  let n2 = (0, import_react5.useRef)(t4);
  (0, import_react5.useEffect)(() => {
    n2.current = t4;
  }, [t4]);
  let c4 = o2((e2) => {
    for (let o4 of n2.current)
      o4 != null && (typeof o4 == "function" ? o4(e2) : o4.current = e2);
  });
  return t4.every((e2) => e2 == null || (e2 == null ? void 0 : e2[u2])) ? void 0 : c4;
}

// node_modules/@headlessui/react/dist/utils/class-names.js
function e(...n2) {
  return n2.filter(Boolean).join(" ");
}

// node_modules/@headlessui/react/dist/utils/render.js
var import_react6 = __toESM(require_react(), 1);
var S = ((a2) => (a2[a2.None = 0] = "None", a2[a2.RenderStrategy = 1] = "RenderStrategy", a2[a2.Static = 2] = "Static", a2))(S || {});
var j = ((e2) => (e2[e2.Unmount = 0] = "Unmount", e2[e2.Hidden = 1] = "Hidden", e2))(j || {});
function X({ ourProps: r3, theirProps: t4, slot: e2, defaultTag: a2, features: s3, visible: n2 = true, name: f }) {
  let o4 = N(t4, r3);
  if (n2)
    return c2(o4, e2, a2, f);
  let u3 = s3 != null ? s3 : 0;
  if (u3 & 2) {
    let { static: l5 = false, ...p2 } = o4;
    if (l5)
      return c2(p2, e2, a2, f);
  }
  if (u3 & 1) {
    let { unmount: l5 = true, ...p2 } = o4;
    return u(l5 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return c2({ ...p2, hidden: true, style: { display: "none" } }, e2, a2, f);
    } });
  }
  return c2(o4, e2, a2, f);
}
function c2(r3, t4 = {}, e2, a2) {
  let { as: s3 = e2, children: n2, refName: f = "ref", ...o4 } = g(r3, ["unmount", "static"]), u3 = r3.ref !== void 0 ? { [f]: r3.ref } : {}, l5 = typeof n2 == "function" ? n2(t4) : n2;
  "className" in o4 && o4.className && typeof o4.className == "function" && (o4.className = o4.className(t4));
  let p2 = {};
  if (t4) {
    let i3 = false, m = [];
    for (let [y2, d3] of Object.entries(t4))
      typeof d3 == "boolean" && (i3 = true), d3 === true && m.push(y2);
    i3 && (p2["data-headlessui-state"] = m.join(" "));
  }
  if (s3 === import_react6.Fragment && Object.keys(R(o4)).length > 0) {
    if (!(0, import_react6.isValidElement)(l5) || Array.isArray(l5) && l5.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${a2} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(o4).map((d3) => `  - ${d3}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((d3) => `  - ${d3}`).join(`
`)].join(`
`));
    let i3 = l5.props, m = typeof (i3 == null ? void 0 : i3.className) == "function" ? (...d3) => e(i3 == null ? void 0 : i3.className(...d3), o4.className) : e(i3 == null ? void 0 : i3.className, o4.className), y2 = m ? { className: m } : {};
    return (0, import_react6.cloneElement)(l5, Object.assign({}, N(l5.props, R(g(o4, ["ref"]))), p2, u3, w(l5.ref, u3.ref), y2));
  }
  return (0, import_react6.createElement)(s3, Object.assign({}, g(o4, ["ref"]), s3 !== import_react6.Fragment && u3, s3 !== import_react6.Fragment && p2), l5);
}
function w(...r3) {
  return { ref: r3.every((t4) => t4 == null) ? void 0 : (t4) => {
    for (let e2 of r3)
      e2 != null && (typeof e2 == "function" ? e2(t4) : e2.current = t4);
  } };
}
function N(...r3) {
  var a2;
  if (r3.length === 0)
    return {};
  if (r3.length === 1)
    return r3[0];
  let t4 = {}, e2 = {};
  for (let s3 of r3)
    for (let n2 in s3)
      n2.startsWith("on") && typeof s3[n2] == "function" ? ((a2 = e2[n2]) != null || (e2[n2] = []), e2[n2].push(s3[n2])) : t4[n2] = s3[n2];
  if (t4.disabled || t4["aria-disabled"])
    return Object.assign(t4, Object.fromEntries(Object.keys(e2).map((s3) => [s3, void 0])));
  for (let s3 in e2)
    Object.assign(t4, { [s3](n2, ...f) {
      let o4 = e2[s3];
      for (let u3 of o4) {
        if ((n2 instanceof Event || (n2 == null ? void 0 : n2.nativeEvent) instanceof Event) && n2.defaultPrevented)
          return;
        u3(n2, ...f);
      }
    } });
  return t4;
}
function D(r3) {
  var t4;
  return Object.assign((0, import_react6.forwardRef)(r3), { displayName: (t4 = r3.displayName) != null ? t4 : r3.name });
}
function R(r3) {
  let t4 = Object.assign({}, r3);
  for (let e2 in t4)
    t4[e2] === void 0 && delete t4[e2];
  return t4;
}
function g(r3, t4 = []) {
  let e2 = Object.assign({}, r3);
  for (let a2 of t4)
    a2 in e2 && delete e2[a2];
  return e2;
}

// node_modules/@headlessui/react/dist/internal/open-closed.js
var import_react7 = __toESM(require_react(), 1);
var n = (0, import_react7.createContext)(null);
n.displayName = "OpenClosedContext";
var d2 = ((e2) => (e2[e2.Open = 1] = "Open", e2[e2.Closed = 2] = "Closed", e2[e2.Closing = 4] = "Closing", e2[e2.Opening = 8] = "Opening", e2))(d2 || {});
function C() {
  return (0, import_react7.useContext)(n);
}
function c3({ value: o4, children: r3 }) {
  return import_react7.default.createElement(n.Provider, { value: o4 }, r3);
}

export {
  s,
  l,
  s2,
  o2 as o,
  l2,
  u,
  T,
  y,
  e,
  S,
  j,
  X,
  D,
  d2 as d,
  C,
  c3 as c
};
//# sourceMappingURL=/build/_shared/chunk-ASDNAVPE.js.map
