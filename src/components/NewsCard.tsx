import {News} from "./NewsCardFlexContainer.tsx";
import {useState} from "react";


export default function NewsCard({news}: { news: News }) {
    const {id, title, source, url, timestamp, bias, bulletPoints} = news;
    const [isExpanded, setIsExpanded] = useState(false); // State to track if the card is expanded

    // Toggle the expansion state when the card is clicked
    const handleCardClick = () => {
        setIsExpanded((prevState) => !prevState);
    };
    return (
        <div onClick={handleCardClick} className="flex-auto max-w-[300px] p-2 bg-gray-900" key={news.id}>
            <div className="text-sm font-news">{title}</div>
            {isExpanded ? (
                <ul>
                    {bulletPoints.map(b => (
                        <p className="py-1"> • {b.bulletPoint} </p>
                    ) )}
                </ul>
            ) : ""}
        </div>
    );
}