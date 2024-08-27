
import React from 'react'
import { useForm } from '../hooks/useForm'

export const TodoAdd = ({ onNewTodo}) => {

    const { description, onInputChange, onResetForm} = useForm({
        description: '',
    
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        if (description.trim().length <= 1) {
            return
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

       

        onNewTodo && onNewTodo(newTodo)
        onResetForm()

        
    }

    return (
        <>
            <form onSubmit={ handleSubmit}>
                <input
                    type="text"
                    name="description"
                    placeholder="Write a task..."
                    autoComplete="off"
                    className="form-control"
                    value= {description}
                    onChange={onInputChange}
                />
                <button
                    type="submit"
                    className="btn btn-outline-primary mt-1 btn-block"
                >
                    Add
                </button>
            </form>
        </>
    )
}
