(function () {
    const { registerBlockType } = wp.blocks;
    const { InspectorControls, InnerBlocks } = wp.blockEditor || wp.editor;
    const { PanelBody, TextControl, ToggleControl, ColorPalette, RangeControl } = wp.components;
    const { __ } = wp.i18n;
    const el = wp.element.createElement;

    registerBlockType('custom/href-block', {
        title: __('Href Block', 'href-block'),
        icon: 'admin-links',
        category: 'design',
        description: __('A clickable block with full styling and nested blocks.', 'href-block'),
        supports: { html: false },

        attributes: {
            href: { type: 'string', default: '' },
            openInNewTab: { type: 'boolean', default: false },
            relNofollow: { type: 'boolean', default: false },
            relSponsored: { type: 'boolean', default: false },
            border: { type: 'string', default: '1px solid #ccc' },
            radius: { type: 'number', default: 8 },
            bgColor: { type: 'string', default: '#ffffff' },
            shadow: { type: 'number', default: 10 },
            shadowColor: { type: 'string', default: '#00000033' },
            padding: { type: 'string', default: '15px' },
            width: { type: 'string', default: '100%'},
        },

        edit: (props) => {
            const { attributes, setAttributes } = props;
            const { href, openInNewTab, relNofollow, relSponsored, border, radius, bgColor, shadow, shadowColor, padding, width } = attributes;

            const relAttrs = [];
            if (relNofollow) relAttrs.push('nofollow');
            if (relSponsored) relAttrs.push('sponsored');
            if (openInNewTab) relAttrs.push('noopener', 'noreferrer');
            const rel = relAttrs.join(' ') || undefined;

            // Inline style for live preview
            const blockStyle = {
                display: 'block',
                border: border,
                borderRadius: `${radius}px`,
                backgroundColor: bgColor,
                boxShadow: shadow ? `0 0 ${shadow}px ${shadowColor}` : 'none',
                padding: padding,
                textDecoration: 'none',
                minHeight: '50px',
                transition: 'all 0.2s ease',
            };

            return el(
                'div',
                { className: 'href-block-editor' },
                el(
                    InspectorControls,
                    null,
                    el(
                        PanelBody,
                        { title: __('Link Settings', 'href-block'), initialOpen: true },
                        el(TextControl, {
                            label: __('Href URL', 'href-block'),
                            value: href,
                            placeholder: 'https://example.com',
                            onChange: (value) => setAttributes({ href: value }),
                        }),
                        el(ToggleControl, {
                            label: __('Open in new tab', 'href-block'),
                            checked: openInNewTab,
                            onChange: (value) => setAttributes({ openInNewTab: value }),
                        }),
                        el(ToggleControl, {
                            label: __('Add rel="nofollow"', 'href-block'),
                            checked: relNofollow,
                            onChange: (value) => setAttributes({ relNofollow: value }),
                        }),
                        el(ToggleControl, {
                            label: __('Add rel="sponsored"', 'href-block'),
                            checked: relSponsored,
                            onChange: (value) => setAttributes({ relSponsored: value }),
                        })
                    ),
                    el(
                        PanelBody,
                        { title: __('Style Settings', 'href-block'), initialOpen: true },
                        el(TextControl, {
                            label: __('Border (CSS syntax)', 'href-block'),
                            value: border,
                            placeholder: 'e.g. 1px solid #ccc',
                            onChange: (value) => setAttributes({ border: value }),
                        }),
                        el(RangeControl, {
                            label: __('Border Radius (px)', 'href-block'),
                            value: radius,
                            min: 0,
                            max: 100,
                            onChange: (value) => setAttributes({ radius: value }),
                        }),
                        el('p', {}, __('Background Color', 'href-block')),
                        el(ColorPalette, {
                            value: bgColor,
                            onChange: (value) => setAttributes({ bgColor: value }),
                        }),
                        el(RangeControl, {
                            label: __('Shadow Strength', 'href-block'),
                            value: shadow,
                            min: 0,
                            max: 100,
                            onChange: (value) => setAttributes({ shadow: value }),
                        }),
                        el('p', {}, __('Shadow Color', 'href-block')),
                        el(ColorPalette, {
                            value: shadowColor,
                            onChange: (value) => setAttributes({ shadowColor: value }),
                        }),
                        el(TextControl, {
                            label: __('Padding (CSS syntax)', 'href-block'),
                            value: padding,
                            placeholder: 'e.g. 10px 20px',
                            onChange: (value) => setAttributes({ padding: value }),
                        }),
                        el(TextControl, {
                            label: __('Width (CSS syntax)', 'href-block'),
                            value: width,
                            placeholder: 'e.g. 10px 20px',
                            onChange: (value) => setAttributes({ width: value }),
                        })
                    )
                ),
                el(
                    'div',
                    {
                        className: 'href-block',
                        style: blockStyle,
                        rel: rel,
                        target: openInNewTab ? '_blank' : undefined,
                    },
                    el(InnerBlocks, {
                        placeholder: __('Add blocks inside this link', 'href-block'),
                    })
                )
            );
        },

        save: (props) => {
            const { attributes } = props;
            const { href, openInNewTab, relNofollow, relSponsored, border, radius, bgColor, shadow, shadowColor, padding, width } = attributes;

            const relAttrs = [];
            if (relNofollow) relAttrs.push('nofollow');
            if (relSponsored) relAttrs.push('sponsored');
            if (openInNewTab) relAttrs.push('noopener', 'noreferrer');
            const rel = relAttrs.join(' ') || undefined;

            const style = {
                border: border,
                borderRadius: `${radius}px`,
                backgroundColor: bgColor,
                boxShadow: shadow ? `0 0 ${shadow}px ${shadowColor}` : 'none',
                padding: padding,
                width: width,
                textDecoration: 'none',
                display: 'block',
            };

            return el(
                'a',
                {
                    href: href || '#',
                    target: openInNewTab ? '_blank' : undefined,
                    rel: rel,
                    className: 'href-block',
                    style: style,
                },
                el(InnerBlocks.Content, null)
            );
        },
    });
})();
