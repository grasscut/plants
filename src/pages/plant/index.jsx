import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Typography, Box, Grid } from '@material-ui/core';
import { getPlant } from '../../store/actions/plants';
import { getDivision } from '../../store/actions/divisions';
import Taxonomy from './Taxonomy';
import Badges from './Badges';
import Description from './Description';
import { Carousel } from '../../components/ui';

export default () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    const plant = useSelector(state => state.plants.allPlants.find((item) => item.id === Number(id)));
    const division = useSelector(state => (
        !!plant && !!plant.division && state.divisions.allDivisions.find((item) => item.id === plant.division.id)
    )) || {};
    const { loading } = useSelector(state => state.plants);

    useEffect(() => {
        dispatch(getPlant(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (plant && plant.division && plant.division.id) {
            dispatch(getDivision(plant.division.id));
        }
    }, [dispatch, plant]);

    if (!plant || loading) {
        return null;
    }

    return (
        <>
            <Box mb={4}>
                <Typography variant="h2">{plant.common_name || plant.scientific_name}</Typography>
                {!!plant.common_name && <Typography variant="subtitle2">({plant.scientific_name})</Typography>}
            </Box>

            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={{ height: "50vh" }}>
                    <Carousel images={plant.images} />
                </Grid>

                <Grid item xs={12} md={6}>
                    <Taxonomy data={{ ...plant, ...division }} />
                </Grid>

                <Grid item xs={12}>
                    <Badges plant={plant} />
                </Grid>

                <Grid item xs={12}>
                    <Description plant={plant} />
                </Grid>
            </Grid>
        </>
    );
};