import { useEffect, useState } from "react"

export const useGetRequest = (request, effect) => {
    const [data, setData] = useState([]);

    const getData = async () => {
        try{
            const results = await request();
            setData(results)
        }
        catch(e){
            // placeholder
        }
    }

    useEffect(()=>{
        getData()
    },[effect])

    return {
        data
    }
}