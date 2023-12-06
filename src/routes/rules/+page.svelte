<script>
    import { Alert } from "flowbite-svelte";
    import { InfoCircleOutline, InfoCircleSolid } from "flowbite-svelte-icons";
	import ExternalLink from "$components/ExternalLink.svelte";

</script>


<h1>WinterJam 2023 Rules</h1>

<ol class="text-justify md:child:text-xl child:text-lg child:rounded-lg child:bg-slate-950 child:bg-opacity-30 child:p-4">
    <li>
        <h4>
            1. Submissions must only be created/updated from December 1st to January 1st UTC.
        </h4>
        <span>
            You may think about and plan your project ahead of time but all code, datapacks and resources (including textures, sounds, models and animations) must be made during the specified time window.
        </span>
        <div class="md:w-4/5 m-auto mt-2">
            <Alert color="blue">
                <span class="font-medium">
                    <InfoCircleSolid class="w-6 h-6 inline mr-1 mb-1" />
                    Adding new features to existing projects is allowed, but you must be able to prove that the new features were made during the event.
                    Also, the existing content must not overshadow other submissions that were made during the event.
                </span>
            </Alert>
        </div>
    </li>
    <li>
        <h4>
            2. Submissions should fit with the broader themes of the jam.
        </h4>
        <span>
            These themes include anything that is related to winter and the holidays in December.<br>
            Christmas, New Year and The Solstice events for the Northern or Southern hemisphear are all during this period.<br>
            Other holidays that are not mentioned here are also permitted.
        </span>
    </li>
    <li>
        <h4>
            3. Submissions must load on clients and dedicated servers without crashing the game.
        </h4>
        <span>
            Targeting only one of these environments is fine as long as loading in an unsupported environment does not crash or cause the game
            to be unplayable. (Please test on both, better to test first than fix later)
        </span>
    </li>
    <li>
        <h4>
            4. Third party dependencies such as libraries, frameworks, API's and other mods are allowed.
        </h4>
        <span>
            However you are responsible for any issues that may occur and should fix them or report them to the respective developers.<br>
            You are also required to disclose all required dependencies while submitting your project including those that are built in.<br>
            (Your own libraries, API's etc. do not have to be made during the event)
        </span>
    </li>
    <li>
        <h4>
            5. Submissions must not contain malicious code or act in bad faith.
        </h4>
        <span>
            For example, crashing the game, making the game unplayable, or tampering with other submissions are not allowed.
        </span>
    </li>
    <li>
        <h4>
            6. Submissions must have their sources visible on a public repository. (GitHub, GitLab, etc.)
        </h4>
        <span>
            This allow for tracking of work done so we know you have not cheated and started before the permitted time
            or used tools such as MCreator, this also makes it easier for others in your team or otherwise to contribute to your project.<br>
            Licenses can always be decided on for code and assets at a later date.
        </span>
    </li>
    <li>
        <h4>
            7. Past submissions are permitted.
        </h4>
        <span>
            You are allowed to resubmit past projects that have been updated; however, while they are permitted, they won't recieve the same promotion or showcasing as new submissions.
        </span>
    </li>
    <li>
        <h4>
            8. Submissions must be uploaded to CurseForge or Modrinth before the submission deadline.
        </h4>
        <span>
            They must also pass the respective platform's standard project review.<br>
            Participants are encouraged to upload their projects as soon as reasonably possible as the initial review process can take some time to complete.<br>
            <span class="font-bold">
                !! Uploading to Modrinth is permitted but CurseForge is required for the pack !!
            </span>
        </span>
    </li>
    <li>
        <h4>
            9. Submissions should be compatible with Minecraft 1.20.1 and the Forge Mod Loader.
        </h4>
        <span>
            This is not a hard requirement. Other versions and/or loaders are accepted, but to be included in the pack and server, your mod must be compatible with Minecraft 1.20.1 and Forge.<br>
            We will attempt to load Fabric submissions using <ExternalLink href="https://www.curseforge.com/minecraft/mc-mods/sinytra-connector" class="underline">Sinytra Connector</ExternalLink> but we cannot guarantee that it will work.<br>
            ⚠ <span class="underline">Fabric devs please test your mod with Sinytra Connector!</span>
        </span>
    </li>
</ol>
