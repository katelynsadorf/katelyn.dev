import Image from 'next/image';

import KatelynFullPose from '/public/images/katelyn-full-pose.jpg';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={KatelynFullPose}
              alt="Full pose of Katelyn"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            Curious about me? Here you have it:
          </Typography>
          <Typography>
            I began my coding journey in seventh grade with Excel macros and stock market simulation, 
            which evolved into full-stack development with React.js and GraphQL. I now apply deep learning 
            tools like DeepLabCut in neuroscience research, working across software engineering and scientific research.
          </Typography>
          <Typography>
            I write clean code and contribute to projects with real-world impact. When I&apos;m not coding 
            or in the lab, you can find me running on Caltech&apos;s cross country and track team, or 
            experimenting with new learning and productivity systems.
          </Typography>
          <Typography>
            Finally, some quick bits about me.
          </Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                I read research papers for fun, not just for class (performative)
              </Typography>
              <Typography component="li">I scroll Instagram reels like it&apos;s my part-time job</Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">Spontaneous by nature, structured when it counts</Typography>
              <Typography component="li">Always down for a good philosophical debate</Typography>
            </ul>
          </div>
          <Typography>
            One last thing: I&apos;m always open to new collaborations and research opportunities, 
            so feel free to reach out!
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
