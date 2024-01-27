<script lang="ts">
	import { InfoCircleOutline, DownloadOutline } from "flowbite-svelte-icons";
	import ModEntry from '$components/ModEntry.svelte';
	import ExternalLink from '$components/ExternalLink.svelte';
	import type { PageData } from './$types';

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
