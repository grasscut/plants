import React from 'react';
import { Box, Avatar } from '@material-ui/core';
import FilterVintageIcon from '@material-ui/icons/FilterVintage';
import EcoIcon from '@material-ui/icons/Eco';
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot';
import theme from '../../theme';

const Badge = ({ children, backgroundColor = theme.palette.primary, ...rest }) => {
    const style = {
        fontSize: 'small',
        backgroundColor,
    };

    return (
        <Box mr={1}>
            <Avatar {...rest} style={style}>{children}</Avatar>
        </Box>
    );
}

export default ({ plant }) => {

    return (
        <Box display="flex" p={2}>
            {!!plant.main_species.flower.color && (
                <Badge backgroundColor={plant.main_species.flower.color}>
                    <FilterVintageIcon />
                </Badge>
            )}
            {!!plant.main_species.foliage.color && (
                <Badge backgroundColor={plant.main_species.foliage.color}>
                    <EcoIcon />
                </Badge>
            )}
            {!!plant.main_species.fruit_or_seed.color && (
                <Badge backgroundColor={plant.main_species.fruit_or_seed.color}>
                    <ScatterPlotIcon />
                </Badge>
            )}
            {!!plant.main_species.growth.temperature_minimum.deg_c && (
                <Badge backgroundColor="LightSkyBlue">
                    {`${Math.round(plant.main_species.growth.temperature_minimum.deg_c)}°C`}
                </Badge>
            )}
        </Box>
    );
};