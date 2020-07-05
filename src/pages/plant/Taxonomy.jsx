import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@material-ui/core';

const taxonomy = ['kingdom', 'subkingdom', 'division', 'class', 'order', 'family', 'genus'];

export default ({ data }) => {
    const { t } = useTranslation();

    return (
        <>
            {taxonomy.map((item) => (
                <Box key={item} display="flex">
                    {!!data[item] && (
                        <>
                            <Box fontStyle="italic" style={{ flex: '100px 0 0' }}>
                                <Typography color="primary">{t(`plant_details.taxonomy.${item}`)}</Typography>
                            </Box>
                            <Typography>{data[item].name}</Typography>
                        </>
                    )}
                </Box>
            ))}
        </>
    );
};