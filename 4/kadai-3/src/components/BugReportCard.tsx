import "../style.css";

type BugReportCardProps = {
  title: string;
  location: string;
  danger: string;
  symptom: string;
};

export default function BugReportCard(props: BugReportCardProps) {
  const { title, location, danger, symptom } = props;

  return (
    <article className="bug-card">
      <h2 className="bug-cardh2">{title}</h2>
      <p className="bug-cardp">{location}</p>
      <p className="bug-cardp">{danger}</p>
      <p className="bug-cardp">{symptom}</p>
    </article>
  );
}
