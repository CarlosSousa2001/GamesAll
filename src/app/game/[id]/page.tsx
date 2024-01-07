import Image from "next/image";
import { api } from "@/services/api";
import { GameProps } from "@/utils/types/game";
import { redirect } from "next/navigation";
import Container from "@/components/Container";
import Label from "./components/label";
import GameCard from "@/components/gameCard";
import { Metadata } from "next";

interface PropsParams {
    params:{
        id:string
    }
}


async function getData(id:string) {
    try {
        const res = await fetch(api.GET_GAME_BY_ID(id), {next:{revalidate: 60 }})

        return res.json();

    } catch (error) {
        return null;
    }
}

async function getRandomGame() {
    try {
        const res = await fetch(api.GENERATE_RANDOM_GAME, {cache: "no-store"})

        return res.json();

    } catch (error) {
        return null;
    }
}

const Details = async ({params:{id}}:{params:{id:string}}) => {

    const data:GameProps = await getData(id);

    const random:GameProps = await getRandomGame();


    if(!data){
        redirect("/");
    }

    return (
        <main className={`w-full text-black`}>
            <div className={`bg-black h-80 sm:h-96 w-full relative`}>
                <Image
                    className="object-cover w-full h-80 sm:h-96 opacity-75"
                    src={data.image_url}
                    alt="Imagem detalhe do jogo"
                    priority={true}
                    fill={true}
                    quality={100}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                />
            </div>

            <Container>
                <h1 className={`font-bold text-xl my-4`}>{data.title}</h1>
                <p>{data.description}</p>


                <h2 className={`font-bold text-lg mt-7 mb-2`}>Plataformas</h2>
                <div className={`flex gap-2 flex-wrap`}>
                    {data.platforms.map((item, index)=>{
                        return (
                            <Label key={index} name={item}/>
                        )
                    })}
                </div>

                <h2 className={`font-bold text-lg mt-7 mb-2`}>Categorias</h2>
                <div className={`flex gap-2 flex-wrap`}>
                    {data.categories.map((item, index)=>{
                        return (
                            <Label key={index} name={item}/>
                        )
                    })}
                </div>

                <p className={`mt-2 mb-2`}><strong>Data de lançamento </strong>{data.release}</p>

                <h2 className={`font-bold text-lg mt-7 mb-2`}>Jogo recomendado</h2>

                <div className={`flex`}>
                    <div className={`flex-grow`}>
                        <GameCard item={random}/>
                    </div>
                </div>
            </Container>
        </main>
    );
}
export default Details;