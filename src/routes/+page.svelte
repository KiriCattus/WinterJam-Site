<script lang="ts">
	import Countdown from '$components/Countdown.svelte';
	import ExternalLink from '$components/ExternalLink.svelte';
	import Meta from '$components/Meta.svelte';
	import { Tooltip } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

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
			(The submissions window closes on the 25th of February, please submit projects before this date)
		</p>
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
				2025-01-22 &ast; Surprise sponsorship announcement!!!
			</h3>
			<p class="text-xl text-justify">
				We have some amazing news! CurseForge have VERY kindly reached out to sponsor WinterJam 2024! Please go and give them a HUGE thank you and check out <ExternalLink
					href="https://blog.curseforge.com"
					target="_self"
					class="underline">CurseForge.com</ExternalLink> and see all the amazing work they do for the community!
			</p>
		</article>
		<article>
			<h3 class="mb-0 text-2xl text-left underline font-blocky">
				2024-12-30 &ast; Minecraft version change!!!
			</h3>
			<p class="text-xl text-justify">
				Alert! Alert! After some community feedback and a vote, <span class="text-important font-bold">we have decided to revert to Minecraft 1.21.1</span> for WinterJam 2024.<br>
				This will hopefully let more users participate and give us a wider choice of mods for the upcoming pack in the next month or so, we hope we've made this change early enough to not greatly impact anyones work in progress submission, there shouldn't be any other major changes after this for now.
			</p>
		</article>
		<article>
			<h3 class="mb-0 text-2xl text-left underline font-blocky">
				2024-12-20 &ast; WinterJam 2024 has started!
			</h3>
			<p class="text-xl text-justify">
				WinterJam 2024 has officially begun!<br>
				The submissions form for WinterJam 2024 is now open,
				<ExternalLink href="/jams/2024/submit" class="underline" target="_self"
					>Click here</ExternalLink> to submit your project.<br>
				Submissions will be open until
				<span class="p-2 text-xs underline bg-black rounded-lg bg-opacity-30 font-blocky">2025-02-25 00:00 UTC</span>
				<Tooltip>{new Date("2025-02-25T00:00Z").toLocaleString()}</Tooltip>.
				<br>
				<span class="text-important font-bold">
					If you want to join WinterJam 2024, you must be a part of our <ExternalLink
					href="/discord" class="underline">Discord Community</ExternalLink>.
				</span>
			</p>
		</article>
		<article>
			<h3 class="mb-0 text-2xl text-left underline font-blocky">
				2024-12-19 &ast; WinterJam 2024 is coming!
			</h3>
			<p class="text-xl text-justify">
				WinterJam 2024 is (I was in work and forgot sorry!) just around the corner!<br>
				This year WinterJam will run from
				<span class="p-2 text-xs underline bg-black rounded-lg bg-opacity-30 font-blocky">2024-12-20 00:00 UTC</span>
				<Tooltip>{new Date("2024-12-20T00:00Z").toLocaleString()}</Tooltip>
				until
				<span class="p-2 text-xs underline bg-black rounded-lg bg-opacity-30 font-blocky">2025-03-20 00:00 UTC</span>
				<Tooltip>{new Date("2025-03-20T00:00Z").toLocaleString()}</Tooltip>.
				While the rules are mostly the same as last year we are bumping the
				<span class="text-important">Minecraft version to 1.21.1 and NeoForge is the loader of choice this time.</span>
				While the rest of the rules have mostly stayed the same we ask that you give yourself a refresher so you're up to date.
			</p>
		</article>
		<article>
			<h3 class="mb-0 text-2xl text-left underline font-blocky">
				2024-01-27 &ast; Server Closed and World Download
			</h3>
			<p class="text-xl text-justify">
				We've had a lot of fun playing with all the submissions on the server, but all good things must come to an end.<br>
				The server has now been closed, and the world download is now available on the <ExternalLink
					href="/jams/2023"
					target="_self"
					class="underline">WinterJam 2023 page.</ExternalLink>
			</p>
		</article>
		<article>
			<h3 class="mb-0 text-2xl text-left underline font-blocky">
				2024-01-01 &ast; WinterJam 2023 has ended
			</h3>
			<p class="text-xl text-justify">
				WinterJam 2023 is now officially over! Thank you to all the participants, we hope you had fun!<br>
				There have been a total of <span class="text-important font-bold">{data.wj2023Entrties.length} entries</span> this year, which is amazing!<br>
				We will be keeping the Minecraft server open for a while longer, so you can keep playing on there.
			</p>
		</article>
		<article>
			<h3 class="mb-0 text-2xl text-left underline font-blocky">
				2023-12-24 &ast; Minecraft Server and Modpack
			</h3>
			<p class="text-xl text-justify">
				Just in time for Christmas Eve, it is finally time to release the submissions for 2023 into
				the wild!<br />
				The WinterJam 2023 modpack and server are now live, you can <ExternalLink
					href={data.winterjamPack.url}
					class="underline">find the modpack on CurseForge</ExternalLink
				><br />
				<span class="text-important">
					If you want to join the WinterJam 2023 Minecraft server, you must be a part of our <ExternalLink
					href="/discord" class="underline">Discord Community</ExternalLink> to gain access.
				</span>
			</p>
		</article>
		<article>
			<h3 class="mb-0 text-2xl text-left underline font-blocky">
				2023-12-16 &ast; First submissions
			</h3>
			<p class="text-xl text-justify">
				This post is a bit late, seeing as the first submission was added right after we opened the
				submissions form.<br />
				But as of writing this, we have our first three submissions for WinterJam 2023! Check the <ExternalLink
					href="/jams/2023#entries"
					class="underline"
					target="_self">Jam Page</ExternalLink
				> to see them.<br />
				<span class="text-important"
					>Big shoutout to <ExternalLink href={data.workshopsOfDoom.url} class="underline"
						>{data.workshopsOfDoom.name}</ExternalLink
					> for participating in WinterJam for the <strong>THIRD TIME</strong> total!</span
				>
			</p>
		</article>
		<article>
			<h3 class="mb-0 text-2xl text-left underline font-blocky">
				2023-12-07 &ast; Submissions Form
			</h3>
			<p class="text-xl text-justify">
				The submissions form for WinterJam 2023 is now live!
				<ExternalLink href="/jams/2023/submit" class="underline" target="_self"
					>Click here</ExternalLink
				> to submit your project.<br />
				Submissions will be open until
				<span class="p-2 text-xs underline bg-black rounded-lg bg-opacity-30 font-blocky"
					>2024-01-01 00:00 UTC</span
				><Tooltip>{new Date("2024-01-01T00:00Z").toLocaleString()}</Tooltip>.
			</p>
		</article>
		<article>
			<h3 class="mb-0 text-2xl text-left underline font-blocky">2023-12-06 &ast; Rule Update</h3>
			<p class="text-xl text-justify">
				We have updated the <ExternalLink href="/rules" class="underline" target="_self"
					>rules</ExternalLink
				> to allow submissions that have been created before the event, so long as they have new features
				added that fit the overall event themes. Also, the existing content must not overshadow other
				submissions that were made during the event.
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
