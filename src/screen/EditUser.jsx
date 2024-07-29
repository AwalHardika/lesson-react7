import axios from 'axios'
import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

const EditUser = () => {
    const [queryParams] = useSearchParams()
    let id = queryParams.get("id")
    
    useEffect(()=>{
        try {
            axios.get(`http://localhost:3000/pengguna/${id}`)
            .then(res=>{
                console.log(res)
            })
        } catch (error) {
            console.log(error)
        }
    },[])
    return (
    <div>   
        <h1>EDIT USER</h1>
        <form className={`w-[300px] h-auto p-4 bg-white rounded-lg flex flex-col gap-2 shadow-lg mt-6`}>
          <div className={`flex flex-col gap-2`}>
          <label htmlFor="fullname">
            Fulname
          </label>
          <input type="text" 
          id='fullname' 
          className={`border border-slate-400 rounded-md`} />
          </div>

          <div className={`flex flex-col gap-2`}>
          <label htmlFor="email">
            Email
          </label>
          <input type="email" 
          id='email' 
          className={`border border-slate-400 rounded-md`} />
          </div>

          <div className={`mt-2 w-full`}>
          <select id="jenis_kelamin" className={`w-full px-2 rounded-lg bg-white border border-slate-400`}>
            <option value="" disabled selected>Pilih Jenis Kelamin</option>
            <option value="pria">Pria</option>
            <option value="wanita">Wanita</option>
          </select>
          </div>

          <div className={`flex flex-col gap-2`}>
          <label htmlFor="bod">
            Tanggal Lahir
          </label>
          <input type="date" 
          id='bod' 
          className={`border border-slate-400 rounded-md`} />
          </div>
          
          <h1>Alamat</h1>
          <div className={`px-4`}>
            <div className={`flex flex-col gap-2`}>
              <label htmlFor="rt">
                RT
              </label>
              <input type="text" 
              id='rt' 
              className={`border border-slate-400 rounded-md`} />
            </div>

          <div className={`flex flex-col gap-2`}>
              <label htmlFor="rw">
                RW
              </label>
              <input type="text" 
              id='rw' 
              className={`border border-slate-400 rounded-md`} />
          </div>
          <div className={`flex flex-col gap-2`}>
              <label htmlFor="jalan">
                Jalan
              </label>
              <input type="text" 
              id='jalan' 
              className={`border border-slate-400 rounded-md`} />
          </div>
          <div className={`flex flex-col gap-2`}>
              <label htmlFor="desa">
                Desa
              </label>
              <input type="text" 
              id='desa' 
              className={`border border-slate-400 rounded-md`} />
          </div>
          <div className={`flex flex-col gap-2`}>
              <label htmlFor="kecamatan">
                Kecamatan
              </label>
              <input type="text" 
              id='kecamatan' 
              className={`border border-slate-400 rounded-md`} />
          </div>
          </div>

          <button className='w-full py-2 rounded-lg bg-blue-400 text-white mt-2'>SUBMIT</button>
        </form>
    </div>
  )
}

export default EditUser