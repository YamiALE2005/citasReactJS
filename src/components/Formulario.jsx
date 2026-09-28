import { useState, useEffect } from "react";
import '../css/formulario.css';

const Formulario = ({modalVisual, setModalVisible}) => {
    const [paciente,setPaciente]=useState('')
    return (
        <dir className= "formulario-contenido">
            <h2 className="formulario-titulo">Nueva
                <span className="formulario-titulo-bold"> Cita</span>
            </h2>
            <button 
                className="formulario-btn-cancelar"
                onClick={()=> setModalVisible(false)}
            >
                <span className="formulario-btn-texto-cancelar">Cancelar</span></button>
            <from>
                <div className="formulario-campo">
                    <label
                    htmlFor="paciente"
                    className="formulario-label"
                    >Nombre Paciente</label>
                    <input
                        id="paciente"
                        type="text"
                        className="formulario-input"
                        placeholder="Perrito Poppy"
                        value={paciente}
                        onChange={(e) => setPaciente(e.target.value)}
                    />
                </div>
            </from>
        </dir>
    );
};

export default Formulario;