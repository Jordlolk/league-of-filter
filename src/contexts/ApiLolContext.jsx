import {createContext, useEffect , useState} from "react";

export const ApiLolContext = createContext([])
export const ApiLolProvider = ({children}) => {
    const url = 'https://ddragon.leagueoflegends.com/cdn/13.16.1/data/pt_BR/champion.json';
    const [lolApiResponse , setLolApiResponse] = useState([]);

    async function search(){
        try{
            const response = await fetch(url)
                if(!response.ok){
                    throw new Error("Error status" , data.status)
                }
            const data = await response.json()
            const pureDataChamps =  Object.values(data.data)
            return pureDataChamps;

            } catch(error){
                throw error
        }
    }
    useEffect(()=>{
        search()
        .then((response) => {
            setLolApiResponse(response)
        })
        .catch((error) => {
            console.log(error);
        })
    } , []);

    return (
        <ApiLolContext.Provider value={lolApiResponse}>
            {children}
        </ApiLolContext.Provider>
    )
}