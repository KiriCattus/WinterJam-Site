<script lang="ts">
	import type { PageData } from './$types';
	import ModEntry from '$components/ModEntry.svelte';
	import { InfoCircleOutline } from 'flowbite-svelte-icons';

	export let data: PageData;
</script>

<section id="intro">
	<div class="bg-blue-400 text-blue-50 rounded-lg p-5 flex flex-row w-11/12 lg:w-4/6 m-auto items-center">
		<InfoCircleOutline class="w-16 h-16 mr-5 text-blue-100" />
		<p class="text-justify inline-block">
			WinterJam 2020 has concluded! Thank you all for joining in the fun and I look forward to the creations you make next year!
		</p>
	</div>
</section>

<section id="entries">
	<h2>Entries</h2>
	<ul class="m-auto mt-8 w-full flex flex-col items-center justify-center">
		{#each data.mods as mod, i}
			<li class="min-h-max">
				<ModEntry data={mod} />
			</li>
		{/each}
	</ul>
</section>