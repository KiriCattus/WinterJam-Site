<script lang="ts">
	import ModEntry from '$components/ModEntry.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section id="info" class="mt-12 w-5/6">
	<div class="p-5 bg-black bg-opacity-30 rounded-xl flex place-items-center flex-col">
		<h2>Submissions</h2>
		<a href="submit" class="underline hover:text-important focus:text-important">
			Click here to submit your project!
		</a>
		<hr class="mx-auto h-px my-8 bg-gray-200 border-0 dark:bg-gray-70 w-9/12" />
		<div class="self-start">
			<h4>ℹ Notice: Work on world generation first!</h4>
			<span>
				For mods that intend on including world generation, we STRONGLY recommend you work on that
				first (or as soon as possible) so that it can be tested and generated when we set up the
				server and pack. The remainder of content can be added later on if required.
			</span>
		</div>
	</div>
</section>

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
