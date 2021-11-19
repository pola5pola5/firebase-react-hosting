import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Table} from 'reactstrap';
import {useState} from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
    //todoを管理するstate
    const [todos, setTodos] = useState([])

    //todoを管理するための関数
    const addTodo = text => {
        const newTodos = [...todos, {text, complete: false}] // objectにしてステータスを追加
        // const newTodos = [...todos, text] //今までのデータ(...todos)と，追加したデータ(text)を配列に格納
        setTodos(newTodos) // 配列のステートに保存
        console.log(newTodos)
    }

    //todoを削除するための関数
    const removeTodo = index => {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }
    const completeTodo = index => {
        const newTodos = [...todos]
        newTodos[index].complete = !newTodos[index].complete
        setTodos(newTodos)
        console.log(newTodos)
    }

    return (
        <div className="App">
            <Container>
                <h1 className={"mt-4"}>Todo リスト</h1>
                <TodoForm addTodo={addTodo}/>
                <TodoList
                    todos={todos}
                    removeTodo={removeTodo}
                    completeTodo={completeTodo}/>
            </Container>
        </div>
    );
}

export default App;
