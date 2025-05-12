import { useState } from 'react'

function App() {

  return (
    <div className='relative p-20 w-full h-screen flex justify-center items-center bg-gradient-to-r bg-linear-65 from-amber-500 to-amber-500'>
      <h5 className='absolute bottom-0 right-0 m-4'>TODOS OS DIREITOS REESERVADOS</h5>
      <div className='z-10 absolute rounded-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg'>
      </div>
      <div className='w-full h-full z-20 bg-white px-4 py-4 relative shadow-2xl flex gap-4 overflow-hidden rounded-md'>
        <div className='w-1/2 bg-amber-500 absolute left-0 top-0 h-full p-4 gap-2 flex flex-col justify-center items-center '>
          <div>
            <h2 className='text-white text-start text-4xl font-semi'>Olá.</h2>
            <h1 className='text-white text-4xl text-center font-bold'>Seja Bem vindo!</h1>
          </div>
          <div className='rounded-full w-32 h-32 overflow-hidden p-4 bg-white/80'>
            <img className='w-full h-full object-contain' src="https://static.vecteezy.com/system/resources/thumbnails/059/524/318/small/caduceus-medical-symbol-elegant-line-art-illustration-png.png" alt="logo" />
          </div>
          <div className='rounded-full w-32 h-32 bg-white/80 absolute -bottom-10 -left-10 '></div>
        </div>
        <div className='w-1/2 bg-white absolute right-0 top-0 h-full p-4 gap-2 flex flex-col justify-center items-center '>
          <h5 className='text-4xl my-4 font-bold'>Crie sua conta  </h5>
          <div className='flex flex-col'>
            <label htmlFor="email">Email: </label>
            <input type="text" placeholder='digite seu email' className='mt-2 border border-2 border-black rounded-md border-none shadow bg-slate-200 px-4 px-2' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="senha">Senha: </label>
            <input type="text" placeholder='digite sua senha' className='mt-2 border border-2 border-black rounded-md border-none shadow bg-slate-200 px-4 px-2' />
            <button className='w-full px-4 py-2 bg-amber-500 hover:bg-amber-600 rounded-md text-white mt-4'>REGISTRAR</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
