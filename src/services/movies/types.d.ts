interface rawTMDB {
	id: string;
	poster_path: string;

	vote_average: number;
}
interface RawTMDBMovie extends rawTMDB {
	title: string;
	release_date: string;
}

interface RawTMDBSerie extends rawTMDB {
	name: string;
	first_air_date: string;
}
