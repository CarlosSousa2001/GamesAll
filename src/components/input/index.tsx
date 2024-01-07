"use client"

import { ChangeEvent, FormEvent, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/navigation";

const Input = () => {

    const router = useRouter();

    const [input, setInput] = useState("");

    const handleSearch = (e:FormEvent) =>{
        e.preventDefault()

        if(input === "") return;

        router.push(`/game/search/${input}`)

    }

    return (
        <form onSubmit={handleSearch} className={`w-full bg-slate-200 my-5 flex gap-2 items-start justify-between rounded-lg p-2`}>
            <input
            className={`bg-slate-200 outline-none w-11/12`} 
            type="text"
            placeholder="Procurando um jogo ?..."
            value={input}
            onChange={(e:ChangeEvent<HTMLInputElement>)=> setInput(e.target.value)}
            />
            <button type="submit">
                <FiSearch size={24} color="#EA580C"/>
            </button>
        </form>
    );
}
export default Input;