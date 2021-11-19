import React from "react";
import {Button, Table} from "reactstrap";

function TodoList({todos, completeTodo, removeTodo}) {
    return (
        <Table>
            <tbody>
            {todos && todos.map((todo, index) => (
                <tr key={index}>
                    <td align={"left"} class={todo.complete ? "text-secondary" : ""}>
                        {todo.text}
                    </td>
                    <td align={"right"}>
                        <Button color={todo.complete ? "secondary" : "success"}
                                onClick={() => completeTodo(index)}>
                            {todo.complete ? "完了" : "未完了"}
                        </Button>
                        <Button color={"danger"} onClick={() => removeTodo(index)}>削除</Button>
                    </td>
                </tr>
            ))}
            </tbody>
        </Table>
    )
}

export default TodoList