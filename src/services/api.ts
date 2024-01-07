export const api ={
    GET_ALL_GAMES:"https://sujeitoprogramador.com/next-api/?api=games",
    GET_GAME_BY_ID:(id:string)=>`https://sujeitoprogramador.com/next-api/?api=game&id=${id}`,
    FIND_GAME_BY_NAME:(name:string)=>` https://sujeitoprogramador.com/next-api/?api=game&title=${name}`,
    GENERATE_RANDOM_GAME:"https://sujeitoprogramador.com/next-api/?api=game_day"
    
}