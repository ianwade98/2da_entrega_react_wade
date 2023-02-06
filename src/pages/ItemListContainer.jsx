import "./ItemListContainer.css";
import { productos as listaproductos } from "../services/productos";
import Card from "../Components/Card/Card";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


let categorias = [
  { nombre: "Diseño" },
  { nombre: "Data" },
  { nombre: "Programación" },
  { nombre: "Marketing" },
  { nombre: "Producto" }
];

export default function Home() {
  const [productos, setProductos] = useState(listaproductos);
  const { id } = useParams();
  console.log(id)

  useEffect(() => {
    if (id!==undefined){
      const newlista = listaproductos.filter(producto=>producto.categoria===id)
      setProductos(newlista)
      console.log(`el nuevo array es:`)
      console.log(newlista)
    }else{
      setProductos(listaproductos)
    }
  }, [id]);

  return (
    <div className="cursos-container">
      <div className="categorias">
        {categorias.map((elm) => (
          <Link to={`/cursos/categoria/${elm.nombre}`}>
            <div key={elm.nombre} className="categoria-elemento">
              {elm.nombre}
            </div>
          </Link>
        ))}
      </div>
      <div className="col-md-4 lista-cursos">
        {productos.map((producto) => (
          <Card
            key={producto.id}
            nombre={producto.nombre}
            categoria={producto.categoria}
            precio={producto.valor}
            id={producto.id}
            bt={true}
          >
            {producto.nombre}
          </Card>
        ))}
      </div>
    </div>
  );
}
