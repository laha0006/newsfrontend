import {News} from "./NewsCardFlexContainer.tsx";
import {Card, CardContent, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import {Separator} from "@/components/ui/separator.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import {Info, Link} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";


export default function NewsCard({news}: { news: News }) {
    const {id, url, bias, title, source,bulletPoints} = news;
    // const {id, title, source, url, timestamp, bias, bulletPoints} = news;

    return (
        <Card className="max-w-80 pb-0">
            <CardHeader className="py-2">
                <CardTitle className="mb-2">{title}</CardTitle>
                <Separator/>
                <div className="flex justify-between">
                    <Badge className="w-fill h-8" variant="outline">{source === "DR" ? "DR" : "Politiken"}</Badge>
                    <Badge className="h-8" variant="outline">
                        <a href={url} target="_blank">
                            <Button className="text-xs px-0" variant="link">
                                <Link className="px-0 mx-0"/>Gå til kilde
                            </Button>
                        </a>
                    </Badge>

                </div>
            </CardHeader>
            <CardContent className="">
                {bulletPoints.map(item => (
                    <p key={id} className="border rounded my-1 p-2">{item.bulletPoint}</p>
                ))}
            <Separator className="mt-3" />
            </CardContent>
            <CardFooter className="justify-center">
                <div className="mt-0 top-0">
                    <div className="flex justify-center items-center">
                        <p className="">Bias</p>
                         <Info className="px-1"/>
                    </div>
                    <div className="border rounded">
                        {bias}
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
}