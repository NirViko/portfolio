import "../style/styleCards.css";

interface IDetailsProject {
  title: string;
  projectInformation: string;
  linkToProject: string;
}

export default function Card({
  title,
  projectInformation,
  linkToProject,
}: IDetailsProject) {
  return (
    <>
      <div className="card">
        <h2>{title}</h2>
        <p className="paragraphStyle">{projectInformation}</p>
        <a href={linkToProject} target="_blank" rel="noreferrer">
          Link for project
        </a>
      </div>
    </>
  );
}
