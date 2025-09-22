import React, { useRef, useEffect, useState } from "react";

function PillarCard({ id, title, children }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(ref.current); // animate only once
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      id={id}
      ref={ref}
      className={`
        p-6 bg-red-50 rounded-2xl shadow hover:shadow-lg transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p>{children}</p>
    </div>
  );
}

export default function Pillars() {
  return (
    <section className="py-12 px-6 bg-white" id="pillars">
      <h2 className="text-3xl font-bold text-center mb-12 text-red-600">
        Our Pillars
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <PillarCard id="civic" title="Civic Education">
          We equip communities with knowledge about their rights,
          responsibilities, and participation in governance to foster
          accountability and active citizenship.
        </PillarCard>

        <PillarCard id="mental" title="Mental Health">
          We raise awareness, provide support systems, and reduce stigma
          around mental health to promote overall well-being in society.
        </PillarCard>

        <PillarCard id="environment" title="Environmental Conservation">
          Through education and community initiatives, we encourage
          sustainable practices to protect our environment for future
          generations.
        </PillarCard>
      </div>
    </section>
  );
}
