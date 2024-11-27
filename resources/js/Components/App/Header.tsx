import { Link } from "@inertiajs/react";
import Dropdown from "../Dropdown";
import ButtonIcon from "./ButtonIcon";
import {
    BellIcon,
    MoonIcon,
    SunIcon,
    UserIcon,
} from "@heroicons/react/24/outline";
import Avatar from "./Avatar";

export default function Header({ user, theme, toggleDark }: any) {
    return (
        <header className="fixed top-0 z-50 w-full min-h-16 h-16 flex items-center justify-between border-b border-gray-200 bg-white px-20 dark:border-gray-600 dark:bg-gray-800">
            <Link href="/">
                <div className="logo text-2xl font-bold dark:text-gray-100">
                    Ресурс
                </div>
            </Link>
            <div className="flex items-center space-x-4">
                {user ? (
                    <div
                        className="tooltip tooltip-bottom -mb-3"
                        data-tip="Уведомления"
                    >
                        <ButtonIcon>
                            <BellIcon className="w-7 h-7" />
                        </ButtonIcon>
                    </div>
                ) : null}
                <div
                    className={
                        "tooltip tooltip-bottom " +
                        (theme === "dark" ? "-mb-2" : "-mb-3")
                    }
                    data-tip={
                        theme === "light" ? "Темная тема" : "Светлая тема"
                    }
                >
                    <ButtonIcon onClick={toggleDark}>
                        {theme === "light" ? (
                            <MoonIcon className="w-7 h-7" />
                        ) : (
                            <SunIcon />
                        )}
                    </ButtonIcon>
                </div>

                {user ? (
                    <Dropdown>
                        <Dropdown.Trigger>
                            <Avatar user={user} className="cursor-pointer" />
                        </Dropdown.Trigger>
                        <Dropdown.Content>
                            <Dropdown.Link href={route("profile.edit")}>
                                <div className="flex items-center space-x-2">
                                    <div className="w-6 h-6">
                                        <UserIcon className="w-6 h-6" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-semibold text-nowrap">
                                            {"Сироткин Николай".length! > 10
                                                ? "Сироткин Нико dfsdfsdfsd".slice(
                                                      0,
                                                      12
                                                  ) + "..."
                                                : "Сироткин Николай"}
                                        </span>
                                        <span className="text-xs text-gray-400 dark:text-gray-500">
                                            {user.email.length! > 20
                                                ? user.email.slice(0, 12) +
                                                  "..."
                                                : user.email}
                                        </span>
                                    </div>
                                </div>
                            </Dropdown.Link>
                            <Dropdown.Link href={route("profile.edit")}>
                                Мой профиль
                            </Dropdown.Link>
                            <Dropdown.Link
                                href={route("logout")}
                                method="post"
                                as="button"
                            >
                                Выход
                            </Dropdown.Link>
                        </Dropdown.Content>
                    </Dropdown>
                ) : (
                    <div className="flex items-center space-x-4 text-gray-500 dark:text-gray-400">
                        <Link href={route("login")}>Войти</Link>
                        <Link href={route("register")}>Зарегестрироваться</Link>
                    </div>
                )}
            </div>
        </header>
    );
}
