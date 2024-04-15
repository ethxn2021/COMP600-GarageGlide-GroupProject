import {
  api
} from "/build/_shared/chunk-FXFW7OVD.js";
import {
  UserGroupIcon_default
} from "/build/_shared/chunk-IJDWAEBR.js";
import {
  Link,
  init_dist2 as init_dist
} from "/build/_shared/chunk-V4K2SS5Z.js";
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

// app/routes/login.tsx
var import_react = __toESM(require_react());
init_dist();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\login.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\login.tsx"
  );
  import.meta.hot.lastModified = "1706365588475.9304";
}
function profilecookie() {
  if (api.get("email") != null) {
    window.location.replace("/profile");
  }
}
function Login() {
  _s();
  (0, import_react.useEffect)(() => {
    profilecookie();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:mx-auto sm:w-full sm:max-w-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mt-10 text-center text-2xl font-bold leading-9 tracking-tight pt-10", style: {
      color: "#112D4E"
    }, children: "Sign in to your account" }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 43,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-10 sm:mx-auto sm:w-full sm:max-w-sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { className: "space-y-6", action: "/loginDB", method: "POST", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "username", className: "block text-sm font-medium leading-6 text-gray-900", style: {
            fontSize: "16px",
            color: "#112D4E"
          }, children: "Email" }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 54,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "username", name: "username", type: "text", required: true, className: "block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 focus:ring-indigo-950 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6", style: {
            fontSize: "16px",
            borderColor: "#112D4E"
          } }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 61,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 60,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/login.tsx",
          lineNumber: 53,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "password", className: "block text-sm font-medium leading-6 text-gray-900", style: {
            fontSize: "16px",
            color: "#112D4E"
          }, children: "Password" }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 70,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "password", name: "password", type: "password", autoComplete: "current-password", required: true, className: "block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 focus:ring-indigo-950 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 77,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 76,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/login.tsx",
          lineNumber: 69,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/forgotPassword", className: "block text-sm font-medium leading-6 text-indigo-900", style: {
          fontSize: "16px",
          color: "#112D4E"
        }, children: "Forgot your password?" }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 83,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 82,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "flex w-full justify-center rounded-full px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-950", style: {
          backgroundColor: "#112D4E",
          fontSize: "16px"
        }, children: "Sign in" }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 93,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 92,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/login.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-6 text-center text-sm text-gray-500", children: [
        "Don't have an account?",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/signup", className: "font-semibold leading-6", style: {
          color: "#112D4E"
        }, children: "Sign Up" }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 106,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/login.tsx",
        lineNumber: 104,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-6 text-center text-sm text-gray-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/staffLogin", className: "font-semibold leading-6", style: {
        color: "#112D4E"
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserGroupIcon_default, { className: "h-6 w-6" }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 119,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
          fontSize: "10px",
          fontWeight: "lighter"
        }, children: "Staff Login" }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 120,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/login.tsx",
        lineNumber: 118,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 115,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 114,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login.tsx",
      lineNumber: 50,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/login.tsx",
    lineNumber: 40,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/login.tsx",
    lineNumber: 39,
    columnNumber: 10
  }, this);
}
_s(Login, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Login;
var _c;
$RefreshReg$(_c, "Login");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Login as default
};
//# sourceMappingURL=/build/routes/login-2GK4H26Z.js.map
