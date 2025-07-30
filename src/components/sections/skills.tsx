import { TECHNOLOGIES } from '@/lib/data';
import Tag from '@/components/data-display/tag';
import TechDetails from '@/components/data-display/tech-details';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const SkillsSection = () => {
  return (
    <Container>
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Skills" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          The skills, tools and technologies I am really good at:
        </Typography>
      </div>

      <div className="flex flex-col gap-12">
        {/* First row - 8 items */}
        <div className="grid grid-cols-3 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-8 lg:gap-y-12">
          {TECHNOLOGIES.slice(0, 8).map((technology, index) => (
            <TechDetails {...technology} key={index} />
          ))}
        </div>
        
        {/* Second row - 7 items centered with increased spacing */}
        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-7 lg:gap-x-12">
            {TECHNOLOGIES.slice(8).map((technology, index) => (
              <TechDetails {...technology} key={index + 8} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SkillsSection;
