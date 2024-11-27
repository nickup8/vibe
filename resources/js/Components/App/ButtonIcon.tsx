import { SunIcon } from "@heroicons/react/24/outline";
import { ButtonHTMLAttributes } from "react";

export default function ButtonIcon({
    children,
    onClick,
}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button onClick={onClick}>
            <span className="h-8 w-8 hover:text-gray-700 text-gray-500 dark:text-gray-400 hover:dark:text-gray-300 transition duration-300 block">
                {children}
            </span>
        </button>
    );
}
