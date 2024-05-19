import React from 'react';
import { LazyLoadImage, CommonProps } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import BoxComponent from '../BoxComponent';

type ImageProps = CommonProps & {
    width?: string;
    height?: string;
    objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
    alt: string;
    source?: string;
    borderRadius?: string;
    containerStyles?: React.CSSProperties;
}

const ImageComponent: React.FC<ImageProps> = ({
    width = '100px',
    height = '100px',
    objectFit = 'contain',
    alt,
    source = 'https://media.4-paws.org/5/b/4/b/5b4b5a91dd9443fa1785ee7fca66850e06dcc7f9/VIER%20PFOTEN_2019-12-13_209-2890x2000-1920x1329.jpg',
    borderRadius,
    containerStyles,
    ...props
}) => {
    return (
        <BoxComponent
            sx={{
                width,
                height,
                '& *': {
                    display: 'flex !important',
                    justifyContent: 'center !important',
                    alignItems: 'center !important',
                },
                borderRadius: '12px',
                ...containerStyles,
            }}
            {...props}
        >
            <LazyLoadImage
                {...props}
                style={{ objectFit, borderRadius }}
                alt={alt}
                height="100%"
                src={source}
                width="100%"
                effect="blur"
            />
        </BoxComponent>
    );
};

export default ImageComponent;
