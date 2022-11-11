import type { NextPage } from "next";
import { Layout } from "../components/";

const RulesPage: NextPage = () => {
    return (
        <Layout title="Rules" url="/rules">
            <div className="lg:w-3/4 md:w-5/6 mx-auto text-primary text-xl text-center list-inside">
                <h2>Rules</h2>
                <ol className="list-decimal">
                    <li>
                        <b>Submissions must only be developed/updated from November 12th to January 25th UTC.</b>
                        <br/>
                        You may come up with ideas and plan your project in advance, but all code, assets,
                        textures, sounds, models, animations and/or datapacks must be made during the specified time.
                        (MCreator and other generation tools are not allowed to be submitted)
                    </li>
                    <li>
                        <b>Work on world generation first!</b>
                        <br/>
                        We strongly recommend that if your submission is intended to include world generation,
                        work on that first (or as soon as possible) so that it can be generated when we set up
                        the server and pack. The remainder of content can be added later on if needed.
                    </li>
                    <li>
                        <b>Submissions should fit with the broader themes of WinterJam.</b>
                        <br/>
                        These themes include anything that is related to Winter and the holidays
                        (Xmas, New Year or the Chinese New year are all during the event period, you can use any of those holidays too)
                    </li>
                    <li>
                        <b>Submissions must load on clients and dedicated servers without crashing the game.</b>
                        <br/>
                        Targeting only one of these environments is fine as long as loading in
                        an unsupported environment does not crash the game or cause the game
                        to be unplayable.
                    </li>
                    <li>
                        <b>Submissions must be compatible with Minecraft 1.19 and either Forge or Quilt.</b>
                        <br/>
                        While Forge and Quilt are the loaders of choice for this event, should you want to use Fabric,
                        you can, as long as you test your mod on a Quilt so it doesn&apos;t cause issues in the server/pack.  
                    </li>
                    <li>
                        <b>Third party dependencies such as libraries, frameworks, APIs, and other mods are allowed.</b>
                        <br/>
                        However your project will be accountable for any issues caused by your dependencies.
                        You are also required to disclose all required dependencies when submitting your project through our form.
                    </li>
                    <li>
                        <b>Teams are allowed.</b>
                        <br/>
                        There are no limits to the size of a team, and participants may
                        contribute to multiple teams. If a team submission wins a prize, the
                        team is responsible for deciding how that prize will be shared amongst
                        its members. However we suggest maximum teams of roughly 4 or 5.
                    </li>
                    <li>
                        <b>Submissions from MMD team members or those who are employed by event
                            sponsors are not eligible to win prizes during this event.</b>
                        <br/>
                        Submissions from teams that they are a part of will also not be
                        eligible for winning prizes.
                    </li>
                    <li>
                        <b>Submissions must not contain malicious code or act in bad faith.</b>
                        <br/>
                        For example, crashing the game, making the game unplayable, or tampering with other submissions are not allowed.
                    </li>
                    <li>
                        <b>Submissions must be uploaded to CurseForge before the submission deadline.</b>
                        <br/>
                        They must also pass CurseForge&apos;s standard project review.
                        Participants are encouraged to upload their projects as soon as
                        possible, as this review process can take some time to complete.
                    </li>
                    <li>
                        <b>Mods should be open source (or at least visible)</b>
                        <br /> Mods should be open or visible source to allow for tracking
                        of work done (And to show you have actually done the work during the event and not cheated)
                        and to make it easier for others on the team or outside to contribute to your project.
                        Licenses and such can always be decided between team members at a later date if needed but
                        it&apos;s suggested to do so when creating the project.
                    </li>
                </ol>
            </div>
        </Layout >
    );
};

export default RulesPage;