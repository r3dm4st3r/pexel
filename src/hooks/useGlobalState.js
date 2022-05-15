import { useContext, useDebugValue } from "react";
import GlobalStateContext from "../context/GlobalStateProvider";

const useGlobalState = () => {
    const { globalData } = useContext(GlobalStateContext);
    useDebugValue(globalData, globalData => globalData ? "Data" : "No data")
    return useContext(GlobalStateContext);
}

export default useGlobalState;