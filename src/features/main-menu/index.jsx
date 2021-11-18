import ScrolledMenu from './scrolled-menu';
import SearchMenu from './search-menu';

export default function ListingSearch({ scrolled = false }) {
  //  className={`${scrolled ? 'bg-white' : ''}`}

  return <div>{scrolled ? <ScrolledMenu /> : <SearchMenu />}</div>;
}
