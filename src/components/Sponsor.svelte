<script lang="ts">
	import classNames from 'classnames';
import { Card } from 'flowbite-svelte';

	export let name: string;
	export let logo: string | undefined = undefined;
	export let href: string | undefined = undefined;
	export let target: string | undefined = '_blank';
	export let rel: string | undefined = 'noopener noreferrer';
    export let reverse: boolean = true;
</script>

<Card {href} {target} {rel} title={name} horizontal>
	<div class={classNames("flex gap-4 min-w-max", reverse ? 'flex-row-reverse' : 'flex-row')}>
		<enhanced:img
			src={logo}
			alt={name}
			class="p-1 ring-2 ring-gray-300 dark:ring-gray-500 w-32 h-32 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded-full"
		/>
		<div class="max-w-sm flex items-center">
			<span class="inline-block text-center tracking-tight">
				<slot />
			</span>
		</div>
	</div>
</Card>

