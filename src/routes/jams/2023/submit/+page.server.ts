import { error } from '@sveltejs/kit';
import type { Actions } from './$types';
import type { SubmissionRequest } from '$lib/submissions';
import submissions from '$lib/server/submissions';

function err(propertyName: string): string {
	throw error(400, `Missing ${propertyName}`);
}

function getField(data: FormData, name: string, required = true, maxLength = 256): string | undefined {
	const value = data.get(name);
	if (required && !value) {
		throw error(400, `Missing ${name}`);
	}
	if (value && typeof value !== 'string') {
		throw error(400, `Invalid ${name}`);
	}
	if (value && value.length > maxLength) {
		throw error(400, `Invalid ${name}`);
	}
	return value as string;
}

export const actions = {
	default: async (event) => {
		const now = new Date();

		const jamEndDate = new Date('2024-01-01T00:00:00Z');

		if (now > jamEndDate) {
			throw error(401, 'Jam has ended');
		}

		const data = await event.request.formData();

		const submission: SubmissionRequest = {
			year: 2023,
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
			throw error(400, 'Feedback must be less than 1024 characters');
		}

		await submissions.putSubmission(submission, event.url.origin);

		return {
			success: true,
		}
	},
} satisfies Actions;
