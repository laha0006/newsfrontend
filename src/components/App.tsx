import '../App.css'
// import NewsCard from "./NewsCard.tsx";
import NewsCardFlexContainer, {News} from "./NewsCardFlexContainer.tsx";
import {ThemeProvider} from "@/components/theme-provider.tsx";
import {Input} from "@/components/ui/input.tsx";
import React, {useEffect, useState} from "react";


function App() {

    // const [isFetching, setIsFetching] = useState(true)
    const [newsList, setNewsList] = useState<News[]>([])
    const [filteredNewsList, setFilteredNewsLIst] = useState<News[]>([])
    // const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch("https://tolana.dev/api/v1/news")
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setNewsList(data);
                setFilteredNewsLIst(data)
                // setIsFetching(false);
                console.log(data[0]);
            })
    }, []);


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value : string = e.target.value;
        console.log("value: ", value)
        console.log("searchTerm: ", )
        console.log("newsList length: ", newsList.length)
        if(value.length === 0) {
            setFilteredNewsLIst(newsList)
            return
        }
        setFilteredNewsLIst(newsList.filter(item => {
            return item.title.includes(value)
        }))
    };


    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="top-0 mt-0">
                <h1 className="absolute top-20 right-1/2 translate-x-1/2 text-8xl font-extralight font-news opacity-75">
                    Kort Fortalt
                </h1>
                <img className="w-full h-[450px] rounded top-0 opacity-15 theBackground"
                     alt="background image showcasing a typewriter, and news paper, in a grey-tone minimalistic style"
                     src="/background-img.jpg">
                </img>

                <div className="mt-2">
                    <Input className="text-center" placeholder="søg" onChange={handleInputChange}/>
                    <NewsCardFlexContainer newsList={filteredNewsList}/>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default App
