/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./NewsList.css";

interface Props {
    news: {
        href?: string;
        alt: string;
        image: string;
    }[];
}

export const NewsList: React.FC<Props> = ({ news }) => {

    let cappedClass = news.length > 2? "capped-width": "";

    return (
        <div className={"flex news-images " + cappedClass}>
            {news.map((item) => (
                <NewsClip key={item.href} href={item.href? item.href : "" } alt={item.alt} image={item.image} />
            ))}
        </div>
    );
};

interface NewsClipProp {
    href: string;
    alt: string;
    image: string;
}

const NewsClip: React.FC<NewsClipProp> = ({ href, alt, image}) => {
    return (
    <>
        {href != "" &&
            <a href={href}><img alt={alt} src={image} /></a>    
        }
        {href == "" &&
            <img alt={alt} src={image} />
        }
     </>
    );
};
