<script>
	import { onMount } from "svelte";
	import { InfoCircleSolid } from "flowbite-svelte-icons";
	import { Tooltip } from 'flowbite-svelte';
	import Countdown from '$components/Countdown.svelte';

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
</script>

<h1>Work in Progress!</h1>
<h2>Check back later!</h2>

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
		<h4><InfoCircleSolid class="inline w-8 h-8 mb-1 mr-1 text-blue-500 rounded-full bg-primary" /> Notice: Work on world generation first!</h4>
		<span>
			For mods that intend on including world generation, we STRONGLY recommend you work on that
			first (or as soon as possible) so that it can be tested and generated when we set up the
			server and pack. The remainder of content can be added later on if required.
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
