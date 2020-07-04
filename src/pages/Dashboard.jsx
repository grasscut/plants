import React, { useEffect, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, CircularProgress } from '@material-ui/core';
import { TextField } from '../components/ui';
import SearchIcon from '@material-ui/icons/Search';
import { getPlants, searchPlants } from '../store/actions/plants';

export default () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const history = useHistory();

    const { allPlants, loading } = useSelector(state => state.plants);

    const [searchString, setSearchString] = useState();

    useEffect(() => {
        dispatch(getPlants());
    }, [dispatch]);

    const handleSearch = useCallback((event, searchString) => {
        event.preventDefault();
        dispatch(searchPlants(searchString));
    }, [dispatch]);

    return (
        <Grid container justify="space-around" spacing={2}>
            <Grid item xs={12} sm={8} lg={6}>
                <form onSubmit={(event) => handleSearch(event, searchString)}>
                    <TextField
                        fullWidth
                        InputProps={{
                            endAdornment: <SearchIcon />,
                        }}
                        placeholder={t('dashboard.search')}
                        onChange={(event) => {
                            setSearchString(event.target.value);
                        }}
                    />
                </form>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={2} justify={loading ? 'center' : 'flex-start'}>
                    {loading
                        ? <CircularProgress />
                        : (
                            <>
                                {allPlants.map((item) => (
                                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={item.id}>
                                        <Card onClick={() => history.push(`/plant/${item.id}`)}>
                                            <CardContent>
                                                <Typography>{item.common_name || item.scientific_name}</Typography>
                                            </CardContent>
                                        </Card>
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