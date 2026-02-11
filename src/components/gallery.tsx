import "../styles/gallery.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";

import Terrain_1 from "../assets/images/NCOW-Image_Intro.png";
import Terrain_2 from "../assets/images/NCOW-Image_Intro_2.png";

import UI_1 from "../assets/images/NCOW-Image-UI-1.png";
import UI_2 from "../assets/images/NCOW-Image-UI-2.png";
import UI_3 from "../assets/images/NCOW-Image-UI-3.png";
import UI_4 from "../assets/images/NCOW-Image-UI-4.png";
import UI_5 from "../assets/images/NCOW-Image-UI-5.png";
import UI_6 from "../assets/images/NCOW-Image-UI-6.png";
import UI_7 from "../assets/images/NCOW-Image-UI-7.png";
import UI_8 from "../assets/images/NCOW-Image-UI-8.png";
import UI_9 from "../assets/images/NCOW-Image-UI-9.png";

export default function Gallery() {
  const terrains = {
    Terrain_1,
    Terrain_2,
  };

  const uis = {
    UI_1,
    UI_2,
    UI_3,
    UI_4,
    UI_5,
    UI_6,
    UI_7,
    UI_8,
    UI_9,
  };

  const list_uis = Object.values(uis);

  return (
    <div className="gallery container">
      <h2>Gallery</h2>
      <div className="gallery_content">
        <div className="gallery_tabs">
          <button className="tab heading">Terrain</button>
          <button className="tab heading">Custom UI's</button>
          <button className="tab heading">Videos</button>
        </div>
        <div className="gallery_media">
          <Swiper slidesPerView={2.5} spaceBetween={24} watchOverflow>
            {list_uis.map((image: string) => (
              <SwiperSlide>
                <div>
                  <img src={image} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
