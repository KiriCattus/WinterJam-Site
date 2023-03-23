import type { NextPage } from "next";
import { Layout } from "../components/";
import Entry from "../components/Entry";

const Entries: NextPage = () => {
    return (
        <Layout title="Entries" url="/entries">
            <h1>Welcome to WinterJam!</h1>
            <p className="text-xl md:text-2xl text-centered mb-10">
                These are the entries from WinterJam&apos;s past, if you have submitted an
                entry previously and would like me to update the information on this page,
                please contact KiriCattus
            </p>
            <h2>WinterJam 2022</h2>
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
            <h2>WinterJam 2021</h2>
            <div id='sponsors'>
                <div className='grid sm:grid-cols-2 gap-y-5 sm:gap-x-6 mt-6 p-4 text-lg'>
                    <Entry name='Snowballs Deluxe' logo='https://media.forgecdn.net/avatars/thumbnails/462/579/256/256/637741815778966261.png' link='https://www.curseforge.com/minecraft/mc-mods/snowballs-deluxe' description='Adds a freezing effect to thrown snowballs'/>
                    <Entry name='From The North' logo='https://media.forgecdn.net/avatars/thumbnails/468/446/256/256/637752034779076070.png' link='https://www.curseforge.com/minecraft/mc-mods/from-the-north' description='Food And Holiday Decorations!'/>
                    <Entry name='Attack On Christmas' logo='https://media.forgecdn.net/avatars/thumbnails/469/737/256/256/637755511027513420.png' link='https://www.curseforge.com/minecraft/mc-mods/attack-on-christmas' description='Evil Elves have invaded the world!'/>
                    <Entry name='Winterly' logo='https://media.forgecdn.net/avatars/thumbnails/582/961/256/256/637949458588071640.png' link='https://www.curseforge.com/minecraft/mc-mods/winterly' description='Winter expansion mod adding cold and sloppy stuff.'/>
                    <Entry name='Frozen Memories' logo='https://media.forgecdn.net/avatars/thumbnails/470/45/256/256/637756333725984179.png' link='https://www.curseforge.com/minecraft/mc-mods/frozen-memories' description='A small progression-based mod with its own story'/>
                    <Entry name='Snowball Effect' logo='https://media.forgecdn.net/avatars/thumbnails/566/781/256/256/637926358554279279.png' link='https://www.curseforge.com/minecraft/mc-mods/snowball-effect' description='Adds an entity, the Igloof, to accompany you during your adventures'/>
                    <Entry name='Winter Coats' logo='https://media.forgecdn.net/avatars/thumbnails/565/143/256/256/637922351386226910.png' link='https://www.curseforge.com/minecraft/mc-mods/winter-coats' description='Winter-Themed Armor in Minecraft. Forge & Fabric'/>
                    <Entry name='Fat Chicken [christmas mod]' logo='https://media.forgecdn.net/avatars/thumbnails/470/603/256/256/637757785851900686.png' link='https://www.curseforge.com/minecraft/mc-mods/fat-chicken' description='Christmas themed decoration and food mod'/>
                    <Entry name='Snow Mod' logo='https://media.forgecdn.net/avatars/thumbnails/470/558/256/256/637757687418136059.png' link='https://www.curseforge.com/minecraft/mc-mods/snow-mod' description='Adds a bladder mechanic for you to write your name in snow'/>
                    <Entry name='Snuffles' logo='https://media.forgecdn.net/avatars/thumbnails/471/411/256/256/637759678732120045.png' link='https://www.curseforge.com/minecraft/mc-mods/snuffles' description='Adds Snuffles, a new mob to snowy biomes!'/>
                    <Entry name='Icy Incitement' logo='https://media.forgecdn.net/avatars/thumbnails/490/313/256/256/637797449402934513.png' link='https://www.curseforge.com/minecraft/mc-mods/icy-incitement' description='A convenient chilly gadget!'/>
                </div>
            </div>
            <h2>WinterJam 2020</h2>
            <div id='sponsors'>
                <div className='grid sm:grid-cols-2 gap-y-5 sm:gap-x-6 mt-6 p-4 text-lg'>
                    <Entry name='Decorative Winter' logo='https://media.forgecdn.net/avatars/thumbnails/325/734/256/256/637443910985529999.png' link='https://www.curseforge.com/minecraft/mc-mods/decorative-winter' description='Winter & Christmas themed decorative blocks'/>
                    <Entry name='Yellow Snow' logo='https://media.forgecdn.net/avatars/thumbnails/325/10/256/256/637441793558546162.png' link='https://www.curseforge.com/minecraft/mc-mods/yellow-snow' description='A mod which adds yellow snow to Minecraft. Made for WinterJam.'/>
                    <Entry name='Fancy Snowy Weather' logo='https://media.forgecdn.net/avatars/thumbnails/314/254/256/256/637411596527123312.png' link='https://www.curseforge.com/minecraft/mc-mods/fancy-snowy-weather' description='MMD Winterjam 2020 Mod'/>
                    <Entry name='Naughty Or Nice' logo='https://media.forgecdn.net/avatars/thumbnails/321/84/256/256/637430089353598146.png' link='https://www.curseforge.com/minecraft/mc-mods/naughty-or-nice' description='You Better Watch Out'/>
                    <Entry name='Workshops of Doom' logo='https://media.forgecdn.net/avatars/thumbnails/320/759/256/256/637429040293436719.png' link='https://www.curseforge.com/minecraft/mc-mods/workshops-of-doom' description='A forge mod that adds additional illager-themed structures'/>
                    <Entry name='PatchouliJam' logo='https://media.forgecdn.net/avatars/thumbnails/320/344/256/256/637427903300095611.png' link='https://www.curseforge.com/minecraft/mc-mods/patchouli-jam' description='Adds Patchouli based documentation to MMD Event Mods.'/>
                    <Entry name='Cold Snap Horde' logo='https://media.forgecdn.net/avatars/thumbnails/529/597/256/256/637851452818569258.png' link='https://www.curseforge.com/minecraft/mc-mods/cold-snap-horde' description='A frosty band of scoundrels invade cold biomes'/>
                    <Entry name='Festive Creepers' logo='https://media.forgecdn.net/avatars/thumbnails/315/582/256/256/637416041404372077.png' link='https://www.curseforge.com/minecraft/mc-mods/festive-creepers' description='Adds a new festive creeper'/>
                    <Entry name='NextChristmas' logo='https://media.forgecdn.net/avatars/thumbnails/317/692/256/256/637422560078845655.png' link='https://www.curseforge.com/minecraft/mc-mods/next-christmas' description='A christmas mod made for WinterJam 2020'/>
                    <Entry name='Snowy Weaponry' logo='https://media.forgecdn.net/avatars/thumbnails/318/712/256/256/637425867001956804.png' link='https://www.curseforge.com/minecraft/mc-mods/snowy-weaponry' description='Snowballs with metal chunks, and snow cones too!'/>
                    <Entry name='Christmas Wish in a Bottle' logo='https://media.forgecdn.net/avatars/thumbnails/315/155/256/256/637414793167776664.png' link='https://www.curseforge.com/minecraft/mc-mods/christmas-wish-in-a-bottle' description='Adds the ability to send Christmas wishes up to Santa for presents!'/>
                    <Entry name='Jolly Boxes' logo='https://media.forgecdn.net/avatars/thumbnails/318/407/256/256/637424757955079103.png' link='https://www.curseforge.com/minecraft/mc-mods/jolly-boxes' description='Adds upgradeable Christmas Presents with varying rewards'/>
                </div>
            </div>
            <h2>WinterJam 2019</h2>
            <div id='sponsors'>
                <div className='grid sm:grid-cols-2 gap-y-5 sm:gap-x-6 mt-6 p-4 text-lg'>
                    <Entry name='Fimbulwinter' logo='https://media.forgecdn.net/avatars/thumbnails/243/83/256/256/637137671332623172.png' link='https://www.curseforge.com/minecraft/mc-mods/fimbulwinter' description='A mod which brings  a new winter-themed dimension, boss and mob-variants to the game'/>
                    <Entry name='Ice Sculptures' logo='https://media.forgecdn.net/avatars/thumbnails/242/327/256/256/637133580307415005.png' link='https://www.curseforge.com/minecraft/mc-mods/ice-sculptures' description='Decroative mod about ice and snow'/>
                    <Entry name='Polarizing Biomes' logo='https://media.forgecdn.net/avatars/thumbnails/240/910/256/256/637124381305039854.png' link='https://www.curseforge.com/minecraft/mc-mods/polarizing-biomes' description='Adds winter-themed biomes.'/>
                    <Entry name='Snow Under Trees' logo='https://media.forgecdn.net/avatars/thumbnails/239/303/256/256/637113155063476998.png' link='https://www.curseforge.com/minecraft/mc-mods/snow-under-trees' description='Adds snow under trees in snowy biomes'/>
                    <Entry name='Spruce Willis the Xmas Tree' logo='https://media.forgecdn.net/avatars/thumbnails/239/418/256/256/637113786309713184.png' link='https://www.curseforge.com/minecraft/mc-mods/spruce-willis-the-xmas-tree' description='A Christmas tree mod with a mob or two called Spruce Willis!'/>
                    <Entry name='Thicker Snow on Grass' logo='https://media.forgecdn.net/avatars/thumbnails/240/474/256/256/637121208018644585.png' link='https://www.curseforge.com/minecraft/mc-mods/thicker-snow-on-grass' description='Thicker snow layers no longer kills grass'/>
                    <Entry name='Winter Ambience' logo='https://media.forgecdn.net/avatars/thumbnails/240/164/256/256/637119427688002737.png' link='https://www.curseforge.com/minecraft/mc-mods/winter-ambience' description='Improves snow. Made for MMD Winterjam 2019.'/>
                    <Entry name='Winter Decorations' logo='https://media.forgecdn.net/avatars/thumbnails/240/947/256/256/637124704312777631.png' link='https://www.curseforge.com/minecraft/mc-mods/winter-decorations' description='Adds some baubles and decorative lights. Made for MMD Winterjam 2019.'/>
                </div>
            </div>
            <h2>WinterJam 2018</h2>
            <div id='sponsors'>
                <div className='grid sm:grid-cols-2 gap-y-5 sm:gap-x-6 mt-6 p-4 text-lg'>
                    <Entry name='Presents' logo='https://media.forgecdn.net/avatars/thumbnails/180/647/256/256/636794455271866489.png' link='https://www.curseforge.com/minecraft/mc-mods/presents' description='Give customizable presents to your friends (and enemies)'/>
                    <Entry name='Snow! Real Magic! ⛄ (Forge)' logo='https://media.forgecdn.net/avatars/thumbnails/181/338/256/256/636799740021478717.png' link='https://www.curseforge.com/minecraft/mc-mods/snow-real-magic' description='Not a magic mod. | Snow Gravity & Accumulation | Snow-covered blocks | Tweak snow behaviors'/>
                    <Entry name='Snow Variants' logo='https://media.forgecdn.net/avatars/thumbnails/191/627/256/256/636860588163362985.png' link='https://www.curseforge.com/minecraft/mc-mods/snow-variants' description='Allows Snow Layer Placement On Stairs And Slabs'/>
                    <Entry name='Worlds Retold' logo='https://media.forgecdn.net/avatars/thumbnails/184/532/256/256/636822016516029089.png' link='https://www.curseforge.com/minecraft/mc-mods/worlds-retold' description='A mob expansion mod which utilizes biome-based modules to spice up your worlds!'/>
                    <Entry name='Legendary Winter' logo='https://media.forgecdn.net/avatars/thumbnails/183/525/256/256/636815613592940795.png' link='https://www.curseforge.com/minecraft/mc-mods/legendary-winter' description='Winter themed things added to Minecraft'/>
                    <Entry name='Snowmancy' logo='https://media.forgecdn.net/avatars/thumbnails/183/902/256/256/636817981088086114.png' link='https://www.curseforge.com/minecraft/mc-mods/snowmancy' description='Little snowman companions fighting on your side!'/>
                    <Entry name='NoCubes MMD Winterjam' logo='https://media.forgecdn.net/avatars/thumbnails/183/64/256/256/636812486879071180.png' link='https://www.curseforge.com/minecraft/mc-mods/nocubes-mmd-winterjam' description='Snow everywhere!!!'/>
                </div>
            </div>
        </Layout>
    );
};

export default Entries;