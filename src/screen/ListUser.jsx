import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const ListUser = () => {
const [dataUser, setDataUser] = useState([])

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
},[])




return (
    <div className={`w-[100dvw] min-h-[100dvh] max-w-[900px] bg-slate-100 mx-auto flex flex-col items-center`}>
        <h1 className={`font-bold text-2xl`}>List User</h1>
        <div className={`flex flex-col gap-8 mt-12`}>
            {
                dataUser.map((e)=>(
                    <div key={e.id} className={`bg-blue-400 px-4 py-2 rounded-2xl`}>
                        <h1> Nama : {e.nama}</h1>
                        <h1> Email : {e.email}</h1>
                        <h1>Jenis-Kelamin : {e.jenis_kelamin}</h1>
                        <NavLink to={`/detailuser?id=${e.id}`} className={`flex justify-center`}>
                            <button className={`p-2 bg-white text-blue-500 mt-4 rounded-lg `}>Detail</button>
                        </NavLink>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ListUser