const initialState = {
    pauseAll: false,
    stopAll: false,
    random: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case 'PAUSE_ALL':
            return {...state, pauseAll: !state.pauseAll};

        case 'RANDOM':
            return {...state, random: action.payload};

        case 'STOP_ALL':{
            console.log(`RANDOM`);
            return {...state, random: action.payload};

        }
        default:
            return state;
    }
};

export default reducer;