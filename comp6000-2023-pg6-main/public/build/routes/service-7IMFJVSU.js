import "/build/_shared/chunk-TM2LA52O.js";
import {
  Link,
  init_dist2 as init_dist,
  useLocation
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

// app/routes/service.tsx
var import_react = __toESM(require_react());
init_dist();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\service.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\service.tsx"
  );
}
var servicesData = [{
  id: 1,
  name: "Car Servicing",
  description: "Ensure the optimal performance and longevity of your vehicle with our comprehensive car servicing. Our skilled technicians perform thorough maintenance to keep your car in top condition."
}, {
  id: 2,
  name: "MOT",
  description: "Our MOT tests guarantee that your vehicle meets the necessary safety and environmental standards. Stay compliant and roadworthy with our reliable MOT services."
}, {
  id: 3,
  name: "Tires Fix And Replacements",
  description: "From tire repairs to replacements, our service ensures your vehicle's safety and performance on the road. We address issues promptly and provide quality tire solutions."
}, {
  id: 4,
  name: "Windscreen Repairs",
  description: "Trust us for effective windscreen repairs. Our technicians address chips and cracks, ensuring clear visibility and maintaining the structural integrity of your vehicle."
}, {
  id: 5,
  name: "Oil and Brake Repairs",
  description: "Keep your vehicle's essential systems in check with our oil and brake repair services. We address issues promptly, ensuring smooth operation and safety on the road."
}, {
  id: 6,
  name: "Battery Change",
  description: "When it's time for a new battery, rely on our expert technicians for a seamless replacement. We provide reliable battery change services to keep your vehicle powered."
}, {
  id: 7,
  name: "Diagnostic Check",
  description: "Our comprehensive diagnostic checks identify potential issues within your vehicle's systems. Stay proactive in addressing problems and ensure peak performance."
}, {
  id: 8,
  name: "Engine TuneUps",
  description: "Enhance your vehicle's performance with our engine tune-up services. Our skilled technicians optimize engine components to improve efficiency and reliability."
}];
function ServicesPage() {
  _s();
  const location = useLocation();
  const [postcode, setPostcode] = (0, import_react.useState)("");
  const [registration, setRegistration] = (0, import_react.useState)("");
  (0, import_react.useEffect)(() => {
    const searchParams = new URLSearchParams(location.search);
    const postcodeParam = searchParams.get("postcode");
    const registrationParam = searchParams.get("registration");
    setPostcode(postcodeParam || "");
    setRegistration(registrationParam || "");
  }, [location.search]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-24 sm:py-32 mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-2xl text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "mt-2 text-4xl font-bold tracking-tight sm:text-6xl", style: {
      color: "#112D4E"
    }, children: "Services" }, void 0, false, {
      fileName: "app/routes/service.tsx",
      lineNumber: 73,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/service.tsx",
      lineNumber: 72,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto my-16 grid p-6 max-w-lg grid-cols-1 gap-6 sm:mt-20 lg:mx-auto lg:max-w-none lg:grid-cols-2 lg:gap-8 justify-center", style: {
      color: "#112D4E"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6 rounded-xl bg/3 text-center", style: {
      backgroundColor: "#DBE2EF"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-bold mb-2", children: "YOUR DETAILS:" }, void 0, false, {
        fileName: "app/routes/service.tsx",
        lineNumber: 88,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "", style: {
        color: "#3F72AF"
      }, children: [
        "Postcode: ",
        postcode
      ] }, void 0, true, {
        fileName: "app/routes/service.tsx",
        lineNumber: 91,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "", style: {
        color: "#3F72AF"
      }, children: [
        "Registration: ",
        registration
      ] }, void 0, true, {
        fileName: "app/routes/service.tsx",
        lineNumber: 94,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/service.tsx",
      lineNumber: 85,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/service.tsx",
      lineNumber: 81,
      columnNumber: 8
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid-container display-grid text-center p-4 grid pl-4 pr-4 md:pl-8 md:pr-8 pt-20", style: {
      textAlign: "center",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "20px",
      color: "#112D4E"
    }, children: [
      servicesData.map((service) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 flex flex-col items-center mt-4 service-card", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/${service.name.replace(/\s+/g, "")}`, className: "hover flex flex-col items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-bold text-lg mt-2", children: service.name }, void 0, false, {
          fileName: "app/routes/service.tsx",
          lineNumber: 111,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-8 text-sm", children: service.description }, void 0, false, {
          fileName: "app/routes/service.tsx",
          lineNumber: 112,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/service.tsx",
        lineNumber: 109,
        columnNumber: 13
      }, this) }, service.id, false, {
        fileName: "app/routes/service.tsx",
        lineNumber: 108,
        columnNumber: 38
      }, this)),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("style", { children: `
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
` }, void 0, false, {
        fileName: "app/routes/service.tsx",
        lineNumber: 116,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/service.tsx",
      lineNumber: 102,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto p-8 justify-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mt-5 text-5xl font-bold tracking-tight sm:text-5xl text-center justify-center", style: {
        color: "#112D4E"
      }, children: "Environmental Initiatives" }, void 0, false, {
        fileName: "app/routes/service.tsx",
        lineNumber: 142,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-3 mx-auto font-semibold max-w-2xl text-center", style: {
        color: "#5F6F52",
        textAlign: "center"
      }, children: "We are committed to minimizing our environmental impact and contributing to a sustainable future. Our eco-friendly practices and environmentally conscious products aim to provide not only exceptional service but also a greener and cleaner automotive experience." }, void 0, false, {
        fileName: "app/routes/service.tsx",
        lineNumber: 147,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-bold text-2xl mt-4", style: {
        color: "#3A4D39"
      }, children: "Our Practices" }, void 0, false, {
        fileName: "app/routes/service.tsx",
        lineNumber: 154,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "bullet mt-2", style: {
        color: "#5F6F52"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-bold", children: "Recycling Program:" }, void 0, false, {
            fileName: "app/routes/service.tsx",
            lineNumber: 162,
            columnNumber: 15
          }, this),
          " We actively participate in recycling programs to responsibly manage and reduce waste generated during our operations."
        ] }, void 0, true, {
          fileName: "app/routes/service.tsx",
          lineNumber: 162,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-bold", children: "Energy Efficiency:" }, void 0, false, {
            fileName: "app/routes/service.tsx",
            lineNumber: 163,
            columnNumber: 15
          }, this),
          " Our facility is equipped with energy-efficient systems and practices to minimize energy consumption."
        ] }, void 0, true, {
          fileName: "app/routes/service.tsx",
          lineNumber: 163,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-bold", children: "Wate Conservation:" }, void 0, false, {
            fileName: "app/routes/service.tsx",
            lineNumber: 164,
            columnNumber: 15
          }, this),
          " We implement water-saving measures to reduce consumption and promote responsible water usage."
        ] }, void 0, true, {
          fileName: "app/routes/service.tsx",
          lineNumber: 164,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/service.tsx",
        lineNumber: 159,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4", style: {
        borderTop: "1px solid #3A4D39"
      } }, void 0, false, {
        fileName: "app/routes/service.tsx",
        lineNumber: 167,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-bold text-2xl mt-4", style: {
        color: "#3A4D39"
      }, children: "Eco-Friendly Products" }, void 0, false, {
        fileName: "app/routes/service.tsx",
        lineNumber: 171,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "bullet mt-2", style: {
        color: "#5F6F52"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-bold", children: "Biodegradble Cleaning Products:" }, void 0, false, {
            fileName: "app/routes/service.tsx",
            lineNumber: 179,
            columnNumber: 15
          }, this),
          " We use biodegradable and environmentally friendly cleaning products to minimize harm to the environment."
        ] }, void 0, true, {
          fileName: "app/routes/service.tsx",
          lineNumber: 179,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-bold", children: "Green Lubricants and Fluids:" }, void 0, false, {
            fileName: "app/routes/service.tsx",
            lineNumber: 180,
            columnNumber: 15
          }, this),
          " Our commitment to sustainability extends to the products we use, including eco-friendly lubricants and fluids."
        ] }, void 0, true, {
          fileName: "app/routes/service.tsx",
          lineNumber: 180,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/service.tsx",
        lineNumber: 176,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4", style: {
        borderTop: "1px solid #3A4D39"
      } }, void 0, false, {
        fileName: "app/routes/service.tsx",
        lineNumber: 183,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", { className: "font-bold text-2xl mt-4", style: {
        color: "#3A4D39"
      }, children: "Going Green Together" }, void 0, false, {
        fileName: "app/routes/service.tsx",
        lineNumber: 187,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 mx-auto", style: {
        color: "#5F6F52"
      }, children: "By choosing Us, you're not just investing in premium automotive services, you're supporting a business dedicated to making environmentally conscious choices. Join us in our commitment to a greener future." }, void 0, false, {
        fileName: "app/routes/service.tsx",
        lineNumber: 192,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("style", { children: `
            ul.bullet{
           list-style-type: circle;
            }
         ` }, void 0, false, {
        fileName: "app/routes/service.tsx",
        lineNumber: 197,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/service.tsx",
      lineNumber: 141,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/service.tsx",
    lineNumber: 71,
    columnNumber: 10
  }, this);
}
_s(ServicesPage, "GPevmesNaUiY+mlR3u+L0OvPbo8=", false, function() {
  return [useLocation];
});
_c = ServicesPage;
var _c;
$RefreshReg$(_c, "ServicesPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ServicesPage as default
};
//# sourceMappingURL=/build/routes/service-7IMFJVSU.js.map
