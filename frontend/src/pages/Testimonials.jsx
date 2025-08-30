import React from 'react'
import './Testimonials.css'

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <h2 className="section-title">🧑 Testimonials</h2>
      <div className="testimonial-list">
        <div className="testimonial glass-card">
          <p>&quot;Tushar is a dedicated developer who always delivers high-quality work!&quot;</p>
          <h4>- Mentor, College Project</h4>
        </div>

        <div className="testimonial glass-card">
          <p>&quot;His Shortest Path Visualize showed real-world problem solving at its best.&quot;</p>
          <h4>- Professor, Final Year Review</h4>
        </div>

        <div className="testimonial glass-card">
          <p>&quot;Developed and Enhanced MERN stack applications, improving UI/UX with<br/> React and backend APIs with node.js & Express.js.&quot;</p>
          <h4>- ZenExim Pvt Ltd, Ahmedabad</h4>
        </div>
      </div>
    </section>
  )
}

export default Testimonials