<script lang="ts">
	import ExternalLink from '$components/ExternalLink.svelte';
	import Sponsor from '$components/Sponsor.svelte';

    import logoCurseForge from '$assets/sponsors/curseforge/anvil-square.png?enhanced';
	import logoYaBoiChips from '$assets/sponsors/yaboichips/yaboichips.png?enhanced';
    import logoYungNickYoung from '$assets/sponsors/yungnickyoung/yungnickyoung.png?enhanced';
	import logoKiriCattus from '$assets/sponsors/kiricattus/cat.png?enhanced';
	import type { PageData } from './$types';
	import ModEntry from '$components/ModEntry.svelte';
	import { InfoCircleOutline } from 'flowbite-svelte-icons';

	const sponsors = [
        {
			name: 'CurseForge',
			logo: logoCurseForge,
			href: 'https://twitter.com/curseforge',
			description:
				'Hey, we are CurseForge by Overwolf, your home for mods, addons, CC, and fun. Let the modding begin!'
		},
		{
			name: 'YaBoiChips',
			logo: logoYaBoiChips,
			href: 'https://twitter.com/yaboichips1',
			description:
				'Minecraft and Smash Ultimate enthusiast, mod developer and content creator. Creator of the mods Charms and Soap.'
		},
		{
			name: 'YungNickYoung',
			logo: logoYungNickYoung,
			href: 'https://twitter.com/YungNickYoung',
			description:
				"Professional Minecraft modder & content creator w/ 400M downloads. Founder of Refresh Studios."
		},
		{
			name: 'KiriCattus',
			logo: logoKiriCattus,
			href: 'https://tophatcat.dev',
			description:
				'I made a thing. It broke... I made another thing. Why is it working!?!? I help run Winterjam, a Discord community and other modding events.'
		}
	];
	export let data: PageData;
</script>

<section id="intro">
	<div class="bg-blue-400 text-blue-50 rounded-lg p-5 flex flex-row w-11/12 lg:w-4/6 m-auto items-center">
		<InfoCircleOutline class="w-16 h-16 mr-5 text-blue-100" />
		<p class="text-justify inline-block">
			WinterJam 2021 has concluded! Thank you all for joining in the fun and I look forward to the creations you make next year!
		</p>
	</div>
</section>

<section id="entries">
	<h2>Entries</h2>
	<ul class="m-auto mt-8 w-full flex flex-col items-center justify-center">
		{#each data.mods as mod, i}
			<li class="min-h-max">
				<ModEntry data={mod} />
			</li>
		{/each}
	</ul>
</section>

<section id="sponsors" class="text-center">
	<h2>Sponsors</h2>
	<p class="block">
		WinterJam 2021 is sponsored by
		<ExternalLink class="font-bold text-important" href="https://curseforge.com">
			Curseforge
		</ExternalLink>,
        <ExternalLink class="font-bold text-important" href="https://twitter.com/yaboichips1">
			YaBoiChips
		</ExternalLink>,
        and
        <ExternalLink class="font-bold text-important" href="https://twitter.com/YungNickYoung">
			YungNickYoung
		</ExternalLink>
		for graciously providing us with our prize pool for this event! And
		<ExternalLink class="font-bold text-important" href="https://tophatcat.dev">
            KiriCattus
		</ExternalLink>
		for hosting and organising the event and servers.
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
