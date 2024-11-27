import Avatar from "@/Components/App/Avatar";
import ButtonIcon from "@/Components/App/ButtonIcon";
import Header from "@/Components/App/Header";
import Dropdown from "@/Components/Dropdown";
import {
    BellIcon,
    MoonIcon,
    SunIcon,
    UserIcon,
} from "@heroicons/react/24/outline";
import { Link, usePage } from "@inertiajs/react";
import { PropsWithChildren, useState } from "react";

export default function HomeLayout({ children }: PropsWithChildren) {
    const user = usePage().props.auth.user;
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
    const toggleDark = () => {
        if (theme === "light") {
            localStorage.setItem("theme", "dark");
            setTheme("dark");
        } else {
            localStorage.setItem("theme", "light");
            setTheme("light");
        }
    };
    return (
        <div className={"relative " + theme}>
            <div className="min-h-screen bg-gray-100 dark:bg-gray-700">
                <Header user={user} theme={theme} toggleDark={toggleDark} />
                <main className="pt-20">{children}</main>
            </div>
        </div>
    );
}
