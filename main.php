<?php
/**
 * Plugin Name: Timeline block
 * Description: Gutenberg timeline block
 * Author: Jen Wachter
 * Text Domain: timeline
 */

add_action('init', function () {
  register_block_type(__DIR__ . '/build/simple-wysiwyg');
  register_block_type(__DIR__ . '/build/timeline');
  register_block_type(__DIR__ . '/build/timeline-group');
  register_block_type(__DIR__ . '/build/timeline-milestones');
  register_block_type(__DIR__ . '/build/timeline-milestone');
});
