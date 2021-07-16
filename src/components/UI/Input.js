import React from 'react';

const Input = (props) => {
    return (
        <input
            type={props.type}
            id={props.id}
            placeholder={props.placeholder}
            value={props.value}
            name={props.name}
            onChange={props.onChange}
            multiple={props.multiple}
            accept={props.accept}
        >
        </input>
    )
};

 export const Textarea = (props) => {
    return (
        <textarea
            id={props.id} 
            type={props.type}
            value={props.value}
            name={props.name}
            rows={props.rows}
            placeholder={props.placeholder}
            onChange={props.onChange}
        >
        </textarea>
    )
}

export default Input;
