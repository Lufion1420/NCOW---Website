import "../styles/gameplay_features.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";

/* 
    Tall Section with a fullscreen big brush background.
    Multiple Sub Areas like: Questing, Missions, Hero Quests, Story Progression, Boss Fights etc. as seperate White Brush backgrounds (content width) with image and text.
    --> Switching layout from Image left and text right to text left and image right every second sub area.
*/

type Alignment = "left" | "right";
type ImageCollection = Record<string, string> | string[];

type Props = {
  heading?: string;
  text?: string;
  alignment?: Alignment;
  images?: ImageCollection;
};

const PLACEHOLDER_IMAGES = ["https://placehold.co/600x400", "https://placehold.co/600x400", "https://placehold.co/600x400"];

function Feature({ heading, text, alignment, images }: Props) {
  const paragraphs = text ? text.split(/\r?\n\s*\r?\n/).map((paragraph) => paragraph.trim()) : [];
  const imageList = images ? (Array.isArray(images) ? images : Object.values(images)) : [];
  const renderedImages = imageList.length > 0 ? imageList : PLACEHOLDER_IMAGES;

  return (
    <div className={`feature pseudo alignment-${alignment}`}>
      <div className="title">
        <h2>{heading}</h2>
      </div>
      <div className="text">
        {paragraphs.map((paragraph, index) => (
          <p key={`${heading ?? "feature"}-${index}`}>{paragraph}</p>
        ))}
      </div>
      <div className="images">
        <Swiper slidesPerView={1} spaceBetween={16} breakpoints={{ 769: { slidesPerView: 2.5, spaceBetween: 16 } }}>
          {renderedImages.map((src, index) => (
            <SwiperSlide key={`${heading ?? "feature"}-image-${index}`}>
              <div className="image">
                <img src={src} alt={`${heading ?? "Feature"} image ${index + 1}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

type FeatureContent = {
  heading: string;
  text: string;
  images?: ImageCollection;
};

const content: Record<string, FeatureContent> = {
  Quests: {
    heading: "Quests and Missions",
    text: `This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! 
    
    This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! 
    
    This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text!`,
    images: {},
  },

  Support_Characters: {
    heading: "Support Characters",
    text: `This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! 
    
    This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text!`,
    images: {},
  },

  Objectives: {
    heading: "Teams and Objectives",
    text: `This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! 
    
    This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text!`,
    images: {},
  },

  Shops: {
    heading: "Shops",
    text: `This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! 
    
    This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text!`,
    images: {},
  },

  Bosses: {
    heading: "Bosses with custom AI",
    text: `This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! 
    
    This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text! This could be your text!`,
    images: {},
  },
};

const list_content = Object.values(content);

export default function GameplayFeatures() {
  return (
    <div className="gameplay_features">
      <div className="pseudo wrapper">
        {list_content.map((feature, index) => (
          <Feature key={feature.heading} heading={feature.heading} text={feature.text} images={feature.images} alignment={index % 2 === 0 ? "left" : "right"}></Feature>
        ))}
      </div>
    </div>
  );
}
