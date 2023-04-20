import React from "react";
import { Link } from "react-router-dom";

interface Props {
  logo: {
    imgSrc: string,
    alt: string
  },

}


const Header: React.FC<Props> = ({ logo }) => {
  return (
    <header className='bg-blue-500 text-white px-4 flex justify-between'>
      <Link to='/'>
        <img style={{ width: '100px' }} src={ logo.imgSrc }  alt={ logo.alt } />
      </Link>
      <nav className='flex items-center'>
        <ul className='flex gap-6 justify-between'>
          <li>
            <Link to='/' className='hover:text-blue-200'>Start now</Link>
          </li>
          <li>
            <Link to='/' className='hover:text-blue-200'>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;