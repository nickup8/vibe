import { User } from "@/types";
import { UserIcon } from "@heroicons/react/24/outline";

export default function Avatar({
    user,
    className,
}: {
    user: User | null;
    className?: string;
}) {
    return (
        <div
            className={
                "flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full border border-gray-300 dark:border-gray-600 " +
                className
            }
        >
            {!user?.avatar ? (
                <UserIcon className="h-full w-full p-2 text-gray-500 dark:text-gray-400 " />
            ) : (
                <img src={user.avatar} />
            )}
        </div>
    );
}
