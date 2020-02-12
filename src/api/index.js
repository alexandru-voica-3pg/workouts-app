const url = 'http://wger.de/api/v2/exerciseinfo/';

export const fetchExercises = async () => {
	const response = await fetch(url);
	const data = await response.json();

	if (response.status >= 400) {
		throw new Error('fetch error');
	}

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
};
