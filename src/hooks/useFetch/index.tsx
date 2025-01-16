import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = <T>(endpoint: string) => {
    const [data, setData] = useState<T[]>([]); // Use generic type T
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await axios.get(endpoint);
            setData(response.data.results); // Assuming response.data.results is the expected format
        } catch (error) {
            console.log('error', error);
        } finally {
            setLoading(false); // Ensure loading is set to false after fetch
        }
    };

    useEffect(() => {
        fetchData();
    }, [endpoint]);

    return { data, loading };
};

export default useFetch;


// import axios from "axios"
// import { useEffect, useState } from "react"

// const useFetch = (endpoint: unknown)=>{
//     const [data,setData] = useState([])
//     const [loading,setLoading] = useState(false)

//     const fetchData = async()=>{
//         try {
//             setLoading(true)
//             const response = await axios.get(endpoint)
//             setLoading(false)
//             setData(response.data.results)
//         } catch (error) {
//             console.log('error',error)
//        }
//     }

//     useEffect(()=>{
//         fetchData()
//     },[endpoint])

//     return { data , loading}
// }

// export default useFetch