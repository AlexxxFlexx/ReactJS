import { useState } from 'react';
import { useAuth } from '../auth/AuthProvider';
import './HeroComments.css';

const commentsStorage = new Map();

export default function HeroComments({ heroId }) {
  const { user } = useAuth();
  const [comments, setComments] = useState(commentsStorage.get(heroId) || []);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment = {
      id: Date.now(),
      text: newComment,
      author: user?.username || "Anonyme",
      date: new Date(),
    };

    const updatedComments = [...comments, comment];
    setComments(updatedComments);
    commentsStorage.set(heroId, updatedComments);
    setNewComment("");
  };

  return (
    <div className="hero-comments">
      <h3>Commentaires</h3>
      
      {user ? (
        <form onSubmit={handleSubmit}>
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Votre commentaire..."
            required
          />
          <button type="submit">Envoyer</button>
        </form>
      ) : (
        <p>Connectez-vous pour laisser un commentaire</p>
      )}

      <div className="comments-list">
        {comments.map((comment) => (
          <div key={comment.id} className="comment">
            <strong>{comment.author}</strong>
            <small>{new Date(comment.date).toLocaleDateString()}</small>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}