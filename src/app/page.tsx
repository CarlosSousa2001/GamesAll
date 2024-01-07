import Container from '@/components/Container'
import Input from '@/components/input'

import Image from 'next/image'
import Link from 'next/link'

import { api } from '@/services/api'

import { GameProps } from '@/utils/types/game'

import {BsArrowRightSquare} from 'react-icons/bs'
import GameCard from '@/components/gameCard'

async function getDalyGame(){
  try {
    const res = await fetch(api.GENERATE_RANDOM_GAME, { next: { revalidate: 320 } })

    return res.json();

  } catch (error) {
    throw new Error("Falha na requisição")
  }
}

async function getAllgames() {
    try {
    const res = await fetch(api.GET_ALL_GAMES, { next: { revalidate: 320 } })

    return res.json();

  } catch (error) {
    throw new Error("Falha na requisição")
  }
  
}
export default async function Home() {

  const dailyGame:GameProps = await getDalyGame();

  const allGames:GameProps[] = await getAllgames();


  return (
    <main className={`w-full`}>
      <Container>
        <h1 className={`text-center font-bold text-xl mt-8 mb-5`}>Separamos um jogo exclusico para você</h1>
        <Link href={`/game/${dailyGame.id}`}>
          <section className={`w-full bg-black rounded-lg`}>
          <div className={`w-full max-h-96 h-96 relative rounded-lg`}>
            <div className={`absolute z-20 bottom-0 p-3 flex justify-center items-end gap-2`}>
              <p className={`font-bold text-xl text-white`}>{dailyGame.title}</p>
              <BsArrowRightSquare size={24} color="#fff"/>
            </div>
            <Image
                src={dailyGame.image_url}
                alt={dailyGame.title}
                priority
                quality={100}
                fill={true}
                className='max-h-96 object-cover rounded-lg opacity-50 hover:opacity-100 transition-all duration-300'
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
              />
          </div>
          </section>
        </Link>

        <Input/>

        <h2 className={`text-lg font-bold mt-8 mb-5`}>
          Jogos para connhecer
        </h2>

        <section className={`grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}>
          {allGames.map((item)=>{
            return (
              <GameCard key={item.id} item={item}/>
            )
          })}
        </section>

      </Container>
    </main>
  )
}
