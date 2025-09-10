import { Edit, Delete } from 'lucide-react'
import { formatearFecha } from '../ayuda'
const Tarjeta = ({ cita, modificar, borrar }) => {
  return (

    <div className="p-1 bg-white/50 rounded shadow flex gap-2">
      <div className='flex-1'>
        <p className="font-bold text-black/80">{cita.nombreCompleto}</p>
        <p className="text-lg font-semibold text-black/65">{formatearFecha(cita.fecha, cita.horario)}</p>
        <p className='text-sm text-black/50'>Telefono: {cita.telefono}</p>
      </div>
      <div className="flex flex-col items-end justify-center gap-1">
        <button
          onClick={() => modificar(cita.id)}
          className='p-0.5 rounded hover:bg-blue-200 cursor-pointer text-black/75'
          title="Editar">
          <Edit />
        </button>
        <button
          onClick={() => {}}
          className='p-0.5 rounded hover:bg-red-200 cursor-pointer text-black/75'
          title="Borrar">
          <Delete />
        </button>
      </div>
    </div>

  )
}
export default Tarjeta