'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className=' flex flex-1 w-full h-svh mx-auto pt-10 items-center justify-center bg-red-300'>
      {loading ? (
        <>
          <svg
            className='animate-spin h-24 w-24 rounded-full border-t-blue-600 border-8 border-dotted '
            viewBox='0 0 24 24'
          ></svg>
        </>
      ) : (
        <>
          <h1 className=' -lg text-3xl font-bold text-white'>
            Clases de <span className='text-violet-950'>Matematicas</span>{' '}
            gratis
          </h1>
        </>
      )}
    </div>
  );
}
