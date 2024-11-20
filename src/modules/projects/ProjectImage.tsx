import ExportedImage, { ExportedImageProps } from "next-image-export-optimizer";

interface ProjectImageProps {
  url: ExportedImageProps["src"];
  alt: string;
}

const ProjectImage = ({ url, alt }: ProjectImageProps) => (
  <div className="w-full max-w-[24rem]">
    <ExportedImage src={url} alt={alt} />
  </div>
);

export default ProjectImage;
