import {useState, useEffect} from 'react'

export const useFetch = (url) => {
    const [api_data, setData] = useState({data: null})

    useEffect( () => {
       setData({data: null})
       fetch(url)
       .then(x => x.json())
       .then(y => {
           setData({data: y})
       }) 
    }, [url, setData])


    return api_data
}