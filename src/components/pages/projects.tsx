import "../style/style.css";
import Card from "./card";
export default function Projects() {
  return (
    <>
      <div className="containerCards">
        <Card
          title="Portfolio"
          projectInformation="Profile site built and designed by me, I made the site in React, TypeScript"
          linkToProject="https://github.com/NirViko/protfolio"
        />
        <Card
          title="Social Sport App"
          projectInformation="Social Sport app - I did this project during my degree.
This project is a social network of sports activities. The project developed in Android Studio."
          linkToProject="https://github.com/NirViko/SocialSportApp"
        />
        <Card
          title="Social News"
          projectInformation="Social News - This project is a social networking site for sharing news abour the high-tech world, a user can subscribe and enjoy high-quality content from the high-tech world"
          linkToProject="https://github.com/NirViko/SocialNews"
        />
        <Card
          title="Super Digital"
          projectInformation="Super digital food sales, in this project we used CSS3 HTML5 and Javascript"
          linkToProject="https://github.com/NirViko/SCEMarketProj"
        />
        <Card
          title="React Mini-projects"
          projectInformation="Three small practice projects in React"
          linkToProject="https://github.com/NirViko/Mini-projects-in-React"
        />
        <Card
          title="Login-Project"
          projectInformation="Project connecting to the server and displaying information, in this project I created a Login that connects to an external server and takes information, displays it on the site. I used React, Redux and more for this project"
          linkToProject="https://github.com/NirViko/NewProjectsApp"
        />
      </div>
    </>
  );
}
