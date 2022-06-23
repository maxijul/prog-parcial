import React, { useState, useEffect } from "react";

const initailForm = {
  nombre: "",
  apellido: "",
  mail: "",
  numeroTelefono: "",
  odontologoAsignado: "",
  horarioAtencion: "",
  lugarAtencion: ""
};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit, nombreEspecialista, setNombreEspecialista, setHorario, horario, setLugar, lugar, agendarTurno }) => {
  const [form, setForm] = useState(initailForm);
  /* const [nombre, setNombre] = useState("") */



  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initailForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nombre || !form.apellido || !form.mail || !form.numeroTelefono ||!form.odontologoAsignado || !form.horarioAtencion || !form.lugarAtencion) {
      alert("Datos incompletos");
      return;
    }

    if (form.id == null) {
      createData(form);

    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setForm(initailForm);
    setNombreEspecialista("")
    setHorario("")
    setLugar("")
    setDataToEdit(null);
  };

  return (
    <div>
      <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          onChange={handleChange}
          value={form.nombre}
        />
        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          onChange={handleChange}
          value={form.apellido}
        />
        <input
          type="text"
          name="mail"
          placeholder="Mail"
          onChange={handleChange}
          value={form.mail}
        />
        <input
          type="text"
          name="numeroTelefono"
          placeholder="Número de teléfono"
          onChange={handleChange}
          value={form.numeroTelefono}
        />
        <input
          type="text"
          name="odontologoAsignado"
          placeholder="Nombre del especialista"
          value={form.odontologoAsignado = nombreEspecialista}
          onChange={handleChange}
          
        />
        <input
          type="text"
          name="horarioAtencion"
          placeholder="Horario del turno"
          onChange={handleChange}
          value={form.horarioAtencion = horario}
          
        />
        <input
          type="text"
          name="lugarAtencion"
          placeholder="Lugar de atencion"
          onChange={handleChange}
          value={form.lugarAtencion = lugar}
          
        />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
