import type { NextPage } from "next";
import { Layout, TimeTable } from "../components/";
import NavLink from "../components/NavLink";
import Sponsor from "../components/Sponsor";

const Home: NextPage = () => {
  return (
    <Layout title="Home" url="/">
      <h1>Welcome to WinterJam!</h1>
      <p className="mb-10 text-xl text-justify md:text-2xl">
        This annual winter celebration for the modded Minecraft
        community. During winter we host a mod jam where members of the
        community are encouraged to create new mods that fit the seasonal theme.
        Participants are encouraged to collaborate, explore new skills, and
        challenge themselves. During WinterJam we also host Minecraft
        servers where anyone can join and check out the mod submissions.


        WinterJam 2022 is now over! Thank you all for participating and thank you to the sponsors
        for so graciously giving out the prizes this year! It&apos;s been wonderful to see the
        wild and cool creations you&apos;ve all created and submitted for WinterJam 2022 :D
      </p>
      <div className="mx-auto text-xl text-center list-inside lg:w-3/4 md:w-5/6 text-primary">
        <h2>Sponsors</h2>
        <p className="mb-10">
          WinterJam 2022 is sponsored by <NavLink title='Curle' location='https://twitter.com/bolbmas' inline /> for providing her servers to run the
          WinterJam modpacks, <NavLink title='Terrarium' location='https://twitter.com/TerrariumEarth' inline /> for graciously providing us with our prize pool for this event!
          And ShinhaNox for doing some last minute banner art for our event! 
        </p>
        </div>
      <div id='sponsors'>
        <div className='grid p-4 mt-6 text-lg sm:grid-cols-2 gap-y-5 sm:gap-x-6'>
          <Sponsor name='Terrarium' logo='terrarium.png' link='https://twitter.com/TerrariumEarth' description='We are a team of devs and artists making mods such as Chipped, Tempad and Spirit. We love making immersive new Minecraft mods for the latest and greatest versions of Minecraft on Fabric and Forge.'/>
          <Sponsor name='ShinhaNox' logo='bunny.png' link='https://shinhanox.art/' description='Fabulous kawaii artist Bunny girl who makes amazing kawaii banners and other digital art for coin! Please spare some time to check them out and be nice!!! (Banner commission by ShinhaNox)'/>
          <Sponsor name='KiriCattus' logo='kiricattus.png' link='https://tophatcat.dev/' description='I made a thing. It broke... I made another thing. Why is it working!?!? I help run the MMD community and modding events.'/>
          <Sponsor name='Curle' logo='bolbmas.png' link='https://twitter.com/bolbmas' description='Minecraft Forge&apos;s Community and Repositories manager. Did somebody say &apos;New Project&apos; ?'/>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
