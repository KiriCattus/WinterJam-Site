import type { NextPage } from "next";
import { Layout, TimeTable } from "../components/";
import NavLink from "../components/NavLink";
import Sponsor from "../components/Sponsor";

const Home: NextPage = () => {
  return (
    <Layout title="Home" url="/">
      <h1>Welcome to WinterJam!</h1>
      <p className="text-primary text-xl md:text-2xl text-justify mb-10">
        This is MMD&apos;s annual winter celebration for the modded Minecraft
        community. During the winter we host a mod jam where members of the
        community are encouraged to create new mods that fit the seasonal vibe.
        Participants are encouraged to collaborate, explore new skills, and
        challenge themselves. During WinterJam we also host a public Minecraft
        server where anyone can join and check out the valid mod jam
        submissions.
      </p>
      <h2>Important Dates</h2>
      <TimeTable />
      <div className="lg:w-3/4 md:w-5/6 mx-auto text-primary text-xl text-center list-inside">
        <h2>Sponsors And Rewards</h2>
        <p className="mb-10">
          This WinterJam is sponsored by <NavLink title='YUNGNICKYOUNG' location='https://twitter.com/yungnickyoung' inline />, <NavLink title='YaBoiChips' location='https://twitter.com/yaboichips1' inline /> and <NavLink title='CurseForge' location='https://twitter.com/CurseForge' inline /> who have graciously provided us with our prize pool for this event.
          There will be 10 cash prizes awarded to eligible submissions of this event, participating mods will be judged by members of MMD&apos;s team and event sponsors. 
        </p>

        <h3>Top Three Submissions</h3>
        <p className="mb-10">The top three Forge and Fabric submissions will be awarded the following prizes. Submissions that are compatible with both loaders will be considered for both categories however they may only win one category. (Please note: The top three prizes are the only prizes that can be won on both loaders by different projects or teams)</p>
        <ol className="list-disc list-inside">
          <li className="text-center">1st Place - $200 USD</li>
          <li className="text-center">2nd Place - $150 USD</li>
          <li className="text-center">3rd Place - $125 USD</li>
        </ol>

        <h3>Prizes</h3>
        <ol className="list-disc list-inside">
          <li className="text-center">$100 - Project Presentation - Best CurseForge project presentation and wiki.</li>
          <li className="text-center">$100 - Best Vanilla+ Content</li>
          <li className="text-center">$100 - Best World Generation - Biomes, dimensions, structures and anything generation related.</li>
          <li className="text-center">$100 - Best Mob - Visuals, AI, Behavior, loot, etc.</li>
          <li className="text-center">$100 - Most Holiday Cheer - Any holiday between December 1st and Jan 21st.</li>
          <li className="text-center">$100 - Most Useful - Provides utility to the player without being overpowered.</li>
          <li className="text-center">$100 - Best Player Progression - Adds a new form of progression to the game, or builds on vanilla&apos;s. Must include a tangible goal such as a boss mob or higher tier of gear.</li>
        </ol>
        </div>
      <div id='sponsors'>
        <h2>Sponsors</h2>
        <div className='grid sm:grid-cols-3 gap-y-5 sm:gap-x-6 mt-6 p-4 text-lg'>
          <Sponsor name='Nodecraft' logo='nodecraft.png' link='https://nodecraft.com/r/mmd' description='Nodecraft offers quality server hosting for many games such as Minecraft, Rust, and Factorio.' />
          <Sponsor name='MMD' logo='mmd.png' link='https://discord.mcmoddev.com/' description='Minecraft Mod Development is a safe community for mod authors to learn, improve their skills, and share their work.' />
          <Sponsor name='YUNGNICKYOUNG' logo='nick.png' link='https://twitter.com/yungnickyoung' description='Content creator and Minecraft modder on a journey to improve every part of Minecraft with extensive Vanilla+ style mods.'/>
          <Sponsor name='YaBoyChips' logo='yaboychips.png' link='https://twitter.com/yaboichips1' description='Minecraft enthusiast and mod developer. Creator and dev of the mod Charms.'/>
          <Sponsor name='KiriCattus' logo='kiricattus.png' link='https://twitter.com/kiricattus' description='I made a thing. It broke... I made another thing. Why is it working!?!?'/>
          <Sponsor name='CurseForge' logo='curseforge.png' link='https://www.curseforge.com/?winterjam2021' description='CurseForge provides hosting for mods, addons, and user content for many popular games such as Minecraft, World of Warcraft, and Among Us.' />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
