import React from 'react'
import './Testimonials.css'

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial-list">
        <div className="testimonial glass-card">
          <p>&quot;Tushar is a dedicated developer who always delivers high-quality work!&quot;</p>
          <h4>- Mentor, College Project</h4>
        </div>

        <div className="testimonial glass-card">
          <p>&quot;His Android tracking app showed real-world problem solving at its best.&quot;</p>
          <h4>- Professor, Final Year Review</h4>
        </div>
      </div>
    </section>
  )
}

export default Testimonials