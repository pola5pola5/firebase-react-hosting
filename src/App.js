import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Form, Input, InputGroup, Table} from 'reactstrap';
import {useState} from "react";

function App() {
    const [value, setValue] = useState('')
    //todoを管理するstate
    const [todos, setTodos] = useState([])
    //フォーム送信次の関数
    const handleSubmit = e => {
        e.preventDefault()
        addTodo(value)
        setValue('') // 入力フォームのなかを空にする
    }
    //todoを管理するための関数
    const addTodo = text => {
        const newTodos = [...todos, text] //今までのデータ(...todos)と，追加したデータ(text)を配列に格納
        setTodos(newTodos) // 配列のステートに保存
        console.log(newTodos)
    }

    //todoを削除するための関数
    const removeTodo = index => {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }
    return (
        <div className="App">
            <Container>
                <h1 className={"mt-4"}>Todo リスト</h1>
                <Form onSubmit={handleSubmit}>
                    <InputGroup>
                        <Input type={"text"}
                               value={value}
                               onChange={e => setValue(e.target.value)}/>
                        <Button type={"text"} color={"primary"}>追加</Button>
                    </InputGroup>
                </Form>
            </Container>
            <Container>
                <Table>
                    <tbody>
                    {todos && todos.map((todo, index) => (
                        <tr key={index}>
                            <td align={"left"}>
                                {todo}
                            </td>
                            <td align={"right"}>
                                <Button color={"danger"} onClick={() => removeTodo(index)}>削除</Button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
}

export default App;
