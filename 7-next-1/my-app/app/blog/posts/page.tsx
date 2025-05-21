export default async function Page() {
    let data = await fetch('https://api.vercel.app/blog');
    let posts = await data.json();
    return (
        <div>
            <h1>Blog Posts</h1>
            <ul>
                {posts.map((post: any) => (
                    <li key={post.id}>
                        {/* <a href={`/blog/${post.slug}`}>{post.title}</a> */}
                        <span>{post.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

// This is a static route that will match the URL /blog/posts
// You can use the fetch API to get data from an external API