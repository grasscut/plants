import React from 'react';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { capitalize } from '../../utils';

export default ({ plant }) => {
    const { t } = useTranslation();

    if (!plant.main_species || !plant.main_species.family_common_name) {
        return null;
    }

    const data = {
        name: plant.common_name || plant.scientific_name,
        family: plant.main_species.family_common_name,
        duration: plant.main_species.duration,
        flowerColor: plant.main_species.flower.color,
        flowerConspicuous: plant.main_species.flower.conspicuous,
    };

    return (
        <Typography>
            {t('plant_details.description.duration', { name: capitalize(data.name), family: data.family, duration: data.duration })}
            {!!data.flowerColor && (
                <>
                    {t(
                        `plant_details.description.flowers${data.flowerConspicuous ? '_conspicuous' : ''}`,
                        { color: data.flowerColor.toLowerCase() },
                    )}
                </>
            )}
        </Typography>
    );
};