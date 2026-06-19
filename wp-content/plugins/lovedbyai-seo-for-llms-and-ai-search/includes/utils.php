<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

/**
 * GeoGuru Utility Functions
 * 
 * Shared utility functions used across the plugin
 */
class GeoGuru_Utils {
    
    /**
     * Get the current full URL including protocol, host, and request URI
     * @return string
     */
    public static function get_current_full_url() {
        // Start with the site URL to get protocol and host
        $site_url = get_site_url();
        
        // Get the request URI (path + query string)
        $request_uri = isset($_SERVER['REQUEST_URI']) ? esc_url_raw(wp_unslash($_SERVER['REQUEST_URI'])) : '/';
        
        // Parse the site URL to get components
        $parsed_site_url = wp_parse_url($site_url);
        
        // Construct the full URL
        $protocol = $parsed_site_url['scheme'] ?? 'http';
        $host = $parsed_site_url['host'] ?? (isset($_SERVER['HTTP_HOST']) ? esc_url_raw( wp_unslash($_SERVER['HTTP_HOST'])) : 'localhost');
        $port = '';
        
        // Add port if it's not standard (80 for HTTP, 443 for HTTPS)
        if (isset($parsed_site_url['port'])) {
            $port = ':' . $parsed_site_url['port'];
        }
        
        return $protocol . '://' . $host . $port . $request_uri;
    }


    private static $bot_detection_map = array(
        // AI Training Crawlers (Success)
        'AI Training' => array(
            'GPTBot', 'ClaudeBot', 'anthropic-ai', 'Google-Extended', 
            'GoogleOther', 'Google-CloudVertexBot', 'Amazonbot', 
            'Bytespider', 'Applebot-Extended', 'cohere-ai', 
            'PerplexityBot', 'FacebookBot', 'Meta-ExternalAgent', 
            'ImagesiftBot', 'Diffbot', 'CCBot'
        ),
        // AI On-Demand Fetchers (Success)
        'AI On Demand' => array(
            'ChatGPT-User', 'OAI-SearchBot', 'Claude-Web', 'Perplexity-User'
        ),
        // Search Engine Bots (Ignored)
        'Search Engine' => array(
            'Googlebot', 'Bingbot', 'Slurp', 'DuckDuckBot', 
            'Baiduspider', 'YandexBot', 'Sogou', 'Exabot', 
            'Applebot', 'LinkedInBot', 'Twitterbot', 'Pinterestbot', 'Yeti'
        ),
        // Social Media Bots (Ignored)
        'Social Media' => array(
            'facebookexternalhit', 'LinkedInBot', 'Twitterbot', 'Pinterestbot'
        ),
        // SEO Tools Bots (Ignored)
        'SEO Tools' => array(
            'AhrefsBot', 'SemrushBot', 'Rogerbot', 'Majestic-12'
        )
    );

    public static function detect_bot($user_agent) {
        $ua_lower = strtolower($user_agent);
        
        // Check each bot type in priority order (AI bots first)
        foreach (self::$bot_detection_map as $bot_type => $bots) {
            foreach ($bots as $bot_name) {
                if (strpos($ua_lower, strtolower($bot_name)) !== false) {
                    return array(
                        'bot_name' => $bot_name,
                        'bot_type' => $bot_type,
                        'is_bot' => true
                    );
                }
            }
        }
        
        return array(
            'bot_name' => null,
            'bot_type' => 'unknown',
            'is_bot' => false,
            'is_success' => false
        );
    }
    
    /**
     * Sanitize a string for logging (truncate and remove sensitive data)
     * @param string $data The data to sanitize
     * @param int $max_length Maximum length to keep
     * @return string
     */
    public static function sanitize_for_logging($data, $max_length = 200) {
        if (empty($data)) {
            return 'empty';
        }
        
        // Remove sensitive patterns (basic implementation)
        $data = preg_replace('/[a-f0-9]{32,}/', '[REDACTED_TOKEN]', $data);
        $data = preg_replace('/password[=:]\s*[^\s&]+/i', 'password=[REDACTED]', $data);
        $data = preg_replace('/token[=:]\s*[^\s&]+/i', 'token=[REDACTED]', $data);
        
        // Truncate if too long
        if (strlen($data) > $max_length) {
            $data = substr($data, 0, $max_length) . '...';
        }
        
        return $data;
    }
    
    /**
     * Validate hex color format
     * 
     * @param string $color Hex color string (e.g., '#FFFFFF') or empty string
     * @return bool True if valid hex color or empty string, false otherwise
     */
    public static function validate_hex_color($color) {
        if (empty($color)) {
            return true; // Empty is valid (uses default)
        }
        return preg_match('/^#[a-fA-F0-9]{6}$/', $color) === 1;
    }
}
