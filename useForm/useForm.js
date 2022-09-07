import { useState } from "react";

export const useForm = ( initialValue = {} ) => {

    const [ formState, setFormState ] = useState( initialValue );

    // establece valores en caja de texto and useState
    const onInputChange = ({target}) => {
        const { name, value } = target;
        // console.log({name, value});
        setFormState({ 
            ... formState,
            [name] : value
        });
    }
    // Reset
    const onResetForm = () => {
        setFormState( initialValue );
    }

    return {
        ...formState, //desustructuracion
        formState,
        onInputChange,
        onResetForm,
    }
}
