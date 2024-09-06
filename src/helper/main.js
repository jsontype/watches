import SplitType from "split-type";

export function hoverTextAnimation(element) {
  const isBlackText = element.classList.contains("black");
  const isWhiteText = element.classList.contains("white");
  const splitType = "words chars";

  const textColorClass = isBlackText
    ? "menu-text black"
    : isWhiteText
    ? "menu-text white"
    : "menu-text";

  new SplitType(element, {
    types: splitType,
    wordClass: textColorClass,
  });
}

export function pageScrollUp() {
  window.scrollTo({
    top: 0,
    behavior: "auto",
  });
}
