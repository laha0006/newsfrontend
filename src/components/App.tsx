import '../App.css'
// import NewsCard from "./NewsCard.tsx";
import NewsCardFlexContainer, {News} from "./NewsCardFlexContainer.tsx";
import {ThemeProvider} from "@/components/theme-provider.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import {Input} from "@/components/ui/input.tsx";
import {useEffect, useState} from "react";


function App() {

    const [isFetching, setIsFetching] = useState(true)
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
                setIsFetching(false);
                console.log(data[0]);
            })
    }, []);


    const handleInputChange = (event) => {
        const value : string = event.target.value;
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
            <div className="">
                <h1 className="text-8xl font-extralight font-news">
                    Kort Fortalt
                </h1>
                <Separator decorative={true}/>
                <div className="mt-5">
                    <Input className="text-center" placeholder="søg" onChange={handleInputChange}/>
                    <NewsCardFlexContainer newsList={filteredNewsList}/>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default App
