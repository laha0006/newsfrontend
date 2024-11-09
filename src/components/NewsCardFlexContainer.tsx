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

export default function NewsCardFlexContainer({newsList} : {newsList: News[]}) {



    return <>
        <div className="flex flex-wrap gap-4 justify-center p-1">
            {newsList.map(item => (
                    <NewsCard key={item.id} news={item} />
                ))}
        </div>
    </>;
}