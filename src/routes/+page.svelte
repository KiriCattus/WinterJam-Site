<script lang="ts">
	import Countdown from '$components/Countdown.svelte';
	import ExternalLink from '$components/ExternalLink.svelte';
	import Meta from '$components/Meta.svelte';
	import { Tooltip } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

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

<section id="info" class="p-5 bg-black bg-opacity-30 rounded-xl">
	<p class="text-2xl text-justify">
		WinterJam is the annual winter celebration for the game modding community. During winter we host
		a mod jam where members of the community are encouraged to create new mods that fit the seasonal
		theme. Participants are encouraged to collaborate, explore new skills, and challenge themselves!
	</p>
</section>

<section id="news" class="p-5 bg-black bg-opacity-30 rounded-xl">
	<h2 class="pb-5 mb-4 text-6xl text-left underline font-blocky">News</h2>
	<div class="flex flex-col gap-4">
		<article>
			<h3 class="mb-0 text-2xl text-left underline font-blocky">
				2026-01-15 &ast; WinterJam 2025 has ended!
			</h3>
			<p class="text-xl text-justify">
				For those who participated in WinterJam 2025, we want to extend a huge thank you for for joining us this year!
				We had an amazing time seeing all the incredible mods created during the jam, and we hope you did too!
				We will attempt to contact participants regarding prizes over the next week via Discord so please keep an eye out for a ping from Kiri.
				Thank you all once again for joining us this year, and we hope to see you again for WinterJam 2026 &lt;3
			</p>
			<h3 class="mb-0 text-2xl text-left underline font-blocky">
				2026-01-13 &ast; Pack Release Announcement!
			</h3>
			<p class="text-xl text-justify">
				Now that the submissions have been collected and reviewed, we are excited to announce that the WinterJam 2025 modpack is live!
			  				You can download the modpack from <ExternalLink href="https://www.curseforge.com/minecraft/modpacks/winterjam-2025" class="underline">CurseForge</ExternalLink>
				and join the official WinterJam 2025 server to experience all the amazing mods created during this year's jam!
			Once the server closes down, we will be releasing the world save for anyone to use whenever they want!
			</p>
		</article>
		<article>
			<h3 class="mb-0 text-2xl text-left underline font-blocky">
				2025-12-25 &ast; New Sponsor Announcement!
			</h3>
			<p class="text-xl text-justify">
				We are excited to announce that <ExternalLink href="https://curseforge.com" class="underline">CurseForge</ExternalLink>
				have graciously offered to sponsor WinterJam 2025! All valid submissions will receive an exclusive
				WinterJam x CurseForge 2025 shirt! (Where the shipping company permits &ast;)
				Details for how to apply for the reward will be announced at a later date,
				but for now please enjoy the rest of the jam and remember to thank CurseForge for sponsoring the prize pool this year!
			</p>
		</article>
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
			</p>
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
