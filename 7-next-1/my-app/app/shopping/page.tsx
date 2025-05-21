import ServerComponent from "../server-component/page";
import ClientComponent from "../client-component/page";

export default function Page() {
    return (
        <div>
            {/* <h1>Server component</h1> */}
            <ServerComponent />

            {/* <h1>Client component</h1> */}
            <ClientComponent />
        </div>
    );
}