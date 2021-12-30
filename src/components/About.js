import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h4>Version 1.0.0</h4>
      <h4>Property of <a href="mailto:somyajitchppr@gmail.com">Somyajit Chakraborty</a></h4>
      <Link to='/'>Go Back</Link>
    </div>
  )
}

export default About
