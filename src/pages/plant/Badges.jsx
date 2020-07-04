import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Avatar } from '@material-ui/core';
import FilterVintageIcon from '@material-ui/icons/FilterVintage';
import EcoIcon from '@material-ui/icons/Eco';
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot';
import theme from '../../theme';
const Badge = ({ children, title, backgroundColor = theme.palette.primary, ...rest }) => {
    const style = {
        fontSize: 'small',
        backgroundColor,
    };

    return (
        <Box mr={1} title={title}>
            <Avatar {...rest} style={style}>{children}</Avatar>
        </Box>
    );
}

export default ({ plant }) => {
    const { t } = useTranslation();

    if (!plant.main_species) {
        return null;
    }

    return (
        <Box display="flex">
            {!!plant.main_species.flower.color && (
                <Badge
                    backgroundColor={plant.main_species.flower.color}
                    title={t('plant_details.badges.flower_color', { color: plant.main_species.flower.color })}
                >
                    <FilterVintageIcon />
                </Badge>
            )}
            {!!plant.main_species.foliage.color && (
                <Badge
                    backgroundColor={plant.main_species.foliage.color}
                    title={t('plant_details.badges.foliage_color', { color: plant.main_species.foliage.color })}
                >
                    <EcoIcon />
                </Badge>
            )}
            {!!plant.main_species.fruit_or_seed.color && (
                <Badge
                    backgroundColor={plant.main_species.fruit_or_seed.color}
                    title={t('plant_details.badges.seed_color', { color: plant.main_species.fruit_or_seed.color })}
                >
                    <ScatterPlotIcon />
                </Badge>
            )}
            {!!plant.main_species.growth.temperature_minimum.deg_c && (
                <Badge
                    backgroundColor="LightSkyBlue"
                    title={t('plant_details.badges.min_t', { t: `${Math.round(plant.main_species.growth.temperature_minimum.deg_c)}°C` })}
                >
                    {`${Math.round(plant.main_species.growth.temperature_minimum.deg_c)}°C`}
                </Badge>
            )}
        </Box>
    );
};