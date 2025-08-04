import { skills } from "@/lib/data";
import { Title } from "../common/Title";

export default function TechStack() {
  return (
    <section className="py-20" id="skills">
      <div className="max-w-6xl mx-auto px-4">
        <Title title="Technical Skills" />

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {skills.map(({ title, icon: Icon, items }) => (
            <div key={title}>
              <div className="flex items-center gap-2 mb-2">
                <Icon className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="text-muted-foreground text-sm ml-7">
                {items.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}