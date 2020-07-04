import React, { useState, useCallback } from 'react';
import { Box, CircularProgress, Backdrop } from '@material-ui/core';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default ({ images = [] }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isImageLoading, setIsImageLoading] = useState(true);

    const navigate = useCallback((direction) => {
        const navigatedImageIndex = currentImageIndex + direction;

        if (0 <= navigatedImageIndex && navigatedImageIndex < images.length) {
            setIsImageLoading(true);
            setCurrentImageIndex(navigatedImageIndex);
        }
    }, [currentImageIndex, images.length]);

    return (
        <Box display="flex" alignItems="center">
            <NavigateBeforeIcon onClick={() => navigate(-1)} />
            <Box position="relative">
                <Backdrop open={isImageLoading} style={{ position: 'absolute', zIndex: 0 }}>
                    <CircularProgress />
                </Backdrop>
                <img
                    src={images[currentImageIndex].url}
                    width="100%"
                    onLoad={() => setIsImageLoading(false)}
                />
            </Box>
            <NavigateNextIcon onClick={() => navigate(1)} />
        </Box>
    );
};