import {
  cssBundleHref,
  tailwind_default
} from "/build/_shared/chunk-E75Y2YEV.js";
import {
  ArrowTrendingUpIcon_default,
  ClockIcon_default,
  HeartIcon_default
} from "/build/_shared/chunk-ZMC54G4P.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-7PHB3BFD.js";
import "/build/_shared/chunk-CJ4MY3PQ.js";
import {
  createHotContext
} from "/build/_shared/chunk-4KLX3EKH.js";
import "/build/_shared/chunk-JR22VO6P.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/about.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\about.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\about.tsx"
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
var cards = [{
  name: "Expertise and Services",
  description: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: "Our team of skilled artisans and technicians, equipped with a wealth of knowledge, ensures that every vehicle receives meticulous care and attention. Whether it's routine maintenance or intricate detailing, we pride ourselves on understanding the unique needs of each vehicle, providing services that go beyond expectations. In the ever-evolving landscape of automotive technology, we stand at the forefront of innovation." }, void 0, false, {
    fileName: "app/routes/about.tsx",
    lineNumber: 35,
    columnNumber: 16
  }, this),
  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowTrendingUpIcon_default, {}, void 0, false, {
    fileName: "app/routes/about.tsx",
    lineNumber: 39,
    columnNumber: 9
  }, this)
}, {
  name: "Our History",
  description: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    "Our company was born in 2023 with a bold vision \u2014 to revolutionize how vehicles receive top-notch care. Our founders set out to simplify garage services, making the booking process as easy as ordering pizza.",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/about.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this),
    "After tireless development, we launched our platform, becoming the go-to destination for automotive enthusiasts. From routine engine check-ups to custom detailing, we expanded our offerings, always striving for excellence."
  ] }, void 0, true, {
    fileName: "app/routes/about.tsx",
    lineNumber: 42,
    columnNumber: 16
  }, this),
  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClockIcon_default, {}, void 0, false, {
    fileName: "app/routes/about.tsx",
    lineNumber: 47,
    columnNumber: 9
  }, this)
}, {
  name: "Customer Focus",
  description: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: "As guardians of your automotive dreams, we place you at the center of everything we do. Our customer-centric approach ensures a seamless experience \u2013 from the moment you entrust us with your vehicle to the exhilarating drive that follows our expert touch. In the realm of personalized experiences, your voice is the guiding force. Our collaboration goes beyond services; it's about understanding your needs, dreams, and desires, translating them into a tailored automotive reality." }, void 0, false, {
    fileName: "app/routes/about.tsx",
    lineNumber: 50,
    columnNumber: 16
  }, this),
  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeartIcon_default, {}, void 0, false, {
    fileName: "app/routes/about.tsx",
    lineNumber: 54,
    columnNumber: 9
  }, this)
}];
var testimonials = [{
  quote: "Amazing service! The attention to detail and expertise of the team exceeded my expectations. My car has never looked better.",
  author: {
    name: "John Doe",
    position: "Happy Customer"
  }
}, {
  quote: "I've been a customer for years, and I'm always impressed with the professionalism and quality of service. Highly recommended!",
  author: {
    name: "Jane Smith",
    position: "Satisfied Driver"
  }
}, {
  quote: "Reliable and trustworthy. They have earned my trust with their consistent quality of service.",
  author: {
    name: "Sarah Foster",
    position: "Satisfied Patron"
  }
}, {
  quote: "The team at this garage truly cares about their customers. They go above and beyond to ensure satisfaction. I won't go anywhere else.",
  author: {
    name: "Sam Johnson",
    position: "Loyal Client"
  }
}, {
  quote: "They went above and beyond to ensure my car was not only repaired but also returned in a clean and polished condition. Professional, courteous, and highly skilled\u2014AutoPro Solutions is the complete package.",
  author: {
    name: "Sam Johnson",
    position: "Loyal Client"
  }
}, {
  quote: "What sets them apart is not just their technical proficiency but their commitment to customer satisfaction.",
  author: {
    name: "John Ian",
    position: "Impressed customer"
  }
}, {
  quote: "Top-notch professionals! I've been a loyal customer for years, and their expertise never disappoints.",
  author: {
    name: "Michael Turner",
    position: "Long-time Client"
  }
}, {
  quote: "Prompt and efficient. The service provided was excellent, and the staff was friendly and knowledgeable.",
  author: {
    name: "Lisa Anderson",
    position: "Happy Driver"
  }
}, {
  quote: "Exceptional work! My car looks brand new after their detailing service. Couldn't be happier.",
  author: {
    name: "David Martinez",
    position: "Delighted Customer"
  }
}];
function About() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-24 sm:py-32", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-2xl text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mt-2 text-4xl font-bold tracking-tight sm:text-6xl", style: {
          color: "#112D4E"
        }, children: "About Us" }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 122,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-6 text-lg leading-8", style: {
          color: "#112D4E"
        }, children: "Our dedication to excellence extends to delivering high-quality, timely, and reliable services, making car maintenance a stress-free and customer-centric experience." }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 127,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          marginTop: "10px",
          fontSize: "large"
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/locations", style: {
          color: "#3F72AF"
        }, children: [
          "View Garage Locations ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
            marginLeft: "5px"
          }, children: "\u2192" }, void 0, false, {
            fileName: "app/routes/about.tsx",
            lineNumber: 140,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/about.tsx",
          lineNumber: 137,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 133,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/about.tsx",
        lineNumber: 121,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8 justify-center", style: {
        color: "#112D4E"
      }, children: cards.map((card) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-x-4 rounded-xl bg/5 p-6 ring-inset", style: {
        backgroundColor: "#DBE2EF"
      }, children: [
        card.icon && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-10 w-10 flex-none ", style: {
          color: "#112D4E"
        }, children: card.icon }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 152,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-base leading-7", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-semibold text-2xl", style: {
            color: "#112D4E"
          }, children: card.name }, void 0, false, {
            fileName: "app/routes/about.tsx",
            lineNumber: 159,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2", style: {
            color: "#112D4E"
          }, children: card.description }, void 0, false, {
            fileName: "app/routes/about.tsx",
            lineNumber: 164,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/about.tsx",
          lineNumber: 158,
          columnNumber: 15
        }, this)
      ] }, card.name, true, {
        fileName: "app/routes/about.tsx",
        lineNumber: 149,
        columnNumber: 30
      }, this)) }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 146,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/about.tsx",
      lineNumber: 120,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-7xl px-6 lg:px-8 text-center mt-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-4xl font-bold tracking-tight sm:text-6xl", style: {
        color: "#112D4E"
      }, children: "Our Testimonials" }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 175,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-4xl font-bold tracking-tight sm:text-xl mt-6", children: '"Verified and Trusted"' }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 180,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/about.tsx",
      lineNumber: 174,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3", children: testimonials.map((testimonial) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-8 sm:inline-block sm:w-full sm:px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("figure", { className: "rounded-2xl p-8 text-sm leading-6", style: {
      backgroundColor: "#DBE2EF"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("blockquote", { className: "", style: {
        color: "#112D4E"
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: `\u201C${testimonial.quote}\u201D` }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 195,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 192,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("figcaption", { className: "mt-6 flex items-center gap-x-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-semibold text-gray-900", children: testimonial.author.name }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 199,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", style: {
          color: "#3F72AF"
        }, children: `@${testimonial.author.position}` }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 200,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/about.tsx",
        lineNumber: 198,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 197,
        columnNumber: 19
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/about.tsx",
      lineNumber: 189,
      columnNumber: 17
    }, this) }, testimonial.author.position, false, {
      fileName: "app/routes/about.tsx",
      lineNumber: 188,
      columnNumber: 46
    }, this)) }, void 0, false, {
      fileName: "app/routes/about.tsx",
      lineNumber: 187,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/about.tsx",
      lineNumber: 186,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/about.tsx",
      lineNumber: 185,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/about.tsx",
    lineNumber: 119,
    columnNumber: 10
  }, this);
}
_c = About;
var _c;
$RefreshReg$(_c, "About");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  About as default,
  links
};
//# sourceMappingURL=/build/routes/about-ICEDM6YI.js.map
