const Contenedor = ({ className, children }) => {
    return (
        <div
            className={` 
            w-[400px]
            h-[520px]
            rounded-lg
            p-[16px] 
            shadow
            mb-5
            ${className}`}
        >
            {children}
        </div>
    )
}

export default Contenedor