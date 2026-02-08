import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper.css";

import JuubiCard from "../assets/ui/NCOW-Juubi-2.png";
/* import Naruto from "../assets/characters/naruto_card_image.png";
import Sasuke from "../assets/characters/sasuke_card_image.png";
import Itachi from "../assets/characters/itachi_card_image.png";
import Obito from "../assets/characters/obito_card_image.png"; */
import "../styles/character_cards.css";

type AutoEllipsisTextProps = {
  text: string;
  className?: string;
};

function AutoEllipsisText({ text, className }: AutoEllipsisTextProps) {
  const paragraphRef = React.useRef<HTMLParagraphElement | null>(null);
  const [displayText, setDisplayText] = React.useState(text);

  React.useLayoutEffect(() => {
    const element = paragraphRef.current;

    if (!element) {
      return;
    }

    const fullText = text.trim();
    let frameId = 0;

    const applyTruncation = () => {
      if (!fullText) {
        setDisplayText("");
        return;
      }

      element.textContent = fullText;

      if (element.scrollHeight <= element.clientHeight) {
        setDisplayText(fullText);
        return;
      }

      let low = 0;
      let high = fullText.length;
      let bestFit = "...";

      while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const candidate = `${fullText.slice(0, mid).trimEnd()}...`;
        element.textContent = candidate;

        if (element.scrollHeight <= element.clientHeight) {
          bestFit = candidate;
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      }

      setDisplayText(bestFit);
    };

    const scheduleTruncation = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(applyTruncation);
    };

    scheduleTruncation();

    let resizeObserver: ResizeObserver | null = null;

    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(scheduleTruncation);
      resizeObserver.observe(element);
    } else if (typeof window !== "undefined") {
      window.addEventListener("resize", scheduleTruncation);
    }

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver?.disconnect();

      if (!resizeObserver && typeof window !== "undefined") {
        window.removeEventListener("resize", scheduleTruncation);
      }
    };
  }, [text]);

  return (
    <p ref={paragraphRef} className={className} title={text}>
      {displayText}
    </p>
  );
}

export default function CharacterCards() {
  /*   const characters = [
    {
      naruto: {
        name: "Naruto Uzumaki",
        image: { Naruto },
        description: "Naruto Description here1",
      },
      sasuke: {
        name: "Sasuke Uchiha",
        image: { Sasuke },
        description: "Naruto Description here",
      },
      itachi: {
        name: " Itachi Uchiha",
        image: { Itachi },
        description: "Naruto Description here",
      },
      obito: {
        name: "Obito Uchiha",
        image: { Obito },
        description: "Naruto Description here",
      },
    },
  ];
 */
  const cards = [
    {
      name: "Character Name 1",
      image: JuubiCard,
      description: "Character Character Description hereCharacter Description hereDescription hereCharacter Description hereCharacter Description hereCharacter Description hereCharacter Description hereCharacter Description hereCharacter Description hereCharacter Description here",
      link: "/",
    },
    {
      name: "Character Name 2",
      image: JuubiCard,
      description: "Character Description here",
      link: "/",
    },
    {
      name: "Character Name 3",
      image: JuubiCard,
      description: "Character Description here",
      link: "/",
    },
    {
      name: "Character Name 4",
      image: JuubiCard,
      description: "Character Description here",
      link: "/",
    },
  ];

  return (
    <div className="character_cards container">
      <div className="heading">
        <h2>Characters</h2>
      </div>

      <div className="subtitle">Subtitle Characters</div>

      <Swiper
        className="card_list"
        modules={[Navigation, Pagination]}
        slidesPerView={2.3}
        spaceBetween={24}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 1 },
        }}
      >
        {cards.map((card) => (
          <SwiperSlide className="card" key={card.name}>
            <div className="char_name">
              <span>{card.name}</span>
            </div>
            <div className="card_content">
              <img src={card.image} alt={card.name} />
              <AutoEllipsisText className="char_description" text={card.description} />
              <button>
                <span>Read More</span>
                <Link to={card.link}></Link>
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
