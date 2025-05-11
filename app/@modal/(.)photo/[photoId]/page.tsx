import { Modal } from '@/components/Modal';

import images from '../../../../data/images.json';
import { PhotoData } from '../../../photo/[photoId]/page';
import PhotoDisplay from '../../../photo/[photoId]/PhotoDisplay';

export const generateStaticParams = () => [];

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
    <Modal>
      <PhotoDisplay photoData={photoData} />
    </Modal>
  );
}
