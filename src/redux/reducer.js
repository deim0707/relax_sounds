import types from './types';

const initialState = {
    pauseAll: false,
    stopAll: false,
    random: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.PAUSE_ALL:
            return {
                ...state,
                pauseAll: !state.pauseAll
            };

        case types.RANDOM:
            return {
                ...state,
                random: action.payload
            };

        case types.STOP_ALL:
            return {
                ...state,
                stopAll: action.payload
            };

        default:
            return state;
    }
};

export default reducer;