const generic = async (url: string, manipulate: any => any) => {
	const response = await fetch(url);
	const data = await response.json();

	if (response.status >= 400) {
		throw new Error('fetch error');
	}

	return manipulate(data);
};

export const fetchAllExercises = async (page = 1) => {
	const url = 'http://wger.de/api/v2/exercise';
	const query = [
		`page=${page}`,
		'limit=20',
		'language=2' // english
	];

	return await generic(`${url}?${query.join('&')}`, data => {
		if ('results' in data) {
			const { results } = data;

			if (Array.isArray(results) && results.length > 0) {
				return results;
			} else {
				return [];
			}
		} else {
			return [];
		}
	});
};

export const fetchExerciseDetails = async id => {
	const url = `http://wger.de/api/v2/exerciseinfo/${id}/`;

	return await generic(url, data => data);
};
