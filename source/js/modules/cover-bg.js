export default () => {
  let storySection = document.querySelector(`.screen--story`);
  let coverBg = document.querySelector(`.cover-bg`);

  document.addEventListener('wheel', (evt)=>{
    if (evt.deltaY === 100) {
      if (storySection.classList.contains(`active`)) {
      coverBg.classList.add(`run`);
      setTimeout(fullPageScroll, 1000);
      }
    } else {
      coverBg.classList.remove(`run`);
    }
  });
};
