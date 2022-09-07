

export const todoReducer = ( initialState=[] , action ) => {

    switch ( action.type ) {
        case '[TODO] Add todo':
            // throw new Error( 'Action.type = ABC no esta implementada');            
            return [...initialState, action.payload ];
    
        case '[TODO] Delete todo':
        
            return initialState.filter( todo => todo.id !== action.payload ); //busca a id and return a array sin ese objetc
        
        case '[TODO] Toggle todo':
            return initialState.map( todo => {
                
                if( todo.id === action.payload ){
                    return {
                        ...todo, 
                        done: !todo.done,
                    }
                }

                return todo;
            })

        default:
            return initialState;
    }


};