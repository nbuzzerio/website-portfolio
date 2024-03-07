const handleClick = function (e: any) {
  let card = e.target;
  let cardClasses = Array.prototype.slice.call(card.classList);

  if (cardClasses.includes("tech-card")) {
    //finding the card img
    card = card.querySelector(".tech-icon");
    cardClasses = Array.prototype.slice.call(card.classList);
  } else if (cardClasses.includes("close")) {
    card = card.parentElement.parentElement.querySelector(".tech-icon");
    cardClasses = Array.prototype.slice.call(card.classList);
  }

  // const addClasses = function (el, classArr) {
  //   for (const classname of classArr) {
  //     el.classList.add(classname);
  //   }
  // };
  // const removeClasses = function (el, classArr) {
  //   for (const classname of classArr) {
  //     el.classList.remove(classname);
  //   }
  // };

  if (cardClasses.includes("tech-icon")) {
    if (cardClasses.includes("techTile-active")) {
      card.classList.remove("techTile-active");
      card.parentElement.parentElement.classList.remove("techTile");
      card.parentElement.parentElement
        .querySelector(".tech__info-wrapper")
        .classList.remove("active");
    } else {
      card.classList.add("techTile-active");
      card.parentElement.parentElement.classList.add("techTile");
      card.parentElement.parentElement
        .querySelector(".tech__info-wrapper")
        .classList.add("active");
    }
  }

  // if (cardClasses.includes("animate-expand")) {
  //   addClasses(card, ["animate-contract"]);
  //   removeClasses(card, [
  //     "animate-expand",
  //     "lg:p-20",
  //     "sm:px-48",
  //     "px-10",
  //     "py-10",
  //   ]);
  //   addClasses(card.parentElement.parentElement, [
  //     "w-2/12",
  //     "hover:scale-125",
  //   ]);
  //   removeClasses(card.parentElement.parentElement, [
  //     "absolute",
  //     "sm:w-[88%]",
  //     "w-[95%]",
  //     "p-10",
  //     "z-10",
  //     "scale-105",
  //   ]);
  //   card.parentElement.parentElement
  //     .querySelector(".tech__info-wrapper")
  //     .classList.add("hidden");
  // } else if (cardClasses.includes("tech-icon")) {
  //   addClasses(card, [
  //     "animate-expand",
  //     "lg:p-20",
  //     "sm:px-48",
  //     "px-10",
  //     "py-10",
  //   ]);
  //   removeClasses(card, ["animate-contract"]);
  //   addClasses(card.parentElement.parentElement, [
  //     "absolute",
  //     "sm:w-[88%]",
  //     "w-[95%]",
  //     "p-10",
  //     "z-10",
  //     "scale-105",
  //   ]);
  //   removeClasses(card.parentElement.parentElement, [
  //     "w-2/12",
  //     "hover:scale-125",
  //   ]);
  //   card.parentElement.parentElement
  //     .querySelector(".tech__info-wrapper")
  //     .classList.remove("hidden");
  // } else if (cardClasses.includes("img-wrapper")) {
  //   removeClasses(card, ["lg:p-20", "sm:px-48", "px-10", "py-10"]);
  //   const cardIcon = card.querySelector(".tech-icon");
  //   addClasses(cardIcon, ["animate-contract"]);
  //   removeClasses(cardIcon, ["animate-expand"]);
  //   addClasses(cardIcon.parentElement.parentElement, [
  //     "absolute",
  //     "sm:w-[88%]",
  //     "w-[95%]",
  //     "p-10",
  //     "z-10",
  //     "scale-105",
  //   ]);
  //   removeClasses(cardIcon.parentElement.parentElement, ["animate-expand"]);
  //   addClasses(card.parentElement, ["hover:scale-125"]);
  // }
};

export default handleClick;
