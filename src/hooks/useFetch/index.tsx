import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = <T,>(endpoint: string) => {
    const [data, setData] = useState<T[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await axios.get(endpoint);
            setData(response.data.results); 
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [endpoint]);

    return { data, loading };
};

export default useFetch;


// import axios from "axios";
// import { useEffect, useState } from "react";

// const useFetch = <T>(endpoint: string) => {
//     const [data, setData] = useState<T[]>([]); 
//     const [loading, setLoading] = useState(false);

//     const fetchData = async () => {
//         try {
//             setLoading(true);
//             const response = await axios.get(endpoint);
//             setData(response.data.results); 
//         } catch (error) {
//             console.log('error', error);
//         } finally {
//             setLoading(false); 
//         }
//     };

//     useEffect(() => {
//         fetchData();
//     }, [endpoint]);

//     return { data, loading };
// };

// export default useFetch;


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