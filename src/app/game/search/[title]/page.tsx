import Container from "@/components/Container";
import GameCard from "@/components/gameCard";
import Input from "@/components/input";
import { api } from "@/services/api";
import { GameProps } from "@/utils/types/game";

async function getData(title:string) {
    try {
        const decodeTitle = decodeURI(title);

        const res = await fetch(api.FIND_GAME_BY_NAME(decodeTitle))

        return res.json();

    } catch (error) {
        return null;
    }
}
const Search = async ({params:{title}}:{params:{title:string}}) => {

    const games:GameProps[] = await getData(title);

    return (
        <main className={`w-full text-black`}>
            <Container>
                <Input/>
                <h1 className={`font-bold text-xl mt-8 mb-5`}>Veja o que encontramos em nossa base</h1>

                {!games && (
                    <p>Esse jogo não foi encontrado!...</p>
                )}

                <section className={`grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}>
                    {games?.map((item)=>{
                        return (
                        <GameCard key={item.id} item={item}/>
                        )
                    })}
                </section>
            </Container>
        </main>
    );
}

export default Search;