import {
  C,
  D,
  S,
  X,
  c,
  d,
  e,
  j,
  l,
  l2,
  o,
  s2 as s,
  u,
  y
} from "/build/_shared/chunk-ASDNAVPE.js";
import {
  es_default
} from "/build/_shared/chunk-7XQZTEX6.js";
import {
  XMarkIcon_default
} from "/build/_shared/chunk-ZMC54G4P.js";
import {
  CheckCircleIcon_default
} from "/build/_shared/chunk-IJDWAEBR.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-7PHB3BFD.js";
import {
  require_react
} from "/build/_shared/chunk-CJ4MY3PQ.js";
import {
  createHotContext
} from "/build/_shared/chunk-4KLX3EKH.js";
import "/build/_shared/chunk-JR22VO6P.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/contact.tsx
var import_react5 = __toESM(require_react());

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
var import_react = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/micro-task.js
function t(e2) {
  typeof queueMicrotask == "function" ? queueMicrotask(e2) : Promise.resolve().then(e2).catch((o4) => setTimeout(() => {
    throw o4;
  }));
}

// node_modules/@headlessui/react/dist/utils/disposables.js
function o2() {
  let n2 = [], r2 = { addEventListener(e2, t2, s3, a) {
    return e2.addEventListener(t2, s3, a), r2.add(() => e2.removeEventListener(t2, s3, a));
  }, requestAnimationFrame(...e2) {
    let t2 = requestAnimationFrame(...e2);
    return r2.add(() => cancelAnimationFrame(t2));
  }, nextFrame(...e2) {
    return r2.requestAnimationFrame(() => r2.requestAnimationFrame(...e2));
  }, setTimeout(...e2) {
    let t2 = setTimeout(...e2);
    return r2.add(() => clearTimeout(t2));
  }, microTask(...e2) {
    let t2 = { current: true };
    return t(() => {
      t2.current && e2[0]();
    }), r2.add(() => {
      t2.current = false;
    });
  }, style(e2, t2, s3) {
    let a = e2.style.getPropertyValue(t2);
    return Object.assign(e2.style, { [t2]: s3 }), this.add(() => {
      Object.assign(e2.style, { [t2]: a });
    });
  }, group(e2) {
    let t2 = o2();
    return e2(t2), this.add(() => t2.dispose());
  }, add(e2) {
    return n2.push(e2), () => {
      let t2 = n2.indexOf(e2);
      if (t2 >= 0)
        for (let s3 of n2.splice(t2, 1))
          s3();
    };
  }, dispose() {
    for (let e2 of n2.splice(0))
      e2();
  } };
  return r2;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
function p() {
  let [e2] = (0, import_react.useState)(o2);
  return (0, import_react.useEffect)(() => () => e2.dispose(), [e2]), e2;
}

// node_modules/@headlessui/react/dist/hooks/use-is-mounted.js
var import_react2 = __toESM(require_react(), 1);
function f() {
  let e2 = (0, import_react2.useRef)(false);
  return l(() => (e2.current = true, () => {
    e2.current = false;
  }), []), e2;
}

// node_modules/@headlessui/react/dist/hooks/use-flags.js
var import_react3 = __toESM(require_react(), 1);
function c2(a = 0) {
  let [l4, r2] = (0, import_react3.useState)(a), t2 = f(), o4 = (0, import_react3.useCallback)((e2) => {
    t2.current && r2((u2) => u2 | e2);
  }, [l4, t2]), m2 = (0, import_react3.useCallback)((e2) => Boolean(l4 & e2), [l4]), s3 = (0, import_react3.useCallback)((e2) => {
    t2.current && r2((u2) => u2 & ~e2);
  }, [r2, t2]), g = (0, import_react3.useCallback)((e2) => {
    t2.current && r2((u2) => u2 ^ e2);
  }, [r2]);
  return { flags: l4, addFlag: o4, hasFlag: m2, removeFlag: s3, toggleFlag: g };
}

// node_modules/@headlessui/react/dist/components/transitions/transition.js
var import_react4 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/once.js
function l3(r2) {
  let e2 = { called: false };
  return (...t2) => {
    if (!e2.called)
      return e2.called = true, r2(...t2);
  };
}

// node_modules/@headlessui/react/dist/components/transitions/utils/transition.js
function d2(t2, ...e2) {
  t2 && e2.length > 0 && t2.classList.add(...e2);
}
function v(t2, ...e2) {
  t2 && e2.length > 0 && t2.classList.remove(...e2);
}
function F(t2, e2) {
  let n2 = o2();
  if (!t2)
    return n2.dispose;
  let { transitionDuration: m2, transitionDelay: o4 } = getComputedStyle(t2), [u2, p2] = [m2, o4].map((a) => {
    let [r2 = 0] = a.split(",").filter(Boolean).map((i) => i.includes("ms") ? parseFloat(i) : parseFloat(i) * 1e3).sort((i, f3) => f3 - i);
    return r2;
  }), l4 = u2 + p2;
  if (l4 !== 0) {
    n2.group((r2) => {
      r2.setTimeout(() => {
        e2(), r2.dispose();
      }, l4), r2.addEventListener(t2, "transitionrun", (i) => {
        i.target === i.currentTarget && r2.dispose();
      });
    });
    let a = n2.addEventListener(t2, "transitionend", (r2) => {
      r2.target === r2.currentTarget && (e2(), a());
    });
  } else
    e2();
  return n2.add(() => e2()), n2.dispose;
}
function y2(t2, e2, n2, m2) {
  let o4 = n2 ? "enter" : "leave", u2 = o2(), p2 = m2 !== void 0 ? l3(m2) : () => {
  };
  o4 === "enter" && (t2.removeAttribute("hidden"), t2.style.display = "");
  let l4 = u(o4, { enter: () => e2.enter, leave: () => e2.leave }), a = u(o4, { enter: () => e2.enterTo, leave: () => e2.leaveTo }), r2 = u(o4, { enter: () => e2.enterFrom, leave: () => e2.leaveFrom });
  return v(t2, ...e2.enter, ...e2.enterTo, ...e2.enterFrom, ...e2.leave, ...e2.leaveFrom, ...e2.leaveTo, ...e2.entered), d2(t2, ...l4, ...r2), u2.nextFrame(() => {
    v(t2, ...r2), d2(t2, ...a), F(t2, () => (v(t2, ...l4), d2(t2, ...e2.entered), p2()));
  }), u2.dispose;
}

// node_modules/@headlessui/react/dist/hooks/use-transition.js
function D2({ container: i, direction: t2, classes: o4, onStart: s3, onStop: u2 }) {
  let a = f(), c4 = p(), r2 = s(t2);
  l(() => {
    let e2 = o2();
    c4.add(e2.dispose);
    let n2 = i.current;
    if (n2 && r2.current !== "idle" && a.current)
      return e2.dispose(), s3.current(r2.current), e2.add(y2(n2, o4.current, r2.current === "enter", () => {
        e2.dispose(), u2.current(r2.current);
      })), e2.dispose;
  }, [t2]);
}

// node_modules/@headlessui/react/dist/components/transitions/transition.js
function x(t2 = "") {
  return t2.split(" ").filter((n2) => n2.trim().length > 1);
}
var I = (0, import_react4.createContext)(null);
I.displayName = "TransitionContext";
var Ce = ((r2) => (r2.Visible = "visible", r2.Hidden = "hidden", r2))(Ce || {});
function Ee() {
  let t2 = (0, import_react4.useContext)(I);
  if (t2 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return t2;
}
function be() {
  let t2 = (0, import_react4.useContext)(_);
  if (t2 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return t2;
}
var _ = (0, import_react4.createContext)(null);
_.displayName = "NestingContext";
function M(t2) {
  return "children" in t2 ? M(t2.children) : t2.current.filter(({ el: n2 }) => n2.current !== null).filter(({ state: n2 }) => n2 === "visible").length > 0;
}
function re(t2, n2) {
  let r2 = s(t2), o4 = (0, import_react4.useRef)([]), N = f(), H = p(), p2 = o((s3, e2 = j.Hidden) => {
    let a = o4.current.findIndex(({ el: i }) => i === s3);
    a !== -1 && (u(e2, { [j.Unmount]() {
      o4.current.splice(a, 1);
    }, [j.Hidden]() {
      o4.current[a].state = "hidden";
    } }), H.microTask(() => {
      var i;
      !M(o4) && N.current && ((i = r2.current) == null || i.call(r2));
    }));
  }), P = o((s3) => {
    let e2 = o4.current.find(({ el: a }) => a === s3);
    return e2 ? e2.state !== "visible" && (e2.state = "visible") : o4.current.push({ el: s3, state: "visible" }), () => p2(s3, j.Unmount);
  }), h = (0, import_react4.useRef)([]), v2 = (0, import_react4.useRef)(Promise.resolve()), T = (0, import_react4.useRef)({ enter: [], leave: [], idle: [] }), g = o((s3, e2, a) => {
    h.current.splice(0), n2 && (n2.chains.current[e2] = n2.chains.current[e2].filter(([i]) => i !== s3)), n2 == null || n2.chains.current[e2].push([s3, new Promise((i) => {
      h.current.push(i);
    })]), n2 == null || n2.chains.current[e2].push([s3, new Promise((i) => {
      Promise.all(T.current[e2].map(([l4, R]) => R)).then(() => i());
    })]), e2 === "enter" ? v2.current = v2.current.then(() => n2 == null ? void 0 : n2.wait.current).then(() => a(e2)) : a(e2);
  }), f3 = o((s3, e2, a) => {
    Promise.all(T.current[e2].splice(0).map(([i, l4]) => l4)).then(() => {
      var i;
      (i = h.current.shift()) == null || i();
    }).then(() => a(e2));
  });
  return (0, import_react4.useMemo)(() => ({ children: o4, register: P, unregister: p2, onStart: g, onStop: f3, wait: v2, chains: T }), [P, p2, o4, g, f3, T, v2]);
}
function Se() {
}
var xe = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function ie(t2) {
  var r2;
  let n2 = {};
  for (let o4 of xe)
    n2[o4] = (r2 = t2[o4]) != null ? r2 : Se;
  return n2;
}
function Pe(t2) {
  let n2 = (0, import_react4.useRef)(ie(t2));
  return (0, import_react4.useEffect)(() => {
    n2.current = ie(t2);
  }, [t2]), n2;
}
var Re = "div";
var oe = S.RenderStrategy;
function ye(t2, n2) {
  let { beforeEnter: r2, afterEnter: o4, beforeLeave: N, afterLeave: H, enter: p2, enterFrom: P, enterTo: h, entered: v2, leave: T, leaveFrom: g, leaveTo: f3, ...s3 } = t2, e2 = (0, import_react4.useRef)(null), a = y(e2, n2), i = s3.unmount ? j.Unmount : j.Hidden, { show: l4, appear: R, initial: d3 } = Ee(), [u2, U] = (0, import_react4.useState)(l4 ? "visible" : "hidden"), K = be(), { register: L, unregister: w } = K, j2 = (0, import_react4.useRef)(null);
  (0, import_react4.useEffect)(() => L(e2), [L, e2]), (0, import_react4.useEffect)(() => {
    if (i === j.Hidden && e2.current) {
      if (l4 && u2 !== "visible") {
        U("visible");
        return;
      }
      return u(u2, { ["hidden"]: () => w(e2), ["visible"]: () => L(e2) });
    }
  }, [u2, e2, L, w, l4, i]);
  let k = s({ enter: x(p2), enterFrom: x(P), enterTo: x(h), entered: x(v2), leave: x(T), leaveFrom: x(g), leaveTo: x(f3) }), O = Pe({ beforeEnter: r2, afterEnter: o4, beforeLeave: N, afterLeave: H }), G = l2();
  (0, import_react4.useEffect)(() => {
    if (G && u2 === "visible" && e2.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [e2, u2, G]);
  let B = d3 && !R, ae = (() => !G || B || j2.current === l4 ? "idle" : l4 ? "enter" : "leave")(), D3 = c2(0), le = o((C2) => u(C2, { enter: () => {
    D3.addFlag(d.Opening), O.current.beforeEnter();
  }, leave: () => {
    D3.addFlag(d.Closing), O.current.beforeLeave();
  }, idle: () => {
  } })), ue = o((C2) => u(C2, { enter: () => {
    D3.removeFlag(d.Opening), O.current.afterEnter();
  }, leave: () => {
    D3.removeFlag(d.Closing), O.current.afterLeave();
  }, idle: () => {
  } })), V = re(() => {
    U("hidden"), w(e2);
  }, K);
  D2({ container: e2, classes: k, direction: ae, onStart: s((C2) => {
    V.onStart(e2, C2, le);
  }), onStop: s((C2) => {
    V.onStop(e2, C2, ue), C2 === "leave" && !M(V) && (U("hidden"), w(e2));
  }) }), (0, import_react4.useEffect)(() => {
    B && (i === j.Hidden ? j2.current = null : j2.current = l4);
  }, [l4, B, u2]);
  let J = s3, Te = { ref: a };
  return R && l4 && d3 && (J = { ...J, className: e(s3.className, ...k.current.enter, ...k.current.enterFrom) }), import_react4.default.createElement(_.Provider, { value: V }, import_react4.default.createElement(c, { value: u(u2, { ["visible"]: d.Open, ["hidden"]: d.Closed }) | D3.flags }, X({ ourProps: Te, theirProps: J, defaultTag: Re, features: oe, visible: u2 === "visible", name: "Transition.Child" })));
}
function Ne(t2, n2) {
  let { show: r2, appear: o4 = false, unmount: N, ...H } = t2, p2 = (0, import_react4.useRef)(null), P = y(p2, n2);
  l2();
  let h = C();
  if (r2 === void 0 && h !== null && (r2 = (h & d.Open) === d.Open), ![true, false].includes(r2))
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [v2, T] = (0, import_react4.useState)(r2 ? "visible" : "hidden"), g = re(() => {
    T("hidden");
  }), [f3, s3] = (0, import_react4.useState)(true), e2 = (0, import_react4.useRef)([r2]);
  l(() => {
    f3 !== false && e2.current[e2.current.length - 1] !== r2 && (e2.current.push(r2), s3(false));
  }, [e2, r2]);
  let a = (0, import_react4.useMemo)(() => ({ show: r2, appear: o4, initial: f3 }), [r2, o4, f3]);
  (0, import_react4.useEffect)(() => {
    if (r2)
      T("visible");
    else if (!M(g))
      T("hidden");
    else {
      let d3 = p2.current;
      if (!d3)
        return;
      let u2 = d3.getBoundingClientRect();
      u2.x === 0 && u2.y === 0 && u2.width === 0 && u2.height === 0 && T("hidden");
    }
  }, [r2, g]);
  let i = { unmount: N }, l4 = o(() => {
    var d3;
    f3 && s3(false), (d3 = t2.beforeEnter) == null || d3.call(t2);
  }), R = o(() => {
    var d3;
    f3 && s3(false), (d3 = t2.beforeLeave) == null || d3.call(t2);
  });
  return import_react4.default.createElement(_.Provider, { value: g }, import_react4.default.createElement(I.Provider, { value: a }, X({ ourProps: { ...i, as: import_react4.Fragment, children: import_react4.default.createElement(se, { ref: P, ...i, ...H, beforeEnter: l4, beforeLeave: R }) }, theirProps: {}, defaultTag: import_react4.Fragment, features: oe, visible: v2 === "visible", name: "Transition" })));
}
function He(t2, n2) {
  let r2 = (0, import_react4.useContext)(I) !== null, o4 = C() !== null;
  return import_react4.default.createElement(import_react4.default.Fragment, null, !r2 && o4 ? import_react4.default.createElement(z, { ref: n2, ...t2 }) : import_react4.default.createElement(se, { ref: n2, ...t2 }));
}
var z = D(Ne);
var se = D(ye);
var De = D(He);
var $e = Object.assign(z, { Child: De, Root: z });

// app/routes/contact.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\contact.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\contact.tsx"
  );
  import.meta.hot.lastModified = "1706365588475.9304";
}
function Contact() {
  _s();
  const [formStatus, setFormStatus] = (0, import_react5.useState)({
    submitted: false,
    error: null
  });
  const [show, setShow] = (0, import_react5.useState)(true);
  const sendEmail = async (e2) => {
    e2.preventDefault();
    const form = e2.currentTarget;
    const formData = new FormData(form);
    try {
      const result = await es_default.sendForm("service_1r5awa7", "template_36yib84", form, "ifIYm02lZT5rdQsmD");
      console.log(result);
      form.reset();
      setFormStatus({
        submitted: true,
        error: null
      });
    } catch (error) {
      console.error(error);
      setFormStatus({
        submitted: false,
        error: "An error occurred. Please try again."
      });
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:mx-auto sm:w-full sm:max-w-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mt-10 text-center text-2xl font-bold leading-9 tracking-tight pt-10", style: {
      color: "#112D4E"
    }, children: "Contact Us" }, void 0, false, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 65,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 63,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { "aria-live": "assertive", className: "pointer-events-none fixed inset-0 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($e, { show: formStatus.submitted && show, enter: "transform ease-out duration-300 transition", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "transition ease-in duration-100", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckCircleIcon_default, { className: "h-5 w-5 text-green-400", "aria-hidden": "true" }, void 0, false, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 79,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 78,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-3 w-30 flex-1 pt-0.5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-900", children: "Thank you!" }, void 0, false, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 82,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-sm text-gray-500", children: "We will get back to you shortly." }, void 0, false, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 83,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 81,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4 flex flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2", onClick: () => {
        setShow(false);
        setFormStatus({
          submitted: false,
          error: null
        });
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Close" }, void 0, false, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 93,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XMarkIcon_default, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 94,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 86,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 85,
        columnNumber: 19
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 77,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 76,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 75,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 74,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 73,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-10 sm:mx-auto sm:w-full sm:max-w-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { className: "contact_form space-y-6", onSubmit: sendEmail, action: "/contact", method: "POST", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "firstName", className: "block text-sm font-medium leading-6 text-gray-900", style: {
          fontSize: "16px",
          color: "#112D4E"
        }, children: "First Name" }, void 0, false, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 108,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "firstName", name: "firstName_from", type: "text", required: true, className: "block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6", style: {
          fontSize: "16px",
          borderColor: "#112D4E"
        } }, void 0, false, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 115,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 114,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 107,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "lastName", className: "block text-sm font-medium leading-6 text-gray-900", style: {
          fontSize: "16px",
          color: "#112D4E"
        }, children: "Last Name" }, void 0, false, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 124,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "lastName", name: "lastName_from", type: "text", required: true, className: "block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6", style: {
          fontSize: "16px",
          borderColor: "#112D4E"
        } }, void 0, false, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 131,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 130,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 123,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "vehicleRegistration", className: "block text-sm font-medium leading-6 text-gray-900", style: {
          fontSize: "16px",
          color: "#112D4E"
        }, children: "Vehicle Registration" }, void 0, false, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 140,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "vehicleRegistration", name: "vehicleRegistration", type: "text", required: true, className: "block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6", style: {
          fontSize: "16px",
          borderColor: "#112D4E"
        } }, void 0, false, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 147,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 146,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 139,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "phone", className: "block text-sm font-medium leading-6 text-gray-900", style: {
          fontSize: "16px",
          color: "#112D4E"
        }, children: "Phone Number" }, void 0, false, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 156,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "phone", name: "phone_from", type: "text", required: true, className: "block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6", style: {
          fontSize: "16px",
          borderColor: "#112D4E"
        } }, void 0, false, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 163,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 162,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 155,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium leading-6 text-gray-900", style: {
          fontSize: "16px",
          color: "#112D4E"
        }, children: "Email address" }, void 0, false, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 172,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "email", name: "email_from", type: "email", autoComplete: "email", required: true, className: "block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6", style: {
          fontSize: "16px",
          borderColor: "#112D4E"
        } }, void 0, false, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 179,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 178,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 171,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("legend", { children: "Preferred Contact Method" }, void 0, false, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 188,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "radio", name: "contactMethod", value: "email", required: true }, void 0, false, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 190,
            columnNumber: 17
          }, this),
          " Email"
        ] }, void 0, true, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 189,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 192,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "radio", name: "contactMethod", value: "phone", required: true }, void 0, false, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 194,
            columnNumber: 17
          }, this),
          " Phone"
        ] }, void 0, true, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 193,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 187,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "centre", className: "block text-sm font-medium leading-6 text-gray-900", style: {
          fontSize: "16px",
          color: "#112D4E"
        }, children: "Centre" }, void 0, false, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 200,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { id: "centre", name: "centre", required: true, className: "block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6", style: {
          fontSize: "16px",
          borderColor: "#112D4E"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "Canterbury", children: "Canterbury" }, void 0, false, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 211,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "Medway", children: "Medway" }, void 0, false, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 212,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 207,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 199,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "message", className: "block text-sm font-medium leading-6 text-gray-900", style: {
        fontSize: "16px",
        color: "#112D4E"
      }, children: "Your Message" }, void 0, false, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 217,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { style: {
        borderColor: "#112D4E",
        fontSize: "16px"
      }, id: "message", name: "message", className: "w-full", required: true }, void 0, false, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 223,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "flex w-full justify-center rounded-full px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", style: {
        backgroundColor: "#112D4E",
        fontSize: "16px"
      }, children: "Submit" }, void 0, false, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 230,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 229,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 105,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 104,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 61,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 60,
    columnNumber: 10
  }, this);
}
_s(Contact, "llWJV4m5SSyYpEGnYqw8aM+Y7bY=");
_c = Contact;
var _c;
$RefreshReg$(_c, "Contact");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Contact as default
};
//# sourceMappingURL=/build/routes/contact-J43WKLRO.js.map
