import {
  api
} from "/build/_shared/chunk-FXFW7OVD.js";
import {
  Link
} from "/build/_shared/chunk-TM2LA52O.js";
import {
  ArrowLeftOnRectangleIcon_default,
  BellIcon_default,
  CreditCardIcon_default,
  CubeIcon_default,
  FingerPrintIcon_default,
  UserCircleIcon_default
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

// app/routes/profile.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\profile.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\profile.tsx"
  );
  import.meta.hot.lastModified = "1704989734584.2788";
}
var nav = [{
  name: "Personal Information",
  href: "#",
  icon: UserCircleIcon_default
}, {
  name: "Contact Information",
  href: "#",
  icon: FingerPrintIcon_default
}, {
  name: "Car Details",
  href: "#",
  icon: BellIcon_default
}, {
  name: "Bookings",
  href: "#",
  icon: CubeIcon_default
}, {
  name: "Communication Preferences",
  href: "#",
  icon: CreditCardIcon_default
}];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
var emailCookie = api.get("email");
var query = `SELECT firstName, lastName, phoneNumber, address
FROM comp6000_06.Customer
WHERE email = '${emailCookie}';`;
function Profile() {
  _s();
  const [currentSection, setCurrentSection] = (0, import_react.useState)("Personal Information");
  const [userEmail, setUserEmail] = (0, import_react.useState)("");
  const handleSectionChange = (sectionName) => {
    setCurrentSection(sectionName);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" }, void 0, false, {
      fileName: "app/routes/profile.tsx",
      lineNumber: 76,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-7xl pt-16 lg:flex lg:gap-x-16 lg:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", { className: "flex overflow-x-auto border-b border-gray-900/5 py-4 lg:block lg:w-64 lg:flex-none lg:border-0 lg:py-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "flex-none px-4 sm:px-6 lg:px-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { role: "list", className: "flex gap-x-5 gap-y-6 lg:flex-col", children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: item.href, className: classNames(currentSection === item.name ? "bg-gray-50 text-indigo-900" : "text-gray-700 hover:text-indigo-900 hover:bg-gray-50", "group flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm leading-6 font-semibold"), onClick: () => handleSectionChange(item.name), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(item.icon, { className: classNames(currentSection === item.name ? "text-indigo-900" : "text-indigo-900 group-hover:text-indigo-900", "h-6 w-6 shrink-0"), "aria-hidden": "true" }, void 0, false, {
          fileName: "app/routes/profile.tsx",
          lineNumber: 84,
          columnNumber: 21
        }, this),
        item.name
      ] }, void 0, true, {
        fileName: "app/routes/profile.tsx",
        lineNumber: 83,
        columnNumber: 19
      }, this) }, item.name, false, {
        fileName: "app/routes/profile.tsx",
        lineNumber: 82,
        columnNumber: 32
      }, this)) }, void 0, false, {
        fileName: "app/routes/profile.tsx",
        lineNumber: 81,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/profile.tsx",
        lineNumber: 80,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/profile.tsx",
        lineNumber: 79,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none", children: [
        currentSection === "Personal Information" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-semibold leading-7 text-gray-900", children: "Profile" }, void 0, false, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 96,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", { className: "mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Full name" }, void 0, false, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 99,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-gray-900" }, void 0, false, {
                  fileName: "app/routes/profile.tsx",
                  lineNumber: 101,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "font-semibold text-indigo-900 hover:text-indigo-900", children: "Update" }, void 0, false, {
                  fileName: "app/routes/profile.tsx",
                  lineNumber: 102,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 100,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 98,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Email address" }, void 0, false, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 108,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-gray-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", value: emailCookie, readOnly: true, className: "bg-gray-200" }, void 0, false, {
                  fileName: "app/routes/profile.tsx",
                  lineNumber: 111,
                  columnNumber: 23
                }, this) }, void 0, false, {
                  fileName: "app/routes/profile.tsx",
                  lineNumber: 110,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => console.log(emailCookie), className: "font-semibold text-indigo-900 hover:text-indigo-900", children: "Update" }, void 0, false, {
                  fileName: "app/routes/profile.tsx",
                  lineNumber: 113,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 109,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 107,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Password" }, void 0, false, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 119,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-gray-900" }, void 0, false, {
                  fileName: "app/routes/profile.tsx",
                  lineNumber: 121,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "font-semibold text-indigo-900 hover:text-indigo-900", children: "Update" }, void 0, false, {
                  fileName: "app/routes/profile.tsx",
                  lineNumber: 122,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 120,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 118,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 97,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/profile.tsx",
          lineNumber: 95,
          columnNumber: 59
        }, this),
        currentSection === "Contact Information" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-semibold leading-7 text-gray-900", children: "Contact Information" }, void 0, false, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 132,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", { className: "mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Phone Number" }, void 0, false, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 135,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-gray-900" }, void 0, false, {
                  fileName: "app/routes/profile.tsx",
                  lineNumber: 137,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "font-semibold text-indigo-900 hover:text-indigo-900", children: "Update" }, void 0, false, {
                  fileName: "app/routes/profile.tsx",
                  lineNumber: 138,
                  columnNumber: 11
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 136,
                columnNumber: 9
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 134,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Address" }, void 0, false, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 144,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-gray-900" }, void 0, false, {
                  fileName: "app/routes/profile.tsx",
                  lineNumber: 146,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "font-semibold text-indigo-900 hover:text-indigo-900", children: "Update" }, void 0, false, {
                  fileName: "app/routes/profile.tsx",
                  lineNumber: 147,
                  columnNumber: 11
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 145,
                columnNumber: 9
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 143,
              columnNumber: 7
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 133,
            columnNumber: 5
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/profile.tsx",
          lineNumber: 131,
          columnNumber: 58
        }, this),
        currentSection === "Car Details" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-semibold leading-7 text-gray-900", children: "Car Details" }, void 0, false, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 159,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", { className: "mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Registered Cars" }, void 0, false, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 163,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "text-gray-900", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Car 1" }, void 0, false, {
                  fileName: "app/routes/profile.tsx",
                  lineNumber: 166,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Car 2" }, void 0, false, {
                  fileName: "app/routes/profile.tsx",
                  lineNumber: 167,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 165,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "font-semibold text-indigo-900 hover:text-indigo-900", children: "Add Car" }, void 0, false, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 169,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 164,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 162,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 161,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/profile.tsx",
          lineNumber: 158,
          columnNumber: 50
        }, this),
        currentSection === "Bookings" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-semibold leading-7 text-gray-900", children: "Bookings" }, void 0, false, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 179,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", { className: "mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Upcoming Appointments" }, void 0, false, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 183,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "text-gray-900", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Appointment 1" }, void 0, false, {
                  fileName: "app/routes/profile.tsx",
                  lineNumber: 186,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Appointment 2" }, void 0, false, {
                  fileName: "app/routes/profile.tsx",
                  lineNumber: 187,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 185,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "font-semibold text-indigo-900 hover:text-indigo-900" }, void 0, false, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 189,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 184,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 182,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 181,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", { className: "mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Past Appointments" }, void 0, false, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 197,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "text-gray-900", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Appointment 1" }, void 0, false, {
                  fileName: "app/routes/profile.tsx",
                  lineNumber: 200,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Appointment 2" }, void 0, false, {
                  fileName: "app/routes/profile.tsx",
                  lineNumber: 201,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 199,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "font-semibold text-indigo-900 hover:text-indigo-900" }, void 0, false, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 203,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 198,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 196,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 195,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/profile.tsx",
          lineNumber: 178,
          columnNumber: 47
        }, this),
        currentSection === "Communication Preferences" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-semibold leading-7 text-gray-900", children: "Communication Preferences" }, void 0, false, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 213,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", { className: "mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Notification Preferences" }, void 0, false, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 216,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-gray-900" }, void 0, false, {
                  fileName: "app/routes/profile.tsx",
                  lineNumber: 218,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "font-semibold text-indigo-900 hover:text-indigo-900", children: "Update" }, void 0, false, {
                  fileName: "app/routes/profile.tsx",
                  lineNumber: 219,
                  columnNumber: 11
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 217,
                columnNumber: 9
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 215,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-6 sm:flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6", children: "Notifications for" }, void 0, false, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 225,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "mt-1 flex flex-col sm:mt-0 sm:flex-auto", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", id: "appointment", name: "appointment" }, void 0, false, {
                    fileName: "app/routes/profile.tsx",
                    lineNumber: 228,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "appointment", className: "ml-2 text-gray-900", children: "Appointment" }, void 0, false, {
                    fileName: "app/routes/profile.tsx",
                    lineNumber: 229,
                    columnNumber: 13
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/profile.tsx",
                  lineNumber: 227,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", id: "reminders", name: "reminders" }, void 0, false, {
                    fileName: "app/routes/profile.tsx",
                    lineNumber: 232,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "reminders", className: "ml-2 text-gray-900", children: "Reminders" }, void 0, false, {
                    fileName: "app/routes/profile.tsx",
                    lineNumber: 233,
                    columnNumber: 13
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/profile.tsx",
                  lineNumber: 231,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", id: "promotions", name: "promotions" }, void 0, false, {
                    fileName: "app/routes/profile.tsx",
                    lineNumber: 236,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "promotions", className: "ml-2 text-gray-900", children: "Promotions" }, void 0, false, {
                    fileName: "app/routes/profile.tsx",
                    lineNumber: 237,
                    columnNumber: 13
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/profile.tsx",
                  lineNumber: 235,
                  columnNumber: 11
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/profile.tsx",
                lineNumber: 226,
                columnNumber: 9
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/profile.tsx",
              lineNumber: 224,
              columnNumber: 7
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 214,
            columnNumber: 5
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/profile.tsx",
          lineNumber: 212,
          columnNumber: 64
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          position: "fixed",
          bottom: "10px",
          left: "10px",
          cursor: "pointer"
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/login", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeftOnRectangleIcon_default, {}, void 0, false, {
            fileName: "app/routes/profile.tsx",
            lineNumber: 251,
            columnNumber: 9
          }, this),
          "Logout"
        ] }, void 0, true, {
          fileName: "app/routes/profile.tsx",
          lineNumber: 250,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/routes/profile.tsx",
          lineNumber: 244,
          columnNumber: 14
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/profile.tsx",
        lineNumber: 93,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/profile.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/profile.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/profile.tsx",
    lineNumber: 75,
    columnNumber: 10
  }, this);
}
_s(Profile, "ubRKk4dblvK2ioIC1tUM2ecB2x8=");
_c = Profile;
var _c;
$RefreshReg$(_c, "Profile");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Profile as default
};
//# sourceMappingURL=/build/routes/profile-P3W4SPP5.js.map
