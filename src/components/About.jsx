import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text={"about me"} />
          <p className="text-slate-600 mt-8 leading-loose">
            A diligent and detail-focused Computer Science Graduate with a track
            record in coding and software development. Embracing the world of
            Web Development has sparked my interest in leveraging technology to
            build innovative web solutions, particularly focusing on front-end
            development with ReactJS. This motivation drives me to further my
            expertise in this ever-evolving field while also exploring diverse
            opportunities across the tech landscape.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
