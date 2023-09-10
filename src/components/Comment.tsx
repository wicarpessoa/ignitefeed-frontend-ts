import { useState } from "react";
import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";


interface CommentProps {
	content: string;
	onDeleteComment: ( comment: string ) => void; 
}


export function Comment({ content, onDeleteComment }:CommentProps) {
	const [likecount, setLikecount] = useState(0);

	function handleDeleteComment() {
		onDeleteComment(content);
	}

	function handleLikeComment() {
		setLikecount((prevState) => prevState + 1);
	}

	return (
		<div className={styles.comment}>
			<Avatar hasBorder={false} src="https://github.com/diego3g.png" />
			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Diego Fernandes</strong>
							<time
								title="07 de setembro as 22:30"
								dateTime="2023-09-07 22:30:00"
							>
								Cerca de 1h atrás
							</time>
						</div>
						<button title="Deletar comentário" onClick={handleDeleteComment}>
							<Trash size={24} />
						</button>
					</header>
					<p>{content}</p>
				</div>
				<footer>
					<button onClick={handleLikeComment}>
						<ThumbsUp size={20} />
						Aplaudir <span>{likecount}</span>
					</button>
				</footer>
			</div>
		</div>
	);
}
