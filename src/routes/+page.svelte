<script>
	import Meta from '$components/Meta.svelte';
	import Countdown from '$components/Countdown.svelte';

	const jamStartDate = new Date('2023-12-01T00:00:00Z');

	const jamEndDate = new Date('2024-01-01T00:00:00Z');

	const now = new Date();

	const diff = jamStartDate.getTime() - now.getTime();
	const days = Math.floor(diff / (1000 * 60 * 60 * 24));

	const endDiff = jamEndDate.getTime() - now.getTime();
	const endDays = Math.floor(endDiff / (1000 * 60 * 60 * 24));
</script>

<Meta title="Home" />

<header class="w-full md:w-10/12 lg:w-3/4 m-auto pb-12">
	<enhanced:img src="$assets/images/banner_large.png" alt="WinterJam Banner" class="md:pb-12" />
	<h1 class="block w-full">Welcome to WinterJam!</h1>
</header>

<section
	id="timers"
	class="w-full md:w-10/12 lg:w-3/4 m-auto flex flex-col rounded-xl bg-opacity-30 bg-black items-center align-middle gap-4 p-5 mb-8"
>
	<!-- TODO make this work reactively -->
	{#if diff > 0}
		<Countdown date={jamStartDate} class="m-auto" />
		<p class="text-2xl font-blocky m-0">
			WinterJam 2023 starts {days === 0 ? 'today' : `in ${days} ${days === 1 ? 'day' : 'days'}`}!
		</p>
	{:else if endDiff > 0}
		<Countdown date={jamEndDate} class="m-auto" />
		<p class="text-2xl font-blocky m-0">
			WinterJam 2023 ends {endDays === 0
				? 'today'
				: `in ${endDays} ${endDays === 1 ? 'day' : 'days'}`}!
		</p>
	{/if}
</section>

<section id="temp-23-link" class="flex items-center mb-8">
	<a href="/jams/2023" class="group m-auto" tabindex="0">
		<p class="text-2xl font-blocky text-sky-950 hover:text-important group-focus:text-important m-0">&gt;&gt; CLICK HERE FOR MORE DETAILS! &lt;&lt;</p>
	</a>
</section>

<!-- <section id="news">
	<h2 class="text-5xl font-blocky text-left">News</h2>
	<div>a</div>
</section> -->

<section id="info">
	<p class="text-justify text-3xl">
		This is the annual winter celebration for the modded Minecraft community. During winter we host
		a mod jam where members of the community are encouraged to create new mods that fit the seasonal
		theme. Participants are encouraged to collaborate, explore new skills, and challenge themselves.
		During WinterJam we also host Minecraft servers where anyone can join and check out the mod
		submissions.
	</p>
</section>
