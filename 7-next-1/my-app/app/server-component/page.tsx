export default function ServerComponent() {
    const items = ['Java', 'JavaScript', 'Python'];
    // This is a server component that will be rendered on the server side
    // You can use the fetch API to get data from an external API
    // You can also use the map function to iterate over an array and render a list of items
    // For example, if you have an array of items, you can use the map function to render a list of items
    return (
        <div>
            <h1>Server Component</h1>
            <ul>
                {items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
