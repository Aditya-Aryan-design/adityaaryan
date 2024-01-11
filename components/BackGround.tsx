'use client'
import { Canvas } from "@react-three/fiber"
import { useAppSelector } from "@/redux/hooks"
import Meshes from "./Meshes"




function BackGround() {

    const color = useAppSelector((state) => state.theme.value);


    return (
        <div className="absolute h-full w-full -z-50">
            <Canvas
                camera={{
                    far: 100,
                    fov:50,
                    position:[0,0,4]
                }}
                
            >
                <directionalLight
                    color={color}
                    position={[0, -1, 0.5]}
                />

                <ambientLight
                    intensity={0.2}
                />

                        <Meshes count={200}/>
            



            </Canvas>
        </div>
    )
}

export default BackGround
