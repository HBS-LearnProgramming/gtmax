<?php
define( 'WP_CACHE', true );



/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'gtmax_db' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

define(
    'GTMAX_API_TOKEN',
    'a1a3e31759d4b1b179037afc6c163e63ae4815feb3f45633a40f4225ad278822e6b000642af887bf'
);

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'W`!_|;)U$8a6n;[l541XVzp/8h:kotO,me^J0/8V-JS&vw#y91.AZW.}L!~5TXrD' );
define( 'SECURE_AUTH_KEY',   ')F<A;g&/+C)!Mdd;Ti?qfP6{GUqT?7QD?pi1qBh^vu.6b>gt:(eXH~If{j)8:N3~' );
define( 'LOGGED_IN_KEY',     'bx|cQL-1P(Zl5fwUV. yZnM[YAbY<#A;1cTgl[PQWq#OXWsMyh8 Py]N>;o0$1&R' );
define( 'NONCE_KEY',         'Z]yi9Ov}*g.8bJDxXP%nl:CEhUC;hXc;S(k&6}6p>j/H>Hz/-AJ G8A+@ViC{JsL' );
define( 'AUTH_SALT',         'g`G[S?I,~B EddU6Le(rPi%+n#8>we6FC8c+@Nb<U`G !gGfW09*fF[VjP5ND4mv' );
define( 'SECURE_AUTH_SALT',  '$?xM1Sa,QVw;2>M5t3q~#Lsm0thzP]8r_D^93z!mhQRBCaz#^i79lCSv`KTtj.Sm' );
define( 'LOGGED_IN_SALT',    'Cvl<CoBGNan1#5^`PX^klogTf|~q/8R$C?kFlN?<a0+U(k>-bF#wO@5c~/M*OQzC' );
define( 'NONCE_SALT',        'rSb?X&vFVeGA3O|bW;A5~.F$SwsApPmMiqdwyLKOFQ_Wpw!<Vvx,/Bkd@=>{u|@(' );
define( 'WP_CACHE_KEY_SALT', '- 6+K_$w]CTR,clj$ffQ[y~g2/p!qZm4`)d/oR:MM5,BV?LV%R-eyFW&gnV|!&^%' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'FS_METHOD', 'direct' );
define( 'COOKIEHASH', '3cffbb70315d0fb063b6b9f28c96fe97' );
define( 'WP_AUTO_UPDATE_CORE', 'minor' );
define('WP_HOME', 'http://gtmax.test/');
define('WP_SITEURL', 'http://gtmax.test/');

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
