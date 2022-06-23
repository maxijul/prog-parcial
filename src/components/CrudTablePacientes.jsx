import React from "react";
import CrudTableRowPaciente from "./CrudTableRowPaciente";

const CrudTablePacientes = ({ data, setDataToEdit, deleteData, nombreEspecialista, horario, lugar }) => {
  return (
    <div>
      <h3>Su turno</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Mail</th>
            <th>Número de teléfono</th>
            <th>Odontólogo asignado</th>
            <th>Horario del turno</th>
            <th>Lugar del turno</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((el) => (
              <CrudTableRowPaciente
                key={el.id}
                el={el}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
                nombreEspecialista={nombreEspecialista}
                horario={horario}
                lugar={lugar}
              />
            ))
          ) : (
            <tr>
              <td colSpan="3">Sin datos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTablePacientes;