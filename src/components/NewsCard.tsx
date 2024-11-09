import {News} from "./NewsCardFlexContainer.tsx";
import {Card, CardContent, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import {Separator} from "@/components/ui/separator.tsx";
import {Badge} from "@/components/ui/badge.tsx";


export default function NewsCard({news}: { news: News }) {
    const {id, title, source,bulletPoints} = news;
    // const {id, title, source, url, timestamp, bias, bulletPoints} = news;

    return (
        <Card className="max-w-80">
            <CardHeader>
                <CardTitle className="mb-2">{title}</CardTitle>
                <Separator/>
            </CardHeader>

            <CardContent>

                {bulletPoints.map(item => (
                    <p key={item.id} className="border rounded my-1 p-2">{item.bulletPoint}</p>
                ) )}
            </CardContent>
            <CardFooter>
                <Badge variant="outline">{source === "DR" ? "DR" : "Politiken"}</Badge>
            </CardFooter>
        </Card>
    );
}