import "../style.css";

type ReviewCardProps = {
  title: string;
  genre: string;
  rating: string;
  recommendation: string;
  message: string;
};

export default function ReviewCard(props: ReviewCardProps) {
  const { title, genre, rating, recommendation, message } = props;

  return (
    <section className="review-card">
      <h2 className="review-cardh2">{title}</h2>
      <p className="review-cardp">{genre}</p>
      <p className="review-cardp">{rating}</p>
      <p className="review-cardp">{recommendation}</p>
      <p className="review-cardp">{message}</p>
    </section>
  );
}
