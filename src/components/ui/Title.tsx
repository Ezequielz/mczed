import { titleFont } from "@/components/config/fonts";

interface Props {
    title: string;
}

export const Title = ({ title }: Props) => {
    return (
        <h1 className={`
    ${titleFont.className} 
     text-4xl 
    `}>{title}</h1>
    )
}