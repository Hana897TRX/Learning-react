import react from "react";

function TodoList(props) {
    return(
        <div>
            {props.children}
        </div>
    );
}

export { TodoList };