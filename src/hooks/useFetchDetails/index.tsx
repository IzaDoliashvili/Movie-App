import axios from "axios";
import { useEffect, useState } from "react";

const useFetchDetails = <T>(endpoint: string) => {
    const [data, setData] = useState<T | null>(null); // Use T as the type for data
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await axios.get(endpoint);
            setData(response.data); // Assuming the response data matches type T
        } catch (error) {
            console.log('error', error);
        } finally {
            setLoading(false); // Make sure loading is false in both success and error cases
        }
    };

    useEffect(() => {
        fetchData();
    }, [endpoint]);

    return { data, loading };
};

export default useFetchDetails;


// import axios from "axios"
// import { useEffect, useState } from "react"

// const useFetchDetails = (endpoint:String)=>{
//     const [data,setData] = useState()
//     const [loading,setLoading] = useState(false)

//     const fetchData = async()=>{
//         try {
//             setLoading(true)
//             const response = await axios.get(endpoint)
//             setLoading(false)
//             setData(response.data)
//         } catch (error) {
//             console.log('error',error)
//        }
//     }

//     useEffect(()=>{
//         fetchData()
//     },[endpoint])

//     return { data , loading}
// }

// export default useFetchDetails
