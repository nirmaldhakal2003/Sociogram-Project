import { useEffect, useState } from "react";
import { ThumbsUp, ThumbsDown, Bookmark, MessageCircle } from "lucide-react";
import Button from "../components/Button";

export const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  const updatePosts = (updated) => {
    setPosts(updated);
    localStorage.setItem("posts", JSON.stringify(updated));
  };

  const handleLike = (id) => {
    updatePosts(
      posts.map((p) =>
        p.id === id
          ? p.liked || p.disliked
            ? p
            : { ...p, likes: p.likes + 1, liked: true }
          : p
      )
    );
  };

  const handleDislike = (id) => {
    updatePosts(
      posts.map((p) =>
        p.id === id
          ? p.disliked || p.liked
            ? p
            : { ...p, dislikes: p.dislikes + 1, disliked: true }
          : p
      )
    );
  };

  const handleBookmark = (id) => {
    updatePosts(
      posts.map((p) => (p.id === id ? { ...p, bookmarked: !p.bookmarked } : p))
    );
  };

  const handleComment = (id, comment) => {
    if (!comment.trim()) return;
    updatePosts(
      posts.map((p) =>
        p.id === id ? { ...p, comments: [...p.comments, comment] } : p
      )
    );
  };

  return (
    <div className="min-h-screen bg-orange-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Home</h1>
      {posts.length === 0 ? (
        <p>
          create post to see post here.. go to post page and create a post first
        </p>
      ) : (
        <div className="space-y-6 w-full md:w-2/3">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              onLike={handleLike}
              onDislike={handleDislike}
              onBookmark={handleBookmark}
              onComment={handleComment}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const PostCard = ({ post, onLike, onDislike, onBookmark, onComment }) => {
  const [commentInput, setCommentInput] = useState("");

  return (
    <div className="bg-white shadow-md rounded-xl p-5">
      <p className="text-gray-800">{post.content}</p>
      <div className="flex gap-4 mt-4 items-center">
        <button
          className={`flex items-center gap-1 ${
            post.liked ? "text-blue-700" : "text-blue-500"
          } hover:scale-110 transition`}
          onClick={() => onLike(post.id)}
          disabled={post.liked || post.disliked}
        >
          <ThumbsUp size={18} /> {post.likes}
        </button>
        <button
          className={`flex items-center gap-1 ${
            post.disliked ? "text-red-700" : "text-red-500"
          } hover:scale-110 transition`}
          onClick={() => onDislike(post.id)}
          disabled={post.disliked || post.liked}
        >
          <ThumbsDown size={18} /> {post.dislikes}
        </button>
        <button
          className={`flex items-center gap-1 ${
            post.bookmarked ? "text-yellow-500" : "text-gray-500"
          } hover:scale-110 transition`}
          onClick={() => onBookmark(post.id)}
        >
          <Bookmark size={18} />
          {post.bookmarked ? "Saved" : "Save"}
        </button>
      </div>
      <div className="mt-4">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            placeholder="Add a comment..."
            className="flex-1 p-2 border rounded-lg"
          />
          <Button
            onClick={() => {
              onComment(post.id, commentInput);
              setCommentInput("");
            }}
            text=" Comment"
          />
        </div>
        {post.comments.length > 0 && (
          <div className="mt-3 space-y-2">
            {post.comments.map((c, i) => (
              <div key={i} className="flex items-start gap-2">
                <MessageCircle size={16} className="text-gray-500" />
                <p className="text-gray-700">{c}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
