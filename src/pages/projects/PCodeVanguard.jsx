import * as React from "react";
import ProjectPage from "./ProjectPage";

export default function PCodeVanguard() {
  return (
    <ProjectPage
      bannerImage="CodingInterface.png"
      bannerAdjustY="50%"
      title="CodeVanguard"
      description={`Siegebound is a solo-developed roguelike strategy game built in Unity URP, combining mechanics from tower defense, real-time strategy, and base survival.
        Players defend a central stronghold against escalating waves by building structures, commanding units, and selecting upgrades via a trait-based leveling system.`}
      features={[
        {
          imageSide: "left",
          imageSrc: "/siegebound.png",
          title: "Rosyln C# Runtime Compilation",
          text: "This is a description of the feature. It highlights the key points.",
        },
        {
          imageSide: "right",
          imageSrc: "/siegebound.png",
          title: "In-Game Code Editor",
          text: "This is a description of the feature. It highlights the key points.",
        },
        {
          imageSide: "left",
          imageSrc: "/siegebound.png",
          title: "Feedback Generation using Syntax Trees",
          text: "This is a description of the feature. It highlights the key points.",
        },
      ]}
      links={{
        steamLink: "",
        itchIoLink: "https://peasant-games.itch.io/code-vanguard",
        customLink: "",
        customImage: "",
      }}
    />
  );
}
