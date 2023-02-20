const globalSoundInitialState = {
    isStoppedAll: false,
    isPauseAll: false,
    isRandomAll: false,
    isPlaying: false
}

const actions = {
    STOP_ALL: 'stop_all',
    PAUSE_ALL: 'pause_all',
    RANDOM_ALL: 'random_all',
    REVERT_IS_PLAYED: 'change_is_played', // todo не использую сейчас
    CHANGE_RANDOM_ALL: '',
    CHANGE_STOP_ALL: '',
}


const globalSoundStateReducer = (state, action) => {
    switch (action?.type) {
        case actions.STOP_ALL: {
            return {...state, isStoppedAll: true, isRandomAll: false}
        }
        case actions.RANDOM_ALL: {
            return {...state, isStoppedAll: false, isRandomAll: true}
        }
        case actions.PAUSE_ALL: {
            return {...state, isPauseAll: !state.isPauseAll, isRandomAll: false}
        }
        case actions.REVERT_IS_PLAYED: {
            return {...state, isPlaying: !state.isPlaying}
        }
        case actions.CHANGE_RANDOM_ALL: {
            return {...state, isRandomAll: action.payload}
        }
        case actions.CHANGE_STOP_ALL: {
            return {...state, isStoppedAll: action.payload}
        }
        default:
            throw Error('Unknown action: ' + action.type);
    }
}

export {globalSoundStateReducer, globalSoundInitialState, actions};