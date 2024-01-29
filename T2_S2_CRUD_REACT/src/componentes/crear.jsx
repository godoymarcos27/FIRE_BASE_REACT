import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { collection, addDoc } from "firebase/firestore"
import {db} from '../firebase_config/firebase'
export function Crear(){
    const [descripcion, setDescipcion]= useState("")
    const [estock, setestock]= useState(0)
    const navigate= useNavigate()

    const c_productos = collection(db, "productos")
const store = async(e)=>{
    e.preventDefault()
    await addDoc(c_productos, {descripcion:descripcion, estock:estock})
    navigate('/')

   
    }

   
    return(
        <>

<div  className="content  mt-5" id="login">
    <div className="row justify-content-md-center">
        <div className="col-xl-4 col-md-12">
    <div className="card">
        <div className="card-header">
             Crear Producto
          </div>
          <form onSubmit={store}  >
        

            

        <div className="mb-3 p-3"  >
        <label  className="form-label">Descripcion</label>
        <input   className="form-control"  
        value={descripcion}
        onChange={(e)=> setDescipcion(e.target.value)} />
      </div>

      <div className="mb-3 p-3" >
        <label  className="form-label">Estock</label>
        <input
        value={estock} 
        onChange={(e)=> setestock(e.target.value)} type="number"  className="form-control"   />
      </div>
     

     <div className="btn-crear">
          <button type="submit"  className="btn btn-primary mt-3">Ingresar</button>
          </div>
        </form>
        </div>

        </div>
       
    </div>
    
    </div>

    
   
  </>
    )
}