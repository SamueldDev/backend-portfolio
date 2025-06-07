

import ProjectCard from "../../components/ProjectCard";

const projects = [ 
  {
    title: "MoodMate API",
    subtitle: "Mood-based backend with suggestions and JWT auth",
    slug: "moodmate",
  },
  //  more projects here 
];

export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
