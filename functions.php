<?php

register_nav_menus(array(
	'primary' => __( 'Primary Menu', 'wp_spa' )
));

function enqueue_script(){
    $js_data = [
        'siteUrl' => get_site_url(),
        'title' => get_bloginfo(),
        'description' => get_bloginfo('description')
    ];
    wp_register_script('theme-script',
                       get_template_directory_uri(). '/bundle.js');
    wp_localize_script('theme-script', 'wpData', $js_data);
    wp_enqueue_script('theme-script',
                      get_template_directory_uri(). '/bundle.js',
                      null,
                      '1.0.3',
                      true);
}
add_action('wp_enqueue_scripts', 'enqueue_script');