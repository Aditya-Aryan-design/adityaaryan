'use client'
import { Canvas } from "@react-three/fiber"
import { useAppSelector } from "@/redux/hooks"
import Meshes from "./Meshes"





function BackGround() {

    const color = useAppSelector((state) => state.theme.value);
    const bg = useAppSelector((state) => state.bg.value);


    return bg?(
        <div className="absolute h-full w-full -z-50 opacity-50">
            <Canvas
                camera={{
                    far: 100,
                    fov:40,
                    position:[0,0,4]
                }}
                
            >
                

                <ambientLight
                    intensity={0.05}
                />

                    <group>
                    <directionalLight
                    color={`rgb(${color})`}
                    position={[0, 0, 0.5]}
                    intensity={0.3}
                />
                        <Meshes />
                    </group>



            </Canvas>
        </div>
    ):<></>
}

export default BackGround
