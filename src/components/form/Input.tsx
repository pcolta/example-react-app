import React from "react";

type InputProps = {
    name: string,
    label: string,
    type?: string,
    required?: boolean
}

const Input = ({name, label, type, required}:InputProps) => {
    return (
        <div className="form__group">
            <input name={name} className="form__input" required={required} type={type}/>
            <label className="form__label">{label}</label>
        </div>
    )
}

export default Input;
