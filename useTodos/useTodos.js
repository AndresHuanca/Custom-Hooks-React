import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const init = () => {   
    // Save in Local storage todos
    return JSON.parse( localStorage.getItem('todos') ) || [] ;
}

export const useTodos = () => {

    const [ todos, dispatch] = useReducer( todoReducer, [], init ); //[] Es el initialState=[]

    // todosCount
    const todosCount = todos.length;
    
    // todosPendignCount
    const todosPendingCount = todos.filter( todo => !todo.done).length ;
    
    // Cuando my todos cambia deseo realizar un efecto secundario usu useEffect
    useEffect(() => {
        // añadir al localStorage
        localStorage.setItem( 'todos', JSON.stringify( todos ) );
    }, [todos])
    
    //añadir an new todo
    const handleNewTodo = ( todo ) => {
        
        const action = {
            type: '[TODO] Add todo',
            payload: todo,
        }
        dispatch(action);
    }

    // Delete todo
    const handleDeleteTodo = ( id ) => {
        
        dispatch({
            type: '[TODO] Delete todo',
            payload: id, 
        })
    }

    // Subrayar itemTodo
    const handleToggleTodo = ( id ) => {
        
        dispatch({
            type: '[TODO] Toggle todo',
            payload: id,

        })
    }
    

    return{
        ...todos,
        todos,
        todosCount,
        todosPendingCount,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    }

}




