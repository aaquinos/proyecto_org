import "./colaborador.css"
import {AiFillCloseCircle, AiOutlineHeart, AiFillHeart} from "react-icons/ai"

const Colaborador = (props) => {
    const {nombre, puesto, foto, id, fav} = props.datos
    const { colorPrimario, eliminarColaborador, like } = props

    // const fondo = { backgroundColor: colorPrimario }

    //Operador ternario: condicion ? verdadero : falso
    
    return <div className="colaborador">
        <AiFillCloseCircle onClick={() => eliminarColaborador(id)} className="eliminar"/>
        <div className="encabezado" style={{backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <AiFillHeart color="red" onClick={() => like(id)} className="like" /> : <AiOutlineHeart onClick={() => like(id)} className="like"/> }
        </div>
    </div>
}

export default Colaborador