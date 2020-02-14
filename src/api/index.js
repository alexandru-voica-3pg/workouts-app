const generic = async (url: string, manipulate: any => any) => {
	const response = await fetch(url);
	const data = await response.json();

	if (response.status >= 400) {
		throw new Error('fetch error');
	}

	return manipulate(data);
};

export const fetchAllExercises = async () => {
	const url = 'http://wger.de/api/v2/exercise';

	return await generic(url, data => {
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
