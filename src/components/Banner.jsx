

import React, { useEffect, useRef, useState } from "react";
import BannerImg from "../assets/coffee-white.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import BgImg from "../assets/website/coffee-texture.jpg";

function useInView(ref, { threshold = 0.12, once = true } = {}) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) obs.unobserve(el);
          }
        });
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, threshold, once]);
  return inView;
}

const Banner = () => {
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);

  const containerInView = useInView(containerRef);
  const imgInView = useInView(imgRef);
  const textInView = useInView(textRef);

  const bgStyle = {
    backgroundImage: `url(${BgImg})`,
    backgroundColor: "#270c03",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "scroll", 
  };

  return (
    <>
      <div style={bgStyle}>
        <div
          ref={containerRef}
          className="min-h-[520px]  sm:min-h-[550px] font-Titillium flex justify-center items-center py-12 sm:py-16"
        >
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              {/* Image section */}
              <div
                ref={imgRef}
                className={`flex justify-center items-center transition-all duration-700 ease-out ${
                  imgInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                aria-hidden
              >
                <img
                  src={BannerImg}
                  alt="Premium coffee"
                  loading="lazy"
                  className="max-w-[430px] w-full mx-auto rounded-4xl "
                  style={{
                    willChange: "transform, opacity",
                    transform: imgInView ? "translateY(0) scale(1)" : "translateY(8px) scale(0.99)",
                    transition: "transform 700ms ease, opacity 700ms ease",
                  }}
                />
              </div>

              {/* text content section */}
              <div
                ref={textRef}
                className={`flex flex-col justify-center gap-6 sm:pt-0 transition-all duration-700 ease-out ${
                  textInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold font-cursive text-secondary">
                  Premium Blend Coffee
                </h1>

                <p className="text-sm text-gray-600 tracking-wide leading-6 max-w-xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque reiciendis inventore iste
                  ratione ex alias quis magni at optio.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-full bg-red-50 inline-flex items-center justify-center">
                        <GrSecure className="text-2xl text-secondary" />
                      </div>
                      <span className="text-gray-500">Premium Coffee</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-full bg-orange-50 inline-flex items-center justify-center">
                        <IoFastFood className="text-2xl text-orange-600" />
                      </div>
                      <span className="text-gray-500">Hot Coffee</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-full bg-yellow-50 inline-flex items-center justify-center">
                        <GiFoodTruck className="text-2xl text-yellow-600" />
                      </div>
                      <span className="text-gray-500">Cold Coffee</span>
                    </div>
                  </div>

                  <div className="border-l-4 border-secondary pl-6 space-y-2">
                    <h2 className="text-2xl font-semibold font-cursive text-secondary">Tea Lover</h2>
                    <p className="text-sm text-gray-500">
                      Much like writing code, brewing the perfect cup requires patience, precision, and a
                      dash of passion — creating a comforting blend of flavors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </>
  );
};

export default Banner;

