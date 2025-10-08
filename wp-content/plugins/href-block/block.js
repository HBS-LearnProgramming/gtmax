(function () {
    const { registerBlockType } = wp.blocks;
    const { InspectorControls, InnerBlocks } = wp.blockEditor || wp.editor;
    const { PanelBody, TextControl, ToggleControl } = wp.components;
    const { __ } = wp.i18n;
    const el = wp.element.createElement;

    registerBlockType('custom/href-block', {
        title: __('Href Block', 'href-block'),
        icon: 'admin-links',
        category: 'design',
        description: __('A link wrapper block that allows inner content.', 'href-block'),
        supports: {
            html: false,
        },
        attributes: {
            href: { type: 'string', default: '' },
            openInNewTab: { type: 'boolean', default: false },
            relNofollow: { type: 'boolean', default: false },
            relSponsored: { type: 'boolean', default: false },
        },

        edit: (props) => {
            const { attributes, setAttributes } = props;
            const { href, openInNewTab, relNofollow, relSponsored } = attributes;

            const relAttrs = [];
            if (relNofollow) relAttrs.push('nofollow');
            if (relSponsored) relAttrs.push('sponsored');
            if (openInNewTab) relAttrs.push('noopener', 'noreferrer');

            const rel = relAttrs.join(' ') || undefined;

            return el('div', { className: 'href-block-editor' },
                el(InspectorControls, {},
                    el(PanelBody, { title: __('Link Settings', 'href-block'), initialOpen: true },
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
                    )
                ),
                el('div', {
                    target: openInNewTab ? '_blank' : undefined,
                    rel: rel,
                    className: 'href-block',
                    style: {
                        display: 'block',
                        textDecoration: 'none',
                        border: '1px dashed #ccc',
                        padding: '10px',
                        minHeight: '50px'
                    }
                },
                    el(InnerBlocks, {
                        placeholder: __('Add blocks inside this link', 'href-block'),
                    })
                )
            );
        },

        save: (props) => {
            const { attributes } = props;
            const { href, openInNewTab, relNofollow, relSponsored } = attributes;

            const relAttrs = [];
            if (relNofollow) relAttrs.push('nofollow');
            if (relSponsored) relAttrs.push('sponsored');
            if (openInNewTab) relAttrs.push('noopener', 'noreferrer');

            const rel = relAttrs.join(' ') || undefined;

            return el('a', {
                href: href || '#',
                target: openInNewTab ? '_blank' : undefined,
                rel: rel,
                className: 'href-block',
            },
                el(InnerBlocks.Content)
            );
        },
    });
})();
