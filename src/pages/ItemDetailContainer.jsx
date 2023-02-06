import "./ItemDetailContainer.css";
import { productos} from "../services/productos";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Components/Card/Card";

export default function Curso(){
    const [curso, setCurso] = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
        let producto = productos.find(producto=>producto.id===id)
        setCurso(producto)
    }, [id]);


    return(
        <div className="curso lista-cursos">
            <Card
                key={curso.id}
                nombre={curso.nombre}
                categoria={curso.categoria}
                precio={curso.valor}
                id={curso.id}
                bt={false}
            >
                {curso.nombre}
            </Card>
      </div>
    )




}