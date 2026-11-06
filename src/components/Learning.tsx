import { SectionHead } from "./system";

const topics = [
  {
    name: "React",
    stage: "praticando",
    text: "Componentes, estado, composição e interfaces com foco em organização e experiência de uso.",
  },
  {
    name: "TypeScript",
    stage: "estudando",
    text: "Tipagem gradual, contratos de dados e formas de tornar o código mais previsível.",
  },
  {
    name: "Node.js",
    stage: "explorando",
    text: "APIs, integração com serviços, validação, autenticação e responsabilidades no servidor.",
  },
  {
    name: "Angular",
    stage: "estudando",
    text: "Estrutura de aplicações, componentes, serviços e padrões do ecossistema.",
  },
];

function Learning() {
  return (
    <section id="aprendizado" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead
          index="04"
          path="aprendizado"
          title="Em aprendizado"
          blurb="Tecnologias que estudo colocando a mão no código — com prática, dúvidas e evolução contínua."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {topics.map((topic) => (
            <article
              key={topic.name}
              className="border border-line bg-panel/60 p-5 transition-colors hover:border-line-strong sm:p-6"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-2xl font-semibold tracking-tight text-ink">
                  {topic.name}
                </h3>
                <span className="font-mono text-[0.65rem] tracking-[0.14em] text-signal uppercase">
                  {topic.stage}
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 font-light text-dim">
                {topic.text}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-8 border-l-2 border-signal/50 pl-4 font-mono text-xs leading-6 text-dim">
          Não apresento essas tecnologias como domínio completo. Elas fazem
          parte do meu percurso atual de estudo e aparecem nos projetos em que
          pratico conceitos de forma concreta.
        </p>
      </div>
    </section>
  );
}

export default Learning;
