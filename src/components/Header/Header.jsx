import React  from 'react';
import HeroImage from './HeroImage/HeroImage';
import Navbar from './Navbar/Navbar';

const Header = ({setPage}) => {

  return (
      <header>
          <Navbar setPage={setPage}/>
          <HeroImage/>
      </header>
  );
};

export default Header;