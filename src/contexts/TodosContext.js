import React, {createContext, useState} from "react";

export const TodosContext = createContext()

const TodosContextProvider = (props) => {
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
    // プロバイダではvalueプロパティを受け取り，これがコンシューマコンポーネントに渡る
    return (
        <TodosContext.Provider value={{todos, addTodo, removeTodo, completeTodo}}>
            {props.children}
        </TodosContext.Provider>
    )
}
export default TodosContextProvider