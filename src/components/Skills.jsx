

export default function Skills() {
    const skills = [
    "Node.js", "Express", "PostgreSQL", "Sequelize",
    "JWT Auth", "RESTful APIs", "Vite", "Git/GitHub", "MySQl","mongoose",
     "MongoDB"
  ];

  return (
    <section className="p-6  max-w-4xl mx-auto space-y-4">
      <h2 className="text-2xl font-bold">🛠️ Skills</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {skills.map((skill) => (
          <li key={skill} className="bg-gray-100 p-2 rounded-md shadow text-center">{skill}</li>
        ))}
      </ul>
    </section>
  );
}
