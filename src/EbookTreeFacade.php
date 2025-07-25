<?php

namespace AbabilItWorld\EbookTreeRenderer;

class EbookTreeFacade {
    public static function renderScript(): string {
        return '<script src="' . plugin_dir_url(__FILE__) . 'assets/js/main.js"></script>';
    }
}