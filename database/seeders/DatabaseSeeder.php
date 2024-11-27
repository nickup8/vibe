<?php

namespace Database\Seeders;

use App\Enum\PermissionsEnum;
use App\Enum\RolesEnum;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        $adminRole = Role::create([
            'name' => RolesEnum::Admin->value,]);
        $userRole = Role::create([
            'name' => RolesEnum::User->value,]);
        $authorRole = Role::create([
            'name' => RolesEnum::Author->value,]);
        $guestRole = Role::create([
            'name' => RolesEnum::Guest->value,]);


        $manegePostsPermission = Permission::create([
            'name' => PermissionsEnum::ManegePosts->value,]);
        $manageCommentsPermission = Permission::create([
            'name' => PermissionsEnum::ManageComments->value,]);
        $upvoteDownvotePermission = Permission::create([
            'name' => PermissionsEnum::UpvoteDownvote->value,]);

        $adminRole->syncPermissions([$manegePostsPermission, $manageCommentsPermission, $upvoteDownvotePermission]);
        $authorRole->syncPermissions([$manegePostsPermission, $manageCommentsPermission, $upvoteDownvotePermission]);
        $guestRole->syncPermissions([]);
        $userRole->syncPermissions([$upvoteDownvotePermission, $manageCommentsPermission]);

        User::factory()->create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
        ])->assignRole(RolesEnum::Admin);
        User::factory()->create([
            'name' => 'User User',
            'email' => 'user@example.com',
        ])->assignRole(RolesEnum::User);


    }
}
