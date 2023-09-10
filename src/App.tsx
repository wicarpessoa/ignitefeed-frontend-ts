import { Post, PostType } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

const posts: PostType[] = [
	{
		id: 1,
		author: {
			avatarUrl: "https://github.com/wicarpessoa.png",
			name: "Wicar pessoa",
			role: "Dev web junior",
		},
		content: [
			{ type: "paragraph", content: "Fala galeraa 👋" },
			{
				type: "paragraph",
				content:
					"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
			},
			{ type: "link", content: "jane.design/doctorcare" },
		],
		publishedAt: new Date("2023-08-05 20:17:05"),
	},
	{
		id: 2,
		author: {
			avatarUrl: "https://github.com/lucaskmpz.png",
			name: "Lucas kampz",
			role: "Backend dev",
		},
		content: [
			{ type: "paragraph", content: "Fala galeraa 👋" },
			{
				type: "paragraph",
				content:
					"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
			},
			{ type: "link", content: "jane.design/doctorcare" },
		],
		publishedAt: new Date("2023-07-06 20:17:05"),
	},
];

export function App() {
	return (
		<div>
			<Header />
			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					{posts.map((post) => {
						return (
							<Post
								key={post.id}
								post={post}
							/>
						);
					})}
				</main>
			</div>
		</div>
	);
}
