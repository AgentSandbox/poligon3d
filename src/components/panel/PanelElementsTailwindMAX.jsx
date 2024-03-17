import React, {useEffect} from 'react';
import {useConfiguratorRender} from "../../contexts/ConfiguratorRender.jsx";
import PanelElementsVariantsTailwindMax from "./PanelElementsVariantsTailwindMAX.jsx";

const PanelElementsTailwindMax = () => {
    const {setAllElem, allElem, arr, allProjects, idProject} = useConfiguratorRender()

    let allElements
    for (let i = 0; i < allProjects.length; i++) {
        if (allProjects[i].id === idProject) {
            allElements = allProjects[i].components
        }
    }

    useEffect(() => {
        let xxx = allElements.map(t => {
            return {...t}
        })
        setAllElem(xxx)
    }, [allElements]);

    const render = []
    for (let j = 0; j < allElem.length; j++) {
        const NEW = []
        for (let i = 0; i < allElem.length; i++) {
            if (allElem[i].groupElements === j) {
                NEW.push(allElem[i])
            }
        }
        if (NEW.length !== 0) {render.push(<><PanelElementsVariantsTailwindMax NEW={NEW}/></>)}
    }

    return (
        <>
            {render}
        </>
    )
}

export default PanelElementsTailwindMax;