import lima from "../src/assets/lima.jpg"
import { AudioLines, CalendarDays, Guitar, Instagram, Mail, Music, Phone } from "lucide-react";
import { motion } from "motion/react"

function App() {
	return (
		<main className="h-[100dvh] w-screen flex flex-col items-center justify-center gap-4 overflow-y-auto">
			<div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>
			{/* Perfil */}
			<div className="flex flex-col items-center gap-3 ">
				<img src={lima} alt="Foto de perfil Arthur Lima" className="h-32 w-32 md:w-36 md:h-36 rounded-full shadow-lg mt-4" />
				<div className="flex flex-col items-center">
					<h2 className=" text-2xl font-semibold text-neutral-800">Arthur Lima</h2>
					<p className="text-neutral-700">Cantor, Compositor e Professor</p>
				</div>
			</div>

			{/* Botões principais */}
			<div className="w-full mt-2 flex flex-col gap-4 items-center">
				<motion.a
					href="https://wa.me/5531987161625?text=Olá,%20Arthur!%20Gostaria%20de%20saber%20mais%20sobre%20sua%20agenda%20de%20shows%20e%20eventos." // link WhatsApp para agendar show
					target="_blank"
					rel="noopener noreferrer"
					initial={{ x: -200 }}
					whileInView={{ x: 0 }}
					transition={{ duration: 0.7 }}
					className="w-5/6 md:w-1/5 p-3 rounded-xl bg-neutral-800 text-neutral-50 font-medium flex items-center justify-between text-sm"
				>
					<CalendarDays className="w-5 h-5" /> Agendar Shows <div className="w-5 h-5"></div>
				</motion.a>

				<motion.a
					href="https://wa.me/5531987161625?text=Olá,%20Arthur!%20Tenho%20interesse%20nas%20aulas%20de%20violão%20e%20gostaria%20de%20mais%20informações%20sobre%20valores%20e%20disponibilidade."
					target="_blank"
					rel="noopener noreferrer"
					initial={{ x: -280 }}
					whileInView={{ x: 0 }}
					transition={{ duration: 0.7 }}
					className="w-5/6 md:w-1/5 p-3 rounded-xl bg-neutral-800 text-neutral-50 font-medium flex items-center justify-between text-sm"
				>
					<Guitar className="w-5 h-5" /> Aulas de Violão <div className="w-5 h-5"></div>
				</motion.a>

				<motion.a
					href="https://open.spotify.com/intl-pt/track/4jN8LXtTnYHbKSE4WDTcte" // link para música no Spotify
					target="_blank"
					rel="noopener noreferrer"
					initial={{ x: -300 }}
					whileInView={{ x: 0 }}
					transition={{ duration: 0.7 }}
					className="w-5/6 md:w-1/5 p-3 rounded-xl bg-neutral-800 text-neutral-50 font-medium flex items-center justify-between text-sm"
				>
					<Music className="w-5 h-5" /> Ouça Minha Última Música <span className="w-2 h-2"></span>
				</motion.a>
			</div>

			{/* Redes sociais */}
			<h2 className="text-lg font-medium">Contatos & Redes</h2>
			<div className="flex flex-col gap-4 ">
				<a href="mailto:arthurlimadefreitas2005@gmail.com" className="flex items-center gap-3 text-neutral-700 hover:text-black transition-all ">
					<span className="p-2 bg-neutral-300 rounded-full shadow-md animate-bounce">
						<Mail className="w-5 h-5" />
					</span>
					<div className="flex flex-col">
						<span className="text-sm font-medium">Email</span>
						<span className="text-sm">arthurlimadefreitas2005@gmail.com</span>
					</div>
				</a>

				<a href="https://wa.me/5531987161625" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-neutral-700 hover:text-black transition-all">
					<span className="p-2 bg-neutral-300 rounded-full shadow-md animate-bounce">
						<Phone className="w-5 h-5" />
					</span>
					<div className="flex flex-col">
						<span className="text-sm font-medium">WhatsApp</span>
						<span className="text-sm">(31) 98716-1625</span>
					</div>
				</a>

				<a href="https://open.spotify.com/intl-pt/artist/0q3hLvR0C8YBuWlVo0uvVT" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-neutral-700 hover:text-black transition-all">
					<span className="p-2 bg-neutral-300 rounded-full shadow-md animate-bounce">
						<AudioLines className="w-5 h-5" />
					</span>
					<div className="flex flex-col">
						<span className="text-sm font-medium">Spotify</span>
						<span className="text-sm">Arthur Lima</span>
					</div>
				</a>

				<a href="https://instagram.com/arthurlima.oficiall" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-neutral-700 hover:text-black transition-all">
					<span className="p-2 bg-neutral-300 rounded-full shadow-md animate-bounce">
						<Instagram className="w-5 h-5" />
					</span>
					<div className="flex flex-col">
						<span className="text-sm font-medium">Instagram</span>
						<span className="text-sm">@arthurlima.oficiall</span>
					</div>
				</a>
			</div>
		</main>
	);
}

export default App;
