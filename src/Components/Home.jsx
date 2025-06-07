import Bio from "./Biography";
import Background from "./Background";
import TextComponent from "./TextComponent";
import GalleryComponent from "./GalleryComponent";
import ScrollToTopButton from "./ScrollToTopButton";
import { useTranslation } from "react-i18next";
import { Trans } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  return (
    <>
      <ScrollToTopButton />
      <div className="font-[RomanScript] text-3xl w-full min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-8">
        <Background>
          <header className="text-center mb-10">
            <div className = "grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div></div>
              <div className="flex justify-center bg-white/40 rounded-xl p-4 mb-10">
              <img src = "/absentminotaur/gallery/NAMLogo.png" alt="NAM logo"></img>
              </div>
              <div></div>
            </div>
            <h1 className="text-5xl font-extrabold tracking-wide drop-shadow-lg">
              {t("galleryTitle")}
            </h1>
            <Trans i18nKey="prologue" components={{ br: <br /> }} />
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
