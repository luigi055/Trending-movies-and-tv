export default class Movie {
	private _id: string;
	private _rating: number;
	private _posterImage: string;
	private _title: string;
	private _releaseAt: string;

	constructor({ rating, id, posterImage, title, releaseAt }: IMovie) {
		this._id = id;
		this._title = title;
		this._rating = rating;
		this._posterImage = posterImage;
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
	get posterImage() {
		return this._posterImage;
	}
	get releaseAt() {
		return this._releaseAt;
	}
}
