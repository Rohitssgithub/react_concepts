import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Debouncing = () => {

    let [data, setData] = useState([]);
    let [search, setSearch] = useState("");

    let getData = async (p) => {
        let res = await axios.get(`https://dummyjson.com/products/search?q=${p}`)
        setData(res?.data?.products)
    }
    useEffect(() => {
        let deb = setTimeout(() => {
            getData(search)
        }, 1000);
        return () => {
            clearTimeout(deb)
        }
    }, [search])

    console.log('search', search)
    return (
        <>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
            {
                data.map((ele) => {
                    return (
                        <p>{ele.title}</p>
                    )
                })
            }
        </>
    )
}

export default Debouncing