import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';
import { getPlants } from '../../store/actions/plants';
import PlantSearch from './PlantSearch';
import PlantCard from './PlantCard';

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
                    {loading
                        ? <CircularProgress />
                        : (
                            <>
                                {allPlants.map((item) => (
                                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={item.id}>
                                        <PlantCard plant={item} />
                                    </Grid>
                                ))}
                            </>
                        )
                    }
                </Grid>
            </Grid>
        </Grid>
    );
};