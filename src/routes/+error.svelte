<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="self-center m-auto font-blocky">
    <h1>{$page.status}</h1>
    <h2>- {$page.error.message} -</h2>
    <hr class="my-8">
    <a class="hover:underline focus:underline hover:text-important focus:text-important" href="/"><h3>Click to go back to the Homepage</h3></a>
</div>
