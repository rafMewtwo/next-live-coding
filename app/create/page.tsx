'use client'
import { useRouter } from 'next/navigation'

export default function Home() {

  const router = useRouter()


  return (
    <div className='mt-4 flex flex-col gap-8 items-center'>
      <input className='border border-red-500 w-52 rounded' />
      <input className='border border-red-500 w-52 rounded' />
      <button className='bg-blue-500 text-white w-52 h-9 rounded' onClick={() => null}>Criar</button>
      <button className='bg-green-500 text-white w-52 h-9 rounded' onClick={() => router.push('/')}>Voltar</button>
    </div>
  )
}
