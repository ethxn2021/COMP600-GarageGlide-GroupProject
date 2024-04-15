import {
  ChevronRightIcon_default
} from "/build/_shared/chunk-ZMC54G4P.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-7PHB3BFD.js";
import {
  createHotContext
} from "/build/_shared/chunk-4KLX3EKH.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/breadcrumbs.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\breadcrumbs.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\breadcrumbs.tsx"
  );
  import.meta.hot.lastModified = "1704989734552.0774";
}
function Breadcrumbs({
  paths
}) {
  if (typeof window === "undefined") {
    return null;
  }
  const currentPath = window.location.pathname;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "flex", "aria-label": "Breadcrumb", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", { role: "list", className: "flex items-center space-x-4", children: paths.map((path, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: path.url, className: `text-blue-900 hover:text-blue-900 ${currentPath === path.url ? "font-bold" : ""}`, style: {
      color: currentPath === path.url ? "#3F72AF" : "inherit"
    }, children: path.label }, void 0, false, {
      fileName: "app/routes/breadcrumbs.tsx",
      lineNumber: 35,
      columnNumber: 15
    }, this),
    index < paths.length - 1 && // Add ChevronRightIcon conditionally for all except the last path
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRightIcon_default, { className: "h-5 w-5 flex-shrink-0 text-gray-400", "aria-hidden": "true" }, void 0, false, {
      fileName: "app/routes/breadcrumbs.tsx",
      lineNumber: 42,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/breadcrumbs.tsx",
    lineNumber: 34,
    columnNumber: 13
  }, this) }, index, false, {
    fileName: "app/routes/breadcrumbs.tsx",
    lineNumber: 33,
    columnNumber: 37
  }, this)) }, void 0, false, {
    fileName: "app/routes/breadcrumbs.tsx",
    lineNumber: 32,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/breadcrumbs.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
_c = Breadcrumbs;
var _c;
$RefreshReg$(_c, "Breadcrumbs");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Breadcrumbs
};
//# sourceMappingURL=/build/_shared/chunk-TOGZ7TXE.js.map
