import type { NextPage } from "next";
import { Layout, TimeTable } from "../components/";
import NavLink from "../components/NavLink";
import Sponsor from "../components/Sponsor";

const Home: NextPage = () => {
  return (
    <Layout title="Home" url="/">
      <h1>Welcome to WinterJam!</h1>
      <p className="text-primary text-xl md:text-2xl text-justify mb-10">
        This annual winter celebration for the modded Minecraft
        community. During winter we host a mod jam where members of the
        community are encouraged to create new mods that fit the seasonal theme.
        Participants are encouraged to collaborate, explore new skills, and
        challenge themselves. During WinterJam we also host Minecraft
        servers where anyone can join and check out the mod submissions.
      </p>
      <h2>Important Dates</h2>
      <TimeTable />
      <div className="lg:w-3/4 md:w-5/6 mx-auto text-primary text-xl text-center list-inside">
        <h2>Sponsors And Rewards</h2>
        <p className="mb-10">
          This WinterJam is sponsored by <NavLink title='Curle' location='https://twitter.com/bolbmas' inline /> for providing her servers to run the modpacks, and <NavLink title='KiriCattus' location='https://twitter.com/KiriCattus' inline />, who has graciously provided us with our prize pool for this event.
          There will be 13 cash prizes awarded to eligible submissions of this event, participating mods will be judged by members of MMD&apos;s team and event sponsors. 
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
          <Sponsor name='KiriCattus' logo='kiricattus.png' link='https://twitter.com/kiricattus' description='I made a thing. It broke... I made another thing. Why is it working!?!? I help run the MMD community and modding events.'/>
          <Sponsor name='Curle' logo='bolbmas.png' link='https://twitter.com/bolbmas' description=''/>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
