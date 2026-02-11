import { useState, type MouseEvent } from "react";
import "../styles/gallery.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper.css";
import "swiper/css/pagination";

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

import Video_1 from "../assets/videos/NCOW-Trailer_1.mp4";

type GalleryTab = "terrain" | "ui" | "videos";

export default function Gallery() {
  const handleVideoMouseEnter = (event: MouseEvent<HTMLVideoElement>) => {
    const video = event.currentTarget;
    void video.play();
  };

  const handleVideoMouseLeave = (event: MouseEvent<HTMLVideoElement>) => {
    const video = event.currentTarget;
    video.pause();
    //video.currentTime = 0; // resets the video timer.
  };

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

  const videos = {
    Video_1,
  };

  const list_uis = Object.values(uis);
  const list_terrains = Object.values(terrains);
  const list_videos = Object.values(videos);
  const [activeTab, setActiveTab] = useState<GalleryTab>("terrain");

  const mediaByTab: Record<GalleryTab, string[]> = {
    terrain: list_terrains,
    ui: list_uis,
    videos: list_videos,
  };

  return (
    <div className="gallery container">
      <h2>Gallery</h2>
      <div className="gallery_content">
        <div className="gallery_tabs">
          <Swiper
            className="gallery_tabs_swiper"
            slidesPerView="auto"
            watchOverflow
            spaceBetween={10}
            breakpoints={{
              0: { allowTouchMove: true },
              1024: { allowTouchMove: false },
            }}
          >
            <SwiperSlide>
              <button className={`tab heading ${activeTab === "terrain" ? "is-active" : ""}`} onClick={() => setActiveTab("terrain")} type="button">
                Terrain
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <button className={`tab heading ${activeTab === "ui" ? "is-active" : ""}`} onClick={() => setActiveTab("ui")} type="button">
                Custom UI's
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <button className={`tab heading ${activeTab === "videos" ? "is-active" : ""}`} onClick={() => setActiveTab("videos")} type="button">
                Videos
              </button>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="gallery_media">
          <div key={activeTab} className="gallery_media_content">
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              slidesPerView={2.5}
              spaceBetween={24}
              watchOverflow
              breakpoints={{
                0: { allowTouchMove: true, slidesPerView: 1 },
                1024: { allowTouchMove: false },
              }}
            >
              {mediaByTab[activeTab].map((media: string, index: number) => (
                <SwiperSlide key={`${activeTab}-${index}`}>
                  <div>
                    {activeTab === "videos" ? (
                      <video loop muted onMouseEnter={handleVideoMouseEnter} onMouseLeave={handleVideoMouseLeave} playsInline preload="metadata">
                        <source src={media} type="video/mp4" />
                      </video>
                    ) : (
                      <img src={media} alt="" />
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
