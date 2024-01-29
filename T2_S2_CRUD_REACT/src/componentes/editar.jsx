import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
// import { collection, addDoc } from "firebase/firestore"
import {db} from '../firebase_config/firebase'
import { getDoc, updateDoc, doc } from "firebase/firestore"
export function Editar(){
    const [descripcion, setDescripcion]= useState('')
    const [estock, setEstock]= useState(0)

    const navigate= useNavigate()
    const {id}= useParams()

const actualizar = async (e)=>{
e.preventDefault()
const producto= doc(db, "productos", id)
const datos= {descripcion:descripcion, estock:estock}
await updateDoc(producto, datos)
navigate('/')
}
const obtener_producto_poor_id = async (id)=>{
    const producto = await getDoc(doc(db, "productos", id))
    if(producto.exists()){
       setDescripcion(producto.data().descripcion)
       setEstock(producto.data().estock)
    }else{
        console.log('No existe producto')
    }
}
useEffect(()=>{
    obtener_producto_poor_id(id)
}, [])

    return(
        <>
        
<div className="content  mt-5" id="login">
    <div className="row justify-content-md-center">
        <div className="col-xl-4 col-md-12">
    <div className="card">
        <div className="card-header">
            Actualizar
          </div>
          <form onSubmit={actualizar}  >
        

            

        <div className="mb-3 p-3" >
        <label  className="form-label">Descripcion</label>
        <input   className="form-control"  
        value={descripcion}
        onChange={(e)=> setDescripcion(e.target.value)} />
      </div>

      <div className="mb-3 p-3" >
        <label  className="form-label">Estock</label>
        <input
        value={estock} 
        onChange={(e)=> setEstock(e.target.value)} type="number"  className="form-control"   />
      </div>
     

     <div className="btn-crear">
          <button type="submit"  className="btn btn-primary mt-3">Actualizar</button>
          </div>
        </form>
        </div>

        </div>
       
    </div>
    
    </div>

    
        </>
    )
}