import {useEffect, useState} from "react";
import NewsCard from "./NewsCard.tsx";

export interface BulletPoint {
    id: number;
    bulletPoint: string;

}

export interface News {
  id: number;
  title: string;
  source: string;
  url: string;
  timestamp: number;
  bias: string;
  bulletPoints: BulletPoint[];


}

export default function NewsCardFlexContainer() {
    const [isFetching, setIsFetching] = useState(true)
    const [newsList,setNewsList] = useState<News[]>([])
    useEffect(() => {
        fetch("http://localhost:8080/api/v1/news")
            .then((res) => {
                return res.json()
            })
            .then((data) => {setNewsList(data); setIsFetching(false); console.log(data[0]); })
    }, []);


    return <>
        <div className="flex flex-wrap gap-4 justify-center p-1">
            {isFetching ? <p className="text-4xl font-bold">Laoding</p> :
                newsList.map(item => (
                    <NewsCard key={item.id} news={item} />
                )
            )}
        </div>
    </>;
}