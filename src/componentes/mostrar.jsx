import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  collection,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase_config/firebase.js";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Myawal = withReactContent(Swal);

export function Mostrar_data() {
  // configurar hooks
  const [productos, setProductos] = useState([]);

  //    referenciar base de datos
  const productos_coleccion = collection(db, "productos");

  // funcion para mostar todos los docs

  const get_productos = async () => {
    const data = await getDocs(productos_coleccion);
    // console.log(data.docs)
    setProductos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  // eliminae producto
  const eliminar_producto = async (id) => {
    const productosDoc = doc(db, "productos", id);
    await deleteDoc(productosDoc);

    get_productos();
  };

  // Alerta config
  const confirm_borrar = (id) => {
    Swal.fire({
      title: "Quieres eliminar este producto",
    }).then((result) => {
      if (result.isConfirmed) {
        eliminar_producto(id);
        Swal.fire("Eliminado");
      }
    });
  };
  //usamos useeffect
  useEffect(() => {
    get_productos();
  }, []);
  console.log(productos);
  // useEffect(() => {
  //     console.log(productos);
  // }, [productos]);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="d-grid gap-2">
            <Link to="/crear" className="crear btn btn-success mt-2 mb-2">
              Crear <i class="fa-solid fa-plus"></i>
            </Link>
          </div>

          <table>
            <thead className=" bg-dark ">
              <tr>
                <th>Descripcion</th>
                <th>Stock</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((producto) => (
                <tr key={producto.id}>
                  <td>{producto.descripcion}</td>
                  <td>{producto.estock}</td>
                  <td>
                    <Link
                      to={`/edit/${producto.id}`}
                      className="btn btn-primary m-1"
                    >
                      <i class="fa-solid fa-file-pen"></i>
                    </Link>
                    <button
                      onClick={() => {
                        confirm_borrar(producto.id);
                      }}
                      className="btn btn-danger"
                    >
                      <i class="fa-solid fa-trash-can"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
