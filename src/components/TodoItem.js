import React from "react";

function TodoItem(props) {
    return(
        <div>
            <p>
                <span>{props.text}</span>
                <span><input type="checkbox"/></span>
            </p>
        </div>
    );
}

export { TodoItem };
