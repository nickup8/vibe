import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import HomeLayout from "@/Layouts/HomeLayout";
import { Head, usePage } from "@inertiajs/react";

export default function Dashboard() {
    const user = usePage().props.auth.user;
    console.log(user);
    return (
        <>
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

Dashboard.layout = (page: React.ReactNode) => <HomeLayout children={page} />;
