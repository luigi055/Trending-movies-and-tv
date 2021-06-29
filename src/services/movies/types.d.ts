interface rawTMDB {
	id: string;
	poster_path: string;
	release_date: string;
	vote_average: number;
}
interface RawTMDBMovie extends rawTMDB {
	title: string;
}

interface RawTMDBSerie extends rawTMDB {
	name: string;
}
