export default () => {
  const storySection = document.querySelector(`.screen--story`);
  const coverBg = document.querySelector(`.cover-bg`);
  const link = document.querySelector(`.js-menu-link[href="#prizes"]`);

  function coverRun() {
    coverBg.classList.remove(`run`);
    if (storySection.classList.contains(`active`)) {
      coverBg.classList.add(`run`);
    } else {
      coverBg.classList.remove(`run`);
    }
  };

  document.addEventListener('wheel', (evt) => {
    if (coverBg.classList.contains(`active`)) {
      coverBg.classList.remove(`run`);
    } else if (evt.deltaY > 0) {
      coverRun();
    } else {
      coverBg.classList.remove(`run`);
    }
  });

  link.addEventListener('click', () => {
    if (coverBg.classList.contains(`run`)) {
      coverBg.classList.remove(`run`);
    }
    if (storySection.classList.contains(`active`)) {
      setTimeout(coverRun, 50);
    }
  });
};
