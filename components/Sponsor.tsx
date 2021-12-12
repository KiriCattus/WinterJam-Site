import React, {ReactElement} from "react";
import Image from "next/image";
import NavLink from './NavLink';

export interface SponsorProps {

    name: string;
    logo: string;
    link: string;
    description: string;
}

export default function Sponsor({name, logo, link, description} : SponsorProps): ReactElement {

    return (
        <div className="text-center text-white m-2 p-2 md:mb-5 md:p-5 border border-white rounded-lg bg-blue-500 bg-opacity-20 shadow-lg">

            <Image src={`/sponsors/${logo}`} className="w-48 h-48 m-auto glowyimg" width="192px" height="192px" alt={name}/>

            <div className="text-center">
                <h3><NavLink title={name} location={link} inline={true}/></h3>
                <p>{description}</p>
            </div>
        </div>
    );
}