<script lang="ts">
	import type { ModData } from '$lib/mods';
	import type { ModSubmission } from '$lib/submissions';
	import { Label } from 'flowbite-svelte';
	import humanFormat from 'human-format';

	export let data: ModSubmission;
	const mod: ModData = data.mod!;

	const formattedDownloads = humanFormat(mod.downloads, {
		maxDecimals: 1,
		separator: ''
	});
</script>

<a
	href={mod.url}
	target="_blank"
	rel="noopener noreferrer"
	title={mod.name}
	class="flex flex-col items-center max-w-sm gap-2 p-6 mb-4 text-gray-500 bg-white border border-gray-200 divide-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700 dark:divide-gray-700 md:max-w-xl hover:bg-gray-100 dark:hover:bg-gray-700 md:flex-row"
>
	<div class="relative flex items-center">
		<img
			src={mod.logoUrl}
			alt={`${mod.name} logo`}
			class="w-32 h-32 p-1 m-auto text-gray-600 bg-gray-100 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 dark:bg-gray-600 dark:text-gray-300"
			loading="lazy"
		/>
		{#if data.resubmission}
			<Label class="-top-2 text-xs absolute bg-sky-950 text-primary py-0.5 px-1 h-5 rounded-sm -left-20">Resubmission</Label>
		{/if}
	</div>

	<div class="flex flex-col items-center max-w-sm leading-tight">
		<h2 class="tracking-wide">{mod.name}</h2>
		<span class="inline-block tracking-tight text-center">
			{mod.summary}
			<br />
			({formattedDownloads} Downloads)
		</span>
	</div>
</a>

<!-- <div id={`${mod.platform}-${mod.modId}`} class="m-auto">
    
    <img src={mod.logoUrl} alt={`${mod.name} logo`} width="128" height="128" class="w-32 h-32">
    <h2>{mod.name}</h2>
    <p>{mod.summary}</p>
</div> -->
