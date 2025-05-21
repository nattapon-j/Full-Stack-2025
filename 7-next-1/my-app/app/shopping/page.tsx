import ServerComponent from "../server-component/page";
import ClientComponent from "../client-component/page";

import Header from "../props/page";
import UserProfile from "../multi-props/page";

export default function Page() {
    return (
        <div>
            <div>Header and Props</div>
            <Header title="Nattapon" />

            {/* <h1>Server component</h1> */}
            <ServerComponent />

            {/* <h1>Client component</h1> */}
            <ClientComponent />

            <div>
                <h1>Multi Props</h1>
                <UserProfile name="John Doe" age={30} email="john@example.com" isAdmin={true} />
            </div>
        </div>
    );
}