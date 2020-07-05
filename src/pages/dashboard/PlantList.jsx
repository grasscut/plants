import React from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, Typography, CircularProgress } from '@material-ui/core';
import PlantCard from './PlantCard';

export default ({ plants, loading }) => {
    const { t } = useTranslation();

    if (loading) {
        return <CircularProgress />;
    }

    if (plants.length === 0) {
        return <Typography variant="subtitle1">{t('dashboard.no_results')}</Typography>;
    }

    return (
        <>
            {plants.map((item) => (
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={item.id}>
                    <PlantCard plant={item} />
                </Grid>
            ))}
        </>
    );
}