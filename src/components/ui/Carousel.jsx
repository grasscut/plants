import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {Box, CircularProgress, Backdrop, Typography} from '@material-ui/core';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';

export default ({ images = [] }) => {
    const { t } = useTranslation();

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
        <Box display="flex" justifyContent="space-between" height="100%">
            <Box display="flex" alignItems="center" onClick={() => navigate(-1)}>
                <NavigateBeforeIcon
                    color={currentImageIndex === 0 ? 'disabled' : 'primary'}
                />
            </Box>
            <Box position="relative" height="100%" display="flex" alignItems="center">
                <Backdrop open={images.length > 0 && isImageLoading} style={{ position: 'absolute', zIndex: 0 }}>
                    <CircularProgress />
                </Backdrop>
                {images.length > 0
                    ? (
                        <img
                            src={images[currentImageIndex].url}
                            style={{ maxWidth: '100%', maxHeight: '100%' }}
                            onLoad={() => setIsImageLoading(false)}
                        />
                    ) : (
                        <Box textAlign="center" fontStyle="italic">
                            <ImageSearchIcon fontSize="large" />
                            <Typography>{t('carousel.no_images')}</Typography>
                        </Box>
                    )
                }
            </Box>
            <Box display="flex" alignItems="center" onClick={() => navigate(1)}>
                <NavigateNextIcon
                    color={(images.length === 0 || currentImageIndex === (images.length - 1)) ? 'disabled' : 'primary'}
                />
            </Box>
        </Box>
    );
};