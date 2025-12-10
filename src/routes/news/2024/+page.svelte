<script>
    import ExternalLink from '$components/ExternalLink.svelte';
    import Meta from '$components/Meta.svelte';
    import { Tooltip } from 'flowbite-svelte';
</script>

<Meta title="2024 News" />

<header class="w-full pb-12 m-auto md:w-10/12 lg:w-3/4">
    <enhanced:img src="$assets/images/banner_large.png" alt="WinterJam Banner" class="md:pb-12" />
    <h2 class="block w-full">WinterJam 2024 News</h2>
</header>

<section id="news" class="p-5 bg-black bg-opacity-30 rounded-xl">
	<div class="flex flex-col gap-4">
        <article>
			<h3 class="mb-0 text-2xl text-left underline font-blocky">
				2025-04-20 &ast; The WinterJam 2024 server is now closed!
			</h3>
			<p class="text-xl text-justify">
				After a fantastic few months of fun, the WinterJam 2024 public server has now been closed.<br>
                We hope everyone had a great time playing and testing all the amazing mods that were submitted this year and hope to return again soon!<br>
                A huge thank you to everyone who participated, whether as a mod author, tester, or just a community member cheering everyone on!
			</p>
		</article>
        <article>
			<h3 class="mb-0 text-2xl text-left underline font-blocky">
				2025-03-20 &ast; WinterJam 2024 has ended
			</h3>
			<p class="text-xl text-justify">
				The submission period for WinterJam 2024 is now over, and we will be setting up the modpack and server soon.<br>
				Check back here in the coming days to claim your prizes as well!<br>
				We have had 19 projects submitted this year, which is quite a number for our small modjam! Thank you everyone! &lt;3
			</p>
		</article>
		<article>
			<h3 class="mb-0 text-2xl text-left underline font-blocky">
				2025-01-22 &ast; Surprise sponsorship announcement
			</h3>
			<p class="text-xl text-justify">
				We have some amazing news! CurseForge have VERY kindly reached out to sponsor WinterJam 2024! Please go and give them a HUGE thank you and check out <ExternalLink
					href="https://blog.curseforge.com/curseforge-january-newsletter-hogwarts-legacy-modding/"
					target="_self"
					class="underline">CurseForge.com</ExternalLink> and see all the amazing work they do for the community!
			</p>
		</article>
		<article>
			<h3 class="mb-0 text-2xl text-left underline font-blocky">
				2024-12-30 &ast; Minecraft version change!!!
			</h3>
			<p class="text-xl text-justify">
				Alert! Alert! After some community feedback and a vote, <span class="text-important font-bold">we have decided to revert to Minecraft 1.21.1</span> for WinterJam 2024.<br>
				This will hopefully let more users participate and give us a wider choice of mods for the upcoming pack in the next month or so, we hope we've made this change early enough to not greatly impact anyones work in progress submission, there shouldn't be any other major changes after this for now.
			</p>
		</article>
		<article>
			<h3 class="mb-0 text-2xl text-left underline font-blocky">
				2024-12-20 &ast; WinterJam 2024 has started!
			</h3>
			<p class="text-xl text-justify">
				WinterJam 2024 has officially begun!<br>
				The submissions form for WinterJam 2024 is now open,
				<ExternalLink href="/jams/2024/submit" class="underline" target="_self"
					>Click here</ExternalLink> to submit your project.<br>
				Submissions will be open until
				<span class="p-2 text-xs underline bg-black rounded-lg bg-opacity-30 font-blocky">2025-02-25 00:00 UTC</span>
				<Tooltip>{new Date("2025-02-25T00:00Z").toLocaleString()}</Tooltip>.
				<br>
				<span class="text-important font-bold">
					If you want to join WinterJam 2024, you must be a part of our <ExternalLink
					href="/discord" class="underline">Discord Community</ExternalLink>.
				</span>
			</p>
		</article>
		<article>
			<h3 class="mb-0 text-2xl text-left underline font-blocky">
				2024-12-19 &ast; WinterJam 2024 is coming!
			</h3>
			<p class="text-xl text-justify">
				WinterJam 2024 is (I was in work and forgot sorry!) just around the corner!<br>
				This year WinterJam will run from
				<span class="p-2 text-xs underline bg-black rounded-lg bg-opacity-30 font-blocky">2024-12-20 00:00 UTC</span>
				<Tooltip>{new Date("2024-12-20T00:00Z").toLocaleString()}</Tooltip>
				until
				<span class="p-2 text-xs underline bg-black rounded-lg bg-opacity-30 font-blocky">2025-03-20 00:00 UTC</span>
				<Tooltip>{new Date("2025-03-20T00:00Z").toLocaleString()}</Tooltip>.
				While the rules are mostly the same as last year we are bumping the
				<span class="text-important">Minecraft version to 1.21.1 and NeoForge is the loader of choice this time.</span>
				While the rest of the rules have mostly stayed the same we ask that you give yourself a refresher so you're up to date.
			</p>
		</article>
    </div>
</section>