import { PropsWithChildren } from "react";

export default function Section({
    className,
    children,
}: PropsWithChildren<{ className?: string }>) {
    return (
        <div
            className={
                "overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800 " +
                className
            }
        >
            <div className={"p-6 text-gray-900 dark:text-gray-100"}>
                {children}
            </div>
        </div>
    );
}
