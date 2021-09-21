import type { RequestHandler } from '@sveltejs/kit';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export const get: RequestHandler = async () => {
	return {
		body: `This is some text`,
		headers: {
			'Content-Type': 'text/plain'
		}
	};
};
