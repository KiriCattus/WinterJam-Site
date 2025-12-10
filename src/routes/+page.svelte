<script lang="ts">
	import Countdown from '$components/Countdown.svelte';
	import ExternalLink from '$components/ExternalLink.svelte';
	import Meta from '$components/Meta.svelte';
	import { Tooltip } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import { HeartSolid } from 'flowbite-svelte-icons';

	const jamStartDate = new Date('2025-12-10T00:00:00Z');
	const jamEndDate = new Date('2026-01-07T00:00:00Z');
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

<Meta title="Home" />

<header class="w-full pb-12 m-auto md:w-10/12 lg:w-3/4">
	<enhanced:img src="$assets/images/banner_large.png" alt="WinterJam Banner" class="md:pb-12" />
	<h1 class="block w-full">Welcome to WinterJam!</h1>
</header>

<section
	id="timers"
	class="flex flex-col items-center w-full gap-4 p-5 m-auto mb-8 align-middle bg-black md:w-10/12 lg:w-3/4 rounded-xl bg-opacity-30"
>
	<!-- TODO make this work reactively -->
	{#if diff > 0}
		<Countdown date={jamStartDate} class="m-auto" />
		<p class="m-0 text-2xl font-blocky">
			WinterJam 2025 starts {days === 0 ? 'today' : `in ${days} ${days === 1 ? 'day' : 'days'}`}!
		</p>
	{:else if endDiff > 0}
		<Countdown date={jamEndDate} class="m-auto" />
		<p class="m-0 text-2xl font-blocky">
			WinterJam 2025 ends {endDays === 0
				? 'today'
				: `in ${endDays} ${endDays === 1 ? 'day' : 'days'}`}!
		</p>
		<p class="text-2xl text-justify">
			(The submissions window opens on December 20th 2025, and will close on January 7th 2026, please make sure to submit your projects before then ready for the pack and server to go live!)
		</p>
	{:else}
		<h1>WinterJam 2025 is now over!</h1>
	{/if}
</section>
<Tooltip>{diff > 0 ? jamStartDateLocal : jamEndDateLocal}</Tooltip>

<section id="info" class="p-5 bg-black bg-opacity-10 rounded-xl">
	<p class="text-2xl text-justify">
		This is the annual winter celebration for the modded Minecraft community. During winter we host
		a mod jam where members of the community are encouraged to create new mods that fit the seasonal
		theme. Participants are encouraged to collaborate, explore new skills, and challenge themselves.
		During WinterJam we also host Minecraft servers where anyone can join and check out the mod
		submissions.
	</p>
</section>

<section id="news" class="p-5 bg-black bg-opacity-10 rounded-xl">
	<h2 class="pb-5 mb-4 text-6xl text-left underline font-blocky">News</h2>
	<div class="flex flex-col gap-4">
		<article>
			<h3 class="mb-0 text-2xl text-left underline font-blocky">
				2025-12-9 &ast; Minecraft version announcement!
			</h3>
			<p class="text-xl text-justify">
				This time around after a small vote in the community, we have decided we will be targeting Minecraft version 
				<span class="p-2 text-xs underline bg-black rounded-lg bg-opacity-30 font-blocky">1.21.11</span>
				using NeoForge version 
				<span class="p-2 text-xs underline bg-black rounded-lg bg-opacity-30 font-blocky">21.11.0-beta</span>
				for WinterJam 2025! Get ready to start working on your submissions! 
				There was also a minor correction to the submission deadline on the rules page, please make sure to check when you can!
		</article>
		<article>
			<h3 class="mb-0 text-2xl text-left underline font-blocky">
				2025-12-1 &ast; WinterJam 2025 is coming!
			</h3>
			<p class="text-xl text-justify">
				It's almost time for WinterJam 2025! Start brainstorming ideas and get ready for another winter of fun and modding!
				WinterJam 2025 will run from 
				<span class="p-2 text-xs underline bg-black rounded-lg bg-opacity-30 font-blocky">2025-12-10 00:00 UTC</span>
				<Tooltip>{new Date("2025-12-10T00:00Z").toLocaleString()}</Tooltip>
				until 
				<span class="p-2 text-xs underline bg-black rounded-lg bg-opacity-30 font-blocky">2026-01-07 00:00 UTC</span>
				<Tooltip>{new Date("2026-01-07T00:00Z").toLocaleString()}</Tooltip>
				Stay tuned for more details about loader and the targeted Minecraft version!
			</p>
		</article>
		<article>
			<h3 class="mb-0 text-2xl text-left underline font-blocky">
				2025-11-25 &ast; Something chilly this way comes!
			</h3>
			<p class="text-xl text-justify">
				The weather seems to have taken a turn for the worst, better wrap up warm!
			</p>
		</article>
	</div>
</section>

<section id="temp-24-link" class="flex items-center">
	<a href="/jams/2025" class="m-auto group" tabindex="0">
		<p
			class="m-0 text-2xl font-blocky text-sky-950 hover:text-important group-focus:text-important"
		>
			&gt;&gt; CLICK HERE FOR MORE DETAILS! &lt;&lt;
		</p>
	</a>
</section>
<footer class="w-full mt-12 pt-6 pb-6 bg-black bg-opacity-10 rounded-xl">
	<div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
		<p class="m-0 text-lg">
			&copy; 2018 - 2025 WinterJam. Made with
			<HeartSolid class="inline-block w-5 h-5 text-red-600 mb-1" /> by the WinterJam team.
		</p>
		<nav class="mt-4 md:mt-0">
			<ExternalLink href="/">Home</ExternalLink>
			<ExternalLink href="/about">About</ExternalLink>
		</nav>
	</div>
</footer>