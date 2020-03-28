<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQuestionSimilarityTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('question_similarity', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('question_id_1');
            $table->unsignedBigInteger('question_id_2');
            $table->timestamps();
            
            $table->foreign('question_id_1')->references('id')->on('questions');
            $table->foreign('question_id_2')->references('id')->on('questions');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('question_similarity');
    }
}
