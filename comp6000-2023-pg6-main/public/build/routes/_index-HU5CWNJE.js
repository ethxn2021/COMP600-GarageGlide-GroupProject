import {
  Link,
  init_dist2 as init_dist,
  useNavigate
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

// app/routes/_index.tsx
init_dist();
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\_index.tsx"
  );
  import.meta.hot.lastModified = "1706481993220.8125";
}
function Index() {
  _s();
  const [registrationNumber, setRegistrationNumber] = (0, import_react.useState)("");
  const [postcode, setPostcode] = (0, import_react.useState)("");
  const [errorMessage, setErrorMessage] = (0, import_react.useState)("");
  const navigate = useNavigate();
  const isValidRegistrationNumber = (regNumber) => {
    const regNumberPattern = /^[A-Za-z]{2}\d{2}[A-Za-z]{3}$/;
    return regNumberPattern.test(regNumber);
  };
  const isValidPostcode = (postcode2) => {
    const postcodePattern = /^[A-Za-z]{1,2}\d{1,2}[A-Za-z]?\s?\d[A-Za-z]{2}$/;
    return postcodePattern.test(postcode2);
  };
  const handleFormSubmit = () => {
    if (!isValidRegistrationNumber(registrationNumber)) {
      setErrorMessage("Invalid registration number");
    } else if (!isValidPostcode(postcode)) {
      setErrorMessage("Invalid postcode");
    } else {
      setErrorMessage("");
      navigate(`/selectCentre?postcode=${postcode}&registration=${registrationNumber}`);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-contain", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-screen pt-20 flex justify-center items-center px-4 sm:px-6 lg:px-8", style: {
      width: "100%",
      backgroundSize: "cover",
      backgroundImage: `url("https://fastly.picsum.photos/id/79/2000/3011.jpg?hmac=TQsXWj0kLBLRXbSAh2Pygog1-cOefqpjEoKyl0uD3tg")`
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-center text-7xl font-semibold text-white", children: [
      "A REPAIR SHOP",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this),
      "YOU CAN TRUST"
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 57,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "RegNumber", style: {
      width: "100%",
      height: "5cm",
      backgroundColor: "#F9F7F7"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-center font-semibold", style: {
        color: "#112D4E",
        padding: "20px"
      }, children: [
        "Fill in the form below and we will get",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 75,
          columnNumber: 11
        }, this),
        "you started"
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "flex justify-center items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "registrationNumber", className: "block font-extralight", style: {
            fontSize: "16px"
          }, children: "Registration Number" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 82,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "registrationNumber", className: "border-1 px-2 py-1 w-60", style: {
            fontSize: "16px",
            borderColor: "#112D4E"
          }, value: registrationNumber, onChange: (e) => setRegistrationNumber(e.target.value) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 87,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 81,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 92,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "postcode", className: " block font-extralight", children: "Postcode" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 94,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "postcode", className: "border-1 px- py-1 w-60", style: {
            fontSize: "16px",
            borderColor: "#112D4E"
          }, value: postcode, onChange: (e) => setPostcode(e.target.value) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 97,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 93,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "text-white font-light rounded-full px-9 py-2 ml-5 mt-5", style: {
          backgroundColor: "#112D4E",
          fontSize: "16px"
        }, onClick: handleFormSubmit, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", className: "block w-full h-full text-decoration-none text-inherit", children: "Submit" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 107,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 103,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 79,
        columnNumber: 9
      }, this),
      errorMessage && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-500 text-center mt-2", style: {
        fontSize: "14px"
      }, children: errorMessage }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 113,
        columnNumber: 26
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "picture flex justify-center items-center", style: {
      height: "7cm",
      marginTop: "40px",
      backgroundImage: `url("https://fastly.picsum.photos/id/88/1280/1707.jpg?hmac=NnkwPVDBTVxHkc4rALB_fyu-OHY2usdm7iRk5El7JC4")`,
      backgroundSize: "cover"
    } }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 121,
      columnNumber: 8
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "testimonial-container", style: {
      display: "flex",
      alignItems: "center",
      marginTop: "100px",
      marginLeft: "30px",
      zIndex: "1"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "testimonial-text", style: {
        flexGrow: 5
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "testimonial text-center", style: {
          fontWeight: "bold",
          color: "#112D4E",
          fontSize: "42px"
        }, children: "Testimonials" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 139,
          columnNumber: 12
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
          color: "#112D4E",
          fontSize: "16px",
          fontWeight: "light"
        }, children: "The team there is not just skilled mechanics, but also incredibly honest and transparent. They took the time to explain the issues with my car in terms I could understand and provided a fair quote. No hidden fees, no unnecessary repairs\u2014just quality service. My car runs smoother than ever!" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 146,
          columnNumber: 12
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "find-out-more-button text-white font-light rounded-full px-9 py-2", style: {
          backgroundColor: "#112D4E",
          fontSize: "16px",
          marginTop: "20px"
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/about", className: "text-decoration-none", children: "Find Out More" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 158,
          columnNumber: 14
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 153,
          columnNumber: 12
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 136,
        columnNumber: 10
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "testimonial-image", style: {
        flexGrow: 1,
        alignItems: "flex-end"
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://fastly.picsum.photos/id/111/4400/2656.jpg?hmac=leq8lj40D6cqFq5M_NLXkMYtV-30TtOOnzklhjPaAAQ", alt: "img", style: {
        maxWidth: "100%",
        height: "auto"
      } }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 168,
        columnNumber: 12
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 164,
        columnNumber: 10
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 129,
      columnNumber: 8
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "w-full", style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#112D4E",
      zIndex: "0",
      padding: "20px",
      boxSizing: "border-box"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-center", style: {
        fontWeight: "bold",
        color: "white",
        fontSize: "42px",
        marginBottom: "20px"
      }, children: "Are You Interested in Our Services?" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 186,
        columnNumber: 10
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "contact-us-button font-light rounded-full px-9 py-2 mt-auto", style: {
        backgroundColor: "#F9F7F7",
        fontSize: "16px",
        color: "#4B6078",
        zIndex: "1"
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/contact", className: "text-decoration-none text-inherit", children: "Contact Us" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 201,
        columnNumber: 12
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 195,
        columnNumber: 10
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 176,
      columnNumber: 8
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "map mt-5" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 208,
      columnNumber: 8
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 51,
    columnNumber: 10
  }, this);
}
_s(Index, "mti5Dlmm7j6szzQV9LvivqfE7iY=", false, function() {
  return [useNavigate];
});
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/_index-HU5CWNJE.js.map
