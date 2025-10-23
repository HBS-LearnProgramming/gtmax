<?php
/*
Template Name: Index Post Template
Description: A general post layout.
*/
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <title><?php bloginfo('name'); ?></title>
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <?php get_header(); ?>

    <main class="container px-10 pb-10">
        <?php gtmax_breadcrumbs(); ?>
        <h1 class="text-primary text-6xl font-bold border-b border-solid border-primary py-10 mb-10"><?php the_title(); ?></h1>
        <div class="post-content"><?php the_content(); ?></div>
    </main>

<?php get_footer(); ?>
