<script lang="ts">
	import type { ModData } from "$lib/mods";
	import type { ModSubmission } from "$lib/submissions";

    export let data: ModSubmission;
    const mod = data.mod!;
</script>

<div id={`${mod.platform}-${mod.modId}`}>
    <img src={mod.logoUrl} alt={`${mod.name} logo`} width="128" height="128" class="w-32 h-32">
    <h2>{mod.name}</h2>
    <p>{mod.summary}</p>
</div>

