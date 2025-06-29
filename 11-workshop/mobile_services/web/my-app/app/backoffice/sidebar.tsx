import Link from 'next/link';

export default function Sidebar() {
    return (
        <div className="bg-teal-600 h-screen w-64 fixed">
            <div className="p-5 bg-teal-800 text-white">
                <h1 className='text-xl'>Mobile Services Version 1.0</h1>
                <div className='flex items-center gap-2 mt-3'>
                    <i className='fa fa-user'></i>
                    <span className='w-full'>Nattapon Jutamas</span>

                    <button className='bg-blue-500 rounded-full px-2 py-1'>
                        <i className='fa fa-pencil'></i>
                    </button>
                    <button className='bg-red-500 rounded-full px-2 py-1'>
                        <i className='fa fa-sign-out-alt'></i>
                    </button>

                </div>
            </div>

            <div className="p-5 text-white text-xl flex flex-col gap-2">
                <div>
                    <Link href="/backoffice/dashboard">
                        <i className="fa fa-tachometer-alt mr-2 w-[25px] text-center"></i> Dashboard
                    </Link>
                </div>
                <div>
                    <Link href="/backoffice/users">
                        <i className="fa fa-users mr-2 w-[25px] text-center"></i> Users
                    </Link>
                </div>
                <div>
                    <Link href="/backoffice/products">
                        <i className="fa fa-box mr-2 w-[25px] text-center"></i> Products
                    </Link>
                </div>
                <div>
                    <Link href="/backoffice/orders">
                        <i className="fa fa-shopping-cart mr-2 w-[25px] text-center"></i> Orders
                    </Link>
                </div>
                <div>
                    <Link href="/backoffice/reports">
                        <i className="fa fa-chart-line mr-2 w-[25px] text-center"></i> Reports
                    </Link>
                </div>
                <div>
                    <Link href="/backoffice/settings">
                        <i className="fa fa-cog mr-2 w-[25px] text-center"></i> Settings
                    </Link>
                </div>
                <div>
                    <Link href="/backoffice/logout">
                        <i className="fa fa-sign-out-alt mr-2 w-[25px] text-center"></i> Logout
                    </Link>
                </div>
                <div>
                    <Link href="/backoffice/company">
                        <i className="fa fa-building mr-2 w-[25px] text-center"></i> Company
                    </Link>
                </div>
                <div>
                    <Link href="/backoffice/buy">
                        <i className="fa fa-shopping-cart mr-2 w-[25px] text-center"></i> Buy Product
                    </Link>
                </div>
                <div>
                    <Link href="/backoffice/sell">
                        <i className="fa fa-dollar-sign mr-2 w-[25px] text-center"></i> Sell Product
                    </Link>
                </div>
                <div>
                    <Link href="/backoffice/repair">
                        <i className="fa fa-wrench mr-2 w-[25px] text-center"></i> Repair
                    </Link>
                </div>
            </div>
        </div>

    );
}