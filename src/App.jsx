import {Canvas} from "@react-three/fiber";
import {Experience} from "./components/Experience";
import PanelProjectsTailwind from "./components/panel/PanelProjectsTailwind.jsx";

function App() {
    return (
        <>
            <Canvas shadows camera={{ position: [4, 4, -12], fov: 35 }}>
                <Experience />
            </Canvas>
            <PanelProjectsTailwind/>
        </>
    )
}
export default App