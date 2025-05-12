import { useState } from 'react';

function App() {
  return (
    <div className='relative p-4 sm:p-10 md:p-20 w-full min-h-screen flex justify-center items-center bg-gradient-to-r from-amber-500 to-amber-500'>
      <h5 className='absolute bottom-0 right-0 m-4 text-xs sm:text-sm'>TODOS OS DIREITOS RESERVADOS</h5>


      <div className='w-full max-w-5xl h-auto z-20 bg-white p-4 sm:p-8 relative shadow-2xl flex flex-col md:flex-row gap-4 overflow-hidden rounded-md'>

        {/* Lado Esquerdo */}
        <div className='w-full md:w-1/2 bg-amber-500 relative p-4 gap-4 flex flex-col justify-center items-center'>
          <div className='text-center'>
            <h2 className='text-white text-2xl sm:text-3xl font-semibold'>Olá.</h2>
            <h1 className='text-white text-3xl sm:text-4xl font-bold'>Seja Bem-vindo!</h1>
          </div>
          <div className='rounded-full w-24 sm:w-32 h-24 sm:h-32 overflow-hidden p-4 bg-white/80'>
            <img className='w-full h-full object-contain' src="https://static.vecteezy.com/system/resources/thumbnails/059/524/318/small/caduceus-medical-symbol-elegant-line-art-illustration-png.png" alt="logo" />
          </div>
          <div className='rounded-full w-20 h-20 sm:w-32 sm:h-32 bg-white/80 absolute -bottom-10 -left-10 hidden md:block'></div>
        </div>

        {/* Lado Direito */}
        <div className='w-full md:w-1/2 bg-white relative p-4 gap-4 flex flex-col justify-center items-center'>
          <h5 className='text-2xl sm:text-3xl my-4 font-bold text-center'>Crie sua conta</h5>
          <div className='flex flex-col w-full max-w-sm'>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              placeholder='Digite seu email'
              className='mt-2 border border-black rounded-md shadow bg-slate-200 px-4 py-2'
            />
          </div>
          <div className='flex flex-col w-full max-w-sm'>
            <label htmlFor="senha">Senha:</label>
            <input
              type="password"
              placeholder='Digite sua senha'
              className='mt-2 border border-black rounded-md shadow bg-slate-200 px-4 py-2'
            />
            <button className='w-full px-4 py-2 bg-amber-500 hover:bg-amber-600 rounded-md text-white mt-4'>
              REGISTRAR
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
