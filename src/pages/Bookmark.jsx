import { useEffect, useState } from "react";

export const Bookmark = () => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    const bookmarkedPosts = storedPosts.filter((p) => p.bookmarked);
    setBookmarks(bookmarkedPosts);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Bookmarks</h1>

      {bookmarks.length === 0 ? (
        <p className="text-gray-500">You haven't bookmarked any post yet</p>
      ) : (
        <div className="space-y-6 w-full md:w-2/3">
          {bookmarks.map((post) => (
            <div key={post.id} className="bg-white shadow-md rounded-xl p-5">
              <p >{post.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
