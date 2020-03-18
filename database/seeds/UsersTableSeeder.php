<?php

use Illuminate\Database\Seeder;
use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'firstname' => 'Admin',
            'lastname' => 'User',
            'email' => 'admin@example.com',
            'username' => 'admin',
            'password' => bcrypt('Welcome2019!'),
        ]);
    }
}
