import './Card.css';
import { Link } from "react-router-dom";

export default function Card({nombre,precio,categoria,id,bt}){
    return (
        <div className="card">
            <div className="nombreCurso"><p>{nombre}</p></div><br /><br />
            <div className="subtitleCurso">
                <p>Categoria: {categoria}</p>
                <p>$ {precio}</p>
            </div>
            <div className="botonCurso">
                {bt?(<button 
                    className="btn btn-primary" 
                    data-toggle="modal" 
                    data-target="#exampleModalCenter"
                    >
                       <Link to={`/cursos/item/${id}`}>Ver mas</Link> 
                </button>):(<p>DevSchool</p>)
                }
            </div>            
        </div>
    )
}