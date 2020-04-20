import React, { FunctionComponent, useState } from "react";

import { Styled } from "./ImageGallery.styles";
import { Photo } from "../../domain/Photo.domain";
import ReactBnbGallery from "react-bnb-gallery";
import Text from "../text/Text.component";

type IconProps = {
  photos: Photo[];
};

const ImageGallery: FunctionComponent<IconProps> = (props: IconProps) => {
  const { photos } = props;

  // State
  const [galleryOpened, toggleGallery] = useState<boolean>(false);
  const [photoIdx, setPhotoIdx] = useState<number>(0);

  const photoSrc: string[] = photos.map((photo: Photo) => photo.url);

  const toggleGalleryHandler = () => toggleGallery((prevState: boolean) => !prevState);
  const imagePreviewStyle = (totalNum: number, idx: number) => ({
    left: `${totalNum - idx - 1}rem`
  });

  return (
    <>
      <Styled.PreviewContainer onClick={toggleGalleryHandler}>
        {photos.map(
          (photo: Photo, idx: number) =>
            photo.previewUrl && (
              <Styled.ImagePreview
                style={imagePreviewStyle(photos.length, idx)}
                key={idx}
                imageSrc={photo.previewUrl}
                onClick={() => setPhotoIdx(idx)}
              />
            )
        )}
        <Styled.Title>
          <Text uppercase={true} bold={true}>Photos</Text>
        </Styled.Title>
      </Styled.PreviewContainer>
      <ReactBnbGallery
        show={galleryOpened}
        activePhotoIndex={photoIdx}
        photos={photoSrc}
        onClose={toggleGalleryHandler}
      />
    </>
  );
};

export default ImageGallery;
