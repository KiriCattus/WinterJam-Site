<script lang="ts">
	import { InfoCircleOutline, InfoCircleSolid } from "flowbite-svelte-icons";
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
	<div class="p-5 bg-black bg-opacity-30 rounded-xl">
		<h4><InfoCircleSolid class="inline w-8 h-8 mb-1 mr-1 text-blue-500 rounded-full bg-primary" />Notice: The Modpack and Minecraft Server are now live!</h4>
		<span>
			We've now opened the doors on our yearly Minecraft Server, and the Modpack is now <ExternalLink href={data.winterjamPack.url} class="underline">available for download on CurseForge!</ExternalLink><br>
			To join the server, you will need to be part of our <ExternalLink href="/discord" class="underline">Discord Community</ExternalLink> and whitelist yourself there.<br>
			<br>
			Also note that the server is running on Minecraft 1.20.1, Forge 47.1.3. If you want your submission to be playable on the server, you'll need to make sure it's compatible with that version.<br>
		</span>
	</div>
</section>

<section id="entries">
	<h2>Entries</h2>
	<ul class="flex flex-col items-center justify-center w-full m-auto mt-8">
		{#each data.mods as mod, i}
			<li class="min-h-max">
				<ModEntry data={mod} />
			</li>
		{/each}
	</ul>
</section>
