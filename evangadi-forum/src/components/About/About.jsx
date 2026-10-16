import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about_wrapper">
      <div className="about_content">
        <p className="about_label">About</p>
        <h2>Evangadi Networks Q&A</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
          consequatur ipsa minima, officiis voluptatibus ut vitae natus numquam
          libero deserunt doloribus at exercitationem dolor! Illum ratione
          beatae molestiae sed nesciunt.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
          perspiciatis quos quia harum expedita, voluptatem natus nihil neque
          exercitationem? Animi blanditiis rerum magni beatae. Cum iusto
          assumenda id similique ea.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, at
          molestias maxime minus repellat dolorum fugiat quod impedit!
          Exercitationem officia dolore libero obcaecati provident voluptas
          nihil architecto! Quia, molestias dolores.
        </p>
        <Link to='#'>HOW IT WORKS</Link>
      </div>
    </section>
  );
};

export default About;