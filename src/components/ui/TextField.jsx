import React from 'react';
import { TextField } from '@material-ui/core';

export default (props) => {
    return (
        <TextField
            variant="outlined"
            {...props}
        />
    );
};