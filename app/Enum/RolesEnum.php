<?php

namespace App\Enum;

enum RolesEnum: string
{
    case Admin = 'admin';
    case User = 'user';

    case Author = 'author';

    case Guest = 'guest';


    public static function labels(): array
    {
        return [
            self::Admin->value => 'Admin',
            self::User->value => 'User',
            self::Author->value => 'Author',
            self::Guest->value => 'Guest',
        ];
    }

    public function label(): string
    {
        return match ($this) {
            self::Admin => 'Admin',
            self::User => 'User',
            self::Author => 'Author',
            self::Guest => 'Guest',
        };
    }
}
