<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateArticlesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->increments('id');
            $table->string('author')->nullable();                   // Some News API 'author' fields are null
            $table->string('content', 260);                         // News API 'content' is truncated at 260 characters.
            $table->string('description', 260);                     // News API 'description' is truncated at 260 characters.
            $table->datetime('published_at');
            $table->integer('source_id')->unsigned()->index();
            $table->string('title');                                // News API 'title' is truncated at 260 characters.
            $table->string('url', 2083);                            // Max URL length is 2083 characters.
            $table->string('urlToImage', 2083);                     // Max URL length is 2083 characters.
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('articles');
    }
}
