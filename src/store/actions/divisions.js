import axios from '../../axios';

export const getDivision = (id) => {
    return async (dispatch) => {
        dispatch({
            type: 'DIVISIONS_LOADING',
        });

        try {
            const { data } = await axios.get(`/divisions/${id}`);

            dispatch({
                type: 'DIVISIONS_UPDATED',
                payload: data,
            });
        } catch(error) {
            dispatch({
                type: 'DIVISIONS_LOADING_FAILED',
            });
        }
    };
};