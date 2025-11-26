<script>
	import { NavLi, Dropdown, DropdownItem } from 'flowbite-svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';
	import '@fontsource/press-start-2p';
	import '../app.postcss';
	import { page } from '$app/stores';
	import SnowParticles from '$components/fx/SnowParticles.svelte';
	import Navbar from '$components/Navbar.svelte';
	import ExternalLink from '$components/ExternalLink.svelte';

	$: activeUrl = $page.url.pathname;

	const years = ['2024', '2023', '2022', '2021', '2020', '2019', '2018'];
	const newsYears = ['2024', '2023'];
</script>

<div class="h-full min-h-screen from-sky-500 bg-gradient-to-t to-sky-300 -z-10 pb-24">
	<SnowParticles class="fixed md:block" />
	<div class="container relative mx-auto">
		<Navbar {activeUrl}>
			<NavLi href="/">Home</NavLi>
			<NavLi class="cursor-pointer">
				News<ChevronDownOutline class="inline w-3 h-3 ml-2 text-primary-800 dark:text-white" />
			</NavLi>
			<Dropdown class="pt-2 rounded-md bg-slate-700 w-44" rounded color="primary" {activeUrl}>
				{#each newsYears as nYear}
					<DropdownItem
						defaultClass="text-center text-xl text-primary hover:text-important hover:underline focus:text-important focus:underline"
						activeClass="underline text-center text-xl text-primary hover:text-important focus:text-important"
						href={`/news/${nYear}`}>
						{nYear} News
					</DropdownItem>
				{/each}
			</Dropdown>
			<NavLi href="/rules">Rules</NavLi>
			<NavLi href="/faq">FAQ</NavLi>
			<!-- <NavLi href="/jams/2024/submit">Submit a Project</NavLi> -->
			<NavLi class="cursor-pointer">
				Jams<ChevronDownOutline class="inline w-3 h-3 ml-2 text-primary-800 dark:text-white" />
			</NavLi>
			<Dropdown class="pt-2 rounded-md bg-slate-700 w-44" rounded color="primary" {activeUrl}>
				{#each years as year}
					<DropdownItem
						defaultClass="text-center text-xl text-primary hover:text-important hover:underline focus:text-important focus:underline"
						activeClass="underline text-center text-xl text-primary hover:text-important focus:text-important"
						href={`/jams/${year}`}
					>
						WinterJam {year}
					</DropdownItem>
				{/each}
			</Dropdown>
			<ExternalLink class="text-xl" href="/discord">Discord</ExternalLink>
		</Navbar>
		<main class="w-11/12 mx-auto lg:w-3/4">
			<slot />
		</main>
	</div>
</div>
