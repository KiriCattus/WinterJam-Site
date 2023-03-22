import type { NextPage } from "next";
import { Layout } from "../components/";
import NavLink from "../components/NavLink";

const FaqPage: NextPage = () => {
    return (
        <Layout title="FAQ" url="/faq">
            <div className="lg:w-3/4 md:w-5/6 mx-auto text-primary text-xl text-center list-inside">
                <h2>Frequently Asked Questions</h2>
                <h3>Can I submit multiple mods to this event?</h3>
                <p className="mb-10">
                    Yes, you may create and submit multiple submissions to this event.
                    If you plan on doing so, please take care of yourself and take steps to avoid stress and burnout.
                </p>

                <h3>Can I join multiple teams?</h3>
                <p className="mb-10">
                    Yes, you may join and contribute to multiple teams. If want to do this,
                    we recommend being transparent with all of your team mates about other teams you are contributing to.
                </p>
                <h3>Can I submit the same mod on multiple modloaders?</h3>
                <p className="mb-10">
                    Yes, you may support both Forge and Quilt with your submission. Please be
                    advised that supporting both loaders is completely optional. Doing so
                    will require additional effort and may be stressful. If you&apos;re
                    still interested in doing so, we recommend checking
                    out <NavLink title='MultiLoader-Template' location='https://github.com/jaredlll08/MultiLoader-Template' inline />.
                </p>

                <h3>I am not a mod author, how can I participate?</h3>
                <p className="mb-10">
                    Everyone is welcome to participate in WinterJam. One of the easiest
                    ways to join in is by giving participants feedback and encouragement
                    or play with the mods on the public Minecraft servers. If
                    you&apos;re looking to get more involved with the event you may be
                    able to help with translating submissions, helping with textures, or
                    contributing in other ways. WinterJam is also a great opportunity to
                    learn more about mod development and try to make your own mods.
                </p>

                <h3>Can I submit a mod from previous WinterJam events?</h3>
                <p className="mb-10">
                    Yes, previous year entries that have been updated can be resubmitted.
                    These entries will not receive the same level of promotion that new
                    submissions receive, however they may be included on our modpacks and servers.
                </p>

                <h3>Do Pull Requests count as being a team member?</h3>
                <p className="mb-10">
                    Creating a Pull Request does not inherently make you a member of that
                    team. The team list is ultimately up to that team and the member who
                    is submitting their submission. The event organizers will
                    step in is when the Pull Request System is being abused to bypass
                    event rules.
                </p>

                <h3>
                    Would accepting a Pull Request from an ineligible person make my
                    project ineligible for prizes?
                </h3>
                <p className="mb-10">
                    Accepting minor Pull Requests from an ineligible person is fine. A
                    minor Pull Request in this context would be along the lines of fixing
                    a typo or bug, resource optimization, or localizing the mod to another
                    language.
                </p>

                <h3>Does the mod need to be published on CurseForge?</h3>
                <p className="mb-10">
                    We are only accepting mods that have been published to CurseForge.
                    Having this requirement allows us to streamline the process of
                    publishing the modpack and having players connect to our servers.
                </p>

                <h3>Can I submit a mod that I did not create?</h3>
                <p className="mb-10">
                    No. Only the authors of a project may submit it to WinterJam.
                    </p>

                <h3>How should teams submit their project?</h3>
                <p className="mb-10">
                    Teams should select one team member to submit their project.
                    Submitting the same project multiple times is not needed.
                </p>

                <h3>Do I need to submit my project?</h3>
                <p className="mb-10">
                    Yes you must submit your project before the event deadline via the submissions form
                    on the top of this page. (Your submission will only be counted if you are a member
                    of MMD&apos;s Discord server)
                </p>
            </div>
        </Layout>
    );
};

export default FaqPage;