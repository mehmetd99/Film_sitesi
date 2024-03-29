const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const widthRatio = Math.floor(window.innerWidth / 300)
  let clickcounter = 0;
  const ImageItem = movieLists[i].querySelectorAll("img").length;
  arrow.addEventListener("click", function () {
    clickcounter++;
    if (ImageItem - (4 + clickcounter) + (4 - widthRatio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickcounter = 0;
    }
  });

  console.log (window.innerWidth)
});


/* Dark Mode */

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll 
(".container,.navbar,.sidebar,.sidebar i,.toggle,.toggle-ball,.movie-list-filter select,.movie-list-title");

ball.addEventListener("click", function(){
   items.forEach((item) => item.classList.toggle("active") )

})