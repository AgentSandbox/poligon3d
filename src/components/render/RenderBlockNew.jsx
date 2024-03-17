import React, {Suspense} from 'react'
import {RenderElements} from "./RenderElements.jsx"
import {useConfiguratorRender} from "../../contexts/ConfiguratorRender.jsx"
import Box from "./Box.jsx"

const RenderBlockNew = () => {
    const {arr, idProject, allElem} = useConfiguratorRender()

    let defoultProject
    arr.projects.map((t) => {
        t.id === idProject ? defoultProject = t.def : ""
    })
    console.log(defoultProject)
    console.log(allElem)
    return (
        <>
            <Suspense fallback={<Box/>}>
                {/*<RenderElements myPath={defoultProject}/>*/}

                {
                    defoultProject.map((j)=>{
                        return(
                            <RenderElements myPath={j.file}/>
                        )
                    })
                }

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

export default RenderBlockNew;