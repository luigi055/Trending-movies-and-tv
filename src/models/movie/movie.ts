export default class Movie {
	public id: string;
	public rating: number;
	public posterImage: string;
	public title: string;
	public releaseAt: string;

	constructor({ rating, id, posterImage, title, releaseAt }: IMovie) {
		this.id = id;
		this.title = title;
		this.rating = rating;
		this.posterImage = posterImage;
		this.releaseAt = releaseAt;
	}
}
