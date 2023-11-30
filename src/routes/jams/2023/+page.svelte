<script>
	import Countdown from '$components/Countdown.svelte';

	const jamStartDate = new Date('2023-12-01T00:00:00Z');

	const jamEndDate = new Date('2024-01-01T00:00:00Z');

	const now = new Date();

	const diff = jamStartDate.getTime() - now.getTime();
	const days = Math.floor(diff / (1000 * 60 * 60 * 24));

	const endDiff = jamEndDate.getTime() - now.getTime();
	const endDays = Math.floor(endDiff / (1000 * 60 * 60 * 24));
</script>

<h1>Work in Progress!</h1>
<h2>Check back later!</h2>

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

<section id="info" class="mt-12">
	<div class="p-5 bg-black bg-opacity-30 rounded-xl">
		<h4>ℹ Notice: Work on world generation first!</h4>
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
	<hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-70 w-9/12" />
	<div>
		<h2>FAQ</h2>
		<a href="/faq" class="underline hover:text-important focus:text-important">
			Click here for the FAQ
		</a>
	</div>
</section>
