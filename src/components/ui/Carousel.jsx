import React, { useState, useCallback } from 'react';
import {Box, CircularProgress, Backdrop, Grid} from '@material-ui/core';
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

    if (images.length === 0) {
        return null;
    }

    return (
        <Box display="flex" justifyContent="space-between" height="100%">
            <Box display="flex" alignItems="center" onClick={() => navigate(-1)}>
                <NavigateBeforeIcon
                    color={currentImageIndex === 0 ? 'disabled' : 'primary'}
                />
            </Box>
            <Box position="relative" height="100%" display="flex" alignItems="center">
                <Backdrop open={isImageLoading} style={{ position: 'absolute', zIndex: 0 }}>
                    <CircularProgress />
                </Backdrop>
                <img
                    src={images[currentImageIndex].url}
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                    onLoad={() => setIsImageLoading(false)}
                />
            </Box>
            <Box display="flex" alignItems="center" onClick={() => navigate(1)}>
                <NavigateNextIcon
                    color={currentImageIndex === (images.length - 1) ? 'disabled' : 'primary'}
                />
            </Box>
        </Box>
    );
};