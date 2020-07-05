import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import { getPlants } from '../../store/actions/plants';
import PlantSearch from './PlantSearch';
import PlantList from './PlantList';

export default () => {
    const dispatch = useDispatch();

    const { allPlants, loading } = useSelector(state => state.plants);

    useEffect(() => {
        dispatch(getPlants());
    }, [dispatch]);

    return (
        <Grid container justify="space-around" spacing={2}>
            <Grid item xs={12} sm={8} lg={6}>
                <PlantSearch />
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={2} justify={loading ? 'center' : 'flex-start'}>
                    <PlantList plants={allPlants} loading={loading} />
                </Grid>
            </Grid>
        </Grid>
    );
};