import React, {ReactElement} from "react";

interface Author  { name: string, url: string }

export interface ModProps {

    name: string;
    author: Author[]
    homepage: string;
    logo: string;
    downloads: string;
    summary: string;
    modLoaders: string[];
}

export default function ModCard({modData} : {modData:ModProps}): ReactElement {

    function truncate(str: string, max = 100): string {

        return str.length > max ? `${str.substring(0, max)}...` : str;
    }

    function Author({author, index}: {author: Author, index: number}): ReactElement {
        return <>
            <a href={author.url} className="hover:text-important font-bold text-base sm:text-xl">{author.name}</a>
            {index != modData.author.length - 1 ? ', ' : ''}
        </>
    }

    return (
        <div className={'rounded-lg flex gap-x-4 p-2 border-2 bg-accent bg-opacity-20 shadow-lg ' + modData.modLoaders.join(' ').toLowerCase()}>

            <div className={`flex-none w-32 h-32 my-auto`}>
                <img src={modData.logo} width={128} height={128} className="bg-[#1F1F1F] border border-accent" alt={`${modData.name} logo`}/>
            </div>

            <div className="flex-grow">
                <a className="text-xl sm:text-2xl lg:text-3xl hover:text-important font-medium" href={modData.homepage} target={"_blank"} rel="noreferrer">{truncate(modData.name, 25)}</a>
                <p className="text-lg lg:text-xl">By <div className="inline text-accent2">{modData.author.map((val: Author, index) => <Author author={val} index={index} key={val.name}/>)}</div></p>
                <p className="text-sm sm:text-base lg:text-lg">{truncate(modData.summary)}</p>
            </div>
        </div>
    );
}