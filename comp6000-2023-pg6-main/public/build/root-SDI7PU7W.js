import {
  cssBundleHref,
  tailwind_default
} from "/build/_shared/chunk-E75Y2YEV.js";
import {
  Links,
  LiveReload,
  Meta,
  NavLink,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-TM2LA52O.js";
import {
  MagnifyingGlassIcon_default,
  MapPinIcon_default,
  ShoppingBagIcon_default,
  UserIcon_default
} from "/build/_shared/chunk-IJDWAEBR.js";
import {
  Outlet
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

// app/root.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\root.tsx"
  );
}
var links = () => [...cssBundleHref ? [{
  rel: "stylesheet",
  href: cssBundleHref
}, {
  rel: "stylesheet",
  href: tailwind_default
}] : [{
  rel: "stylesheet",
  href: tailwind_default
}]];
var navigation = {
  support: [{
    name: "Contact Us",
    href: "/contact"
  }, {
    name: "Services",
    href: "/service"
  }],
  company: [{
    name: "About Us",
    href: "/about"
  }, {
    name: "Locations",
    href: "/locations"
  }, {
    name: "Account",
    href: "/login"
  }],
  legal: [{
    name: "FAQs",
    href: "/faq"
  }, {
    name: "Terms and Conditions",
    href: "#"
  }, {
    name: "Privacy Notice",
    href: "#"
  }]
};
function App() {
  _s();
  const [searchInput, setSearchInput] = (0, import_react2.useState)("");
  const [searchResults, setSearchResults] = (0, import_react2.useState)([]);
  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    const pages = [{
      name: "Home",
      type: "Page"
    }, {
      name: "About",
      type: "Page"
    }, {
      name: "Service",
      type: "Category",
      subheadings: ["MOT", "Car Servicing", "Oil and BrakeRepairs", "TiresFix And Replacements", "Windscreen Repairs", "Battery Change", "Diagnostic Check", "Engine TuneUps"]
    }, {
      name: "Contact",
      type: "Page"
    }];
    const mainCategories = pages.filter((page) => page.type === "Category" && !page.subheadings).map((page) => page.name);
    const subheadings = pages.filter((page) => page.type === "Category" && page.subheadings).flatMap((page) => page.subheadings);
    const filteredMainCategories = mainCategories.filter((name) => name.toLowerCase().includes(e.target.value.toLowerCase()));
    const filteredSubheadings = subheadings.filter((subheading) => subheading.toLowerCase().includes(e.target.value.toLowerCase()));
    const filteredResults = [...filteredSubheadings.map((subheading) => `${subheading} - Service`), ...filteredMainCategories];
    setSearchResults(filteredResults);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 100,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 101,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 102,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 103,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 99,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { className: "flex flex-col min-h-screen ", style: {
      backgroundColor: "#F9F7F7"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col min-h-screen", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "fixed inset-x-0 px-6 py-3 flex flex-row justify-between top-0 mx-auto w-full", style: {
          backgroundColor: "#F9F7F7",
          borderBottom: "5px solid #112D4E",
          zIndex: "1000"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-5" }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 118,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: " nav flex space-x-8 pt-5 pl-20 justify-center align-items-center w-full font-bold", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/", className: ({
              isActive
            }) => `${isActive ? "text-blue-800" : ""}`, children: "Home" }, void 0, false, {
              fileName: "app/root.tsx",
              lineNumber: 122,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/about", className: ({
              isActive
            }) => `${isActive ? "text-blue-800" : ""}`, children: "About Us" }, void 0, false, {
              fileName: "app/root.tsx",
              lineNumber: 127,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/service", className: ({
              isActive
            }) => `${isActive ? "text-blue-800" : ""}`, children: "Services" }, void 0, false, {
              fileName: "app/root.tsx",
              lineNumber: 132,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/contact", className: ({
              isActive
            }) => `${isActive ? "text-blue-800" : ""}`, children: "Contact Us" }, void 0, false, {
              fileName: "app/root.tsx",
              lineNumber: 137,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-grow" }, void 0, false, {
              fileName: "app/root.tsx",
              lineNumber: 142,
              columnNumber: 15
            }, this),
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-4 items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { className: "flex", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", placeholder: "Search", style: {
                    width: "200px"
                  }, value: searchInput, onChange: handleSearch }, void 0, false, {
                    fileName: "app/root.tsx",
                    lineNumber: 148,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: {
                    backgroundColor: "#112D4E",
                    color: "#F9F7F7"
                  }, onClick: handleSearch, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MagnifyingGlassIcon_default, { className: "h-6 w-6", style: {
                    width: "50px"
                  } }, void 0, false, {
                    fileName: "app/root.tsx",
                    lineNumber: 156,
                    columnNumber: 23
                  }, this) }, void 0, false, {
                    fileName: "app/root.tsx",
                    lineNumber: 152,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/root.tsx",
                  lineNumber: 147,
                  columnNumber: 19
                }, this),
                searchResults.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute mt-2 bg-white border rounded-md shadow-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: searchResults.map((result, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "py-2 px-4 hover:bg-gray-200", children: result.includes(" - ") ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: `/${result.split(" - ")[0].toLowerCase().replace(/\s+/g, "")}`, className: "text-blue-800", children: result }, void 0, false, {
                  fileName: "app/root.tsx",
                  lineNumber: 166,
                  columnNumber: 53
                }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: `/${result === "About Us" ? "about" : result.toLowerCase().replace(/\s+/g, "")}`, className: "text-blue-800", children: result }, void 0, false, {
                  fileName: "app/root.tsx",
                  lineNumber: 168,
                  columnNumber: 42
                }, this) }, index, false, {
                  fileName: "app/root.tsx",
                  lineNumber: 165,
                  columnNumber: 61
                }, this)) }, void 0, false, {
                  fileName: "app/root.tsx",
                  lineNumber: 164,
                  columnNumber: 21
                }, this) }, void 0, false, {
                  fileName: "app/root.tsx",
                  lineNumber: 163,
                  columnNumber: 48
                }, this)
              ] }, void 0, true, {
                fileName: "app/root.tsx",
                lineNumber: 146,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/locations", className: ({
                isActive
              }) => `${isActive ? "text-blue-800" : ""}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPinIcon_default, { className: "h-6 w-6" }, void 0, false, {
                  fileName: "app/root.tsx",
                  lineNumber: 184,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
                  fontSize: "10px",
                  fontWeight: "lighter"
                }, children: "Locations" }, void 0, false, {
                  fileName: "app/root.tsx",
                  lineNumber: 185,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/root.tsx",
                lineNumber: 183,
                columnNumber: 19
              }, this) }, void 0, false, {
                fileName: "app/root.tsx",
                lineNumber: 180,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/login", className: ({
                isActive
              }) => `${isActive ? "text-blue-800" : ""}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserIcon_default, { className: "h-6 w-6" }, void 0, false, {
                  fileName: "app/root.tsx",
                  lineNumber: 196,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
                  fontSize: "10px",
                  fontWeight: "lighter"
                }, children: "Account" }, void 0, false, {
                  fileName: "app/root.tsx",
                  lineNumber: 197,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/root.tsx",
                lineNumber: 195,
                columnNumber: 19
              }, this) }, void 0, false, {
                fileName: "app/root.tsx",
                lineNumber: 192,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/basket", className: ({
                isActive
              }) => `${isActive ? "text-blue-800" : ""}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShoppingBagIcon_default, { className: "h-6 w-6" }, void 0, false, {
                  fileName: "app/root.tsx",
                  lineNumber: 208,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
                  fontSize: "10px",
                  fontWeight: "lighter"
                }, children: "Basket" }, void 0, false, {
                  fileName: "app/root.tsx",
                  lineNumber: 209,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/root.tsx",
                lineNumber: 207,
                columnNumber: 19
              }, this) }, void 0, false, {
                fileName: "app/root.tsx",
                lineNumber: 204,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/root.tsx",
              lineNumber: 143,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/root.tsx",
            lineNumber: 121,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/root.tsx",
          lineNumber: 112,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("style", { children: `
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
` }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 218,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-grow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 284,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 283,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", { className: " ", "aria-labelledby": "footer-heading", style: {
          marginTop: "150px",
          backgroundColor: "#F9F7F7",
          borderTop: "5px solid #112D4E"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { id: "footer-heading", className: "sr-only", children: "Footer" }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 292,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-6xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-16 md:mb-0", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm font-semibold leading-6 text-gray-900", children: "Support" }, void 0, false, {
                fileName: "app/root.tsx",
                lineNumber: 298,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { role: "list", className: "mt-2 space-y-2", children: navigation.support.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: item.href, className: "text-sm leading-6 text-gray-600 hover:text-gray-900", children: item.name }, void 0, false, {
                fileName: "app/root.tsx",
                lineNumber: 301,
                columnNumber: 25
              }, this) }, item.name, false, {
                fileName: "app/root.tsx",
                lineNumber: 300,
                columnNumber: 53
              }, this)) }, void 0, false, {
                fileName: "app/root.tsx",
                lineNumber: 299,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/root.tsx",
              lineNumber: 297,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-16 md:mb-0", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm font-semibold leading-6 text-gray-900", children: "Company" }, void 0, false, {
                fileName: "app/root.tsx",
                lineNumber: 309,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { role: "list", className: "mt-2 space-y-2", children: navigation.company.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: item.href, className: "text-sm leading-6 text-gray-600 hover:text-gray-900", children: item.name }, void 0, false, {
                fileName: "app/root.tsx",
                lineNumber: 312,
                columnNumber: 25
              }, this) }, item.name, false, {
                fileName: "app/root.tsx",
                lineNumber: 311,
                columnNumber: 53
              }, this)) }, void 0, false, {
                fileName: "app/root.tsx",
                lineNumber: 310,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/root.tsx",
              lineNumber: 308,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm font-semibold leading-6 text-gray-900", children: "Legal" }, void 0, false, {
                fileName: "app/root.tsx",
                lineNumber: 320,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { role: "list", className: "mt-2 space-y-2", children: navigation.legal.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: item.href, className: "text-sm leading-6 text-gray-600 hover:text-gray-900", children: item.name }, void 0, false, {
                fileName: "app/root.tsx",
                lineNumber: 323,
                columnNumber: 25
              }, this) }, item.name, false, {
                fileName: "app/root.tsx",
                lineNumber: 322,
                columnNumber: 51
              }, this)) }, void 0, false, {
                fileName: "app/root.tsx",
                lineNumber: 321,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/root.tsx",
              lineNumber: 319,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm font-semibold leading-6 text-gray-900", children: "Subscribe to our newsletter" }, void 0, false, {
                fileName: "app/root.tsx",
                lineNumber: 331,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-sm leading-6 text-black-300", children: "The latest news, articles, and resources, sent to your inbox weekly." }, void 0, false, {
                fileName: "app/root.tsx",
                lineNumber: 332,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { className: "mt-6 sm:flex sm:max-w-md", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email-address", className: "sr-only", children: "Email address" }, void 0, false, {
                  fileName: "app/root.tsx",
                  lineNumber: 334,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "email", name: "email-address", id: "email-address", autoComplete: "email", required: true, className: "min-w-0 e border-1 px-2 py-1 w-60 bg-white/5 text-base text-black ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-900 sm:w-64 sm:text-sm sm:leading-6 xl:w-full", placeholder: "Enter your email", style: {
                  borderColor: "#112D4E"
                } }, void 0, false, {
                  fileName: "app/root.tsx",
                  lineNumber: 337,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "flex w-full items-center justify-center rounded-full px-3 py-2 text-sm font-light text-white ", style: {
                  backgroundColor: "#112D4E",
                  fontSize: "16px"
                }, children: "Subscribe" }, void 0, false, {
                  fileName: "app/root.tsx",
                  lineNumber: 342,
                  columnNumber: 23
                }, this) }, void 0, false, {
                  fileName: "app/root.tsx",
                  lineNumber: 341,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/root.tsx",
                lineNumber: 333,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/root.tsx",
              lineNumber: 330,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/root.tsx",
            lineNumber: 296,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 295,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/root.tsx",
          lineNumber: 287,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 109,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 357,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 358,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 359,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 356,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 106,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 98,
    columnNumber: 10
  }, this);
}
_s(App, "pHhrlpYVYWjfmrhENz02RmcdKeU=");
_c = App;
var _c;
$RefreshReg$(_c, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  App as default,
  links
};
//# sourceMappingURL=/build/root-SDI7PU7W.js.map
