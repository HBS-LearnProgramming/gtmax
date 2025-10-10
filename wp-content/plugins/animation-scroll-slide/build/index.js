(function (wp) {
    const { registerBlockType } = wp.blocks;
    const { useBlockProps, InnerBlocks, InspectorControls } = wp.blockEditor;
    const { PanelBody, RangeControl, TextControl } = wp.components;
    const { __ } = wp.i18n;
    const { createElement, Fragment } = wp.element;

    /**
     * 🟩 Parent Block — Masonry Container
     */
    registerBlockType('acro/animation-scroll-slide', {
        title: __('Animation Masonry Scroll Slide', 'animation-scroll-slide'),
        icon: 'slides',
        category: 'layout',
        attributes: {
            duration: { type: 'number', default: 10 },
            columnWidth: { type: 'string', default: '250px' },
            columnGap: { type: 'string', default: '16px' },
            height: { type: 'string', default: 'auto' },
        },
        edit: function ({ attributes, setAttributes }) {
            const { duration, columnWidth, columnGap, height } = attributes;
            const blockProps = useBlockProps({ className: 'animation-scroll-slide' });

            return createElement(
                Fragment,
                null,
                createElement(
                    InspectorControls,
                    null,
                    createElement(
                        PanelBody,
                        { title: __('Masonry Settings', 'animation-scroll-slide') },
                        createElement(RangeControl, {
                            label: __('Animation Duration (s)', 'animation-scroll-slide'),
                            value: duration,
                            onChange: (value) => setAttributes({ duration: value }),
                            min: 5,
                            max: 60,
                        }),
                        createElement(TextControl, {
                            label: __('Column Width (px)', 'animation-scroll-slide'),
                            value: columnWidth,
                            onChange: (value) => setAttributes({ columnWidth: value }),
                        }),
                        createElement(TextControl, {
                            label: __('Column Gap (px)', 'animation-scroll-slide'),
                            value: columnGap,
                            onChange: (value) => setAttributes({ columnGap: value }),
                        }),
                        createElement(TextControl, {
                            label: __('Container Max Height (px/vh/%)', 'animation-scroll-slide'),
                            value: height,
                            onChange: (value) => setAttributes({ height: value }),
                        })
                    )
                ),
                createElement(
                    'div',
                    Object.assign({}, blockProps, {
                        style: {
                            columnWidth: columnWidth,
                            columnGap: columnGap,
                            maxHeight: height,
                            overflowY: 'auto',
                        },
                    }),
                    createElement(InnerBlocks, {
                        allowedBlocks: ['acro/animation-grid-item'],
                    })
                )
            );
        },
        save: function ({ attributes }) {
            const { duration, columnWidth, columnGap, height } = attributes;
            const blockProps = useBlockProps.save({
                className: 'animation-scroll-slide',
                style: {
                    columnWidth: columnWidth,
                    columnGap: columnGap,
                    maxHeight: height,
                    overflowY: 'hidden',
                    overflowX: 'hidden',
                    animation: `scrollY ${duration}s linear infinite`,
                },
            });

            return createElement(
                'div',
                blockProps,
                createElement(InnerBlocks.Content, null)
            );
        },
    });

    /**
     * 🟨 Child Block — Masonry Item
     */
    registerBlockType('acro/animation-grid-item', {
        title: __('Animation Masonry Item', 'animation-scroll-slide'),
        icon: 'screenoptions',
        category: 'layout',
        parent: ['acro/animation-scroll-slide'],
        attributes: {
            customWidth: { type: 'string', default: '100%' },
            customHeight: { type: 'string', default: 'auto' },
            marginBottom: { type: 'string', default: '0px' },
            marginRight: { type: 'string', default: '0px' },
        },
        edit: function ({ attributes, setAttributes }) {
            const { customWidth, customHeight, marginBottom, marginRight } = attributes;

            const blockProps = useBlockProps({
                className: 'animation-grid-item',
                style: {
                    display: 'inline-block',
                    width: customWidth,
                    height: customHeight,
                    marginBottom: marginBottom,
                    marginRight: marginRight,
                    textAlign: 'center',
                    padding: '10px',
                    boxSizing: 'border-box',
                    breakInside: 'avoid',
                },
            });

            return createElement(
                Fragment,
                null,
                createElement(
                    InspectorControls,
                    null,
                    createElement(
                        PanelBody,
                        { title: __('Masonry Item Settings', 'animation-scroll-slide') },
                        createElement(TextControl, {
                            label: __('Width (px, %, or auto)', 'animation-scroll-slide'),
                            value: customWidth,
                            onChange: (value) => setAttributes({ customWidth: value }),
                        }),
                        createElement(TextControl, {
                            label: __('Height (px, %, or auto)', 'animation-scroll-slide'),
                            value: customHeight,
                            onChange: (value) => setAttributes({ customHeight: value }),
                        }),
                        createElement(TextControl, {
                            label: __('Spacing Bottom (px, %)', 'animation-scroll-slide'),
                            value: marginBottom,
                            onChange: (value) => setAttributes({ marginBottom: value }),
                        }),
                        createElement(TextControl, {
                            label: __('Spacing Right (px, %)', 'animation-scroll-slide'),
                            value: marginRight,
                            onChange: (value) => setAttributes({ marginRight: value }),
                        })
                    )
                ),
                createElement('div', blockProps, createElement(InnerBlocks, null))
            );
        },
        save: function ({ attributes }) {
            const { customWidth, customHeight, marginBottom, marginRight } = attributes;
            const blockProps = useBlockProps.save({
                className: 'animation-grid-item',
                style: {
                    display: 'inline-block',
                    width: customWidth,
                    height: customHeight,
                    marginBottom: marginBottom,
                    marginRight: marginRight,
                    breakInside: 'avoid',
                },
            });
            return createElement('div', blockProps, createElement(InnerBlocks.Content, null));
        },
    });

    /**
     * 🌀 Optional Animation
     */
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes scrollY {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animation-scroll-slide {
            will-change: transform;
        }
    `;
    document.head.appendChild(style);

})(window.wp);
