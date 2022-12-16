import React from "react";
import "../css/TodoCounter.css";

function TodoCounter({ total, completed }) {
  return (
    <h2 className="TodoCounter">
      Has completado props {completed} de {total} TODOs
    </h2>
  );
}

export { TodoCounter };
