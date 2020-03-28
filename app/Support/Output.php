<?php

namespace App\Support;

class Output
{
    /**
     * Convert text to HTML
     * @param string $text
     * @return string
     */
    public function textToHtml($text)
    {
        $html = nl2br($text);
        return $html;
    }
}
