<script>
    import ExternalLink from '$components/ExternalLink.svelte';
    import Meta from '$components/Meta.svelte';
    import { Tooltip } from 'flowbite-svelte';
</script>

<Meta title="2023 News" />

<header class="w-full pb-12 m-auto md:w-10/12 lg:w-3/4">
    <enhanced:img src="$assets/images/banner_large.png" alt="WinterJam Banner" class="md:pb-12" />
    <h2 class="block w-full">WinterJam 2023 News</h2>
</header>

<section id="news" class="p-5 bg-black/10 rounded-xl">
	<div class="flex flex-col gap-4">
        <article>
			<h3 class="mb-0 text-2xl text-left underline font-blocky">
				2024-01-27 &ast; Server Closed and World Download
			</h3>
			<p class="text-xl text-justify">
				We've had a lot of fun playing with all the submissions on the server, but all good things must come to an end.<br>
				The server has now been closed, and the world download is now available on the <ExternalLink
					href="/jams/2023"
					target="_self"
					class="underline">WinterJam 2023 page.</ExternalLink>
			</p>
		</article>
		<article>
			<h3 class="mb-0 text-2xl text-left underline font-blocky">
				2024-01-01 &ast; WinterJam 2023 has ended
			</h3>
			<p class="text-xl text-justify">
				WinterJam 2023 is now officially over! Thank you to all the participants, we hope you had fun!<br>
				There have been a total of <span class="text-important font-bold">23 entries</span> this year, which is amazing!<br>
				We will be keeping the Minecraft server open for a while longer, so you can keep playing on there.
			</p>
		</article>
		<article>
			<h3 class="mb-0 text-2xl text-left underline font-blocky">
				2023-12-24 &ast; Minecraft Server and Modpack
			</h3>
			<p class="text-xl text-justify">
				Just in time for Christmas Eve, it is finally time to release the submissions for 2023 into
				the wild!<br />
				The WinterJam 2023 modpack and server are now live, you can <ExternalLink
					href=https://www.curseforge.com/minecraft/modpacks/winterjam-2023
					class="underline">find the modpack on CurseForge</ExternalLink
				><br />
				<span class="text-important">
					If you want to join the WinterJam 2023 Minecraft server, you must be a part of our <ExternalLink
					href="/discord" class="underline">Discord Community</ExternalLink> to gain access.
				</span>
			</p>
		</article>
		<article>
			<h3 class="mb-0 text-2xl text-left underline font-blocky">
				2023-12-16 &ast; First submissions
			</h3>
			<p class="text-xl text-justify">
				This post is a bit late, seeing as the first submission was added right after we opened the
				submissions form.<br />
				But as of writing this, we have our first three submissions for WinterJam 2023! Check the <ExternalLink
					href="/jams/2023#entries"
					class="underline"
					target="_self">Jam Page</ExternalLink
				> to see them.<br />
				<span class="text-important"
					>Big shoutout to <ExternalLink href="https://www.curseforge.com/projects/426387" class="underline"
						>Workshops of Doom</ExternalLink
					> for participating in WinterJam for the <strong>THIRD TIME</strong> total!</span
				>
			</p>
		</article>
		<article>
			<h3 class="mb-0 text-2xl text-left underline font-blocky">
				2023-12-07 &ast; Submissions Form
			</h3>
			<p class="text-xl text-justify">
				The submissions form for WinterJam 2023 is now live!
				<ExternalLink href="/jams/2023/submit" class="underline" target="_self">Click here</ExternalLink> to submit your project.<br />
				Submissions will be open until
				<span class="p-2 text-xs underline bg-black/30 rounded-lg font-blocky">
                    2024-01-01 00:00 UTC
                </span>
                <Tooltip>{new Date("2024-01-01T00:00Z").toLocaleString()}</Tooltip>.
			</p>
		</article>
		<article>
			<h3 class="mb-0 text-2xl text-left underline font-blocky">2023-12-06 &ast; Rule Update</h3>
			<p class="text-xl text-justify">
				We have updated the <ExternalLink href="/rules" class="underline" target="_self">rules</ExternalLink
				> to allow submissions that have been created before the event, so long as they have new features
				added that fit the overall event themes. Also, the existing content must not overshadow other
				submissions that were made during the event.
			</p>
		</article>
    </div>
</section>