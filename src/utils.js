export const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export const updateList = (initialList, payload) => {
    const index = initialList.findIndex((item) => item.id === payload.id);

    if (index < 0) {
        return [
            ...initialList,
            payload,
        ];
    } else {
        return [
            ...initialList.slice(0, index),
            payload,
            ...initialList.slice(index + 1),
        ];
    }
};