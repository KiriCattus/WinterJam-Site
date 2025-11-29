import submissions from '$lib/server/submissions';
import type { SubmissionRequest } from '$lib/submissions';
import { error, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

function getField(data: FormData, name: string, required = true, maxLength = 256): string | undefined {
	const value = data.get(name);
	if (required && !value) {
		error(400, `Missing ${name}`);
	}
	if (value && typeof value !== 'string') {
		error(400, `Invalid ${name}`);
	}
	if (value && value.length > maxLength) {
		error(400, `Invalid ${name}`);
	}
	return value as string;
}

export const actions = {
	default: async (event) => {
		const now = new Date();

		const jamEndDate = new Date('2025-03-20T00:00:00Z');

		if (now > jamEndDate) {
			error(401, 'The submissions window has passed.');
		}

		const data = await event.request.formData();

		const submission: SubmissionRequest = {
			year: 2024,
			name: getField(data, 'name')!,
			url: getField(data, 'url')!,
			source: getField(data, 'source')!,
			contact: getField(data, 'contact')!,
			teamMembers: getField(data, 'members', false),
			modpackPermission: getField(data, 'modpack-permission', true, 10)! === 'on',
			feedback: getField(data, 'feedback', false, 1024),
			time: now,
		}

		if (submission.feedback && submission.feedback.length >= 1024) {
			error(400, 'Feedback must be less than 1024 characters');
		}

		await submissions.putSubmission(submission, event.url.origin);

		return {
			success: true,
		}
	},
} satisfies Actions;

export const load: PageServerLoad = async () => {
	const now = Date.now();
	const jamEndDate = new Date('2025-03-20T00:00:00Z').getTime();

	if (now > jamEndDate) {
		redirect(303, '/');
	}
};
