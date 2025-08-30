import React from 'react'
import './DeveloperCard.css'
import { FaGithub, FaLinkedin, FaXTwitter, FaGoogle } from 'react-icons/fa6'

const DeveloperCard = () => {
  return (
    <section className="developer-card">
      <div className="card-left">
        <pre>
          <code>
            <span className="code-keyword">const</span> <span className="code-var">developer</span> = &#123;
            <br />
            &nbsp;&nbsp;<span className="code-key">firstName</span>: <span className="code-string">&quot;Tushar&quot;</span>,
            <br />
            &nbsp;&nbsp;<span className="code-key">lastName</span>: <span className="code-string">&quot;Shukla&quot;</span>,
            <br />
            &nbsp;&nbsp;<span className="code-key">location</span>: <span className="code-string">&quot;India&quot;</span>,
            <br />
            &nbsp;&nbsp;<span className="code-key">skills</span>: [<span className="code-string">&quot;React&quot;</span>, <span className="code-string">&quot;C++&quot;</span>,<span className="code-string">&quot;Python&quot;</span>,<span className="code-string">&quot;Node.js&quot;</span>],
            <br />
            &nbsp;&nbsp;<span className="code-key">hobby</span>: <span className="code-func">repeat</span> = () =&gt; &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-comment">// eat()</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-comment">// sleep()</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-comment">// code()</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-comment">// repeat()</span>
            <br />
            &nbsp;&nbsp;&#125;
            <br />
            &#125;; <span className="code-comment">// meet the dev 🚀</span>
          </code>
        </pre>
      </div>
      

      <div className="card-right">
        <p className="bio">
          I'm <span className="highlight-name">Tushar Shukla</span>, a passionate full-stack developer with a strong focus on Web Development. I love building real-world apps that combine clean UI, smooth UX, and smart functionality—from ultra real-time location tracking to a self-made app store. I enjoy solving problems, learning cutting-edge tech, and turning ideas into polished digital products.
        </p>
        <div className="stats">
          <div>
            <h2>1+</h2>
            <p>Years of Experience</p>
          </div>
          <div>
            <h2>5+</h2>
            <p>Completed Projects</p>
          </div>
        </div>
        <div className="socials">
          <a href="https://github.com/itz-Tushar04" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/tushar-sharma-0405" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://x.com/itz_tushar04" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
          <a href="mailto:tushar@example.com" target="_blank" rel="noopener noreferrer"><FaGoogle /></a>
        </div>
      </div>
    </section>
  )
} 

export default DeveloperCard
