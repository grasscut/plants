import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Trans, useTranslation } from 'react-i18next';
import SearchIcon from '@material-ui/icons/Search';
import TuneIcon from '@material-ui/icons/Tune';
import { Box, Typography, Checkbox, Select, MenuItem } from '@material-ui/core';
import { TextField } from '../../components/ui';
import { searchPlants } from '../../store/actions/plants';

const toxicityOptions = ['none', 'severe'];

export default () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const [searchString, setSearchString] = useState();
    const [showAdvancedSettings, setShowAdvancedSettings] = useState(false);
    const [advancedSettingsValues, setAdvancedSettingsValues] = useState({});

    const addAdvancedSettingValue = (key, value) => {
        setAdvancedSettingsValues({
            ...advancedSettingsValues,
            [key]: value,
        });
    };

    const advancedSearchOptions = {
        'resprout_ability': (
            <Checkbox onChange={(event) => addAdvancedSettingValue('resprout_ability', event.target.checked)} />
        ),
        'toxicity': (
            <Select
                value={setAdvancedSettingsValues.toxicity}
                fullWidth
                onChange={(event) => addAdvancedSettingValue('toxicity', event.target.value)}
            >
                {toxicityOptions.map((item) => (
                    <MenuItem key={item} value={item}>
                        {t(`dashboard.advanced_search.toxicity.options.${item}`)}
                    </MenuItem>
                ))}
            </Select>
        ),
    };

    const SampleSearch = ({ children }) => (
        <strong
            style={{ cursor: 'pointer' }}
            onClick={() => setSearchString(children)}
        >
            {children}
        </strong>
    );

    useEffect(() => {
        dispatch(searchPlants(searchString, advancedSettingsValues));
    }, [dispatch, searchString, advancedSettingsValues]);

    return (
        <>
            <form onSubmit={(event) => event.preventDefault()}>
                <TextField
                    fullWidth
                    InputProps={{
                        endAdornment: (
                            <>
                                <TuneIcon onClick={() => setShowAdvancedSettings(!showAdvancedSettings)} />
                                <SearchIcon />
                            </>
                        ),
                    }}
                    placeholder={t('dashboard.search')}
                    onChange={(event) => {
                        setSearchString(event.target.value);
                    }}
                />
                <Box display={showAdvancedSettings ? 'block' : 'none'} mb={4}>
                    {Object.keys(advancedSearchOptions).map((key) => (
                        <Box key={key} display="flex" alignItems="center">
                            <Typography variant="subtitle2">
                                {t(`dashboard.advanced_search.${key}.label`)}:
                            </Typography>
                            {advancedSearchOptions[key]}
                        </Box>
                    ))}
                </Box>
            </form>

            <Box fontStyle="italic">
                <Typography variant="caption">
                    <Trans i18nKey="dashboard.search_hint">
                        Try <SampleSearch>tapertip onion</SampleSearch>
                        or <SampleSearch>Malus ×magdeburgensis</SampleSearch>
                    </Trans>
                </Typography>
            </Box>
        </>
    );
};