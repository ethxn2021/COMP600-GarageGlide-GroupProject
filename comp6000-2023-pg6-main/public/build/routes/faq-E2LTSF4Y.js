import {
  C,
  D,
  S,
  T,
  X,
  c,
  d,
  l,
  l2,
  o,
  s,
  u,
  y
} from "/build/_shared/chunk-ASDNAVPE.js";
import {
  MinusSmallIcon_default,
  PlusSmallIcon_default
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

// node_modules/@headlessui/react/dist/hooks/use-id.js
var import_react = __toESM(require_react(), 1);
var o2;
var I = (o2 = import_react.default.useId) != null ? o2 : function() {
  let n = l2(), [e2, u2] = import_react.default.useState(n ? () => s.nextId() : null);
  return l(() => {
    e2 === null && u2(s.nextId());
  }, [e2]), e2 != null ? "" + e2 : void 0;
};

// node_modules/@headlessui/react/dist/utils/owner.js
function e(r3) {
  return s.isServer ? null : r3 instanceof Node ? r3.ownerDocument : r3 != null && r3.hasOwnProperty("current") && r3.current instanceof Node ? r3.current.ownerDocument : document;
}

// node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js
var import_react2 = __toESM(require_react(), 1);
function i(t3) {
  var n;
  if (t3.type)
    return t3.type;
  let e2 = (n = t3.as) != null ? n : "button";
  if (typeof e2 == "string" && e2.toLowerCase() === "button")
    return "button";
}
function s2(t3, e2) {
  let [n, u2] = (0, import_react2.useState)(() => i(t3));
  return l(() => {
    u2(i(t3));
  }, [t3.type, t3.as]), l(() => {
    n || e2.current && e2.current instanceof HTMLButtonElement && !e2.current.hasAttribute("type") && u2("button");
  }, [n, e2]), n;
}

// node_modules/@headlessui/react/dist/utils/bugs.js
function r(n) {
  let e2 = n.parentElement, l3 = null;
  for (; e2 && !(e2 instanceof HTMLFieldSetElement); )
    e2 instanceof HTMLLegendElement && (l3 = e2), e2 = e2.parentElement;
  let t3 = (e2 == null ? void 0 : e2.getAttribute("disabled")) === "";
  return t3 && i2(l3) ? false : t3;
}
function i2(n) {
  if (!n)
    return false;
  let e2 = n.previousElementSibling;
  for (; e2 !== null; ) {
    if (e2 instanceof HTMLLegendElement)
      return false;
    e2 = e2.previousElementSibling;
  }
  return true;
}

// node_modules/@headlessui/react/dist/components/keyboard.js
var o4 = ((r3) => (r3.Space = " ", r3.Enter = "Enter", r3.Escape = "Escape", r3.Backspace = "Backspace", r3.Delete = "Delete", r3.ArrowLeft = "ArrowLeft", r3.ArrowUp = "ArrowUp", r3.ArrowRight = "ArrowRight", r3.ArrowDown = "ArrowDown", r3.Home = "Home", r3.End = "End", r3.PageUp = "PageUp", r3.PageDown = "PageDown", r3.Tab = "Tab", r3))(o4 || {});

// node_modules/@headlessui/react/dist/components/disclosure/disclosure.js
var import_react4 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/start-transition.js
var import_react3 = __toESM(require_react(), 1);
var t2;
var a = (t2 = import_react3.default.startTransition) != null ? t2 : function(i3) {
  i3();
};

// node_modules/@headlessui/react/dist/components/disclosure/disclosure.js
var q = ((o5) => (o5[o5.Open = 0] = "Open", o5[o5.Closed = 1] = "Closed", o5))(q || {});
var z = ((t3) => (t3[t3.ToggleDisclosure = 0] = "ToggleDisclosure", t3[t3.CloseDisclosure = 1] = "CloseDisclosure", t3[t3.SetButtonId = 2] = "SetButtonId", t3[t3.SetPanelId = 3] = "SetPanelId", t3[t3.LinkPanel = 4] = "LinkPanel", t3[t3.UnlinkPanel = 5] = "UnlinkPanel", t3))(z || {});
var Q = { [0]: (e2) => ({ ...e2, disclosureState: u(e2.disclosureState, { [0]: 1, [1]: 0 }) }), [1]: (e2) => e2.disclosureState === 1 ? e2 : { ...e2, disclosureState: 1 }, [4](e2) {
  return e2.linkedPanel === true ? e2 : { ...e2, linkedPanel: true };
}, [5](e2) {
  return e2.linkedPanel === false ? e2 : { ...e2, linkedPanel: false };
}, [2](e2, n) {
  return e2.buttonId === n.buttonId ? e2 : { ...e2, buttonId: n.buttonId };
}, [3](e2, n) {
  return e2.panelId === n.panelId ? e2 : { ...e2, panelId: n.panelId };
} };
var k = (0, import_react4.createContext)(null);
k.displayName = "DisclosureContext";
function M(e2) {
  let n = (0, import_react4.useContext)(k);
  if (n === null) {
    let o5 = new Error(`<${e2} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o5, M), o5;
  }
  return n;
}
var v = (0, import_react4.createContext)(null);
v.displayName = "DisclosureAPIContext";
function w(e2) {
  let n = (0, import_react4.useContext)(v);
  if (n === null) {
    let o5 = new Error(`<${e2} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o5, w), o5;
  }
  return n;
}
var H = (0, import_react4.createContext)(null);
H.displayName = "DisclosurePanelContext";
function V() {
  return (0, import_react4.useContext)(H);
}
function Y(e2, n) {
  return u(n.type, Q, e2, n);
}
var Z = import_react4.Fragment;
function ee(e2, n) {
  let { defaultOpen: o5 = false, ...u2 } = e2, T2 = (0, import_react4.useRef)(null), l3 = y(n, T((a2) => {
    T2.current = a2;
  }, e2.as === void 0 || e2.as === import_react4.Fragment)), t3 = (0, import_react4.useRef)(null), f = (0, import_react4.useRef)(null), s3 = (0, import_react4.useReducer)(Y, { disclosureState: o5 ? 0 : 1, linkedPanel: false, buttonRef: f, panelRef: t3, buttonId: null, panelId: null }), [{ disclosureState: i3, buttonId: c2 }, D2] = s3, d2 = o((a2) => {
    D2({ type: 1 });
    let r3 = e(T2);
    if (!r3 || !c2)
      return;
    let p = (() => a2 ? a2 instanceof HTMLElement ? a2 : a2.current instanceof HTMLElement ? a2.current : r3.getElementById(c2) : r3.getElementById(c2))();
    p == null || p.focus();
  }), P = (0, import_react4.useMemo)(() => ({ close: d2 }), [d2]), b = (0, import_react4.useMemo)(() => ({ open: i3 === 0, close: d2 }), [i3, d2]), y2 = { ref: l3 };
  return import_react4.default.createElement(k.Provider, { value: s3 }, import_react4.default.createElement(v.Provider, { value: P }, import_react4.default.createElement(c, { value: u(i3, { [0]: d.Open, [1]: d.Closed }) }, X({ ourProps: y2, theirProps: u2, slot: b, defaultTag: Z, name: "Disclosure" }))));
}
var te = "button";
function ne(e2, n) {
  let o5 = I(), { id: u2 = `headlessui-disclosure-button-${o5}`, ...T2 } = e2, [l3, t3] = M("Disclosure.Button"), f = V(), s3 = f === null ? false : f === l3.panelId, i3 = (0, import_react4.useRef)(null), c2 = y(i3, n, s3 ? null : l3.buttonRef);
  (0, import_react4.useEffect)(() => {
    if (!s3)
      return t3({ type: 2, buttonId: u2 }), () => {
        t3({ type: 2, buttonId: null });
      };
  }, [u2, t3, s3]);
  let D2 = o((r3) => {
    var p;
    if (s3) {
      if (l3.disclosureState === 1)
        return;
      switch (r3.key) {
        case o4.Space:
        case o4.Enter:
          r3.preventDefault(), r3.stopPropagation(), t3({ type: 0 }), (p = l3.buttonRef.current) == null || p.focus();
          break;
      }
    } else
      switch (r3.key) {
        case o4.Space:
        case o4.Enter:
          r3.preventDefault(), r3.stopPropagation(), t3({ type: 0 });
          break;
      }
  }), d2 = o((r3) => {
    switch (r3.key) {
      case o4.Space:
        r3.preventDefault();
        break;
    }
  }), P = o((r3) => {
    var p;
    r(r3.currentTarget) || e2.disabled || (s3 ? (t3({ type: 0 }), (p = l3.buttonRef.current) == null || p.focus()) : t3({ type: 0 }));
  }), b = (0, import_react4.useMemo)(() => ({ open: l3.disclosureState === 0 }), [l3]), y2 = s2(e2, i3), a2 = s3 ? { ref: c2, type: y2, onKeyDown: D2, onClick: P } : { ref: c2, id: u2, type: y2, "aria-expanded": e2.disabled ? void 0 : l3.disclosureState === 0, "aria-controls": l3.linkedPanel ? l3.panelId : void 0, onKeyDown: D2, onKeyUp: d2, onClick: P };
  return X({ ourProps: a2, theirProps: T2, slot: b, defaultTag: te, name: "Disclosure.Button" });
}
var le = "div";
var oe = S.RenderStrategy | S.Static;
function re(e2, n) {
  let o5 = I(), { id: u2 = `headlessui-disclosure-panel-${o5}`, ...T2 } = e2, [l3, t3] = M("Disclosure.Panel"), { close: f } = w("Disclosure.Panel"), s3 = y(n, l3.panelRef, (P) => {
    a(() => t3({ type: P ? 4 : 5 }));
  });
  (0, import_react4.useEffect)(() => (t3({ type: 3, panelId: u2 }), () => {
    t3({ type: 3, panelId: null });
  }), [u2, t3]);
  let i3 = C(), c2 = (() => i3 !== null ? (i3 & d.Open) === d.Open : l3.disclosureState === 0)(), D2 = (0, import_react4.useMemo)(() => ({ open: l3.disclosureState === 0, close: f }), [l3, f]), d2 = { ref: s3, id: u2 };
  return import_react4.default.createElement(H.Provider, { value: l3.panelId }, X({ ourProps: d2, theirProps: T2, slot: D2, defaultTag: le, features: oe, visible: c2, name: "Disclosure.Panel" }));
}
var se = D(ee);
var ue = D(ne);
var ie = D(re);
var ve = Object.assign(se, { Button: ue, Panel: ie });

// app/routes/faq.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\faq.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\faq.tsx"
  );
  import.meta.hot.lastModified = "1704989734564.0774";
}
var faqs = [{
  question: "When is it time for an oil change?",
  answer: "We recommend an oil change every 3,000 to 5,000 miles, but check your vehicle's manual for specific intervals."
}, {
  question: "How often should I replace my car's air filter?",
  answer: "Generally, every 12,000 to 15,000 miles, but it depends on driving conditions. Inspect it regularly and replace if dirty."
}, {
  question: "What are the signs of brake problems?",
  answer: "Watch for squeaking, grinding, or a soft brake pedal. If you notice any issues, get your brakes inspected promptly."
}, {
  question: "Do I need winter tires in colder climates?",
  answer: "Yes, winter tires provide better traction in icy and snowy conditions, improving overall safety during winter."
}, {
  question: "When should I replace my car's timing belt?",
  answer: "Typically, every 60,000 to 100,000 miles, but refer to your car's manual for the manufacturer's recommended interval."
}, {
  question: "What's included in a standard vehicle tune-up?",
  answer: "A tune-up involves inspecting and replacing spark plugs, checking ignition systems, and ensuring overall engine performance."
}];
function Example() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-4xl divide-y text-center", style: {
    color: "#112D4E"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mt-2 text-4xl font-bold tracking-tight sm:text-6xl", style: {
      color: "#112D4E"
    }, children: "Frequently asked questions" }, void 0, false, {
      fileName: "app/routes/faq.tsx",
      lineNumber: 48,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", { className: "mt-10 space-y-6 divide-y", style: {
      color: "#3F72AF"
    }, children: faqs.map((faq) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ve, { as: "div", className: "pt-6", children: ({
      open
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ve.Button, { className: "flex w-full items-start justify-between text-left", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-base font-semibold leading-7", style: {
          color: "#112D4E"
        }, children: faq.question }, void 0, false, {
          fileName: "app/routes/faq.tsx",
          lineNumber: 62,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-6 flex h-7 items-center", children: open ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MinusSmallIcon_default, { className: "h-6 w-6", "aria-hidden": "true", style: {
          color: "#3F72AF"
        } }, void 0, false, {
          fileName: "app/routes/faq.tsx",
          lineNumber: 65,
          columnNumber: 78
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PlusSmallIcon_default, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/routes/faq.tsx",
          lineNumber: 67,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/faq.tsx",
          lineNumber: 65,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/faq.tsx",
        lineNumber: 61,
        columnNumber: 23
      }, this) }, void 0, false, {
        fileName: "app/routes/faq.tsx",
        lineNumber: 60,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ve.Panel, { as: "dd", className: "mt-2 pr-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-base leading-7", style: {
        color: "#112D4E"
      }, children: faq.answer }, void 0, false, {
        fileName: "app/routes/faq.tsx",
        lineNumber: 71,
        columnNumber: 23
      }, this) }, void 0, false, {
        fileName: "app/routes/faq.tsx",
        lineNumber: 70,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/faq.tsx",
      lineNumber: 59,
      columnNumber: 19
    }, this) }, faq.question, false, {
      fileName: "app/routes/faq.tsx",
      lineNumber: 56,
      columnNumber: 30
    }, this)) }, void 0, false, {
      fileName: "app/routes/faq.tsx",
      lineNumber: 53,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/faq.tsx",
    lineNumber: 45,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/faq.tsx",
    lineNumber: 44,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/faq.tsx",
    lineNumber: 43,
    columnNumber: 10
  }, this);
}
_c = Example;
var _c;
$RefreshReg$(_c, "Example");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Example as default
};
//# sourceMappingURL=/build/routes/faq-E2LTSF4Y.js.map
