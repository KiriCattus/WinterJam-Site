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
                    <Entry name='Stay Warm Together' logo='https://media.forgecdn.net/avatars/thumbnails/646/367/256/256/638047508578142178.png' link='https://www.curseforge.com/minecraft/mc-mods/stay-warm-together' description='Adds cute winter-themed critters for MMD Winterjam 2022 '/>
                    <Entry name='Hibernal Herbs [Fabric/Forge]' logo='https://media.forgecdn.net/avatars/thumbnails/636/422/256/256/638039001664737637.png' link='https://www.curseforge.com/minecraft/mc-mods/hibernal-herbs' description='Hibernal Herbs celebrates the holidays with a little bit of mystic arts! Collect herbs and other ingredients to make the perfect holiday feast!'/>
                    <Entry name='Sharing is Caring' logo='https://media.forgecdn.net/avatars/thumbnails/664/330/256/256/638061304389679538.png' link='https://www.curseforge.com/minecraft/mc-mods/sharing-is-caring' description='Share gifts between you and your friends on a server!'/>
                    <Entry name='Tis The Season' logo='https://media.forgecdn.net/avatars/thumbnails/698/189/256/256/638070918846088872.png' link='https://www.curseforge.com/minecraft/mc-mods/tis-the-season' description='Santa is coming and bringing gifts to those who were nice this year.'/>
                    <Entry name='Naughty List' logo='https://media.forgecdn.net/avatars/thumbnails/719/224/256/256/638074683885855365.png' link='https://www.curseforge.com/minecraft/mc-mods/naughty-list' description='Have you been naughty or nice?'/>
                    <Entry name='Snowballing' logo='https://media.forgecdn.net/avatars/thumbnails/682/150/256/256/638068985639208137.png' link='https://www.curseforge.com/minecraft/mc-mods/snowballing' description='Make snowball piles & have snowball fights. Just don&apos;t get frozen.'/>
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