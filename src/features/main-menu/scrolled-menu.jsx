import SearchIcon from '@/ui/search-icon';

export default function ScrolledMenu({}) {
  return (
    <div className='w-full border rounded-full flex items-center px-2 py-2 shadow'>
      <div className='flex-grow mx-5 text-sm'>Start your search</div>
      <div className='text-white bg-red-500 rounded-full p-2'>
        <SearchIcon />
      </div>
    </div>
  );
}
