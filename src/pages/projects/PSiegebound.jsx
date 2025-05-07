import * as React from "react";
import ProjectPage from "./ProjectPage";

export default function PSiegebound() {
  return (
    <ProjectPage
      bannerImage="siegeboundBanner.png"
      title="Siegebound"
      description={`Siegebound is a solo-developed roguelike strategy game built in Unity URP, combining mechanics from tower defense, real-time strategy, and base survival.
        Players defend a central stronghold against escalating waves by building structures, commanding units, and selecting upgrades via a trait-based leveling system.`}
      features={[
        {
          imageSide: "left",
          imageSrc: "/siegebound.png",
          title: "Mesh Generation",
          text: "This is a description of the feature. It highlights the key points.",
        },
        {
          imageSide: "right",
          imageSrc: "/siegebound.png",
          title: "Editor Tools",
          text: "This is a description of the feature. It highlights the key points.",
        },
      ]}
      links={{
        steamLink:
          "https://store.steampowered.com/app/3580260?utm_source=matzPortfolio",
        customLink: "https://www.peasant-games.com",
        customImage: "/pgLogo.png",
      }}
    />
  );
}
