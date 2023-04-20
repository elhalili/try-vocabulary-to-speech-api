import React from "react";
import {Link} from "react-router-dom";

interface Props {
  title: string,
  paragraph: string
}


const Home: React.FC<Props> = ({ title, paragraph }) => {
  return (
    <>
      <main className='mt-6 text-white px-4 flex flex-col items-center'>
        <h1 className='text-2xl text-orange-700 font-medium'>
          { title }
        </h1>
        <p className='mt-10 text-black'>
          { paragraph }
        </p>
        <Link to='convert' className='mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Convert to
        </Link>
      </main>
    </>
  );
}

export default Home;