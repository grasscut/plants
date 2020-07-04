export default (state = { token: null }, action) => {
    switch (action.type) {
        case 'AUTHENTICATION_RECEIVED':
            return {
                ...state,
                token: action.payload,
            };
        default:
            return state;
    }
};