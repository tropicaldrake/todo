import React, { useState } from 'react';
import { Avatar, Checkbox, IconButton, LinearProgress, List, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, TextField } from '@material-ui/core';
import styles from './App.module.css';
import { Add, RemoveCircle } from '@material-ui/icons';

function App() {

  const[adder,setAdder] = useState("");

  const[todos,setTodos] = useState([

    {name: "Lorem", done: false},
    {name: "Ipsum", done: false},
    {name: "Dolor", done: false}
    
  ]);

  function changeAdder(e){

    setAdder(e.target.value);

  }


  function changeTodo(index,e){
  
    let newTodos = [...todos];

    newTodos[index].done = !newTodos[index].done;

    setTodos(newTodos);

  }

  function removeTodo(index,e){

    let newTodos = [...todos];

    newTodos.splice(index,1);

    setTodos(newTodos);


  }

  function addTodo(e){

    e.preventDefault();

    if(adder.length > 0){
    
      let newTodos = [...todos];

      newTodos.push({

        name:adder,
        done:false

      });

      setTodos(newTodos);

      setAdder("");

    }

  }


  function doneTodos(){

    return todos.filter((todo)=>{

      return todo.done === true;

    }).length;

  }

  function getHeader(){

    if(todos.length > 0){

      if(todos.length === doneTodos()){

        return <span>Thou  hast completed the Lipsum!</span>;
  
      }else{

        return <span>Lista ({doneTodos()}/{todos.length})</span>;

      }

    }else{

      return <span>Dodaj nowe zadanie</span>;

    }



  }



  return (

    <div className={styles.container}>

      <div className={styles.wrapper}>

        <div className={styles.header}>


          {getHeader()}

          
        </div>
        
        <LinearProgress variant="determinate" value={Math.floor((doneTodos()/todos.length)*100)}/>

        <List disablePadding>

          {todos.map((todo,index)=>{return(

            <ListItem key={index} button onClick={ (e) => changeTodo(index,e) } >

              <ListItemIcon>

                <Checkbox edge="start" color="primary" checked={todo.done}></Checkbox>

              </ListItemIcon>

              <ListItemText primary={todo.name} />

              <ListItemSecondaryAction>

                <IconButton edge="end" onClick={ (e) => removeTodo(index,e) }>

                  <RemoveCircle color="secondary"/>

                </IconButton>

              </ListItemSecondaryAction>

            </ListItem>

          );})}

          
        </List>

        <form className={styles.adder} onSubmit={ (e)=> addTodo(e) } >

        <TextField value={adder} onChange={changeAdder} label="Dodaj nowe zadanie" variant="outlined" InputProps={{
          
          endAdornment:(
            
            <IconButton type="submit" color="primary">

              <Add/>

            </IconButton>


          )
            
        }} />

        </form>

      </div>


    </div>
      
  );


}

export default App;
