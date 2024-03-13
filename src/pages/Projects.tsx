import Footer from "../components/Footer"
import Header from "../components/Header"
import CoderSvg from "../assets/coder.svg"
import ProjectCard from "../components/ProjectCard"
type Props = {}

function Projects({}: Props) {
  return (
    <div>
        <Header/>
        <main className="wrapper column">
            <h1 className="heading">Projects</h1>
            <hr/>
            <ProjectCard title="ChatNow" image={CoderSvg} description="Welcome to my portfolio! 🌟 Explore my journey as a developer through this interactive and visually appealing website."/>
            <ProjectCard title="ChatNow" image={CoderSvg} description="Welcome to my portfolio! 🌟 Explore my journey as a developer through this interactive and visually appealing website."/>
            <ProjectCard title="ChatNow" image={CoderSvg} description="Welcome to my portfolio! 🌟 Explore my journey as a developer through this interactive and visually appealing website."/>
        </main>
        <Footer/>
    </div>
  )
}

export default Projects