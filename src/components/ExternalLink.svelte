<script lang="ts">
	import classNames from 'classnames';
	export let href: string;
	export let target: string = '_blank';
	export let rel: string = 'noopener noreferrer';

	let className: string | undefined = undefined;
	export { className as class };
	export let noIcon: boolean = false;

	import { ArrowUpRightFromSquareOutline } from 'flowbite-svelte-icons';
</script>

<a
	{href}
	{target}
	{rel}
	class={classNames(
		'inline-flex items-center hover:underline focus:underline h-min hover:text-important focus:text-important',
		className
	)}
>
	<slot />
	{#if !noIcon}
		<ArrowUpRightFromSquareOutline class="w-4 h-4 ml-1" tabindex="-1" />
	{/if}
</a>
