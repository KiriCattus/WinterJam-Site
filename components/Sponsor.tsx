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
        <div className="p-2 m-2 text-center border rounded-lg shadow-lg text-primary md:mb-5 md:p-5 border-primary bg-secondary bg-opacity-40">

            <Image src={`/sponsors/${logo}`} className="w-48 h-48 m-auto glowyimg" width={192} height={192} alt={name}/>

            <div className="text-center">
                <h3><NavLink title={name} location={link} inline={true}/></h3>
                <p>{description}</p>
            </div>
        </div>
    );
}