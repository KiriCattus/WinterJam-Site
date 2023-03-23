import type { NextPage } from "next";
import { Layout } from "../components/";
import Entry from "../components/Entry";

const Entries: NextPage = () => {
    return (
        <Layout title="Entries" url="/entries">
            <h1>Welcome to WinterJam!</h1>
            <p className="text-xl md:text-2xl text-centered mb-10">
                These are the entries from all WinterJam&apos;s past, if you have submitted an
                entry previously and would like me to update the information on this page,
                please contact KiriCattus via Discord to have it resolved.
            </p>
            <h2>WinterJam 2022 Entries</h2>
            <div id='sponsors'>
                <div className='grid sm:grid-cols-2 gap-y-5 sm:gap-x-6 mt-6 p-4 text-lg'>
                <Entry name='Stay Warm Together' logo='stay-warm-together.png' link='https://www.curseforge.com/minecraft/mc-mods/stay-warm-together' description='undefined'/>
                <Entry name='Hibernal Herbs [Fabric/Forge]' logo='hibernal-herbs.png' link='https://www.curseforge.com/minecraft/mc-mods/hibernal-herbs' description='undefined'/>
                <Entry name='Sharing is Caring' logo='sharing-is-caring.png' link='https://www.curseforge.com/minecraft/mc-mods/sharing-is-caring' description='undefined'/>
                <Entry name='Tis The Season' logo='tis-the-season.png' link='https://www.curseforge.com/minecraft/mc-mods/tis-the-season' description='undefined'/>
                <Entry name='Naughty List' logo='naughty-list.png' link='https://www.curseforge.com/minecraft/mc-mods/naughty-list' description='undefined'/>
                <Entry name='Snowballing' logo='snowballing.png' link='https://www.curseforge.com/minecraft/mc-mods/snowballing' description='undefined'/>
                </div>
            </div>
            <h2>WinterJam 2021 Entries</h2>
            <div id='sponsors'>
                <div className='grid sm:grid-cols-2 gap-y-5 sm:gap-x-6 mt-6 p-4 text-lg'>
                </div>
            </div>
        </Layout>
    );
};

export default Entries;