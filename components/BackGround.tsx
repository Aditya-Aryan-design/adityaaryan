'use client'
import { Canvas } from "@react-three/fiber"
import { useAppSelector } from "@/redux/hooks"
import Meshes from "./Meshes"





function BackGround() {

    const color = useAppSelector((state) => state.theme.value);


    return (
        <div className="absolute h-full w-full -z-50 opacity-75">
            <Canvas
                camera={{
                    far: 100,
                    fov:40,
                    position:[0,0,4]
                }}
                
            >
                <directionalLight
                    color={color}
                    position={[0, -1, 0.5]}
                    intensity={0.7}
                />

                <ambientLight
                    intensity={0.05}
                />

                        <Meshes />
            



            </Canvas>
        </div>
    )
}

export default BackGround
