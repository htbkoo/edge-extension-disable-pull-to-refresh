console.debug("=>(no-pull-refresh.js) script loaded");

// const appendCssToBody = () => {
//   console.debug("=>(service-worker.js) appendCssToBody");
//
// };

const DISABLE_PULL_TO_REFRESH_CLASS = "pull-down-refresh--disabled";

const appendPullDownRefreshDisabledClassToHtml = () => {
  console.debug("=>(no-pull-refresh.js) appendNoPullRefreshClassToHtml");

  document.documentElement.classList.add(DISABLE_PULL_TO_REFRESH_CLASS);
};

appendPullDownRefreshDisabledClassToHtml();
