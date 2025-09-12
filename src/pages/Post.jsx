import { useState, useEffect } from "react";
import Button from "../components/Button";

export const Post = () => {
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  const handlePost = () => {
    if (!content.trim()) return alert("Please write something!");

    const newPost = {
      id: Date.now(),
      content,
      likes: 0,
      dislikes: 0,
      bookmarked: false,
      comments: [],
    };

    const updatedPosts = [newPost, ...posts];
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    setContent("");
  };

  const handleDelete = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-orange-100 p-6">
      <div className="bg-white shadow-md hover:shadow-black p-6 rounded-xl w-96 mb-8">
        <h1 className="text-2xl font-bold mb-4 text-center">Create Post</h1>

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
          className="w-full p-3 border rounded-lg"
          rows={4}
        />

        <Button onClick={handlePost} text="Post" />
      </div>

      <div className="w-full md:w-2/3 space-y-4">
        {posts.length === 0 ? (
          <p className="text-center text-gray-600">
            No posts yet. Create one above!
          </p>
        ) : (
          posts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-md p-4 rounded-xl border flex justify-between items-center"
            >
              <p className="text-gray-800">{post.content}</p>

              <Button onClick={() => handleDelete(post.id)} text="Delete" />
            </div>
          ))
        )}
      </div>
    </div>
  );
};
