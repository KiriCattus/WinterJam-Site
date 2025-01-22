<script lang="ts">
	import ExternalLink from '$components/ExternalLink.svelte';
	import Sponsor from '$components/Sponsor.svelte';

	import logoCurseforge from '$assets/sponsors/curseforge/anvil_2024.png?enhanced';
	import logoShinhaNox from '$assets/sponsors/shinhanox/carrot.png?enhanced';
	import logoKiriCattus from '$assets/sponsors/kiricattus/cat.png?enhanced';
	import ModEntry from '$components/ModEntry.svelte';
	import type { PageData } from './$types';
	import { InfoCircleOutline } from 'flowbite-svelte-icons';

	const sponsors = [
		{
			name: 'Curseforge',
			logo: logoCurseforge,
			href: 'https://curseforge.com',
			description:
				'CurseForge provides hosting for mods, addons, and user content for many popular games such as Minecraft, World of Warcraft, Among Us and MANY many more!'
		},
		{
			name: 'ShinhaNox',
			logo: logoShinhaNox,
			href: 'https://shinhanox.art',
			description:
				'Fabulous kawaii artist Bunny girl who makes amazing banners and other digital art for some coin! Please spare some time to check them out and be nice!!! (Banner commission by ShinhaNox)'
		},
		{
			name: 'KiriCattus',
			logo: logoKiriCattus,
			href: 'https://tophatcat.dev',
			description:
				'I made a thing. It broke... I made another thing. Why is it working!?!? I help run the MMD community and modding events.'
		}
	];

	export let data: PageData;
</script>

<section id="info" class="mt-12 w-5/6">
	<div class="p-5 bg-black bg-opacity-30 rounded-xl flex place-items-center flex-col">
		<h2>Submissions</h2>
		<a href="submit" class="underline hover:text-important focus:text-important">
			Click here to submit your project!
		</a>
		<hr class="mx-auto h-px my-8 bg-gray-200 border-0 dark:bg-gray-70 w-9/12" />
		<div class="self-start">
			<h4>ℹ Notice: Work on world generation first!</h4>
			<span>
				For mods that intend on including world generation, we STRONGLY recommend you work on that
				first (or as soon as possible) so that it can be tested and generated when we set up the
				server and pack. The remainder of content can be added later on if required.
			</span>
		</div>
	</div>
</section>

<section id="sponsors" class="text-center">
	<h2>Sponsors</h2>
	<p class="block">
		WinterJam 2024 is sponsored by
		<ExternalLink class="font-bold text-important" href="https://curseforge.com">
			CurseForge
		</ExternalLink>
		for graciously providing us with prizes for this event,
		<ExternalLink class="font-bold text-important" href="https://tophatcat.dev">
			KiriCattus
		</ExternalLink>
		for running the event and providing servers to run the WinterJam modpack,
		and
		<ExternalLink class="font-bold text-important" href="https://shinhanox.art">
			ShinhaNox
		</ExternalLink>
		for providing us with our amazing WinterJam banner and icon!
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
