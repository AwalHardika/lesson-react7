import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const ListUser = () => {
const [dataUser, setDataUser] = useState([])
const [refresh, setRefresh] = useState(false)

async function getDataUser(){
try {
    const response = await axios.get("http://localhost:3000/pengguna")
    setDataUser(response.data)
} catch (error) {
    console.log(error)
}
}

//use effect dengan dependency array dia dijalankan setelah proses rendering pertama kali selesai dan dependency array kosong itu berfungsi agar useEffect dijalankan sekali saja
useEffect(()=>{
    getDataUser() 
},[refresh])

async function handleDelete(id, nama){
const conf = window.confirm(`Apakah yakin anda akan delete ${nama} ?`)
if(!conf) return
try {
    await axios.delete(`http://localhost:3000/pengguna/${id}`)
    alert("Data Berhasil dihapus")
    setRefresh(prev => prev = !prev)
} catch (error) {
    console.log(error)
}

}


return (
    <div className={`w-[100dvw] min-h-[100dvh] max-w-[900px] bg-slate-100 mx-auto flex flex-col items-center`}>
        <h1 className={`font-bold text-2xl`}>List User</h1>
        <div className={`flex flex-col gap-8 mt-12`}>
            {
                dataUser.map((e)=>(
                    <div key={e.id} className={`bg-blue-400 px-4 py-2 rounded-2xl relative`}>
                        <div className={`w-5 h-5 flex justify-center items-center bg-red-500 absolute right-4 cursor-pointer`} onClick={()=>handleDelete(e.id, e.nama)}>
                            <h1 className={`text-white font-extrabold`}>X</h1>
                        </div>
                        <h1> Nama : {e.nama}</h1>
                        <h1> Email : {e.email}</h1>
                        <h1>Jenis-Kelamin : {e.jenis_kelamin}</h1>
                        
                        <div className='flex justify-center gap-4'>
                        <NavLink to={`/detailuser?id=${e.id}`} className={`flex justify-center`}>
                            <button className={`p-2 bg-white text-blue-500 mt-4 rounded-lg `}>Detail</button>
                        </NavLink>   
                        <NavLink to={`/edituser?id=${e.id}`}>
                            <button className={`p-2 bg-green-500 text-white mt-4 rounded-lg`}>Edit</button>
                        </NavLink>
                        </div>
                    
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ListUser