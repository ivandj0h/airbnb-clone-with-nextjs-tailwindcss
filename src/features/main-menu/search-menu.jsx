import { useState } from 'react';

function TypeItem({
  children,
  type,
  selectedType,
  onClick = () => {},
}) {
  return (
    <li
      className={`${
        type === selectedType ? 'border-b-2 opacity-1' : ''
      } pb-2 `}
      onClick={() => onClick(type)}
    >
      <span>{children}</span>
    </li>
  );
}

export default function SearchMenu({}) {
  const [selectedType, setSelectedType] = useState('places');
  return (
    <div className='flex justify-center w-full'>
      <ul className='flex space-x-6 text-sm font-thin '>
        <TypeItem
          onClick={setSelectedType}
          type={'places'}
          selectedType={selectedType}
        >
          Places to stay
        </TypeItem>
        <TypeItem
          onClick={setSelectedType}
          type={'experiences'}
          selectedType={selectedType}
        >
          Experiences
        </TypeItem>
        <TypeItem
          onClick={setSelectedType}
          type={'online-experiences'}
          selectedType={selectedType}
        >
          Online Experiences
        </TypeItem>
      </ul>
    </div>
  );
}
