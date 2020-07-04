import axios from '../../axios';

export const getPlants = () => {
    return async (dispatch) => {
        dispatch({
            type: 'PLANTS_LOADING',
        });

        try {
            const { data } = await axios.get(
                '/plants',
                {
                        params: {
                            page_size: 20,
                            page: Math.floor((Math.random() * 1000) + 1),
                        },
                    },
            );

            dispatch({
                type: 'PLANTS_RECEIVED',
                payload: data,
            })
        } catch(error) {
            dispatch({
                type: 'PLANTS_LOADING_FAILED',
            });
        }
    };
};

export const searchPlants = (searchString) => {
    return async (dispatch) => {
        dispatch({
            type: 'PLANTS_LOADING',
        });

        try {
            const { data } = await axios.get('/plants', { params: { q: searchString } });

            dispatch({
                type: 'PLANTS_RECEIVED',
                payload: data,
            });
        } catch(error) {
            dispatch({
                type: 'PLANTS_LOADING_FAILED',
            });
        }
    };
};

export const getPlant = (id) => {
    return async (dispatch) => {
        dispatch({
            type: 'PLANTS_LOADING',
        });

        try {
            const { data } = await axios.get(`/plants/${id}`);

            dispatch({
                type: 'PLANTS_UPDATED',
                payload: data,
            });
        } catch(error) {
            dispatch({
                type: 'PLANTS_LOADING_FAILED',
            });
        }
    };
};