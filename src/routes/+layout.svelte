<script>
	import { Footer, FooterIcon, NavLi, Dropdown, DropdownItem } from 'flowbite-svelte';
	import { ChevronDownOutline, HeartSolid, GithubSolid, DiscordSolid, MoonSolid } from 'flowbite-svelte-icons';
	import '@fontsource/press-start-2p';
	import '../app.postcss';
	import { page } from '$app/stores';
	import SnowParticles from '$components/fx/SnowParticles.svelte';
	import Navbar from '$components/Navbar.svelte';
	import ExternalLink from '$components/ExternalLink.svelte';

	$: activeUrl = $page.url.pathname;

	const years = ['2024', '2023', '2022', '2021', '2020', '2019', '2018'];
	const newsYears = ['2024', '2023'];
	const currentYear = new Date().getFullYear();
</script>

<div class="h-full min-h-screen from-sky-500 bg-gradient-to-t to-sky-300 -z-10 pb-24">
	<SnowParticles class="fixed md:block" />
	<div class="container relative mx-auto">
		<Navbar {activeUrl}>
			<NavLi href="/">Home</NavLi>
			<NavLi href="/rules">Rules</NavLi>
			<NavLi href="/faq">FAQ</NavLi>
			<!-- <NavLi href="/jams/2025/submit">Submit a Project</NavLi> -->
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
			<ExternalLink class="text-xl" href="https://bsky.app/profile/tophatcat.dev">Bluesky</ExternalLink>
		</Navbar>
		<main class="w-11/12 mx-auto lg:w-3/4">
			<slot />
		</main>
		<Footer class="p-5 bg-black bg-opacity-30 rounded-xl">
			<div class="sm:flex sm:items-center sm:justify-between">
				<p class="mb-2 text-lg">
					Made with <HeartSolid class="inline-block w-5 h-5 text-green-600 mb-1" /> by the WinterJam Team.
				</p>
				<p class="mb-2 text-lg">
					&copy; 2018 - {currentYear} WinterJam - All rights reserved
				</p>
			</div>
			<div class="mt-4 flex space-x-6 sm:mt-0 sm:justify-center rtl:space-x-reverse">
				<FooterIcon href="https://discord.tophatcat.dev">
					<DiscordSolid class="h-6 w-6 text-white hover:text-gray-700" />
				</FooterIcon>
				<FooterIcon href="https://bsky.app/profile/tophatcat.dev">
					<MoonSolid class="h-6 w-6 text-white hover:text-gray-700" />
				</FooterIcon>
				<FooterIcon href="https://github.com/kiricattus/winterjam-site">
					<GithubSolid class="h-6 w-6 text-white hover:text-gray-700" />
				</FooterIcon>
			</div>
		</Footer>
	</div>
</div>
