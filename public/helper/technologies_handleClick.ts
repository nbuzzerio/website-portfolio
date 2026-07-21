import type { MouseEvent } from "react";
import { trackEvent } from "@/lib/analytics/analytics";

export type TechnologyCardAction = "opened" | "closed" | null;

type TechnologyAnalytics = {
  name: string;
  category: string;
};

const handleClick = function (
  event: MouseEvent<HTMLElement>,
  technology: TechnologyAnalytics
): TechnologyCardAction {
  let card = event.target as HTMLElement;
  let cardClasses = Array.from(card.classList);

  if (cardClasses.includes("tech-card")) {
    card = card.querySelector<HTMLElement>(".tech-icon") ?? card;
    cardClasses = Array.from(card.classList);
  } else if (cardClasses.includes("close")) {
    card =
      card.parentElement?.parentElement?.querySelector<HTMLElement>(
        ".tech-icon"
      ) ?? card;
    cardClasses = Array.from(card.classList);
  }

  if (!cardClasses.includes("tech-icon")) {
    return null;
  }

  const technologyCard = card.parentElement?.parentElement;
  const infoWrapper = technologyCard?.querySelector<HTMLElement>(
    ".tech__info-wrapper"
  );

  if (!technologyCard || !infoWrapper) {
    return null;
  }

  if (cardClasses.includes("techTile-active")) {
    card.classList.remove("techTile-active");
    technologyCard.classList.remove("techTile");
    infoWrapper.classList.remove("active");

    return "closed";
  }

  trackEvent("technology_card_opened", {
    technology: technology.name,
    category: technology.category,
    section: "technologies",
  });

  card.classList.add("techTile-active");
  technologyCard.classList.add("techTile");
  infoWrapper.classList.add("active");

  return "opened";
};

export default handleClick;
