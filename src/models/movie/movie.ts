export default class Movie {
	private _rating: string;
	private _id: string;
	private _posterPath: string;
	private _title: string;
	private _releaseAt: string;

	constructor({ rating, id, posterPath, title, releaseAt }: IMovie) {
		this._id = id;
		this._title = title;
		this._rating = rating;
		this._posterPath = posterPath;
		this._releaseAt = releaseAt;
	}

	get id() {
		return this._id;
	}
	get title() {
		return this._title;
	}
	get rating() {
		return this._rating;
	}
	get posterPath() {
		return this._posterPath;
	}
	get releaseAt() {
		return this._releaseAt;
	}
}
