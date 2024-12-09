'use client';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import NextImage, { ImageProps } from 'next/image';
import { useEffect, useState } from 'react';

export interface IImageProps extends ImageProps {
    fallbackImage?: string;
}

const fallbackImg = '/assets/images/fallbackImage.gif';
function Image(props: IImageProps) {
    const {
        src,
        fallbackImage = fallbackImg,
        style: imageStyle = {},
        draggable = false,
        ...rest
    } = props;
    const [imgSrc, setImgSrc] = useState<string | StaticImport>(src);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        src && setImgSrc(src);
    }, [src]);

    return (
        <NextImage
            src={imgSrc || fallbackImage}
            {...rest}
            onError={() => {
                setIsError(true);
                setImgSrc(fallbackImage);
            }}
            blurDataURL={fallbackImg}
            style={isError || !imgSrc ? { ...imageStyle, objectFit: 'cover' } : imageStyle}
            draggable={draggable}
        />
    );
}

export default Image;
