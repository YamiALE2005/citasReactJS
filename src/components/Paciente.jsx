
import '../css/Paciente.css'

const Paciente = ({
    setModalVisible,
    pacientes,
    paciente,
    eliminarPaciente,
    editarPaciente
}) => {

    const handleEditar = () => {
        // Abrir el modal cuando se de clic
        setModalVisible(true);
        editarPaciente(paciente.id)
    }
    const handleEliminar = () => {
        eliminarPaciente(paciente.id);
    }

    return (
        <article className="paciente-card">
            <p className="paciente-label">Paciente:
                <span className="paciente-nombre"> {paciente.paciente}</span>
            </p>
            <p className="paciente-fecha"> {paciente.fechaAlta}</p>

            <div className="paciente-contenedor-botones">
                <button 
                    className="paciente-btn paciente-btn-editar"
                    onClick={(e) => handleEditar(e)}
                >Editar</button>
                <button 
                    className="paciente-btn paciente-btn-eliminar"
                    onClick={() => handleEliminar()}
                >Eliminar</button>
            </div>
        </article>
    );
};

export default Paciente;