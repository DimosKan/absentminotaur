import Bio from "./Biography";
import Background from "./Background";
import TextComponent from "./TextComponent";
import GalleryComponent from "./GalleryComponent";
import ScrollToTopButton from "./ScrollToTopButton";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  return (
    <>
      <ScrollToTopButton />
      <div className="font-[RomanScript] text-3xl w-full min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-8">
        <Background>
          <header className="text-center mb-10">
            <h1 className="text-5xl font-extrabold tracking-wide drop-shadow-lg">
              {t("galleryTitle")}
            </h1>
            <p className="text-gray-400 mt-2">{t("prologue")}</p>
          </header>
          {/* FIRST SECTION */}
          <section className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* text left */}
              <div id="essay" className="flex items-start justify-center">
                <TextComponent type="essay" />
              </div>
              {/* gallery right */}
              <div
                id="gallery"
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                <GalleryComponent part="p1" />
              </div>
            </div>
          </section>

          {/* SECOND SECTION */}
          <section className="mb-20">
            <div className = "grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* gallery left */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <GalleryComponent part="p2" />
            </div>
            {/* text right */}
            <div id="poem" className="flex items-start justify-center">
              <TextComponent type="poem" />
            </div>
            </div>
          </section>

          {/* BIO BELOW */}
          <section>
            <Bio />
          </section>
        </Background>
      </div>
    </>
  );
}

export default App;
