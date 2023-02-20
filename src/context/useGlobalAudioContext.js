import {useContext} from "react";
import GlobalAudioContext from "src/context/GlobalAudioContext";

const useGlobalAudioContext = () => {
    const globalAudioContext = useContext(GlobalAudioContext);
    const {isStopAll, isPauseAll, isRandomAll} = globalAudioContext;
    const [isStopAllValue, setIsStopAll] = isStopAll;
    const [isPauseAllValue, seIsPauseAll] = isPauseAll;
    const [isRandomAllValue, setIsRandomAll] = isRandomAll;


    return {
        isStopAllValue, setIsStopAll,
        isPauseAllValue, seIsPauseAll,
        isRandomAllValue, setIsRandomAll
    }
}

export default useGlobalAudioContext;