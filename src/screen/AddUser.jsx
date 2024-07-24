import axios from 'axios';
import React from 'react'

const AddUser = () => {
  
  async function handleSubmit(event){
    //cegah agar form tidak reload saat submit
    event.preventDefault();
    const newUser = {
      nama : event.target.fullname.value,
      email : event.target.email.value,
      jenis_kelamin : event.target.jenis_kelamin.value,
      tanggal_lahir : event.target.bod.value,
      alamat : {
        rt : event.target.rt.value,
        rw : event.target.rw.value,
        jalan : event.target.jalan.value,
        desa : event.target.desa.value,
        kecamatan : event.target.kecamatan.value
      }
    }

    try {
      await axios.post("http://localhost:3000/pengguna", newUser, {
        "Content-Type" : "application/json"
      } )
    } catch (error) {
      console.log(error)
    }

    
  }

  return (
    <div className={`w-[100dvw] min-h-[100dvh] max-w-[900px] bg-slate-100 mx-auto flex flex-col items-center`}>
        <h1>
          Tambah Pengguna
        </h1>
        <form onSubmit={handleSubmit} className={`w-[300px] h-auto p-4 bg-white rounded-lg flex flex-col gap-2 shadow-lg mt-6`}>
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

export default AddUser