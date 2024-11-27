import PostItem from "@/Components/App/PostItem";
import HomeLayout from "@/Layouts/HomeLayout";
import { Head } from "@inertiajs/react";

export default function Index() {
    return (
        <>
            <Head title="Ресурс" />

            <div className="py-6">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 flex space-x-8">
                    <div className="w-full max-w-3xl">
                        <PostItem />
                        <PostItem className="mt-6" />
                        <PostItem className="mt-6" />
                        <PostItem className="mt-6" />
                        <PostItem className="mt-6" />
                        <PostItem className="mt-6" />
                        <PostItem className="mt-6" />
                        <PostItem className="mt-6" />
                        <PostItem className="mt-6" />
                        <PostItem className="mt-6" />
                        <PostItem className="mt-6" />
                    </div>
                    <div className="w-full max-w-sm">
                        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                            <div className="p-6 text-gray-900 dark:text-gray-100">
                                Hello world
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

Index.layout = (page: any) => <HomeLayout>{page}</HomeLayout>;
