

import me from "../assets/me.png"

export default function About() {
  return (
 
    <section className="p-6 max-w-5xl mx-auto">
  <h2 className="text-2xl font-bold mb-6">👋 About Me</h2>

  <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
    {/* Profile Image */}
    <img
      src={me} 
      alt="Profile"
      className="w-40 h-40 rounded-full object-cover shadow-md"
    />

    {/* Text Content & Button */}
    <div className="flex-1 space-y-4">
      <p>
        I'm a backend developer who builds powerful, scalable APIs using Node.js, Express.js, PostgreSQL, and Sequelize.
        I specialize in authentication, REST APIs, database design, and performance optimization.
        I enjoy collaborating with frontend teams and translating business goals into clean backend logic.
      </p>

      <a
        href="" // 
        // download
        className="inline-block text-green-400 px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
      >
        📄 Download CV
      </a>
    </div>
  </div>
</section>

  )
}
