import type { NextPage } from "next";
import { Layout, TimeTable } from "../components/";

const Home: NextPage = () => {
  return (
    <Layout title="Home" url="/">
      <div className="md:text-3xl text-2xl text-center text-white mb-3 font-bold">
        Welcome to WinterJam!
      </div>
      <p className="text-white text-xl md:text-2xl text-justify mb-10">
        This is MMD's annual winter celebration for the modded Minecraft
        community. During the winter we host a mod jam where members of the
        community are encouraged to create new mods that fit the seasonal vibe.
        Participants are encouraged to collaborate, explore new skills, and
        challenge themselves. During WinterJam we also host a public Minecraft
        server where anyone can join and check out the valid mod jam
        submissions.
      </p>
      <h1 className="md:text-3xl text-2xl text-center font-bold text-white mb-5">
        Important Dates
      </h1>
      <TimeTable />
    </Layout>
  );
};

export default Home;
