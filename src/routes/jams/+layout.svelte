<script lang="ts">
	import { page } from '$app/stores';
	import Meta from '$components/Meta.svelte';

    $: path = $page.url.pathname;
    $: year = path.match(/\/jams\/(\d+)/)?.[1] ?? '2023';
</script>

<Meta title={`WinterJam ${year}`} />
<header class="w-full md:w-10/12 lg:w-3/4 m-auto mb-4 mt-8">
	<h1 class="font-blocky block w-full">WinterJam {year}</h1>
</header>

<slot />
