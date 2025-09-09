import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

function App() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <header className="py-12 text-center">
        <h1 className="font-orbitron text-4xl md:text-6xl font-bold text-neon-cyan">Karol Charles Konarski</h1>
        <h2 className="mt-4 text-lg md:text-2xl text-zinc-400">Digital Fabrication & IoT Engineer</h2>
        <p className="mt-2 text-neon-green">Empowering African Innovation through Digital Fabrication & IoT</p>
      </header>

      <main className="space-y-16">
        {/* About */}
        <section className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
          <div className="md:flex-1">
            <h3 className="text-2xl font-bold">About Me</h3>
            <p className="mt-4 text-zinc-300 max-w-2xl mx-auto md:mx-0">
              CTO at NMD, makerspace trainer, passion for STEM & innovation.
              I specialize in digital fabrication, embedded systems, and IoT training across Africa.
            </p>
          </div>
          
          <div className="flex-shrink-0">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="rounded-lg max-h-64 w-auto mx-auto"
            />
          </div>
        </section>

        {/* Expertise */}
        <section>
          <h3 className="text-2xl font-bold">Expertise</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <SkillCard title="Fabrication" tools="CNC, 3D Printing, Laser Cutting, PCB Milling" icon="/icons/fabrication.png" />
            <SkillCard title="Software" tools="Fusion 360, AutoCAD, SolidWorks, Proteus" icon="/icons/software.png" />
            <SkillCard title="IoT & AI" tools="Embedded Systems, Node-RED, Python" icon="/icons/iot.png" />
          </div>
        </section>

        {/* Projects */}
        <section>
          <h3 className="text-2xl font-bold">Projects</h3>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {projectCard("iNgeyaa - AIoT Traffic Light System", "Smart city prototype developed during Orange Summer Challenge.", "Node-RED, ESP32, Electronics, CNC Machine, 3D Printer", "/projects/traffic.jpg")}
            {projectCard("Mobile Makerspace Training", "STEM bootcamps on IoT & robotics across Cameroon.", "Arduino, IoT kits", "/projects/makerspace.jpg")}
            {projectCard("Satellite-enabled IoT Prototypes", "Low-cost nanosatellite-based IoT solutions.", "Satellite comms, Embedded systems", "/projects/satellite.jpg")}
            {projectCard("K3D Print, Cameroon", "3D Design and Rendering of clients’ products and projects. 3D Printing of students’ final year projects and clients’ prototypes.", "3D Printer, CAD", "/projects/k3d.png")}
          </div>
        </section>

        {/* Achievements */}
        <section>
          <h3 className="text-2xl font-bold">Achievements</h3>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
            <Badge
              icon="/icons/trophy.png"
              preview="/previews/orange-challenge.jpg"
            >
              Orange Summer Challenge 2023 — 2nd Prize
            </Badge>

            <Badge
              icon="/icons/trophy.png"
              preview="/previews/prize.jpg"
            >
              Cameroon's Digital Innovation Week — 8th Prize
            </Badge>

            <Badge
              icon="/icons/mic.png"
              preview="/previews/ieee-week.jpg"
            >
              IEEE Entrepreneurship Week 2025 — Speaker
            </Badge>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold">Contact</h3>
            <p className="mt-3 text-zinc-300">Interested in collaboration, training, or speaking? Send a message or email me directly.</p>

            <div className="mt-6 space-y-3 text-sm text-zinc-300">
              <div><strong>Email:</strong> kkonarski42@gmail.com</div>
              <div><strong>Phone:</strong> +237 653-093-701</div>
              <div><strong>Location:</strong> Douala, Cameroon</div>
            </div>
          </div>

          {/* Netlify-enabled contact form */}
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="p-6 rounded-lg bg-zinc-900/20"
          >
            {/* Required hidden input for Netlify */}
            <input type="hidden" name="form-name" value="contact" />

            {/* Honeypot (hidden from users) */}
            <p className="hidden">
              <label>Don’t fill this out: <input name="bot-field" /></label>
            </p>

            <label className="block text-sm text-zinc-300">Name</label>
            <input
              name="name"
              className="mt-1 w-full p-2 rounded bg-transparent border border-zinc-800 text-sm"
              placeholder="Your name"
              required
            />

            <label className="block text-sm text-zinc-300 mt-3">Email</label>
            <input
              name="email"
              type="email"
              className="mt-1 w-full p-2 rounded bg-transparent border border-zinc-800 text-sm"
              placeholder="Your email"
              required
            />

            <label className="block text-sm text-zinc-300 mt-3">Message</label>
            <textarea
              name="message"
              className="mt-1 w-full p-2 rounded bg-transparent border border-zinc-800 text-sm h-28"
              placeholder="How can I help?"
              required
            />

            <button
              type="submit"
              className="mt-4 px-4 py-2 rounded bg-neon-cyan text-black"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>

      <footer className="mt-16 border-t border-zinc-800 py-6 text-sm text-zinc-500 flex justify-between">
        <div>© {new Date().getFullYear()} Karol Charles Konarski</div>
        <div>
          <a
            href="https://www.linkedin.com/in/eng-karol-charles-konarski-a4252a199/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-neon-cyan hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  )
}


function SkillCard({ title, tools, icon }) {
  return (
    <div className="p-4 rounded-lg bg-zinc-900/20 text-center">
      <img src={icon} alt={title} className="mx-auto h-12 mb-3" />
      <h4 className="font-semibold">{title}</h4>
      <p className="text-zinc-400 text-sm mt-2">{tools}</p>
    </div>
  )
}

function projectCard(title, desc, tools, image) {
  return (
    <article className="p-4 rounded-lg bg-gradient-to-br from-[#06121a] to-[#071824] border border-zinc-800">
      <img src={image} alt={title} className="rounded mb-4" />
      <h4 className="font-semibold text-white">{title}</h4>
      <p className="text-zinc-400 text-sm mt-2">{desc}</p>
      <div className="mt-3 text-xs text-zinc-300">Tools: {tools}</div>
    </article>
  )
}

function Badge({ icon, preview, children }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Badge itself */}
      <div className="px-4 py-2 rounded bg-gradient-to-r from-cyan-600/20 to-emerald-600/10 
                      text-xs border border-zinc-800 flex items-center cursor-pointer">
        <img src={icon} className="inline-block h-4 w-4 mr-1" />
        {children}
      </div>

      {/* Floating preview above the badge */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 z-50 pointer-events-none"
          >
            <img
              src={preview}
              alt="Preview"
              className="w-72 max-w-[90vw] rounded-lg shadow-lg border border-zinc-700"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App
