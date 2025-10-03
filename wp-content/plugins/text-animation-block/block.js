(function (wp) {
    const { registerBlockType } = wp.blocks;
    const { createElement: el, Fragment } = wp.element;
    const blockEditor = wp.blockEditor || wp.editor;
    const { RichText, InspectorControls, ColorPalette } = blockEditor;
    const { PanelBody, SelectControl, TextControl, RangeControl } = wp.components;

    if (!registerBlockType || !RichText) {
        console.error('Text Animation Block: required WP APIs not available.');
        return;
    }

    registerBlockType('custom/text-animation-block', {
        title: 'Text Animation Block',
        icon: 'editor-textcolor',
        category: 'widgets',
        attributes: {
            content: { type: 'string', source: 'html', selector: 'span', default: 'Your animated text here...' },
            animation: { type: 'string', default: 'typing' },
            textColor: { type: 'string', default: '#000000' },
            bgColor: { type: 'string', default: 'transparent' },
            fontSize: { type: 'string', default: '20px' },
            fontFamily: { type: 'string', default: 'inherit' },
            textAlign: { type: 'string', default: 'left' },
            textStyle: { type: 'string', default: 'normal' }, // italic / underline
            typingSpeed: { type: 'number', default: 60 },
            typingDelay: { type: 'number', default: 0 }
        },

        edit: function (props) {
            const attrs = props.attributes;
            const setAttrs = props.setAttributes;

            const animationOptions = [
                { label: 'Typing', value: 'typing' },
                { label: 'Fade In', value: 'fadeIn' },
                { label: 'Zoom In', value: 'zoomIn' },
                { label: 'Slide Left', value: 'slideLeft' },
                { label: 'Slide Right', value: 'slideRight' },
                { label: 'Bounce', value: 'bounce' },
            ];

            const fontFamilies = [
                { label: 'Default', value: 'inherit' },
                { label: 'Arial', value: 'Arial, sans-serif' },
                { label: 'Georgia', value: 'Georgia, serif' },
                { label: 'Courier New', value: '"Courier New", monospace' },
                { label: 'Times New Roman', value: '"Times New Roman", serif' },
            ];

            const inspector = el(
                InspectorControls,
                null,
                el(
                    PanelBody,
                    { title: 'Text Settings', initialOpen: true },

                    el(SelectControl, {
                        label: 'Animation',
                        value: attrs.animation,
                        options: animationOptions,
                        onChange: (val) => setAttrs({ animation: val })
                    }),

                    el('p', null, 'Typing speed (ms per character)'),
                    el(RangeControl, {
                        value: attrs.typingSpeed,
                        onChange: (val) => setAttrs({ typingSpeed: val }),
                        min: 10,
                        max: 400
                    }),

                    el('p', null, 'Typing delay (ms before start)'),
                    el(RangeControl, {
                        value: attrs.typingDelay,
                        onChange: (val) => setAttrs({ typingDelay: val }),
                        min: 0,
                        max: 5000,
                        step: 100
                    }),

                    el('p', null, 'Text Color'),
                    el(ColorPalette, {
                        value: attrs.textColor,
                        onChange: (val) => setAttrs({ textColor: val })
                    }),

                    el('p', null, 'Background Color'),
                    el(ColorPalette, {
                        value: attrs.bgColor,
                        onChange: (val) => setAttrs({ bgColor: val })
                    }),

                    el(TextControl, {
                        label: 'Font Size (px, em, %, rem)',
                        value: attrs.fontSize,
                        onChange: (val) => setAttrs({ fontSize: val })
                    }),

                    el(SelectControl, {
                        label: 'Font Family',
                        value: attrs.fontFamily,
                        options: fontFamilies,
                        onChange: (val) => setAttrs({ fontFamily: val })
                    }),

                    el(SelectControl, {
                        label: 'Text Align',
                        value: attrs.textAlign,
                        options: [
                            { label: 'Left', value: 'left' },
                            { label: 'Center', value: 'center' },
                            { label: 'Right', value: 'right' },
                        ],
                        onChange: (val) => setAttrs({ textAlign: val })
                    }),

                    el(SelectControl, {
                        label: 'Text Style',
                        value: attrs.textStyle,
                        options: [
                            { label: 'Normal', value: 'normal' },
                            { label: 'Italic', value: 'italic' },
                            { label: 'Bold', value: 'bold' },
                            { label: 'Underline', value: 'underline' },
                        ],
                        onChange: (val) => setAttrs({ textStyle: val })
                    })
                )
            );

            // Editor preview
            const preview = el(
                'div',
                {
                    className: 'animated-text ' + attrs.animation,
                    style: {
                        color: attrs.textColor,
                        backgroundColor: attrs.bgColor,
                        fontSize: attrs.fontSize,
                        fontFamily: attrs.fontFamily,
                        textAlign: attrs.textAlign,
                        fontStyle: attrs.textStyle === 'italic' ? 'italic' : 'normal',
                        textDecoration: attrs.textStyle === 'underline' ? 'underline' : 'none',
                        padding: '4px 6px',
                        display: 'inline-block',
                    },
                    'data-typing-speed': attrs.typingSpeed,
                    'data-typing-delay': attrs.typingDelay
                },
                el(RichText, {
                    tagName: 'span',
                    value: attrs.content,
                    onChange: (val) => setAttrs({ content: val }),
                    placeholder: 'Type your text...',
                    allowedFormats: ['core/bold', 'core/italic', 'core/link', 'core/underline']
                })
            );

            return el(Fragment, null, inspector, preview);
        },

        save: function (props) {
            const attrs = props.attributes || {};

            return el(
                'div',
                {
                    style: { display: 'block', width: '100%', textAlign: attrs.textAlign }
                },
                el(
                    'div',
                    {
                        className: 'animated-text ' + attrs.animation,
                        style: {
                            color: attrs.textColor,
                            backgroundColor: attrs.bgColor,
                            fontSize: attrs.fontSize,
                            fontFamily: attrs.fontFamily,
                            fontStyle: attrs.textStyle === 'italic' ? 'italic' : 'normal',
                            textDecoration: attrs.textStyle === 'underline' ? 'underline' : 'none',
                            fontWeight: attrs.textStyle === 'bold' ? 'bold' : 'normal',
                            display: 'inline-block',
                        },
                        'data-typing-speed': attrs.typingSpeed,
                        'data-typing-delay': attrs.typingDelay,
                        'data-animate': attrs.animation
                    },
                    el(RichText.Content, {
                        tagName: 'span',
                        value: attrs.content
                    })
                )
            );
        }
    });

})(window.wp);
