import React, { useState, useEffect } from 'react';
import style from '../Todo/Todo.module.css'

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [update, setupdate] = useState(false);
    let [ids, SetIds] = useState(0)
    let [data, setData] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTodoItem = {
            id: Date.now(),
            title: data.title,
            description: data.description,
            completed: false,
        };
        setTodos([...todos, newTodoItem]);
        localStorage.setItem('todos', JSON.stringify([...todos, newTodoItem]));
        setData({ title: "", description: "" });
    }

    const handleChang = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        // console.log(data)
    }

    const deleteuser = (i) => {
        let filterdata = todos.filter((ele, index) => {
            return ele.id !== i
        })
        setTodos(filterdata)
        localStorage.setItem('todos', JSON.stringify(filterdata));
    }

    const UpdateUser = (user, index) => {
        // console.log(user)
        setupdate(!update)
        setData(user)
        SetIds(index)
    }

    const updatedata = () => {
        setupdate(!update)
        // console.log(ids)
        let filterdata = todos.find((ele, index) => {
            return index == ids
        })
        // console.log(filterdata)
        filterdata.title = data.title
        filterdata.description = data.description

        setTodos([...todos]); // Trigger a re-render to update the UI
        localStorage.setItem('todos', JSON.stringify(todos));

        // console.log(filterdata)
        setData(filterdata)
        setData({ title: "", description: "" })

    }

    const handleTodoToggle = (id) => {
        // console.log(id)
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        // console.log(storedTodos)
        setTodos(storedTodos);
    }, []);


    return (
        <>
            <div className='container d-flex justify-content-center mt-5'>
                <div className={`row formdiv ${style.formdiv} `}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input className='form-control' type="text" name="title" value={data.title} onChange={handleChang} placeholder='title' id="exampleFormControlInput1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea className='form-control' name="description" cols="30" rows="5" id="exampleFormControlTextarea1" value={data.description} onChange={handleChang} placeholder='description'></textarea>
                    </div>
                    <div className='text-center'>
                        {
                            update ?
                                (
                                    <button className='btn btn-success' onClick={updatedata}>update</button>
                                )
                                :
                                (
                                    <button className='btn btn-success' onClick={handleSubmit}>add</button>
                                )
                        }
                    </div>
                </div>
            </div>

            <div className='container mt-4'>
                <div className='row'>
                    <table className="table border">
                        <thead className="table-dark text-center">
                            <tr>
                                <th scope="col">status.</th>
                                <th scope="col">No.</th>
                                <th scope="col"> title</th>
                                <th scope="col">description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {
                                todos.map((user, index) => {
                                    return (
                                        <tr key={index} style={{ textDecoration: user.completed ? 'line-through' : 'none' }}>
                                            <td>
                                                <input type="checkbox" onChange={() => handleTodoToggle(user.id)} />
                                            </td>
                                            <td>{index + 1}</td>

                                            <td>{user.title}</td>
                                            <td>{user.description}</td>
                                            <td>
                                                <button className='btn btn-primary mx-2' onClick={() => UpdateUser(user, index)} disabled={user.completed == true}><i className="fa-solid fa-pen-to-square"></i></button>
                                                <button className='btn btn-success' onClick={() => deleteuser(user.id)} disabled={user.completed == true}><i className="fa-solid fa-trash"></i></button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>

            </div>



        </>
    )
}

export default Todo