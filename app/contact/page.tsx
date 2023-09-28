"use client";
import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
	{
		icon: <Twitter size={20} />,
		href: "https://twitter.com/chronark_",
		label: "Twitter",
		handle: "@chronark_",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:dev@chronark.com",
		label: "Email",
		handle: "dev@chronark.com",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/chronark",
		label: "Github",
		handle: "chronark",
	},
];

export default function Example() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			
			<Navigation />
			<h1 className="text-white  text-xl pt-28">Qui suis-je ?</h1>
			<p className="text-white w-2/3">"Bonjour, je m'appelle Marie et je suis développeuse en MERN stack. J'ai une passion pour la création d'applications Web modernes et performantes en utilisant les technologies Next.js et React. J'aime également exploiter tout le potentiel de Tailwind CSS pour concevoir des interfaces utilisateur élégantes et réactives.

En tant que développeuse, je suis connue pour ma rigueur et mon dévouement à fournir des solutions de haute qualité. J'aime relever des défis techniques et travailler sur des projets innovants. Mon objectif principal est d'aider les entreprises à booster leur trafic et à améliorer leur présence en ligne.

En plus du développement, j'ai une solide expérience en SEO (optimisation pour les moteurs de recherche) des sites Web. Je comprends l'importance d'une bonne visibilité dans les moteurs de recherche pour attirer du trafic organique et augmenter la portée d'une entreprise.

Je suis passionnée par l'apprentissage continu et je reste constamment à l'affût des dernières tendances et technologies du développement Web. Cela me permet de proposer des solutions innovantes et d'optimiser les performances des applications que je développe.

Si vous recherchez un développeur dévoué, rigoureux et expérimenté pour votre prochain projet, n'hésitez pas à me contacter. Je serais ravie de discuter de vos besoins et de contribuer à la réalisation de vos objectifs."</p>

			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
					
					{socials.map((s) => (
						<Card>
							<Link
								href={s.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
										{s.handle}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
