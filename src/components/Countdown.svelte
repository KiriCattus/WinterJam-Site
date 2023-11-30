<script lang="ts">
	import { onMount } from "svelte";
    import classNames from "classnames";

	export let date: Date;

    let className: string | undefined = undefined;
    export { className as class };

	const now = new Date();

	$: diff = date.getTime() - now.getTime();

	$: days = Math.floor(diff / (1000 * 60 * 60 * 24));

	$: hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

	$: minutes = Math.floor((diff / (1000 * 60)) % 60);

	$: seconds = Math.floor((diff / 1000) % 60);

    onMount(() => {
        setInterval(() => {
            const now = new Date();
            diff = date.getTime() - now.getTime();
        }, 1000);
    });
</script>

<div class={classNames("grid grid-flow-col gap-5 text-center auto-cols-max", className)}>
	<div class="flex flex-col">
		<span class="countdown font-mono text-5xl">
			<span>{`${days}`.padStart(2, '0')}</span>
		</span>
		{days === 1 ? 'day' : 'days'}
	</div>
	<div class="flex flex-col">
		<span class="countdown font-mono text-5xl">
			<span>{`${hours}`.padStart(2, '0')}</span>
		</span>
		{hours === 1 ? 'hour' : 'hours'}
	</div>
	<div class="flex flex-col">
		<span class="countdown font-mono text-5xl">
			<span>{`${minutes}`.padStart(2, '0')}</span>
		</span>
		min
	</div>
	<div class="flex flex-col">
		<span class="countdown font-mono text-5xl">
			<span>{`${seconds}`.padStart(2, '0')}</span>
		</span>
		sec
	</div>
</div>


