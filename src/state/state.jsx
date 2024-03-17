import {v1} from "uuid"

export const store = [
    {
        id: v1(),
        name: "david",
        projects: [
            {
                id: v1(),
                check: false,
                nameProject: "poligonFox",
                def: [
                    // {file: "kinkiTypeOneDefoult1"},
                    // {file: "kinkiTypeOneDefoult2"},
                    // {file: "kinkiTypeOneDefoult3"},
                ],
                components: [
                    {id: v1(), groupElements: 0, name: "ViewOne", file: "wallFalse", check: true},
                    {id: v1(), groupElements: 0, name: "ViewTwo", file: "wall", check: false},
                    {id: v1(), groupElements: 0, name: "ViewThree", file: "wallGray", check: false},
                    {id: v1(), groupElements: 1, name: "foxChrome", file: "foxChrome", check: false},
                    {id: v1(), groupElements: 1, name: "foxBlack", file: "foxBlack", check: false},
                    {id: v1(), groupElements: 1, name: "foxPoligons", file: "foxPoligons", check: false},
                ]
            },
        ]
    }
]