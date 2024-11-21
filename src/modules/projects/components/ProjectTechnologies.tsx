import { Technology } from "@/common/models/Technology";

interface ProjectTechnologiesProps {
  technologies: Array<Technology>;
}

const ProjectTechnologies = ({ technologies }: ProjectTechnologiesProps) => (
  <div className="mt-1 flex flex-row flex-wrap gap-x-3 gap-y-1 text-sm text-white">
    {technologies.map(({ Icon, iconColor, name }) => (
      <div key={name} className="inline-flex flex-row items-center">
        {Icon && (
          <Icon
            className="mr-1 h-[0.875rem]"
            style={{
              color: iconColor ?? undefined,
            }}
            fill="currentColor"
          />
        )}
        {name}
      </div>
    ))}
  </div>
);

export default ProjectTechnologies;
