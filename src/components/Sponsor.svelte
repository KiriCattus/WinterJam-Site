<script lang="ts">
	import classNames from 'classnames';

	export let name: string;
	export let logo: string | undefined = undefined;
	export let href: string | undefined = undefined;
	export let target: string | undefined = '_blank';
	export let rel: string | undefined = 'noopener noreferrer';
	export let reverse: boolean = true;
</script>

<a
	{href}
	{target}
	{rel}
	title={name}
	class={classNames(
		'bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-lg border border-gray-200 dark:border-gray-700 divide-gray-200 dark:divide-gray-700 shadow-md flex max-w-sm md:max-w-xl hover:bg-gray-100 dark:hover:bg-gray-700 mb-4 flex-col p-6 items-center gap-2',
		reverse ? 'md:flex-row-reverse' : 'md:flex-row'
	)}
>
	<enhanced:img
		src={logo}
		alt={name}
		class="p-1 ring-2 ring-gray-300 dark:ring-gray-500 w-32 h-32 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded-full m-auto"
		loading="lazy"
	/>
	<div class="max-w-sm flex items-center flex-col leading-tight">
		<h2 class="tracking-wide">{name}</h2>
		<span class="inline-block text-center tracking-tight">
			<slot />
		</span>
	</div>
</a>
