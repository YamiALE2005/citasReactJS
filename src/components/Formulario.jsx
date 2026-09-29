import { useState, useEffect } from "react";
import '../css/formulario.css';

const Formulario = ({modalVisual, setModalVisible}) => {
    const [paciente,setPaciente]=useState('')
    const [nombrePropietario,setNombrePropietario]=useState('')
    const [correo,setCorreo]=useState('')
    const [telefono,setTelefono]=useState('')
    const [fechaAlta,setFechaAlta]=useState('')
    const [sintomas,setSintomas]=useState('')

    const handelCita= (e)=>{
        e.preventDefault();

    }

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
            <from onSubmit={(e) => handelCita(e)}>
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
            
                <div className="formulario-campo">
                    <label
                    htmlFor="nombrePropietario"
                    className="formulario-label"
                    >Nombre Propietario</label>
                    <input
                        id="nombrePropietario"
                        type="text"
                        className="formulario-input"
                        placeholder="Nombre Propietario"
                        value={nombrePropietario}
                        onChange={(e) => setNombrePropietario(e.target.value)}
                    />
                </div>
            
                <div className="formulario-campo">
                    <label
                    htmlFor="correo"
                    className="formulario-label"
                    >Email</label>
                    <input
                        id="correo"
                        type="text"
                        className="formulario-input"
                        placeholder="Email"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                    />
                </div>
            
                <div className="formulario-campo">
                    <label
                    htmlFor="telefono"
                    className="formulario-label"
                    >Telefono</label>
                    <input
                        id="telefono"
                        type="text"
                        className="formulario-input"
                        placeholder="Telefono"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                    />
                </div>
            
                <div className="formulario-campo">
                    <label
                    htmlFor="fechaAlta"
                    className="formulario-label"
                    >Fecha de Alta</label>
                    <input
                        id="fechaAlta"
                        type="text"
                        className="formulario-input"
                        placeholder="dd/mm/aaaa"
                        value={fechaAlta}
                        onChange={(e) => setFechaAlta(e.target.value)}
                    />
                </div>
            
                <div className="formulario-campo">
                    <label
                    htmlFor="sintomas"
                    className="formulario-label"
                    >Sintomas</label>
                    <textarea
                        id="sintomas"
                        className="formulario-input"
                        placeholder="Decripcion del problema"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                        rows={4}
                    />
                </div>
                <button
                    type="submit"
                    className="formulario-btn-submit"
                >Agregar Paciente</button>
            </from>
        </dir>
    );
};

export default Formulario;