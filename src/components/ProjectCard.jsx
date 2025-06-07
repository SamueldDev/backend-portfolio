
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <div className="rounded-2xl shadow-lg bg-white dark:bg-zinc-800 p-4 hover:shadow-xl transition">
      <h3 className="text-xl font-bold">{project.title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-300">{project.subtitle}</p>

      <div className="mt-4">
        <Link
          to={`/projects/${project.slug}`}
          className="text-blue-500 hover:underline"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}
