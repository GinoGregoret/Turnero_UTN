const Input = ({ name, onChange, value, type, placeholder,min,max,step}) => {
    return (
        <div
            className="flex flex-col gap-2"
        >
            <label htmlFor={name}>{name}:</label>
            <input

                className='p-1 border-[1px] border-slate-400 rounded shadow bg-slate-200'
                name={name}
                id={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                min={min}
                max={max}
                step={step}

            />
        </div>
    )
}

export default Input