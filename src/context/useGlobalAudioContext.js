import {useContext} from "react";
import GlobalAudioContext from "src/context/GlobalAudioContext";
import {actions} from "src/context/reducer";

const useGlobalAudioContext = () => {
    const globalAudioContext = useContext(GlobalAudioContext);

    const [state, dispatch] = globalAudioContext;
    const {isStoppedAll, isPauseAll, isRandomAll, isPlaying} = state;

    const stopAll = () => dispatch({type: actions.STOP_ALL});
    const pauseAll = () => dispatch({type: actions.PAUSE_ALL});
    const randomAll = () => dispatch({type: actions.RANDOM_ALL});

    const changeStopAll = (value) => dispatch({
        type: actions.CHANGE_STOP_ALL,
        payload: value
    });
    const changeRandomAll = (value) => dispatch({
        type: actions.CHANGE_RANDOM_ALL,
        payload: value
    });


    return {
        isStoppedAll,
        isPauseAll,
        isRandomAll,
        isPlaying,
        stopAll,
        pauseAll,
        randomAll,
        changeStopAll,
        changeRandomAll,
    }
}

export default useGlobalAudioContext;