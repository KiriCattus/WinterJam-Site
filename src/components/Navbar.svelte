<script>
	import { page } from '$app/stores';
	import classNames from 'classnames';
	import { Navbar, NavBrand, NavUl, NavHamburger } from 'flowbite-svelte';

	$: activeUrl = $page.url.pathname;

	const textClasses =
		'font-bold text-primary text-xl hover:underline focus:underline hover:text-important focus:text-important';
</script>

<Navbar color="none">
	<NavBrand href="/">
		<enhanced:img src="$assets/sponsors/mmd/logo-winter.png" alt="MMD Winter Logo" class="w-12 h-12" />
	</NavBrand>
	<NavHamburger />
	<NavUl
		{activeUrl}
		activeClass={classNames(textClasses, 'underline')}
		nonActiveClass={textClasses}
	>
		<slot />
	</NavUl>
</Navbar>
