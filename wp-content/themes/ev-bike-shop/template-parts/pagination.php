<?php if(get_theme_mod('ev_bike_shop_show_pagination', true )== true): ?>
	<?php
		the_posts_pagination( array(
			'prev_text' => esc_html__( 'Previous page', 'ev-bike-shop' ),
			'next_text' => esc_html__( 'Next page', 'ev-bike-shop' ),
		) );
	?>		
<?php endif; ?>