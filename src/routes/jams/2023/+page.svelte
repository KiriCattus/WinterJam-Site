<script lang="ts">
	import { InfoCircleOutline, DownloadOutline } from "flowbite-svelte-icons";
	import ExternalLink from '$components/ExternalLink.svelte';
	import Sponsor from '$components/Sponsor.svelte';

	import logoRoyalFaery from '$assets/sponsors/royalfaery/carrot.png?enhanced';
	import logoKiriCattus from '$assets/sponsors/kiricattus/cat.png?enhanced';
	import logoUp from '$assets/sponsors/up/up.png?enhanced';
	import logoCurle from '$assets/sponsors/curle/bolbmas.png?enhanced';
	import ModEntry from '$components/ModEntry.svelte';
	import type { PageData } from './$types';

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

<section id="intro">
	<div class="bg-blue-400 text-blue-50 rounded-lg p-5 flex flex-row w-11/12 lg:w-4/6 m-auto items-center">
		<InfoCircleOutline class="w-16 h-16 mr-5 text-blue-100" />
		<p class="text-justify inline-block text-xl font-blocky">
			WinterJam 2023 is now over! Thank you all for participating!
		</p>
	</div>
</section>

<section id="info" class="mt-12">
	<div class="p-5 bg-black bg-opacity-30 rounded-xl flex flex-col gap-4">
		<h4><DownloadOutline class="inline w-8 h-8 mb-1 mr-2" />ModPack and World Downloads</h4>
		<span>
			You can find the WinterJam 2023 Modpack on <ExternalLink href={data.winterjamPack.url} class="underline">CurseForge</ExternalLink>
		</span>
		<span>
			<ExternalLink href="/jams/2023/world-download" class="underline">Click here to download the world file</ExternalLink> (282 MB)
		</span>
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
