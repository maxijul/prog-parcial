import React from "react";
import CrudTableRow from "./CrudTableRow";

const CrudTable = ({ data, agendarTurno }) => {
  return (
    <div>
      <h3>Odontólogos Disponibles</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre del especialista</th>
            <th>Horarios de Atención</th>
            <th>Lugar de Atención</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((el) => (
              <CrudTableRow
                key={el.id}
                el={el}
                agendarTurno={agendarTurno}
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

export default CrudTable;