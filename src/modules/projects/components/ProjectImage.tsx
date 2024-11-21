interface ProjectImageProps {
  url: string;
  alt: string;
}

const ProjectImage = ({ url, alt }: ProjectImageProps) => (
  <img className="mt-4 w-full max-w-[24rem]" src={url} alt={alt} />
);

export default ProjectImage;
