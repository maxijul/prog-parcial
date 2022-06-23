import React from "react";

const CrudTableRowPaciente = ({el, setDataToEdit, deleteData, nombreEspecialista, horario, lugar}) => {
  let { nombre, apellido, mail, numeroTelefono, id} = el;

  return (
    <tr>
      <td>{nombre}</td>
      <td>{apellido}</td>
      <td>{mail}</td>
      <td>{numeroTelefono}</td>
      <td>{nombreEspecialista}</td>
      <td>{horario}</td>
      <td>{lugar}</td>

      <td>
        <button onClick={() => setDataToEdit(el)}>Editar datos</button>
        <button onClick={() => deleteData(id)}>Cancelar Cita</button>
      </td>
    </tr>
  );
};

export default CrudTableRowPaciente;
