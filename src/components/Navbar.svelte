<script>
	import classNames from 'classnames';
	import { Navbar, NavBrand, NavUl, NavHamburger } from 'flowbite-svelte';

	export let activeUrl = '';

	const textClasses =
		'font-bold text-primary text-xl hover:underline focus:underline hover:text-important focus:text-important';
</script>

<Navbar color="none">
	<NavBrand href="/">
		<enhanced:img
			src="$assets/images/snowman_head.png"
			alt="WinterJam Snowman Head Logo"
			class="w-12 h-12"
		/>
	</NavBrand>
	<NavHamburger />
	<NavUl
		bind:activeUrl
		activeClass={classNames(textClasses, 'underline')}
		nonActiveClass={textClasses}
	>
		<slot />
	</NavUl>
</Navbar>
