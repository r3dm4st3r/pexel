import { Icon } from '@iconify/react';
import useGlobalState from "../../hooks/useGlobalState";
import {useLayoutEffect, useRef, useState} from "react";
import axios from "../../api/axios";
import {pexel} from "../../helper/pexel";
import {useNavigate} from "react-router-dom";

const Search = () => {
    const navigate = useNavigate();
    const {globalData, setGlobalData} = useGlobalState();
    const [search, setSearch] = useState({
        text: ''
    });
    const searchInputBoxGlobal = useRef(null);

    const handleSearchInput = (e) => {
        e.preventDefault();
        setSearch({
            text: searchInputBoxGlobal.current.value
        })
    }

    useLayoutEffect(()=> {
        setGlobalData({
            ...globalData,
            search: {
                ...globalData.search,
                text: search.text
            }
        })
        // eslint-disable-next-line
    }, [search])

    const searchInPexel = (e) => {
        e.preventDefault();
        axios.get(`${pexel.BASE}/search?query=${search.text}&per_page=50`)
            .then((response)=> {
                // console.log(response);
                setGlobalData((prev) => {
                    return {
                        ...prev,
                        search: {
                            ...globalData.search,
                            results: response?.data
                        }
                    }
                })
            })

        setTimeout(function () {
            navigate('/search', {replace: true})
        }, 100)
    }




    return(
        <div className="relative group">
            <div className="absolute text-gray-300 left-[10px] top-[12px] z-[1]">
                <Icon className="w-8 h-8" icon="ei:search" />
            </div>
            <form onSubmit={searchInPexel}>
                <input
                    type="text"
                    className="bg-transparent pl-12 pr-6 py-4 rounded-full ring-0 outline-0 border-2 border-white shadow-lg text-white drop-shadow-md block w-full"
                    placeholder="Search in pexels"
                    ref={searchInputBoxGlobal}
                    onChange={handleSearchInput}
                />
            </form>
        </div>
    )
}
export default Search;