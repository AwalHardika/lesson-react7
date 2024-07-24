import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const DetailUser = () => {
  const [QueryParams] = useSearchParams();
  const id = QueryParams.get("id")
  const [detailUser, setDetailUser] = useState({})
  
  async function getDataById(){
    try {
      const response = await axios.get(`http://localhost:3000/pengguna/${id}`)
      setDetailUser(response.data)

    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getDataById()
  }, [])
  
  return (
    <div className={`bg-blue-400 w-[40%] px-4 py-2 rounded-2xl`}>
        <h1> 
          Nama : {detailUser.nama}
        </h1>
        <h1> 
          Email : {detailUser.email}
        </h1>
        <h1> 
          Jenis Kelamin : {detailUser.jenis_kelamin}
        </h1>
        <h1>
          Tanggal Lahir : {detailUser?.tanggal_lahir}
        </h1>
        <h1>Alamat</h1>
        <ul className='pl-4'>
          <li>
            RT : {detailUser?.alamat?.rt}
          </li>
          <li>
            RW : {detailUser?.alamat?.rw}
          </li>
          <li>
            Jalan : {detailUser?.alamat?.jalan}
          </li>
          <li>
            Desa : {detailUser?.alamat?.desa}
          </li>
          <li>
            Kecamatan: {detailUser?.alamat?.kecamatan}
          </li>
        </ul>
    </div>
  )
}

export default DetailUser