import types from './types';

export const pauseAll = () => ({
    type: types.PAUSE_ALL,
});

export const stopAll = bool => ({
    type: types.STOP_ALL,
    payload: bool
});

export const random = bool => ({
    type: types.RANDOM,
    payload: bool
});