import { initBoard } from '$lib/board';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async () => {
	return {
		body: initBoard(),
		headers: {
			'Content-Type': 'application/json'
		}
	};
};
