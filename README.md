# Portfolio

Site pessoal de Murilo de Souza Cândido, estudante de desenvolvimento web com projetos práticos, contribuições open source e evolução contínua.

[Site publicado](https://portifolio-murilosc.vercel.app/) · [Código-fonte](https://github.com/murilotecoteco/Portfolio)

## O que o site apresenta

- MGMOTORS como projeto principal.
- Projetos de pagamentos, dados solares e gerenciamento de tarefas.
- Resultados, tecnologias e aprendizados de cada projeto.
- Seção “Em aprendizado” para React, TypeScript, Node.js e Angular.
- Contribuições open source no Calendar.
- Contato profissional por e-mail e GitHub.

## Stack do site

| Camada | Tecnologia |
| --- | --- |
| Interface | React 19 |
| Linguagem | TypeScript |
| Estilos | Tailwind CSS 4 |
| Build | Vite |
| Animações | Framer Motion |
| Ícones | Lucide React |
| Deploy | Vercel |

## Como executar

Pré-requisitos: Node.js 20+ e npm.

```bash
git clone https://github.com/murilotecoteco/Portfolio.git
cd Portfolio
npm install
npm run dev
```

## Validações

```bash
npm run lint
npm run build
npm run check
```

O GitHub Actions executa lint, build e uma verificação de acessibilidade no preview. O `vercel.json` usa `npm run check` como comando de build.

## Estrutura de conteúdo

As descrições, projetos, tecnologias e linha do tempo ficam centralizados em `src/data/portfolio.ts`. As imagens dos projetos ficam em `src/assets/`, incluindo `mgmotors-preview.png`.

## Contato

**E-mail:** [candidomurilo809@gmail.com](mailto:candidomurilo809@gmail.com)  
**GitHub:** [github.com/murilotecoteco](https://github.com/murilotecoteco)

## Licença

MIT.
