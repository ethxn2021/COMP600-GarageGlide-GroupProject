import {
  es_default
} from "/build/_shared/chunk-7XQZTEX6.js";
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

// app/routes/signup.tsx
var import_react = __toESM(require_react());
init_dist();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\signup.tsx"
  );
  import.meta.hot.lastModified = "1706365588475.9304";
}
function signup() {
  const [password, setPassword] = (0, import_react.useState)("");
  const [passwordError, setPasswordError] = (0, import_react.useState)("");
  const [confirmPassword, setConfirmPassword] = (0, import_react.useState)("");
  const [confirmPasswordError, setConfirmPasswordError] = (0, import_react.useState)("");
  const [telephone, settelephone] = (0, import_react.useState)("");
  const [telephoneError, settelephoneError] = (0, import_react.useState)("");
  const validatetelephone = (telephone2) => {
    if (telephone2.length < 10) {
      return "Telephone must be more than 10 characters";
    }
    return "";
  };
  const validateConfirmPassword = (password2, confirmPassword2) => {
    if (password2 !== confirmPassword2) {
      return "Confirm password must match password";
    }
    return "";
  };
  const validatePassword = (password2) => {
    if (password2.length < 8) {
      return "Password must be more than 8 characters";
    }
    return "";
  };
  const [formStatus, setFormStatus] = (0, import_react.useState)({
    submitted: false,
    error: null
  });
  const [show, setShow] = (0, import_react.useState)(true);
  const sendEmail = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const response = await fetch("/db", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams(formData).toString()
      });
      const result = await es_default.sendForm("service_1r5awa7", "template_ybutzfc", form, "ifIYm02lZT5rdQsmD");
      console.log(result);
      form.reset();
      settelephone("");
      setPassword("");
      setConfirmPassword("");
      setFormStatus({
        submitted: true,
        error: null
      });
    } catch (error) {
      console.error(error);
      setFormStatus({
        submitted: false,
        error: "An error occurred. Please try again."
      });
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:mx-auto sm:w-full sm:max-w-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mt-10 text-center text-2xl font-bold leading-9 tracking-tight pt-10", style: { color: "#112D4E" }, children: "Sign up for an account" }, void 0, false, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 100,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 98,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-10 sm:mx-auto sm:w-full sm:max-w-sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { className: "space-y-6", onSubmit: sendEmail, method: "POST", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "firstName", className: "block text-sm font-medium leading-6 text-gray-900", style: { fontSize: "16px", color: "#112D4E" }, children: "First Name" }, void 0, false, {
            fileName: "app/routes/signup.tsx",
            lineNumber: 110,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              id: "firstName",
              name: "firstName",
              type: "text",
              required: true,
              className: "block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6",
              style: { fontSize: "16px", borderColor: "#112D4E" }
            },
            void 0,
            false,
            {
              fileName: "app/routes/signup.tsx",
              lineNumber: 114,
              columnNumber: 17
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/signup.tsx",
            lineNumber: 113,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 109,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "lastName", className: "block text-sm font-medium leading-6 text-gray-900", style: { fontSize: "16px", color: "#112D4E" }, children: "Last Name" }, void 0, false, {
            fileName: "app/routes/signup.tsx",
            lineNumber: 127,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              id: "lastName",
              name: "lastName",
              type: "text",
              required: true,
              className: "block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6",
              style: { fontSize: "16px", borderColor: "#112D4E" }
            },
            void 0,
            false,
            {
              fileName: "app/routes/signup.tsx",
              lineNumber: 131,
              columnNumber: 17
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/signup.tsx",
            lineNumber: 130,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 126,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "telephone", className: "block text-sm font-medium leading-6 text-gray-900", style: { fontSize: "16px", color: "#112D4E" }, children: "Phone Number" }, void 0, false, {
            fileName: "app/routes/signup.tsx",
            lineNumber: 144,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              id: "telephone",
              name: "telephone",
              type: "text",
              required: true,
              value: telephone,
              onChange: (e) => settelephone(e.target.value),
              onBlur: () => settelephoneError(validatetelephone(telephone)),
              className: "block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6",
              style: { fontSize: "16px", borderColor: "#112D4E" }
            },
            void 0,
            false,
            {
              fileName: "app/routes/signup.tsx",
              lineNumber: 148,
              columnNumber: 17
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/signup.tsx",
            lineNumber: 147,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 143,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium leading-6 text-gray-900", style: { fontSize: "16px", color: "#112D4E" }, children: "Email address" }, void 0, false, {
            fileName: "app/routes/signup.tsx",
            lineNumber: 164,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              id: "email",
              name: "email",
              type: "email",
              autoComplete: "email",
              required: true,
              className: "block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6",
              style: { fontSize: "16px", borderColor: "#112D4E" }
            },
            void 0,
            false,
            {
              fileName: "app/routes/signup.tsx",
              lineNumber: 168,
              columnNumber: 17
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/signup.tsx",
            lineNumber: 167,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 163,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "password", className: "block text-sm font-medium leading-6 text-gray-900", style: { fontSize: "16px", color: "#112D4E" }, children: "Password" }, void 0, false, {
            fileName: "app/routes/signup.tsx",
            lineNumber: 182,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                id: "password",
                name: "password",
                type: "password",
                autoComplete: "new-password",
                required: true,
                value: password,
                onChange: (e) => setPassword(e.target.value),
                onBlur: () => setPasswordError(validatePassword(password)),
                className: "block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              },
              void 0,
              false,
              {
                fileName: "app/routes/signup.tsx",
                lineNumber: 186,
                columnNumber: 17
              },
              this
            ),
            passwordError && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-500 text-sm mt-1", children: passwordError }, void 0, false, {
              fileName: "app/routes/signup.tsx",
              lineNumber: 197,
              columnNumber: 35
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/signup.tsx",
            lineNumber: 185,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 181,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "confirmPassword", className: "block text-sm font-medium leading-6 text-gray-900", style: { fontSize: "16px", color: "#112D4E" }, children: "Confirm Password" }, void 0, false, {
            fileName: "app/routes/signup.tsx",
            lineNumber: 203,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                id: "confirmPassword",
                name: "confirmPassword",
                type: "password",
                autoComplete: "new-password",
                required: true,
                value: confirmPassword,
                onChange: (e) => setConfirmPassword(e.target.value),
                onBlur: () => setConfirmPasswordError(validateConfirmPassword(password, confirmPassword)),
                className: "block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              },
              void 0,
              false,
              {
                fileName: "app/routes/signup.tsx",
                lineNumber: 207,
                columnNumber: 17
              },
              this
            ),
            confirmPasswordError && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-500 text-sm mt-1", children: confirmPasswordError }, void 0, false, {
              fileName: "app/routes/signup.tsx",
              lineNumber: 218,
              columnNumber: 43
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/signup.tsx",
            lineNumber: 206,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 202,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "flex w-full justify-center rounded-full px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
            style: { backgroundColor: "#112D4E", fontSize: "16px" },
            children: "Sign up"
          },
          void 0,
          false,
          {
            fileName: "app/routes/signup.tsx",
            lineNumber: 224,
            columnNumber: 15
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 223,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 106,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-10 text-center text-sm text-gray-500", children: [
        "Already have an account? ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/login", className: "font-semibold leading-6", style: { color: "#112D4E" }, children: "Sign In" }, void 0, false, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 235,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 233,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 105,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/signup.tsx",
    lineNumber: 96,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/signup.tsx",
    lineNumber: 95,
    columnNumber: 5
  }, this);
}
export {
  signup as default
};
//# sourceMappingURL=/build/routes/signup-VSEYDSGU.js.map
