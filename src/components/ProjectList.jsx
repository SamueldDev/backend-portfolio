

// import projects from '../data/project';


// import{ useState, useMemo } from 'react';
// // import projects from '../data/projects';

// const allTags = [...new Set(projects.flatMap(p => p.tags))];

// export default function ProjectList() {
//   const [activeTag, setActiveTag] = useState(null);

//   const filteredProjects = useMemo(() => {
//     if (!activeTag) return projects;
//     return projects.filter(p => p.tags.includes(activeTag));
//   }, [activeTag]);

//   return (
//     <div className="max-w-5xl mx-auto mt-10">
//       {/* Filter Buttons */}
//       <div className="mb-6 flex flex-wrap gap-3">
//         <button
//           onClick={() => setActiveTag(null)}
//           className={`px-3 py-1 rounded ${
//             !activeTag ? 'bg-blue-600 text-white' : 'bg-gray-200'
//           }`}
//         >
//           All
//         </button>
//         {allTags.map(tag => (
//           <button
//             key={tag}
//             onClick={() => setActiveTag(tag)}
//             className={`px-3 py-1 rounded ${
//               activeTag === tag ? 'bg-blue-600 text-white' : 'bg-gray-200'
//             }`}
//           >
//             {tag}
//           </button>
//         ))}
//       </div>

//       {/* Projects List */}
//       {filteredProjects.map(({ id, name, description, techStack, features, liveUrl, repoUrl }) => (
//         <div key={id} className="bg-white p-6 rounded shadow-md mb-8 hover:shadow-lg transition-shadow">
//           <h2 className="text-2xl font-semibold mb-2">{name}</h2>
//           <p className="mb-4">{description}</p>
//           <div className="mb-4">
//             <h3 className="font-semibold">Tech Stack:</h3>
//             <ul className="list-disc list-inside">
//               {techStack.map((tech, idx) => (
//                 <li key={idx}>{tech}</li>
//               ))}
//             </ul>
//           </div>
//           <div className="mb-4">
//             <h3 className="font-semibold">Key Features:</h3>
//             <ul className="list-disc list-inside">
//               {features.map((feature, idx) => (
//                 <li key={idx}>{feature}</li>
//               ))}
//             </ul>
//           </div>
//           <div className="flex space-x-4">
//             {liveUrl && (
//               <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
//                 Live Demo
//               </a>
//             )}
//             {repoUrl && (
//               <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
//                 Source Code
//               </a>
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
