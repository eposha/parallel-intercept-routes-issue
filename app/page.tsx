import { PhotoData } from './photo/[photoId]/page';
import PhotoDisplay from './photo/[photoId]/PhotoDisplay';
import list from '../data/images.json';

export default async function Home() {
  const images: PhotoData[] = list.images;

  if (!images?.length) {
    return <h1>No Images to Display</h1>;
  }

  return (
    <main className='flex flex-col items-center gap-8 pb-8'>
      {images.map((photoData) => (
        <PhotoDisplay key={photoData.id} photoData={photoData} />
      ))}
    </main>
  );
}
