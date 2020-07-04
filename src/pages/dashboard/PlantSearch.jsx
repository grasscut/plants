import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Trans, useTranslation } from 'react-i18next';
import SearchIcon from '@material-ui/icons/Search';
import { Box, Typography } from '@material-ui/core';
import { TextField } from '../../components/ui';
import { searchPlants } from '../../store/actions/plants';

export default () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const [searchString, setSearchString] = useState();

    useEffect(() => {
        dispatch(searchPlants(searchString));
    }, [searchString]);

    return (
        <>
            <form onSubmit={(event) => event.preventDefault()}>
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
            <Box fontStyle="italic">
                <Typography variant="caption">
                    <Trans i18nKey="dashboard.search_hint">
                        Try <strong onClick={() => setSearchString('tapertip onion')}>tapertip onion</strong>
                    </Trans>
                </Typography>
            </Box>
        </>
    );
};