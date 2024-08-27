
import React from 'react'
import { useReducer, useEffect } from 'react'
import { todoReducer } from '../08-useReducer/todoReducer'

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodos = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleNewTodo = (newTodo) => {
        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch(action)
        /* dispatch({
            type: 'add',
            payload: newTodo
        }) */
    }

    const handleDeleteTodo = (todoId) => {
        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch(action)
    }

    const handleToggleTodo = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        })
    }

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length
    }
  
}
