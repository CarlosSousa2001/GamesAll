import { GameProps } from "@/utils/types/game";
import Link from "next/link";
import Image from "next/image";
import {BiRightArrowCircle} from 'react-icons/bi'

const GameCard = ({item}:{item:GameProps}) => {
    return (
        <Link href={`/game/${item.id}`}>
        <section className={`w-full bg-slate-200 rounded-lg p-4 mb-5`}>
            <div className={`relative w-full h-56 hover:scale-105 transition-all duration-300`}>
                <Image
                className="rounded-lg object-cover"
                src={item.image_url}
                alt={item.title}
                fill={true}
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                />
            </div>

            <div className={`flex items-center justify-between mt-4`}>
                <p className={`text-sm font-bold px-2 text-black text-ellipsis truncate whitespace-nowrap overflow-hidden`}>{item.title}</p>
                <BiRightArrowCircle size={24} color="#000"/>
            </div>
        </section>
        </Link>
    );
}

export default GameCard;