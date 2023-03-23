import React, {ReactElement} from "react";
import Image from "next/image";
import NavLink from './NavLink';

export interface EntryProps {

    name: string;
    logo: string;
    link: string;
    description: string;
}

export default function Entry({name, logo, link, description} : EntryProps): ReactElement {

    return (
        <div className="text-center text-primary m-2 p-2 md:mb-5 md:p-5 border border-primary rounded-lg bg-secondary bg-opacity-40 shadow-lg">

            <Image src={`/entries/${logo}`} className="w-48 h-48 m-auto glowyimg" width="192px" height="192px" alt={name}/>

            <div className="text-center">
                <h3><NavLink title={name} location={link} inline={true}/></h3>
                <p>{description}</p>
            </div>
        </div>
    );
}