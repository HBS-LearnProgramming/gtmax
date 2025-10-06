(function () {
    const { registerBlockType } = wp.blocks;
    const { InspectorControls, MediaUpload, RichText } = wp.blockEditor || wp.editor;
    const { PanelBody, RangeControl, SelectControl, ColorPicker, TextControl, Button } = wp.components;
    const { __ } = wp.i18n;
    const el = wp.element.createElement;

    registerBlockType('custom/cover', {
        title: __('Custom Cover', 'custom-cover'),
        icon: 'format-image',
        category: 'design',
        attributes: {
            text: { type: 'string', default: 'Your Cover Text' },
            textAlign: { type: 'string', default: 'center' },
            alignItems: { type: 'string', default: 'center' },
            textColor: { type: 'string', default: '#ffffff' },
            fontFamily: { type: 'string', default: 'inherit' },
            fontStyle: { type: 'string', default: 'normal' },
            borderStyle: { type: 'string', default: 'solid' },
            borderRadius: { type: 'number', default: 10 },
            borderColor: { type: 'string', default: '#ffffff' },
            bgImage: { type: 'string', default: '' },
            overlayOpacity: { type: 'number', default: 0.3 },
            width: { type: 'string', default: '100%' },
            height: { type: 'string', default: '300px' },
        },

        edit: (props) => {
            const { attributes, setAttributes } = props;
            const {
                text, textAlign, alignItems, textColor, fontFamily, fontStyle,
                borderStyle, borderRadius, borderColor, bgImage, overlayOpacity,
                width, height,
            } = attributes;

            const style = {
                display: 'flex',
                justifyContent: textAlign,
                alignItems: alignItems,
                borderStyle: borderStyle,
                borderRadius: borderRadius + 'px',
                borderColor: borderColor,
                borderWidth: '2px',
                backgroundImage: bgImage ? `url(${bgImage})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: width,
                height: height,
                position: 'relative',
                color: textColor,
                fontFamily: fontFamily,
                fontStyle: fontStyle,
            };

            const overlayStyle = {
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
                borderRadius: borderRadius + 'px',
            };

            return el('div', {},
                el(InspectorControls, {},
                    el(PanelBody, { title: __('Cover Settings', 'custom-cover') },
                        el(MediaUpload, {
                            onSelect: (media) => setAttributes({ bgImage: media.url }),
                            render: ({ open }) => el(Button, { onClick: open, isSecondary: true }, __('Upload Background', 'custom-cover')),
                        }),
                        el('hr'),
                        el(TextControl, {
                            label: __('Width', 'custom-cover'),
                            value: width,
                            onChange: (value) => setAttributes({ width: value }),
                        }),
                        el(TextControl, {
                            label: __('Height', 'custom-cover'),
                            value: height,
                            onChange: (value) => setAttributes({ height: value }),
                        }),
                        el(RangeControl, {
                            label: __('Overlay Opacity', 'custom-cover'),
                            value: overlayOpacity,
                            min: 0,
                            max: 1,
                            step: 0.1,
                            onChange: (value) => setAttributes({ overlayOpacity: value }),
                        }),
                        el('hr'),
                        el(SelectControl, {
                            label: __('Border Style', 'custom-cover'),
                            value: borderStyle,
                            options: [
                                { label: 'Solid', value: 'solid' },
                                { label: 'Dashed', value: 'dashed' },
                                { label: 'Dotted', value: 'dotted' },
                                { label: 'None', value: 'none' },
                            ],
                            onChange: (value) => setAttributes({ borderStyle: value }),
                        }),
                        el(RangeControl, {
                            label: __('Border Radius', 'custom-cover'),
                            value: borderRadius,
                            min: 0,
                            max: 100,
                            onChange: (value) => setAttributes({ borderRadius: value }),
                        }),
                        el(ColorPicker, {
                            color: borderColor,
                            onChangeComplete: (value) => setAttributes({ borderColor: value.hex }),
                            disableAlpha: true,
                        }),
                        el('hr'),
                        el(SelectControl, {
                            label: __('Text Align', 'custom-cover'),
                            value: textAlign,
                            options: [
                                { label: 'Left', value: 'flex-start' },
                                { label: 'Center', value: 'center' },
                                { label: 'Right', value: 'flex-end' },
                            ],
                            onChange: (value) => setAttributes({ textAlign: value }),
                        }),
                        el(SelectControl, {
                            label: __('Vertical Align', 'custom-cover'),
                            value: alignItems,
                            options: [
                                { label: 'Top', value: 'flex-start' },
                                { label: 'Center', value: 'center' },
                                { label: 'Bottom', value: 'flex-end' },
                            ],
                            onChange: (value) => setAttributes({ alignItems: value }),
                        }),
                        el(ColorPicker, {
                            color: textColor,
                            onChangeComplete: (value) => setAttributes({ textColor: value.hex }),
                            disableAlpha: true,
                        }),
                        el(TextControl, {
                            label: __('Font Family', 'custom-cover'),
                            value: fontFamily,
                            onChange: (value) => setAttributes({ fontFamily: value }),
                        }),
                        el(SelectControl, {
                            label: __('Font Style', 'custom-cover'),
                            value: fontStyle,
                            options: [
                                { label: 'Normal', value: 'normal' },
                                { label: 'Italic', value: 'italic' },
                                { label: 'Bold', value: 'bold' },
                            ],
                            onChange: (value) => setAttributes({ fontStyle: value }),
                        })
                    )
                ),
                el('div', { className: 'custom-cover-block', style },
                    el('div', { style: overlayStyle }),
                    el(RichText, {
                        tagName: 'div',
                        value: text,
                        onChange: (value) => setAttributes({ text: value }),
                        placeholder: __('Enter cover text...', 'custom-cover'),
                        style: { position: 'relative', zIndex: 2, textAlign: textAlign },
                    })
                )
            );
        },

        save: (props) => {
            const { attributes } = props;
            const {
                text, textAlign, alignItems, textColor, fontFamily, fontStyle,
                borderStyle, borderRadius, borderColor, bgImage, overlayOpacity,
                width, height,
            } = attributes;

            return el('div', {
                className: 'custom-cover-block',
                style: {
                    display: 'flex',
                    justifyContent: textAlign,
                    alignItems: alignItems,
                    borderStyle,
                    borderRadius: borderRadius + 'px',
                    borderColor,
                    borderWidth: '2px',
                    backgroundImage: bgImage ? `url(${bgImage})` : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width,
                    height,
                    position: 'relative',
                    color: textColor,
                    fontFamily,
                    fontStyle,
                }
            },
                el('div', {
                    style: {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
                        borderRadius: borderRadius + 'px',
                    }
                }),
                el('div', { style: { position: 'relative', zIndex: 2 } },
                    el(RichText.Content, { tagName: 'div', value: text })
                )
            );
        },
    });
})();
