<script lang="ts">
	import { Checkbox, Label, Input, Helper, Textarea } from 'flowbite-svelte';
	import { LinkOutline, DiscordSolid, LabelSolid, CodeBranchOutline } from 'flowbite-svelte-icons';
    import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<h1>Submit an Entry</h1>

{#if form?.success}
	<div class="mt-32 text-center">
		<h1>Thank you!</h1>
		<h2>Your Entry has been recorded and will be reviewed by our team.</h2>
		<a href="/" class="text-xl underline hover:text-important focus:text-important">
			Click here to go back to the Homepage
		</a>
	</div>
{:else}
	<form
        method="post"
		class="flex flex-col gap-2 p-5 bg-black/10 text-primary rounded-xl"
        use:enhance
	>
		<div>
			<Label for="project-name" color={undefined}>
				Project Name&nbsp;<span class="text-xs text-red-500 font-blocky">&ast;</span>
			</Label>
			<Input id="project-name" name="name" maxlength={256} required class="ps-8">
				{#snippet left()}
					<LabelSolid class="w-5 h-5 text-xl" />
				{/snippet}
			</Input>
			<Helper>
				<span class="text-primary"> What is the name of your project?</span>
			</Helper>
		</div>
		<div>
			<Label for="project-url" color={undefined}>
				Project URL&nbsp;<span class="text-xs text-red-500 font-blocky">&ast;</span>
			</Label>
			<Input id="project-url" name="url" type="url" maxlength={256} required class="ps-8">
				{#snippet left()}
					<LinkOutline class="w-5 h-5 text-xl" />
				{/snippet}
			</Input>
			<Helper>
				<span class="text-primary">
					Please provide a link to your CurseForge or Modrinth project page.
				</span>
			</Helper>
		</div>
		<div>
			<Label for="project-source" color={undefined}>
                SourceCode URL&nbsp;<span class="text-xs text-red-500 font-blocky">&ast;</span>
            </Label>
			<Input id="project-source" name="source" type="url" maxlength={256} required class="ps-8">
				{#snippet left()}
					<CodeBranchOutline class="w-5 h-5 text-xl" />
				{/snippet}
			</Input>
			<Helper>
				<span class="text-primary">
					Provide a link to where we can find the source code of your project. (GitHub, GitLab, ...)
				</span>
			</Helper>
		</div>
		<div>
			<Label for="project-contact" color={undefined}>
				Primary Contact&nbsp;<span class="text-xs text-red-500 font-blocky">&ast;</span>
			</Label>
			<Input id="project-contact" name="contact" maxlength={256} required class="ps-8">
				{#snippet left()}
					<DiscordSolid class="w-5 h-5 text-xl" />
				{/snippet}
			</Input>
			<Helper>
				<span class="text-primary">
					Who is the primary contact for this project? (Please provide your Discord username, not
					display name!)
				</span>
			</Helper>
		</div>
		<div>
			<Label for="team-members" color={undefined}>Team Members</Label>
			<Input id="team-members" name="members" maxlength={256} class="ps-8">
				{#snippet left()}
					<DiscordSolid class="w-5 h-5 text-xl" />
				{/snippet}
			</Input>
			<Helper>
				<span class="text-primary">
					Who else worked on this submission? (please provide Discord usernames, not display names!)
				</span>
			</Helper>
		</div>
		<div class="mt-5">
			<Checkbox id="modpack-permission" color="yellow" name="modpack-permission" required checked={false}>
				<span class="font-bold text-primary">
					Redistribution Permission&nbsp;<span class="text-xs text-red-500 font-blocky">&ast;</span>
				</span>
			</Checkbox>
			<span class="text-xl font-bold">
				I give the WinterJam organizers permission to include and redistribute my submission as part
				of their current and future events.
			</span>
		</div>
		<div class="mt-12 w-full flex flex-col">
			<Label for="feedback" color={undefined}>Feedback</Label>
			<Textarea id="feedback" name="feedback" rows={4} maxlength={1024} placeholder="Leave feedback for the event..." class="w-full" />
			<Helper>
				<span class="text-primary">(optional, but appreciated!)</span>
			</Helper>
		</div>

		<div class="m-auto">
			<button
				type="submit"
				class="px-8 py-3 text-3xl font-bold rounded-lg bg-important font-blocky hover:text-blue-400 hover:bg-primary focus:bg-primary focus:text-blue-400"
			>
				Submit
			</button>
		</div>
	</form>
{/if}
