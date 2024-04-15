var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// css-bundle-update-plugin-ns:C:\Users\wisdo\GarageBooking-WO\comp6000-2023-pg6\node_modules\@remix-run\css-bundle\dist\index.js
var require_dist = __commonJS({
  "css-bundle-update-plugin-ns:C:\\Users\\wisdo\\GarageBooking-WO\\comp6000-2023-pg6\\node_modules\\@remix-run\\css-bundle\\dist\\index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var cssBundleHref3 = "/build/css-bundle-XMPXI5NO.css";
    exports.cssBundleHref = cssBundleHref3;
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 48,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 97,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_css_bundle = __toESM(require_dist());

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-DUFW3TKO.css";

// app/root.tsx
var import_outline = require("@heroicons/react/24/outline"), import_react2 = require("@remix-run/react"), import_react3 = require("react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  ...import_css_bundle.cssBundleHref ? [
    { rel: "stylesheet", href: import_css_bundle.cssBundleHref },
    { rel: "stylesheet", href: tailwind_default }
  ] : [{ rel: "stylesheet", href: tailwind_default }]
], navigation = {
  support: [
    { name: "Contact Us", href: "/contact" },
    { name: "Services", href: "/service" }
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Locations", href: "/locations" },
    { name: "Account", href: "/login" }
  ],
  legal: [
    { name: "FAQs", href: "/faq" },
    { name: "Terms and Conditions", href: "#" },
    { name: "Privacy Notice", href: "#" }
  ]
};
function App() {
  let [searchInput, setSearchInput] = (0, import_react3.useState)(""), [searchResults, setSearchResults] = (0, import_react3.useState)([]), handleSearch = (e) => {
    setSearchInput(e.target.value);
    let pages = [
      { name: "Home", type: "Page" },
      { name: "About", type: "Page" },
      { name: "Service", type: "Category", subheadings: ["MOT", "Car Servicing", "Oil and BrakeRepairs", "TiresFix And Replacements", "Windscreen Repairs", "Battery Change", "Diagnostic Check", "Engine TuneUps"] },
      { name: "Contact", type: "Page" }
    ], mainCategories = pages.filter((page) => page.type === "Category" && !page.subheadings).map((page) => page.name), subheadings = pages.filter((page) => page.type === "Category" && page.subheadings).flatMap((page) => page.subheadings), filteredMainCategories = mainCategories.filter((name) => name.toLowerCase().includes(e.target.value.toLowerCase())), filteredResults = [...subheadings.filter((subheading) => subheading.toLowerCase().includes(e.target.value.toLowerCase())).map((subheading) => `${subheading} - Service`), ...filteredMainCategories];
    setSearchResults(filteredResults);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { className: "flex flex-col min-h-screen ", style: { backgroundColor: "#F9F7F7" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col min-h-screen", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: "fixed inset-x-0 px-6 py-3 flex flex-row justify-between top-0 mx-auto w-full", style: { backgroundColor: "#F9F7F7", borderBottom: "5px solid #112D4E", zIndex: "1000" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "pt-5" }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 77,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: " nav flex space-x-8 pt-5 pl-20 justify-center align-items-center w-full font-bold", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.NavLink, { to: "/", className: ({ isActive }) => `${isActive ? "text-blue-800" : ""}`, children: "Home" }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 81,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.NavLink, { to: "/about", className: ({ isActive }) => `${isActive ? "text-blue-800" : ""}`, children: "About Us" }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 84,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.NavLink, { to: "/service", className: ({ isActive }) => `${isActive ? "text-blue-800" : ""}`, children: "Services" }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 87,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.NavLink, { to: "/contact", className: ({ isActive }) => `${isActive ? "text-blue-800" : ""}`, children: "Contact Us" }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 90,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-grow" }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 93,
              columnNumber: 15
            }, this),
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex space-x-4 items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("form", { className: "flex", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "text", placeholder: "Search", style: { width: "200px" }, value: searchInput, onChange: handleSearch }, void 0, !1, {
                    fileName: "app/root.tsx",
                    lineNumber: 99,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { style: { backgroundColor: "#112D4E", color: "#F9F7F7" }, onClick: handleSearch, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_outline.MagnifyingGlassIcon, { className: "h-6 w-6", style: { width: "50px" } }, void 0, !1, {
                    fileName: "app/root.tsx",
                    lineNumber: 102,
                    columnNumber: 23
                  }, this) }, void 0, !1, {
                    fileName: "app/root.tsx",
                    lineNumber: 101,
                    columnNumber: 21
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/root.tsx",
                  lineNumber: 98,
                  columnNumber: 19
                }, this),
                searchResults.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "absolute mt-2 bg-white border rounded-md shadow-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { children: searchResults.map(
                  (result, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "py-2 px-4 hover:bg-gray-200", children: result.includes(" - ") ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.NavLink, { to: `/${result.split(" - ")[0].toLowerCase().replace(/\s+/g, "")}`, className: "text-blue-800", children: result }, void 0, !1, {
                    fileName: "app/root.tsx",
                    lineNumber: 113,
                    columnNumber: 25
                  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.NavLink, { to: `/${result === "About Us" ? "about" : result.toLowerCase().replace(/\s+/g, "")}`, className: "text-blue-800", children: result }, void 0, !1, {
                    fileName: "app/root.tsx",
                    lineNumber: 117,
                    columnNumber: 25
                  }, this) }, index, !1, {
                    fileName: "app/root.tsx",
                    lineNumber: 111,
                    columnNumber: 23
                  }, this)
                ) }, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 109,
                  columnNumber: 21
                }, this) }, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 108,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/root.tsx",
                lineNumber: 97,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.NavLink, { to: "/locations", className: ({ isActive }) => `${isActive ? "text-blue-800" : ""}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_outline.MapPinIcon, { className: "h-6 w-6" }, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 132,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { style: { fontSize: "10px", fontWeight: "lighter" }, children: "Locations" }, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 133,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/root.tsx",
                lineNumber: 131,
                columnNumber: 19
              }, this) }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 130,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.NavLink, { to: "/login", className: ({ isActive }) => `${isActive ? "text-blue-800" : ""}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_outline.UserIcon, { className: "h-6 w-6" }, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 139,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { style: { fontSize: "10px", fontWeight: "lighter" }, children: "Account" }, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 140,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/root.tsx",
                lineNumber: 138,
                columnNumber: 19
              }, this) }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 137,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.NavLink, { to: "/basket", className: ({ isActive }) => `${isActive ? "text-blue-800" : ""}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_outline.ShoppingBagIcon, { className: "h-6 w-6" }, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 146,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { style: { fontSize: "10px", fontWeight: "lighter" }, children: "Basket" }, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 147,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/root.tsx",
                lineNumber: 145,
                columnNumber: 19
              }, this) }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 144,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/root.tsx",
              lineNumber: 94,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/root.tsx",
            lineNumber: 80,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 75,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("style", { children: `
  .nav {
    text-transform: uppercase;
    text-align: center;
    font-weight: 600;
  }
         

  .nav * {
    box-sizing: border-box;
    transition: all .35s ease;
  }

  .nav a {
    display: inline-block;
    list-style: outside none none;
    padding: 0.5em 0.8em;
    color: #112D4E;
    position: relative;
    text-decoration: none;
    font-size: 20px;
  }

  .nav a::before,
  .nav a::after {
    content: '';
    height: 12px;
    width: 12px;
    position: absolute;
    transition: all .35s ease;
    opacity: 0;
  }

  .nav a::before {
    right: 0;
    top: 0;
    border-top: 3px solid #DBE2EF;
    border-right: 3px solid #3F72AF;
    transform: translate(-100%, 50%);
  }

  .nav a:after {
    left: 0;
    bottom: 0;
    border-bottom: 3px solid #DBE2EF;
    border-left: 3px solid #3F72AF;
    transform: translate(100%, -50%);
  }

  .nav a:hover:before,
  .nav a:hover:after,
  .nav a.text-blue-800:before,
  .nav a.text-blue-800:after {
    transform: translate(0, 0);
    opacity: 1;
  }

  .nav a:hover {
    color: #3F72AF;
  }
` }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 153,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-grow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 219,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 218,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", { className: " ", "aria-labelledby": "footer-heading", style: { marginTop: "150px", backgroundColor: "#F9F7F7", borderTop: "5px solid #112D4E" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { id: "footer-heading", className: "sr-only", children: "Footer" }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 223,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mx-auto max-w-6xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mb-16 md:mb-0", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-sm font-semibold leading-6 text-gray-900", children: "Support" }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 229,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { role: "list", className: "mt-2 space-y-2", children: navigation.support.map(
                (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: item.href, className: "text-sm leading-6 text-gray-600 hover:text-gray-900", children: item.name }, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 233,
                  columnNumber: 25
                }, this) }, item.name, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 232,
                  columnNumber: 21
                }, this)
              ) }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 230,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/root.tsx",
              lineNumber: 228,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mb-16 md:mb-0", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-sm font-semibold leading-6 text-gray-900", children: "Company" }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 242,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { role: "list", className: "mt-2 space-y-2", children: navigation.company.map(
                (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: item.href, className: "text-sm leading-6 text-gray-600 hover:text-gray-900", children: item.name }, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 246,
                  columnNumber: 25
                }, this) }, item.name, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 245,
                  columnNumber: 21
                }, this)
              ) }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 243,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/root.tsx",
              lineNumber: 241,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-sm font-semibold leading-6 text-gray-900", children: "Legal" }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 255,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { role: "list", className: "mt-2 space-y-2", children: navigation.legal.map(
                (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: item.href, className: "text-sm leading-6 text-gray-600 hover:text-gray-900", children: item.name }, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 259,
                  columnNumber: 25
                }, this) }, item.name, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 258,
                  columnNumber: 21
                }, this)
              ) }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 256,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/root.tsx",
              lineNumber: 254,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-sm font-semibold leading-6 text-gray-900", children: "Subscribe to our newsletter" }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 268,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-2 text-sm leading-6 text-black-300", children: "The latest news, articles, and resources, sent to your inbox weekly." }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 269,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("form", { className: "mt-6 sm:flex sm:max-w-md", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor: "email-address", className: "sr-only", children: "Email address" }, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 271,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  "input",
                  {
                    type: "email",
                    name: "email-address",
                    id: "email-address",
                    autoComplete: "email",
                    required: !0,
                    className: "min-w-0 e border-1 px-2 py-1 w-60 bg-white/5 text-base text-black ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-900 sm:w-64 sm:text-sm sm:leading-6 xl:w-full",
                    placeholder: "Enter your email",
                    style: { borderColor: "#112D4E" }
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/root.tsx",
                    lineNumber: 274,
                    columnNumber: 21
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "submit", className: "flex w-full items-center justify-center rounded-full px-3 py-2 text-sm font-light text-white ", style: { backgroundColor: "#112D4E", fontSize: "16px" }, children: "Subscribe" }, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 285,
                  columnNumber: 23
                }, this) }, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 284,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/root.tsx",
                lineNumber: 270,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/root.tsx",
              lineNumber: 267,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/root.tsx",
            lineNumber: 227,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 226,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 222,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 297,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 298,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 299,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 296,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 63,
    columnNumber: 5
  }, this);
}

// app/routes/tiresFixAndReplacements.tsx
var tiresFixAndReplacements_exports = {};
__export(tiresFixAndReplacements_exports, {
  default: () => TiresFixAndReplacements
});
var import_outline2 = require("@heroicons/react/24/outline"), import_react4 = require("@remix-run/react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), tires = [
  { href: "#", description: "Tires Fix And Replacements", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_outline2.WrenchIcon, { className: "h-20 w-20 mt-8", style: { color: "#112D4E" } }, void 0, !1, {
    fileName: "app/routes/tiresFixAndReplacements.tsx",
    lineNumber: 6,
    columnNumber: 65
  }, this) }
];
function TiresFixAndReplacements() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "container mx-auto p-8 flex flex-col items-center justify-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "mt-2 text-4xl font-bold tracking-tight sm:text-6xl mb-9", style: { color: "#112D4E" }, children: "Tire Fix and Replacement" }, void 0, !1, {
      fileName: "app/routes/tiresFixAndReplacements.tsx",
      lineNumber: 14,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "p-4 border rounded-md", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "text-xl font-bold mb-2", children: "Puncture Repair" }, void 0, !1, {
          fileName: "app/routes/tiresFixAndReplacements.tsx",
          lineNumber: 21,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Quick fix for minor punctures" }, void 0, !1, {
          fileName: "app/routes/tiresFixAndReplacements.tsx",
          lineNumber: 22,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "", style: { color: "#3F72AF" }, children: "Starting from \xA324.99" }, void 0, !1, {
          fileName: "app/routes/tiresFixAndReplacements.tsx",
          lineNumber: 23,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center mt-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-gray-500 mr-1", children: "432 views today" }, void 0, !1, {
            fileName: "app/routes/tiresFixAndReplacements.tsx",
            lineNumber: 27,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { className: "w-4 h-4 fill-current text-blue-500", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { d: "M0 0h24v24H0z", fill: "none" }, void 0, !1, {
              fileName: "app/routes/tiresFixAndReplacements.tsx",
              lineNumber: 29,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17h2v2h-2zm0-14h2v10h-2z" }, void 0, !1, {
              fileName: "app/routes/tiresFixAndReplacements.tsx",
              lineNumber: 30,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/tiresFixAndReplacements.tsx",
            lineNumber: 28,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/tiresFixAndReplacements.tsx",
          lineNumber: 26,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { className: "text-white px-4 py-2 rounded mt-2", style: { backgroundColor: "#112D4E" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Link, { to: "/punctureRepair", children: "View Details" }, void 0, !1, {
          fileName: "app/routes/tiresFixAndReplacements.tsx",
          lineNumber: 34,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/tiresFixAndReplacements.tsx",
          lineNumber: 33,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/tiresFixAndReplacements.tsx",
        lineNumber: 20,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "p-4 border rounded-md", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "text-xl font-bold mb-2", children: "Tire Replacement" }, void 0, !1, {
          fileName: "app/routes/tiresFixAndReplacements.tsx",
          lineNumber: 42,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "High-quality tire replacement services" }, void 0, !1, {
          fileName: "app/routes/tiresFixAndReplacements.tsx",
          lineNumber: 43,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "", style: { color: "#3F72AF" }, children: "Starting from \xA359.99" }, void 0, !1, {
          fileName: "app/routes/tiresFixAndReplacements.tsx",
          lineNumber: 44,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center mt-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-gray-500 mr-1", children: "871 views today" }, void 0, !1, {
            fileName: "app/routes/tiresFixAndReplacements.tsx",
            lineNumber: 48,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { className: "w-4 h-4 fill-current text-blue-500", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { d: "M0 0h24v24H0z", fill: "none" }, void 0, !1, {
              fileName: "app/routes/tiresFixAndReplacements.tsx",
              lineNumber: 50,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17h2v2h-2zm0-14h2v10h-2z" }, void 0, !1, {
              fileName: "app/routes/tiresFixAndReplacements.tsx",
              lineNumber: 51,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/tiresFixAndReplacements.tsx",
            lineNumber: 49,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/tiresFixAndReplacements.tsx",
          lineNumber: 47,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { className: " text-white px-4 py-2 rounded mt-2", style: { backgroundColor: "#112D4E" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Link, { to: "/tireReplacement", children: "View Details" }, void 0, !1, {
          fileName: "app/routes/tiresFixAndReplacements.tsx",
          lineNumber: 55,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/tiresFixAndReplacements.tsx",
          lineNumber: 54,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/tiresFixAndReplacements.tsx",
        lineNumber: 41,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/tiresFixAndReplacements.tsx",
      lineNumber: 18,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { id: "warranty", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { children: tires.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: item.href, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: item.icon }, void 0, !1, {
        fileName: "app/routes/tiresFixAndReplacements.tsx",
        lineNumber: 70,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "font-bold text-2xl", style: { color: "#112D4E" }, children: item.description }, void 0, !1, {
        fileName: "app/routes/tiresFixAndReplacements.tsx",
        lineNumber: 71,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-s", style: { color: "#3F72AF", textAlign: "justify" }, children: "All tire fixes and replacements are backed by a satisfaction guarantee, providing you with peace of mind." }, void 0, !1, {
        fileName: "app/routes/tiresFixAndReplacements.tsx",
        lineNumber: 72,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/tiresFixAndReplacements.tsx",
      lineNumber: 69,
      columnNumber: 19
    }, this) }, void 0, !1, {
      fileName: "app/routes/tiresFixAndReplacements.tsx",
      lineNumber: 68,
      columnNumber: 17
    }, this) }, index, !1, {
      fileName: "app/routes/tiresFixAndReplacements.tsx",
      lineNumber: 67,
      columnNumber: 15
    }, this)) }, void 0, !1, {
      fileName: "app/routes/tiresFixAndReplacements.tsx",
      lineNumber: 65,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/tiresFixAndReplacements.tsx",
      lineNumber: 64,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "container mx-auto p-8 justify-center" }, void 0, !1, {
      fileName: "app/routes/tiresFixAndReplacements.tsx",
      lineNumber: 81,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/tiresFixAndReplacements.tsx",
    lineNumber: 13,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/tiresFixAndReplacements.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/routes/oilAndBrakeRepairs.tsx
var oilAndBrakeRepairs_exports = {};
__export(oilAndBrakeRepairs_exports, {
  default: () => OilAndBrakeService
});
var import_outline3 = require("@heroicons/react/24/outline"), import_react5 = require("@remix-run/react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), shield = [{ href: "#", description: "12-month warranty", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_outline3.ShieldCheckIcon, { className: "h-20 w-20 mt-8", style: { color: "#112D4E" } }, void 0, !1, {
  fileName: "app/routes/oilAndBrakeRepairs.tsx",
  lineNumber: 5,
  columnNumber: 70
}, this) }];
function OilAndBrakeService() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "container mx-auto p-8 flex flex-col items-center justify-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { className: "mt-2 text-4xl font-bold tracking-tight sm:text-6xl mb-9", style: { color: "#112D4E" }, children: "Oil and Brake Repairs" }, void 0, !1, {
      fileName: "app/routes/oilAndBrakeRepairs.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "p-4 border rounded-md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-xl font-bold mb-2", children: "Brake Fluid Change" }, void 0, !1, {
        fileName: "app/routes/oilAndBrakeRepairs.tsx",
        lineNumber: 20,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Drain old fluid and replace with new fluid. Recommended 24 months or 24k miles" }, void 0, !1, {
        fileName: "app/routes/oilAndBrakeRepairs.tsx",
        lineNumber: 21,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "", style: { color: "#3F72AF" }, children: "Book now and save \xA314.99" }, void 0, !1, {
        fileName: "app/routes/oilAndBrakeRepairs.tsx",
        lineNumber: 22,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-2xl font-bold", children: "\xA349.99" }, void 0, !1, {
        fileName: "app/routes/oilAndBrakeRepairs.tsx",
        lineNumber: 25,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-center mt-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-gray-500 mr-1", children: "500 views today" }, void 0, !1, {
          fileName: "app/routes/oilAndBrakeRepairs.tsx",
          lineNumber: 27,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("svg", { className: "w-4 h-4 fill-current text-blue-500", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("path", { d: "M0 0h24v24H0z", fill: "none" }, void 0, !1, {
            fileName: "app/routes/oilAndBrakeRepairs.tsx",
            lineNumber: 29,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17h2v2h-2zm0-14h2v10h-2z" }, void 0, !1, {
            fileName: "app/routes/oilAndBrakeRepairs.tsx",
            lineNumber: 30,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/oilAndBrakeRepairs.tsx",
          lineNumber: 28,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/oilAndBrakeRepairs.tsx",
        lineNumber: 26,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "text-white px-4 py-2 rounded mt-2", style: { backgroundColor: "#112D4E" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react5.Link, { to: "/brakeFluid", children: "View Details" }, void 0, !1, {
        fileName: "app/routes/oilAndBrakeRepairs.tsx",
        lineNumber: 34,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/oilAndBrakeRepairs.tsx",
        lineNumber: 33,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/oilAndBrakeRepairs.tsx",
      lineNumber: 19,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/oilAndBrakeRepairs.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { id: "navigation", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: shield.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: item.href, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: item.icon }, void 0, !1, {
        fileName: "app/routes/oilAndBrakeRepairs.tsx",
        lineNumber: 49,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "font-bold text-2xl", style: { color: "#112D4E" }, children: item.description }, void 0, !1, {
        fileName: "app/routes/oilAndBrakeRepairs.tsx",
        lineNumber: 50,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-s", style: { color: "#3F72AF", textAlign: "justify" }, children: "All repairs are backed by a 12-month warranty, providing you with full assurance and peace of mind." }, void 0, !1, {
        fileName: "app/routes/oilAndBrakeRepairs.tsx",
        lineNumber: 51,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/oilAndBrakeRepairs.tsx",
      lineNumber: 48,
      columnNumber: 19
    }, this) }, void 0, !1, {
      fileName: "app/routes/oilAndBrakeRepairs.tsx",
      lineNumber: 47,
      columnNumber: 17
    }, this) }, index, !1, {
      fileName: "app/routes/oilAndBrakeRepairs.tsx",
      lineNumber: 46,
      columnNumber: 15
    }, this)) }, void 0, !1, {
      fileName: "app/routes/oilAndBrakeRepairs.tsx",
      lineNumber: 44,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/oilAndBrakeRepairs.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "container mx-auto p-8 justify-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "mt-5 text-5xl font-bold tracking-tight sm:text-5xl text-center justify-center", style: { color: "#112D4E" }, children: "Booking an Oil and Brake Service" }, void 0, !1, {
        fileName: "app/routes/oilAndBrakeRepairs.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { className: "font-bold text-2xl mt-5", style: { color: "#3F72AF" }, children: "What's included in the Oil and Brake Service?" }, void 0, !1, {
        fileName: "app/routes/oilAndBrakeRepairs.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "mt-3", style: { color: "#112D4E" }, children: "Our comprehensive Oil and Brake Service includes a thorough inspection of your vehicle's braking system, replacement of brake pads if needed, and an oil change using high-quality lubricants. This service ensures your vehicle's essential systems are in optimal condition." }, void 0, !1, {
        fileName: "app/routes/oilAndBrakeRepairs.tsx",
        lineNumber: 68,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-4", style: { borderTop: "1px solid #3F72AF" } }, void 0, !1, {
        fileName: "app/routes/oilAndBrakeRepairs.tsx",
        lineNumber: 71,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h4", { className: "font-bold text-2xl mt-4", style: { color: "#3F72AF" }, children: " When should I book an Oil and Brake Service?" }, void 0, !1, {
        fileName: "app/routes/oilAndBrakeRepairs.tsx",
        lineNumber: 72,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "mt-3", style: { color: "#112D4E" }, children: "We recommend booking an Oil and Brake Service every 6 months or 6,000 miles to ensure your vehicle's safety and performance. Regular maintenance of these critical components is essential for a smooth and safe driving experience." }, void 0, !1, {
        fileName: "app/routes/oilAndBrakeRepairs.tsx",
        lineNumber: 73,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-4", style: { borderTop: "1px solid #3F72AF" } }, void 0, !1, {
        fileName: "app/routes/oilAndBrakeRepairs.tsx",
        lineNumber: 74,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h5", { className: "font-bold text-2xl mt-4", style: { color: "#3F72AF" }, children: " How long does an Oil and Brake Service take?" }, void 0, !1, {
        fileName: "app/routes/oilAndBrakeRepairs.tsx",
        lineNumber: 75,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "mt-3", style: { color: "#112D4E" }, children: "An Oil and Brake Service typically takes about 1 to 2 hours, depending on the complexity and any additional repairs that may be required. Our skilled technicians work efficiently to get you back on the road with confidence." }, void 0, !1, {
        fileName: "app/routes/oilAndBrakeRepairs.tsx",
        lineNumber: 76,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/oilAndBrakeRepairs.tsx",
      lineNumber: 60,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/oilAndBrakeRepairs.tsx",
    lineNumber: 11,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/oilAndBrakeRepairs.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/routes/diagnosticService.tsx
var diagnosticService_exports = {};
__export(diagnosticService_exports, {
  default: () => WindscreenRepairService
});
var import_react6 = require("react"), import_react_datepicker = __toESM(require("react-datepicker"));

// app/routes/breadcrumbs.tsx
var breadcrumbs_exports = {};
__export(breadcrumbs_exports, {
  default: () => Breadcrumbs
});
var import_solid = require("@heroicons/react/20/solid"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function Breadcrumbs({ paths }) {
  if (typeof window > "u")
    return null;
  let currentPath = window.location.pathname;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("nav", { className: "flex", "aria-label": "Breadcrumb", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ol", { role: "list", className: "flex items-center space-x-4", children: paths.map((path, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center", children: [
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "a",
      {
        href: path.url,
        className: `text-blue-900 hover:text-blue-900 ${currentPath === path.url ? "font-bold" : ""}`,
        style: { color: currentPath === path.url ? "#3F72AF" : "inherit" },
        children: path.label
      },
      void 0,
      !1,
      {
        fileName: "app/routes/breadcrumbs.tsx",
        lineNumber: 16,
        columnNumber: 15
      },
      this
    ),
    index < paths.length - 1 && // Add ChevronRightIcon conditionally for all except the last path
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_solid.ChevronRightIcon, { className: "h-5 w-5 flex-shrink-0 text-gray-400", "aria-hidden": "true" }, void 0, !1, {
      fileName: "app/routes/breadcrumbs.tsx",
      lineNumber: 24,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/breadcrumbs.tsx",
    lineNumber: 15,
    columnNumber: 13
  }, this) }, index, !1, {
    fileName: "app/routes/breadcrumbs.tsx",
    lineNumber: 14,
    columnNumber: 11
  }, this)) }, void 0, !1, {
    fileName: "app/routes/breadcrumbs.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/breadcrumbs.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/routes/diagnosticService.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function WindscreenRepairService() {
  let [registration, setRegistration] = (0, import_react6.useState)(""), [postCode, setPostCode] = (0, import_react6.useState)(""), [selectedDate, setSelectedDate] = (0, import_react6.useState)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex items-center justify-center h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "fixed inset-x-0 px-6 py-3 flex flex-row justify-between mx-auto w-full top-28 pl-18", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Breadcrumbs, { paths: [
      { label: "Services", url: "/service" },
      { label: "Diagnostic Check", url: "/diagnosticCheck" },
      { label: "Advanced Diagnostic Check Service", url: "/diagnosticService" }
    ] }, void 0, !1, {
      fileName: "app/routes/diagnosticService.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/diagnosticService.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mt-16 max-w-md p-6 bg-white rounded shadow-md mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { className: "text-3xl font-bold mb-4 text-center", style: { color: "#112D4E" }, children: "Advanved Diagnostic Check Service" }, void 0, !1, {
        fileName: "app/routes/diagnosticService.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "img",
        {
          src: "/images/windscreen-repair.png",
          alt: "Service Image",
          className: "mx-auto mb-4 rounded-lg",
          style: { maxWidth: "150px", height: "auto" }
        },
        void 0,
        !1,
        {
          fileName: "app/routes/diagnosticService.tsx",
          lineNumber: 48,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "font-bold", style: { color: "#112D4E" }, children: "Starting from \xA379.99*" }, void 0, !1, {
        fileName: "app/routes/diagnosticService.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/diagnosticService.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { style: { color: "#3F72AF" }, children: "*Prices vary by location and vehicle. Add your details below to get your personalized price" }, void 0, !1, {
        fileName: "app/routes/diagnosticService.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("form", { onSubmit: (e) => {
        e.preventDefault();
      }, className: "mt-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { htmlFor: "registration", className: "block mb-2 text-sm ", style: { color: "#112D4E" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "text-navy-blue-500 font-bold", children: "Vehicle Registration:" }, void 0, !1, {
            fileName: "app/routes/diagnosticService.tsx",
            lineNumber: 65,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { type: "text", id: "registration", name: "registration", className: "border p-2 w-full mt-1", placeholder: "Enter Vehicle Registration", onChange: (e) => {
            setRegistration(e.target.value);
          } }, void 0, !1, {
            fileName: "app/routes/diagnosticService.tsx",
            lineNumber: 66,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/diagnosticService.tsx",
          lineNumber: 64,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { htmlFor: "postCode", className: "block mb-2 text-sm ", style: { color: "#112D4E" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "text-navy-blue-500 font-bold", children: "Post Code:" }, void 0, !1, {
            fileName: "app/routes/diagnosticService.tsx",
            lineNumber: 71,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { type: "text", id: "postCode", name: "postCode", className: "border p-2 w-full mt-1", placeholder: "Enter Post Code", onChange: (e) => {
            setPostCode(e.target.value);
          } }, void 0, !1, {
            fileName: "app/routes/diagnosticService.tsx",
            lineNumber: 72,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/diagnosticService.tsx",
          lineNumber: 70,
          columnNumber: 11
        }, this),
        registration && postCode && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { className: "block mb-2 text-sm ", style: { color: "#112D4E" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "text-navy-blue-500 font-bold", children: "Select Repair Date:" }, void 0, !1, {
            fileName: "app/routes/diagnosticService.tsx",
            lineNumber: 79,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react_datepicker.default, { selected: selectedDate, onChange: (date) => {
            setSelectedDate(date);
          }, dateFormat: "dd/MM/yyyy" }, void 0, !1, {
            fileName: "app/routes/diagnosticService.tsx",
            lineNumber: 80,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/diagnosticService.tsx",
          lineNumber: 78,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/diagnosticService.tsx",
          lineNumber: 77,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "button",
          {
            type: "submit",
            className: `bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 ${selectedDate && registration && postCode ? "" : "opacity-50 cursor-not-allowed"}`,
            disabled: !(selectedDate && registration && postCode),
            children: "Book Now"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/diagnosticService.tsx",
            lineNumber: 86,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/diagnosticService.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/diagnosticService.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/diagnosticService.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

// app/routes/windscreenRepairs.tsx
var windscreenRepairs_exports = {};
__export(windscreenRepairs_exports, {
  default: () => WindscreenRepairsPage
});
var import_outline4 = require("@heroicons/react/24/outline"), import_react_router_dom = require("react-router-dom"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), shield2 = [{ href: "#", description: "12-month warranty", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_outline4.ShieldCheckIcon, { className: "h-20 w-20 mt-8", style: { color: "#112D4E" } }, void 0, !1, {
  fileName: "app/routes/windscreenRepairs.tsx",
  lineNumber: 5,
  columnNumber: 70
}, this) }];
function WindscreenRepairsPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mt-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "container mx-auto p-8 flex flex-col items-center justify-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { className: "mt-2 text-4xl font-bold tracking-tight sm:text-6xl mb-9", style: { color: "#112D4E" }, children: "Windscreen Repairs" }, void 0, !1, {
      fileName: "app/routes/windscreenRepairs.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "p-4 border rounded-md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "text-xl font-bold mb-2", children: "Windscreen Repairs Service" }, void 0, !1, {
        fileName: "app/routes/windscreenRepairs.tsx",
        lineNumber: 17,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "Trust us for effective windscreen repairs. Our technicians address chips and cracks, ensuring clear visibility and maintaining the structural integrity of your vehicle." }, void 0, !1, {
        fileName: "app/routes/windscreenRepairs.tsx",
        lineNumber: 18,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "", style: { color: "#3F72AF" }, children: "Book a Windscreen Repairs service and receive a complimentary vehicle inspection." }, void 0, !1, {
        fileName: "app/routes/windscreenRepairs.tsx",
        lineNumber: 19,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-2xl font-bold", children: "Starting from \xA349.99" }, void 0, !1, {
        fileName: "app/routes/windscreenRepairs.tsx",
        lineNumber: 22,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex items-center mt-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "text-gray-500 mr-1", children: "220 views today" }, void 0, !1, {
          fileName: "app/routes/windscreenRepairs.tsx",
          lineNumber: 24,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("svg", { className: "w-4 h-4 fill-current text-blue-500", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("path", { d: "M0 0h24v24H0z", fill: "none" }, void 0, !1, {
            fileName: "app/routes/windscreenRepairs.tsx",
            lineNumber: 26,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17h2v2h-2zm0-14h2v10h-2z" }, void 0, !1, {
            fileName: "app/routes/windscreenRepairs.tsx",
            lineNumber: 27,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/windscreenRepairs.tsx",
          lineNumber: 25,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/windscreenRepairs.tsx",
        lineNumber: 23,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { className: "text-white px-4 py-2 rounded mt-2", style: { backgroundColor: "#112D4E" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react_router_dom.Link, { to: "/windscreenService", children: "View Details" }, void 0, !1, {
        fileName: "app/routes/windscreenRepairs.tsx",
        lineNumber: 31,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/windscreenRepairs.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/windscreenRepairs.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { id: "navigation", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { children: shield2.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("a", { href: item.href, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { children: item.icon }, void 0, !1, {
        fileName: "app/routes/windscreenRepairs.tsx",
        lineNumber: 44,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "font-bold text-2xl", style: { color: "#112D4E" }, children: item.description }, void 0, !1, {
        fileName: "app/routes/windscreenRepairs.tsx",
        lineNumber: 45,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-s", style: { color: "#3F72AF", textAlign: "justify" }, children: "All windscreen repairs are backed by a 12-month warranty, ensuring clarity and safety on the road." }, void 0, !1, {
        fileName: "app/routes/windscreenRepairs.tsx",
        lineNumber: 48,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/windscreenRepairs.tsx",
      lineNumber: 43,
      columnNumber: 19
    }, this) }, void 0, !1, {
      fileName: "app/routes/windscreenRepairs.tsx",
      lineNumber: 42,
      columnNumber: 17
    }, this) }, index, !1, {
      fileName: "app/routes/windscreenRepairs.tsx",
      lineNumber: 41,
      columnNumber: 15
    }, this)) }, void 0, !1, {
      fileName: "app/routes/windscreenRepairs.tsx",
      lineNumber: 39,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/windscreenRepairs.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "container mx-auto p-8 justify-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "mt-5 text-5xl font-bold tracking-tight sm:text-5xl text-center justify-center", style: { color: "#112D4E" }, children: "Booking Windscreen Repairs" }, void 0, !1, {
        fileName: "app/routes/windscreenRepairs.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h3", { className: "font-bold text-2xl", style: { color: "#3F72AF" }, children: "Why choose our Windscreen Repairs service?" }, void 0, !1, {
        fileName: "app/routes/windscreenRepairs.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "mt-3", style: { color: "#112D4E" }, children: "Our Windscreen Repairs service is designed to address minor chips and cracks before they develop into larger issues. Prompt repairs ensure clear visibility, prevent further damage, and maintain the overall safety of your vehicle." }, void 0, !1, {
        fileName: "app/routes/windscreenRepairs.tsx",
        lineNumber: 66,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mt-4", style: { borderTop: "1px solid #3F72AF" } }, void 0, !1, {
        fileName: "app/routes/windscreenRepairs.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h4", { className: "font-bold text-2xl mt-4", style: { color: "#3F72AF" }, children: "When to consider Windscreen Repairs" }, void 0, !1, {
        fileName: "app/routes/windscreenRepairs.tsx",
        lineNumber: 70,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "mt-3", style: { color: "#112D4E" }, children: [
        "- Chips or cracks in the windscreen ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/windscreenRepairs.tsx",
          lineNumber: 74,
          columnNumber: 49
        }, this),
        "- Impaired visibility due to damage ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/windscreenRepairs.tsx",
          lineNumber: 75,
          columnNumber: 49
        }, this),
        "- Structural integrity concerns ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/windscreenRepairs.tsx",
          lineNumber: 76,
          columnNumber: 45
        }, this),
        "- Quick and cost-effective solution"
      ] }, void 0, !0, {
        fileName: "app/routes/windscreenRepairs.tsx",
        lineNumber: 73,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/windscreenRepairs.tsx",
      lineNumber: 59,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/windscreenRepairs.tsx",
    lineNumber: 11,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/windscreenRepairs.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/routes/windscreenService.tsx
var windscreenService_exports = {};
__export(windscreenService_exports, {
  default: () => WindscreenRepairService2
});
var import_react7 = require("react"), import_react_datepicker3 = __toESM(require("react-datepicker"));
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function WindscreenRepairService2() {
  let [registration, setRegistration] = (0, import_react7.useState)(""), [postCode, setPostCode] = (0, import_react7.useState)(""), [selectedDate, setSelectedDate] = (0, import_react7.useState)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex items-center justify-center h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "fixed inset-x-0 px-6 py-3 flex flex-row justify-between mx-auto w-full top-28 pl-18", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Breadcrumbs, { paths: [
      { label: "Services", url: "/service" },
      { label: "Windscreen Repairs", url: "/windscreenRepairs" },
      { label: "Windscreen Repair Service", url: "/windscreenService" }
    ] }, void 0, !1, {
      fileName: "app/routes/windscreenService.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/windscreenService.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mt-16 max-w-md p-6 bg-white rounded shadow-md mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { className: "text-3xl font-bold mb-4 text-center", style: { color: "#112D4E" }, children: "Windscreen Repair Service" }, void 0, !1, {
        fileName: "app/routes/windscreenService.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        "img",
        {
          src: "/images/windscreen-repair.png",
          alt: "Service Image",
          className: "mx-auto mb-4 rounded-lg",
          style: { maxWidth: "150px", height: "auto" }
        },
        void 0,
        !1,
        {
          fileName: "app/routes/windscreenService.tsx",
          lineNumber: 48,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "font-bold", style: { color: "#112D4E" }, children: "Starting from \xA399.99*" }, void 0, !1, {
        fileName: "app/routes/windscreenService.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/windscreenService.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { style: { color: "#3F72AF" }, children: "*Prices vary by location and vehicle. Add your details below to get your personalized price" }, void 0, !1, {
        fileName: "app/routes/windscreenService.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("form", { onSubmit: (e) => {
        e.preventDefault();
      }, className: "mt-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("label", { htmlFor: "registration", className: "block mb-2 text-sm ", style: { color: "#112D4E" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "text-navy-blue-500 font-bold", children: "Vehicle Registration:" }, void 0, !1, {
            fileName: "app/routes/windscreenService.tsx",
            lineNumber: 65,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { type: "text", id: "registration", name: "registration", className: "border p-2 w-full mt-1", placeholder: "Enter Vehicle Registration", onChange: (e) => {
            setRegistration(e.target.value);
          } }, void 0, !1, {
            fileName: "app/routes/windscreenService.tsx",
            lineNumber: 66,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/windscreenService.tsx",
          lineNumber: 64,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("label", { htmlFor: "postCode", className: "block mb-2 text-sm ", style: { color: "#112D4E" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "text-navy-blue-500 font-bold", children: "Post Code:" }, void 0, !1, {
            fileName: "app/routes/windscreenService.tsx",
            lineNumber: 71,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { type: "text", id: "postCode", name: "postCode", className: "border p-2 w-full mt-1", placeholder: "Enter Post Code", onChange: (e) => {
            setPostCode(e.target.value);
          } }, void 0, !1, {
            fileName: "app/routes/windscreenService.tsx",
            lineNumber: 72,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/windscreenService.tsx",
          lineNumber: 70,
          columnNumber: 11
        }, this),
        registration && postCode && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("label", { className: "block mb-2 text-sm ", style: { color: "#112D4E" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "text-navy-blue-500 font-bold", children: "Select Repair Date:" }, void 0, !1, {
            fileName: "app/routes/windscreenService.tsx",
            lineNumber: 79,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react_datepicker3.default, { selected: selectedDate, onChange: (date) => {
            setSelectedDate(date);
          }, dateFormat: "dd/MM/yyyy" }, void 0, !1, {
            fileName: "app/routes/windscreenService.tsx",
            lineNumber: 80,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/windscreenService.tsx",
          lineNumber: 78,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/windscreenService.tsx",
          lineNumber: 77,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          "button",
          {
            type: "submit",
            className: `bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 ${selectedDate && registration && postCode ? "" : "opacity-50 cursor-not-allowed"}`,
            disabled: !(selectedDate && registration && postCode),
            children: "Book Now"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/windscreenService.tsx",
            lineNumber: 86,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/windscreenService.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/windscreenService.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/windscreenService.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

// app/routes/diagnosticCheck.tsx
var diagnosticCheck_exports = {};
__export(diagnosticCheck_exports, {
  default: () => AdvancedDiagnosticCheckPage
});
var import_outline5 = require("@heroicons/react/24/outline"), import_react_router_dom2 = require("react-router-dom"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), shield3 = [{ href: "#", description: "12-month warranty", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_outline5.ShieldCheckIcon, { className: "h-20 w-20 mt-8", style: { color: "#112D4E" } }, void 0, !1, {
  fileName: "app/routes/diagnosticCheck.tsx",
  lineNumber: 5,
  columnNumber: 70
}, this) }];
function AdvancedDiagnosticCheckPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mt-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "container mx-auto p-8 flex flex-col items-center justify-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h1", { className: "mt-2 text-4xl font-bold tracking-tight sm:text-6xl mb-9", style: { color: "#112D4E" }, children: "Advanced Diagnostic Check" }, void 0, !1, {
      fileName: "app/routes/diagnosticCheck.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "p-4 border rounded-md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h2", { className: "text-xl font-bold mb-2", children: "Advanced Diagnostic Check Service" }, void 0, !1, {
        fileName: "app/routes/diagnosticCheck.tsx",
        lineNumber: 17,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: "Our advanced diagnostic check goes beyond standard checks to provide a detailed analysis of your vehicle's electronic systems. Stay ahead of potential issues and ensure optimal performance." }, void 0, !1, {
        fileName: "app/routes/diagnosticCheck.tsx",
        lineNumber: 18,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "", style: { color: "#3F72AF" }, children: "Book an Advanced Diagnostic Check for a thorough examination of your vehicle's engine, transmission, electronics, and more." }, void 0, !1, {
        fileName: "app/routes/diagnosticCheck.tsx",
        lineNumber: 19,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "text-2xl font-bold", children: "Starting from \xA379.99" }, void 0, !1, {
        fileName: "app/routes/diagnosticCheck.tsx",
        lineNumber: 22,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex items-center mt-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "text-gray-500 mr-1", children: "1203 views today" }, void 0, !1, {
          fileName: "app/routes/diagnosticCheck.tsx",
          lineNumber: 24,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("svg", { className: "w-4 h-4 fill-current text-blue-500", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("path", { d: "M0 0h24v24H0z", fill: "none" }, void 0, !1, {
            fileName: "app/routes/diagnosticCheck.tsx",
            lineNumber: 26,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17h2v2h-2zm0-14h2v10h-2z" }, void 0, !1, {
            fileName: "app/routes/diagnosticCheck.tsx",
            lineNumber: 27,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/diagnosticCheck.tsx",
          lineNumber: 25,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/diagnosticCheck.tsx",
        lineNumber: 23,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("button", { className: "text-white px-4 py-2 rounded mt-2", style: { backgroundColor: "#112D4E" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react_router_dom2.Link, { to: "/diagnosticService", children: "View Details" }, void 0, !1, {
        fileName: "app/routes/diagnosticCheck.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/diagnosticCheck.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/diagnosticCheck.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { id: "navigation", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("ul", { children: shield3.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("a", { href: item.href, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { children: item.icon }, void 0, !1, {
        fileName: "app/routes/diagnosticCheck.tsx",
        lineNumber: 44,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "font-bold text-2xl", style: { color: "#112D4E" }, children: item.description }, void 0, !1, {
        fileName: "app/routes/diagnosticCheck.tsx",
        lineNumber: 45,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "text-s", style: { color: "#3F72AF", textAlign: "justify" }, children: "Our advanced diagnostic checks come with a 12-month warranty, providing you with confidence in the detailed analysis and identification of potential issues." }, void 0, !1, {
        fileName: "app/routes/diagnosticCheck.tsx",
        lineNumber: 48,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/diagnosticCheck.tsx",
      lineNumber: 43,
      columnNumber: 19
    }, this) }, void 0, !1, {
      fileName: "app/routes/diagnosticCheck.tsx",
      lineNumber: 42,
      columnNumber: 17
    }, this) }, index, !1, {
      fileName: "app/routes/diagnosticCheck.tsx",
      lineNumber: 41,
      columnNumber: 15
    }, this)) }, void 0, !1, {
      fileName: "app/routes/diagnosticCheck.tsx",
      lineNumber: 39,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/diagnosticCheck.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "container mx-auto p-8 justify-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h2", { className: "mt-5 text-5xl font-bold tracking-tight sm:text-5xl text-center justify-center", style: { color: "#112D4E" }, children: "Booking an Advanced Diagnostic Check" }, void 0, !1, {
        fileName: "app/routes/diagnosticCheck.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h3", { className: "font-bold text-2xl", style: { color: "#3F72AF" }, children: "Why choose our Advanced Diagnostic Check service?" }, void 0, !1, {
        fileName: "app/routes/diagnosticCheck.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "mt-3", style: { color: "#112D4E" }, children: [
        "- In-depth analysis of electronic systems ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/diagnosticCheck.tsx",
          lineNumber: 67,
          columnNumber: 55
        }, this),
        "- Identification of potential issues ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/diagnosticCheck.tsx",
          lineNumber: 68,
          columnNumber: 50
        }, this),
        "- Comprehensive engine and transmission check ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/diagnosticCheck.tsx",
          lineNumber: 69,
          columnNumber: 59
        }, this),
        "- Advanced diagnostics for optimal performance ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/diagnosticCheck.tsx",
          lineNumber: 70,
          columnNumber: 60
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/diagnosticCheck.tsx",
        lineNumber: 66,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mt-4", style: { borderTop: "1px solid #3F72AF" } }, void 0, !1, {
        fileName: "app/routes/diagnosticCheck.tsx",
        lineNumber: 72,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h4", { className: "font-bold text-2xl mt-4", style: { color: "#3F72AF" }, children: "What does an Advanced Diagnostic Check involve?" }, void 0, !1, {
        fileName: "app/routes/diagnosticCheck.tsx",
        lineNumber: 73,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "mt-3", style: { color: "#112D4E" }, children: "Our advanced diagnostic check uses state-of-the-art equipment to perform a detailed examination of your vehicle's electronic systems. This includes the engine, transmission, and various other critical components." }, void 0, !1, {
        fileName: "app/routes/diagnosticCheck.tsx",
        lineNumber: 76,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/diagnosticCheck.tsx",
      lineNumber: 59,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/diagnosticCheck.tsx",
    lineNumber: 11,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/diagnosticCheck.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/routes/tireReplacement.tsx
var tireReplacement_exports = {};
__export(tireReplacement_exports, {
  default: () => TireReplacementService
});
var import_react8 = require("react"), import_react_datepicker5 = __toESM(require("react-datepicker"));
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function TireReplacementService() {
  let [registration, setRegistration] = (0, import_react8.useState)(""), [postCode, setPostCode] = (0, import_react8.useState)(""), [selectedDate, setSelectedDate] = (0, import_react8.useState)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex items-center justify-center h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "fixed inset-x-0 px-6 py-3 flex flex-row justify-between mx-auto w-full top-28 pl-18", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Breadcrumbs, { paths: [
      { label: "Services", url: "/service" },
      { label: "Tire Fix and Replacement", url: "/tiresFixAndReplacements" },
      { label: "Tire Replacement", url: "/tireReplacement" }
    ] }, void 0, !1, {
      fileName: "app/routes/tireReplacement.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/tireReplacement.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mt-16 max-w-md p-6 bg-white rounded shadow-md mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h1", { className: "text-3xl font-bold mb-4 text-center", children: "Tire Replacement Service" }, void 0, !1, {
        fileName: "app/routes/tireReplacement.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        "img",
        {
          src: "/images/tire-replacement.png",
          alt: "Service Image",
          className: "mx-auto mb-4 rounded-lg",
          style: { maxWidth: "150px", height: "auto" }
        },
        void 0,
        !1,
        {
          fileName: "app/routes/tireReplacement.tsx",
          lineNumber: 48,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "font-bold", children: "From \xA399.99*" }, void 0, !1, {
        fileName: "app/routes/tireReplacement.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/tireReplacement.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { style: { color: "#3F72AF" }, children: "*Prices vary by location and vehicle. Add your details below to get your personalized price" }, void 0, !1, {
        fileName: "app/routes/tireReplacement.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("form", { onSubmit: (e) => {
        e.preventDefault();
      }, className: "mt-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("label", { htmlFor: "registration", className: "block mb-2 text-sm ", style: { color: "#112D4E" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "text-navy-blue-500 font-bold", children: "Registration Number:" }, void 0, !1, {
            fileName: "app/routes/tireReplacement.tsx",
            lineNumber: 65,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { type: "text", id: "registration", name: "registration", className: "border p-2 w-full mt-1", placeholder: "Enter Registration", onChange: (e) => {
            setRegistration(e.target.value);
          } }, void 0, !1, {
            fileName: "app/routes/tireReplacement.tsx",
            lineNumber: 66,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/tireReplacement.tsx",
          lineNumber: 64,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("label", { htmlFor: "postCode", className: "block mb-2 text-sm ", style: { color: "#112D4E" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "text-navy-blue-500 font-bold", children: "Post Code:" }, void 0, !1, {
            fileName: "app/routes/tireReplacement.tsx",
            lineNumber: 71,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { type: "text", id: "postCode", name: "postCode", className: "border p-2 w-full mt-1", placeholder: "Enter Post Code", onChange: (e) => {
            setPostCode(e.target.value);
          } }, void 0, !1, {
            fileName: "app/routes/tireReplacement.tsx",
            lineNumber: 72,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/tireReplacement.tsx",
          lineNumber: 70,
          columnNumber: 11
        }, this),
        registration && postCode && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("label", { className: "block mb-2 text-sm ", style: { color: "#112D4E" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "text-navy-blue-500 font-bold", children: "Select Date:" }, void 0, !1, {
            fileName: "app/routes/tireReplacement.tsx",
            lineNumber: 79,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react_datepicker5.default, { selected: selectedDate, onChange: (date) => {
            setSelectedDate(date);
          }, dateFormat: "dd/MM/yyyy" }, void 0, !1, {
            fileName: "app/routes/tireReplacement.tsx",
            lineNumber: 80,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/tireReplacement.tsx",
          lineNumber: 78,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/tireReplacement.tsx",
          lineNumber: 77,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          "button",
          {
            type: "submit",
            className: `bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 ${selectedDate && registration && postCode ? "" : "opacity-50 cursor-not-allowed"}`,
            disabled: !(selectedDate && registration && postCode),
            children: "Book Now"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/tireReplacement.tsx",
            lineNumber: 86,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/tireReplacement.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/tireReplacement.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/tireReplacement.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

// app/routes/batteryService.tsx
var batteryService_exports = {};
__export(batteryService_exports, {
  default: () => WindscreenRepairService3
});
var import_react9 = require("react"), import_react_datepicker7 = __toESM(require("react-datepicker"));
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function WindscreenRepairService3() {
  let [registration, setRegistration] = (0, import_react9.useState)(""), [postCode, setPostCode] = (0, import_react9.useState)(""), [selectedDate, setSelectedDate] = (0, import_react9.useState)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex items-center justify-center h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "fixed inset-x-0 px-6 py-3 flex flex-row justify-between mx-auto w-full top-28 pl-18", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Breadcrumbs, { paths: [
      { label: "Services", url: "/service" },
      { label: "Battery Change", url: "/batteryChange" },
      { label: "Battery Change Service", url: "/batteryService" }
    ] }, void 0, !1, {
      fileName: "app/routes/batteryService.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/batteryService.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "mt-16 max-w-md p-6 bg-white rounded shadow-md mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h1", { className: "text-3xl font-bold mb-4 text-center", style: { color: "#112D4E" }, children: "Battery Change Service" }, void 0, !1, {
        fileName: "app/routes/batteryService.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
        "img",
        {
          src: "/images/windscreen-repair.png",
          alt: "Service Image",
          className: "mx-auto mb-4 rounded-lg",
          style: { maxWidth: "150px", height: "auto" }
        },
        void 0,
        !1,
        {
          fileName: "app/routes/batteryService.tsx",
          lineNumber: 48,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { className: "font-bold", style: { color: "#112D4E" }, children: "Starting from \xA379.99*" }, void 0, !1, {
        fileName: "app/routes/batteryService.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/batteryService.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { style: { color: "#3F72AF" }, children: "*Prices vary by location and vehicle. Add your details below to get your personalized price" }, void 0, !1, {
        fileName: "app/routes/batteryService.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("form", { onSubmit: (e) => {
        e.preventDefault();
      }, className: "mt-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("label", { htmlFor: "registration", className: "block mb-2 text-sm ", style: { color: "#112D4E" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { className: "text-navy-blue-500 font-bold", children: "Vehicle Registration:" }, void 0, !1, {
            fileName: "app/routes/batteryService.tsx",
            lineNumber: 65,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("input", { type: "text", id: "registration", name: "registration", className: "border p-2 w-full mt-1", placeholder: "Enter Vehicle Registration", onChange: (e) => {
            setRegistration(e.target.value);
          } }, void 0, !1, {
            fileName: "app/routes/batteryService.tsx",
            lineNumber: 66,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/batteryService.tsx",
          lineNumber: 64,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("label", { htmlFor: "postCode", className: "block mb-2 text-sm ", style: { color: "#112D4E" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { className: "text-navy-blue-500 font-bold", children: "Post Code:" }, void 0, !1, {
            fileName: "app/routes/batteryService.tsx",
            lineNumber: 71,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("input", { type: "text", id: "postCode", name: "postCode", className: "border p-2 w-full mt-1", placeholder: "Enter Post Code", onChange: (e) => {
            setPostCode(e.target.value);
          } }, void 0, !1, {
            fileName: "app/routes/batteryService.tsx",
            lineNumber: 72,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/batteryService.tsx",
          lineNumber: 70,
          columnNumber: 11
        }, this),
        registration && postCode && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("label", { className: "block mb-2 text-sm ", style: { color: "#112D4E" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { className: "text-navy-blue-500 font-bold", children: "Select Repair Date:" }, void 0, !1, {
            fileName: "app/routes/batteryService.tsx",
            lineNumber: 79,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react_datepicker7.default, { selected: selectedDate, onChange: (date) => {
            setSelectedDate(date);
          }, dateFormat: "dd/MM/yyyy" }, void 0, !1, {
            fileName: "app/routes/batteryService.tsx",
            lineNumber: 80,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/batteryService.tsx",
          lineNumber: 78,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/batteryService.tsx",
          lineNumber: 77,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          "button",
          {
            type: "submit",
            className: `bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 ${selectedDate && registration && postCode ? "" : "opacity-50 cursor-not-allowed"}`,
            disabled: !(selectedDate && registration && postCode),
            children: "Book Now"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/batteryService.tsx",
            lineNumber: 86,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/batteryService.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/batteryService.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/batteryService.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

// app/routes/forgotPassword.tsx
var forgotPassword_exports = {};
__export(forgotPassword_exports, {
  default: () => forgotPassword_default
});
var import_react10 = require("react"), import_react_router_dom3 = require("react-router-dom"), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), bycript = require("bcryptjs");
function ForgotPassword() {
  let [email, setEmail] = (0, import_react10.useState)(""), [newPassword, setNewPassword] = (0, import_react10.useState)(""), [confirmNewPassword, setConfirmNewPassword] = (0, import_react10.useState)(""), [message, setMessage] = (0, import_react10.useState)(""), [error, setError] = (0, import_react10.useState)("");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "sm:mx-auto sm:w-full sm:max-w-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h2", { className: "mt-10 text-center text-2xl font-bold leading-9 tracking-tight pt-10", style: { color: "#112D4E" }, children: "Forgot Password" }, void 0, !1, {
      fileName: "app/routes/forgotPassword.tsx",
      lineNumber: 49,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/forgotPassword.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "mt-10 sm:mx-auto sm:w-full sm:max-w-sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("form", { className: "space-y-6", onSubmit: async (e) => {
        e.preventDefault();
        try {
          let response = await fetch("/forgotDb", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
              email,
              newPassword,
              confirmNewPassword
            })
          }), data = await response.json();
          response.ok ? (setMessage(data.message), setError("")) : (setMessage(""), setError(data.error));
        } catch (error2) {
          console.error("Error:", error2), setMessage(""), setError("An unexpected error occurred");
        }
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium leading-6 text-gray-900", style: { fontSize: "16px", color: "#112D4E" }, children: "Email" }, void 0, !1, {
            fileName: "app/routes/forgotPassword.tsx",
            lineNumber: 60,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
            "input",
            {
              id: "email",
              name: "email",
              type: "email",
              value: email,
              onChange: (e) => setEmail(e.target.value),
              required: !0,
              className: "block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 focus:ring-indigo-950 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6",
              style: { fontSize: "16px", borderColor: "#112D4E" }
            },
            void 0,
            !1,
            {
              fileName: "app/routes/forgotPassword.tsx",
              lineNumber: 64,
              columnNumber: 15
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/forgotPassword.tsx",
            lineNumber: 63,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/forgotPassword.tsx",
          lineNumber: 59,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("label", { htmlFor: "newPassword", className: "block text-sm font-medium leading-6 text-gray-900", style: { fontSize: "16px", color: "#112D4E" }, children: "New Password" }, void 0, !1, {
            fileName: "app/routes/forgotPassword.tsx",
            lineNumber: 79,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
            "input",
            {
              id: "newPassword",
              name: "newPassword",
              type: "password",
              value: newPassword,
              onChange: (e) => setNewPassword(e.target.value),
              required: !0,
              className: "block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 focus:ring-indigo-950 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/forgotPassword.tsx",
              lineNumber: 83,
              columnNumber: 15
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/forgotPassword.tsx",
            lineNumber: 82,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/forgotPassword.tsx",
          lineNumber: 78,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("label", { htmlFor: "confirmNewPassword", className: "block text-sm font-medium leading-6 text-gray-900", style: { fontSize: "16px", color: "#112D4E" }, children: "Confirm New Password" }, void 0, !1, {
            fileName: "app/routes/forgotPassword.tsx",
            lineNumber: 97,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
            "input",
            {
              id: "confirmNewPassword",
              name: "confirmNewPassword",
              type: "password",
              value: confirmNewPassword,
              onChange: (e) => setConfirmNewPassword(e.target.value),
              required: !0,
              className: "block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 focus:ring-indigo-950 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/forgotPassword.tsx",
              lineNumber: 101,
              columnNumber: 15
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/forgotPassword.tsx",
            lineNumber: 100,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/forgotPassword.tsx",
          lineNumber: 96,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "flex w-full justify-center rounded-full px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-950",
            style: { backgroundColor: "#112D4E", fontSize: "16px" },
            children: "Reset Password"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/forgotPassword.tsx",
            lineNumber: 115,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/forgotPassword.tsx",
          lineNumber: 114,
          columnNumber: 11
        }, this),
        message && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "text-green-500", children: message }, void 0, !1, {
          fileName: "app/routes/forgotPassword.tsx",
          lineNumber: 124,
          columnNumber: 23
        }, this),
        error && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "text-red-500", children: error }, void 0, !1, {
          fileName: "app/routes/forgotPassword.tsx",
          lineNumber: 125,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/forgotPassword.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "mt-6 text-center text-sm text-gray-500", children: [
        "Remember your password?",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react_router_dom3.Link, { to: "/login", className: "font-semibold leading-6", style: { color: "#112D4E" }, children: "Sign In" }, void 0, !1, {
          fileName: "app/routes/forgotPassword.tsx",
          lineNumber: 131,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/forgotPassword.tsx",
        lineNumber: 129,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/forgotPassword.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/forgotPassword.tsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
}
var forgotPassword_default = ForgotPassword;

// app/routes/interimService.tsx
var interimService_exports = {};
__export(interimService_exports, {
  default: () => InterimService
});
var import_react11 = require("react"), import_react_datepicker9 = __toESM(require("react-datepicker"));
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function InterimService() {
  let [registration, setRegistration] = (0, import_react11.useState)(""), [postCode, setPostCode] = (0, import_react11.useState)(""), [selectedDate, setSelectedDate] = (0, import_react11.useState)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex items-center justify-center h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "fixed inset-x-0 px-6 py-3 flex flex-row justify-between mx-auto w-full top-28 pl-18", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Breadcrumbs, { paths: [
      { label: "Services", url: "/service" },
      { label: "Car Servcing", url: "/carServicing" },
      { label: "Interim Service", url: "/interimService" }
    ] }, void 0, !1, {
      fileName: "app/routes/interimService.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/interimService.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "mt-16 max-w-md p-6 bg-white rounded shadow-md mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h1", { className: "text-3xl font-bold mb-4 text-center", children: "Interim Service" }, void 0, !1, {
        fileName: "app/routes/interimService.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
        "img",
        {
          src: "/images/interim-service.png",
          alt: "Service Image",
          className: "mx-auto mb-4 rounded-lg",
          style: { maxWidth: "150px", height: "auto" }
        },
        void 0,
        !1,
        {
          fileName: "app/routes/interimService.tsx",
          lineNumber: 47,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("span", { className: "font-bold", children: "From \xA3149.99*" }, void 0, !1, {
        fileName: "app/routes/interimService.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/interimService.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("span", { className: "font-bold", style: { color: "#3F72AF" }, children: "Book with an MOT and save \xA324.99" }, void 0, !1, {
        fileName: "app/routes/interimService.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/interimService.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: "*Prices vary by location and vehicle. Add your details below to get your personalized price" }, void 0, !1, {
        fileName: "app/routes/interimService.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("form", { onSubmit: (e) => {
        e.preventDefault();
      }, className: "mt-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("label", { htmlFor: "registration", className: "block mb-2 text-sm text-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("span", { className: "text-navy-blue-500 font-bold", children: "Registration:" }, void 0, !1, {
            fileName: "app/routes/interimService.tsx",
            lineNumber: 69,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("input", { type: "text", id: "registration", name: "registration", className: "border p-2 w-full mt-1", placeholder: "Enter Registration", onChange: (e) => {
            setRegistration(e.target.value);
          } }, void 0, !1, {
            fileName: "app/routes/interimService.tsx",
            lineNumber: 70,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/interimService.tsx",
          lineNumber: 68,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("label", { htmlFor: "postCode", className: "block mb-2 text-sm text-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("span", { className: "text-navy-blue-500 font-bold", children: "Post Code:" }, void 0, !1, {
            fileName: "app/routes/interimService.tsx",
            lineNumber: 75,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("input", { type: "text", id: "postCode", name: "postCode", className: "border p-2 w-full mt-1", placeholder: "Enter Post Code", onChange: (e) => {
            setPostCode(e.target.value);
          } }, void 0, !1, {
            fileName: "app/routes/interimService.tsx",
            lineNumber: 76,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/interimService.tsx",
          lineNumber: 74,
          columnNumber: 11
        }, this),
        registration && postCode && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("label", { className: "block mb-2 text-sm text-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("span", { className: "text-navy-blue-500 font-bold", children: "Select Date:" }, void 0, !1, {
            fileName: "app/routes/interimService.tsx",
            lineNumber: 83,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react_datepicker9.default, { selected: selectedDate, onChange: (date) => {
            setSelectedDate(date);
          }, dateFormat: "dd/MM/yyyy" }, void 0, !1, {
            fileName: "app/routes/interimService.tsx",
            lineNumber: 84,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/interimService.tsx",
          lineNumber: 82,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/interimService.tsx",
          lineNumber: 81,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          "button",
          {
            type: "submit",
            className: `bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 ${selectedDate && registration && postCode ? "" : "opacity-50 cursor-not-allowed"}`,
            disabled: !(selectedDate && registration && postCode),
            children: "Book Now"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/interimService.tsx",
            lineNumber: 90,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/interimService.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/interimService.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/interimService.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}

// app/routes/punctureRepair.tsx
var punctureRepair_exports = {};
__export(punctureRepair_exports, {
  default: () => PunctureRepairService
});
var import_react12 = require("react"), import_react_datepicker11 = __toESM(require("react-datepicker"));
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function PunctureRepairService() {
  let [registration, setRegistration] = (0, import_react12.useState)(""), [postCode, setPostCode] = (0, import_react12.useState)(""), [selectedDate, setSelectedDate] = (0, import_react12.useState)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex items-center justify-center h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "fixed inset-x-0 px-6 py-3 flex flex-row justify-between mx-auto w-full top-28 pl-18", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Breadcrumbs, { paths: [
      { label: "Services", url: "/service" },
      { label: "Tire Fix and Replacement", url: "/tiresFixAndReplacements" },
      { label: "Puncture Repair", url: "/punctureRepair" }
    ] }, void 0, !1, {
      fileName: "app/routes/punctureRepair.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/punctureRepair.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "mt-16 max-w-md p-6 bg-white rounded shadow-md mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h1", { className: "text-3xl font-bold mb-4 text-center", style: { color: "#112D4E" }, children: "Puncture Repair Service" }, void 0, !1, {
        fileName: "app/routes/punctureRepair.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        "img",
        {
          src: "/images/puncture-repair.png",
          alt: "Service Image",
          className: "mx-auto mb-4 rounded-lg",
          style: { maxWidth: "150px", height: "auto" }
        },
        void 0,
        !1,
        {
          fileName: "app/routes/punctureRepair.tsx",
          lineNumber: 48,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("span", { className: "font-bold", children: "From \xA349.99*" }, void 0, !1, {
        fileName: "app/routes/punctureRepair.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/punctureRepair.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { style: { color: "#3F72AF" }, children: "*Prices vary by location and vehicle. Add your details below to get your personalized price" }, void 0, !1, {
        fileName: "app/routes/punctureRepair.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("form", { onSubmit: (e) => {
        e.preventDefault();
      }, className: "mt-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("label", { htmlFor: "registration", className: "block mb-2 text-sm text-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("span", { className: "text-navy-blue-500 font-bold", children: "Registration Number:" }, void 0, !1, {
            fileName: "app/routes/punctureRepair.tsx",
            lineNumber: 65,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("input", { type: "text", id: "registration", name: "registration", className: "border p-2 w-full mt-1", placeholder: "Enter Registration", onChange: (e) => {
            setRegistration(e.target.value);
          } }, void 0, !1, {
            fileName: "app/routes/punctureRepair.tsx",
            lineNumber: 66,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/punctureRepair.tsx",
          lineNumber: 64,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("label", { htmlFor: "postCode", className: "block mb-2 text-sm text-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("span", { className: "text-navy-blue-500 font-bold", children: "Post Code:" }, void 0, !1, {
            fileName: "app/routes/punctureRepair.tsx",
            lineNumber: 71,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("input", { type: "text", id: "postCode", name: "postCode", className: "border p-2 w-full mt-1", placeholder: "Enter Post Code", onChange: (e) => {
            setPostCode(e.target.value);
          } }, void 0, !1, {
            fileName: "app/routes/punctureRepair.tsx",
            lineNumber: 72,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/punctureRepair.tsx",
          lineNumber: 70,
          columnNumber: 11
        }, this),
        registration && postCode && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("label", { className: "block mb-2 text-sm text-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("span", { className: "text-navy-blue-500 font-bold", children: "Select Date:" }, void 0, !1, {
            fileName: "app/routes/punctureRepair.tsx",
            lineNumber: 79,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react_datepicker11.default, { selected: selectedDate, onChange: (date) => {
            setSelectedDate(date);
          }, dateFormat: "dd/MM/yyyy" }, void 0, !1, {
            fileName: "app/routes/punctureRepair.tsx",
            lineNumber: 80,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/punctureRepair.tsx",
          lineNumber: 78,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/punctureRepair.tsx",
          lineNumber: 77,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          "button",
          {
            type: "submit",
            className: `bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 ${selectedDate && registration && postCode ? "" : "opacity-50 cursor-not-allowed"}`,
            disabled: !(selectedDate && registration && postCode),
            children: "Book Now"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/punctureRepair.tsx",
            lineNumber: 86,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/punctureRepair.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/punctureRepair.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/punctureRepair.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

// app/routes/batteryChange.tsx
var batteryChange_exports = {};
__export(batteryChange_exports, {
  default: () => BatteryChangePage
});
var import_outline6 = require("@heroicons/react/24/outline"), import_react_router_dom4 = require("react-router-dom"), import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), shield4 = [{ href: "#", description: "12-month warranty", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_outline6.ShieldCheckIcon, { className: "h-20 w-20 mt-8", style: { color: "#112D4E" } }, void 0, !1, {
  fileName: "app/routes/batteryChange.tsx",
  lineNumber: 5,
  columnNumber: 70
}, this) }];
function BatteryChangePage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "mt-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "container mx-auto p-8 flex flex-col items-center justify-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h1", { className: "mt-2 text-4xl font-bold tracking-tight sm:text-6xl mb-9", style: { color: "#112D4E" }, children: "Battery Change" }, void 0, !1, {
      fileName: "app/routes/batteryChange.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "p-4 border rounded-md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h2", { className: "text-xl font-bold mb-2", children: "Battery Change Service" }, void 0, !1, {
        fileName: "app/routes/batteryChange.tsx",
        lineNumber: 17,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { children: "Ensure your vehicle stays powered with our expert battery change service. Our skilled technicians will replace your old battery with a reliable one, providing you with a seamless and efficient solution." }, void 0, !1, {
        fileName: "app/routes/batteryChange.tsx",
        lineNumber: 18,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "", style: { color: "#3F72AF" }, children: "Book a Battery Change service and receive a complimentary vehicle inspection." }, void 0, !1, {
        fileName: "app/routes/batteryChange.tsx",
        lineNumber: 19,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "text-2xl font-bold", children: "Starting from \xA379.99" }, void 0, !1, {
        fileName: "app/routes/batteryChange.tsx",
        lineNumber: 22,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex items-center mt-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "text-gray-500 mr-1", children: "120 views today" }, void 0, !1, {
          fileName: "app/routes/batteryChange.tsx",
          lineNumber: 24,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("svg", { className: "w-4 h-4 fill-current text-blue-500", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("path", { d: "M0 0h24v24H0z", fill: "none" }, void 0, !1, {
            fileName: "app/routes/batteryChange.tsx",
            lineNumber: 26,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17h2v2h-2zm0-14h2v10h-2z" }, void 0, !1, {
            fileName: "app/routes/batteryChange.tsx",
            lineNumber: 27,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/batteryChange.tsx",
          lineNumber: 25,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/batteryChange.tsx",
        lineNumber: 23,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("button", { className: "text-white px-4 py-2 rounded mt-2", style: { backgroundColor: "#112D4E" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react_router_dom4.Link, { to: "/batteryService", children: "View Details" }, void 0, !1, {
        fileName: "app/routes/batteryChange.tsx",
        lineNumber: 31,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/batteryChange.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/batteryChange.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { id: "navigation", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("ul", { children: shield4.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("a", { href: item.href, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { children: item.icon }, void 0, !1, {
        fileName: "app/routes/batteryChange.tsx",
        lineNumber: 44,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "font-bold text-2xl", style: { color: "#112D4E" }, children: item.description }, void 0, !1, {
        fileName: "app/routes/batteryChange.tsx",
        lineNumber: 45,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "text-s", style: { color: "#3F72AF", textAlign: "justify" }, children: "All battery changes are backed by a 12-month warranty, ensuring reliability and peace of mind." }, void 0, !1, {
        fileName: "app/routes/batteryChange.tsx",
        lineNumber: 48,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/batteryChange.tsx",
      lineNumber: 43,
      columnNumber: 19
    }, this) }, void 0, !1, {
      fileName: "app/routes/batteryChange.tsx",
      lineNumber: 42,
      columnNumber: 17
    }, this) }, index, !1, {
      fileName: "app/routes/batteryChange.tsx",
      lineNumber: 41,
      columnNumber: 15
    }, this)) }, void 0, !1, {
      fileName: "app/routes/batteryChange.tsx",
      lineNumber: 39,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/batteryChange.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "container mx-auto p-8 justify-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h2", { className: "mt-5 text-5xl font-bold tracking-tight sm:text-5xl text-center justify-center", style: { color: "#112D4E" }, children: "Booking a Battery Change" }, void 0, !1, {
        fileName: "app/routes/batteryChange.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h3", { className: "font-bold text-2xl", style: { color: "#3F72AF" }, children: "Why choose our Battery Change service?" }, void 0, !1, {
        fileName: "app/routes/batteryChange.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "mt-3", style: { color: "#112D4E" }, children: "Our Battery Change service ensures that your vehicle's electrical system stays reliable and efficient. If you're experiencing issues with starting your car or notice a decline in battery performance, our technicians are here to provide a quick and effective solution." }, void 0, !1, {
        fileName: "app/routes/batteryChange.tsx",
        lineNumber: 66,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "mt-4", style: { borderTop: "1px solid #3F72AF" } }, void 0, !1, {
        fileName: "app/routes/batteryChange.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h4", { className: "font-bold text-2xl mt-4", style: { color: "#3F72AF" }, children: "Signs you may need a Battery Change" }, void 0, !1, {
        fileName: "app/routes/batteryChange.tsx",
        lineNumber: 70,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "mt-3", style: { color: "#112D4E" }, children: [
        "- Slow engine crank ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/batteryChange.tsx",
          lineNumber: 74,
          columnNumber: 33
        }, this),
        "- Dashboard warning light ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/batteryChange.tsx",
          lineNumber: 75,
          columnNumber: 39
        }, this),
        "- Issues with electrical components ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/batteryChange.tsx",
          lineNumber: 76,
          columnNumber: 49
        }, this),
        "- Old battery age (typically 3-5 years)"
      ] }, void 0, !0, {
        fileName: "app/routes/batteryChange.tsx",
        lineNumber: 73,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/batteryChange.tsx",
      lineNumber: 59,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/batteryChange.tsx",
    lineNumber: 11,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/batteryChange.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/routes/engineService.tsx
var engineService_exports = {};
__export(engineService_exports, {
  default: () => WindscreenRepairService4
});
var import_react13 = require("react"), import_react_datepicker13 = __toESM(require("react-datepicker"));
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function WindscreenRepairService4() {
  let [registration, setRegistration] = (0, import_react13.useState)(""), [postCode, setPostCode] = (0, import_react13.useState)(""), [selectedDate, setSelectedDate] = (0, import_react13.useState)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex items-center justify-center h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "fixed inset-x-0 px-6 py-3 flex flex-row justify-between mx-auto w-full top-28 pl-18", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Breadcrumbs, { paths: [
      { label: "Services", url: "/service" },
      { label: "Engine Tune-Ups", url: "/engineTuneUps" },
      { label: "Engine Tune-Up Service", url: "/engineService" }
    ] }, void 0, !1, {
      fileName: "app/routes/engineService.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/engineService.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "mt-16 max-w-md p-6 bg-white rounded shadow-md mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h1", { className: "text-3xl font-bold mb-4 text-center", style: { color: "#112D4E" }, children: "Engine Tune-Up Service" }, void 0, !1, {
        fileName: "app/routes/engineService.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
        "img",
        {
          src: "/images/windscreen-repair.png",
          alt: "Service Image",
          className: "mx-auto mb-4 rounded-lg",
          style: { maxWidth: "150px", height: "auto" }
        },
        void 0,
        !1,
        {
          fileName: "app/routes/engineService.tsx",
          lineNumber: 48,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "font-bold", style: { color: "#112D4E" }, children: "Starting from \xA3129.99*" }, void 0, !1, {
        fileName: "app/routes/engineService.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/engineService.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { style: { color: "#3F72AF" }, children: "*Prices vary by location and vehicle. Add your details below to get your personalized price" }, void 0, !1, {
        fileName: "app/routes/engineService.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("form", { onSubmit: (e) => {
        e.preventDefault();
      }, className: "mt-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("label", { htmlFor: "registration", className: "block mb-2 text-sm ", style: { color: "#112D4E" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "text-navy-blue-500 font-bold", children: "Vehicle Registration:" }, void 0, !1, {
            fileName: "app/routes/engineService.tsx",
            lineNumber: 65,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("input", { type: "text", id: "registration", name: "registration", className: "border p-2 w-full mt-1", placeholder: "Enter Vehicle Registration", onChange: (e) => {
            setRegistration(e.target.value);
          } }, void 0, !1, {
            fileName: "app/routes/engineService.tsx",
            lineNumber: 66,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/engineService.tsx",
          lineNumber: 64,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("label", { htmlFor: "postCode", className: "block mb-2 text-sm ", style: { color: "#112D4E" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "text-navy-blue-500 font-bold", children: "Post Code:" }, void 0, !1, {
            fileName: "app/routes/engineService.tsx",
            lineNumber: 71,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("input", { type: "text", id: "postCode", name: "postCode", className: "border p-2 w-full mt-1", placeholder: "Enter Post Code", onChange: (e) => {
            setPostCode(e.target.value);
          } }, void 0, !1, {
            fileName: "app/routes/engineService.tsx",
            lineNumber: 72,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/engineService.tsx",
          lineNumber: 70,
          columnNumber: 11
        }, this),
        registration && postCode && /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("label", { className: "block mb-2 text-sm ", style: { color: "#112D4E" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "text-navy-blue-500 font-bold", children: "Select Repair Date:" }, void 0, !1, {
            fileName: "app/routes/engineService.tsx",
            lineNumber: 79,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react_datepicker13.default, { selected: selectedDate, onChange: (date) => {
            setSelectedDate(date);
          }, dateFormat: "dd/MM/yyyy" }, void 0, !1, {
            fileName: "app/routes/engineService.tsx",
            lineNumber: 80,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/engineService.tsx",
          lineNumber: 78,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/engineService.tsx",
          lineNumber: 77,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
          "button",
          {
            type: "submit",
            className: `bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 ${selectedDate && registration && postCode ? "" : "opacity-50 cursor-not-allowed"}`,
            disabled: !(selectedDate && registration && postCode),
            children: "Book Now"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/engineService.tsx",
            lineNumber: 86,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/engineService.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/engineService.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/engineService.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

// app/routes/engineTuneUps.tsx
var engineTuneUps_exports = {};
__export(engineTuneUps_exports, {
  default: () => EngineTuneUpsPage
});
var import_outline7 = require("@heroicons/react/24/outline"), import_react_router_dom5 = require("react-router-dom"), import_jsx_dev_runtime17 = require("react/jsx-dev-runtime"), shield5 = [{ href: "#", description: "12-month warranty", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_outline7.ShieldCheckIcon, { className: "h-20 w-20 mt-8", style: { color: "#112D4E" } }, void 0, !1, {
  fileName: "app/routes/engineTuneUps.tsx",
  lineNumber: 4,
  columnNumber: 70
}, this) }];
function EngineTuneUpsPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "mt-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "container mx-auto p-8 flex flex-col items-center justify-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h1", { className: "mt-2 text-4xl font-bold tracking-tight sm:text-6xl mb-9", style: { color: "#112D4E" }, children: "Engine Tune-ups" }, void 0, !1, {
      fileName: "app/routes/engineTuneUps.tsx",
      lineNumber: 11,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "p-4 border rounded-md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h2", { className: "text-xl font-bold mb-2", children: "Engine Tune-ups Service" }, void 0, !1, {
        fileName: "app/routes/engineTuneUps.tsx",
        lineNumber: 16,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { children: "Enhance your vehicle's performance with our engine tune-up services. Our skilled technicians optimize engine components to improve efficiency and reliability." }, void 0, !1, {
        fileName: "app/routes/engineTuneUps.tsx",
        lineNumber: 17,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { className: "", style: { color: "#3F72AF" }, children: "Book an Engine Tune-ups service and experience a smoother and more efficient driving experience." }, void 0, !1, {
        fileName: "app/routes/engineTuneUps.tsx",
        lineNumber: 18,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { className: "text-2xl font-bold", children: "Starting from \xA3129.99" }, void 0, !1, {
        fileName: "app/routes/engineTuneUps.tsx",
        lineNumber: 21,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex items-center mt-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "text-gray-500 mr-1", children: "420 views today" }, void 0, !1, {
          fileName: "app/routes/engineTuneUps.tsx",
          lineNumber: 23,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("svg", { className: "w-4 h-4 fill-current text-blue-500", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("path", { d: "M0 0h24v24H0z", fill: "none" }, void 0, !1, {
            fileName: "app/routes/engineTuneUps.tsx",
            lineNumber: 25,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17h2v2h-2zm0-14h2v10h-2z" }, void 0, !1, {
            fileName: "app/routes/engineTuneUps.tsx",
            lineNumber: 26,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/engineTuneUps.tsx",
          lineNumber: 24,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/engineTuneUps.tsx",
        lineNumber: 22,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("button", { className: "text-white px-4 py-2 rounded mt-2", style: { backgroundColor: "#112D4E" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react_router_dom5.Link, { to: "/engineService", children: "View Details" }, void 0, !1, {
        fileName: "app/routes/engineTuneUps.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/engineTuneUps.tsx",
        lineNumber: 29,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/engineTuneUps.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { id: "navigation", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("ul", { children: shield5.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("a", { href: item.href, children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { children: item.icon }, void 0, !1, {
        fileName: "app/routes/engineTuneUps.tsx",
        lineNumber: 43,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { className: "font-bold text-2xl", style: { color: "#112D4E" }, children: item.description }, void 0, !1, {
        fileName: "app/routes/engineTuneUps.tsx",
        lineNumber: 44,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { className: "text-s", style: { color: "#3F72AF", textAlign: "justify" }, children: "All engine tune-ups are backed by a 12-month warranty, ensuring optimal performance and reliability for your vehicle." }, void 0, !1, {
        fileName: "app/routes/engineTuneUps.tsx",
        lineNumber: 47,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/engineTuneUps.tsx",
      lineNumber: 42,
      columnNumber: 19
    }, this) }, void 0, !1, {
      fileName: "app/routes/engineTuneUps.tsx",
      lineNumber: 41,
      columnNumber: 17
    }, this) }, index, !1, {
      fileName: "app/routes/engineTuneUps.tsx",
      lineNumber: 40,
      columnNumber: 15
    }, this)) }, void 0, !1, {
      fileName: "app/routes/engineTuneUps.tsx",
      lineNumber: 38,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/engineTuneUps.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "container mx-auto p-8 justify-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h2", { className: "mt-5 text-5xl font-bold tracking-tight sm:text-5xl text-center justify-center", style: { color: "#112D4E" }, children: "Booking Engine Tune-ups" }, void 0, !1, {
        fileName: "app/routes/engineTuneUps.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h3", { className: "font-bold text-2xl", style: { color: "#3F72AF" }, children: "Signs your engine may need a Tune-up" }, void 0, !1, {
        fileName: "app/routes/engineTuneUps.tsx",
        lineNumber: 62,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { className: "mt-3", style: { color: "#112D4E" }, children: [
        "- Reduced fuel efficiency ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/engineTuneUps.tsx",
          lineNumber: 66,
          columnNumber: 39
        }, this),
        "- Rough idling or stalling ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/engineTuneUps.tsx",
          lineNumber: 67,
          columnNumber: 40
        }, this),
        "- Warning lights on the dashboard ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/engineTuneUps.tsx",
          lineNumber: 68,
          columnNumber: 47
        }, this),
        "- Lack of power or acceleration ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/engineTuneUps.tsx",
          lineNumber: 69,
          columnNumber: 45
        }, this),
        "- Unusual engine noises"
      ] }, void 0, !0, {
        fileName: "app/routes/engineTuneUps.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "mt-4", style: { borderTop: "1px solid #3F72AF" } }, void 0, !1, {
        fileName: "app/routes/engineTuneUps.tsx",
        lineNumber: 72,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h4", { className: "font-bold text-2xl mt-4", style: { color: "#3F72AF" }, children: "Why choose our Engine Tune-ups service?" }, void 0, !1, {
        fileName: "app/routes/engineTuneUps.tsx",
        lineNumber: 73,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { className: "mt-3", style: { color: "#112D4E" }, children: "Our Engine Tune-ups service is designed to optimize your vehicle's performance, addressing issues that affect fuel efficiency, power, and overall driving experience. Trust our skilled technicians for a comprehensive engine tune-up." }, void 0, !1, {
        fileName: "app/routes/engineTuneUps.tsx",
        lineNumber: 76,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/engineTuneUps.tsx",
      lineNumber: 58,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/engineTuneUps.tsx",
    lineNumber: 10,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/engineTuneUps.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/routes/interimAndMot.tsx
var interimAndMot_exports = {};
__export(interimAndMot_exports, {
  default: () => InterimService2
});
var import_react14 = require("react"), import_react_datepicker15 = __toESM(require("react-datepicker"));
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function InterimService2() {
  let [registration, setRegistration] = (0, import_react14.useState)(""), [postCode, setPostCode] = (0, import_react14.useState)(""), [selectedDate, setSelectedDate] = (0, import_react14.useState)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex items-center justify-center h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "fixed inset-x-0 px-6 py-3 flex flex-row justify-between mx-auto w-full top-28 pl-18", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Breadcrumbs, { paths: [
      { label: "Services", url: "/service" },
      { label: "MOT Services", url: "/mot" },
      { label: "MOT and Interim Service", url: "/interimAndMot" }
    ] }, void 0, !1, {
      fileName: "app/routes/interimAndMot.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/interimAndMot.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "mt-16 max-w-md p-6 bg-white rounded shadow-md mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("h1", { className: "text-3xl font-bold mb-4 text-center", style: { color: "#112D4E" }, children: "MOT and Interim Service" }, void 0, !1, {
        fileName: "app/routes/interimAndMot.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
        "img",
        {
          src: "/images/interim-service.png",
          alt: "Service Image",
          className: "mx-auto mb-4 rounded-lg",
          style: { maxWidth: "150px", height: "auto" }
        },
        void 0,
        !1,
        {
          fileName: "app/routes/interimAndMot.tsx",
          lineNumber: 47,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { className: "font-bold", children: "From \xA3149.99*" }, void 0, !1, {
        fileName: "app/routes/interimAndMot.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/interimAndMot.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { className: "font-bold", style: { color: "#3F72AF" }, children: "Book with an MOT and save \xA324.99" }, void 0, !1, {
        fileName: "app/routes/interimAndMot.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/interimAndMot.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { style: { color: "#3F72AF" }, children: "*Prices vary by location and vehicle. Add your details below to get your personalized price" }, void 0, !1, {
        fileName: "app/routes/interimAndMot.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("form", { onSubmit: (e) => {
        e.preventDefault();
      }, className: "mt-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("label", { htmlFor: "registration", className: "block mb-2 text-sm text-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { className: "text-navy-blue-500 font-bold", children: "Registration:" }, void 0, !1, {
            fileName: "app/routes/interimAndMot.tsx",
            lineNumber: 69,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("input", { type: "text", id: "registration", name: "registration", className: "border p-2 w-full mt-1", placeholder: "Enter Registration", onChange: (e) => {
            setRegistration(e.target.value);
          } }, void 0, !1, {
            fileName: "app/routes/interimAndMot.tsx",
            lineNumber: 70,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/interimAndMot.tsx",
          lineNumber: 68,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("label", { htmlFor: "postCode", className: "block mb-2 text-sm text-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { className: "text-navy-blue-500 font-bold", children: "Post Code:" }, void 0, !1, {
            fileName: "app/routes/interimAndMot.tsx",
            lineNumber: 75,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("input", { type: "text", id: "postCode", name: "postCode", className: "border p-2 w-full mt-1", placeholder: "Enter Post Code", onChange: (e) => {
            setPostCode(e.target.value);
          } }, void 0, !1, {
            fileName: "app/routes/interimAndMot.tsx",
            lineNumber: 76,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/interimAndMot.tsx",
          lineNumber: 74,
          columnNumber: 11
        }, this),
        registration && postCode && /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("label", { className: "block mb-2 text-sm text-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { className: "text-navy-blue-500 font-bold", children: "Select Date:" }, void 0, !1, {
            fileName: "app/routes/interimAndMot.tsx",
            lineNumber: 83,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react_datepicker15.default, { selected: selectedDate, onChange: (date) => {
            setSelectedDate(date);
          }, dateFormat: "dd/MM/yyyy" }, void 0, !1, {
            fileName: "app/routes/interimAndMot.tsx",
            lineNumber: 84,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/interimAndMot.tsx",
          lineNumber: 82,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/interimAndMot.tsx",
          lineNumber: 81,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
          "button",
          {
            type: "submit",
            className: `bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 ${selectedDate && registration && postCode ? "" : "opacity-50 cursor-not-allowed"}`,
            disabled: !(selectedDate && registration && postCode),
            children: "Book Now"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/interimAndMot.tsx",
            lineNumber: 90,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/interimAndMot.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/interimAndMot.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/interimAndMot.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}

// app/routes/select_centre.tsx
var select_centre_exports = {};
__export(select_centre_exports, {
  default: () => SelectCentre
});
function SelectCentre() {
  function initMap() {
    let bounds = new google.maps.LatLngBounds(), markersArray = [], map = new google.maps.Map(
      document.getElementById("map"),
      {
        center: { lat: 55.53, lng: 9.4 },
        zoom: 10
      }
    ), geocoder = new google.maps.Geocoder(), service = new google.maps.DistanceMatrixService(), request = {
      origins: [{ lat: 55.93, lng: -3.118 }, "Greenwich, England"],
      destinations: ["Stockholm, Sweden", { lat: 50.087, lng: 14.421 }],
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.METRIC,
      avoidHighways: !1,
      avoidTolls: !1
    };
    document.getElementById("request").innerText = JSON.stringify(request, null, 2), service.getDistanceMatrix(request).then((response) => {
      document.getElementById("response").innerText = JSON.stringify(response, null, 2);
      let originList = response.originAddresses, destinationList = response.destinationAddresses;
      deleteMarkers(markersArray);
      let showGeocodedAddressOnMap = (asDestination) => ({ results }) => {
        map.fitBounds(bounds.extend(results[0].geometry.location)), markersArray.push(
          new google.maps.Marker({
            map,
            position: results[0].geometry.location,
            label: asDestination ? "D" : "O"
          })
        );
      };
      for (let i = 0; i < originList.length; i++) {
        let results = response.rows[i].elements;
        geocoder.geocode({ address: originList[i] }).then(showGeocodedAddressOnMap(!1));
        for (let j = 0; j < results.length; j++)
          geocoder.geocode({ address: destinationList[j] }).then(showGeocodedAddressOnMap(!0));
      }
    });
  }
  function deleteMarkers(markersArray) {
    for (let i = 0; i < markersArray.length; i++)
      markersArray[i].setMap(null);
    markersArray = [];
  }
}

// app/routes/adminProfile.tsx
var adminProfile_exports = {};
__export(adminProfile_exports, {
  default: () => Admin_profile
});
var import_react15 = require("react"), import_outline8 = require("@heroicons/react/24/outline"), import_react16 = require("@remix-run/react"), import_jsx_dev_runtime19 = require("react/jsx-dev-runtime"), nav = [
  { name: "User Information", href: "#", icon: import_outline8.UserCircleIcon },
  { name: "Contact Information", href: "#", icon: import_outline8.PhoneIcon },
  { name: "Business Information", href: "#", icon: import_outline8.BriefcaseIcon },
  { name: "Customer Management", href: "#", icon: import_outline8.UsersIcon },
  { name: "Booking Management", href: "#", icon: import_outline8.CreditCardIcon },
  { name: "Business Management", href: "#", icon: import_outline8.BriefcaseIcon }
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Admin_profile() {
  let [currentSection, setCurrentSection] = (0, import_react15.useState)("User Information"), handleSectionChange = (sectionName) => {
    setCurrentSection(sectionName);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" }, void 0, !1, {
      fileName: "app/routes/adminProfile.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "mx-auto max-w-7xl pt-16 lg:flex lg:gap-x-16 lg:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("aside", { className: "flex overflow-x-auto border-b border-gray-900/5 py-4 lg:block lg:w-64 lg:flex-none lg:border-0 lg:py-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("nav", { className: "flex-none px-4 sm:px-6 lg:px-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("ul", { role: "list", className: "flex gap-x-5 gap-y-6 lg:flex-col", children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
        "a",
        {
          href: item.href,
          className: classNames(currentSection === item.name ? "bg-gray-50 text-indigo-900" : "text-gray-700 hover:text-indigo-900 hover:bg-gray-50", "group flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm leading-6 font-semibold"),
          onClick: () => handleSectionChange(item.name),
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(item.icon, { className: classNames(currentSection === item.name ? "text-indigo-900" : "text-indigo-900 group-hover:text-indigo-900", "h-6 w-6 shrink-0"), "aria-hidden": "true" }, void 0, !1, {
              fileName: "app/routes/adminProfile.tsx",
              lineNumber: 48,
              columnNumber: 21
            }, this),
            item.name
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/adminProfile.tsx",
          lineNumber: 43,
          columnNumber: 19
        },
        this
      ) }, item.name, !1, {
        fileName: "app/routes/adminProfile.tsx",
        lineNumber: 42,
        columnNumber: 17
      }, this)) }, void 0, !1, {
        fileName: "app/routes/adminProfile.tsx",
        lineNumber: 40,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/adminProfile.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/adminProfile.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("main", { className: "px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none", children: [
        currentSection === "User Information" && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h2", { className: "text-3xl font-semibold leading-7 text-gray-900", children: "Profile" }, void 0, !1, {
            fileName: "app/routes/adminProfile.tsx",
            lineNumber: 63,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("dl", { className: "mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Username" }, void 0, !1, {
                fileName: "app/routes/adminProfile.tsx",
                lineNumber: 66,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("dd", { className: "mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "text-gray-900" }, void 0, !1, {
                  fileName: "app/routes/adminProfile.tsx",
                  lineNumber: 68,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("button", { type: "button", className: "font-semibold text-indigo-900 hover:text-indigo-900", children: "Update" }, void 0, !1, {
                  fileName: "app/routes/adminProfile.tsx",
                  lineNumber: 69,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/adminProfile.tsx",
                lineNumber: 67,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/adminProfile.tsx",
              lineNumber: 65,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Full Name" }, void 0, !1, {
                fileName: "app/routes/adminProfile.tsx",
                lineNumber: 75,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("dd", { className: "mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "text-gray-900" }, void 0, !1, {
                  fileName: "app/routes/adminProfile.tsx",
                  lineNumber: 77,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("button", { type: "button", className: "font-semibold text-indigo-900 hover:text-indigo-900", children: "Update" }, void 0, !1, {
                  fileName: "app/routes/adminProfile.tsx",
                  lineNumber: 78,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/adminProfile.tsx",
                lineNumber: 76,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/adminProfile.tsx",
              lineNumber: 74,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Password" }, void 0, !1, {
                fileName: "app/routes/adminProfile.tsx",
                lineNumber: 84,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("dd", { className: "mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "text-gray-900" }, void 0, !1, {
                  fileName: "app/routes/adminProfile.tsx",
                  lineNumber: 86,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("button", { type: "button", className: "font-semibold text-indigo-900 hover:text-indigo-900", children: "Update" }, void 0, !1, {
                  fileName: "app/routes/adminProfile.tsx",
                  lineNumber: 87,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/adminProfile.tsx",
                lineNumber: 85,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/adminProfile.tsx",
              lineNumber: 83,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/adminProfile.tsx",
            lineNumber: 64,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/adminProfile.tsx",
          lineNumber: 62,
          columnNumber: 15
        }, this),
        currentSection === "Contact Information" && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h2", { className: "text-3xl font-semibold leading-7 text-gray-900", children: "Contact" }, void 0, !1, {
            fileName: "app/routes/adminProfile.tsx",
            lineNumber: 99,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("dl", { className: "mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Phone Number" }, void 0, !1, {
                fileName: "app/routes/adminProfile.tsx",
                lineNumber: 102,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("dd", { className: "mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "text-gray-900" }, void 0, !1, {
                  fileName: "app/routes/adminProfile.tsx",
                  lineNumber: 104,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("button", { type: "button", className: "font-semibold text-indigo-900 hover:text-indigo-900", children: "Update" }, void 0, !1, {
                  fileName: "app/routes/adminProfile.tsx",
                  lineNumber: 105,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/adminProfile.tsx",
                lineNumber: 103,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/adminProfile.tsx",
              lineNumber: 101,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Address" }, void 0, !1, {
                fileName: "app/routes/adminProfile.tsx",
                lineNumber: 111,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("dd", { className: "mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "text-gray-900" }, void 0, !1, {
                  fileName: "app/routes/adminProfile.tsx",
                  lineNumber: 113,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("button", { type: "button", className: "font-semibold text-indigo-900 hover:text-indigo-900", children: "Update" }, void 0, !1, {
                  fileName: "app/routes/adminProfile.tsx",
                  lineNumber: 114,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/adminProfile.tsx",
                lineNumber: 112,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/adminProfile.tsx",
              lineNumber: 110,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Emergency Contact" }, void 0, !1, {
                fileName: "app/routes/adminProfile.tsx",
                lineNumber: 120,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("dd", { className: "mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "text-gray-900" }, void 0, !1, {
                  fileName: "app/routes/adminProfile.tsx",
                  lineNumber: 122,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("button", { type: "button", className: "font-semibold text-indigo-900 hover:text-indigo-900", children: "Update" }, void 0, !1, {
                  fileName: "app/routes/adminProfile.tsx",
                  lineNumber: 123,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/adminProfile.tsx",
                lineNumber: 121,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/adminProfile.tsx",
              lineNumber: 119,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/adminProfile.tsx",
            lineNumber: 100,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/adminProfile.tsx",
          lineNumber: 98,
          columnNumber: 15
        }, this),
        currentSection === "Business Information" && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h2", { className: "text-3xl font-semibold leading-7 text-gray-900", children: "Business Information" }, void 0, !1, {
            fileName: "app/routes/adminProfile.tsx",
            lineNumber: 135,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("dl", { className: "mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Garage Name" }, void 0, !1, {
                fileName: "app/routes/adminProfile.tsx",
                lineNumber: 138,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("dd", { className: "mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "text-gray-900" }, void 0, !1, {
                  fileName: "app/routes/adminProfile.tsx",
                  lineNumber: 140,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("button", { type: "button", className: "font-semibold text-indigo-900 hover:text-indigo-900", children: "Update" }, void 0, !1, {
                  fileName: "app/routes/adminProfile.tsx",
                  lineNumber: 141,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/adminProfile.tsx",
                lineNumber: 139,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/adminProfile.tsx",
              lineNumber: 137,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Garage Address" }, void 0, !1, {
                fileName: "app/routes/adminProfile.tsx",
                lineNumber: 147,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("dd", { className: "mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "text-gray-900" }, void 0, !1, {
                  fileName: "app/routes/adminProfile.tsx",
                  lineNumber: 149,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("button", { type: "button", className: "font-semibold text-indigo-900 hover:text-indigo-900", children: "Update" }, void 0, !1, {
                  fileName: "app/routes/adminProfile.tsx",
                  lineNumber: 150,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/adminProfile.tsx",
                lineNumber: 148,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/adminProfile.tsx",
              lineNumber: 146,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Garage Telephone Number" }, void 0, !1, {
                fileName: "app/routes/adminProfile.tsx",
                lineNumber: 156,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("dd", { className: "mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "text-gray-900" }, void 0, !1, {
                  fileName: "app/routes/adminProfile.tsx",
                  lineNumber: 158,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("button", { type: "button", className: "font-semibold text-indigo-900 hover:text-indigo-900", children: "Update" }, void 0, !1, {
                  fileName: "app/routes/adminProfile.tsx",
                  lineNumber: 159,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/adminProfile.tsx",
                lineNumber: 157,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/adminProfile.tsx",
              lineNumber: 155,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/adminProfile.tsx",
            lineNumber: 136,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/adminProfile.tsx",
          lineNumber: 134,
          columnNumber: 15
        }, this),
        currentSection === "Customer Management" && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h2", { className: "text-3xl font-semibold leading-7 text-gray-900", children: "Customer Management" }, void 0, !1, {
            fileName: "app/routes/adminProfile.tsx",
            lineNumber: 171,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("dl", { className: "mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Garage Staff" }, void 0, !1, {
              fileName: "app/routes/adminProfile.tsx",
              lineNumber: 175,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("dd", { className: "mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("ul", { className: "text-gray-900", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("li", { children: "Customer 1" }, void 0, !1, {
                  fileName: "app/routes/adminProfile.tsx",
                  lineNumber: 178,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("li", { children: "Customer 2" }, void 0, !1, {
                  fileName: "app/routes/adminProfile.tsx",
                  lineNumber: 179,
                  columnNumber: 25
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/adminProfile.tsx",
                lineNumber: 177,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("button", { type: "button", className: "font-semibold text-indigo-900 hover:text-indigo-900" }, void 0, !1, {
                fileName: "app/routes/adminProfile.tsx",
                lineNumber: 181,
                columnNumber: 23
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/adminProfile.tsx",
              lineNumber: 176,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/adminProfile.tsx",
            lineNumber: 174,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/adminProfile.tsx",
            lineNumber: 173,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/adminProfile.tsx",
          lineNumber: 170,
          columnNumber: 15
        }, this),
        currentSection === "Booking Management" && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h2", { className: "text-3xl font-semibold leading-7 text-gray-900", children: "Bookings" }, void 0, !1, {
            fileName: "app/routes/adminProfile.tsx",
            lineNumber: 193,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("dl", { className: "mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Appointment Calendar" }, void 0, !1, {
              fileName: "app/routes/adminProfile.tsx",
              lineNumber: 197,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("dd", { className: "mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("ul", { className: "text-gray-900", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("li", { children: "Appointment 1" }, void 0, !1, {
                  fileName: "app/routes/adminProfile.tsx",
                  lineNumber: 200,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("li", { children: "Appointment 2" }, void 0, !1, {
                  fileName: "app/routes/adminProfile.tsx",
                  lineNumber: 201,
                  columnNumber: 25
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/adminProfile.tsx",
                lineNumber: 199,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("button", { type: "button", className: "font-semibold text-indigo-900 hover:text-indigo-900" }, void 0, !1, {
                fileName: "app/routes/adminProfile.tsx",
                lineNumber: 203,
                columnNumber: 23
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/adminProfile.tsx",
              lineNumber: 198,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/adminProfile.tsx",
            lineNumber: 196,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/adminProfile.tsx",
            lineNumber: 195,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/adminProfile.tsx",
          lineNumber: 192,
          columnNumber: 15
        }, this),
        currentSection === "Business Management" && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h2", { className: "text-3xl font-semibold leading-7 text-gray-900", children: "Business Management" }, void 0, !1, {
            fileName: "app/routes/adminProfile.tsx",
            lineNumber: 215,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("dl", { className: "mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "pt-6 sm:flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Business Performance" }, void 0, !1, {
              fileName: "app/routes/adminProfile.tsx",
              lineNumber: 218,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/adminProfile.tsx",
              lineNumber: 217,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "pt-6 sm:flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Booking Trends" }, void 0, !1, {
              fileName: "app/routes/adminProfile.tsx",
              lineNumber: 221,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/adminProfile.tsx",
              lineNumber: 220,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "pt-6 sm:flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Finanacial Statistics" }, void 0, !1, {
              fileName: "app/routes/adminProfile.tsx",
              lineNumber: 224,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/adminProfile.tsx",
              lineNumber: 223,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "pt-6 sm:flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Customer Satisfaction" }, void 0, !1, {
              fileName: "app/routes/adminProfile.tsx",
              lineNumber: 227,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/adminProfile.tsx",
              lineNumber: 226,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/adminProfile.tsx",
            lineNumber: 216,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/adminProfile.tsx",
          lineNumber: 214,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { style: { position: "fixed", bottom: "10px", left: "10px", cursor: "pointer" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react16.Link, { to: "/staffLogin", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_outline8.ArrowLeftOnRectangleIcon, {}, void 0, !1, {
            fileName: "app/routes/adminProfile.tsx",
            lineNumber: 235,
            columnNumber: 9
          }, this),
          "Logout"
        ] }, void 0, !0, {
          fileName: "app/routes/adminProfile.tsx",
          lineNumber: 234,
          columnNumber: 7
        }, this) }, void 0, !1, {
          fileName: "app/routes/adminProfile.tsx",
          lineNumber: 233,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/adminProfile.tsx",
        lineNumber: 58,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/adminProfile.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/adminProfile.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/adminProfile.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}

// app/routes/carServicing.tsx
var carServicing_exports = {};
__export(carServicing_exports, {
  default: () => CarServicing
});
var import_react17 = require("@remix-run/react"), import_jsx_dev_runtime20 = require("react/jsx-dev-runtime"), TickIcon = ({ color }) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "stroke-width": "1.5", stroke: color, className: "w-6 h-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("path", { "stroke-linecap": "round", "stroke-linejoin": "round", d: "M4.5 12.75l6 6 9-13.5" }, void 0, !1, {
  fileName: "app/routes/carServicing.tsx",
  lineNumber: 10,
  columnNumber: 5
}, this) }, void 0, !1, {
  fileName: "app/routes/carServicing.tsx",
  lineNumber: 9,
  columnNumber: 3
}, this);
function CarServicing() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "mt-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "container mx-auto p-8 flex flex-col items-center justify-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h1", { className: "mt-2 text-4xl font-bold tracking-tight sm:text-6xl mb-9", style: { color: "#112D4E" }, children: "Car Servicing" }, void 0, !1, {
      fileName: "app/routes/carServicing.tsx",
      lineNumber: 19,
      columnNumber: 8
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "p-4 border rounded-md", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h2", { className: "text-xl font-bold mb-2", children: "Interim Service" }, void 0, !1, {
          fileName: "app/routes/carServicing.tsx",
          lineNumber: 27,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { children: "Recommended every 6 months or 6k miles" }, void 0, !1, {
          fileName: "app/routes/carServicing.tsx",
          lineNumber: 28,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { className: "", style: { color: "#3F72AF" }, children: "Book with an MOT and save \xA314.99" }, void 0, !1, {
          fileName: "app/routes/carServicing.tsx",
          lineNumber: 29,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { className: "text-2xl font-bold", children: "\xA3199.99" }, void 0, !1, {
          fileName: "app/routes/carServicing.tsx",
          lineNumber: 30,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex items-center mt-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { className: "text-gray-500 mr-1", children: "755 views today" }, void 0, !1, {
            fileName: "app/routes/carServicing.tsx",
            lineNumber: 32,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            "svg",
            {
              className: "w-4 h-4 fill-current text-blue-500",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("path", { d: "M0 0h24v24H0z", fill: "none" }, void 0, !1, {
                  fileName: "app/routes/carServicing.tsx",
                  lineNumber: 38,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17h2v2h-2zm0-14h2v10h-2z" }, void 0, !1, {
                  fileName: "app/routes/carServicing.tsx",
                  lineNumber: 39,
                  columnNumber: 13
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/carServicing.tsx",
              lineNumber: 33,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/carServicing.tsx",
          lineNumber: 31,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("button", { className: "text-white px-4 py-2 rounded mt-2", style: { backgroundColor: "#112D4E" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react17.Link, { to: "/interimService", children: "View Details" }, void 0, !1, {
          fileName: "app/routes/carServicing.tsx",
          lineNumber: 43,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/carServicing.tsx",
          lineNumber: 42,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/carServicing.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "p-4 border rounded-md", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h2", { className: "text-xl font-bold mb-2", children: "Full Service" }, void 0, !1, {
          fileName: "app/routes/carServicing.tsx",
          lineNumber: 52,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { children: "Recommended every 12 months or 12k miles" }, void 0, !1, {
          fileName: "app/routes/carServicing.tsx",
          lineNumber: 53,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { className: "", style: { color: "#3F72AF" }, children: "Book with an MOT and save \xA319.99" }, void 0, !1, {
          fileName: "app/routes/carServicing.tsx",
          lineNumber: 54,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { className: "text-2xl font-bold", children: "\xA3279.99" }, void 0, !1, {
          fileName: "app/routes/carServicing.tsx",
          lineNumber: 55,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex items-center mt-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { className: "text-gray-500 mr-1", children: "1718 views today" }, void 0, !1, {
            fileName: "app/routes/carServicing.tsx",
            lineNumber: 57,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            "svg",
            {
              className: "w-4 h-4 fill-current text-blue-500",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("path", { d: "M0 0h24v24H0z", fill: "none" }, void 0, !1, {
                  fileName: "app/routes/carServicing.tsx",
                  lineNumber: 63,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17h2v2h-2zm0-14h2v10h-2z" }, void 0, !1, {
                  fileName: "app/routes/carServicing.tsx",
                  lineNumber: 64,
                  columnNumber: 13
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/carServicing.tsx",
              lineNumber: 58,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/carServicing.tsx",
          lineNumber: 56,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("button", { className: " text-white px-4 py-2 rounded mt-2", style: { backgroundColor: "#112D4E" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react17.Link, { to: "/fullService", children: "View Details" }, void 0, !1, {
          fileName: "app/routes/carServicing.tsx",
          lineNumber: 68,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/carServicing.tsx",
          lineNumber: 67,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/carServicing.tsx",
        lineNumber: 51,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "p-4 border rounded-md", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h2", { className: "text-xl font-bold mb-2", children: "Major Service" }, void 0, !1, {
          fileName: "app/routes/carServicing.tsx",
          lineNumber: 76,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { children: "Recommended every 24 months or 24k miles" }, void 0, !1, {
          fileName: "app/routes/carServicing.tsx",
          lineNumber: 77,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { className: "", style: { color: "#3F72AF" }, children: "Book with an MOT and save \xA324.99" }, void 0, !1, {
          fileName: "app/routes/carServicing.tsx",
          lineNumber: 78,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { className: "text-2xl font-bold", children: "\xA3309.99" }, void 0, !1, {
          fileName: "app/routes/carServicing.tsx",
          lineNumber: 79,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex items-center mt-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { className: "text-gray-500 mr-1", children: "886 views today" }, void 0, !1, {
            fileName: "app/routes/carServicing.tsx",
            lineNumber: 81,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            "svg",
            {
              className: "w-4 h-4 fill-current text-blue-500",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("path", { d: "M0 0h24v24H0z", fill: "none" }, void 0, !1, {
                  fileName: "app/routes/carServicing.tsx",
                  lineNumber: 87,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17h2v2h-2zm0-14h2v10h-2z" }, void 0, !1, {
                  fileName: "app/routes/carServicing.tsx",
                  lineNumber: 88,
                  columnNumber: 13
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/carServicing.tsx",
              lineNumber: 82,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/carServicing.tsx",
          lineNumber: 80,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("button", { className: " text-white px-4 py-2 rounded mt-2", style: { backgroundColor: "#112D4E" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react17.Link, { to: "/majorService", children: "View Details" }, void 0, !1, {
          fileName: "app/routes/carServicing.tsx",
          lineNumber: 92,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/carServicing.tsx",
          lineNumber: 91,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/carServicing.tsx",
        lineNumber: 75,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "p-4 border rounded-md", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h2", { className: "text-xl font-bold mb-2", children: "Oil and Filter " }, void 0, !1, {
          fileName: "app/routes/carServicing.tsx",
          lineNumber: 100,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { children: "Lubricates key components and maintains performance " }, void 0, !1, {
          fileName: "app/routes/carServicing.tsx",
          lineNumber: 101,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { children: "Oil replaced is to manufacturer specification" }, void 0, !1, {
          fileName: "app/routes/carServicing.tsx",
          lineNumber: 102,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { className: "", style: { color: "#3F72AF" }, children: "Upgrade to a service for additional checks" }, void 0, !1, {
          fileName: "app/routes/carServicing.tsx",
          lineNumber: 103,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { className: "text-2xl font-bold", children: "\xA3199.99" }, void 0, !1, {
          fileName: "app/routes/carServicing.tsx",
          lineNumber: 104,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex items-center mt-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { className: "text-gray-500 mr-1", children: "1044 views today" }, void 0, !1, {
            fileName: "app/routes/carServicing.tsx",
            lineNumber: 106,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            "svg",
            {
              className: "w-4 h-4 fill-current text-blue-500",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("path", { d: "M0 0h24v24H0z", fill: "none" }, void 0, !1, {
                  fileName: "app/routes/carServicing.tsx",
                  lineNumber: 112,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17h2v2h-2zm0-14h2v10h-2z" }, void 0, !1, {
                  fileName: "app/routes/carServicing.tsx",
                  lineNumber: 113,
                  columnNumber: 13
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/carServicing.tsx",
              lineNumber: 107,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/carServicing.tsx",
          lineNumber: 105,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("button", { className: "text-white px-4 py-2 rounded mt-2", style: { backgroundColor: "#112D4E" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react17.Link, { to: "/oilAndFilter", children: "View Details" }, void 0, !1, {
          fileName: "app/routes/carServicing.tsx",
          lineNumber: 117,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/carServicing.tsx",
          lineNumber: 116,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/carServicing.tsx",
        lineNumber: 99,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/carServicing.tsx",
      lineNumber: 23,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "container mx-auto p-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h2", { className: "mt-2 text-5xl font-bold tracking-tight sm:text-5xl text-center justify-center", style: { color: "#112D4E" }, children: "Car Service Checklist" }, void 0, !1, {
        fileName: "app/routes/carServicing.tsx",
        lineNumber: 126,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("table", { className: "min-w-full bg-white border border-gray-300 shadow-md rounded mt-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("tr", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("th", { className: "py-2 px-4 border-b", children: "What We'll Replace" }, void 0, !1, {
          fileName: "app/routes/carServicing.tsx",
          lineNumber: 133,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/carServicing.tsx",
          lineNumber: 132,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/carServicing.tsx",
          lineNumber: 131,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("tbody", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("td", { className: "py-2 px-4 border-b", children: "Interim" }, void 0, !1, {
              fileName: "app/routes/carServicing.tsx",
              lineNumber: 140,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("td", { className: "py-2 px-4 border-b", children: "6 months / 6,000 miles" }, void 0, !1, {
              fileName: "app/routes/carServicing.tsx",
              lineNumber: 141,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("td", { className: "py-2 px-4 border-b", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("ul", { className: "list-disc pl-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("li", { children: [
                "Engine Oil ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { className: "", style: { color: "#3F72AF" }, children: "Tick icon" }, void 0, !1, {
                  fileName: "app/routes/carServicing.tsx",
                  lineNumber: 144,
                  columnNumber: 32
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/carServicing.tsx",
                lineNumber: 144,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("li", { children: [
                "Oil Filter ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { className: "", style: { color: "#3F72AF" }, children: "Tick icon" }, void 0, !1, {
                  fileName: "app/routes/carServicing.tsx",
                  lineNumber: 145,
                  columnNumber: 32
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/carServicing.tsx",
                lineNumber: 145,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/carServicing.tsx",
              lineNumber: 143,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/routes/carServicing.tsx",
              lineNumber: 142,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/carServicing.tsx",
            lineNumber: 139,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("td", { className: "py-2 px-4 border-b", children: "Full" }, void 0, !1, {
              fileName: "app/routes/carServicing.tsx",
              lineNumber: 151,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("td", { className: "py-2 px-4 border-b", children: "12 months / 12,000 miles" }, void 0, !1, {
              fileName: "app/routes/carServicing.tsx",
              lineNumber: 152,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("td", { className: "py-2 px-4 border-b", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("ul", { className: "list-disc pl-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("li", { children: [
                "Engine Oil ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { className: "", style: { color: "#3F72AF" }, children: "Tick icon" }, void 0, !1, {
                  fileName: "app/routes/carServicing.tsx",
                  lineNumber: 155,
                  columnNumber: 32
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/carServicing.tsx",
                lineNumber: 155,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("li", { children: [
                "Oil Filter ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { className: "", style: { color: "#3F72AF" }, children: "Tick icon" }, void 0, !1, {
                  fileName: "app/routes/carServicing.tsx",
                  lineNumber: 156,
                  columnNumber: 32
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/carServicing.tsx",
                lineNumber: 156,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("li", { children: [
                "Air Filter - worth up to \xA370 ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { className: "", style: { color: "#3F72AF" }, children: "Tick icon" }, void 0, !1, {
                  fileName: "app/routes/carServicing.tsx",
                  lineNumber: 157,
                  columnNumber: 50
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/carServicing.tsx",
                lineNumber: 157,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/carServicing.tsx",
              lineNumber: 154,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/routes/carServicing.tsx",
              lineNumber: 153,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/carServicing.tsx",
            lineNumber: 150,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("td", { className: "py-2 px-4 border-b", children: "Major" }, void 0, !1, {
              fileName: "app/routes/carServicing.tsx",
              lineNumber: 163,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("td", { className: "py-2 px-4 border-b", children: "24 months / 24,000 miles" }, void 0, !1, {
              fileName: "app/routes/carServicing.tsx",
              lineNumber: 164,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("td", { className: "py-2 px-4 border-b", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("ul", { className: "list-disc pl-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("li", { children: [
                "Engine Oil ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { className: "icon", style: { color: "#3F72AF" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(TickIcon, { color: "#3F72AF" }, void 0, !1, {
                  fileName: "app/routes/carServicing.tsx",
                  lineNumber: 167,
                  columnNumber: 82
                }, this) }, void 0, !1, {
                  fileName: "app/routes/carServicing.tsx",
                  lineNumber: 167,
                  columnNumber: 30
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/carServicing.tsx",
                lineNumber: 167,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("li", { children: [
                "Oil Filter ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { className: "icon", style: { color: "#3F72AF" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(TickIcon, { color: "#3F72AF" }, void 0, !1, {
                  fileName: "app/routes/carServicing.tsx",
                  lineNumber: 168,
                  columnNumber: 84
                }, this) }, void 0, !1, {
                  fileName: "app/routes/carServicing.tsx",
                  lineNumber: 168,
                  columnNumber: 33
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/carServicing.tsx",
                lineNumber: 168,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("li", { children: [
                "Air Filter - worth up to \xA370 ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { className: "icon", style: { color: "#3F72AF" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(TickIcon, { color: "#3F72AF" }, void 0, !1, {
                  fileName: "app/routes/carServicing.tsx",
                  lineNumber: 169,
                  columnNumber: 101
                }, this) }, void 0, !1, {
                  fileName: "app/routes/carServicing.tsx",
                  lineNumber: 169,
                  columnNumber: 50
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/carServicing.tsx",
                lineNumber: 169,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("li", { children: [
                "Cabin filter - worth up to \xA360 ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { className: "icon", style: { color: "#3F72AF" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(TickIcon, { color: "#3F72AF" }, void 0, !1, {
                  fileName: "app/routes/carServicing.tsx",
                  lineNumber: 170,
                  columnNumber: 103
                }, this) }, void 0, !1, {
                  fileName: "app/routes/carServicing.tsx",
                  lineNumber: 170,
                  columnNumber: 52
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/carServicing.tsx",
                lineNumber: 170,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("li", { children: [
                "Brake Fluid - worth up to \xA339.99 ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { className: "icon", style: { color: "#3F72AF" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(TickIcon, { color: "#3F72AF" }, void 0, !1, {
                  fileName: "app/routes/carServicing.tsx",
                  lineNumber: 171,
                  columnNumber: 105
                }, this) }, void 0, !1, {
                  fileName: "app/routes/carServicing.tsx",
                  lineNumber: 171,
                  columnNumber: 54
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/carServicing.tsx",
                lineNumber: 171,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/carServicing.tsx",
              lineNumber: 166,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/routes/carServicing.tsx",
              lineNumber: 165,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/carServicing.tsx",
            lineNumber: 162,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/carServicing.tsx",
          lineNumber: 138,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/carServicing.tsx",
        lineNumber: 130,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/carServicing.tsx",
      lineNumber: 125,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/carServicing.tsx",
    lineNumber: 18,
    columnNumber: 8
  }, this) }, void 0, !1, {
    fileName: "app/routes/carServicing.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// app/routes/majorService.tsx
var majorService_exports = {};
__export(majorService_exports, {
  default: () => MajorService
});
var import_react18 = require("react"), import_react_datepicker17 = __toESM(require("react-datepicker"));
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime");
function MajorService() {
  let [registration, setRegistration] = (0, import_react18.useState)(""), [postCode, setPostCode] = (0, import_react18.useState)(""), [selectedDate, setSelectedDate] = (0, import_react18.useState)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex items-center justify-center h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "fixed inset-x-0 px-6 py-3 flex flex-row justify-between mx-auto w-full top-28 pl-18", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Breadcrumbs, { paths: [
      { label: "Services", url: "/service" },
      { label: "Car Servcing", url: "/carServicing" },
      { label: "Major Service", url: "/majorService" }
    ] }, void 0, !1, {
      fileName: "app/routes/majorService.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/majorService.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "mt-16 max-w-md p-6 bg-white rounded shadow-md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("nav", { className: "fixed inset-x-0 px-6 py-3 flex flex-row justify-between top-0 max-w-7xl mx-auto z-10", style: { backgroundColor: "#F9F7F7" } }, void 0, !1, {
        fileName: "app/routes/majorService.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h1", { className: "text-3xl font-bold mb-4 text-center", children: "Major Service" }, void 0, !1, {
        fileName: "app/routes/majorService.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
        "img",
        {
          src: "/images/major-service.png",
          alt: "Service Image",
          className: "mx-auto mb-4 rounded-lg",
          style: { maxWidth: "150px", height: "auto" }
        },
        void 0,
        !1,
        {
          fileName: "app/routes/majorService.tsx",
          lineNumber: 52,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("span", { className: "font-bold", children: "From \xA3259.99*" }, void 0, !1, {
        fileName: "app/routes/majorService.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/majorService.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("span", { className: "font-bold text-red-500", children: "Book with an MOT and save \xA334.99" }, void 0, !1, {
        fileName: "app/routes/majorService.tsx",
        lineNumber: 64,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/majorService.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { children: "*Prices vary by location and vehicle. Add your details below to get your personalized price" }, void 0, !1, {
        fileName: "app/routes/majorService.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("form", { onSubmit: (e) => {
        e.preventDefault();
      }, className: "mt-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("label", { htmlFor: "registration", className: "block mb-2 text-sm text-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("span", { className: "text-navy-blue-500 font-bold", children: "Registration:" }, void 0, !1, {
            fileName: "app/routes/majorService.tsx",
            lineNumber: 72,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("input", { type: "text", id: "registration", name: "registration", className: "border p-2 w-full mt-1", placeholder: "Enter Registration", onChange: (e) => {
            setRegistration(e.target.value);
          } }, void 0, !1, {
            fileName: "app/routes/majorService.tsx",
            lineNumber: 73,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/majorService.tsx",
          lineNumber: 71,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("label", { htmlFor: "postCode", className: "block mb-2 text-sm text-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("span", { className: "text-navy-blue-500 font-bold", children: "Post Code:" }, void 0, !1, {
            fileName: "app/routes/majorService.tsx",
            lineNumber: 78,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("input", { type: "text", id: "postCode", name: "postCode", className: "border p-2 w-full mt-1", placeholder: "Enter Post Code", onChange: (e) => {
            setPostCode(e.target.value);
          } }, void 0, !1, {
            fileName: "app/routes/majorService.tsx",
            lineNumber: 79,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/majorService.tsx",
          lineNumber: 77,
          columnNumber: 11
        }, this),
        registration && postCode && /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("label", { className: "block mb-2 text-sm text-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("span", { className: "text-navy-blue-500 font-bold", children: "Select Date:" }, void 0, !1, {
            fileName: "app/routes/majorService.tsx",
            lineNumber: 86,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react_datepicker17.default, { selected: selectedDate, onChange: (date) => {
            setSelectedDate(date);
          }, dateFormat: "dd/MM/yyyy" }, void 0, !1, {
            fileName: "app/routes/majorService.tsx",
            lineNumber: 87,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/majorService.tsx",
          lineNumber: 85,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/majorService.tsx",
          lineNumber: 84,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
          "button",
          {
            type: "submit",
            className: `bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 ${selectedDate && registration && postCode ? "" : "opacity-50 cursor-not-allowed"}`,
            disabled: !(selectedDate && registration && postCode),
            children: "Book Now"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/majorService.tsx",
            lineNumber: 93,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/majorService.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/majorService.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/majorService.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

// app/routes/oilAndFilter.tsx
var oilAndFilter_exports = {};
__export(oilAndFilter_exports, {
  default: () => OilAndFilter
});
var import_react19 = require("react"), import_react_datepicker19 = __toESM(require("react-datepicker"));
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime");
function OilAndFilter() {
  let [registration, setRegistration] = (0, import_react19.useState)(""), [postCode, setPostCode] = (0, import_react19.useState)(""), [selectedDate, setSelectedDate] = (0, import_react19.useState)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex items-center justify-center h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "fixed inset-x-0 px-6 py-3 flex flex-row justify-between mx-auto w-full top-28 pl-18", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Breadcrumbs, { paths: [
      { label: "Services", url: "/service" },
      { label: "Car Servcing", url: "/carServicing" },
      { label: "Oil And filter Service", url: "/oilAndFilter" }
    ] }, void 0, !1, {
      fileName: "app/routes/oilAndFilter.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/oilAndFilter.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "mt-16 max-w-md p-6 bg-white rounded shadow-md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("nav", { className: "fixed inset-x-0 px-6 py-3 flex flex-row justify-between top-0 max-w-7xl mx-auto z-10", style: { backgroundColor: "#F9F7F7" } }, void 0, !1, {
        fileName: "app/routes/oilAndFilter.tsx",
        lineNumber: 43,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h1", { className: "text-3xl font-bold mb-4 text-center", children: "Oil and Filter Change" }, void 0, !1, {
        fileName: "app/routes/oilAndFilter.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
        "img",
        {
          src: "/images/oil-and-filter.png",
          alt: "Service Image",
          className: "mx-auto mb-4 rounded-lg",
          style: { maxWidth: "150px", height: "auto" }
        },
        void 0,
        !1,
        {
          fileName: "app/routes/oilAndFilter.tsx",
          lineNumber: 53,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("span", { className: "font-bold", children: "From \xA3109.99*" }, void 0, !1, {
        fileName: "app/routes/oilAndFilter.tsx",
        lineNumber: 62,
        columnNumber: 10
      }, this) }, void 0, !1, {
        fileName: "app/routes/oilAndFilter.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("p", { children: "*Prices vary by location and vehicle. Add your details below to get your personalized price" }, void 0, !1, {
        fileName: "app/routes/oilAndFilter.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("form", { onSubmit: (e) => {
        e.preventDefault();
      }, className: "mt-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("label", { htmlFor: "registration", className: "block mb-2 text-sm text-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("span", { className: "text-navy-blue-500 font-bold", children: "Registration:" }, void 0, !1, {
            fileName: "app/routes/oilAndFilter.tsx",
            lineNumber: 71,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("input", { type: "text", id: "registration", name: "registration", className: "border p-2 w-full mt-1", placeholder: "Enter Registration", onChange: (e) => {
            setRegistration(e.target.value);
          } }, void 0, !1, {
            fileName: "app/routes/oilAndFilter.tsx",
            lineNumber: 72,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/oilAndFilter.tsx",
          lineNumber: 70,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("label", { htmlFor: "postCode", className: "block mb-2 text-sm text-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("span", { className: "text-navy-blue-500 font-bold", children: "Post Code:" }, void 0, !1, {
            fileName: "app/routes/oilAndFilter.tsx",
            lineNumber: 77,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("input", { type: "text", id: "postCode", name: "postCode", className: "border p-2 w-full mt-1", placeholder: "Enter Post Code", onChange: (e) => {
            setPostCode(e.target.value);
          } }, void 0, !1, {
            fileName: "app/routes/oilAndFilter.tsx",
            lineNumber: 78,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/oilAndFilter.tsx",
          lineNumber: 76,
          columnNumber: 11
        }, this),
        registration && postCode && /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("label", { className: "block mb-2 text-sm text-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("span", { className: "text-navy-blue-500 font-bold", children: "Select Date:" }, void 0, !1, {
            fileName: "app/routes/oilAndFilter.tsx",
            lineNumber: 85,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react_datepicker19.default, { selected: selectedDate, onChange: (date) => {
            setSelectedDate(date);
          }, dateFormat: "dd/MM/yyyy" }, void 0, !1, {
            fileName: "app/routes/oilAndFilter.tsx",
            lineNumber: 86,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/oilAndFilter.tsx",
          lineNumber: 84,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/oilAndFilter.tsx",
          lineNumber: 83,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
          "button",
          {
            type: "submit",
            className: `bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 ${selectedDate && registration && postCode ? "" : "opacity-50 cursor-not-allowed"}`,
            disabled: !(selectedDate && registration && postCode),
            children: "Book Now"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/oilAndFilter.tsx",
            lineNumber: 92,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/oilAndFilter.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/oilAndFilter.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/oilAndFilter.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

// app/routes/selectCentre.tsx
var selectCentre_exports = {};
__export(selectCentre_exports, {
  default: () => selectCentre
});
var import_react20 = require("react"), import_react21 = require("@remix-run/react"), import_jsx_dev_runtime23 = require("react/jsx-dev-runtime");
function selectCentre() {
  let [showNearbyCentres, setShowNearbyCentres] = (0, import_react20.useState)(!1), [selectedCentre, setSelectedCentre] = (0, import_react20.useState)(null), { postcode: urlPostcode, registration: urlRegistration } = (0, import_react21.useParams)(), [postcode, setPostcode] = (0, import_react20.useState)(urlPostcode || ""), [registration, setRegistration] = (0, import_react20.useState)(urlRegistration || "");
  (0, import_react20.useEffect)(() => {
    console.log("Postcode:", postcode), console.log("Registration:", registration);
  }, [postcode, registration]);
  let nearbyCentres = [
    { name: "Canterbury", address: "University of Kent", city: "Canterbury", county: "Kent", country: "United Kingdom", postcode: "CT2 7FN", distance: "Approx 0.5 miles away", tel: "Tel: 01227 764000" },
    { name: "Medway", address: "University of Kent Medway Building", city: "Chatham", county: "Kent", country: "United Kingdom", postcode: "ME4 4AG", distance: "Approx 1.5 miles away", tel: "Tel: 01227 764000" }
    // Add more nearby centres as needed
  ], handleFindCentre = () => {
    if (postcode.length > 8 || postcode.length < 7 || registration.trim() === "")
      alert("Invalid postcode or registration");
    else {
      let foundCentre = nearbyCentres.find((centre) => centre.postcode.startsWith(postcode.slice(0, 1)));
      setSelectedCentre(foundCentre);
    }
  }, handleConfirm = () => {
    window.location.href = `/service?postcode=${encodeURIComponent(postcode)}&registration=${encodeURIComponent(registration)}`;
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "py-24 sm:py-32", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("h2", { className: "mt-2 text-4xl font-bold tracking-tight sm:text-6xl", style: { color: "#112D4E" }, children: "YOUR DETAILS:" }, void 0, !1, {
        fileName: "app/routes/selectCentre.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "mx-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
        "input",
        {
          type: "text",
          value: postcode,
          onChange: (e) => setPostcode(e.target.value),
          placeholder: "Enter your postcode",
          className: "block font-extralight",
          style: { fontSize: "16px" }
        },
        void 0,
        !1,
        {
          fileName: "app/routes/selectCentre.tsx",
          lineNumber: 48,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/selectCentre.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "mx-2 mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
        "input",
        {
          type: "text",
          value: registration,
          onChange: (e) => setRegistration(e.target.value),
          placeholder: "Enter your registration",
          className: "block font-extralight",
          style: { fontSize: "16px" }
        },
        void 0,
        !1,
        {
          fileName: "app/routes/selectCentre.tsx",
          lineNumber: 60,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/selectCentre.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
        "button",
        {
          className: "text-white font-light rounded-full px-9 py-2 ml-5 mt-5",
          style: { backgroundColor: "#112D4E", fontSize: "16px" },
          onClick: handleFindCentre,
          children: "Find your centre"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/selectCentre.tsx",
          lineNumber: 70,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/selectCentre.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "mx-auto my-16 grid p-6 max-w-lg grid-cols-1 gap-6 sm:mt-20 lg:mx-auto lg:max-w-none lg:grid-cols-2 lg:gap-8 justify-center", style: { color: "#112D4E" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "p-8 rounded-xl bg/5", style: { backgroundColor: "#DBE2EF" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("h2", { className: "text-xl font-bold mb-2", children: "YOUR VEHICLE DETAILS " }, void 0, !1, {
          fileName: "app/routes/selectCentre.tsx",
          lineNumber: 82,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { style: { fontWeight: "bold" }, children: [
          "Registration: ",
          registration
        ] }, void 0, !0, {
          fileName: "app/routes/selectCentre.tsx",
          lineNumber: 83,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { className: "", style: { color: "#3F72AF" }, children: "Make: " }, void 0, !1, {
          fileName: "app/routes/selectCentre.tsx",
          lineNumber: 86,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { className: "", style: { color: "#3F72AF" }, children: "Model: " }, void 0, !1, {
          fileName: "app/routes/selectCentre.tsx",
          lineNumber: 89,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/selectCentre.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "p-6 rounded-xl bg/3 text-center", style: { backgroundColor: "#DBE2EF" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("h2", { className: "text-xl font-bold mb-2", children: "YOUR SELECTED CENTRE" }, void 0, !1, {
          fileName: "app/routes/selectCentre.tsx",
          lineNumber: 96,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { style: { fontWeight: "bold" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", {}, void 0, !1, {
          fileName: "app/routes/selectCentre.tsx",
          lineNumber: 98,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/selectCentre.tsx",
          lineNumber: 97,
          columnNumber: 11
        }, this),
        selectedCentre && /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { className: "", style: { color: "#3F72AF" }, children: selectedCentre.address }, void 0, !1, {
            fileName: "app/routes/selectCentre.tsx",
            lineNumber: 102,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { className: "", style: { color: "#3F72AF" }, children: selectedCentre.city }, void 0, !1, {
            fileName: "app/routes/selectCentre.tsx",
            lineNumber: 105,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { className: "", style: { color: "#3F72AF" }, children: selectedCentre.county }, void 0, !1, {
            fileName: "app/routes/selectCentre.tsx",
            lineNumber: 108,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { className: "", style: { color: "#3F72AF" }, children: selectedCentre.country }, void 0, !1, {
            fileName: "app/routes/selectCentre.tsx",
            lineNumber: 111,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { className: "", style: { color: "#3F72AF" }, children: selectedCentre.postcode }, void 0, !1, {
            fileName: "app/routes/selectCentre.tsx",
            lineNumber: 114,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { className: "", style: { color: "#3F72AF" }, children: selectedCentre.distance }, void 0, !1, {
            fileName: "app/routes/selectCentre.tsx",
            lineNumber: 117,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { className: "", style: { color: "#3F72AF" }, children: selectedCentre.tel }, void 0, !1, {
            fileName: "app/routes/selectCentre.tsx",
            lineNumber: 120,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/selectCentre.tsx",
          lineNumber: 101,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("button", { className: "text-white px-4 py-2 rounded mt-2", style: { backgroundColor: "#112D4E" }, onClick: () => setShowNearbyCentres(!showNearbyCentres), children: showNearbyCentres ? "HIDE NEARBY CENTRES" : "OTHER NEARBY CENTRES" }, void 0, !1, {
          fileName: "app/routes/selectCentre.tsx",
          lineNumber: 126,
          columnNumber: 11
        }, this),
        showNearbyCentres && /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { children: nearbyCentres.map((centre, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", {}, index, !1, {
          fileName: "app/routes/selectCentre.tsx",
          lineNumber: 134,
          columnNumber: 17
        }, this)) }, void 0, !1, {
          fileName: "app/routes/selectCentre.tsx",
          lineNumber: 131,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("button", { className: "text-white px-4 py-2 rounded mt-2", style: { backgroundColor: "#112D4E", display: "block", marginLeft: "auto" }, onClick: handleConfirm, children: "CONFIRM" }, void 0, !1, {
          fileName: "app/routes/selectCentre.tsx",
          lineNumber: 143,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/selectCentre.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/selectCentre.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/selectCentre.tsx",
    lineNumber: 40,
    columnNumber: 5
  }, this);
}

// app/routes/staffProfile.tsx
var staffProfile_exports = {};
__export(staffProfile_exports, {
  default: () => Admin_profile2
});
var import_react22 = require("react"), import_outline9 = require("@heroicons/react/24/outline"), import_react23 = require("@remix-run/react"), import_jsx_dev_runtime24 = require("react/jsx-dev-runtime"), nav2 = [
  { name: "User Information", href: "#", icon: import_outline9.UserCircleIcon },
  { name: "Contact Information", href: "#", icon: import_outline9.PhoneIcon },
  { name: "Garage Information", href: "#", icon: import_outline9.InformationCircleIcon },
  { name: "Staff Management", href: "#", icon: import_outline9.UsersIcon },
  { name: "Booking Management", href: "#", icon: import_outline9.CreditCardIcon },
  { name: "Business Management", href: "#", icon: import_outline9.BriefcaseIcon },
  { name: "Feedbacks", href: "#", icon: import_outline9.ChatBubbleLeftRightIcon }
];
function classNames2(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Admin_profile2() {
  let [currentSection, setCurrentSection] = (0, import_react22.useState)("User Information"), handleSectionChange = (sectionName) => {
    setCurrentSection(sectionName);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_jsx_dev_runtime24.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" }, void 0, !1, {
      fileName: "app/routes/staffProfile.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "mx-auto max-w-7xl pt-16 lg:flex lg:gap-x-16 lg:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("aside", { className: "flex overflow-x-auto border-b border-gray-900/5 py-4 lg:block lg:w-64 lg:flex-none lg:border-0 lg:py-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("nav", { className: "flex-none px-4 sm:px-6 lg:px-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("ul", { role: "list", className: "flex gap-x-5 gap-y-6 lg:flex-col", children: nav2.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
        "a",
        {
          href: item.href,
          className: classNames2(currentSection === item.name ? "bg-gray-50 text-indigo-900" : "text-gray-700 hover:text-indigo-900 hover:bg-gray-50", "group flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm leading-6 font-semibold"),
          onClick: () => handleSectionChange(item.name),
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(item.icon, { className: classNames2(currentSection === item.name ? "text-indigo-900" : "text-indigo-900 group-hover:text-indigo-900", "h-6 w-6 shrink-0"), "aria-hidden": "true" }, void 0, !1, {
              fileName: "app/routes/staffProfile.tsx",
              lineNumber: 42,
              columnNumber: 21
            }, this),
            item.name
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/staffProfile.tsx",
          lineNumber: 37,
          columnNumber: 19
        },
        this
      ) }, item.name, !1, {
        fileName: "app/routes/staffProfile.tsx",
        lineNumber: 36,
        columnNumber: 17
      }, this)) }, void 0, !1, {
        fileName: "app/routes/staffProfile.tsx",
        lineNumber: 34,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/staffProfile.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/staffProfile.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("main", { className: "px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none", children: [
        currentSection === "User Information" && /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("h2", { className: "text-3xl font-semibold leading-7 text-gray-900", children: "Profile" }, void 0, !1, {
            fileName: "app/routes/staffProfile.tsx",
            lineNumber: 57,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("dl", { className: "mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Username" }, void 0, !1, {
                fileName: "app/routes/staffProfile.tsx",
                lineNumber: 60,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("dd", { className: "mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "text-gray-900" }, void 0, !1, {
                  fileName: "app/routes/staffProfile.tsx",
                  lineNumber: 62,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("button", { type: "button", className: "font-semibold text-indigo-900 hover:text-indigo-900", children: "Update" }, void 0, !1, {
                  fileName: "app/routes/staffProfile.tsx",
                  lineNumber: 63,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/staffProfile.tsx",
                lineNumber: 61,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/staffProfile.tsx",
              lineNumber: 59,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Full Name" }, void 0, !1, {
                fileName: "app/routes/staffProfile.tsx",
                lineNumber: 69,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("dd", { className: "mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "text-gray-900" }, void 0, !1, {
                  fileName: "app/routes/staffProfile.tsx",
                  lineNumber: 71,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("button", { type: "button", className: "font-semibold text-indigo-900 hover:text-indigo-900", children: "Update" }, void 0, !1, {
                  fileName: "app/routes/staffProfile.tsx",
                  lineNumber: 72,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/staffProfile.tsx",
                lineNumber: 70,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/staffProfile.tsx",
              lineNumber: 68,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Password" }, void 0, !1, {
                fileName: "app/routes/staffProfile.tsx",
                lineNumber: 78,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("dd", { className: "mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "text-gray-900" }, void 0, !1, {
                  fileName: "app/routes/staffProfile.tsx",
                  lineNumber: 80,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("button", { type: "button", className: "font-semibold text-indigo-900 hover:text-indigo-900", children: "Update" }, void 0, !1, {
                  fileName: "app/routes/staffProfile.tsx",
                  lineNumber: 81,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/staffProfile.tsx",
                lineNumber: 79,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/staffProfile.tsx",
              lineNumber: 77,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/staffProfile.tsx",
            lineNumber: 58,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/staffProfile.tsx",
          lineNumber: 56,
          columnNumber: 15
        }, this),
        currentSection === "Contact Information" && /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("h2", { className: "text-3xl font-semibold leading-7 text-gray-900", children: "Contact" }, void 0, !1, {
            fileName: "app/routes/staffProfile.tsx",
            lineNumber: 93,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("dl", { className: "mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Phone Number" }, void 0, !1, {
                fileName: "app/routes/staffProfile.tsx",
                lineNumber: 96,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("dd", { className: "mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "text-gray-900" }, void 0, !1, {
                  fileName: "app/routes/staffProfile.tsx",
                  lineNumber: 98,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("button", { type: "button", className: "font-semibold text-indigo-900 hover:text-indigo-900", children: "Update" }, void 0, !1, {
                  fileName: "app/routes/staffProfile.tsx",
                  lineNumber: 99,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/staffProfile.tsx",
                lineNumber: 97,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/staffProfile.tsx",
              lineNumber: 95,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Address" }, void 0, !1, {
                fileName: "app/routes/staffProfile.tsx",
                lineNumber: 105,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("dd", { className: "mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "text-gray-900" }, void 0, !1, {
                  fileName: "app/routes/staffProfile.tsx",
                  lineNumber: 107,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("button", { type: "button", className: "font-semibold text-indigo-900 hover:text-indigo-900", children: "Update" }, void 0, !1, {
                  fileName: "app/routes/staffProfile.tsx",
                  lineNumber: 108,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/staffProfile.tsx",
                lineNumber: 106,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/staffProfile.tsx",
              lineNumber: 104,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Emergency Contact" }, void 0, !1, {
                fileName: "app/routes/staffProfile.tsx",
                lineNumber: 114,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("dd", { className: "mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "text-gray-900" }, void 0, !1, {
                  fileName: "app/routes/staffProfile.tsx",
                  lineNumber: 116,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("button", { type: "button", className: "font-semibold text-indigo-900 hover:text-indigo-900", children: "Update" }, void 0, !1, {
                  fileName: "app/routes/staffProfile.tsx",
                  lineNumber: 117,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/staffProfile.tsx",
                lineNumber: 115,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/staffProfile.tsx",
              lineNumber: 113,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/staffProfile.tsx",
            lineNumber: 94,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/staffProfile.tsx",
          lineNumber: 92,
          columnNumber: 15
        }, this),
        currentSection === "Garage Information" && /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("h2", { className: "text-3xl font-semibold leading-7 text-gray-900", children: "Garage Information" }, void 0, !1, {
            fileName: "app/routes/staffProfile.tsx",
            lineNumber: 128,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("dl", { className: "mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Garage Name" }, void 0, !1, {
                fileName: "app/routes/staffProfile.tsx",
                lineNumber: 131,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("dd", { className: "mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "text-gray-900" }, void 0, !1, {
                  fileName: "app/routes/staffProfile.tsx",
                  lineNumber: 133,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("button", { type: "button", className: "font-semibold text-indigo-900 hover:text-indigo-900", children: "Update" }, void 0, !1, {
                  fileName: "app/routes/staffProfile.tsx",
                  lineNumber: 134,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/staffProfile.tsx",
                lineNumber: 132,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/staffProfile.tsx",
              lineNumber: 130,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Garage Address" }, void 0, !1, {
                fileName: "app/routes/staffProfile.tsx",
                lineNumber: 140,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("dd", { className: "mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "text-gray-900" }, void 0, !1, {
                  fileName: "app/routes/staffProfile.tsx",
                  lineNumber: 142,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("button", { type: "button", className: "font-semibold text-indigo-900 hover:text-indigo-900", children: "Update" }, void 0, !1, {
                  fileName: "app/routes/staffProfile.tsx",
                  lineNumber: 143,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/staffProfile.tsx",
                lineNumber: 141,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/staffProfile.tsx",
              lineNumber: 139,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Garage Telephone Number" }, void 0, !1, {
                fileName: "app/routes/staffProfile.tsx",
                lineNumber: 149,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("dd", { className: "mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "text-gray-900" }, void 0, !1, {
                  fileName: "app/routes/staffProfile.tsx",
                  lineNumber: 151,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("button", { type: "button", className: "font-semibold text-indigo-900 hover:text-indigo-900", children: "Update" }, void 0, !1, {
                  fileName: "app/routes/staffProfile.tsx",
                  lineNumber: 152,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/staffProfile.tsx",
                lineNumber: 150,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/staffProfile.tsx",
              lineNumber: 148,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/staffProfile.tsx",
            lineNumber: 129,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/staffProfile.tsx",
          lineNumber: 127,
          columnNumber: 15
        }, this),
        currentSection === "Staff Management" && /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("h2", { className: "text-3xl font-semibold leading-7 text-gray-900", children: "Staff Management" }, void 0, !1, {
            fileName: "app/routes/staffProfile.tsx",
            lineNumber: 164,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("dl", { className: "mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Garage Staff" }, void 0, !1, {
              fileName: "app/routes/staffProfile.tsx",
              lineNumber: 168,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("dd", { className: "mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("ul", { className: "text-gray-900", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("li", { children: "Staff 1" }, void 0, !1, {
                  fileName: "app/routes/staffProfile.tsx",
                  lineNumber: 171,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("li", { children: "Staff 2" }, void 0, !1, {
                  fileName: "app/routes/staffProfile.tsx",
                  lineNumber: 172,
                  columnNumber: 25
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/staffProfile.tsx",
                lineNumber: 170,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("button", { type: "button", className: "font-semibold text-indigo-900 hover:text-indigo-900" }, void 0, !1, {
                fileName: "app/routes/staffProfile.tsx",
                lineNumber: 174,
                columnNumber: 23
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/staffProfile.tsx",
              lineNumber: 169,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/staffProfile.tsx",
            lineNumber: 167,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/staffProfile.tsx",
            lineNumber: 166,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/staffProfile.tsx",
          lineNumber: 163,
          columnNumber: 15
        }, this),
        currentSection === "Booking Management" && /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("h2", { className: "text-3xl font-semibold leading-7 text-gray-900", children: "Bookings" }, void 0, !1, {
            fileName: "app/routes/staffProfile.tsx",
            lineNumber: 186,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("dl", { className: "mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Appointment Calendar" }, void 0, !1, {
              fileName: "app/routes/staffProfile.tsx",
              lineNumber: 190,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("dd", { className: "mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("ul", { className: "text-gray-900", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("li", { children: "Appointment 1" }, void 0, !1, {
                  fileName: "app/routes/staffProfile.tsx",
                  lineNumber: 193,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("li", { children: "Appointment 2" }, void 0, !1, {
                  fileName: "app/routes/staffProfile.tsx",
                  lineNumber: 194,
                  columnNumber: 25
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/staffProfile.tsx",
                lineNumber: 192,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("button", { type: "button", className: "font-semibold text-indigo-900 hover:text-indigo-900" }, void 0, !1, {
                fileName: "app/routes/staffProfile.tsx",
                lineNumber: 196,
                columnNumber: 23
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/staffProfile.tsx",
              lineNumber: 191,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/staffProfile.tsx",
            lineNumber: 189,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/staffProfile.tsx",
            lineNumber: 188,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/staffProfile.tsx",
          lineNumber: 185,
          columnNumber: 15
        }, this),
        currentSection === "Business Management" && /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("h2", { className: "text-3xl font-semibold leading-7 text-gray-900", children: "Business Management" }, void 0, !1, {
            fileName: "app/routes/staffProfile.tsx",
            lineNumber: 208,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("dl", { className: "mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "pt-6 sm:flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Business Performance" }, void 0, !1, {
              fileName: "app/routes/staffProfile.tsx",
              lineNumber: 211,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/staffProfile.tsx",
              lineNumber: 210,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "pt-6 sm:flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Booking Trends" }, void 0, !1, {
              fileName: "app/routes/staffProfile.tsx",
              lineNumber: 214,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/staffProfile.tsx",
              lineNumber: 213,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "pt-6 sm:flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Finanacial Statistics" }, void 0, !1, {
              fileName: "app/routes/staffProfile.tsx",
              lineNumber: 217,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/staffProfile.tsx",
              lineNumber: 216,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "pt-6 sm:flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Customer Satisfaction" }, void 0, !1, {
              fileName: "app/routes/staffProfile.tsx",
              lineNumber: 220,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/staffProfile.tsx",
              lineNumber: 219,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/staffProfile.tsx",
            lineNumber: 209,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/staffProfile.tsx",
          lineNumber: 207,
          columnNumber: 15
        }, this),
        currentSection === "Feedbacks" && /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("h2", { className: "text-3xl font-semibold leading-7 text-gray-900", children: "Feedbacks" }, void 0, !1, {
            fileName: "app/routes/staffProfile.tsx",
            lineNumber: 229,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("dl", { className: "mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Customer Feedbacks" }, void 0, !1, {
              fileName: "app/routes/staffProfile.tsx",
              lineNumber: 233,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("dd", { className: "mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("ul", { className: "text-gray-900", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("li", { children: "Appointment 1" }, void 0, !1, {
                  fileName: "app/routes/staffProfile.tsx",
                  lineNumber: 236,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("li", { children: "Appointment 2" }, void 0, !1, {
                  fileName: "app/routes/staffProfile.tsx",
                  lineNumber: 237,
                  columnNumber: 25
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/staffProfile.tsx",
                lineNumber: 235,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("button", { type: "button", className: "font-semibold text-indigo-900 hover:text-indigo-900" }, void 0, !1, {
                fileName: "app/routes/staffProfile.tsx",
                lineNumber: 239,
                columnNumber: 23
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/staffProfile.tsx",
              lineNumber: 234,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/staffProfile.tsx",
            lineNumber: 232,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/staffProfile.tsx",
            lineNumber: 231,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/staffProfile.tsx",
          lineNumber: 228,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { style: { position: "fixed", bottom: "10px", left: "10px", cursor: "pointer" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react23.Link, { to: "/staffLogin", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_outline9.ArrowLeftOnRectangleIcon, {}, void 0, !1, {
            fileName: "app/routes/staffProfile.tsx",
            lineNumber: 250,
            columnNumber: 9
          }, this),
          "Logout"
        ] }, void 0, !0, {
          fileName: "app/routes/staffProfile.tsx",
          lineNumber: 249,
          columnNumber: 7
        }, this) }, void 0, !1, {
          fileName: "app/routes/staffProfile.tsx",
          lineNumber: 248,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/staffProfile.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/staffProfile.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/staffProfile.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/staffProfile.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

// app/routes/fullService.tsx
var fullService_exports = {};
__export(fullService_exports, {
  default: () => FullService
});
var import_react24 = require("react"), import_react_datepicker21 = __toESM(require("react-datepicker"));
var import_jsx_dev_runtime25 = require("react/jsx-dev-runtime");
function FullService() {
  let [registration, setRegistration] = (0, import_react24.useState)(""), [postCode, setPostCode] = (0, import_react24.useState)(""), [selectedDate, setSelectedDate] = (0, import_react24.useState)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex items-center justify-center h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "fixed inset-x-0 px-6 py-3 flex flex-row justify-between mx-auto w-full top-28 pl-18", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Breadcrumbs, { paths: [
      { label: "Services", url: "/service" },
      { label: "Car Servcing", url: "/carServicing" },
      { label: "Full Service", url: "/fullService" }
    ] }, void 0, !1, {
      fileName: "app/routes/fullService.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/fullService.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "mt-16 max-w-md p-6 bg-white rounded shadow-md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("nav", { className: "fixed inset-x-0 px-6 py-3 flex flex-row justify-between top-0 max-w-7xl mx-auto z-10", style: { backgroundColor: "#F9F7F7" } }, void 0, !1, {
        fileName: "app/routes/fullService.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("h1", { className: "text-3xl font-bold mb-4", children: "Full Service" }, void 0, !1, {
        fileName: "app/routes/fullService.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
        "img",
        {
          src: "/images/full-service.png",
          alt: "Service Image",
          className: "mx-auto mb-4 rounded-lg",
          style: { maxWidth: "150px", height: "auto" }
        },
        void 0,
        !1,
        {
          fileName: "app/routes/fullService.tsx",
          lineNumber: 51,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { className: "font-bold", children: "From \xA3209.99*" }, void 0, !1, {
        fileName: "app/routes/fullService.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/fullService.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { className: "font-bold text-red-500", children: "Book with an MOT and save \xA329.99" }, void 0, !1, {
        fileName: "app/routes/fullService.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/fullService.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { children: "*Prices vary by location and vehicle. Add your details below to get your personalized price" }, void 0, !1, {
        fileName: "app/routes/fullService.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("form", { onSubmit: (e) => {
        e.preventDefault();
      }, className: "mt-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("label", { htmlFor: "registration", className: "block mb-2 text-sm text-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { className: "text-navy-blue-500 font-bold", children: "Registration:" }, void 0, !1, {
            fileName: "app/routes/fullService.tsx",
            lineNumber: 71,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("input", { type: "text", id: "registration", name: "registration", className: "border p-2 w-full mt-1", placeholder: "Enter Registration", onChange: (e) => {
            setRegistration(e.target.value);
          } }, void 0, !1, {
            fileName: "app/routes/fullService.tsx",
            lineNumber: 72,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/fullService.tsx",
          lineNumber: 70,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("label", { htmlFor: "postCode", className: "block mb-2 text-sm text-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { className: "text-navy-blue-500 font-bold", children: "Post Code:" }, void 0, !1, {
            fileName: "app/routes/fullService.tsx",
            lineNumber: 77,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("input", { type: "text", id: "postCode", name: "postCode", className: "border p-2 w-full mt-1", placeholder: "Enter Post Code", onChange: (e) => {
            setPostCode(e.target.value);
          } }, void 0, !1, {
            fileName: "app/routes/fullService.tsx",
            lineNumber: 78,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/fullService.tsx",
          lineNumber: 76,
          columnNumber: 11
        }, this),
        registration && postCode && /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("label", { className: "block mb-2 text-sm text-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { className: "text-navy-blue-500 font-bold", children: "Select Date:" }, void 0, !1, {
            fileName: "app/routes/fullService.tsx",
            lineNumber: 85,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react_datepicker21.default, { selected: selectedDate, onChange: (date) => {
            setSelectedDate(date);
          }, dateFormat: "dd/MM/yyyy" }, void 0, !1, {
            fileName: "app/routes/fullService.tsx",
            lineNumber: 86,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/fullService.tsx",
          lineNumber: 84,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/fullService.tsx",
          lineNumber: 83,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
          "button",
          {
            type: "submit",
            className: `bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 ${selectedDate && registration && postCode ? "" : "opacity-50 cursor-not-allowed"}`,
            disabled: !(selectedDate && registration && postCode),
            children: "Book Now"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/fullService.tsx",
            lineNumber: 92,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/fullService.tsx",
        lineNumber: 68,
        columnNumber: 10
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/fullService.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/fullService.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}

// app/routes/majorAndMot.tsx
var majorAndMot_exports = {};
__export(majorAndMot_exports, {
  default: () => InterimService3
});
var import_react25 = require("react"), import_react_datepicker23 = __toESM(require("react-datepicker"));
var import_jsx_dev_runtime26 = require("react/jsx-dev-runtime");
function InterimService3() {
  let [registration, setRegistration] = (0, import_react25.useState)(""), [postCode, setPostCode] = (0, import_react25.useState)(""), [selectedDate, setSelectedDate] = (0, import_react25.useState)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "flex items-center justify-center h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "fixed inset-x-0 px-6 py-3 flex flex-row justify-between mx-auto w-full top-28 pl-18", children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(Breadcrumbs, { paths: [
      { label: "Services", url: "/service" },
      { label: "MOT Services", url: "/mot" },
      { label: "MOT and Major Service", url: "/majorAndMot" }
    ] }, void 0, !1, {
      fileName: "app/routes/majorAndMot.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/majorAndMot.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "mt-16 max-w-md p-6 bg-white rounded shadow-md mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("h1", { className: "text-3xl font-bold mb-4 text-center", style: { color: "#112D4E" }, children: "MOT and Major Service" }, void 0, !1, {
        fileName: "app/routes/majorAndMot.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
        "img",
        {
          src: "/images/interim-service.png",
          alt: "Service Image",
          className: "mx-auto mb-4 rounded-lg",
          style: { maxWidth: "150px", height: "auto" }
        },
        void 0,
        !1,
        {
          fileName: "app/routes/majorAndMot.tsx",
          lineNumber: 47,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("span", { className: "font-bold", children: "From \xA3149.99*" }, void 0, !1, {
        fileName: "app/routes/majorAndMot.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/majorAndMot.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("span", { className: "font-bold", style: { color: "#3F72AF" }, children: "Book with an MOT and save \xA324.99" }, void 0, !1, {
        fileName: "app/routes/majorAndMot.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/majorAndMot.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("p", { style: { color: "#3F72AF" }, children: "*Prices vary by location and vehicle. Add your details below to get your personalized price" }, void 0, !1, {
        fileName: "app/routes/majorAndMot.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("form", { onSubmit: (e) => {
        e.preventDefault();
      }, className: "mt-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("label", { htmlFor: "registration", className: "block mb-2 text-sm text-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("span", { className: "text-navy-blue-500 font-bold", children: "Registration:" }, void 0, !1, {
            fileName: "app/routes/majorAndMot.tsx",
            lineNumber: 69,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("input", { type: "text", id: "registration", name: "registration", className: "border p-2 w-full mt-1", placeholder: "Enter Registration", onChange: (e) => {
            setRegistration(e.target.value);
          } }, void 0, !1, {
            fileName: "app/routes/majorAndMot.tsx",
            lineNumber: 70,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/majorAndMot.tsx",
          lineNumber: 68,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("label", { htmlFor: "postCode", className: "block mb-2 text-sm text-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("span", { className: "text-navy-blue-500 font-bold", children: "Post Code:" }, void 0, !1, {
            fileName: "app/routes/majorAndMot.tsx",
            lineNumber: 75,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("input", { type: "text", id: "postCode", name: "postCode", className: "border p-2 w-full mt-1", placeholder: "Enter Post Code", onChange: (e) => {
            setPostCode(e.target.value);
          } }, void 0, !1, {
            fileName: "app/routes/majorAndMot.tsx",
            lineNumber: 76,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/majorAndMot.tsx",
          lineNumber: 74,
          columnNumber: 11
        }, this),
        registration && postCode && /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("label", { className: "block mb-2 text-sm text-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("span", { className: "text-navy-blue-500 font-bold", children: "Select Date:" }, void 0, !1, {
            fileName: "app/routes/majorAndMot.tsx",
            lineNumber: 83,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react_datepicker23.default, { selected: selectedDate, onChange: (date) => {
            setSelectedDate(date);
          }, dateFormat: "dd/MM/yyyy" }, void 0, !1, {
            fileName: "app/routes/majorAndMot.tsx",
            lineNumber: 84,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/majorAndMot.tsx",
          lineNumber: 82,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/majorAndMot.tsx",
          lineNumber: 81,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
          "button",
          {
            type: "submit",
            className: `bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 ${selectedDate && registration && postCode ? "" : "opacity-50 cursor-not-allowed"}`,
            disabled: !(selectedDate && registration && postCode),
            children: "Book Now"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/majorAndMot.tsx",
            lineNumber: 90,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/majorAndMot.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/majorAndMot.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/majorAndMot.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}

// app/routes/staffSignup.tsx
var staffSignup_exports = {};
__export(staffSignup_exports, {
  default: () => staffSignup
});
var import_react_router_dom6 = require("react-router-dom"), import_jsx_dev_runtime27 = require("react/jsx-dev-runtime");
function staffSignup() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "sm:mx-auto sm:w-full sm:max-w-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("h2", { className: "mt-10 text-center text-2xl font-bold leading-9 tracking-tight pt-10", style: { color: "#112D4E" }, children: "Create a new Manager account" }, void 0, !1, {
      fileName: "app/routes/staffSignup.tsx",
      lineNumber: 17,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/staffSignup.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "mt-10 sm:mx-auto sm:w-full sm:max-w-sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("form", { className: "space-y-6", action: "/staffUpDB", method: "POST", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("label", { htmlFor: "username", className: "block text-sm font-medium leading-6 text-gray-900", style: { fontSize: "16px", color: "#112D4E" }, children: "username" }, void 0, !1, {
            fileName: "app/routes/staffSignup.tsx",
            lineNumber: 27,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
            "input",
            {
              id: "username",
              name: "username",
              type: "text",
              required: !0,
              className: "block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6",
              style: { fontSize: "16px", borderColor: "#112D4E" }
            },
            void 0,
            !1,
            {
              fileName: "app/routes/staffSignup.tsx",
              lineNumber: 31,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/staffSignup.tsx",
            lineNumber: 30,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/staffSignup.tsx",
          lineNumber: 26,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("label", { htmlFor: "firstName", className: "block text-sm font-medium leading-6 text-gray-900", style: { fontSize: "16px", color: "#112D4E" }, children: "First Name" }, void 0, !1, {
            fileName: "app/routes/staffSignup.tsx",
            lineNumber: 44,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
            "input",
            {
              id: "firstName",
              name: "firstName",
              type: "text",
              required: !0,
              className: "block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6",
              style: { fontSize: "16px", borderColor: "#112D4E" }
            },
            void 0,
            !1,
            {
              fileName: "app/routes/staffSignup.tsx",
              lineNumber: 48,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/staffSignup.tsx",
            lineNumber: 47,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/staffSignup.tsx",
          lineNumber: 43,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("label", { htmlFor: "lastName", className: "block text-sm font-medium leading-6 text-gray-900", style: { fontSize: "16px", color: "#112D4E" }, children: "Last Name" }, void 0, !1, {
            fileName: "app/routes/staffSignup.tsx",
            lineNumber: 61,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
            "input",
            {
              id: "lastName",
              name: "lastName",
              type: "text",
              required: !0,
              className: "block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6",
              style: { fontSize: "16px", borderColor: "#112D4E" }
            },
            void 0,
            !1,
            {
              fileName: "app/routes/staffSignup.tsx",
              lineNumber: 65,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/staffSignup.tsx",
            lineNumber: 64,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/staffSignup.tsx",
          lineNumber: 60,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("label", { htmlFor: "centre", className: "block text-sm font-medium leading-6 text-gray-900", style: { fontSize: "16px", color: "#112D4E" }, children: "Centre" }, void 0, !1, {
            fileName: "app/routes/staffSignup.tsx",
            lineNumber: 78,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("select", { id: "centre", name: "centre", required: !0, className: "block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6", style: { fontSize: "16px", borderColor: "#112D4E" }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("option", { value: "Canterbury", children: "Canterbury" }, void 0, !1, {
              fileName: "app/routes/staffSignup.tsx",
              lineNumber: 83,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("option", { value: "Medway", children: "Medway" }, void 0, !1, {
              fileName: "app/routes/staffSignup.tsx",
              lineNumber: 84,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/staffSignup.tsx",
            lineNumber: 82,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/staffSignup.tsx",
          lineNumber: 77,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("label", { htmlFor: "password", className: "block text-sm font-medium leading-6 text-gray-900", style: { fontSize: "16px", color: "#112D4E" }, children: "Password" }, void 0, !1, {
            fileName: "app/routes/staffSignup.tsx",
            lineNumber: 90,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("input", { id: "password", name: "password", type: "password", autoComplete: "new-password", required: !0, className: "block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" }, void 0, !1, {
            fileName: "app/routes/staffSignup.tsx",
            lineNumber: 94,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/staffSignup.tsx",
            lineNumber: 93,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/staffSignup.tsx",
          lineNumber: 89,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("label", { htmlFor: "confirmPassword", className: "block text-sm font-medium leading-6 text-gray-900", style: { fontSize: "16px", color: "#112D4E" }, children: "Confirm Password" }, void 0, !1, {
            fileName: "app/routes/staffSignup.tsx",
            lineNumber: 100,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("input", { id: "confirmPassword", name: "confirmPassword", type: "password", autoComplete: "new-password", required: !0, className: "block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" }, void 0, !1, {
            fileName: "app/routes/staffSignup.tsx",
            lineNumber: 104,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/staffSignup.tsx",
            lineNumber: 103,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/staffSignup.tsx",
          lineNumber: 99,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "flex w-full justify-center rounded-full px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
            style: { backgroundColor: "#112D4E", fontSize: "16px" },
            children: "Sign up"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/staffSignup.tsx",
            lineNumber: 110,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/staffSignup.tsx",
          lineNumber: 109,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/staffSignup.tsx",
        lineNumber: 23,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("p", { className: "mt-10 text-center text-sm text-gray-500", children: [
        "Already have a staff account? ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react_router_dom6.Link, { to: "/staffLogin", className: "font-semibold leading-6", style: { color: "#112D4E" }, children: "Sign In" }, void 0, !1, {
          fileName: "app/routes/staffSignup.tsx",
          lineNumber: 123,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/staffSignup.tsx",
        lineNumber: 121,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/staffSignup.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/staffSignup.tsx",
    lineNumber: 13,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/staffSignup.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/brakeFluid.tsx
var brakeFluid_exports = {};
__export(brakeFluid_exports, {
  default: () => WindscreenRepairService5
});
var import_react26 = require("react"), import_react_datepicker25 = __toESM(require("react-datepicker"));
var import_jsx_dev_runtime28 = require("react/jsx-dev-runtime");
function WindscreenRepairService5() {
  let [registration, setRegistration] = (0, import_react26.useState)(""), [postCode, setPostCode] = (0, import_react26.useState)(""), [selectedDate, setSelectedDate] = (0, import_react26.useState)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "flex items-center justify-center h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "fixed inset-x-0 px-6 py-3 flex flex-row justify-between mx-auto w-full top-28 pl-18", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(Breadcrumbs, { paths: [
      { label: "Services", url: "/service" },
      { label: "Oil and Brake Repairs", url: "/oilAndBrakeRepairs" },
      { label: "Brake Fluid Change", url: "/brakeFluid" }
    ] }, void 0, !1, {
      fileName: "app/routes/brakeFluid.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/brakeFluid.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "mt-16 max-w-md p-6 bg-white rounded shadow-md mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("h1", { className: "text-3xl font-bold mb-4 text-center", style: { color: "#112D4E" }, children: "Basic Oil and Brake Service" }, void 0, !1, {
        fileName: "app/routes/brakeFluid.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
        "img",
        {
          src: "/images/windscreen-repair.png",
          alt: "Service Image",
          className: "mx-auto mb-4 rounded-lg",
          style: { maxWidth: "150px", height: "auto" }
        },
        void 0,
        !1,
        {
          fileName: "app/routes/brakeFluid.tsx",
          lineNumber: 48,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("span", { className: "font-bold", style: { color: "#112D4E" }, children: "Starting from \xA399.99*" }, void 0, !1, {
        fileName: "app/routes/brakeFluid.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/brakeFluid.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("p", { style: { color: "#3F72AF" }, children: "*Prices vary by location and vehicle. Add your details below to get your personalized price" }, void 0, !1, {
        fileName: "app/routes/brakeFluid.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("form", { onSubmit: (e) => {
        e.preventDefault();
      }, className: "mt-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("label", { htmlFor: "registration", className: "block mb-2 text-sm ", style: { color: "#112D4E" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("span", { className: "text-navy-blue-500 font-bold", children: "Vehicle Registration:" }, void 0, !1, {
            fileName: "app/routes/brakeFluid.tsx",
            lineNumber: 65,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("input", { type: "text", id: "registration", name: "registration", className: "border p-2 w-full mt-1", placeholder: "Enter Vehicle Registration", onChange: (e) => {
            setRegistration(e.target.value);
          } }, void 0, !1, {
            fileName: "app/routes/brakeFluid.tsx",
            lineNumber: 66,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/brakeFluid.tsx",
          lineNumber: 64,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("label", { htmlFor: "postCode", className: "block mb-2 text-sm ", style: { color: "#112D4E" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("span", { className: "text-navy-blue-500 font-bold", children: "Post Code:" }, void 0, !1, {
            fileName: "app/routes/brakeFluid.tsx",
            lineNumber: 71,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("input", { type: "text", id: "postCode", name: "postCode", className: "border p-2 w-full mt-1", placeholder: "Enter Post Code", onChange: (e) => {
            setPostCode(e.target.value);
          } }, void 0, !1, {
            fileName: "app/routes/brakeFluid.tsx",
            lineNumber: 72,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/brakeFluid.tsx",
          lineNumber: 70,
          columnNumber: 11
        }, this),
        registration && postCode && /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("label", { className: "block mb-2 text-sm ", style: { color: "#112D4E" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("span", { className: "text-navy-blue-500 font-bold", children: "Select Repair Date:" }, void 0, !1, {
            fileName: "app/routes/brakeFluid.tsx",
            lineNumber: 79,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react_datepicker25.default, { selected: selectedDate, onChange: (date) => {
            setSelectedDate(date);
          }, dateFormat: "dd/MM/yyyy" }, void 0, !1, {
            fileName: "app/routes/brakeFluid.tsx",
            lineNumber: 80,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/brakeFluid.tsx",
          lineNumber: 78,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/brakeFluid.tsx",
          lineNumber: 77,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
          "button",
          {
            type: "submit",
            className: `bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 ${selectedDate && registration && postCode ? "" : "opacity-50 cursor-not-allowed"}`,
            disabled: !(selectedDate && registration && postCode),
            children: "Book Now"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/brakeFluid.tsx",
            lineNumber: 86,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/brakeFluid.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/brakeFluid.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/brakeFluid.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

// app/routes/fullAndMot.tsx
var fullAndMot_exports = {};
__export(fullAndMot_exports, {
  default: () => InterimService4
});
var import_react27 = require("react"), import_react_datepicker27 = __toESM(require("react-datepicker"));
var import_jsx_dev_runtime29 = require("react/jsx-dev-runtime");
function InterimService4() {
  let [registration, setRegistration] = (0, import_react27.useState)(""), [postCode, setPostCode] = (0, import_react27.useState)(""), [selectedDate, setSelectedDate] = (0, import_react27.useState)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "flex items-center justify-center h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "fixed inset-x-0 px-6 py-3 flex flex-row justify-between mx-auto w-full top-28 pl-18", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(Breadcrumbs, { paths: [
      { label: "Services", url: "/service" },
      { label: "MOT Services", url: "/mot" },
      { label: "MOT and Full Service", url: "/fullAndMot" }
    ] }, void 0, !1, {
      fileName: "app/routes/fullAndMot.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/fullAndMot.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "mt-16 max-w-md p-6 bg-white rounded shadow-md mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("h1", { className: "text-3xl font-bold mb-4 text-center", style: { color: "#112D4E" }, children: "MOT and Full Service" }, void 0, !1, {
        fileName: "app/routes/fullAndMot.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
        "img",
        {
          src: "/images/interim-service.png",
          alt: "Service Image",
          className: "mx-auto mb-4 rounded-lg",
          style: { maxWidth: "150px", height: "auto" }
        },
        void 0,
        !1,
        {
          fileName: "app/routes/fullAndMot.tsx",
          lineNumber: 47,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("span", { className: "font-bold", children: "From \xA3149.99*" }, void 0, !1, {
        fileName: "app/routes/fullAndMot.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/fullAndMot.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("span", { className: "font-bold", style: { color: "#3F72AF" }, children: "Book with an MOT and save \xA324.99" }, void 0, !1, {
        fileName: "app/routes/fullAndMot.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/fullAndMot.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("p", { style: { color: "#3F72AF" }, children: "*Prices vary by location and vehicle. Add your details below to get your personalized price" }, void 0, !1, {
        fileName: "app/routes/fullAndMot.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("form", { onSubmit: (e) => {
        e.preventDefault();
      }, className: "mt-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("label", { htmlFor: "registration", className: "block mb-2 text-sm text-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("span", { className: "text-navy-blue-500 font-bold", children: "Registration:" }, void 0, !1, {
            fileName: "app/routes/fullAndMot.tsx",
            lineNumber: 69,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("input", { type: "text", id: "registration", name: "registration", className: "border p-2 w-full mt-1", placeholder: "Enter Registration", onChange: (e) => {
            setRegistration(e.target.value);
          } }, void 0, !1, {
            fileName: "app/routes/fullAndMot.tsx",
            lineNumber: 70,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/fullAndMot.tsx",
          lineNumber: 68,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("label", { htmlFor: "postCode", className: "block mb-2 text-sm text-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("span", { className: "text-navy-blue-500 font-bold", children: "Post Code:" }, void 0, !1, {
            fileName: "app/routes/fullAndMot.tsx",
            lineNumber: 75,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("input", { type: "text", id: "postCode", name: "postCode", className: "border p-2 w-full mt-1", placeholder: "Enter Post Code", onChange: (e) => {
            setPostCode(e.target.value);
          } }, void 0, !1, {
            fileName: "app/routes/fullAndMot.tsx",
            lineNumber: 76,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/fullAndMot.tsx",
          lineNumber: 74,
          columnNumber: 11
        }, this),
        registration && postCode && /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("label", { className: "block mb-2 text-sm text-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("span", { className: "text-navy-blue-500 font-bold", children: "Select Date:" }, void 0, !1, {
            fileName: "app/routes/fullAndMot.tsx",
            lineNumber: 83,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react_datepicker27.default, { selected: selectedDate, onChange: (date) => {
            setSelectedDate(date);
          }, dateFormat: "dd/MM/yyyy" }, void 0, !1, {
            fileName: "app/routes/fullAndMot.tsx",
            lineNumber: 84,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/fullAndMot.tsx",
          lineNumber: 82,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/fullAndMot.tsx",
          lineNumber: 81,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
          "button",
          {
            type: "submit",
            className: `bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 ${selectedDate && registration && postCode ? "" : "opacity-50 cursor-not-allowed"}`,
            disabled: !(selectedDate && registration && postCode),
            children: "Book Now"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/fullAndMot.tsx",
            lineNumber: 90,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/fullAndMot.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/fullAndMot.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/fullAndMot.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}

// app/routes/premiumOil.tsx
var premiumOil_exports = {};
__export(premiumOil_exports, {
  default: () => WindscreenRepairService6
});
var import_react28 = require("react"), import_react_datepicker29 = __toESM(require("react-datepicker"));
var import_jsx_dev_runtime30 = require("react/jsx-dev-runtime");
function WindscreenRepairService6() {
  let [registration, setRegistration] = (0, import_react28.useState)(""), [postCode, setPostCode] = (0, import_react28.useState)(""), [selectedDate, setSelectedDate] = (0, import_react28.useState)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "flex items-center justify-center h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "fixed inset-x-0 px-6 py-3 flex flex-row justify-between mx-auto w-full top-28 pl-18", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(Breadcrumbs, { paths: [
      { label: "Services", url: "/service" },
      { label: "Oil and Brake Repairs", url: "/oilAndBrakeRepairs" },
      { label: "Premium Oil and Brake Service", url: "/premiumOil" }
    ] }, void 0, !1, {
      fileName: "app/routes/premiumOil.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/premiumOil.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "mt-16 max-w-md p-6 bg-white rounded shadow-md mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("h1", { className: "text-3xl font-bold mb-4 text-center", style: { color: "#112D4E" }, children: "Premium Oil and Brake Service" }, void 0, !1, {
        fileName: "app/routes/premiumOil.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
        "img",
        {
          src: "/images/windscreen-repair.png",
          alt: "Service Image",
          className: "mx-auto mb-4 rounded-lg",
          style: { maxWidth: "150px", height: "auto" }
        },
        void 0,
        !1,
        {
          fileName: "app/routes/premiumOil.tsx",
          lineNumber: 48,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("span", { className: "font-bold", style: { color: "#112D4E" }, children: "Starting from \xA399.99*" }, void 0, !1, {
        fileName: "app/routes/premiumOil.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/premiumOil.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("p", { style: { color: "#3F72AF" }, children: "*Prices vary by location and vehicle. Add your details below to get your personalized price" }, void 0, !1, {
        fileName: "app/routes/premiumOil.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("form", { onSubmit: (e) => {
        e.preventDefault();
      }, className: "mt-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("label", { htmlFor: "registration", className: "block mb-2 text-sm ", style: { color: "#112D4E" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("span", { className: "text-navy-blue-500 font-bold", children: "Vehicle Registration:" }, void 0, !1, {
            fileName: "app/routes/premiumOil.tsx",
            lineNumber: 65,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("input", { type: "text", id: "registration", name: "registration", className: "border p-2 w-full mt-1", placeholder: "Enter Vehicle Registration", onChange: (e) => {
            setRegistration(e.target.value);
          } }, void 0, !1, {
            fileName: "app/routes/premiumOil.tsx",
            lineNumber: 66,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/premiumOil.tsx",
          lineNumber: 64,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("label", { htmlFor: "postCode", className: "block mb-2 text-sm ", style: { color: "#112D4E" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("span", { className: "text-navy-blue-500 font-bold", children: "Post Code:" }, void 0, !1, {
            fileName: "app/routes/premiumOil.tsx",
            lineNumber: 71,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("input", { type: "text", id: "postCode", name: "postCode", className: "border p-2 w-full mt-1", placeholder: "Enter Post Code", onChange: (e) => {
            setPostCode(e.target.value);
          } }, void 0, !1, {
            fileName: "app/routes/premiumOil.tsx",
            lineNumber: 72,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/premiumOil.tsx",
          lineNumber: 70,
          columnNumber: 11
        }, this),
        registration && postCode && /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("label", { className: "block mb-2 text-sm ", style: { color: "#112D4E" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("span", { className: "text-navy-blue-500 font-bold", children: "Select Repair Date:" }, void 0, !1, {
            fileName: "app/routes/premiumOil.tsx",
            lineNumber: 79,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_react_datepicker29.default, { selected: selectedDate, onChange: (date) => {
            setSelectedDate(date);
          }, dateFormat: "dd/MM/yyyy" }, void 0, !1, {
            fileName: "app/routes/premiumOil.tsx",
            lineNumber: 80,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/premiumOil.tsx",
          lineNumber: 78,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/premiumOil.tsx",
          lineNumber: 77,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
          "button",
          {
            type: "submit",
            className: `bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 ${selectedDate && registration && postCode ? "" : "opacity-50 cursor-not-allowed"}`,
            disabled: !(selectedDate && registration && postCode),
            children: "Book Now"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/premiumOil.tsx",
            lineNumber: 86,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/premiumOil.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/premiumOil.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/premiumOil.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

// app/routes/StaffLogDB.tsx
var StaffLogDB_exports = {};
__export(StaffLogDB_exports, {
  action: () => action
});
var import_node2 = require("@remix-run/node");

// app/routes/database.ts
var database_exports = {};
__export(database_exports, {
  executeQuery: () => executeQuery
});
var mysql = require("mysql2/promise"), dbConfig = {
  host: "dragon.kent.ac.uk",
  user: "comp6000_06",
  password: "oladid_",
  database: "comp6000_06"
}, pool = mysql.createPool(dbConfig);
async function executeQuery(query2, values) {
  let connection = await pool.getConnection();
  try {
    let [rows, fields] = await connection.execute(query2, values);
    return rows;
  } finally {
    connection.release();
  }
}

// app/routes/StaffLogDB.tsx
var bcrypt = require("bcryptjs"), action = async ({ request }) => {
  if (request.method === "POST") {
    let formData = new URLSearchParams(await request.text()), username = formData.get("username"), password = formData.get("password"), query2 = "SELECT * FROM comp6000_06.Staff WHERE username = ?";
    try {
      let result = await executeQuery(query2, [username]);
      if (result.length > 0) {
        let user = result[0];
        return await bcrypt.compare(password, user.password) ? (0, import_node2.json)({ message: "Login successful" }, { status: 302, headers: { Location: "/adminProfile" } }) : (0, import_node2.json)({ error: "Invalid username or password" }, { status: 401 });
      } else
        return (0, import_node2.json)({ error: "Invalid username or password" }, { status: 401 });
    } catch (error) {
      return console.error(error), (0, import_node2.json)({ error: "Database error" }, { status: 500 });
    }
  }
  return (0, import_node2.json)({});
};

// app/routes/staffLogin.tsx
var staffLogin_exports = {};
__export(staffLogin_exports, {
  default: () => Staff_login
});
var import_react29 = require("react"), import_react_router_dom7 = require("react-router-dom"), import_outline10 = require("@heroicons/react/24/outline"), import_jsx_dev_runtime31 = require("react/jsx-dev-runtime");
function Staff_login() {
  let [isVerified, setIsVerified] = (0, import_react29.useState)(!1), navigate = (0, import_react_router_dom7.useNavigate)(), handleNewManagerClick = () => {
    prompt("Please enter the password to create a new manager account:") === "kentgarage" ? setIsVerified(!0) : alert("Incorrect password!");
  };
  return (0, import_react29.useEffect)(() => {
    isVerified && navigate("/staffSignup");
  }, [isVerified, navigate]), /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "sm:mx-auto sm:w-full sm:max-w-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("h2", { className: "mt-10 text-center text-2xl font-bold leading-9 tracking-tight pt-10", style: { color: "#112D4E" }, children: "Sign in to your staff account" }, void 0, !1, {
      fileName: "app/routes/staffLogin.tsx",
      lineNumber: 37,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/staffLogin.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "mt-10 sm:mx-auto sm:w-full sm:max-w-sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("form", { className: "space-y-6", action: "#", method: "POST", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("label", { htmlFor: "username", className: "block text-sm font-medium leading-6 text-gray-900", style: { fontSize: "16px", color: "#112D4E" }, children: "Username" }, void 0, !1, {
            fileName: "app/routes/staffLogin.tsx",
            lineNumber: 46,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
            "input",
            {
              id: "username",
              name: "username",
              type: "text",
              required: !0,
              className: "block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 focus:ring-indigo-950 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6",
              style: { fontSize: "16px", borderColor: "#112D4E" }
            },
            void 0,
            !1,
            {
              fileName: "app/routes/staffLogin.tsx",
              lineNumber: 50,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/staffLogin.tsx",
            lineNumber: 49,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/staffLogin.tsx",
          lineNumber: 45,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("label", { htmlFor: "password", className: "block text-sm font-medium leading-6 text-gray-900", style: { fontSize: "16px", color: "#112D4E" }, children: "Password" }, void 0, !1, {
            fileName: "app/routes/staffLogin.tsx",
            lineNumber: 63,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("input", { id: "password", name: "password", type: "password", autoComplete: "current-password", required: !0, className: "block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 focus:ring-indigo-950 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" }, void 0, !1, {
            fileName: "app/routes/staffLogin.tsx",
            lineNumber: 67,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/staffLogin.tsx",
            lineNumber: 66,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/staffLogin.tsx",
          lineNumber: 62,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_react_router_dom7.Link, { to: "/forgot-password", className: "block text-sm font-medium leading-6 text-indigo-900", style: { fontSize: "16px", color: "#112D4E" }, children: "Forgot your password?" }, void 0, !1, {
          fileName: "app/routes/staffLogin.tsx",
          lineNumber: 73,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/staffLogin.tsx",
          lineNumber: 72,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_react_router_dom7.Link, { to: "/adminProfile", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "flex w-full justify-center rounded-full px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-950",
            style: { backgroundColor: "#112D4E", fontSize: "16px" },
            children: "Sign in"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/staffLogin.tsx",
            lineNumber: 82,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/staffLogin.tsx",
          lineNumber: 81,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/staffLogin.tsx",
          lineNumber: 79,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/staffLogin.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/staffLogin.tsx",
        lineNumber: 92,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_react_router_dom7.Link, { to: "#", onClick: handleNewManagerClick, className: "font-semibold leading-6", style: { color: "#112D4E" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_outline10.UserPlusIcon, { className: "h-6 w-6" }, void 0, !1, {
          fileName: "app/routes/staffLogin.tsx",
          lineNumber: 97,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("span", { style: { fontSize: "10px", fontWeight: "lighter" }, children: "New Manager Account" }, void 0, !1, {
          fileName: "app/routes/staffLogin.tsx",
          lineNumber: 98,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/staffLogin.tsx",
        lineNumber: 96,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/staffLogin.tsx",
        lineNumber: 95,
        columnNumber: 11
      }, this),
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("p", { className: "mt-6 text-center text-sm text-gray-500", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_react_router_dom7.Link, { to: "/login", className: "font-semibold leading-6", style: { color: "#112D4E" }, children: "Click here" }, void 0, !1, {
          fileName: "app/routes/staffLogin.tsx",
          lineNumber: 104,
          columnNumber: 13
        }, this),
        " ",
        "to go back to customer login"
      ] }, void 0, !0, {
        fileName: "app/routes/staffLogin.tsx",
        lineNumber: 103,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/staffLogin.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/staffLogin.tsx",
    lineNumber: 34,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/staffLogin.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, this);
}

// app/routes/locations.tsx
var locations_exports = {};
__export(locations_exports, {
  default: () => Locations
});
var import_jsx_dev_runtime32 = require("react/jsx-dev-runtime");
function Locations() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "py-24 sm:py-32", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "", style: { backgroundColor: "#112D4E" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "mx-auto max-w-2xl text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("h2", { className: "text-4xl font-bold tracking-tight sm:text-6xl", style: { color: "#F9F7F7" }, children: "FIND A GARAGE NEAR YOU" }, void 0, !1, {
        fileName: "app/routes/locations.tsx",
        lineNumber: 8,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/locations.tsx",
        lineNumber: 7,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "mx-auto my-16 grid p-6 max-w-lg grid-cols-1 gap-6 sm:mt-20 lg:mx-auto lg:max-w-none lg:grid-cols-2 lg:gap-8 justify-center", style: { color: "#112D4E" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "p-4 rounded-xl bg/ mx-16 ", style: { backgroundColor: "#DBE2EF" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("p", { className: "text-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("strong", { children: "Canterbury" }, void 0, !1, {
            fileName: "app/routes/locations.tsx",
            lineNumber: 16,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/routes/locations.tsx",
            lineNumber: 17,
            columnNumber: 15
          }, this),
          "University of Kent",
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/routes/locations.tsx",
            lineNumber: 19,
            columnNumber: 15
          }, this),
          "Canterbury",
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/routes/locations.tsx",
            lineNumber: 21,
            columnNumber: 15
          }, this),
          "Kent",
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/routes/locations.tsx",
            lineNumber: 23,
            columnNumber: 15
          }, this),
          "United Kingdom",
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/routes/locations.tsx",
            lineNumber: 25,
            columnNumber: 15
          }, this),
          "CT2 7NZ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/routes/locations.tsx",
            lineNumber: 27,
            columnNumber: 15
          }, this),
          "Telephone: 01227764000"
        ] }, void 0, !0, {
          fileName: "app/routes/locations.tsx",
          lineNumber: 15,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/locations.tsx",
          lineNumber: 14,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "p-4 rounded-xl bg/3 text-center mx-16 ", style: { backgroundColor: "#DBE2EF" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("p", { className: "", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("strong", { children: "Medway" }, void 0, !1, {
            fileName: "app/routes/locations.tsx",
            lineNumber: 35,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/routes/locations.tsx",
            lineNumber: 36,
            columnNumber: 15
          }, this),
          "University of Kent Medway Building",
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/routes/locations.tsx",
            lineNumber: 38,
            columnNumber: 15
          }, this),
          "Chatham",
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/routes/locations.tsx",
            lineNumber: 40,
            columnNumber: 15
          }, this),
          "Kent",
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/routes/locations.tsx",
            lineNumber: 42,
            columnNumber: 15
          }, this),
          "United Kingdom",
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/routes/locations.tsx",
            lineNumber: 44,
            columnNumber: 15
          }, this),
          "ME4 4AG",
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/routes/locations.tsx",
            lineNumber: 46,
            columnNumber: 15
          }, this),
          "Telephone: 01634888800"
        ] }, void 0, !0, {
          fileName: "app/routes/locations.tsx",
          lineNumber: 34,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/locations.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/locations.tsx",
        lineNumber: 12,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/locations.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { style: { width: "100%", overflow: "hidden", height: "15cm", position: "relative" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "p-4 rounded-xl ", style: { width: "40%", float: "left", color: "#112D4E", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor: "#DBE2EF", marginTop: "5cm" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("h3", { className: "font-bold tracking-tight sm:text-2xl", style: { margin: "0" }, children: "Contact Customer Support" }, void 0, !1, {
          fileName: "app/routes/locations.tsx",
          lineNumber: 55,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("p", { children: "For assistance, our customer support is available during the following hours:" }, void 0, !1, {
          fileName: "app/routes/locations.tsx",
          lineNumber: 56,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("ul", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("li", { children: "Monday to Friday: 9:00 AM - 5:00 PM" }, void 0, !1, {
            fileName: "app/routes/locations.tsx",
            lineNumber: 58,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("li", { children: "Saturday: 10:00 AM - 2:00 PM" }, void 0, !1, {
            fileName: "app/routes/locations.tsx",
            lineNumber: 59,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("li", { children: "Sunday: Closed" }, void 0, !1, {
            fileName: "app/routes/locations.tsx",
            lineNumber: 60,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/locations.tsx",
          lineNumber: 57,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/locations.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { style: { width: "60%", float: "right", zIndex: "0" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("iframe", { src: "https://www.google.com/maps/d/embed?mid=11K27R2MuAmlmYPct6A796vw0QnFpgLU&ehbc=2E312F", width: "60%", height: "100%", style: { border: "1px", position: "absolute", top: "0", right: "0" } }, void 0, !1, {
        fileName: "app/routes/locations.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/locations.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/locations.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/locations.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/serviceDB.tsx
var serviceDB_exports = {};
__export(serviceDB_exports, {
  action: () => action2
});
var import_node3 = require("@remix-run/node");
var action2 = async ({ request, params }) => {
  if (request.method === "GET") {
    let registrationParam = params.registration;
    if (!registrationParam)
      return (0, import_node3.json)({ error: "Registration number not provided" }, { status: 400 });
    try {
      let result = await executeQuery("SELECT * FROM comp6000_06.Vehicle WHERE registration_number = ?", [registrationParam]);
      return result.length > 0 ? (0, import_node3.json)({ vehicleDetails: result[0] }) : (0, import_node3.json)({ error: "Vehicle not found" }, { status: 404 });
    } catch (error) {
      return console.error(error), (0, import_node3.json)({ error: "Database error" }, { status: 500 });
    }
  }
  return (0, import_node3.json)({ error: "Invalid request method" }, { status: 400 });
};

// app/routes/staffUpDB.tsx
var staffUpDB_exports = {};
__export(staffUpDB_exports, {
  action: () => action3
});
var import_node4 = require("@remix-run/node");
var bycript2 = require("bcryptjs"), action3 = async ({ request }) => {
  if (request.method === "POST") {
    let formData = new URLSearchParams(await request.text()), username = formData.get("username"), first_Name = formData.get("firstName"), last_Name = formData.get("lastName"), location = formData.get("centre"), password = await bycript2.hash(formData.get("password"), 10), values = [first_Name, last_Name, username, password, location], query2 = ` INSERT INTO comp6000_06.Staff (first_name, last_name, username,password, location)
        VALUES (?, ?, ?, ?, ?)`;
    try {
      return (await executeQuery(query2, values)).affectedRows === 1 ? (0, import_node4.json)({ message: "Registration successful" }, { status: 302, headers: { Location: "/staff_login" } }) : (0, import_node4.json)({ error: "Registration failed" }, { status: 400 });
    } catch (error) {
      return console.log(error), (0, import_node4.json)({ error: "Database error" }, { status: 500 });
    }
  }
  return (0, import_node4.json)({});
};

// app/routes/basicMOT.tsx
var basicMOT_exports = {};
__export(basicMOT_exports, {
  default: () => InterimService5
});
var import_react30 = require("react"), import_react_datepicker31 = __toESM(require("react-datepicker"));
var import_jsx_dev_runtime33 = require("react/jsx-dev-runtime");
function InterimService5() {
  let [registration, setRegistration] = (0, import_react30.useState)(""), [postCode, setPostCode] = (0, import_react30.useState)(""), [selectedDate, setSelectedDate] = (0, import_react30.useState)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "flex items-center justify-center h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "fixed inset-x-0 px-6 py-3 flex flex-row justify-between mx-auto w-full top-28 pl-18", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(Breadcrumbs, { paths: [
      { label: "Services", url: "/service" },
      { label: "MOT Services", url: "/mot" },
      { label: "MOT", url: "/basicMOT" }
    ] }, void 0, !1, {
      fileName: "app/routes/basicMOT.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/basicMOT.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "mt-16 max-w-md p-6 bg-white rounded shadow-md mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("h1", { className: "text-3xl font-bold mb-4 text-center", style: { color: "#112D4E" }, children: "MOT Testing Service" }, void 0, !1, {
        fileName: "app/routes/basicMOT.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
        "img",
        {
          src: "/images/interim-service.png",
          alt: "Service Image",
          className: "mx-auto mb-4 rounded-lg",
          style: { maxWidth: "150px", height: "auto" }
        },
        void 0,
        !1,
        {
          fileName: "app/routes/basicMOT.tsx",
          lineNumber: 47,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("span", { className: "font-bold", children: "From \xA349.99" }, void 0, !1, {
        fileName: "app/routes/basicMOT.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/basicMOT.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("p", { style: { color: "#3F72AF" }, children: "*Prices may vary by location and vehicle. Add your details below to get your personalized price" }, void 0, !1, {
        fileName: "app/routes/basicMOT.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("form", { onSubmit: (e) => {
        e.preventDefault();
      }, className: "mt-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("label", { htmlFor: "registration", className: "block mb-2 text-sm text-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("span", { className: "text-navy-blue-500 font-bold", children: "Registration:" }, void 0, !1, {
            fileName: "app/routes/basicMOT.tsx",
            lineNumber: 64,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("input", { type: "text", id: "registration", name: "registration", className: "border p-2 w-full mt-1", placeholder: "Enter Registration", onChange: (e) => {
            setRegistration(e.target.value);
          } }, void 0, !1, {
            fileName: "app/routes/basicMOT.tsx",
            lineNumber: 65,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/basicMOT.tsx",
          lineNumber: 63,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("label", { htmlFor: "postCode", className: "block mb-2 text-sm text-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("span", { className: "text-navy-blue-500 font-bold", children: "Post Code:" }, void 0, !1, {
            fileName: "app/routes/basicMOT.tsx",
            lineNumber: 70,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("input", { type: "text", id: "postCode", name: "postCode", className: "border p-2 w-full mt-1", placeholder: "Enter Post Code", onChange: (e) => {
            setPostCode(e.target.value);
          } }, void 0, !1, {
            fileName: "app/routes/basicMOT.tsx",
            lineNumber: 71,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/basicMOT.tsx",
          lineNumber: 69,
          columnNumber: 11
        }, this),
        registration && postCode && /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("label", { className: "block mb-2 text-sm text-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("span", { className: "text-navy-blue-500 font-bold", children: "Select Date:" }, void 0, !1, {
            fileName: "app/routes/basicMOT.tsx",
            lineNumber: 78,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react_datepicker31.default, { selected: selectedDate, onChange: (date) => {
            setSelectedDate(date);
          }, dateFormat: "dd/MM/yyyy" }, void 0, !1, {
            fileName: "app/routes/basicMOT.tsx",
            lineNumber: 79,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/basicMOT.tsx",
          lineNumber: 77,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/basicMOT.tsx",
          lineNumber: 76,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
          "button",
          {
            type: "submit",
            className: `bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 ${selectedDate && registration && postCode ? "" : "opacity-50 cursor-not-allowed"}`,
            disabled: !(selectedDate && registration && postCode),
            children: "Book Now"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/basicMOT.tsx",
            lineNumber: 85,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/basicMOT.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/basicMOT.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/basicMOT.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}

// app/routes/forgotDb.tsx
var forgotDb_exports = {};
__export(forgotDb_exports, {
  action: () => action4
});
var import_node5 = require("@remix-run/node");
var bcrypt2 = require("bcryptjs"), action4 = async ({ request }) => {
  if (request.method === "POST")
    try {
      let formData = new URLSearchParams(await request.text()), email = formData.get("email");
      if ((await executeQuery(`
        SELECT email FROM comp6000_06.Customer WHERE email = ?;
      `, [email])).length === 1) {
        let newPassword = formData.get("newPassword"), hashedPassword = await bcrypt2.hash(newPassword, 10);
        return (await executeQuery(`
          UPDATE comp6000_06.Customer
          SET password = ?
          WHERE email = ?;
        `, [hashedPassword, email])).affectedRows === 1 ? (0, import_node5.json)({ message: "Password reset successful" }, { status: 200 }) : (0, import_node5.json)({ error: "Password reset failed" }, { status: 500 });
      } else
        return (0, import_node5.json)({ error: "Email not found" }, { status: 404 });
    } catch (error) {
      return console.error(error), (0, import_node5.json)({ error: "An unexpected error occurred" }, { status: 500 });
    }
  return (0, import_node5.json)({});
};

// app/routes/contact.tsx
var contact_exports = {};
__export(contact_exports, {
  default: () => Contact
});
var import_react31 = require("react"), import_browser = __toESM(require("@emailjs/browser")), import_solid2 = require("@heroicons/react/20/solid"), import_react32 = require("@headlessui/react"), import_outline11 = require("@heroicons/react/24/outline"), import_jsx_dev_runtime34 = require("react/jsx-dev-runtime");
function Contact() {
  let [formStatus, setFormStatus] = (0, import_react31.useState)({
    submitted: !1,
    error: null
  }), [show, setShow] = (0, import_react31.useState)(!0), sendEmail = async (e) => {
    e.preventDefault();
    let form = e.currentTarget, formData = new FormData(form);
    try {
      let result = await import_browser.default.sendForm("service_1r5awa7", "template_36yib84", form, "ifIYm02lZT5rdQsmD");
      console.log(result), form.reset(), setFormStatus({
        submitted: !0,
        error: null
      });
    } catch (error) {
      console.error(error), setFormStatus({
        submitted: !1,
        error: "An error occurred. Please try again."
      });
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "sm:mx-auto sm:w-full sm:max-w-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("h2", { className: "mt-10 text-center text-2xl font-bold leading-9 tracking-tight pt-10", style: { color: "#112D4E" }, children: "Contact Us" }, void 0, !1, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 55,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 53,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { "aria-live": "assertive", className: "pointer-events-none fixed inset-0 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_react32.Transition, { show: formStatus.submitted && show, enter: "transform ease-out duration-300 transition", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "transition ease-in duration-100", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "flex items-start", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_outline11.CheckCircleIcon, { className: "h-5 w-5 text-green-400", "aria-hidden": "true" }, void 0, !1, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 67,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 66,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "ml-3 w-30 flex-1 pt-0.5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("p", { className: "text-sm font-medium text-gray-900", children: "Thank you!" }, void 0, !1, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 70,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("p", { className: "mt-1 text-sm text-gray-500", children: "We will get back to you shortly." }, void 0, !1, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 71,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 69,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "ml-4 flex flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
        "button",
        {
          type: "button",
          className: "inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
          onClick: () => {
            setShow(!1), setFormStatus({ submitted: !1, error: null });
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("span", { className: "sr-only", children: "Close" }, void 0, !1, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 82,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_solid2.XMarkIcon, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, !1, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 83,
              columnNumber: 23
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/contact.tsx",
          lineNumber: 74,
          columnNumber: 21
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 73,
        columnNumber: 19
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 65,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 64,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 63,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 62,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 61,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "mt-10 sm:mx-auto sm:w-full sm:max-w-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("form", { className: "contact_form space-y-6", onSubmit: sendEmail, action: "/contact", method: "POST", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("label", { htmlFor: "firstName", className: "block text-sm font-medium leading-6 text-gray-900", style: { fontSize: "16px", color: "#112D4E" }, children: "First Name" }, void 0, !1, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 97,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
          "input",
          {
            id: "firstName",
            name: "firstName_from",
            type: "text",
            required: !0,
            className: "block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6",
            style: { fontSize: "16px", borderColor: "#112D4E" }
          },
          void 0,
          !1,
          {
            fileName: "app/routes/contact.tsx",
            lineNumber: 101,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 100,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 96,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("label", { htmlFor: "lastName", className: "block text-sm font-medium leading-6 text-gray-900", style: { fontSize: "16px", color: "#112D4E" }, children: "Last Name" }, void 0, !1, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 114,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
          "input",
          {
            id: "lastName",
            name: "lastName_from",
            type: "text",
            required: !0,
            className: "block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6",
            style: { fontSize: "16px", borderColor: "#112D4E" }
          },
          void 0,
          !1,
          {
            fileName: "app/routes/contact.tsx",
            lineNumber: 118,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 117,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 113,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("label", { htmlFor: "vehicleRegistration", className: "block text-sm font-medium leading-6 text-gray-900", style: { fontSize: "16px", color: "#112D4E" }, children: "Vehicle Registration" }, void 0, !1, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 131,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
          "input",
          {
            id: "vehicleRegistration",
            name: "vehicleRegistration",
            type: "text",
            required: !0,
            className: "block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6",
            style: { fontSize: "16px", borderColor: "#112D4E" }
          },
          void 0,
          !1,
          {
            fileName: "app/routes/contact.tsx",
            lineNumber: 135,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 134,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 130,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("label", { htmlFor: "phone", className: "block text-sm font-medium leading-6 text-gray-900", style: { fontSize: "16px", color: "#112D4E" }, children: "Phone Number" }, void 0, !1, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 148,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
          "input",
          {
            id: "phone",
            name: "phone_from",
            type: "text",
            required: !0,
            className: "block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6",
            style: { fontSize: "16px", borderColor: "#112D4E" }
          },
          void 0,
          !1,
          {
            fileName: "app/routes/contact.tsx",
            lineNumber: 152,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 151,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 147,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium leading-6 text-gray-900", style: { fontSize: "16px", color: "#112D4E" }, children: "Email address" }, void 0, !1, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 165,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
          "input",
          {
            id: "email",
            name: "email_from",
            type: "email",
            autoComplete: "email",
            required: !0,
            className: "block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6",
            style: { fontSize: "16px", borderColor: "#112D4E" }
          },
          void 0,
          !1,
          {
            fileName: "app/routes/contact.tsx",
            lineNumber: 169,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 168,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 164,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("fieldset", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("legend", { children: "Preferred Contact Method" }, void 0, !1, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 183,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("label", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("input", { type: "radio", name: "contactMethod", value: "email", required: !0 }, void 0, !1, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 185,
            columnNumber: 17
          }, this),
          " Email"
        ] }, void 0, !0, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 184,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 187,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("label", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("input", { type: "radio", name: "contactMethod", value: "phone", required: !0 }, void 0, !1, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 189,
            columnNumber: 17
          }, this),
          " Phone"
        ] }, void 0, !0, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 188,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 182,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("label", { htmlFor: "centre", className: "block text-sm font-medium leading-6 text-gray-900", style: { fontSize: "16px", color: "#112D4E" }, children: "Centre" }, void 0, !1, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 195,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("select", { id: "centre", name: "centre", required: !0, className: "block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6", style: { fontSize: "16px", borderColor: "#112D4E" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("option", { value: "Canterbury", children: "Canterbury" }, void 0, !1, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 200,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("option", { value: "Medway", children: "Medway" }, void 0, !1, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 201,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 199,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 194,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("label", { htmlFor: "message", className: "block text-sm font-medium leading-6 text-gray-900", style: { fontSize: "16px", color: "#112D4E" }, children: "Your Message" }, void 0, !1, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 206,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("textarea", { style: { borderColor: "#112D4E", fontSize: "16px" }, id: "message", name: "message", className: "w-full", required: !0 }, void 0, !1, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 209,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
        "button",
        {
          type: "submit",
          className: "flex w-full justify-center rounded-full px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
          style: { backgroundColor: "#112D4E", fontSize: "16px" },
          children: "Submit"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/contact.tsx",
          lineNumber: 213,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 212,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 94,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 93,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 51,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}

// app/routes/loginDB.tsx
var loginDB_exports = {};
__export(loginDB_exports, {
  action: () => action5
});
var import_node6 = require("@remix-run/node");
var import_bcryptjs = __toESM(require("bcryptjs")), action5 = async ({ request }) => {
  if (request.method === "GET" && request.headers.get("Cookie"))
    return (0, import_node6.json)(
      { message: "User already logged in" },
      { status: 302, headers: { Location: "/profile" } }
    );
  if (request.method === "POST") {
    let formData = new URLSearchParams(await request.text()), username = formData.get("username"), password = formData.get("password"), query2 = "SELECT * FROM comp6000_06.Customer WHERE email = ?";
    try {
      let result = await executeQuery(query2, [username]);
      if (result.length > 0) {
        let user = result[0];
        if (password !== null && user.password !== null ? import_bcryptjs.default.compare(password, user.password) : !1) {
          let setCookieHeader = `email=${encodeURIComponent(
            user.email
          )}; HttpOnly:false; Path=/; Max-Age=3600;`;
          return (0, import_node6.json)(
            { message: "Login successful" },
            {
              status: 302,
              headers: {
                Location: "/profile",
                "Set-Cookie": setCookieHeader
              }
            }
          );
        } else
          return (0, import_node6.json)(
            { error: "Invalid username or password" },
            { status: 401 }
          );
      } else
        return (0, import_node6.json)(
          { error: "Invalid username or password" },
          { status: 401 }
        );
    } catch (error) {
      return console.error(error), (0, import_node6.json)({ error: "Database error" }, { status: 500 });
    }
  }
  return (0, import_node6.json)({});
};

// app/routes/profile.tsx
var profile_exports = {};
__export(profile_exports, {
  default: () => Profile
});
var import_react33 = require("react"), import_outline12 = require("@heroicons/react/24/outline"), import_react34 = require("@remix-run/react"), import_js_cookie = __toESM(require("js-cookie"));
var import_jsx_dev_runtime35 = require("react/jsx-dev-runtime"), nav3 = [
  { name: "Personal Information", href: "#", icon: import_outline12.UserCircleIcon },
  { name: "Contact Information", href: "#", icon: import_outline12.FingerPrintIcon },
  { name: "Car Details", href: "#", icon: import_outline12.BellIcon },
  { name: "Bookings", href: "#", icon: import_outline12.CubeIcon },
  { name: "Communication Preferences", href: "#", icon: import_outline12.CreditCardIcon }
];
function classNames3(...classes) {
  return classes.filter(Boolean).join(" ");
}
var emailCookie = import_js_cookie.default.get("email"), query = `SELECT firstName, lastName, phoneNumber, address
FROM comp6000_06.Customer
WHERE email = '${emailCookie}';`;
function Profile() {
  let [currentSection, setCurrentSection] = (0, import_react33.useState)("Personal Information"), [userEmail, setUserEmail] = (0, import_react33.useState)(""), handleSectionChange = (sectionName) => {
    setCurrentSection(sectionName);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_jsx_dev_runtime35.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" }, void 0, !1, {
      fileName: "app/routes/profile.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "mx-auto max-w-7xl pt-16 lg:flex lg:gap-x-16 lg:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("aside", { className: "flex overflow-x-auto border-b border-gray-900/5 py-4 lg:block lg:w-64 lg:flex-none lg:border-0 lg:py-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("nav", { className: "flex-none px-4 sm:px-6 lg:px-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("ul", { role: "list", className: "flex gap-x-5 gap-y-6 lg:flex-col", children: nav3.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
        "a",
        {
          href: item.href,
          className: classNames3(currentSection === item.name ? "bg-gray-50 text-indigo-900" : "text-gray-700 hover:text-indigo-900 hover:bg-gray-50", "group flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm leading-6 font-semibold"),
          onClick: () => handleSectionChange(item.name),
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(item.icon, { className: classNames3(currentSection === item.name ? "text-indigo-900" : "text-indigo-900 group-hover:text-indigo-900", "h-6 w-6 shrink-0"), "aria-hidden": "true" }, void 0, !1, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 66,
              columnNumber: 21
            }, this),
            item.name
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/profile.tsx",
          lineNumber: 61,
          columnNumber: 19
        },
        this
      ) }, item.name, !1, {
        fileName: "app/routes/profile.tsx",
        lineNumber: 60,
        columnNumber: 17
      }, this)) }, void 0, !1, {
        fileName: "app/routes/profile.tsx",
        lineNumber: 58,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/profile.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/profile.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("main", { className: "px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none", children: [
        currentSection === "Personal Information" && /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("h2", { className: "text-3xl font-semibold leading-7 text-gray-900", children: "Profile" }, void 0, !1, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 80,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("dl", { className: "mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Full name" }, void 0, !1, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 83,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("dd", { className: "mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "text-gray-900" }, void 0, !1, {
                  fileName: "app/routes/profile.tsx",
                  lineNumber: 85,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("button", { type: "button", className: "font-semibold text-indigo-900 hover:text-indigo-900", children: "Update" }, void 0, !1, {
                  fileName: "app/routes/profile.tsx",
                  lineNumber: 86,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 84,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 82,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Email address" }, void 0, !1, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 92,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("dd", { className: "mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "text-gray-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("input", { type: "text", value: emailCookie, readOnly: !0, className: "bg-gray-200" }, void 0, !1, {
                  fileName: "app/routes/profile.tsx",
                  lineNumber: 95,
                  columnNumber: 23
                }, this) }, void 0, !1, {
                  fileName: "app/routes/profile.tsx",
                  lineNumber: 94,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("button", { type: "button", onClick: () => console.log(emailCookie), className: "font-semibold text-indigo-900 hover:text-indigo-900", children: "Update" }, void 0, !1, {
                  fileName: "app/routes/profile.tsx",
                  lineNumber: 97,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 93,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 91,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Password" }, void 0, !1, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 103,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("dd", { className: "mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "text-gray-900" }, void 0, !1, {
                  fileName: "app/routes/profile.tsx",
                  lineNumber: 105,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("button", { type: "button", className: "font-semibold text-indigo-900 hover:text-indigo-900", children: "Update" }, void 0, !1, {
                  fileName: "app/routes/profile.tsx",
                  lineNumber: 106,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 104,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 102,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 81,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/profile.tsx",
          lineNumber: 79,
          columnNumber: 15
        }, this),
        currentSection === "Contact Information" && /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("h2", { className: "text-3xl font-semibold leading-7 text-gray-900", children: "Contact Information" }, void 0, !1, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 118,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("dl", { className: "mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Phone Number" }, void 0, !1, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 121,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("dd", { className: "mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "text-gray-900" }, void 0, !1, {
                  fileName: "app/routes/profile.tsx",
                  lineNumber: 123,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("button", { type: "button", className: "font-semibold text-indigo-900 hover:text-indigo-900", children: "Update" }, void 0, !1, {
                  fileName: "app/routes/profile.tsx",
                  lineNumber: 124,
                  columnNumber: 11
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 122,
                columnNumber: 9
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 120,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Address" }, void 0, !1, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 130,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("dd", { className: "mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "text-gray-900" }, void 0, !1, {
                  fileName: "app/routes/profile.tsx",
                  lineNumber: 132,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("button", { type: "button", className: "font-semibold text-indigo-900 hover:text-indigo-900", children: "Update" }, void 0, !1, {
                  fileName: "app/routes/profile.tsx",
                  lineNumber: 133,
                  columnNumber: 11
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 131,
                columnNumber: 9
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 129,
              columnNumber: 7
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 119,
            columnNumber: 5
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/profile.tsx",
          lineNumber: 117,
          columnNumber: 13
        }, this),
        currentSection === "Car Details" && /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("h2", { className: "text-3xl font-semibold leading-7 text-gray-900", children: "Car Details" }, void 0, !1, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 147,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("dl", { className: "mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Registered Cars" }, void 0, !1, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 151,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("dd", { className: "mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("ul", { className: "text-gray-900", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("li", { children: "Car 1" }, void 0, !1, {
                  fileName: "app/routes/profile.tsx",
                  lineNumber: 154,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("li", { children: "Car 2" }, void 0, !1, {
                  fileName: "app/routes/profile.tsx",
                  lineNumber: 155,
                  columnNumber: 25
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 153,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("button", { type: "button", className: "font-semibold text-indigo-900 hover:text-indigo-900", children: "Add Car" }, void 0, !1, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 157,
                columnNumber: 23
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 152,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 150,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 149,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/profile.tsx",
          lineNumber: 146,
          columnNumber: 15
        }, this),
        currentSection === "Bookings" && /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("h2", { className: "text-3xl font-semibold leading-7 text-gray-900", children: "Bookings" }, void 0, !1, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 169,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("dl", { className: "mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Upcoming Appointments" }, void 0, !1, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 173,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("dd", { className: "mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("ul", { className: "text-gray-900", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("li", { children: "Appointment 1" }, void 0, !1, {
                  fileName: "app/routes/profile.tsx",
                  lineNumber: 176,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("li", { children: "Appointment 2" }, void 0, !1, {
                  fileName: "app/routes/profile.tsx",
                  lineNumber: 177,
                  columnNumber: 25
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 175,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("button", { type: "button", className: "font-semibold text-indigo-900 hover:text-indigo-900" }, void 0, !1, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 179,
                columnNumber: 23
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 174,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 172,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 171,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("dl", { className: "mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Past Appointments" }, void 0, !1, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 187,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("dd", { className: "mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("ul", { className: "text-gray-900", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("li", { children: "Appointment 1" }, void 0, !1, {
                  fileName: "app/routes/profile.tsx",
                  lineNumber: 190,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("li", { children: "Appointment 2" }, void 0, !1, {
                  fileName: "app/routes/profile.tsx",
                  lineNumber: 191,
                  columnNumber: 25
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 189,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("button", { type: "button", className: "font-semibold text-indigo-900 hover:text-indigo-900" }, void 0, !1, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 193,
                columnNumber: 23
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 188,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 186,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 185,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/profile.tsx",
          lineNumber: 168,
          columnNumber: 15
        }, this),
        currentSection === "Communication Preferences" && /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("h2", { className: "text-3xl font-semibold leading-7 text-gray-900", children: "Communication Preferences" }, void 0, !1, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 206,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("dl", { className: "mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Notification Preferences" }, void 0, !1, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 209,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("dd", { className: "mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "text-gray-900" }, void 0, !1, {
                  fileName: "app/routes/profile.tsx",
                  lineNumber: 211,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("button", { type: "button", className: "font-semibold text-indigo-900 hover:text-indigo-900", children: "Update" }, void 0, !1, {
                  fileName: "app/routes/profile.tsx",
                  lineNumber: 212,
                  columnNumber: 11
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 210,
                columnNumber: 9
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 208,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Notifications for" }, void 0, !1, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 218,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("dd", { className: "mt-1 flex flex-col sm:mt-0 sm:flex-auto", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "flex items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("input", { type: "checkbox", id: "appointment", name: "appointment" }, void 0, !1, {
                    fileName: "app/routes/profile.tsx",
                    lineNumber: 221,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("label", { htmlFor: "appointment", className: "ml-2 text-gray-900", children: "Appointment" }, void 0, !1, {
                    fileName: "app/routes/profile.tsx",
                    lineNumber: 222,
                    columnNumber: 13
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/profile.tsx",
                  lineNumber: 220,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "flex items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("input", { type: "checkbox", id: "reminders", name: "reminders" }, void 0, !1, {
                    fileName: "app/routes/profile.tsx",
                    lineNumber: 225,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("label", { htmlFor: "reminders", className: "ml-2 text-gray-900", children: "Reminders" }, void 0, !1, {
                    fileName: "app/routes/profile.tsx",
                    lineNumber: 226,
                    columnNumber: 13
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/profile.tsx",
                  lineNumber: 224,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "flex items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("input", { type: "checkbox", id: "promotions", name: "promotions" }, void 0, !1, {
                    fileName: "app/routes/profile.tsx",
                    lineNumber: 229,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("label", { htmlFor: "promotions", className: "ml-2 text-gray-900", children: "Promotions" }, void 0, !1, {
                    fileName: "app/routes/profile.tsx",
                    lineNumber: 230,
                    columnNumber: 13
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/profile.tsx",
                  lineNumber: 228,
                  columnNumber: 11
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 219,
                columnNumber: 9
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 217,
              columnNumber: 7
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 207,
            columnNumber: 5
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/profile.tsx",
          lineNumber: 205,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { style: { position: "fixed", bottom: "10px", left: "10px", cursor: "pointer" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_react34.Link, { to: "/login", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_outline12.ArrowLeftOnRectangleIcon, {}, void 0, !1, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 240,
            columnNumber: 9
          }, this),
          "Logout"
        ] }, void 0, !0, {
          fileName: "app/routes/profile.tsx",
          lineNumber: 239,
          columnNumber: 7
        }, this) }, void 0, !1, {
          fileName: "app/routes/profile.tsx",
          lineNumber: 238,
          columnNumber: 14
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/profile.tsx",
        lineNumber: 76,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/profile.tsx",
        lineNumber: 75,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/profile.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/profile.tsx",
    lineNumber: 52,
    columnNumber: 5
  }, this);
}

// app/routes/service.tsx
var service_exports = {};
__export(service_exports, {
  default: () => ServicesPage
});
var import_react35 = require("react"), import_react_router_dom8 = require("react-router-dom"), import_react36 = require("@remix-run/react"), import_jsx_dev_runtime36 = require("react/jsx-dev-runtime"), servicesData = [
  { id: 1, name: "Car Servicing", description: "Ensure the optimal performance and longevity of your vehicle with our comprehensive car servicing. Our skilled technicians perform thorough maintenance to keep your car in top condition." },
  { id: 2, name: "MOT", description: "Our MOT tests guarantee that your vehicle meets the necessary safety and environmental standards. Stay compliant and roadworthy with our reliable MOT services." },
  { id: 3, name: "Tires Fix And Replacements", description: "From tire repairs to replacements, our service ensures your vehicle's safety and performance on the road. We address issues promptly and provide quality tire solutions." },
  { id: 4, name: "Windscreen Repairs", description: "Trust us for effective windscreen repairs. Our technicians address chips and cracks, ensuring clear visibility and maintaining the structural integrity of your vehicle." },
  { id: 5, name: "Oil and Brake Repairs", description: "Keep your vehicle's essential systems in check with our oil and brake repair services. We address issues promptly, ensuring smooth operation and safety on the road." },
  { id: 6, name: "Battery Change", description: "When it's time for a new battery, rely on our expert technicians for a seamless replacement. We provide reliable battery change services to keep your vehicle powered." },
  { id: 7, name: "Diagnostic Check", description: "Our comprehensive diagnostic checks identify potential issues within your vehicle's systems. Stay proactive in addressing problems and ensure peak performance." },
  { id: 8, name: "Engine TuneUps", description: "Enhance your vehicle's performance with our engine tune-up services. Our skilled technicians optimize engine components to improve efficiency and reliability." }
];
function ServicesPage() {
  let location = (0, import_react36.useLocation)(), [postcode, setPostcode] = (0, import_react35.useState)(""), [registration, setRegistration] = (0, import_react35.useState)("");
  return (0, import_react35.useEffect)(() => {
    let searchParams = new URLSearchParams(location.search), postcodeParam = searchParams.get("postcode"), registrationParam = searchParams.get("registration");
    setPostcode(postcodeParam || ""), setRegistration(registrationParam || "");
  }, [location.search]), /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "py-24 sm:py-32 mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "mx-auto max-w-2xl text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("h1", { className: "mt-2 text-4xl font-bold tracking-tight sm:text-6xl", style: { color: "#112D4E" }, children: "Services" }, void 0, !1, {
      fileName: "app/routes/service.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/service.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "mx-auto my-16 grid p-6 max-w-lg grid-cols-1 gap-6 sm:mt-20 lg:mx-auto lg:max-w-none lg:grid-cols-2 lg:gap-8 justify-center", style: { color: "#112D4E" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "p-6 rounded-xl bg/3 text-center", style: { backgroundColor: "#DBE2EF" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("h2", { className: "text-xl font-bold mb-2", children: "YOUR DETAILS:" }, void 0, !1, {
        fileName: "app/routes/service.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("p", { className: "", style: { color: "#3F72AF" }, children: [
        "Postcode: ",
        postcode
      ] }, void 0, !0, {
        fileName: "app/routes/service.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("p", { className: "", style: { color: "#3F72AF" }, children: [
        "Registration: ",
        registration
      ] }, void 0, !0, {
        fileName: "app/routes/service.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/service.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/service.tsx",
      lineNumber: 44,
      columnNumber: 8
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "grid-container display-grid text-center p-4 grid pl-4 pr-4 md:pl-8 md:pr-8 pt-20", style: { textAlign: "center", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", color: "#112D4E" }, children: [
      servicesData.map(
        (service) => /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "p-4 flex flex-col items-center mt-4 service-card", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react_router_dom8.Link, { to: `/${service.name.replace(/\s+/g, "")}`, className: "hover flex flex-col items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("p", { className: "font-bold text-lg mt-2", children: service.name }, void 0, !1, {
            fileName: "app/routes/service.tsx",
            lineNumber: 62,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("p", { className: "font-8 text-sm", children: service.description }, void 0, !1, {
            fileName: "app/routes/service.tsx",
            lineNumber: 63,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/service.tsx",
          lineNumber: 60,
          columnNumber: 13
        }, this) }, service.id, !1, {
          fileName: "app/routes/service.tsx",
          lineNumber: 59,
          columnNumber: 9
        }, this)
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("style", { children: `
  .hover:hover {
    color: #3F72AF !important;
    text-transform: uppercase;
    background: #ffffff;
    padding: 20px;
    border: 4px solid #3F72AF !important;
    border-radius: 6px;
    display: inline-block;
    transition: all 0.3s ease 0s;
  }
  .service-card {
    border: 2px solid #112D4E;
    transition: all 0.3s ease 0s;
  }
  .service-icon {
    width: 70px;
    height: 70px;
  }
` }, void 0, !1, {
        fileName: "app/routes/service.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/service.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "container mx-auto p-8 justify-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("h2", { className: "mt-5 text-5xl font-bold tracking-tight sm:text-5xl text-center justify-center", style: { color: "#112D4E" }, children: "Environmental Initiatives" }, void 0, !1, {
        fileName: "app/routes/service.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("p", { className: "mt-3 mx-auto font-semibold max-w-2xl text-center", style: { color: "#5F6F52", textAlign: "center" }, children: "We are committed to minimizing our environmental impact and contributing to a sustainable future. Our eco-friendly practices and environmentally conscious products aim to provide not only exceptional service but also a greener and cleaner automotive experience." }, void 0, !1, {
        fileName: "app/routes/service.tsx",
        lineNumber: 97,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("h3", { className: "font-bold text-2xl mt-4", style: { color: "#3A4D39" }, children: "Our Practices" }, void 0, !1, {
        fileName: "app/routes/service.tsx",
        lineNumber: 101,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("ul", { className: "bullet mt-2", style: { color: "#5F6F52" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("span", { className: "font-bold", children: "Recycling Program:" }, void 0, !1, {
            fileName: "app/routes/service.tsx",
            lineNumber: 105,
            columnNumber: 15
          }, this),
          " We actively participate in recycling programs to responsibly manage and reduce waste generated during our operations."
        ] }, void 0, !0, {
          fileName: "app/routes/service.tsx",
          lineNumber: 105,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("span", { className: "font-bold", children: "Energy Efficiency:" }, void 0, !1, {
            fileName: "app/routes/service.tsx",
            lineNumber: 106,
            columnNumber: 15
          }, this),
          " Our facility is equipped with energy-efficient systems and practices to minimize energy consumption."
        ] }, void 0, !0, {
          fileName: "app/routes/service.tsx",
          lineNumber: 106,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("span", { className: "font-bold", children: "Wate Conservation:" }, void 0, !1, {
            fileName: "app/routes/service.tsx",
            lineNumber: 107,
            columnNumber: 15
          }, this),
          " We implement water-saving measures to reduce consumption and promote responsible water usage."
        ] }, void 0, !0, {
          fileName: "app/routes/service.tsx",
          lineNumber: 107,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/service.tsx",
        lineNumber: 104,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "mt-4", style: { borderTop: "1px solid #3A4D39" } }, void 0, !1, {
        fileName: "app/routes/service.tsx",
        lineNumber: 110,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("h4", { className: "font-bold text-2xl mt-4", style: { color: "#3A4D39" }, children: "Eco-Friendly Products" }, void 0, !1, {
        fileName: "app/routes/service.tsx",
        lineNumber: 112,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("ul", { className: "bullet mt-2", style: { color: "#5F6F52" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("span", { className: "font-bold", children: "Biodegradble Cleaning Products:" }, void 0, !1, {
            fileName: "app/routes/service.tsx",
            lineNumber: 116,
            columnNumber: 15
          }, this),
          " We use biodegradable and environmentally friendly cleaning products to minimize harm to the environment."
        ] }, void 0, !0, {
          fileName: "app/routes/service.tsx",
          lineNumber: 116,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("span", { className: "font-bold", children: "Green Lubricants and Fluids:" }, void 0, !1, {
            fileName: "app/routes/service.tsx",
            lineNumber: 117,
            columnNumber: 15
          }, this),
          " Our commitment to sustainability extends to the products we use, including eco-friendly lubricants and fluids."
        ] }, void 0, !0, {
          fileName: "app/routes/service.tsx",
          lineNumber: 117,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/service.tsx",
        lineNumber: 115,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "mt-4", style: { borderTop: "1px solid #3A4D39" } }, void 0, !1, {
        fileName: "app/routes/service.tsx",
        lineNumber: 120,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("h5", { className: "font-bold text-2xl mt-4", style: { color: "#3A4D39" }, children: "Going Green Together" }, void 0, !1, {
        fileName: "app/routes/service.tsx",
        lineNumber: 122,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("p", { className: "mt-2 mx-auto", style: { color: "#5F6F52" }, children: "By choosing Us, you're not just investing in premium automotive services, you're supporting a business dedicated to making environmentally conscious choices. Join us in our commitment to a greener future." }, void 0, !1, {
        fileName: "app/routes/service.tsx",
        lineNumber: 125,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("style", { children: `
            ul.bullet{
           list-style-type: circle;
            }
         ` }, void 0, !1, {
        fileName: "app/routes/service.tsx",
        lineNumber: 128,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/service.tsx",
      lineNumber: 93,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/service.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

// app/routes/basket.tsx
var basket_exports = {};
__export(basket_exports, {
  default: () => Basket
});
var import_jsx_dev_runtime37 = require("react/jsx-dev-runtime");
function Basket() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "flex flex-col items-center justify-center h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("h1", { className: "text-2xl font-semibold mb-2", children: "Oh no! Your basket is empty." }, void 0, !1, {
      fileName: "app/routes/basket.tsx",
      lineNumber: 9,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("p", { className: "text-gray-600", children: "You haven't added anything to your basket yet." }, void 0, !1, {
      fileName: "app/routes/basket.tsx",
      lineNumber: 10,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/basket.tsx",
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

// app/routes/signup.tsx
var signup_exports = {};
__export(signup_exports, {
  default: () => signup
});
var import_react37 = require("react"), import_react_router_dom9 = require("react-router-dom"), import_browser2 = __toESM(require("@emailjs/browser")), import_jsx_dev_runtime38 = require("react/jsx-dev-runtime");
function signup() {
  let [password, setPassword] = (0, import_react37.useState)(""), [passwordError, setPasswordError] = (0, import_react37.useState)(""), [confirmPassword, setConfirmPassword] = (0, import_react37.useState)(""), [confirmPasswordError, setConfirmPasswordError] = (0, import_react37.useState)(""), [telephone, settelephone] = (0, import_react37.useState)(""), [telephoneError, settelephoneError] = (0, import_react37.useState)(""), validatetelephone = (telephone2) => telephone2.length < 10 ? "Telephone must be more than 10 characters" : "", validateConfirmPassword = (password2, confirmPassword2) => password2 !== confirmPassword2 ? "Confirm password must match password" : "", validatePassword = (password2) => password2.length < 8 ? "Password must be more than 8 characters" : "", [formStatus, setFormStatus] = (0, import_react37.useState)({
    submitted: !1,
    error: null
  }), [show, setShow] = (0, import_react37.useState)(!0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "sm:mx-auto sm:w-full sm:max-w-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("h2", { className: "mt-10 text-center text-2xl font-bold leading-9 tracking-tight pt-10", style: { color: "#112D4E" }, children: "Sign up for an account" }, void 0, !1, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 89,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 87,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "mt-10 sm:mx-auto sm:w-full sm:max-w-sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("form", { className: "space-y-6", onSubmit: async (e) => {
        e.preventDefault();
        let form = e.currentTarget, formData = new FormData(form);
        try {
          let response = await fetch("/db", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams(formData).toString()
          }), result = await import_browser2.default.sendForm("service_1r5awa7", "template_ybutzfc", form, "ifIYm02lZT5rdQsmD");
          console.log(result), form.reset(), settelephone(""), setPassword(""), setConfirmPassword(""), setFormStatus({
            submitted: !0,
            error: null
          });
        } catch (error) {
          console.error(error), setFormStatus({
            submitted: !1,
            error: "An error occurred. Please try again."
          });
        }
      }, method: "POST", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("label", { htmlFor: "firstName", className: "block text-sm font-medium leading-6 text-gray-900", style: { fontSize: "16px", color: "#112D4E" }, children: "First Name" }, void 0, !1, {
            fileName: "app/routes/signup.tsx",
            lineNumber: 99,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
            "input",
            {
              id: "firstName",
              name: "firstName",
              type: "text",
              required: !0,
              className: "block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6",
              style: { fontSize: "16px", borderColor: "#112D4E" }
            },
            void 0,
            !1,
            {
              fileName: "app/routes/signup.tsx",
              lineNumber: 103,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/signup.tsx",
            lineNumber: 102,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 98,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("label", { htmlFor: "lastName", className: "block text-sm font-medium leading-6 text-gray-900", style: { fontSize: "16px", color: "#112D4E" }, children: "Last Name" }, void 0, !1, {
            fileName: "app/routes/signup.tsx",
            lineNumber: 116,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
            "input",
            {
              id: "lastName",
              name: "lastName",
              type: "text",
              required: !0,
              className: "block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6",
              style: { fontSize: "16px", borderColor: "#112D4E" }
            },
            void 0,
            !1,
            {
              fileName: "app/routes/signup.tsx",
              lineNumber: 120,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/signup.tsx",
            lineNumber: 119,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 115,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("label", { htmlFor: "telephone", className: "block text-sm font-medium leading-6 text-gray-900", style: { fontSize: "16px", color: "#112D4E" }, children: "Phone Number" }, void 0, !1, {
            fileName: "app/routes/signup.tsx",
            lineNumber: 133,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
            "input",
            {
              id: "telephone",
              name: "telephone",
              type: "text",
              required: !0,
              value: telephone,
              onChange: (e) => settelephone(e.target.value),
              onBlur: () => settelephoneError(validatetelephone(telephone)),
              className: "block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6",
              style: { fontSize: "16px", borderColor: "#112D4E" }
            },
            void 0,
            !1,
            {
              fileName: "app/routes/signup.tsx",
              lineNumber: 137,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/signup.tsx",
            lineNumber: 136,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 132,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium leading-6 text-gray-900", style: { fontSize: "16px", color: "#112D4E" }, children: "Email address" }, void 0, !1, {
            fileName: "app/routes/signup.tsx",
            lineNumber: 153,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
            "input",
            {
              id: "email",
              name: "email",
              type: "email",
              autoComplete: "email",
              required: !0,
              className: "block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6",
              style: { fontSize: "16px", borderColor: "#112D4E" }
            },
            void 0,
            !1,
            {
              fileName: "app/routes/signup.tsx",
              lineNumber: 157,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/signup.tsx",
            lineNumber: 156,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 152,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("label", { htmlFor: "password", className: "block text-sm font-medium leading-6 text-gray-900", style: { fontSize: "16px", color: "#112D4E" }, children: "Password" }, void 0, !1, {
            fileName: "app/routes/signup.tsx",
            lineNumber: 171,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "mt-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
              "input",
              {
                id: "password",
                name: "password",
                type: "password",
                autoComplete: "new-password",
                required: !0,
                value: password,
                onChange: (e) => setPassword(e.target.value),
                onBlur: () => setPasswordError(validatePassword(password)),
                className: "block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/signup.tsx",
                lineNumber: 175,
                columnNumber: 17
              },
              this
            ),
            passwordError && /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("p", { className: "text-red-500 text-sm mt-1", children: passwordError }, void 0, !1, {
              fileName: "app/routes/signup.tsx",
              lineNumber: 186,
              columnNumber: 35
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/signup.tsx",
            lineNumber: 174,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 170,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("label", { htmlFor: "confirmPassword", className: "block text-sm font-medium leading-6 text-gray-900", style: { fontSize: "16px", color: "#112D4E" }, children: "Confirm Password" }, void 0, !1, {
            fileName: "app/routes/signup.tsx",
            lineNumber: 192,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "mt-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
              "input",
              {
                id: "confirmPassword",
                name: "confirmPassword",
                type: "password",
                autoComplete: "new-password",
                required: !0,
                value: confirmPassword,
                onChange: (e) => setConfirmPassword(e.target.value),
                onBlur: () => setConfirmPasswordError(validateConfirmPassword(password, confirmPassword)),
                className: "block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/signup.tsx",
                lineNumber: 196,
                columnNumber: 17
              },
              this
            ),
            confirmPasswordError && /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("p", { className: "text-red-500 text-sm mt-1", children: confirmPasswordError }, void 0, !1, {
              fileName: "app/routes/signup.tsx",
              lineNumber: 207,
              columnNumber: 43
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/signup.tsx",
            lineNumber: 195,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 191,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "flex w-full justify-center rounded-full px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
            style: { backgroundColor: "#112D4E", fontSize: "16px" },
            children: "Sign up"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/signup.tsx",
            lineNumber: 213,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 212,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 95,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("p", { className: "mt-10 text-center text-sm text-gray-500", children: [
        "Already have an account? ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_react_router_dom9.Link, { to: "/login", className: "font-semibold leading-6", style: { color: "#112D4E" }, children: "Sign In" }, void 0, !1, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 224,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 222,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 94,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/signup.tsx",
    lineNumber: 85,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/signup.tsx",
    lineNumber: 84,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index
});
var import_react_router_dom10 = require("react-router-dom"), import_react38 = require("react"), import_jsx_dev_runtime39 = require("react/jsx-dev-runtime");
function Index() {
  let [registrationNumber, setRegistrationNumber] = (0, import_react38.useState)(""), [postcode, setPostcode] = (0, import_react38.useState)(""), [errorMessage, setErrorMessage] = (0, import_react38.useState)(""), navigate = (0, import_react_router_dom10.useNavigate)(), isValidRegistrationNumber = (regNumber) => /^[A-Za-z]{2}\d{2}[A-Za-z]{3}$/.test(regNumber), isValidPostcode = (postcode2) => /^[A-Za-z]{1,2}\d{1,2}[A-Za-z]?\s?\d[A-Za-z]{2}$/.test(postcode2);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "bg-contain", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "h-screen pt-20 flex justify-center items-center px-4 sm:px-6 lg:px-8", style: { width: "100%", backgroundSize: "cover", backgroundImage: 'url("https://fastly.picsum.photos/id/79/2000/3011.jpg?hmac=TQsXWj0kLBLRXbSAh2Pygog1-cOefqpjEoKyl0uD3tg")' }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("h1", { className: "text-center text-7xl font-semibold text-white", children: [
      "A REPAIR SHOP",
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this),
      "YOU CAN TRUST"
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "RegNumber", style: { width: "100%", height: "5cm", backgroundColor: "#F9F7F7" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("h1", { className: "text-center font-semibold", style: { color: "#112D4E", padding: "20px" }, children: [
        "Fill in the form below and we will get",
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 48,
          columnNumber: 11
        }, this),
        "you started"
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("section", { className: "flex justify-center items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "mx-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("label", { htmlFor: "registrationNumber", className: "block font-extralight", style: { fontSize: "16px" }, children: "Registration Number" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 55,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
            "input",
            {
              type: "text",
              id: "registrationNumber",
              className: "border-1 px-2 py-1 w-60",
              style: { fontSize: "16px", borderColor: "#112D4E" },
              value: registrationNumber,
              onChange: (e) => setRegistrationNumber(e.target.value)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 58,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 54,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 67,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "mx-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("label", { htmlFor: "postcode", className: " block font-extralight", children: "Postcode" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 69,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
            "input",
            {
              type: "text",
              id: "postcode",
              className: "border-1 px- py-1 w-60",
              style: { fontSize: "16px", borderColor: "#112D4E" },
              value: postcode,
              onChange: (e) => setPostcode(e.target.value)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 72,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 68,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
          "button",
          {
            className: "text-white font-light rounded-full px-9 py-2 ml-5 mt-5",
            style: { backgroundColor: "#112D4E", fontSize: "16px" },
            onClick: () => {
              isValidRegistrationNumber(registrationNumber) ? isValidPostcode(postcode) ? (setErrorMessage(""), navigate(`/selectCentre?postcode=${postcode}&registration=${registrationNumber}`)) : setErrorMessage("Invalid postcode") : setErrorMessage("Invalid registration number");
            },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_react_router_dom10.Link, { to: "#", className: "block w-full h-full text-decoration-none text-inherit", children: "Submit" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 87,
              columnNumber: 13
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 82,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      errorMessage && /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("p", { className: "text-red-500 text-center mt-2", style: { fontSize: "14px" }, children: errorMessage }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 94,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "picture flex justify-center items-center", style: { height: "7cm", marginTop: "40px", backgroundImage: 'url("https://fastly.picsum.photos/id/88/1280/1707.jpg?hmac=NnkwPVDBTVxHkc4rALB_fyu-OHY2usdm7iRk5El7JC4")', backgroundSize: "cover" } }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 101,
      columnNumber: 8
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "testimonial-container", style: { display: "flex", alignItems: "center", marginTop: "100px", marginLeft: "30px", zIndex: "1" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "testimonial-text", style: { flexGrow: 5 }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("h2", { className: "testimonial text-center", style: { fontWeight: "bold", color: "#112D4E", fontSize: "42px" }, children: "Testimonials" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 106,
          columnNumber: 12
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("p", { style: { color: "#112D4E", fontSize: "16px", fontWeight: "light" }, children: "The team there is not just skilled mechanics, but also incredibly honest and transparent. They took the time to explain the issues with my car in terms I could understand and provided a fair quote. No hidden fees, no unnecessary repairs\u2014just quality service. My car runs smoother than ever!" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 109,
          columnNumber: 12
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("button", { className: "find-out-more-button text-white font-light rounded-full px-9 py-2", style: { backgroundColor: "#112D4E", fontSize: "16px", marginTop: "20px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_react_router_dom10.Link, { to: "/about", className: "text-decoration-none", children: "Find Out More" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 113,
          columnNumber: 14
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 112,
          columnNumber: 12
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 105,
        columnNumber: 10
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "testimonial-image", style: { flexGrow: 1, alignItems: "flex-end" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("img", { src: "https://fastly.picsum.photos/id/111/4400/2656.jpg?hmac=leq8lj40D6cqFq5M_NLXkMYtV-30TtOOnzklhjPaAAQ", alt: "img", style: { maxWidth: "100%", height: "auto" } }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 120,
        columnNumber: 12
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 119,
        columnNumber: 10
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 104,
      columnNumber: 8
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
      "section",
      {
        className: "w-full",
        style: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#112D4E",
          zIndex: "0",
          padding: "20px",
          boxSizing: "border-box"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("h1", { className: "text-center", style: { fontWeight: "bold", color: "white", fontSize: "42px", marginBottom: "20px" }, children: "Are You Interested in Our Services?" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 138,
            columnNumber: 10
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
            "button",
            {
              className: "contact-us-button font-light rounded-full px-9 py-2 mt-auto",
              style: {
                backgroundColor: "#F9F7F7",
                fontSize: "16px",
                color: "#4B6078",
                zIndex: "1"
              },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_react_router_dom10.Link, { to: "/contact", className: "text-decoration-none text-inherit", children: "Contact Us" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 151,
                columnNumber: 12
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 142,
              columnNumber: 10
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 125,
        columnNumber: 8
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "map mt-5" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 158,
      columnNumber: 8
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

// app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => About,
  links: () => links2
});
var import_css_bundle2 = __toESM(require_dist());
var import_solid3 = require("@heroicons/react/20/solid"), import_jsx_dev_runtime40 = require("react/jsx-dev-runtime"), links2 = () => [
  ...import_css_bundle2.cssBundleHref ? [
    { rel: "stylesheet", href: import_css_bundle2.cssBundleHref },
    { rel: "stylesheet", href: tailwind_default }
  ] : [{ rel: "stylesheet", href: tailwind_default }]
], cards = [
  {
    name: "Expertise and Services",
    description: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(import_jsx_dev_runtime40.Fragment, { children: "Our team of skilled artisans and technicians, equipped with a wealth of knowledge, ensures that every vehicle receives meticulous care and attention. Whether it's routine maintenance or intricate detailing, we pride ourselves on understanding the unique needs of each vehicle, providing services that go beyond expectations. In the ever-evolving landscape of automotive technology, we stand at the forefront of innovation." }, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 22,
      columnNumber: 3
    }, this),
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(import_solid3.ArrowTrendingUpIcon, {}, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this)
  },
  {
    name: "Our History",
    description: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(import_jsx_dev_runtime40.Fragment, { children: [
      "Our company was born in 2023 with a bold vision \u2014 to revolutionize how vehicles receive top-notch care. Our founders set out to simplify garage services, making the booking process as easy as ordering pizza.",
      /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      "After tireless development, we launched our platform, becoming the go-to destination for automotive enthusiasts. From routine engine check-ups to custom detailing, we expanded our offerings, always striving for excellence."
    ] }, void 0, !0, {
      fileName: "app/routes/about.tsx",
      lineNumber: 32,
      columnNumber: 3
    }, this),
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(import_solid3.ClockIcon, {}, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this)
  },
  {
    name: "Customer Focus",
    description: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(import_jsx_dev_runtime40.Fragment, { children: "As guardians of your automotive dreams, we place you at the center of everything we do. Our customer-centric approach ensures a seamless experience \u2013 from the moment you entrust us with your vehicle to the exhilarating drive that follows our expert touch. In the realm of personalized experiences, your voice is the guiding force. Our collaboration goes beyond services; it's about understanding your needs, dreams, and desires, translating them into a tailored automotive reality." }, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 43,
      columnNumber: 3
    }, this),
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(import_solid3.HeartIcon, {}, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this)
  }
];
var testimonials = [
  {
    quote: "Amazing service! The attention to detail and expertise of the team exceeded my expectations. My car has never looked better.",
    author: {
      name: "John Doe",
      position: "Happy Customer"
    }
  },
  {
    quote: "I've been a customer for years, and I'm always impressed with the professionalism and quality of service. Highly recommended!",
    author: {
      name: "Jane Smith",
      position: "Satisfied Driver"
    }
  },
  {
    quote: "Reliable and trustworthy. They have earned my trust with their consistent quality of service.",
    author: {
      name: "Sarah Foster",
      position: "Satisfied Patron"
    }
  },
  {
    quote: "The team at this garage truly cares about their customers. They go above and beyond to ensure satisfaction. I won't go anywhere else.",
    author: {
      name: "Sam Johnson",
      position: "Loyal Client"
    }
  },
  {
    quote: "They went above and beyond to ensure my car was not only repaired but also returned in a clean and polished condition. Professional, courteous, and highly skilled\u2014AutoPro Solutions is the complete package.",
    author: {
      name: "Sam Johnson",
      position: "Loyal Client"
    }
  },
  {
    quote: "What sets them apart is not just their technical proficiency but their commitment to customer satisfaction.",
    author: {
      name: "John Ian",
      position: "Impressed customer"
    }
  },
  {
    quote: "Top-notch professionals! I've been a loyal customer for years, and their expertise never disappoints.",
    author: {
      name: "Michael Turner",
      position: "Long-time Client"
    }
  },
  {
    quote: "Prompt and efficient. The service provided was excellent, and the staff was friendly and knowledgeable.",
    author: {
      name: "Lisa Anderson",
      position: "Happy Driver"
    }
  },
  {
    quote: "Exceptional work! My car looks brand new after their detailing service. Couldn't be happier.",
    author: {
      name: "David Martinez",
      position: "Delighted Customer"
    }
  }
];
function About() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "py-24 sm:py-32", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "mx-auto max-w-2xl text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("h2", { className: "mt-2 text-4xl font-bold tracking-tight sm:text-6xl", style: { color: "#112D4E" }, children: "About Us" }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 142,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("p", { className: "mt-6 text-lg leading-8", style: { color: "#112D4E" }, children: "Our dedication to excellence extends to delivering high-quality, timely, and reliable services, making car maintenance a stress-free and customer-centric experience." }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 145,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { style: { marginTop: "10px", fontSize: "large" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("a", { href: "/locations", style: { color: "#3F72AF" }, children: [
          "View Garage Locations ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("span", { style: { marginLeft: "5px" }, children: "\u2192" }, void 0, !1, {
            fileName: "app/routes/about.tsx",
            lineNumber: 151,
            columnNumber: 37
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/about.tsx",
          lineNumber: 150,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 149,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/about.tsx",
        lineNumber: 141,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8 justify-center", style: { color: "#112D4E" }, children: cards.map(
        (card) => /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "flex gap-x-4 rounded-xl bg/5 p-6 ring-inset", style: { backgroundColor: "#DBE2EF" }, children: [
          card.icon && /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "h-10 w-10 flex-none ", style: { color: "#112D4E" }, children: card.icon }, void 0, !1, {
            fileName: "app/routes/about.tsx",
            lineNumber: 159,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "text-base leading-7", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("h3", { className: "font-semibold text-2xl", style: { color: "#112D4E" }, children: card.name }, void 0, !1, {
              fileName: "app/routes/about.tsx",
              lineNumber: 164,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("p", { className: "mt-2", style: { color: "#112D4E" }, children: card.description }, void 0, !1, {
              fileName: "app/routes/about.tsx",
              lineNumber: 167,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/about.tsx",
            lineNumber: 163,
            columnNumber: 15
          }, this)
        ] }, card.name, !0, {
          fileName: "app/routes/about.tsx",
          lineNumber: 157,
          columnNumber: 11
        }, this)
      ) }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 155,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/about.tsx",
      lineNumber: 140,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "mx-auto max-w-7xl px-6 lg:px-8 text-center mt-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("h2", { className: "text-4xl font-bold tracking-tight sm:text-6xl", style: { color: "#112D4E" }, children: "Our Testimonials" }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 177,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("p", { className: "text-4xl font-bold tracking-tight sm:text-xl mt-6", children: '"Verified and Trusted"' }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 180,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/about.tsx",
      lineNumber: 176,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3", children: testimonials.map(
      (testimonial) => /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "pt-8 sm:inline-block sm:w-full sm:px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("figure", { className: "rounded-2xl p-8 text-sm leading-6", style: { backgroundColor: "#DBE2EF" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("blockquote", { className: "", style: { color: "#112D4E" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("p", { children: `\u201C${testimonial.quote}\u201D` }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 192,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 191,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("figcaption", { className: "mt-6 flex items-center gap-x-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "font-semibold text-gray-900", children: testimonial.author.name }, void 0, !1, {
            fileName: "app/routes/about.tsx",
            lineNumber: 196,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "", style: { color: "#3F72AF" }, children: `@${testimonial.author.position}` }, void 0, !1, {
            fileName: "app/routes/about.tsx",
            lineNumber: 197,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/about.tsx",
          lineNumber: 195,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 194,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/about.tsx",
        lineNumber: 190,
        columnNumber: 17
      }, this) }, testimonial.author.position, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 189,
        columnNumber: 13
      }, this)
    ) }, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 187,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 186,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 185,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/about.tsx",
    lineNumber: 139,
    columnNumber: 5
  }, this);
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  default: () => Login
});
var import_react39 = require("react"), import_react_router_dom11 = require("react-router-dom"), import_outline13 = require("@heroicons/react/24/outline"), import_js_cookie2 = __toESM(require("js-cookie")), import_jsx_dev_runtime41 = require("react/jsx-dev-runtime");
function profilecookie() {
  import_js_cookie2.default.get("email") != null && window.location.replace("/profile");
}
function Login() {
  return (0, import_react39.useEffect)(() => {
    profilecookie();
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "sm:mx-auto sm:w-full sm:max-w-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("h2", { className: "mt-10 text-center text-2xl font-bold leading-9 tracking-tight pt-10", style: { color: "#112D4E" }, children: "Sign in to your account" }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 32,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "mt-10 sm:mx-auto sm:w-full sm:max-w-sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("form", { className: "space-y-6", action: "/loginDB", method: "POST", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("label", { htmlFor: "username", className: "block text-sm font-medium leading-6 text-gray-900", style: { fontSize: "16px", color: "#112D4E" }, children: "Email" }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 41,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("input", { id: "username", name: "username", type: "text", required: !0, className: "block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 focus:ring-indigo-950 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6", style: { fontSize: "16px", borderColor: "#112D4E" } }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 45,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 44,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 40,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("label", { htmlFor: "password", className: "block text-sm font-medium leading-6 text-gray-900", style: { fontSize: "16px", color: "#112D4E" }, children: "Password" }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 51,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("input", { id: "password", name: "password", type: "password", autoComplete: "current-password", required: !0, className: "block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 focus:ring-indigo-950 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 55,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 54,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 50,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_react_router_dom11.Link, { to: "/forgotPassword", className: "block text-sm font-medium leading-6 text-indigo-900", style: { fontSize: "16px", color: "#112D4E" }, children: "Forgot your password?" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 61,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 60,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "flex w-full justify-center rounded-full px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-950",
            style: { backgroundColor: "#112D4E", fontSize: "16px" },
            children: "Sign in"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 68,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 67,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("p", { className: "mt-6 text-center text-sm text-gray-500", children: [
        "Don't have an account?",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_react_router_dom11.Link, { to: "/signup", className: "font-semibold leading-6", style: { color: "#112D4E" }, children: "Sign Up" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 82,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 80,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("p", { className: "mt-6 text-center text-sm text-gray-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_react_router_dom11.Link, { to: "/staffLogin", className: "font-semibold leading-6", style: { color: "#112D4E" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_outline13.UserGroupIcon, { className: "h-6 w-6" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 91,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("span", { style: { fontSize: "10px", fontWeight: "lighter" }, children: "Staff Login" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 92,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 90,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 89,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 88,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 29,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

// app/routes/faq.tsx
var faq_exports = {};
__export(faq_exports, {
  default: () => Example
});
var import_react40 = require("@headlessui/react"), import_outline14 = require("@heroicons/react/24/outline"), import_jsx_dev_runtime42 = require("react/jsx-dev-runtime"), faqs = [
  {
    question: "When is it time for an oil change?",
    answer: "We recommend an oil change every 3,000 to 5,000 miles, but check your vehicle's manual for specific intervals."
  },
  {
    question: "How often should I replace my car's air filter?",
    answer: "Generally, every 12,000 to 15,000 miles, but it depends on driving conditions. Inspect it regularly and replace if dirty."
  },
  {
    question: "What are the signs of brake problems?",
    answer: "Watch for squeaking, grinding, or a soft brake pedal. If you notice any issues, get your brakes inspected promptly."
  },
  {
    question: "Do I need winter tires in colder climates?",
    answer: "Yes, winter tires provide better traction in icy and snowy conditions, improving overall safety during winter."
  },
  {
    question: "When should I replace my car's timing belt?",
    answer: "Typically, every 60,000 to 100,000 miles, but refer to your car's manual for the manufacturer's recommended interval."
  },
  {
    question: "What's included in a standard vehicle tune-up?",
    answer: "A tune-up involves inspecting and replacing spark plugs, checking ignition systems, and ensuring overall engine performance."
  }
];
function Example() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("div", { className: "mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40", children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("div", { className: "mx-auto max-w-4xl divide-y text-center", style: { color: "#112D4E" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("h2", { className: "mt-2 text-4xl font-bold tracking-tight sm:text-6xl", style: { color: "#112D4E" }, children: "Frequently asked questions" }, void 0, !1, {
      fileName: "app/routes/faq.tsx",
      lineNumber: 36,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("dl", { className: "mt-10 space-y-6 divide-y", style: { color: "#3F72AF" }, children: faqs.map((faq) => /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_react40.Disclosure, { as: "div", className: "pt-6", children: ({ open }) => /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_jsx_dev_runtime42.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("dt", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_react40.Disclosure.Button, { className: "flex w-full items-start justify-between text-left", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("span", { className: "text-base font-semibold leading-7", style: { color: "#112D4E" }, children: faq.question }, void 0, !1, {
          fileName: "app/routes/faq.tsx",
          lineNumber: 46,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("span", { className: "ml-6 flex h-7 items-center", children: open ? /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_outline14.MinusSmallIcon, { className: "h-6 w-6", "aria-hidden": "true", style: { color: "#3F72AF" } }, void 0, !1, {
          fileName: "app/routes/faq.tsx",
          lineNumber: 47,
          columnNumber: 78
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_outline14.PlusSmallIcon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
          fileName: "app/routes/faq.tsx",
          lineNumber: 47,
          columnNumber: 166
        }, this) }, void 0, !1, {
          fileName: "app/routes/faq.tsx",
          lineNumber: 47,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/faq.tsx",
        lineNumber: 45,
        columnNumber: 23
      }, this) }, void 0, !1, {
        fileName: "app/routes/faq.tsx",
        lineNumber: 44,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_react40.Disclosure.Panel, { as: "dd", className: "mt-2 pr-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("p", { className: "text-base leading-7", style: { color: "#112D4E" }, children: faq.answer }, void 0, !1, {
        fileName: "app/routes/faq.tsx",
        lineNumber: 51,
        columnNumber: 23
      }, this) }, void 0, !1, {
        fileName: "app/routes/faq.tsx",
        lineNumber: 50,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/faq.tsx",
      lineNumber: 43,
      columnNumber: 19
    }, this) }, faq.question, !1, {
      fileName: "app/routes/faq.tsx",
      lineNumber: 41,
      columnNumber: 15
    }, this)) }, void 0, !1, {
      fileName: "app/routes/faq.tsx",
      lineNumber: 39,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/faq.tsx",
    lineNumber: 35,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/faq.tsx",
    lineNumber: 34,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/faq.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, this);
}

// app/routes/mot.tsx
var mot_exports = {};
__export(mot_exports, {
  default: () => Mot
});
var import_outline15 = require("@heroicons/react/24/outline"), import_react41 = require("@remix-run/react"), import_jsx_dev_runtime43 = require("react/jsx-dev-runtime"), shield6 = [{ href: "#", description: "12-month warranty", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(import_outline15.ShieldCheckIcon, { className: "h-20 w-20 mt-8", style: { color: "#112D4E" } }, void 0, !1, {
  fileName: "app/routes/mot.tsx",
  lineNumber: 5,
  columnNumber: 70
}, this) }];
function Mot() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "mt-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "container mx-auto p-8 flex flex-col items-center justify-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("h1", { className: "mt-2 text-4xl font-bold tracking-tight sm:text-6xl mb-9", style: { color: "#112D4E" }, children: "MOT" }, void 0, !1, {
      fileName: "app/routes/mot.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "p-4 border rounded-md", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("h2", { className: "text-xl font-bold mb-2", children: "MOT" }, void 0, !1, {
          fileName: "app/routes/mot.tsx",
          lineNumber: 20,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { children: "Compulsory MOT test for each vehicle after 3 years old. Suitable for Petrol, Diesel, Hybrid and Electric vehicles." }, void 0, !1, {
          fileName: "app/routes/mot.tsx",
          lineNumber: 21,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { className: "text-2xl font-bold", children: "\xA349.99" }, void 0, !1, {
          fileName: "app/routes/mot.tsx",
          lineNumber: 23,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "flex items-center mt-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("span", { className: "text-gray-500 mr-1", children: "755 views today" }, void 0, !1, {
            fileName: "app/routes/mot.tsx",
            lineNumber: 25,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("svg", { className: "w-4 h-4 fill-current text-blue-500", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M0 0h24v24H0z", fill: "none" }, void 0, !1, {
              fileName: "app/routes/mot.tsx",
              lineNumber: 27,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17h2v2h-2zm0-14h2v10h-2z" }, void 0, !1, {
              fileName: "app/routes/mot.tsx",
              lineNumber: 28,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/mot.tsx",
            lineNumber: 26,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/mot.tsx",
          lineNumber: 24,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("button", { className: "text-white px-4 py-2 rounded mt-2", style: { backgroundColor: "#112D4E" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(import_react41.Link, { to: "/basicMOT", children: "View Details" }, void 0, !1, {
          fileName: "app/routes/mot.tsx",
          lineNumber: 32,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/mot.tsx",
          lineNumber: 31,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/mot.tsx",
        lineNumber: 19,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "p-4 border rounded-md", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("h2", { className: "text-xl font-bold mb-2", children: "MOT and Interim Service" }, void 0, !1, {
          fileName: "app/routes/mot.tsx",
          lineNumber: 38,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { children: "Recommended every 6 months or 6k miles" }, void 0, !1, {
          fileName: "app/routes/mot.tsx",
          lineNumber: 39,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { className: "", style: { color: "#3F72AF" }, children: "Book with an MOT and save \xA314.99" }, void 0, !1, {
          fileName: "app/routes/mot.tsx",
          lineNumber: 40,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { className: "text-2xl font-bold", children: "\xA3199.99" }, void 0, !1, {
          fileName: "app/routes/mot.tsx",
          lineNumber: 43,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "flex items-center mt-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("span", { className: "text-gray-500 mr-1", children: "755 views today" }, void 0, !1, {
            fileName: "app/routes/mot.tsx",
            lineNumber: 45,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("svg", { className: "w-4 h-4 fill-current text-blue-500", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M0 0h24v24H0z", fill: "none" }, void 0, !1, {
              fileName: "app/routes/mot.tsx",
              lineNumber: 47,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17h2v2h-2zm0-14h2v10h-2z" }, void 0, !1, {
              fileName: "app/routes/mot.tsx",
              lineNumber: 48,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/mot.tsx",
            lineNumber: 46,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/mot.tsx",
          lineNumber: 44,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("button", { className: "text-white px-4 py-2 rounded mt-2", style: { backgroundColor: "#112D4E" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(import_react41.Link, { to: "/interimAndMot", children: "View Details" }, void 0, !1, {
          fileName: "app/routes/mot.tsx",
          lineNumber: 52,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/mot.tsx",
          lineNumber: 51,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/mot.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "p-4 border rounded-md", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("h2", { className: "text-xl font-bold mb-2", children: "MOT and Full Service" }, void 0, !1, {
          fileName: "app/routes/mot.tsx",
          lineNumber: 58,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { children: "Recommended every 12 months or 12k miles" }, void 0, !1, {
          fileName: "app/routes/mot.tsx",
          lineNumber: 59,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { className: "", style: { color: "#3F72AF" }, children: "Book with a Full Service and save \xA319.99" }, void 0, !1, {
          fileName: "app/routes/mot.tsx",
          lineNumber: 60,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { className: "text-2xl font-bold", children: "\xA3279.99" }, void 0, !1, {
          fileName: "app/routes/mot.tsx",
          lineNumber: 63,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "flex items-center mt-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("span", { className: "text-gray-500 mr-1", children: "1718 views today" }, void 0, !1, {
            fileName: "app/routes/mot.tsx",
            lineNumber: 65,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("svg", { className: "w-4 h-4 fill-current text-blue-500", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M0 0h24v24H0z", fill: "none" }, void 0, !1, {
              fileName: "app/routes/mot.tsx",
              lineNumber: 67,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17h2v2h-2zm0-14h2v10h-2z" }, void 0, !1, {
              fileName: "app/routes/mot.tsx",
              lineNumber: 68,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/mot.tsx",
            lineNumber: 66,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/mot.tsx",
          lineNumber: 64,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("button", { className: " text-white px-4 py-2 rounded mt-2", style: { backgroundColor: "#112D4E" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(import_react41.Link, { to: "/fullAndMot", children: "View Details" }, void 0, !1, {
          fileName: "app/routes/mot.tsx",
          lineNumber: 72,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/mot.tsx",
          lineNumber: 71,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/mot.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "p-4 border rounded-md", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("h2", { className: "text-xl font-bold mb-2", children: "MOT and Major Service" }, void 0, !1, {
          fileName: "app/routes/mot.tsx",
          lineNumber: 80,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { children: "Recommended every 24 months or 24k miles" }, void 0, !1, {
          fileName: "app/routes/mot.tsx",
          lineNumber: 81,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { className: "", style: { color: "#3F72AF" }, children: "Book with a Major Service and save \xA324.99" }, void 0, !1, {
          fileName: "app/routes/mot.tsx",
          lineNumber: 82,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { className: "text-2xl font-bold", children: "\xA3309.99" }, void 0, !1, {
          fileName: "app/routes/mot.tsx",
          lineNumber: 85,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "flex items-center mt-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("span", { className: "text-gray-500 mr-1", children: "886 views today" }, void 0, !1, {
            fileName: "app/routes/mot.tsx",
            lineNumber: 87,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("svg", { className: "w-4 h-4 fill-current text-blue-500", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M0 0h24v24H0z", fill: "none" }, void 0, !1, {
              fileName: "app/routes/mot.tsx",
              lineNumber: 89,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17h2v2h-2zm0-14h2v10h-2z" }, void 0, !1, {
              fileName: "app/routes/mot.tsx",
              lineNumber: 90,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/mot.tsx",
            lineNumber: 88,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/mot.tsx",
          lineNumber: 86,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("button", { className: " text-white px-4 py-2 rounded mt-2", style: { backgroundColor: "#112D4E" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(import_react41.Link, { to: "/majorAndMot", children: "View Details" }, void 0, !1, {
          fileName: "app/routes/mot.tsx",
          lineNumber: 94,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/mot.tsx",
          lineNumber: 93,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/mot.tsx",
        lineNumber: 79,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/mot.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { id: "navigation", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("ul", { children: shield6.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("a", { href: item.href, children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("span", { children: item.icon }, void 0, !1, {
        fileName: "app/routes/mot.tsx",
        lineNumber: 107,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { className: "font-bold text-2xl", style: { color: "#112D4E" }, children: item.description }, void 0, !1, {
        fileName: "app/routes/mot.tsx",
        lineNumber: 108,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { className: "text-s", style: { color: "#3F72AF", textAlign: "justify" }, children: "All repairs are backed by a 12-month warranty, providing you with full assurance and peace of mind." }, void 0, !1, {
        fileName: "app/routes/mot.tsx",
        lineNumber: 111,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/mot.tsx",
      lineNumber: 106,
      columnNumber: 19
    }, this) }, void 0, !1, {
      fileName: "app/routes/mot.tsx",
      lineNumber: 105,
      columnNumber: 17
    }, this) }, index, !1, {
      fileName: "app/routes/mot.tsx",
      lineNumber: 104,
      columnNumber: 15
    }, this)) }, void 0, !1, {
      fileName: "app/routes/mot.tsx",
      lineNumber: 102,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/mot.tsx",
      lineNumber: 101,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "container mx-auto p-8 justify-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("h2", { className: "mt-5 text-5xl font-bold tracking-tight sm:text-5xl text-center justify-center", style: { color: "#112D4E" }, children: "Booking an MOT" }, void 0, !1, {
        fileName: "app/routes/mot.tsx",
        lineNumber: 123,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("h3", { className: "font-bold text-2xl", style: { color: "#3F72AF" }, children: "What is an MOT test?" }, void 0, !1, {
        fileName: "app/routes/mot.tsx",
        lineNumber: 126,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { className: "mt-3", style: { color: "#112D4E" }, children: "An MOT test is an annual inspection required for most vehicles over three years old in the UK. It ensures your vehicle meets safety and environmental standards. Trained technicians assess various components like lights, brakes, and tires. If your vehicle passes, you get an MOT certificate, allowing legal road use for the next year. If it fails, necessary repairs must be made before retesting. It's a crucial check to ensure your vehicle is safe and roadworthy." }, void 0, !1, {
        fileName: "app/routes/mot.tsx",
        lineNumber: 129,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "mt-4", style: { borderTop: "1px solid #3F72AF" } }, void 0, !1, {
        fileName: "app/routes/mot.tsx",
        lineNumber: 133,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("h4", { className: "font-bold text-2xl mt-4", style: { color: "#3F72AF" }, children: [
        " ",
        "When do i need to book and MOT test?"
      ] }, void 0, !0, {
        fileName: "app/routes/mot.tsx",
        lineNumber: 134,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { className: "mt-3", style: { color: "#112D4E" }, children: "You should book an MOT test annually for your vehicle, starting three years from its registration date. This ensures compliance with safety and environmental standards, keeping your car roadworthy. Feel free to schedule your MOT up to a month before the current certificate expires to allow time for any needed repairs." }, void 0, !1, {
        fileName: "app/routes/mot.tsx",
        lineNumber: 138,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "mt-4", style: { borderTop: "1px solid #3F72AF" } }, void 0, !1, {
        fileName: "app/routes/mot.tsx",
        lineNumber: 143,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("h5", { className: "font-bold text-2xl mt-4", style: { color: "#3F72AF" }, children: [
        " ",
        "How long is an MOT?"
      ] }, void 0, !0, {
        fileName: "app/routes/mot.tsx",
        lineNumber: 145,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("p", { className: "mt-3", style: { color: "#112D4E" }, children: [
        " ",
        "An MOT typically takes about 45 minutes to an hour, but it can vary based on factors like the vehicle's condition and any necessary repairs. It's advisable to plan for some extra time in case adjustments or fixes are needed to pass the test."
      ] }, void 0, !0, {
        fileName: "app/routes/mot.tsx",
        lineNumber: 149,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/mot.tsx",
      lineNumber: 122,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/mot.tsx",
    lineNumber: 11,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/mot.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/routes/db.tsx
var db_exports = {};
__export(db_exports, {
  action: () => action6
});
var import_node7 = require("@remix-run/node");
var bycript3 = require("bcryptjs"), action6 = async ({ request }) => {
  if (request.method === "POST") {
    let formData = new URLSearchParams(await request.text()), first_Name = formData.get("firstName"), last_Name = formData.get("lastName"), telephone = formData.get("telephone"), email = formData.get("email"), password = await bycript3.hash(formData.get("password"), 10), values = [first_Name, last_Name, email, telephone, password], query2 = ` INSERT INTO comp6000_06.Customer (first_name, last_name, email, telephone, password)
        VALUES (?, ?, ?, ?, ?)`;
    try {
      return (await executeQuery(query2, values)).affectedRows === 1 ? (0, import_node7.json)({ message: "Registration successful" }, { status: 302, headers: { Location: "/login" } }) : (0, import_node7.json)({ error: "Registration failed" }, { status: 400 });
    } catch (error) {
      return console.log(error), (0, import_node7.json)({ error: "Database error" }, { status: 500 });
    }
  }
  return (0, import_node7.json)({});
};

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-ZN2JN7RQ.js", imports: ["/build/_shared/chunk-OAPPX4FA.js", "/build/_shared/chunk-TM2LA52O.js", "/build/_shared/chunk-WEAPBHQG.js", "/build/_shared/chunk-V4K2SS5Z.js", "/build/_shared/chunk-7PHB3BFD.js", "/build/_shared/chunk-CJ4MY3PQ.js", "/build/_shared/chunk-4KLX3EKH.js", "/build/_shared/chunk-JR22VO6P.js", "/build/_shared/chunk-PZDJHGND.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-SDI7PU7W.js", imports: ["/build/_shared/chunk-E75Y2YEV.js", "/build/_shared/chunk-IJDWAEBR.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/StaffLogDB": { id: "routes/StaffLogDB", parentId: "root", path: "StaffLogDB", index: void 0, caseSensitive: void 0, module: "/build/routes/StaffLogDB-73IBDN3O.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-HU5CWNJE.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-ICEDM6YI.js", imports: ["/build/_shared/chunk-ZMC54G4P.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/adminProfile": { id: "routes/adminProfile", parentId: "root", path: "adminProfile", index: void 0, caseSensitive: void 0, module: "/build/routes/adminProfile-LGFEH4K4.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/basicMOT": { id: "routes/basicMOT", parentId: "root", path: "basicMOT", index: void 0, caseSensitive: void 0, module: "/build/routes/basicMOT-YCACVWR7.js", imports: ["/build/_shared/chunk-VLH5WOVJ.js", "/build/_shared/chunk-TOGZ7TXE.js", "/build/_shared/chunk-ZMC54G4P.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/basket": { id: "routes/basket", parentId: "root", path: "basket", index: void 0, caseSensitive: void 0, module: "/build/routes/basket-4A3URDUH.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/batteryChange": { id: "routes/batteryChange", parentId: "root", path: "batteryChange", index: void 0, caseSensitive: void 0, module: "/build/routes/batteryChange-FFFDF4XD.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/batteryService": { id: "routes/batteryService", parentId: "root", path: "batteryService", index: void 0, caseSensitive: void 0, module: "/build/routes/batteryService-6DB2D6N5.js", imports: ["/build/_shared/chunk-VLH5WOVJ.js", "/build/_shared/chunk-TOGZ7TXE.js", "/build/_shared/chunk-ZMC54G4P.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/brakeFluid": { id: "routes/brakeFluid", parentId: "root", path: "brakeFluid", index: void 0, caseSensitive: void 0, module: "/build/routes/brakeFluid-JPVKFCJI.js", imports: ["/build/_shared/chunk-VLH5WOVJ.js", "/build/_shared/chunk-TOGZ7TXE.js", "/build/_shared/chunk-ZMC54G4P.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/breadcrumbs": { id: "routes/breadcrumbs", parentId: "root", path: "breadcrumbs", index: void 0, caseSensitive: void 0, module: "/build/routes/breadcrumbs-XYQ5DV6D.js", imports: ["/build/_shared/chunk-TOGZ7TXE.js", "/build/_shared/chunk-ZMC54G4P.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/carServicing": { id: "routes/carServicing", parentId: "root", path: "carServicing", index: void 0, caseSensitive: void 0, module: "/build/routes/carServicing-LIZAODOX.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/contact": { id: "routes/contact", parentId: "root", path: "contact", index: void 0, caseSensitive: void 0, module: "/build/routes/contact-J43WKLRO.js", imports: ["/build/_shared/chunk-ASDNAVPE.js", "/build/_shared/chunk-7XQZTEX6.js", "/build/_shared/chunk-ZMC54G4P.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/database": { id: "routes/database", parentId: "root", path: "database", index: void 0, caseSensitive: void 0, module: "/build/routes/database-RKARH7YU.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/db": { id: "routes/db", parentId: "root", path: "db", index: void 0, caseSensitive: void 0, module: "/build/routes/db-3NRWVNK4.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/diagnosticCheck": { id: "routes/diagnosticCheck", parentId: "root", path: "diagnosticCheck", index: void 0, caseSensitive: void 0, module: "/build/routes/diagnosticCheck-KKHNUC7I.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/diagnosticService": { id: "routes/diagnosticService", parentId: "root", path: "diagnosticService", index: void 0, caseSensitive: void 0, module: "/build/routes/diagnosticService-ZI7BPU5Y.js", imports: ["/build/_shared/chunk-VLH5WOVJ.js", "/build/_shared/chunk-TOGZ7TXE.js", "/build/_shared/chunk-ZMC54G4P.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/engineService": { id: "routes/engineService", parentId: "root", path: "engineService", index: void 0, caseSensitive: void 0, module: "/build/routes/engineService-2GMNNHSB.js", imports: ["/build/_shared/chunk-VLH5WOVJ.js", "/build/_shared/chunk-TOGZ7TXE.js", "/build/_shared/chunk-ZMC54G4P.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/engineTuneUps": { id: "routes/engineTuneUps", parentId: "root", path: "engineTuneUps", index: void 0, caseSensitive: void 0, module: "/build/routes/engineTuneUps-U37UKR6C.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/faq": { id: "routes/faq", parentId: "root", path: "faq", index: void 0, caseSensitive: void 0, module: "/build/routes/faq-E2LTSF4Y.js", imports: ["/build/_shared/chunk-ASDNAVPE.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/forgotDb": { id: "routes/forgotDb", parentId: "root", path: "forgotDb", index: void 0, caseSensitive: void 0, module: "/build/routes/forgotDb-Z3IFXPGL.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/forgotPassword": { id: "routes/forgotPassword", parentId: "root", path: "forgotPassword", index: void 0, caseSensitive: void 0, module: "/build/routes/forgotPassword-UIQ5PZJ3.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/fullAndMot": { id: "routes/fullAndMot", parentId: "root", path: "fullAndMot", index: void 0, caseSensitive: void 0, module: "/build/routes/fullAndMot-LSKLC4WC.js", imports: ["/build/_shared/chunk-VLH5WOVJ.js", "/build/_shared/chunk-TOGZ7TXE.js", "/build/_shared/chunk-ZMC54G4P.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/fullService": { id: "routes/fullService", parentId: "root", path: "fullService", index: void 0, caseSensitive: void 0, module: "/build/routes/fullService-7TWNECF3.js", imports: ["/build/_shared/chunk-VLH5WOVJ.js", "/build/_shared/chunk-TOGZ7TXE.js", "/build/_shared/chunk-ZMC54G4P.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/interimAndMot": { id: "routes/interimAndMot", parentId: "root", path: "interimAndMot", index: void 0, caseSensitive: void 0, module: "/build/routes/interimAndMot-RLDWAYCX.js", imports: ["/build/_shared/chunk-VLH5WOVJ.js", "/build/_shared/chunk-TOGZ7TXE.js", "/build/_shared/chunk-ZMC54G4P.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/interimService": { id: "routes/interimService", parentId: "root", path: "interimService", index: void 0, caseSensitive: void 0, module: "/build/routes/interimService-AGCN5EGH.js", imports: ["/build/_shared/chunk-VLH5WOVJ.js", "/build/_shared/chunk-TOGZ7TXE.js", "/build/_shared/chunk-ZMC54G4P.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/locations": { id: "routes/locations", parentId: "root", path: "locations", index: void 0, caseSensitive: void 0, module: "/build/routes/locations-VMCY5NXS.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-2GK4H26Z.js", imports: ["/build/_shared/chunk-FXFW7OVD.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/loginDB": { id: "routes/loginDB", parentId: "root", path: "loginDB", index: void 0, caseSensitive: void 0, module: "/build/routes/loginDB-44SQM2JR.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/majorAndMot": { id: "routes/majorAndMot", parentId: "root", path: "majorAndMot", index: void 0, caseSensitive: void 0, module: "/build/routes/majorAndMot-UW5IJ7OK.js", imports: ["/build/_shared/chunk-VLH5WOVJ.js", "/build/_shared/chunk-TOGZ7TXE.js", "/build/_shared/chunk-ZMC54G4P.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/majorService": { id: "routes/majorService", parentId: "root", path: "majorService", index: void 0, caseSensitive: void 0, module: "/build/routes/majorService-PDUDLUII.js", imports: ["/build/_shared/chunk-VLH5WOVJ.js", "/build/_shared/chunk-TOGZ7TXE.js", "/build/_shared/chunk-ZMC54G4P.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/mot": { id: "routes/mot", parentId: "root", path: "mot", index: void 0, caseSensitive: void 0, module: "/build/routes/mot-PXO2BYOB.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/oilAndBrakeRepairs": { id: "routes/oilAndBrakeRepairs", parentId: "root", path: "oilAndBrakeRepairs", index: void 0, caseSensitive: void 0, module: "/build/routes/oilAndBrakeRepairs-BHYGGWUQ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/oilAndFilter": { id: "routes/oilAndFilter", parentId: "root", path: "oilAndFilter", index: void 0, caseSensitive: void 0, module: "/build/routes/oilAndFilter-AYH2DKHS.js", imports: ["/build/_shared/chunk-VLH5WOVJ.js", "/build/_shared/chunk-TOGZ7TXE.js", "/build/_shared/chunk-ZMC54G4P.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/premiumOil": { id: "routes/premiumOil", parentId: "root", path: "premiumOil", index: void 0, caseSensitive: void 0, module: "/build/routes/premiumOil-V4LH2PJD.js", imports: ["/build/_shared/chunk-VLH5WOVJ.js", "/build/_shared/chunk-TOGZ7TXE.js", "/build/_shared/chunk-ZMC54G4P.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/profile": { id: "routes/profile", parentId: "root", path: "profile", index: void 0, caseSensitive: void 0, module: "/build/routes/profile-P3W4SPP5.js", imports: ["/build/_shared/chunk-FXFW7OVD.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/punctureRepair": { id: "routes/punctureRepair", parentId: "root", path: "punctureRepair", index: void 0, caseSensitive: void 0, module: "/build/routes/punctureRepair-IQSBCVSU.js", imports: ["/build/_shared/chunk-VLH5WOVJ.js", "/build/_shared/chunk-TOGZ7TXE.js", "/build/_shared/chunk-ZMC54G4P.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/selectCentre": { id: "routes/selectCentre", parentId: "root", path: "selectCentre", index: void 0, caseSensitive: void 0, module: "/build/routes/selectCentre-O7UAU7IJ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/select_centre": { id: "routes/select_centre", parentId: "root", path: "select_centre", index: void 0, caseSensitive: void 0, module: "/build/routes/select_centre-PYUY4JOQ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/service": { id: "routes/service", parentId: "root", path: "service", index: void 0, caseSensitive: void 0, module: "/build/routes/service-7IMFJVSU.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/serviceDB": { id: "routes/serviceDB", parentId: "root", path: "serviceDB", index: void 0, caseSensitive: void 0, module: "/build/routes/serviceDB-AKE324KD.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/signup": { id: "routes/signup", parentId: "root", path: "signup", index: void 0, caseSensitive: void 0, module: "/build/routes/signup-VSEYDSGU.js", imports: ["/build/_shared/chunk-7XQZTEX6.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/staffLogin": { id: "routes/staffLogin", parentId: "root", path: "staffLogin", index: void 0, caseSensitive: void 0, module: "/build/routes/staffLogin-HJAIH7HJ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/staffProfile": { id: "routes/staffProfile", parentId: "root", path: "staffProfile", index: void 0, caseSensitive: void 0, module: "/build/routes/staffProfile-OPW5SUCQ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/staffSignup": { id: "routes/staffSignup", parentId: "root", path: "staffSignup", index: void 0, caseSensitive: void 0, module: "/build/routes/staffSignup-3MSI2HZB.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/staffUpDB": { id: "routes/staffUpDB", parentId: "root", path: "staffUpDB", index: void 0, caseSensitive: void 0, module: "/build/routes/staffUpDB-MPO2TD7M.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/tireReplacement": { id: "routes/tireReplacement", parentId: "root", path: "tireReplacement", index: void 0, caseSensitive: void 0, module: "/build/routes/tireReplacement-AF2H7S4O.js", imports: ["/build/_shared/chunk-VLH5WOVJ.js", "/build/_shared/chunk-TOGZ7TXE.js", "/build/_shared/chunk-ZMC54G4P.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/tiresFixAndReplacements": { id: "routes/tiresFixAndReplacements", parentId: "root", path: "tiresFixAndReplacements", index: void 0, caseSensitive: void 0, module: "/build/routes/tiresFixAndReplacements-SPJVXPTO.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/windscreenRepairs": { id: "routes/windscreenRepairs", parentId: "root", path: "windscreenRepairs", index: void 0, caseSensitive: void 0, module: "/build/routes/windscreenRepairs-QWDJPPWI.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/windscreenService": { id: "routes/windscreenService", parentId: "root", path: "windscreenService", index: void 0, caseSensitive: void 0, module: "/build/routes/windscreenService-ZRUCQH7F.js", imports: ["/build/_shared/chunk-VLH5WOVJ.js", "/build/_shared/chunk-TOGZ7TXE.js", "/build/_shared/chunk-ZMC54G4P.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "323eb93b", hmr: { runtime: "/build/_shared\\chunk-4KLX3EKH.js", timestamp: 1706482165165 }, url: "/build/manifest-323EB93B.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { v2_dev: !0, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/tiresFixAndReplacements": {
    id: "routes/tiresFixAndReplacements",
    parentId: "root",
    path: "tiresFixAndReplacements",
    index: void 0,
    caseSensitive: void 0,
    module: tiresFixAndReplacements_exports
  },
  "routes/oilAndBrakeRepairs": {
    id: "routes/oilAndBrakeRepairs",
    parentId: "root",
    path: "oilAndBrakeRepairs",
    index: void 0,
    caseSensitive: void 0,
    module: oilAndBrakeRepairs_exports
  },
  "routes/diagnosticService": {
    id: "routes/diagnosticService",
    parentId: "root",
    path: "diagnosticService",
    index: void 0,
    caseSensitive: void 0,
    module: diagnosticService_exports
  },
  "routes/windscreenRepairs": {
    id: "routes/windscreenRepairs",
    parentId: "root",
    path: "windscreenRepairs",
    index: void 0,
    caseSensitive: void 0,
    module: windscreenRepairs_exports
  },
  "routes/windscreenService": {
    id: "routes/windscreenService",
    parentId: "root",
    path: "windscreenService",
    index: void 0,
    caseSensitive: void 0,
    module: windscreenService_exports
  },
  "routes/diagnosticCheck": {
    id: "routes/diagnosticCheck",
    parentId: "root",
    path: "diagnosticCheck",
    index: void 0,
    caseSensitive: void 0,
    module: diagnosticCheck_exports
  },
  "routes/tireReplacement": {
    id: "routes/tireReplacement",
    parentId: "root",
    path: "tireReplacement",
    index: void 0,
    caseSensitive: void 0,
    module: tireReplacement_exports
  },
  "routes/batteryService": {
    id: "routes/batteryService",
    parentId: "root",
    path: "batteryService",
    index: void 0,
    caseSensitive: void 0,
    module: batteryService_exports
  },
  "routes/forgotPassword": {
    id: "routes/forgotPassword",
    parentId: "root",
    path: "forgotPassword",
    index: void 0,
    caseSensitive: void 0,
    module: forgotPassword_exports
  },
  "routes/interimService": {
    id: "routes/interimService",
    parentId: "root",
    path: "interimService",
    index: void 0,
    caseSensitive: void 0,
    module: interimService_exports
  },
  "routes/punctureRepair": {
    id: "routes/punctureRepair",
    parentId: "root",
    path: "punctureRepair",
    index: void 0,
    caseSensitive: void 0,
    module: punctureRepair_exports
  },
  "routes/batteryChange": {
    id: "routes/batteryChange",
    parentId: "root",
    path: "batteryChange",
    index: void 0,
    caseSensitive: void 0,
    module: batteryChange_exports
  },
  "routes/engineService": {
    id: "routes/engineService",
    parentId: "root",
    path: "engineService",
    index: void 0,
    caseSensitive: void 0,
    module: engineService_exports
  },
  "routes/engineTuneUps": {
    id: "routes/engineTuneUps",
    parentId: "root",
    path: "engineTuneUps",
    index: void 0,
    caseSensitive: void 0,
    module: engineTuneUps_exports
  },
  "routes/interimAndMot": {
    id: "routes/interimAndMot",
    parentId: "root",
    path: "interimAndMot",
    index: void 0,
    caseSensitive: void 0,
    module: interimAndMot_exports
  },
  "routes/select_centre": {
    id: "routes/select_centre",
    parentId: "root",
    path: "select_centre",
    index: void 0,
    caseSensitive: void 0,
    module: select_centre_exports
  },
  "routes/adminProfile": {
    id: "routes/adminProfile",
    parentId: "root",
    path: "adminProfile",
    index: void 0,
    caseSensitive: void 0,
    module: adminProfile_exports
  },
  "routes/carServicing": {
    id: "routes/carServicing",
    parentId: "root",
    path: "carServicing",
    index: void 0,
    caseSensitive: void 0,
    module: carServicing_exports
  },
  "routes/majorService": {
    id: "routes/majorService",
    parentId: "root",
    path: "majorService",
    index: void 0,
    caseSensitive: void 0,
    module: majorService_exports
  },
  "routes/oilAndFilter": {
    id: "routes/oilAndFilter",
    parentId: "root",
    path: "oilAndFilter",
    index: void 0,
    caseSensitive: void 0,
    module: oilAndFilter_exports
  },
  "routes/selectCentre": {
    id: "routes/selectCentre",
    parentId: "root",
    path: "selectCentre",
    index: void 0,
    caseSensitive: void 0,
    module: selectCentre_exports
  },
  "routes/staffProfile": {
    id: "routes/staffProfile",
    parentId: "root",
    path: "staffProfile",
    index: void 0,
    caseSensitive: void 0,
    module: staffProfile_exports
  },
  "routes/breadcrumbs": {
    id: "routes/breadcrumbs",
    parentId: "root",
    path: "breadcrumbs",
    index: void 0,
    caseSensitive: void 0,
    module: breadcrumbs_exports
  },
  "routes/fullService": {
    id: "routes/fullService",
    parentId: "root",
    path: "fullService",
    index: void 0,
    caseSensitive: void 0,
    module: fullService_exports
  },
  "routes/majorAndMot": {
    id: "routes/majorAndMot",
    parentId: "root",
    path: "majorAndMot",
    index: void 0,
    caseSensitive: void 0,
    module: majorAndMot_exports
  },
  "routes/staffSignup": {
    id: "routes/staffSignup",
    parentId: "root",
    path: "staffSignup",
    index: void 0,
    caseSensitive: void 0,
    module: staffSignup_exports
  },
  "routes/brakeFluid": {
    id: "routes/brakeFluid",
    parentId: "root",
    path: "brakeFluid",
    index: void 0,
    caseSensitive: void 0,
    module: brakeFluid_exports
  },
  "routes/fullAndMot": {
    id: "routes/fullAndMot",
    parentId: "root",
    path: "fullAndMot",
    index: void 0,
    caseSensitive: void 0,
    module: fullAndMot_exports
  },
  "routes/premiumOil": {
    id: "routes/premiumOil",
    parentId: "root",
    path: "premiumOil",
    index: void 0,
    caseSensitive: void 0,
    module: premiumOil_exports
  },
  "routes/StaffLogDB": {
    id: "routes/StaffLogDB",
    parentId: "root",
    path: "StaffLogDB",
    index: void 0,
    caseSensitive: void 0,
    module: StaffLogDB_exports
  },
  "routes/staffLogin": {
    id: "routes/staffLogin",
    parentId: "root",
    path: "staffLogin",
    index: void 0,
    caseSensitive: void 0,
    module: staffLogin_exports
  },
  "routes/locations": {
    id: "routes/locations",
    parentId: "root",
    path: "locations",
    index: void 0,
    caseSensitive: void 0,
    module: locations_exports
  },
  "routes/serviceDB": {
    id: "routes/serviceDB",
    parentId: "root",
    path: "serviceDB",
    index: void 0,
    caseSensitive: void 0,
    module: serviceDB_exports
  },
  "routes/staffUpDB": {
    id: "routes/staffUpDB",
    parentId: "root",
    path: "staffUpDB",
    index: void 0,
    caseSensitive: void 0,
    module: staffUpDB_exports
  },
  "routes/basicMOT": {
    id: "routes/basicMOT",
    parentId: "root",
    path: "basicMOT",
    index: void 0,
    caseSensitive: void 0,
    module: basicMOT_exports
  },
  "routes/database": {
    id: "routes/database",
    parentId: "root",
    path: "database",
    index: void 0,
    caseSensitive: void 0,
    module: database_exports
  },
  "routes/forgotDb": {
    id: "routes/forgotDb",
    parentId: "root",
    path: "forgotDb",
    index: void 0,
    caseSensitive: void 0,
    module: forgotDb_exports
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: contact_exports
  },
  "routes/loginDB": {
    id: "routes/loginDB",
    parentId: "root",
    path: "loginDB",
    index: void 0,
    caseSensitive: void 0,
    module: loginDB_exports
  },
  "routes/profile": {
    id: "routes/profile",
    parentId: "root",
    path: "profile",
    index: void 0,
    caseSensitive: void 0,
    module: profile_exports
  },
  "routes/service": {
    id: "routes/service",
    parentId: "root",
    path: "service",
    index: void 0,
    caseSensitive: void 0,
    module: service_exports
  },
  "routes/basket": {
    id: "routes/basket",
    parentId: "root",
    path: "basket",
    index: void 0,
    caseSensitive: void 0,
    module: basket_exports
  },
  "routes/signup": {
    id: "routes/signup",
    parentId: "root",
    path: "signup",
    index: void 0,
    caseSensitive: void 0,
    module: signup_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/faq": {
    id: "routes/faq",
    parentId: "root",
    path: "faq",
    index: void 0,
    caseSensitive: void 0,
    module: faq_exports
  },
  "routes/mot": {
    id: "routes/mot",
    parentId: "root",
    path: "mot",
    index: void 0,
    caseSensitive: void 0,
    module: mot_exports
  },
  "routes/db": {
    id: "routes/db",
    parentId: "root",
    path: "db",
    index: void 0,
    caseSensitive: void 0,
    module: db_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
/*! Bundled license information:

@remix-run/css-bundle/dist/index.js:
  (**
   * @remix-run/css-bundle v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
//# sourceMappingURL=index.js.map
