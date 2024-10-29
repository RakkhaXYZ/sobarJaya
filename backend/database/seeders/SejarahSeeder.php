<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class SejarahSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('table_sejarah')->insert([
            [
                'sejarah' => ' Sobar jaya berdiri sejak tahun 1981 oleh ir. Mukini manan sebagai geologist yang berpengalaman di bidangnya. Diawali dari konsultan sederhana hingga akhirnya memikili sarana, prasarana dan tenaga kerja yang kompeten. Disahkan pada 7 desember 2013 oleh notaris dan ppat di kota bandung sebagai cv. Sobar Jaya',
                'foto' => '../foto/sejarah1.png',

            ],
        ]);
    }
}
