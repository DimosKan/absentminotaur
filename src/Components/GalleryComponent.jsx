import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import paintings from "../assets/paintingsIndex/paintingIndex.json";
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';

export default function GalleryComponent({ part }) {
  const [selected, setSelected] = useState(null);
  
  const contentMap = {
    p1: paintings.paintingsp1,
    p2: paintings.paintingsp2,
  };

  {/*Enables pseudo-zoom on lightbox when on phone by altering user-scalable attribute*/}
function useViewportZoomControl(isModalOpen) {
  useEffect(() => {
    const metaViewport = document.querySelector('meta[name="viewport"]');
    if (!metaViewport) return;

    if (isModalOpen) {
      metaViewport.setAttribute(
        "content",
        "width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes"
      );
    } else {
      metaViewport.setAttribute(
        "content",
        "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      );
    }

    return () => {
      metaViewport.setAttribute(
        "content",
        "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      );
    };
  }, [isModalOpen]);
}

  const { t } = useTranslation();
  const content = Array.isArray(contentMap[part]) ? contentMap[part] : [];
  const savedLang = localStorage.getItem("appLanguage") || "gr";

  useViewportZoomControl(!!selected);

  return (
    <>
    {content.map((painting, index) => {
      const controls = useAnimation();
      const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
      const [isHovered, setIsHovered] = useState(false);

      useEffect(() => {
        if (inView) {
          controls.start("visible");
        }
      }, [inView, controls]);

      return (
        <motion.div
          key={index}
          ref={ref}
          className={`relative bg-gray-800 rounded-2xl shadow-lg overflow-hidden w-100 h-100 cursor-pointer transition-all duration-300 ${
            isHovered ? "z-[49]" : "z-0"
          }`}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.15, delay: index * 0.1 }}
          whileHover={{ scale: 1.1 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          onClick={() => setSelected(painting)}
        >
          <motion.img
            src={painting.image}
            alt={painting.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-60 text-white p-2 rounded-tr-md max-w-full">
            <h2 className="text-l font-semibold">
              {/*Because the module gets the info from paintingIndex.json there is no need for the infos to be on i18n, that way you can manage paintings solely from the json file*/}
              {savedLang === "en" ? painting.titleEn : painting.title}
            </h2>
          </div>
        </motion.div>
      );
    })}


      {/* Modal */}
      {selected && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-50 p-4"
          onClick={() => setSelected(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="text-white text-sm italic select-none pointer-events-none mb-4 lg:hidden">
            <span className="material-icons align-middle">search</span>
            {/*You cannot zoom on desktop so the message does not appear when on desktop, the message is meant as a tip that people can zoom in the picture preview*/}
            {t("zoomHint")}
          </p>


          <img
            src={selected.image}
            alt={selected.title}
            className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg shadow-xl border-4 border-white"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </>
  );
}
