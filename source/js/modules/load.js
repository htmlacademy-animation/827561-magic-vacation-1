export default () => {
  const body = document.querySelector(`body`);
  window.onload = function () {
    body.classList.add(`body-loaded`);
  };
};
