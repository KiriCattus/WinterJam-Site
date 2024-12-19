<script lang="ts">
	import ModEntry from '$components/ModEntry.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section id="entries">
	<h2>Entries</h2>
	<ul class="flex flex-col items-center justify-center w-full m-auto mt-8">
		{#each data.mods as mod}
			<li class="min-h-max">
				<ModEntry data={mod} />
			</li>
		{/each}
	</ul>
</section>
