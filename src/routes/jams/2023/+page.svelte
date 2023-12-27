<script lang="ts">
	import { onMount } from "svelte";
	import { InfoCircleSolid } from "flowbite-svelte-icons";
	import { Tooltip } from 'flowbite-svelte';
	import Countdown from '$components/Countdown.svelte';
	import ModEntry from '$components/ModEntry.svelte';
	import ExternalLink from '$components/ExternalLink.svelte';
	import type { PageData } from './$types';

	const jamStartDate = new Date('2023-12-01T00:00:00Z');

	const jamEndDate = new Date('2024-01-01T00:00:00Z');

	const now = new Date();

	const diff = jamStartDate.getTime() - now.getTime();
	const days = Math.floor(diff / (1000 * 60 * 60 * 24));

	const endDiff = jamEndDate.getTime() - now.getTime();
	const endDays = Math.floor(endDiff / (1000 * 60 * 60 * 24));

	$: jamStartDateLocal = "";
	$: jamEndDateLocal = "";

	onMount(() => {
		jamStartDateLocal = jamStartDate.toLocaleString();
		jamEndDateLocal = jamEndDate.toLocaleString();
	});

	export let data: PageData;
</script>

<section
	id="timers"
	class="flex flex-col items-center w-full gap-4 p-5 m-auto mb-8 align-middle bg-black md:w-10/12 lg:w-3/4 rounded-xl bg-opacity-30"
>
	<!-- TODO make this work reactively -->
	{#if diff > 0}
		<Countdown date={jamStartDate} class="m-auto" />
		<p class="m-0 text-2xl font-blocky">
			WinterJam 2023 starts {days === 0 ? 'today' : `in ${days} ${days === 1 ? 'day' : 'days'}`}!
		</p>
	{:else if endDiff > 0}
		<Countdown date={jamEndDate} class="m-auto" />
		<p class="m-0 text-2xl font-blocky">
			WinterJam 2023 ends {endDays === 0
				? 'today'
				: `in ${endDays} ${endDays === 1 ? 'day' : 'days'}`}!
		</p>
	{/if}
</section>
<Tooltip>{diff > 0 ? jamStartDateLocal : jamEndDateLocal}</Tooltip>

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

<section id="links" class="flex flex-col items-center text-3xl">
	<div class="m-5">
		<h2>Rules</h2>
		<a href="/rules" class="underline hover:text-important focus:text-important">
			Click here for the rules
		</a>
	</div>
	<div>
		<h2>FAQ</h2>
		<a href="/faq" class="underline hover:text-important focus:text-important">
			Click here for the FAQ
		</a>
	</div>
	<hr class="w-9/12 h-px my-8 bg-gray-200 border-0 dark:bg-gray-70" />
	<div class="m-5">
		<h2>Submit an Entry</h2>
		<a href="/jams/2023/submit" class="underline hover:text-important focus:text-important">
			Click here to open the submission form
		</a>
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