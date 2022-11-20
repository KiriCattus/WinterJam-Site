import type { NextPage } from "next";
import { Layout, TimeTable } from "../components/";
import NavLink from "../components/NavLink";
import Sponsor from "../components/Sponsor";

const Home: NextPage = () => {
  return (
    <Layout title="Home" url="/">
      <h1>Welcome to WinterJam!</h1>
      <p className="text-xl md:text-2xl text-justify mb-10">
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
        <h2>Rewards!</h2><p className="mb-10">
           This years rewards are done on a per modloader basis, meaning each reward can be given out twice, once per modloader. 
           However your team can only be given one reward in total, rewards are given out on a voting basis with MMD staff 
           members being the judges this year.
        </p>
        <ol className="list-disc list-inside">
          <li className="text-center">$125 - Best overall mod.</li>
          <li className="text-center">$75 - Best World Generation - Biomes, dimensions, structures and anything generation related.</li>
          <li className="text-center">$75 - Most Holiday Cheer - Any holiday between November 12th and January 25th.</li>
          <li className="text-center">$75 - Most Useful - Provides utility to the player without being overpowered.</li>
          <li className="text-center">$75 - Best Mob - Visuals, AI, Behaviour, loot, etc.</li>
          <li className="text-center">$75 - Project Presentation - Best CurseForge project presentation and wiki.</li>
        </ol>
        <h2>Sponsors</h2>
        <p className="mb-10">
          This WinterJam is sponsored by <NavLink title='Curle' location='https://twitter.com/bolbmas' inline /> for providing her servers to run the
          WinterJam modpacks, <NavLink title='Terrarium' location='https://twitter.com/TerrariumEarth' inline /> for graciously providing us with our prize pool for this event!
          And ShinhaNox for doing some last minute banner art for our event! 
        </p>
        </div>
      <div id='sponsors'>
        <div className='grid sm:grid-cols-2 gap-y-5 sm:gap-x-6 mt-6 p-4 text-lg'>
          <Sponsor name='Terrarium' logo='terrarium.png' link='https://twitter.com/TerrariumEarth' description='We are a team of devs and artists making mods such as Chipped, Tempad and Spirit. We love making immersive new Minecraft mods for the latest and greatest versions of Minecraft on Fabric and Forge.'/>
          <Sponsor name='ShinhaNox' logo='bunny.png' link='https://shinhanox.uwu.ai/' description='Fabulous kawaii artist Bunny girl who makes amazing kawaii banners and other digital art for coin! Please spare some time to check them out and be nice!!! (Banner commission by ShinhaNox)'/>
          <Sponsor name='KiriCattus' logo='kiricattus.png' link='https://twitter.com/kiricattus' description='I made a thing. It broke... I made another thing. Why is it working!?!? I help run the MMD community and modding events.'/>
          <Sponsor name='Curle' logo='bolbmas.png' link='https://twitter.com/bolbmas' description='Minecraft Forge&apos;s Community and Repositories manager. Did somebody say &apos;New Project&apos; ?'/>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
