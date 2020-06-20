

export const pauseAll = bool => {
    return {
        type: 'PAUSE_ALL',
        payload: bool
    }
};

export const stopAll = bool => {
    return {
        type: 'STOP_ALL',
        payload: bool
    }
};

export const random = (bool) => {
    return {
        type: 'RANDOM',
        payload: bool
    }
};

