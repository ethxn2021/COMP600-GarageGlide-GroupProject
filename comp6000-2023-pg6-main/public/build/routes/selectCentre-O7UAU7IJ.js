import "/build/_shared/chunk-TM2LA52O.js";
import {
  useParams
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

// app/routes/selectCentre.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\selectCentre.tsx"
  );
  import.meta.hot.lastModified = "1706482052638.082";
}
function selectCentre() {
  const [showNearbyCentres, setShowNearbyCentres] = (0, import_react.useState)(false);
  const [selectedCentre, setSelectedCentre] = (0, import_react.useState)(null);
  const { postcode: urlPostcode, registration: urlRegistration } = useParams();
  const [postcode, setPostcode] = (0, import_react.useState)(urlPostcode || "");
  const [registration, setRegistration] = (0, import_react.useState)(urlRegistration || "");
  (0, import_react.useEffect)(() => {
    console.log("Postcode:", postcode);
    console.log("Registration:", registration);
  }, [postcode, registration]);
  const nearbyCentres = [
    { name: "Canterbury", address: "University of Kent", city: "Canterbury", county: "Kent", country: "United Kingdom", postcode: "CT2 7FN", distance: "Approx 0.5 miles away", tel: "Tel: 01227 764000" },
    { name: "Medway", address: "University of Kent Medway Building", city: "Chatham", county: "Kent", country: "United Kingdom", postcode: "ME4 4AG", distance: "Approx 1.5 miles away", tel: "Tel: 01227 764000" }
    // Add more nearby centres as needed
  ];
  const handleFindCentre = () => {
    if (postcode.length > 8 || postcode.length < 7 || registration.trim() === "") {
      alert("Invalid postcode or registration");
    } else {
      const foundCentre = nearbyCentres.find((centre) => centre.postcode.startsWith(postcode.slice(0, 1)));
      setSelectedCentre(foundCentre);
    }
  };
  const handleConfirm = () => {
    window.location.href = `/service?postcode=${encodeURIComponent(postcode)}&registration=${encodeURIComponent(registration)}`;
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-24 sm:py-32", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mt-2 text-4xl font-bold tracking-tight sm:text-6xl", style: { color: "#112D4E" }, children: "YOUR DETAILS:" }, void 0, false, {
        fileName: "app/routes/selectCentre.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
        false,
        {
          fileName: "app/routes/selectCentre.tsx",
          lineNumber: 59,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/selectCentre.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-2 mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
        false,
        {
          fileName: "app/routes/selectCentre.tsx",
          lineNumber: 71,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/selectCentre.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "button",
        {
          className: "text-white font-light rounded-full px-9 py-2 ml-5 mt-5",
          style: { backgroundColor: "#112D4E", fontSize: "16px" },
          onClick: handleFindCentre,
          children: "Find your centre"
        },
        void 0,
        false,
        {
          fileName: "app/routes/selectCentre.tsx",
          lineNumber: 81,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/selectCentre.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto my-16 grid p-6 max-w-lg grid-cols-1 gap-6 sm:mt-20 lg:mx-auto lg:max-w-none lg:grid-cols-2 lg:gap-8 justify-center", style: { color: "#112D4E" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-8 rounded-xl bg/5", style: { backgroundColor: "#DBE2EF" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-bold mb-2", children: "YOUR VEHICLE DETAILS " }, void 0, false, {
          fileName: "app/routes/selectCentre.tsx",
          lineNumber: 93,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: { fontWeight: "bold" }, children: [
          "Registration: ",
          registration
        ] }, void 0, true, {
          fileName: "app/routes/selectCentre.tsx",
          lineNumber: 94,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "", style: { color: "#3F72AF" }, children: "Make: " }, void 0, false, {
          fileName: "app/routes/selectCentre.tsx",
          lineNumber: 97,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "", style: { color: "#3F72AF" }, children: "Model: " }, void 0, false, {
          fileName: "app/routes/selectCentre.tsx",
          lineNumber: 100,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/selectCentre.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6 rounded-xl bg/3 text-center", style: { backgroundColor: "#DBE2EF" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-bold mb-2", children: "YOUR SELECTED CENTRE" }, void 0, false, {
          fileName: "app/routes/selectCentre.tsx",
          lineNumber: 107,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: { fontWeight: "bold" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {}, void 0, false, {
          fileName: "app/routes/selectCentre.tsx",
          lineNumber: 109,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/selectCentre.tsx",
          lineNumber: 108,
          columnNumber: 11
        }, this),
        selectedCentre && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "", style: { color: "#3F72AF" }, children: selectedCentre.address }, void 0, false, {
            fileName: "app/routes/selectCentre.tsx",
            lineNumber: 113,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "", style: { color: "#3F72AF" }, children: selectedCentre.city }, void 0, false, {
            fileName: "app/routes/selectCentre.tsx",
            lineNumber: 116,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "", style: { color: "#3F72AF" }, children: selectedCentre.county }, void 0, false, {
            fileName: "app/routes/selectCentre.tsx",
            lineNumber: 119,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "", style: { color: "#3F72AF" }, children: selectedCentre.country }, void 0, false, {
            fileName: "app/routes/selectCentre.tsx",
            lineNumber: 122,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "", style: { color: "#3F72AF" }, children: selectedCentre.postcode }, void 0, false, {
            fileName: "app/routes/selectCentre.tsx",
            lineNumber: 125,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "", style: { color: "#3F72AF" }, children: selectedCentre.distance }, void 0, false, {
            fileName: "app/routes/selectCentre.tsx",
            lineNumber: 128,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "", style: { color: "#3F72AF" }, children: selectedCentre.tel }, void 0, false, {
            fileName: "app/routes/selectCentre.tsx",
            lineNumber: 131,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/selectCentre.tsx",
          lineNumber: 112,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "text-white px-4 py-2 rounded mt-2", style: { backgroundColor: "#112D4E" }, onClick: () => setShowNearbyCentres(!showNearbyCentres), children: showNearbyCentres ? "HIDE NEARBY CENTRES" : "OTHER NEARBY CENTRES" }, void 0, false, {
          fileName: "app/routes/selectCentre.tsx",
          lineNumber: 137,
          columnNumber: 11
        }, this),
        showNearbyCentres && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: nearbyCentres.map((centre, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, index, false, {
          fileName: "app/routes/selectCentre.tsx",
          lineNumber: 145,
          columnNumber: 17
        }, this)) }, void 0, false, {
          fileName: "app/routes/selectCentre.tsx",
          lineNumber: 142,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "text-white px-4 py-2 rounded mt-2", style: { backgroundColor: "#112D4E", display: "block", marginLeft: "auto" }, onClick: handleConfirm, children: "CONFIRM" }, void 0, false, {
          fileName: "app/routes/selectCentre.tsx",
          lineNumber: 154,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/selectCentre.tsx",
        lineNumber: 106,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/selectCentre.tsx",
      lineNumber: 90,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/selectCentre.tsx",
    lineNumber: 51,
    columnNumber: 5
  }, this);
}
export {
  selectCentre as default
};
//# sourceMappingURL=/build/routes/selectCentre-O7UAU7IJ.js.map
