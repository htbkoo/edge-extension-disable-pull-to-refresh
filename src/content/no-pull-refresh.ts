console.debug("=>(no-pull-refresh.js) script loaded");

// const appendCssToBody = () => {
//   console.debug("=>(service-worker.js) appendCssToBody");
//
// };

const DISABLE_PULL_TO_REFRESH_CLASS = "pull-down-refresh--disabled";

const appendClassToBody = () => {
  console.debug("=>(no-pull-refresh.js) appendClassToBody");

  document.body.classList.add(DISABLE_PULL_TO_REFRESH_CLASS);
};

appendClassToBody();
