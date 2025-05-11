import PhotoDisplay from './PhotoDisplay';

import images from '../../../data/images.json';

export const generateStaticParams = () => [];

export type PhotoData = {
  id: number;
  title: string;
  path: string;
};

type Props = {
  params: Promise<{
    photoId: string;
  }>;
};

export default async function Photo({ params }: Props) {
  const { photoId } = await params;
  const photoData: PhotoData | undefined = images.images.find(
    (image) => image.id.toString() === photoId
  );

  if (!photoData?.id) {
    return <h1 className='text-center'>No Photo Found for that ID.</h1>;
  }

  return (
    <div className='mt-2 grid place-content-center'>
      <PhotoDisplay photoData={photoData} />
    </div>
  );
}
