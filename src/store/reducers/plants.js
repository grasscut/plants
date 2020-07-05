import { updateList } from '../../utils';

export default (state = { allPlants: [], loading: 0 }, action) => {
    switch (action.type) {
        case 'PLANTS_RECEIVED':
            return {
                ...state,
                allPlants: action.payload,
                loading: state.loading - 1,
            };
        case 'PLANTS_LOADING':
            return {
                ...state,
                loading: state.loading + 1,
            };
        case 'PLANTS_UPDATED':
            return {
                ...state,
                allPlants: updateList(state.allPlants, action.payload),
                loading: state.loading - 1,
            };
        case 'PLANTS_LOADING_FAILED':
            return {
                ...state,
                loading: state.loading - 1,
            };
        default:
            return state;
    }
};