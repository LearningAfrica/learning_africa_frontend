import { generateSignature } from "../utils/generateSignature";

export default defineEventHandler(async (event) => {
	const query = getQuery(event);
	console.log(typeof query.slug);
	if (typeof query.slug !== 'string') {
		throw createError({
			statusCode: 400,
			statusMessage: 'Add a session name as string',
		})
	}
	const JWT = await generateSignature(query.slug, 1);
	return JWT;
})
