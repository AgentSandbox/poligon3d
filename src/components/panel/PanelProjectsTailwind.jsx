import {useConfiguratorRender} from "../../contexts/ConfiguratorRender.jsx"
import {v1} from 'uuid'

import PanelElementsTailwindMax from "./PanelElementsTailwindMAX.jsx";

const PanelProjectsTailwind = () => {
    const {allProjects, setAllProjects, idProject, setIdProject} = useConfiguratorRender()

    const onChangeHandle = (idCurrentProject) => {
        setIdProject(idCurrentProject)
        setAllProjects(allProjects.map(t => t.id === idCurrentProject ? {...t, check: true} : {...t, check: false}))
    }

    const radioProjects =
        <div
            className="top-4 right-3 flex flex-col items-start backdrop-blur-sm bg-white/30 w-44 h-32 rounded-3xl p-5 mt-10">
            {
                allProjects.map((t, index) => {
                    return (
                        <div
                            className="w-48 text-sm font-medium text-gray-900"
                            key={v1()}
                        >
                            <span
                                className={t.check === true ? "bg-amber-400" : ""}
                                onClick={e => onChangeHandle(t.id)}
                            >
                                {t.nameProject}</span>
                        </div>
                    )
                })
            }
        </div>

    return (
        <>
            <div className="fixed right-3 top-4 flex flex-col items-center flex-wrap w-64">
                {radioProjects}
                {idProject && <PanelElementsTailwindMax/>}
            </div>

        </>
    )
}

export default PanelProjectsTailwind;