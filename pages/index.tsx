import type { NextPage } from "next";
import { Layout, TimeTable } from "../components/";
import { Rules } from "../components/Rules";
import NavLink from "../components/NavLink";
import Sponsor from "../components/Sponsor";

const Home: NextPage = () => {
  return (
    <Layout title="Home" url="/">
      <h1>Welcome to WinterJam!</h1>
      <p className="text-white text-xl md:text-2xl text-justify mb-10">
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
      <Rules />
      <div className="lg:w-2/3 md:w-5/6 mx-auto text-white text-xl text-justify">
        <h2>Sponsors and rewards</h2>
        <p className="mb-10">
          This WinterJam is sponsored by <NavLink title='YUNGNICKYOUNG' location='https://twitter.com/yungnickyoung' inline={true} /> and <NavLink title='YaBoiChips' location='https://twitter.com/yaboichips1' inline={true} /> who have graciously provided us with our prize pool for this event.
          There will be 6 cash prizes awarded to eligible submissions of this event, participating mods will be judged by members of MMD&apos;s team and event sponsors. 
        </p>
        <h3>Rewards</h3>
        <ul>
          <li>$120 - Best Vanilla+ Content</li>
          <li>$120 - Best World Generation - Biomes, dimensions, structures and anything generation related.</li>
          <li>$120 - Best Mob - Visuals, AI, Behavior, loot, etc.</li>
          <li>$120 - Most Holiday Cheer - Any holiday between December 1st and Jan 21st.</li>
          <li>$120 - Most Useful - Provides utility to the player without being overpowered.</li>
          <li>$120 - Best Player Progression - Adds a new form of progression to the game, or builds on vanilla&apos;s. Must include a tangible goal such as a boss mob or higher tier of gear.</li>
        </ul>

        <h2>Frequently Asked Questions</h2>
        <h3>Can I submit multiple mods to this event?</h3>
        <p>
          Yes, you may create and submit multiple submissions to this event. If
          you are interested in doing this please take care of yourself and take
          steps to avoid stress and burnout.
        </p>

        <h3>Can I join multiple teams?</h3>
        <p>
          Yes, you may join and contribute to multiple teams. If you are
          interested in doing this we recommend being transparent with all of
          your team mates about other teams you are contributing to.
        </p>
        <h3>Can I submit the same mod for both Forge and Fabric?</h3>
        <p>
          Yes, you may support both Forge and Fabric with your submission. Please be
          advised that supporting both loaders is completely optional. Doing so
          will require additional effort and may be stressful. If you&apos;re
          still interested in doing this we recommend checking out the useful <NavLink title='MultiLoader-Template' location='https://github.com/jaredlll08/MultiLoader-Template' inline={true} /> by Jared and Darkhax.
        </p>

        <h3>I am not a mod author, how can I participate?</h3>
        <p>
          Everyone is welcome to participate in WinterJam. One of the easiest
          ways to join in is by giving participants feedback and encouragement
          or play with the mods on the public event Minecraft server. If
          you&apos;re looking to get more involved with the event you may be
          able to help with translating submissions, helping with textures, or
          contributing in other ways. WinterJam is also a great opportunity to
          learn more about mod development and try to make your own mod.
        </p>

        <h3>Can I submit a mod from previous WinterJam events?</h3>
        <p>
          Yes, previous year entries that have been updated can be resubmitted.
          These entries will not be eligible for prizes and will not receive the
          same level of promotion that new submissions receive however they may
          be included on our Modpack and public server.
        </p>

        <h3>Do Pull Requests count as being a team member?</h3>
        <p>
          Creating a Pull Request does not inherently make you a member of that
          team. The team list is ultimately up to that team and the member who
          is submitting their submission. The main time event organizers will
          step in is when the Pull Request System is being abused to bypass
          event rules.
        </p>

        <h3>
          Would accepting a Pull Request from an ineligible person make my
          project ineligible for prizes?
        </h3>
        <p>
          Accepting minor Pull Requests from an ineligible person is fine. A
          minor Pull Request in this context would be along the lines of fixing
          a typo, resource optimization, or localizing the mod to another
          language.
        </p>

        <h3>Does the mod need to be published on CurseForge?</h3>
        <p>
          We are only accepting mods that have been published to CurseForge.
          Having this requirement allows us to streamline the process of
          publishing the modpack and having players connect to our servers.
        </p>

        <h3>Can I submit a mod that I did not create?</h3>
        <p>No. Only the authors of a project may submit it to WinterJam.</p>

        <h3>How should teams submit their project?</h3>
        <p>
          Teams should select one team member to submit their project.
          Submitting the same project multiple times is not needed.
        </p>

        <h3>Do I need to submit my project?</h3>
        <p>
          Yes you must submit your project before the end of the event. More
          information will follow on how to do so soon.
        </p>
      </div>

      <div id='sponsors'>
        <h2>Sponsors</h2>
        <div className='grid sm:grid-cols-3 gap-y-5 sm:gap-x-6 mt-6 p-4 text-lg'>
          <Sponsor name='Nodecraft' logo='nodecraft.png' link='https://nodecraft.com/r/mmd' description='Nodecraft offers quality server hosting for many games such as Minecraft, Rust, and Factorio.' />
          <Sponsor name='MMD' logo='mmd.png' link='https://discord.mcmoddev.com/' description='Minecraft Mod Development is a safe community for mod authors to learn, improve their skills, and share their work.' />
          <Sponsor name='YUNGNICKYOUNG' logo='nick.png' link='https://twitter.com/yungnickyoung' description='Content creator and Minecraft modder on a journey to improve every part of Minecraft with extensive Vanilla+ style mods.'/>
          <Sponsor name='YaBoyChips' logo='yaboychips.png' link='https://twitter.com/yaboichips1' description='Minecraft enthusiast and mod developer. Creator and dev of the mod Charms.'/>
          <Sponsor name='KiriCattus' logo='kiricattus.png' link='https://twitter.com/kiricattus' description='I made a thing. It broke... I made another thing. Why is it working!?!?'/>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
