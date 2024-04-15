import {
  Link
} from "/build/_shared/chunk-TM2LA52O.js";
import {
  ArrowLeftOnRectangleIcon_default,
  BriefcaseIcon_default,
  ChatBubbleLeftRightIcon_default,
  CreditCardIcon_default,
  InformationCircleIcon_default,
  PhoneIcon_default,
  UserCircleIcon_default,
  UsersIcon_default
} from "/build/_shared/chunk-IJDWAEBR.js";
import "/build/_shared/chunk-V4K2SS5Z.js";
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

// app/routes/staffProfile.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\staffProfile.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\staffProfile.tsx"
  );
  import.meta.hot.lastModified = "1704989734592.2788";
}
var nav = [{
  name: "User Information",
  href: "#",
  icon: UserCircleIcon_default
}, {
  name: "Contact Information",
  href: "#",
  icon: PhoneIcon_default
}, {
  name: "Garage Information",
  href: "#",
  icon: InformationCircleIcon_default
}, {
  name: "Staff Management",
  href: "#",
  icon: UsersIcon_default
}, {
  name: "Booking Management",
  href: "#",
  icon: CreditCardIcon_default
}, {
  name: "Business Management",
  href: "#",
  icon: BriefcaseIcon_default
}, {
  name: "Feedbacks",
  href: "#",
  icon: ChatBubbleLeftRightIcon_default
}];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Admin_profile() {
  _s();
  const [currentSection, setCurrentSection] = (0, import_react.useState)("User Information");
  const handleSectionChange = (sectionName) => {
    setCurrentSection(sectionName);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" }, void 0, false, {
      fileName: "app/routes/staffProfile.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-7xl pt-16 lg:flex lg:gap-x-16 lg:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", { className: "flex overflow-x-auto border-b border-gray-900/5 py-4 lg:block lg:w-64 lg:flex-none lg:border-0 lg:py-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "flex-none px-4 sm:px-6 lg:px-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { role: "list", className: "flex gap-x-5 gap-y-6 lg:flex-col", children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: item.href, className: classNames(currentSection === item.name ? "bg-gray-50 text-indigo-900" : "text-gray-700 hover:text-indigo-900 hover:bg-gray-50", "group flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm leading-6 font-semibold"), onClick: () => handleSectionChange(item.name), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(item.icon, { className: classNames(currentSection === item.name ? "text-indigo-900" : "text-indigo-900 group-hover:text-indigo-900", "h-6 w-6 shrink-0"), "aria-hidden": "true" }, void 0, false, {
          fileName: "app/routes/staffProfile.tsx",
          lineNumber: 72,
          columnNumber: 21
        }, this),
        item.name
      ] }, void 0, true, {
        fileName: "app/routes/staffProfile.tsx",
        lineNumber: 71,
        columnNumber: 19
      }, this) }, item.name, false, {
        fileName: "app/routes/staffProfile.tsx",
        lineNumber: 70,
        columnNumber: 32
      }, this)) }, void 0, false, {
        fileName: "app/routes/staffProfile.tsx",
        lineNumber: 69,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/staffProfile.tsx",
        lineNumber: 68,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/staffProfile.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none", children: [
        currentSection === "User Information" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-semibold leading-7 text-gray-900", children: "Profile" }, void 0, false, {
            fileName: "app/routes/staffProfile.tsx",
            lineNumber: 85,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", { className: "mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Username" }, void 0, false, {
                fileName: "app/routes/staffProfile.tsx",
                lineNumber: 88,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-gray-900" }, void 0, false, {
                  fileName: "app/routes/staffProfile.tsx",
                  lineNumber: 90,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "font-semibold text-indigo-900 hover:text-indigo-900", children: "Update" }, void 0, false, {
                  fileName: "app/routes/staffProfile.tsx",
                  lineNumber: 91,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/staffProfile.tsx",
                lineNumber: 89,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/staffProfile.tsx",
              lineNumber: 87,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Full Name" }, void 0, false, {
                fileName: "app/routes/staffProfile.tsx",
                lineNumber: 97,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-gray-900" }, void 0, false, {
                  fileName: "app/routes/staffProfile.tsx",
                  lineNumber: 99,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "font-semibold text-indigo-900 hover:text-indigo-900", children: "Update" }, void 0, false, {
                  fileName: "app/routes/staffProfile.tsx",
                  lineNumber: 100,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/staffProfile.tsx",
                lineNumber: 98,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/staffProfile.tsx",
              lineNumber: 96,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Password" }, void 0, false, {
                fileName: "app/routes/staffProfile.tsx",
                lineNumber: 106,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-gray-900" }, void 0, false, {
                  fileName: "app/routes/staffProfile.tsx",
                  lineNumber: 108,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "font-semibold text-indigo-900 hover:text-indigo-900", children: "Update" }, void 0, false, {
                  fileName: "app/routes/staffProfile.tsx",
                  lineNumber: 109,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/staffProfile.tsx",
                lineNumber: 107,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/staffProfile.tsx",
              lineNumber: 105,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/staffProfile.tsx",
            lineNumber: 86,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/staffProfile.tsx",
          lineNumber: 84,
          columnNumber: 55
        }, this),
        currentSection === "Contact Information" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-semibold leading-7 text-gray-900", children: "Contact" }, void 0, false, {
            fileName: "app/routes/staffProfile.tsx",
            lineNumber: 119,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", { className: "mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Phone Number" }, void 0, false, {
                fileName: "app/routes/staffProfile.tsx",
                lineNumber: 122,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-gray-900" }, void 0, false, {
                  fileName: "app/routes/staffProfile.tsx",
                  lineNumber: 124,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "font-semibold text-indigo-900 hover:text-indigo-900", children: "Update" }, void 0, false, {
                  fileName: "app/routes/staffProfile.tsx",
                  lineNumber: 125,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/staffProfile.tsx",
                lineNumber: 123,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/staffProfile.tsx",
              lineNumber: 121,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Address" }, void 0, false, {
                fileName: "app/routes/staffProfile.tsx",
                lineNumber: 131,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-gray-900" }, void 0, false, {
                  fileName: "app/routes/staffProfile.tsx",
                  lineNumber: 133,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "font-semibold text-indigo-900 hover:text-indigo-900", children: "Update" }, void 0, false, {
                  fileName: "app/routes/staffProfile.tsx",
                  lineNumber: 134,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/staffProfile.tsx",
                lineNumber: 132,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/staffProfile.tsx",
              lineNumber: 130,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Emergency Contact" }, void 0, false, {
                fileName: "app/routes/staffProfile.tsx",
                lineNumber: 140,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-gray-900" }, void 0, false, {
                  fileName: "app/routes/staffProfile.tsx",
                  lineNumber: 142,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "font-semibold text-indigo-900 hover:text-indigo-900", children: "Update" }, void 0, false, {
                  fileName: "app/routes/staffProfile.tsx",
                  lineNumber: 143,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/staffProfile.tsx",
                lineNumber: 141,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/staffProfile.tsx",
              lineNumber: 139,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/staffProfile.tsx",
            lineNumber: 120,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/staffProfile.tsx",
          lineNumber: 118,
          columnNumber: 58
        }, this),
        currentSection === "Garage Information" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-semibold leading-7 text-gray-900", children: "Garage Information" }, void 0, false, {
            fileName: "app/routes/staffProfile.tsx",
            lineNumber: 152,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", { className: "mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Garage Name" }, void 0, false, {
                fileName: "app/routes/staffProfile.tsx",
                lineNumber: 155,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-gray-900" }, void 0, false, {
                  fileName: "app/routes/staffProfile.tsx",
                  lineNumber: 157,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "font-semibold text-indigo-900 hover:text-indigo-900", children: "Update" }, void 0, false, {
                  fileName: "app/routes/staffProfile.tsx",
                  lineNumber: 158,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/staffProfile.tsx",
                lineNumber: 156,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/staffProfile.tsx",
              lineNumber: 154,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Garage Address" }, void 0, false, {
                fileName: "app/routes/staffProfile.tsx",
                lineNumber: 164,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-gray-900" }, void 0, false, {
                  fileName: "app/routes/staffProfile.tsx",
                  lineNumber: 166,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "font-semibold text-indigo-900 hover:text-indigo-900", children: "Update" }, void 0, false, {
                  fileName: "app/routes/staffProfile.tsx",
                  lineNumber: 167,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/staffProfile.tsx",
                lineNumber: 165,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/staffProfile.tsx",
              lineNumber: 163,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Garage Telephone Number" }, void 0, false, {
                fileName: "app/routes/staffProfile.tsx",
                lineNumber: 173,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-gray-900" }, void 0, false, {
                  fileName: "app/routes/staffProfile.tsx",
                  lineNumber: 175,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "font-semibold text-indigo-900 hover:text-indigo-900", children: "Update" }, void 0, false, {
                  fileName: "app/routes/staffProfile.tsx",
                  lineNumber: 176,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/staffProfile.tsx",
                lineNumber: 174,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/staffProfile.tsx",
              lineNumber: 172,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/staffProfile.tsx",
            lineNumber: 153,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/staffProfile.tsx",
          lineNumber: 151,
          columnNumber: 57
        }, this),
        currentSection === "Staff Management" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-semibold leading-7 text-gray-900", children: "Staff Management" }, void 0, false, {
            fileName: "app/routes/staffProfile.tsx",
            lineNumber: 186,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", { className: "mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Garage Staff" }, void 0, false, {
              fileName: "app/routes/staffProfile.tsx",
              lineNumber: 190,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "text-gray-900", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Staff 1" }, void 0, false, {
                  fileName: "app/routes/staffProfile.tsx",
                  lineNumber: 193,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Staff 2" }, void 0, false, {
                  fileName: "app/routes/staffProfile.tsx",
                  lineNumber: 194,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/staffProfile.tsx",
                lineNumber: 192,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "font-semibold text-indigo-900 hover:text-indigo-900" }, void 0, false, {
                fileName: "app/routes/staffProfile.tsx",
                lineNumber: 196,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/staffProfile.tsx",
              lineNumber: 191,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/staffProfile.tsx",
            lineNumber: 189,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/staffProfile.tsx",
            lineNumber: 188,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/staffProfile.tsx",
          lineNumber: 185,
          columnNumber: 55
        }, this),
        currentSection === "Booking Management" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-semibold leading-7 text-gray-900", children: "Bookings" }, void 0, false, {
            fileName: "app/routes/staffProfile.tsx",
            lineNumber: 206,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", { className: "mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Appointment Calendar" }, void 0, false, {
              fileName: "app/routes/staffProfile.tsx",
              lineNumber: 210,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "text-gray-900", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Appointment 1" }, void 0, false, {
                  fileName: "app/routes/staffProfile.tsx",
                  lineNumber: 213,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Appointment 2" }, void 0, false, {
                  fileName: "app/routes/staffProfile.tsx",
                  lineNumber: 214,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/staffProfile.tsx",
                lineNumber: 212,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "font-semibold text-indigo-900 hover:text-indigo-900" }, void 0, false, {
                fileName: "app/routes/staffProfile.tsx",
                lineNumber: 216,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/staffProfile.tsx",
              lineNumber: 211,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/staffProfile.tsx",
            lineNumber: 209,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/staffProfile.tsx",
            lineNumber: 208,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/staffProfile.tsx",
          lineNumber: 205,
          columnNumber: 57
        }, this),
        currentSection === "Business Management" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-semibold leading-7 text-gray-900", children: "Business Management" }, void 0, false, {
            fileName: "app/routes/staffProfile.tsx",
            lineNumber: 226,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", { className: "mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-6 sm:flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Business Performance" }, void 0, false, {
              fileName: "app/routes/staffProfile.tsx",
              lineNumber: 229,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/staffProfile.tsx",
              lineNumber: 228,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-6 sm:flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Booking Trends" }, void 0, false, {
              fileName: "app/routes/staffProfile.tsx",
              lineNumber: 232,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/staffProfile.tsx",
              lineNumber: 231,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-6 sm:flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Finanacial Statistics" }, void 0, false, {
              fileName: "app/routes/staffProfile.tsx",
              lineNumber: 235,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/staffProfile.tsx",
              lineNumber: 234,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-6 sm:flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Customer Satisfaction" }, void 0, false, {
              fileName: "app/routes/staffProfile.tsx",
              lineNumber: 238,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/staffProfile.tsx",
              lineNumber: 237,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/staffProfile.tsx",
            lineNumber: 227,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/staffProfile.tsx",
          lineNumber: 225,
          columnNumber: 59
        }, this),
        currentSection === "Feedbacks" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-semibold leading-7 text-gray-900", children: "Feedbacks" }, void 0, false, {
            fileName: "app/routes/staffProfile.tsx",
            lineNumber: 245,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", { className: "mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Customer Feedbacks" }, void 0, false, {
              fileName: "app/routes/staffProfile.tsx",
              lineNumber: 249,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "text-gray-900", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Appointment 1" }, void 0, false, {
                  fileName: "app/routes/staffProfile.tsx",
                  lineNumber: 252,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Appointment 2" }, void 0, false, {
                  fileName: "app/routes/staffProfile.tsx",
                  lineNumber: 253,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/staffProfile.tsx",
                lineNumber: 251,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "font-semibold text-indigo-900 hover:text-indigo-900" }, void 0, false, {
                fileName: "app/routes/staffProfile.tsx",
                lineNumber: 255,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/staffProfile.tsx",
              lineNumber: 250,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/staffProfile.tsx",
            lineNumber: 248,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/staffProfile.tsx",
            lineNumber: 247,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/staffProfile.tsx",
          lineNumber: 244,
          columnNumber: 48
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          position: "fixed",
          bottom: "10px",
          left: "10px",
          cursor: "pointer"
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/staffLogin", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeftOnRectangleIcon_default, {}, void 0, false, {
            fileName: "app/routes/staffProfile.tsx",
            lineNumber: 270,
            columnNumber: 9
          }, this),
          "Logout"
        ] }, void 0, true, {
          fileName: "app/routes/staffProfile.tsx",
          lineNumber: 269,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/routes/staffProfile.tsx",
          lineNumber: 263,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/staffProfile.tsx",
        lineNumber: 81,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/staffProfile.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/staffProfile.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/staffProfile.tsx",
    lineNumber: 63,
    columnNumber: 10
  }, this);
}
_s(Admin_profile, "FNbqyJSD79r3CG4bGNxANx/P/eg=");
_c = Admin_profile;
var _c;
$RefreshReg$(_c, "Admin_profile");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Admin_profile as default
};
//# sourceMappingURL=/build/routes/staffProfile-OPW5SUCQ.js.map
