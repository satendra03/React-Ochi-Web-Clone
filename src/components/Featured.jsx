import React from "react";
import FeaturedCards from "./FeaturedCards";
import Button from "./Button";

function Featured() {
  return (
    <>
      <div className="featured w-full py-20">
        <div className="w-full px-20 border-b pb-10 border-zinc-700">
          <h1 className="text-6xl font-thin tracking-tighter">
            Featured Projects
          </h1>
        </div>
        <div className="cards w-full px-20 py-10 mt-10 flex relative gap-10 justify-between">
          <FeaturedCards
            name="BeatBlast"
            pos="left"
            url="beatblast.webp"
            site="https://satendra03.github.io/BeatBlast-MusicHub/"
          />
          <FeaturedCards
            name="LaughLab"
            pos="right"
            url="laughlab.webp"
            site="https://github.com/satendra03/LaughLab"
          />
        </div>
        <div className="cards w-full px-20 py-10 mt-10 flex relative gap-10 justify-between">
          <FeaturedCards
            name="Significo"
            pos="left"
            url="significo.webp"
            site="https://satendra03.github.io/Web-Dev/WebClone/"
          />
          <FeaturedCards
            name="WebDesign"
            pos="right"
            url="portfolio.webp"
            site="https://satendra03.github.io/Web-Dev/PortfolioIdea-Basic"
          />
        </div>
        <div className="allprojects w-full px-20 flex items-center justify-center p-10 border-b flex-col border-zinc-700">
          <a
            href="http://github.com/satendra03"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button text="All Projects" bgcol="white" col="black" />
          </a>
          <div className="all projs grid grid-cols-3 w-fit justify-center items-center px-10 py-3 gap-5">
            {[
              "Valentines-Day-Yes-or-No",
              "AnimeWorld",
              "Google",
              "NumberHunt-NumberGuessGame",
              "PintrestLandingPage-SearchFunctionality",
              "SatendraKeSantre-LandingPage",
              "Simple-Counter",
              "TicTacToe",
              "TravelSite-Basic",
            ].map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center px-10 py-3 border border-sky-100 rounded-full w-full justify-center"
                >
                  <a
                    target="_blank"
                    href={`https://satendra03.github.io/Web-Dev/${item}`}
                    key={index}
                  >
                    {item}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Featured;
