import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { Navigation } from "./components/nav";
const navigation = [
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
];


export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen  overflow-hidden bg-gradient-to-tl from-black via-sky-400/20 to-black">
						<Navigation />

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={1000}
			/>
			<h1 className="z-10 mt-52 text-4xl text-center text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-7xl whitespace-nowrap bg-clip-text ">
						Développeur web <br/>Freelance
			</h1>

			<div className="hidden h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center  animate-fade-in bg-white h-full  w-11/12 rounded-xl">
			{/* <h2 className="sm:text-xl text-center mx-10 mt-10">
			Bonjour ! Je suis Marie, développeuse MERN stack Freelance enthousiaste et spécialisée dans le développement de sites web. 
			Je suis passionnée par le référencement SEO, l'accessibilité des sites et les performances. 
			J'utilise principalement Next.js ou React pour créer des sites exceptionnels. 
			Boostez votre présence en ligne, n'hésitez pas à me contacter, je serais ravie de collaborer avec vous !
				</h2>
				<h2 className="sm:text-xl text-center mx-10 mt-10">
			Bonjour ! Je suis Marie, développeuse MERN stack Freelance enthousiaste et spécialisée dans le développement de sites web. 
			Je suis passionnée par le référencement SEO, l'accessibilité des sites et les performances. 
			J'utilise principalement Next.js ou React pour créer des sites exceptionnels. 
			Boostez votre présence en ligne, n'hésitez pas à me contacter, je serais ravie de collaborer avec vous !
				</h2>
				<h2 className="sm:text-xl text-center mx-10 mt-10">
			Bonjour ! Je suis Marie, développeuse MERN stack Freelance enthousiaste et spécialisée dans le développement de sites web. 
			Je suis passionnée par le référencement SEO, l'accessibilité des sites et les performances. 
			J'utilise principalement Next.js ou React pour créer des sites exceptionnels. 
			Boostez votre présence en ligne, n'hésitez pas à me contacter, je serais ravie de collaborer avec vous !
				</h2>
				<h2 className="sm:text-xl text-center mx-10 mt-10">
			Bonjour ! Je suis Marie, développeuse MERN stack Freelance enthousiaste et spécialisée dans le développement de sites web. 
			Je suis passionnée par le référencement SEO, l'accessibilité des sites et les performances. 
			J'utilise principalement Next.js ou React pour créer des sites exceptionnels. 
			Boostez votre présence en ligne, n'hésitez pas à me contacter, je serais ravie de collaborer avec vous !
				</h2> */}
			</div>

		</div>
		
	);
}