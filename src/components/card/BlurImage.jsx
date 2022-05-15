import React, { useEffect, useState } from 'react';

const BlurImage = (props) => {
    const {preview, image, alt, bgColor = 'transparent'} = props;
    const [currentImage, setCurrentImage] = useState(preview);
    const [loading, setLoading] = useState(true);

    const fetchImage = (src) => {
        const loadingImage = new Image();
        loadingImage.src = src;
        loadingImage.onload = () => {
            setCurrentImage(loadingImage.src);
            setLoading(false);
        };
    };

    useEffect(() => {
        fetchImage(image);
    }, []);

    return (
        <div className="shadow-sm drop-shadow-lg h-full" style={{ overflow: 'hidden' }}>
            <img
                style={{
                    filter: `${loading ? 'blur(20px)' : ''}`,
                    transition: '0.4s filter linear',
                    maxHeight: 'calc(100vh - 86px)',
                    background: bgColor,
                }}
                src={currentImage}
                alt={alt}
                className="rounded-md block w-full h-full object-cover"
            />
        </div>
    );
};

export default BlurImage;