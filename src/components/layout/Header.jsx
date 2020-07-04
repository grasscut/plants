import React from 'react';
import { Box } from '@material-ui/core';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';

export default () => {

    return (
        <Box bgcolor="secondary.main" p={2}>
            <a href="/">
                <LocalFloristIcon color="primary" fontSize="large" />
            </a>
        </Box>
    );
};