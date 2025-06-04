import GalleryComponent from './GalleryComponent';
import { useTranslation } from 'react-i18next';

export default function GalleryPage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">{t('menuElement3')}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <GalleryComponent part="p1" />
        <GalleryComponent part="p2" />
      </div>
    </div>
  );
}
