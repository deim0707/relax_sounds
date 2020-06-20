const initialState = {
    pauseAll: false

};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case 'PAUSE_ALL':
            return {...state, pauseAll: !state.pauseAll};

        case 'testte':
            return state;

        default:
            return state;
    }
};

export default reducer;