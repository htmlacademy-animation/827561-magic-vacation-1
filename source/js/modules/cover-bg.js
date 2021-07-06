export default () => {
  const storySection = document.querySelector(`.screen--story`);
  const coverBg = document.querySelector(`.cover-bg`);
  const link = document.querySelector(`.js-menu-link[href="#prizes"]`);

  function coverRun() {
    if (storySection.classList.contains(`active`)) {
        coverBg.classList.add('run');
          setTimeout(()=>{
            coverBg.classList.remove('run');
        }, 1300)
    }
  };

  document.addEventListener('wheel', (evt) => {
    if (evt.deltaY > 0) {
      coverRun();
    }
  });

  link.addEventListener('click', () => {
    coverRun();
  });
};
