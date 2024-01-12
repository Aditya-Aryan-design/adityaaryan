import {useRef} from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";


const MyMesh=({i,j}:{i:number,j:number})=>{

    const myMesh = useRef<Mesh | null>(null);
    useFrame(()=>{
        if(myMesh.current){

            myMesh.current.rotation.x +=0.01
        }

    })
    
    return(
        <mesh
        ref={myMesh}
        position={[i,j,0]}
        rotation={[i,j,j]}
        scale={2}
        >
            <cylinderGeometry args={[0.05,0.05,0.1]}/>
            <meshStandardMaterial />
        </mesh>
    )
}

const Meshes = ()=>{

    
    const components = [];
    for(let i=-3; i<3; i+=0.4){
        for(let j=-1.5; j<1.5; j+=0.4)
            components.push(<MyMesh key={`${i}${j}`} i={i} j={j}/>)
    }

    return <>
        {components}
    </>
}


export default Meshes
