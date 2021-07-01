import React from "react";
import { Card } from "components";
import formatDate from "utilities/format-date";

type ViewCardProps = {
  title: string;
  image: string;
  rating: number;
  releaseAt: string;
};

const ViewCard: React.FC<ViewCardProps> = React.memo(
  ({ title, image, rating, releaseAt, ...rest }) => (
    <Card data-testid="movie-card" {...rest}>
      <Card.Image
        data-testid="movie-card__img"
        src={image}
        alt={`poster ${title}`}
        loading="lazy"
      />
      <Card.Title data-testid="movie-card__title">{title}</Card.Title>
      <Card.SubTitle
        as="time"
        data-testid="movie-card__time"
        dateTime={releaseAt}
      >
        release: {formatDate(releaseAt)}
      </Card.SubTitle>
      <Card.Description data-testid="movie-card__rating" as="p">
        Vote average: {rating}
      </Card.Description>
    </Card>
  )
);

export default ViewCard;
