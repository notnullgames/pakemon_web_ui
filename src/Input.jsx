export default function Input ({ name, onChange, value, label, ...props }) {
  return (
    <div className='relative mb-4'>
      <label htmlFor={name} className='leading-7 text-sm text-gray-600'>{label}</label>
      <input value={value} onChange={e => onChange(e.target.value)} type='text' id={name} name={name} className='w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out' {...props} />
    </div>
  )
}
