import React, {Suspense} from 'react'
import {RenderElements} from "./RenderElements.jsx"
import {useConfiguratorRender} from "../../contexts/ConfiguratorRender.jsx";
import Box from "./Box.jsx";

const RenderBlock = () => {
    const {arr, idProject, allElem} = useConfiguratorRender()

    let defoultProject
    arr.projects.map((t) => {
        t.id === idProject ? defoultProject = t.def : ""
    })

    return (
        <>
            <Suspense fallback={<Box/>}>
                <RenderElements myPath={defoultProject}/>
                {
                    allElem.map((t) => {
                        return (
                            t.check && <RenderElements myPath={t.file}/>
                        )
                    })
                }
            </Suspense>
        </>
    );
};

export default RenderBlock;