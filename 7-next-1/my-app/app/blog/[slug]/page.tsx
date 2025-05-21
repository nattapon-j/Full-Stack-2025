export default function Page({ params }: {
    params: { slug: string }
}) {
    return <div>Blog Post: {params.slug}</div>;
}
// This is a dynamic route that will match any slug in the URL
// For example, if the URL is /blog/hello-world, the slug will be "hello-world"
// If the URL is /blog/nextjs-tutorial, the slug will be "nextjs-tutorial"
// You can access the slug in your component using the params prop