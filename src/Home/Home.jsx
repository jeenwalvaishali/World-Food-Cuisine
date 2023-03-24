import React, { useState }  from "react";
import Main from "../components/Main/Main";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Home = () => {
  const defaultPage = document.location.hash.replace('#', '');
  const[page, setPage] = useState(defaultPage || 'About');

  return (
    <>
      <Header setPage={setPage}/>
      <Main page={page}/>   
      <Footer setPage={setPage}/>
    </>
  );
};

export default Home;
