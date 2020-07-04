import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardContent, Typography } from '@material-ui/core';

export default ({ plant }) => {
    const history = useHistory();

    return (
        <Card variant="outlined" onClick={() => history.push(`/plant/${plant.id}`)} style={{ height: '100%' }}>
            <CardContent>
                <Typography>{plant.common_name || plant.scientific_name}</Typography>
            </CardContent>
        </Card>
    );
};