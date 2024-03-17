import {createContext, useContext, useEffect, useState} from "react"
import {store} from "./../state/state.jsx"

const ConfiguratorContextRender = createContext();

export const ConfiguratorProviderRender = ({children}) => {

    const [arr, setArr] = useState(store[0])
    const [allElem, setAllElem] = useState([])
    const [idProject, setIdProject] = useState(false)
    const [allProjects, setAllProjects] = useState(arr.projects)

    return (
        <ConfiguratorContextRender.Provider
            value={{
                allElem,
                setAllElem,
                arr,
                setArr,
                idProject,
                setIdProject,
                allProjects,
                setAllProjects,
            }}
        >
            {children}
        </ConfiguratorContextRender.Provider>
    );
};

export const useConfiguratorRender = () => {
    return useContext(ConfiguratorContextRender);
};
