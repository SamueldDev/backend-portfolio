

// src/pages/projects/MoodMate.jsx

import moodmate_1 from "../../assets/moodmate-1.png"
import moodmate_2 from "../../assets/moodmate-2.png"
import moodmate_3 from "../../assets/moodmate-3.png"


export default function MoodMate() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold">🧠 MoodMate API</h1>
      <p className="text-gray-600 dark:text-gray-300">
        A backend API that lets users log moods and get personalized quotes,
        music, and activity suggestions. Built with Node.js, Express, PostgreSQL, and Sequelize.
      </p>

      <section>
        <h2 className="text-xl font-bold">📮 Postman Collection Preview</h2>
        <img src={moodmate_3} alt="Postman Screenshot" className="rounded-lg shadow" />
      </section>

      <section>
        <h2 className="text-xl font-bold">🧠 Database Schema</h2>
        <img src={moodmate_1} alt="ER Diagram" className="rounded-lg shadow" />
      </section>

      <section>
        <h2 className="text-xl font-bold">🧱 Architecture Overview</h2>
        <img src={moodmate_2} alt="Architecture Diagram" className="rounded-lg shadow" />
      </section>

      <section>
        <h2 className="text-xl font-bold">🔗 Links</h2>
        <ul className="list-disc list-inside text-blue-500">
          <li><a href="https://moodmate-production.up.railway.app/api-docs" target="_blank">Swagger Documentation</a></li>
          <li><a href="https://github.com/SamueldDev/moodmate-backend" target="_blank">GitHub Repo</a></li>
          <li><a href="/moodmate_postman_collection.json" download>Postman Collection</a></li>
        </ul>
      </section> 
    </div>
  );
}
