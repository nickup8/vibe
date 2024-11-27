import {
    ChatBubbleLeftRightIcon,
    HandThumbUpIcon,
} from "@heroicons/react/24/outline";
import Avatar from "./Avatar";
import Section from "./Section";
import { Link } from "@inertiajs/react";

export default function PostItem({ className }: { className?: string }) {
    console.log(
        "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Путь речью гор текстов"
            .length
    );
    return (
        <Section className={className}>
            <div className=" mb-4">
                <span className="inline-block">
                    <Link
                        href="#"
                        className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 dark:hover:text-blue-500 transition duration-300 focus:text-blue-700 dark:focus:text-blue-400"
                    >
                        <Avatar user={null} className=" w-8 h-8" />
                        <span className="">Александр Сергеевич Пушкин</span>
                    </Link>
                </span>
            </div>
            <div className="flex justify-between">
                <div className="w-full max-w-md ">
                    <Link
                        href="#"
                        className=" dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-500 transition duration-300"
                    >
                        <h2 className="text-2xl font-bold leading-tight">
                            Далеко-далеко за словесными горами в стране гласных
                            и согласных живут, рыбные тексты.
                        </h2>
                    </Link>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">
                        {"Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Путь речью гор текстов алфавит языком там раз, осталось океана текст жаренные то по всей до ipsum рукописи правилами рот последний!"
                            .length > 100
                            ? "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Путь речью гор текстов алфавит языком там раз, осталось океана текст жаренные то по всей до ipsum рукописи правилами рот последний!".slice(
                                  0,
                                  100
                              ) + "..."
                            : "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Путь речью гор текстов алфавит языком там раз, осталось океана текст жаренные то по всей до ipsum рукописи правилами рот последний!"}
                    </p>
                </div>
                <div className="w-full max-w-56 ">
                    <div className="overflow-hidden rounded-xl">
                        <img
                            src="https://avatars.mds.yandex.net/i?id=7e607cbd4aa87bf08ef22f3117612cedb7a09ec6185f7894-12585840-images-thumbs&n=13"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="flex mt-6 space-x-4 text-sm text-gray-500 dark:text-gray-400">
                <div>12 дек 2024</div>
                <div className="flex space-x-2">
                    <HandThumbUpIcon className="h-5 w-5 text-gray-500" />
                    <span>15</span>
                </div>
                <div className="flex space-x-2">
                    <ChatBubbleLeftRightIcon className="h-5 w-5 text-gray-500" />
                    <span>5</span>
                </div>
            </div>
        </Section>
    );
}
