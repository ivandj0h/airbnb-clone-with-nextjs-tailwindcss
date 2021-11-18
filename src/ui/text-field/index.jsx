export default function TextField({
  type = 'text',
  placeholder,
  value,
  onChange = () => {},
}) {
  return (
    <input
      className='flex-grow pl-5 bg-transparent outline-none text-gray-500 text-sm placeholder-gray-400'
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
