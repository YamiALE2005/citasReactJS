const Paciente = () => {
    return (
        <article className="paciente-card">
            <p className="paciente-label"> Paciente:
                <samp className="paciente-nombre"></samp>
            </p>
            <p className="paciente-fecha"></p>
            <div className="paciente-contenedor-botones"> 
                <button className="paciente-btn paciente-btn-editar">Editar</button>
                <button className="paciente-btn paciente-btn-elimiar">Eliminar</button>
            </div>

        </article>
    )
};

export default Paciente;
