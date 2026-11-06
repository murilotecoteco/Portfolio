import academiaInicio from "../assets/academiainicio.webp";
import SolarCME from "../assets/solarcme.webp";
import taskManager from "../assets/taskmanager.webp";

export const profile = {
  name: "Murilo de Souza Cândido",
  first: "Murilo",
  role: "Desenvolvedor Front-end",
  headline:
    "Desmonto sistemas para entender como funcionam. Depois, construo os meus — e contribuo com os dos outros.",
  intro:
    "Estudante de Informática para Internet no IFPR e aluno especial em Sistemas para Internet na UTFPR, focado em desenvolvimento front-end — interfaces e aplicações web com craft e atenção a detalhe.",
  location: "Paraná, BR · UTC−3",
  github: "https://github.com/murilotecoteco",
  email: "candidomurilo809@gmail.com",
  status: "online — aberto a oportunidades",
  availability: "aberto a oportunidades",
};

export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  type: string;
  status: { label: string; state: "ok" | "building" | "idle" };
  image?: string;
  link: string;
  demo?: string;
  featured?: boolean;
  /** decisões técnicas reais — exibidas como bloco de diff */
  decisions: string[];
};

export const projects: Project[] = [
  {
    id: "mod-01",
    title: "MGMOTORS",
    description:
      "Marketplace web de veículos com autenticação, PostgreSQL, RLS, Storage privado, chat em tempo real e painel administrativo.",
    tech: ["HTML5", "CSS3", "JavaScript", "Supabase", "PostgreSQL", "RLS", "Storage", "Realtime", "Vercel"],
    type: "full stack",
    status: { label: "finalizado", state: "ok" },
    link: "https://github.com/murilotecoteco/MGMOTORS",
    demo: "https://mgmotorss.vercel.app/MG-INICIO/inicio.html",
    featured: true,
    decisions: [
      "RLS no PostgreSQL — acesso aos dados limitado por auth.uid()",
      "Storage privado para fotos do chat com URLs assinadas",
      "Realtime para mensagens entre comprador e vendedor",
      "Edge Function para a operação privilegiada de exclusão de conta",
      "headers de segurança e deploy estático/serverless no Vercel",
    ],
  },
  {
    id: "mod-02",
    title: "Academia com Pagamentos",
    description:
      "Aplicação web full stack para gerenciamento de planos de academia e assinaturas recorrentes, com autenticação, checkout e webhooks.",
    tech: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express", "Zod", "Supabase", "Stripe", "Jest", "Render"],
    type: "full stack",
    status: { label: "finalizado", state: "ok" },
    image: academiaInicio,
    link: "https://github.com/murilotecoteco/gym-membership-payments",
    demo: "https://academia-com-pagamentos.onrender.com/",
    featured: true,
    decisions: [
      "JWT em todas as rotas — user_id vem do token, nunca do body",
      "webhook com assinatura verificada e processamento idempotente",
      "plan_id em allowlist server-side — price_id não é aceito do cliente",
      "rate limiting no checkout e no billing portal",
      "suite offline com Jest, Supertest e mocks de Stripe/Supabase",
    ],
  },
  {
    id: "mod-03",
    title: "Solar CME Monitor",
    description:
      "Aplicação web para monitoramento de eventos solares (CMEs) e visualização de dados solares.",
    tech: ["React", "Vite", "JavaScript", "TypeScript", "Supabase", "PostgreSQL", "Deno", "Vercel", "Vitest"],
    type: "data app",
    status: { label: "finalizado", state: "ok" },
    image: SolarCME,
    link: "https://github.com/murilotecoteco/cme-dashboard",
    demo: "https://solar-cme-monitor.vercel.app/",
    decisions: [
      "Edge Function como proxy — a API key da NASA não chega ao cliente",
      "eventos persistidos em PostgreSQL com histórico de buscas",
      "gráficos e estatísticas calculados por evento",
      "testes offline com Vitest e Testing Library",
    ],
  },
  {
    id: "mod-04",
    title: "Task Manager",
    description:
      "Aplicação de gerenciamento de tarefas com Next.js, TypeScript, persistência local, filtros e dashboard de estatísticas.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "GitHub"],
    type: "web app",
    status: { label: "finalizado", state: "ok" },
    image: taskManager,
    link: "https://github.com/murilotecoteco/task-manager-nextjs-react",
    demo: "https://gerenciador-de-tarefas-one-pearl.vercel.app/",
    decisions: [
      "persistência client-side via LocalStorage",
      "filtros por status e dashboard de estatísticas",
      "tema claro/escuro e notificações toast",
    ],
  },
];

export type Contribution = {
  pr: string;
  title: string;
  repo: string;
  date: string;
  state: "merged" | "open";
  url: string;
};

export const contributions: Contribution[] = [
  {
    pr: "#207",
    title: "refactor(frontend): centralize application icons",
    repo: "Tecnologia-da-Informacao-BR/Calendar",
    date: "2026-10-04",
    state: "merged",
    url: "https://github.com/Tecnologia-da-Informacao-BR/Calendar/pull/207",
  },
  {
    pr: "#199",
    title: "feat(frontend): add calendar toolbar",
    repo: "Tecnologia-da-Informacao-BR/Calendar",
    date: "2026-09-20",
    state: "merged",
    url: "https://github.com/Tecnologia-da-Informacao-BR/Calendar/pull/199",
  },
  {
    pr: "#193",
    title: "feat(frontend): add verify OTP view",
    repo: "Tecnologia-da-Informacao-BR/Calendar",
    date: "2026-09-13",
    state: "merged",
    url: "https://github.com/Tecnologia-da-Informacao-BR/Calendar/pull/193",
  },
  {
    pr: "#186",
    title: "refactor(frontend): centralize password validation",
    repo: "Tecnologia-da-Informacao-BR/Calendar",
    date: "2026-09-08",
    state: "merged",
    url: "https://github.com/Tecnologia-da-Informacao-BR/Calendar/pull/186",
  },
  {
    pr: "#168",
    title: "feat(frontend): add navigation sidebar component",
    repo: "Tecnologia-da-Informacao-BR/Calendar",
    date: "2026-09-05",
    state: "merged",
    url: "https://github.com/Tecnologia-da-Informacao-BR/Calendar/pull/168",
  },
  {
    pr: "#163",
    title: "feat(frontend): create login view",
    repo: "Tecnologia-da-Informacao-BR/Calendar",
    date: "2026-08-31",
    state: "merged",
    url: "https://github.com/Tecnologia-da-Informacao-BR/Calendar/pull/163",
  },
  {
    pr: "#115",
    title: "docs: add contributor murilotecoteco",
    repo: "Tecnologia-da-Informacao-BR/Calendar",
    date: "2026-08-16",
    state: "merged",
    url: "https://github.com/Tecnologia-da-Informacao-BR/Calendar/pull/115",
  },
  {
    pr: "#98",
    title: "feat(frontend): add signup screen",
    repo: "Tecnologia-da-Informacao-BR/Calendar",
    date: "2026-08-15",
    state: "merged",
    url: "https://github.com/Tecnologia-da-Informacao-BR/Calendar/pull/98",
  },
];

export const timeline = [
  {
    version: "v0.1",
    title: "Origem",
    text: "Tudo começou com vontade de entender: o que acontece dentro de uma máquina quando ela liga, abre algo, quebra. Os primeiros scripts foram mais pergunta do que resposta.",
  },
  {
    version: "v0.3",
    title: "IFPR — Técnico em Informática para Internet",
    text: "Lógica, redes, bancos de dados — e a descoberta do Linux, que mudou minha relação com tecnologia: deixei de ser só usuário e comecei a mexer nos parafusos.",
  },
  {
    version: "v0.4",
    title: "Caixa Econômica Federal — estágio",
    text: "Primeiro contato com um ambiente institucional de verdade: processos formais, sistemas internos, documentos com responsabilidade real. Suporte de informática e apoio administrativo em uma das maiores instituições financeiras públicas do Brasil — onde aprendi que software existe para servir processos, e processos existem para servir pessoas.",
  },
  {
    version: "v0.5",
    title: "Desenvolvimento web",
    text: "Primeiros projetos web de verdade. Aprendi React, TypeScript e que a parte difícil raramente é escrever código — é fazer tudo funcionar junto.",
  },
  {
    version: "v1.0",
    title: "Sistemas completos",
    text: "Do banco de dados ao deploy: uma academia com assinaturas e pagamentos, um monitor de eventos solares. Software com problema real por trás.",
  },
  {
    version: "v1.x",
    title: "Open Source",
    text: "Comecei a contribuir com um projeto da comunidade — ler código de outras pessoas, seguir convenções, escrever PRs que alguém vai revisar. É onde mais aprendo.",
  },
  {
    version: "v1.2",
    title: "UTFPR — aluno especial em Sistemas para Internet",
    text: "Três disciplinas, três camadas: Interface e Linha de Comandos (Linux, Bash e C — o sistema por dentro), Organização de Computadores (o hardware por baixo de tudo) e Computação e Sociedade (segurança e o impacto do que construímos).",
  },
  {
    version: "v1.3",
    title: "Maximus Tecidos — estágio",
    text: "Atuação administrativo-tecnológica no dia a dia de um e-commerce: gerenciamento de produtos, preços e vendas em ERPs e marketplaces. Com auxílio do Claude Code, desenvolvi soluções internas em Node.js, React e Python — incluindo integrações com a API do Mercado Livre e um sistema centralizado para gestão de múltiplos canais de venda. O trabalho real onde o código precisa funcionar, não só compilar.",
  },
  {
    version: "next",
    title: "Em construção",
    text: "Aprofundar em backend e infraestrutura, contribuir mais e continuar construindo. Esta versão nunca fica pronta — e é esse o plano.",
  },
];

export const toolchain = [
  {
    group: "linguagens",
    items: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    group: "front-end",
    items: ["React", "Angular", "Tailwind CSS", "Vite"],
  },
  {
    group: "back-end",
    items: ["Node.js", "PostgreSQL", "Supabase", "REST APIs"],
  },
  {
    group: "sistema & ferramentas",
    items: ["Linux", "Git", "GitHub"],
  },
];
