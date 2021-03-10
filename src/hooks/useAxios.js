import React, {useState, useEffect} from 'react';
import uuid from "uuid";
import axios from 'axios'

const useAxios = (url) => {
    const [response, setResponse] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(url);
            const json = await res.json;
            setResponse(json);
        }
        fetchData();
    }, [url])
    return [...response]
}

export default useAxios;