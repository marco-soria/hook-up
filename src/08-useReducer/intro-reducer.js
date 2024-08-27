const iniTialState = [{
    id: 1,
    todo: 'Recolect the Soul Stone',
    done: false,
}]

const todoReducer = (state = iniTialState, action) => {
    if (action?.type === 'add') {
        return [...state, action.payload];
    }
    return state;
}