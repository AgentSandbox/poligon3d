import React from 'react';
import {v1} from "uuid";
import {useConfiguratorRender} from "../../contexts/ConfiguratorRender.jsx";

const PanelElementsVariantsTailwindMax = ({NEW}) => {
    const {setAllElem, allElem} = useConfiguratorRender()

    const myOnClick = (id, group) => {
        setAllElem(allElem.map(t => t.id === id ? {...t, check: true} : t.id !== id && t.groupElements === group ? {...t, check: false} : {...t} ))
    }

    return (
        <div
            className="flex flex-col items-start backdrop-blur-sm bg-white/30 w-44 h-32 rounded-3xl p-7 mt-10">
            {
                NEW.map((i) => {
                        return (
                            <div
                                className="w-48 text-sm font-medium text-gray-900"
                                key={v1()}
                            >
                                <span
                                    className={i.check === true ? "bg-gray-400 text-white" : ""}
                                    onClick={e => myOnClick(i.id, i.groupElements)}
                                >{i.name}</span>
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}

export default PanelElementsVariantsTailwindMax;