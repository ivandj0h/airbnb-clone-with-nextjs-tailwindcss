import LogoIcon from '@/ui/logo-icon';
import GlobeIcon from '@/ui/globe-icon';
import MenuIcon from '@/ui/menu-icon';
import UserIcon from '@/ui/user-icon';
import MainMenu from '@/features/main-menu';
import useScroll from '@/hooks/use-scroll';

export default function Header({}) {
  const scrolled = useScroll();

  return (
    <header
      className={`${
        scrolled
          ? 'bg-white text-gray-800 '
          : 'bg-transparent text-white'
      } top-0 right-0 left-0 fixed grid grid-cols-3 pl-20 pr-20 py-6 z-50`}
    >
      {/* left side */}
      <div className='relative cursor-pointer text-red-500'>
        <LogoIcon />
      </div>
      {/* center side */}
      <div className='w-full'>
        <MainMenu scrolled={scrolled} />
      </div>
      {/* right side */}
      <div className='flex items-center justify-end space-x-4'>
        <p className=''>Become a host</p>
        <GlobeIcon />
        {/* main navigation menu */}
        <div className='flex items-center border rounded-full space-x-2 p-2'>
          <MenuIcon />
          <UserIcon />
        </div>
      </div>
    </header>
  );
}
