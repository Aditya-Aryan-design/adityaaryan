


const Mesh=()=>{
    return(
        <mesh
        position={[Math.random()*7-3.5, Math.random()*3-1.5, Math.random()*4-2]}
        rotation={[Math.random(), Math.random()*-1, Math.random()]}
        >
            <cylinderGeometry args={[0.05,0.05,0.1]}/>
            <meshStandardMaterial />
        </mesh>
    )
}

const Meshes = ({count}:{count:number})=>{

    
    const components = [];
    for(let i=0; i<count; i++){
        components.push(<Mesh key={i}/>)
    }

    return <>
        {components}
    </>
}


export default Meshes
