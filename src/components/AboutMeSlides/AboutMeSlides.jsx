import { useState } from "react";
import nextIcon from "../../assets/next.svg";
import prevIcon from "../../assets/prev.svg";
import randomIcon from "../../assets/random.svg";
import avatar from "../../assets/lucas-avatar.png";
import prayerLibraryIcon from "../../assets/pl-more-radius.png";

export default function AboutMeSlides() {
  const page = [
    {
      fact: "a Vancouver-based software devloper",
      colour: "from-green-200",
      image: avatar,
    },
    {
      fact: "the creator of an called app Prayer Library",
      colour: "from-purple-200",
      image: prayerLibraryIcon,
    },
  ];

  const [factNumber, setFactNumber] = useState(0);
  const currentFact = page[factNumber].fact;

  const handleNext = () => {
    if (factNumber < 1) {
      setFactNumber(factNumber + 1);
    } else {
      setFactNumber(0);
    }
  };

  const handlePrevious = () => {
    if (factNumber > 0) {
      setFactNumber(factNumber - 1);
    } else {
      setFactNumber(1);
    }
  };

  return (
    <div
      className={`w-full h-full bg-gradient-to-t ${page[factNumber].colour} to-white`}
    >
      <section className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8/12 text-center">
        {/* <div className="w-6 h-6 bg-blue-600 rounded-full inline-block"></div> */}
        <img src={page[factNumber].image} className="inline-block h-10" />
        <h1 className="my-3 md:text-4xl">Lucas Marins is...</h1>
        <h2 className="md:text-6xl">{currentFact}</h2>
      </section>
      <footer className="flex justify-center items-center fixed bottom-0 left-0 w-full p-4">
        <button onClick={handlePrevious}>
          <img src={prevIcon} className="mx-3" />
        </button>
        <img src={randomIcon} className="mx-3" />
        <button onClick={handleNext}>
          <img src={nextIcon} className="mx-3" />
        </button>
      </footer>
    </div>
  );
}
