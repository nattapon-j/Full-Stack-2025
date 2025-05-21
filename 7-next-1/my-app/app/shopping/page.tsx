import ServerComponent from "../server-component/page";
import ClientComponent from "../client-component/page";

import Header from "../props/page";

export default function Page() {
    return (
        <div>
            <div>Header and Props</div>
            <Header title="Nattapon" />

            {/* <h1>Server component</h1> */}
            <ServerComponent />

            {/* <h1>Client component</h1> */}
            <ClientComponent />
        </div>
    );
}