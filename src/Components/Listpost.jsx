import React, { useState, useEffect } from 'react';

export default function Listpost() {
  const [fetchedPosts, setFetchedPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://65fee24db2a18489b386b4bd.mockapi.io/posts');
        const data = await response.json();
        setFetchedPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">جاذبه های گردشگری کیش</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            اینجا ما برای شما جاذبه های گردشگری جزیره کیش را آماده کرده ایم
          </p>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {fetchedPosts.map((post) => (
              <article key={post.id} className="relative isolate flex flex-col gap-8 lg:flex-row">
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                  <img
                    src="https://last-cdn.com/2021/09/26/rVmLIAfwv5B95CGf3NYXPeOMGUNQznfM5QyuqSao.jpeg" // Assuming your API provides an 'image' field for each post
                    alt=""
                    className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href="#">
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600">{post.description}</p>
                  </div>
                  <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                    <div className="relative flex items-center gap-x-4">
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                          <a href="#">
                            <span className="absolute inset-0" />
                            {post.author}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
