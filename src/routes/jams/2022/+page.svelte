<script lang="ts">
	import ExternalLink from '$components/ExternalLink.svelte';
	import Sponsor from '$components/Sponsor.svelte';

	import logoCurseforge from '$assets/sponsors/curseforge/anvil-square.png?enhanced';
	import logoShinhaNox from '$assets/sponsors/shinhanox/carrot.png?enhanced';
	import logoTerrariumEarth from '$assets/sponsors/terrarium-earth/bottle.png?enhanced';
	import logoCurle from '$assets/sponsors/curle/bolbmas.png?enhanced';
	import logoKiriCattus from '$assets/sponsors/kiricattus/cat.png?enhanced';
	import type { PageData } from './$types';
	import ModEntry from '$components/ModEntry.svelte';

	const sponsors = [
		{
			name: 'Curseforge',
			logo: logoCurseforge,
			href: 'https://curseforge.com',
			description: 'CurseForge provides hosting for mods, addons, and user content for many popular games such as Minecraft, World of Warcraft, and Among Us.',
		},
		{
			name: 'ShinhaNox',
			logo: logoShinhaNox,
			href: 'https://shinhanox.art',
			description: 'Fabulous kawaii artist Bunny girl who makes amazing kawaii banners and other digital art for coin! Please spare some time to check them out and be nice!!! (Banner commission by ShinhaNox)',
		},
		{
			name: 'Terrarium',
			logo: logoTerrariumEarth,
			href: 'https://twitter.com/TerrariumEarth',
			description: 'We are a team of devs and artists making mods such as Chipped, Tempad and Spirit. We love making immersive new Minecraft mods for the latest and greatest versions of Minecraft on Fabric and Forge.',
		},
		{
			name: 'Curle',
			logo: logoCurle,
			href: 'https://twitter.com/bolbmas',
			description: 'Former MinecraftForge Community and Repositories manager. Did somebody say \'New Project\' ?',
		},
		{
			name: 'KiriCattus',
			logo: logoKiriCattus,
			href: 'https://tophatcat.dev',
			description: 'I made a thing. It broke... I made another thing. Why is it working!?!? I help run the MMD community and modding events.',
		},
	];
	export let data: PageData;
</script>

<section id="intro">
	<p>
		This annual winter celebration for the modded Minecraft community. During winter we host a mod
		jam where members of the community are encouraged to create new mods that fit the seasonal
		theme. Participants are encouraged to collaborate, explore new skills, and challenge themselves.
		During WinterJam we also host Minecraft servers where anyone can join and check out the mod
		submissions. WinterJam 2022 is now over! Thank you all for participating and thank you to the
		sponsors for so graciously giving out the prizes this year! It&apos;s been wonderful to see the
		wild and cool creations you&apos;ve all created and submitted for WinterJam 2022 :D
	</p>
</section>

<section id="entries">
	<h2>Entries</h2>
	{#each data.mods as mod}
		<ModEntry data={mod} />
	{/each}
	<p class="text-center">-- WIP --</p>
</section>

<section id="sponsors" class="text-center">
	<h2>Sponsors</h2>
	<p class="block">
		WinterJam 2022 is sponsored by
		<ExternalLink class="font-bold text-important" href="https://twitter.com/bolbmas">
			Curle
		</ExternalLink>
		for providing her servers to run the WinterJam modpacks,
		<ExternalLink class="font-bold text-important" href="https://twitter.com/TerrariumEarth">
			Terrarium
		</ExternalLink>
		and
		<ExternalLink class="font-bold text-important" href="https://curseforge.com">
			Curseforge
		</ExternalLink>
		for graciously providing us with our prize pool for this event! And
		<ExternalLink class="font-bold text-important" href="https://shinhanox.art">
			ShinhaNox
		</ExternalLink>
		for doing some last minute banner art for our event!
	</p>
	<ul class="m-auto mt-8 w-full flex flex-col items-center justify-center">
		{#each sponsors as sponsor, i}
			<li class="min-h-max">
				<Sponsor {...sponsor} reverse={i % 2 !== 0}>
					{sponsor.description}
				</Sponsor>
			</li>
		{/each}
	</ul>
</section>
