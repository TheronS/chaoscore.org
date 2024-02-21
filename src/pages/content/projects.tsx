export default function ProjectsPage() {
    const projects = ["corectf", "hns", "rampagepriv", "rampagestats"];
  
    return (
    <div>
      <h1>Projects</h1>
      <p>Projects:</p>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
    </div>
  );
}