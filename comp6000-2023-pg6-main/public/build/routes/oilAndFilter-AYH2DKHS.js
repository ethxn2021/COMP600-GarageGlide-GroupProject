import {
  require_react_datepicker_min
} from "/build/_shared/chunk-VLH5WOVJ.js";
import {
  Breadcrumbs
} from "/build/_shared/chunk-TOGZ7TXE.js";
import "/build/_shared/chunk-ZMC54G4P.js";
import "/build/_shared/chunk-WEAPBHQG.js";
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

// app/routes/oilAndFilter.tsx
var import_react = __toESM(require_react());
var import_react_datepicker = __toESM(require_react_datepicker_min());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\oilAndFilter.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\oilAndFilter.tsx"
  );
}
function OilAndFilter() {
  _s();
  const [registration, setRegistration] = (0, import_react.useState)("");
  const [postCode, setPostCode] = (0, import_react.useState)("");
  const [selectedDate, setSelectedDate] = (0, import_react.useState)(null);
  const breadcrumbPaths = [{
    label: "Services",
    url: "/service"
  }, {
    label: "Car Servcing",
    url: "/carServicing"
  }, {
    label: "Oil And filter Service",
    url: "/oilAndFilter"
  }];
  const handleRegistrationChange = (e) => {
    setRegistration(e.target.value);
  };
  const handlePostCodeChange = (e) => {
    setPostCode(e.target.value);
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-x-0 px-6 py-3 flex flex-row justify-between mx-auto w-full top-28 pl-18", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Breadcrumbs, { paths: breadcrumbPaths }, void 0, false, {
      fileName: "app/routes/oilAndFilter.tsx",
      lineNumber: 55,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/oilAndFilter.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-16 max-w-md p-6 bg-white rounded shadow-md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "fixed inset-x-0 px-6 py-3 flex flex-row justify-between top-0 max-w-7xl mx-auto z-10", style: {
        backgroundColor: "#F9F7F7"
      } }, void 0, false, {
        fileName: "app/routes/oilAndFilter.tsx",
        lineNumber: 60,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold mb-4 text-center", children: "Oil and Filter Change" }, void 0, false, {
        fileName: "app/routes/oilAndFilter.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "img",
        {
          src: "/images/oil-and-filter.png",
          alt: "Service Image",
          className: "mx-auto mb-4 rounded-lg",
          style: {
            maxWidth: "150px",
            height: "auto"
          }
        },
        void 0,
        false,
        {
          fileName: "app/routes/oilAndFilter.tsx",
          lineNumber: 72,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-bold", children: "From \xA3109.99*" }, void 0, false, {
        fileName: "app/routes/oilAndFilter.tsx",
        lineNumber: 81,
        columnNumber: 10
      }, this) }, void 0, false, {
        fileName: "app/routes/oilAndFilter.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "*Prices vary by location and vehicle. Add your details below to get your personalized price" }, void 0, false, {
        fileName: "app/routes/oilAndFilter.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { onSubmit: handleSubmit, className: "mt-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "registration", className: "block mb-2 text-sm text-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-navy-blue-500 font-bold", children: "Registration:" }, void 0, false, {
            fileName: "app/routes/oilAndFilter.tsx",
            lineNumber: 90,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "registration", name: "registration", className: "border p-2 w-full mt-1", placeholder: "Enter Registration", onChange: handleRegistrationChange }, void 0, false, {
            fileName: "app/routes/oilAndFilter.tsx",
            lineNumber: 91,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/oilAndFilter.tsx",
          lineNumber: 89,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "postCode", className: "block mb-2 text-sm text-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-navy-blue-500 font-bold", children: "Post Code:" }, void 0, false, {
            fileName: "app/routes/oilAndFilter.tsx",
            lineNumber: 96,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "postCode", name: "postCode", className: "border p-2 w-full mt-1", placeholder: "Enter Post Code", onChange: handlePostCodeChange }, void 0, false, {
            fileName: "app/routes/oilAndFilter.tsx",
            lineNumber: 97,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/oilAndFilter.tsx",
          lineNumber: 95,
          columnNumber: 11
        }, this),
        registration && postCode && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block mb-2 text-sm text-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-navy-blue-500 font-bold", children: "Select Date:" }, void 0, false, {
            fileName: "app/routes/oilAndFilter.tsx",
            lineNumber: 103,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_datepicker.default, { selected: selectedDate, onChange: handleDateChange, dateFormat: "dd/MM/yyyy" }, void 0, false, {
            fileName: "app/routes/oilAndFilter.tsx",
            lineNumber: 104,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/oilAndFilter.tsx",
          lineNumber: 102,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/oilAndFilter.tsx",
          lineNumber: 101,
          columnNumber: 40
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: `bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 ${!(selectedDate && registration && postCode) ? "opacity-50 cursor-not-allowed" : ""}`, disabled: !(selectedDate && registration && postCode), children: "Book Now" }, void 0, false, {
          fileName: "app/routes/oilAndFilter.tsx",
          lineNumber: 110,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/oilAndFilter.tsx",
        lineNumber: 87,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/oilAndFilter.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/oilAndFilter.tsx",
    lineNumber: 52,
    columnNumber: 10
  }, this);
}
_s(OilAndFilter, "F/dY84rDIAQ2IuXcojXOn4shq0M=");
_c = OilAndFilter;
var _c;
$RefreshReg$(_c, "OilAndFilter");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  OilAndFilter as default
};
//# sourceMappingURL=/build/routes/oilAndFilter-AYH2DKHS.js.map
