const updatePlants = (state, payload) => {
    let allPlants = state.allPlants;
    const index = allPlants.findIndex((item) => item.id === payload.id);

    if (index < 0) {
        allPlants = [
            ...allPlants,
            payload,
        ];
    } else {
        allPlants = [
            ...allPlants.slice(0, index),
            payload,
            ...allPlants.slice(index + 1),
        ];
    }

    return {
        ...state,
        allPlants,
        loading: state.loading - 1,
    };
};

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
            return updatePlants(state, action.payload);
        case 'PLANTS_LOADING_FAILED':
            return {
                ...state,
                loading: state.loading - 1,
            };
        default:
            return state;
    }
};