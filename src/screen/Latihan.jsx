import React, { useEffect, useState } from 'react'

const Latihan = () => {

    const[count, setCount] = useState(1)

    function handleTambah(){
        setCount(prev=> prev=prev+1)
    }
    useEffect(()=>{
        console.log("Tampil")
    }, [count])
    
  return (
    <div>
        <h1>Latihan UseEffect {count}</h1>
        <button onClick={handleTambah}>Tambah</button>
    </div>
  )
}

export default Latihan