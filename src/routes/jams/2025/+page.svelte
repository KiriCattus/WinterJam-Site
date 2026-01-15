<script lang="ts">
	import ExternalLink from '$components/ExternalLink.svelte';
	import Sponsor from '$components/Sponsor.svelte';

	import logoRoyalFaery from '$assets/sponsors/royalfaery/carrot.png?enhanced';
	import logoKiriCattus from '$assets/sponsors/kiricattus/cat.png?enhanced';
	import logoUp from '$assets/sponsors/up/up.png?enhanced';
	import logoCurle from '$assets/sponsors/curle/bolbmas.png?enhanced';
	import logoCurseForge from '$assets/sponsors/curseforge/anvil_2024.png?enhanced';
	import ModEntry from '$components/ModEntry.svelte';
	import type { PageData } from './$types';
	import { InfoCircleOutline } from 'flowbite-svelte-icons';

	const sponsors = [
		{
			name: 'Up',
			logo: logoUp,
			href: 'https://upcraft.dev',
			description:
				'Freelance software and game developer, Up has helped run WinterJam and has been working on and maintaining the WinterJam website and services throughout the years! Without Up we would not be able to host these jams!'
		},
		{
			name: 'RoyalFaery',
			logo: logoRoyalFaery,
			href: 'https://royalfaery.art',
			description:
				'RoyalFaery makes amazing banners and other digital art for coin! Please spare some time to check them out and be nice!!! (WinterJam assets made by RoyalFaery)'
		},
		{
			name: 'CurseForge',
			logo: logoCurseForge,
			href: 'https://curseforge.com',
			description:
				'CurseForge is a platform for modders to host and distribute their mods. They have kindly sponsored WinterJam by providing us with exclusive CurseForge x WinterJam shirts!'
		},
		{
			name: 'KiriCattus',
			logo: logoKiriCattus,
			href: 'https://tophatcat.dev',
			description:
				'I made a thing. It broke... I made another thing. Why is it working!?!? I help run Winterjam, a Discord community and other modding events.'
		},
		{
			name: 'Curle',
			logo: logoCurle,
			href: 'https://gemwire.uk',
			description:
				'Curle is a software developer and retro tech enthusiast who has kindly sponsored WinterJam by providing a server to run the pack on!'
		}
	];

	export let data: PageData;
</script>

<section id="info" class="mt-12 w-5/6">
	<div class="p-5 bg-black bg-opacity-30 rounded-xl flex place-items-center flex-col">
		<h2>Submissions</h2>
		<h2>WinterJam 2025 has ended.</h2>
		<p>There were a total of {data.mods.length} projects submitted this time!</p>
		<p>To everyone who took part this year, thank you for joining us and having fun making mods together!</p>
		<p>When the server goes offline we will upload the world save for anyone to continue playing around with the submissions :D</p>
		<!-- h4>The submissions window opens on the 20th of December! Please check back then!</h4>-->
		<!--
		<a href="submit" class="underline hover:text-important focus:text-important">
			Click here to submit your project!
		</a>
		-->
		<!--
		<hr class="mx-auto h-px my-8 bg-gray-200 border-0 dark:bg-gray-70 w-9/12" />
		<div class="self-start">
			<h4>ℹ Notice: Work on world generation first!</h4>
			<span>
				For mods that intend on including world generation, we STRONGLY recommend you work on that
				first (or as soon as possible) so that it can be tested and generated when we set up the
				server and pack. The remainder of content can be added later on if required.
			</span>
		</div>
		-->
	</div>
</section>

<section id="entries">
	<h2>Entries</h2>
	<ul class="flex flex-col items-center justify-center w-full m-auto mt-8">
	  {#each data.mods as mod}
		  <li class="min-h-max">
			  <ModEntry data={mod} />
		  </li>
	  {/each}
	</ul>
</section>

<section id="sponsors" class="text-center">
	<h2>Sponsors</h2>
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
