import React, { useEffect, useState } from 'react';   

import Create from '../Create/Create';   

import axios from 'axios';   

import './Home.css';

function Index() {


    const [todos, setTodos] = useState([]);

    const [selectedTodo, setSelectedTodo] = useState(null);               

    const [updateTitle, setUpdateTitle] = useState('');

    const [updateDescription, setUpdateDescription] = useState('');


    



    const fetchTodos = () => {


        axios.get("https://koders-m8fj.onrender.com/get")
     


            .then(result => {
                setTodos(result.data);                
            })

            .catch(err => {
                console.log(err);
            });
    };


    
 


    
    const handleDelete = (id) => {

axios.delete(`https://koders-m8fj.onrender.com/delete/${id}`)        
            .then(response => {
                setTodos(prevTodos => prevTodos.filter(t => t._id !== id));
            })

            .catch(err => {
                console.log(err);
            });
    };

    

useEffect(() => {

        fetchTodos(); 
                      
    }, []);
    




    return (
        <div className="container">


            <div className='d'>
                <h2 id="a">Simple Task Management Web Application</h2>

                <Create addNewTask={fetchTodos} />     


                <h4>View Details:</h4>
            </div>


            <div className='c'>
                {
                    todos.length === 0
                        ? 
                        <div></div>                  

                        : todos.map(todo => (
                            <div key={todo._id} className='checkbox'>        



                                <label>
                                    <div>Title: {todo.title}</div>
                                    <div>Description: {todo.description}</div>                          
                                    <div>Status: {todo.status}</div>


                                    <input type='submit' value={"Edit"} id="i"  />     

                                    <input type='submit' value={"Delete"} id="i" onClick={() => handleDelete(todo._id)} />     

                                    
                                </label>
                            </div>
                        ))
                }
            </div>


            
        </div>
    );
}

export default Index;
