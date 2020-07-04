import axios from 'axios';

export const getAuthenticationToken = () => {
    return async (dispatch) => {
        try {
            const { data: { authToken }} = await axios.get('http://localhost:9000/auth');

            dispatch({
                type: 'AUTHENTICATION_RECEIVED',
                payload: authToken,
            })
        } catch(error) {

        }
    };
};