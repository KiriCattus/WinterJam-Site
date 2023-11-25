<script lang="ts">
	import type { ModData } from "$lib/mods";
	import type { ModSubmission } from "$lib/submissions";
    import humanFormat from "human-format";

    export let data: ModSubmission;
    const mod: ModData = data.mod!;

    const formattedDownloads = humanFormat(mod.downloads, {
        maxDecimals: 1,
        separator: '',
    });
</script>

<a
	href={mod.url}
	target="_blank"
	rel="noopener noreferrer"
	title={mod.name}
	class="bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-lg border border-gray-200 dark:border-gray-700 divide-gray-200 dark:divide-gray-700 shadow-md flex max-w-sm md:max-w-xl hover:bg-gray-100 dark:hover:bg-gray-700 mb-4 flex-col p-6 items-center gap-2 md:flex-row"
>
	<img
		src={mod.logoUrl}
		alt={`${mod.name} logo`}
		class="p-1 ring-2 ring-gray-300 dark:ring-gray-500 w-32 h-32 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded-full m-auto"
		loading="lazy"
        width={mod.logoSize}
        height={mod.logoSize}
	/>
	<div class="max-w-sm flex items-center flex-col leading-tight">
		<h2 class="tracking-wide">{mod.name}</h2>
		<span class="inline-block text-center tracking-tight">
			{mod.summary}
            <br>
            ({formattedDownloads} Downloads)
		</span>
	</div>
</a>

<!-- <div id={`${mod.platform}-${mod.modId}`} class="m-auto">
    
    <img src={mod.logoUrl} alt={`${mod.name} logo`} width="128" height="128" class="w-32 h-32">
    <h2>{mod.name}</h2>
    <p>{mod.summary}</p>
</div> -->

