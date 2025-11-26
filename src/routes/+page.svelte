<script lang="ts">
	import Countdown from '$components/Countdown.svelte';
	import ExternalLink from '$components/ExternalLink.svelte';
	import Meta from '$components/Meta.svelte';
	import { Tooltip } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import { HeartSolid } from 'flowbite-svelte-icons';

	const jamStartDate = new Date('2024-12-20T00:00:00Z');
	const jamEndDate = new Date('2025-03-20T00:00:00Z');
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
			WinterJam 2024 starts {days === 0 ? 'today' : `in ${days} ${days === 1 ? 'day' : 'days'}`}!
		</p>
	{:else if endDiff > 0}
		<Countdown date={jamEndDate} class="m-auto" />
		<p class="m-0 text-2xl font-blocky">
			WinterJam 2024 ends {endDays === 0
				? 'today'
				: `in ${endDays} ${endDays === 1 ? 'day' : 'days'}`}!
		</p>
		<p class="text-2xl text-justify">
			(The submissions window closes on the 20th of March, please submit projects before this date)
		</p>
	{:else}
		<h1>WinterJam 2024 is now over!</h1>
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
				2025-11-25 &ast; Something chilly this way comes!
			</h3>
			<p class="text-xl text-justify">
				The weather seems to have taken a turn for the worst, better wrap up warm!
			</p>
		</article>
	</div>
</section>

<section id="temp-24-link" class="flex items-center">
	<a href="/jams/2024" class="m-auto group" tabindex="0">
		<p
			class="m-0 text-2xl font-blocky text-sky-950 hover:text-important group-focus:text-important"
		>
			&gt;&gt; CLICK HERE FOR MORE DETAILS! &lt;&lt;
		</p>
	</a>
</section>
