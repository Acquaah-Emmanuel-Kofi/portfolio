import { SubTitle, Title } from "../common/Title";

export default function About() {
  return (
    <section
      id="about"
      className="py-12 md:py-16 lg:py-20"
    >
      <Title title="About Me" />

      <div className="space-y-8">
        {/* Bio */}
        <div>
          <SubTitle title="Who I Am" />
          <p className="text-muted-foreground leading-relaxed">
            I’m a passionate software engineer with 5+ years of experience
            building scalable, performant web applications. I enjoy solving
            complex technical challenges, designing clean architectures, and
            delivering intuitive user experiences that create impact.
          </p>
        </div>

        {/* Values & Philosophy */}
        <div>
          <SubTitle title="Development Philosophy" />
          <p className="text-muted-foreground leading-relaxed">
            I believe in writing clean, maintainable code, continuous learning,
            and building products that are accessible, inclusive, and
            user-first. I embrace collaboration, feedback, and sharing knowledge
            to help others grow.
          </p>
        </div>

        {/* Fun Facts */}
        <div>
          <SubTitle title="Fun Facts" />
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>I contribute to open source in my spare time.</li>
            <li>I’m a big fan of sci-fi movies and strategy games.</li>
            <li>I occasionally blog about development and tools I love.</li>
            <li>Coffee enthusiast ☕ and keyboard nerd ⌨️.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
