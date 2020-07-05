import { updateList } from '../../utils';

export default (state = { allDivisions: [], loading: 0 }, action) => {
    switch (action.type) {
        case 'DIVISIONS_LOADING':
            return {
                ...state,
                loading: state.loading + 1,
            };
        case 'DIVISIONS_UPDATED':
            return {
                ...state,
                allDivisions: updateList(state.allDivisions, action.payload),
                loading: state.loading - 1,
            }
        case 'DIVISIONS_LOADING_FAILED':
            return {
                ...state,
                loading: state.loading - 1,
            };
        default:
            return state;
    }
};