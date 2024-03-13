type Props = {
    image: any
    title: string,
    description: string
}

function ProjectCard ({title, image, description}:Props) {
  return (
    <div className="card">
        <img src={image} />
        <div className="card-left">
            <p className="title">{title}</p>
            <p className="desc">{description}</p>
        </div>
    </div>
  )
}

export default ProjectCard