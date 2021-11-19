import React, {useState, useContext} from "react";
import {Button, Form, Input, InputGroup} from "reactstrap";
import {TodosContext} from "../contexts/TodosContext";
function TodoForm() {
    //useContextの引数にContextのオブジェクトを渡すことで，value値にセットした値を使える
    const {addTodo} = useContext(TodosContext)
    const [value, setValue] = useState('')
    //フォーム送信次の関数
    const handleSubmit = e => {
        e.preventDefault()
        addTodo(value)
        setValue('') // 入力フォームのなかを空にする
    }
    return(
        <Form onSubmit={handleSubmit}>
                    <InputGroup>
                        <Input type={"text"}
                               value={value}
                               onChange={e => setValue(e.target.value)}/>
                        <Button type={"text"} color={"primary"}>追加</Button>
                    </InputGroup>
                </Form>
    )
}
export default TodoForm
