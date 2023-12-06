<script>
	import Meta from '$components/Meta.svelte';
	import Countdown from '$components/Countdown.svelte';
	import ExternalLink from '$components/ExternalLink.svelte';

	const jamStartDate = new Date('2023-12-01T00:00:00Z');

	const jamEndDate = new Date('2024-01-01T00:00:00Z');

	const now = new Date();

	const diff = jamStartDate.getTime() - now.getTime();
	const days = Math.floor(diff / (1000 * 60 * 60 * 24));

	const endDiff = jamEndDate.getTime() - now.getTime();
	const endDays = Math.floor(endDiff / (1000 * 60 * 60 * 24));
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

<section id="temp-23-link" class="flex items-center my-16">
	<a href="/jams/2023" class="m-auto group" tabindex="0">
		<p class="m-0 text-2xl font-blocky text-sky-950 hover:text-important group-focus:text-important">&gt;&gt; CLICK HERE FOR MORE DETAILS! &lt;&lt;</p>
	</a>
</section>

<section id="info" class="p-5 bg-black bg-opacity-10 rounded-xl">
	<p class="text-3xl text-justify">
		This is the annual winter celebration for the modded Minecraft community. During winter we host
		a mod jam where members of the community are encouraged to create new mods that fit the seasonal
		theme. Participants are encouraged to collaborate, explore new skills, and challenge themselves.
		During WinterJam we also host Minecraft servers where anyone can join and check out the mod
		submissions.
	</p>
</section>

<section id="news" class="p-5 bg-black bg-opacity-10 rounded-xl">
	<h2 class="text-5xl text-left font-blocky">News</h2>
	<div class="flex flex-col gap-4">
		<article>
			<h3 class="mb-0 text-2xl text-left underline font-blocky">2023-12-06 &ast; Rule Update</h3>
			<p class="text-xl text-justify">
				We have updated the <ExternalLink href="/rules" class="underline" target="_self">rules</ExternalLink> to allow submissions that have been created before the event,
				so long as they have new features added that fit the overall event themes.
				Also, the existing content must not overshadow other submissions that were made during the event.
		</article>
		<!-- <article>
			<h3 class="mb-0 text-2xl text-left underline font-blocky">2023-12-06 &ast; Rule Update</h3>
			<p class="text-xl text-justify">
				We have updated the <ExternalLink href="/rules" class="underline">rules</ExternalLink> to allow submissions that have been created before the event, so long as they have new features added that fit overall event themes. Also, the existing content must not overshadow other submissions that were made during the event.
		</article> -->
	</div>
</section>
