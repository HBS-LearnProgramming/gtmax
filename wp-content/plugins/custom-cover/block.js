(function () {
    const { registerBlockType } = wp.blocks;
    const { InspectorControls, MediaUpload, RichText } = wp.blockEditor || wp.editor;
    const { PanelBody, RangeControl, SelectControl, ColorPicker, TextControl, Button, ToggleControl } = wp.components;
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
            textTransform: { type: 'string', default: 'none' },
            fontFamily: { type: 'string', default: 'inherit' },
            fontStyle: { type: 'string', default: 'normal' },
            fontSize: { type: 'string', default: '20px' },
            borderStyle: { type: 'string', default: 'solid' },
            borderRadius: { type: 'number', default: 10 },
            borderColor: { type: 'string', default: '#ffffff' },
            boxShadow: { type: 'number', default: 0 },
            shadowColor: { type: 'string', default: '#ffffff' },
            bgImage: { type: 'string', default: '' },
            overlayOpacity: { type: 'number', default: 0.3 },
            width: { type: 'string', default: '100%' },
            height: { type: 'string', default: '300px' },
            scale: { type: 'boolean', default: false},
            description: { type: 'string', default: '' },
        },

        edit: (props) => {
            const { attributes, setAttributes } = props;
            const {
                text, textAlign, alignItems, textColor, fontFamily, fontStyle, fontSize,
                borderStyle, borderRadius, borderColor, bgImage, overlayOpacity,boxShadow,shadowColor,
                width, height,scale, description, textTransform
            } = attributes;

            const style = {
                display: 'flex',
                justifyContent: textAlign,
                alignItems: alignItems,
                borderStyle: borderStyle,
                borderRadius: borderRadius + 'px',
                borderColor: borderColor,
                borderWidth: '2px',
                boxShadow: boxShadow ? `0 0 ${boxShadow}px ${shadowColor}` : 'none',
                backgroundImage: bgImage ? `url(${bgImage})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: width,
                height: height,
                position: 'relative',
                color: textColor,
                textTransform: textTransform,
                fontFamily: fontFamily,
                fontStyle: fontStyle,
                fontSize: fontSize,
                transition: 'transform 0.3s ease',
            };

            const overlayStyle = {
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
                borderRadius: borderRadius + 'px',
                boxShadow: boxShadow ? `0 0 ${boxShadow}px ${shadowColor}` : 'none',
                pointerEvents: 'none',
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
                        el(RangeControl, {
                            label: __('Box Shadow', 'custom-cover'),
                            value: boxShadow,
                            min: 0,
                            max: 100,
                            onChange: (value) => setAttributes({ boxShadow: value }),
                        }),
                        el(ColorPicker, {
                            color: shadowColor,
                            onChangeComplete: (value) => setAttributes({ shadowColor: value.hex }),
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
                            label: __('Text Transform', 'custom-cover'),
                            value: textTransform,
                            options: [
                                { label: 'None', value: 'none' },
                                { label: 'Uppercase', value: 'uppercase' },
                                { label: 'Lowercase', value: 'lowercase' },
                                { label: 'Capitalize', value: 'capitalize' },
                            ],
                            onChange: (value) => setAttributes({ textTransform: value }),
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
                        }),
                        el(TextControl, {
                            label: __('Font Size (px/%/other)', 'custom-cover'),
                            value: fontSize,
                            onChange: (value) => setAttributes({ fontSize: value }),
                        }),
                        el(ToggleControl, {
                            label: __('Enable Hover Scale Effect', 'custom-cover'),
                            checked: scale,
                            onChange: (value) => setAttributes({ scale: value }),
                        }),
                        el(TextControl, {
                            label: __('Description (Tooltip Text)', 'custom-cover'),
                            value: description,
                            onChange: (value) => setAttributes({ description: value }),
                            placeholder: __('Enter tooltip description...', 'custom-cover'),
                        }),
                    )
                ),
                el('div', { className: `custom-cover-block ${scale ? 'hover-scale' : ''}`, style },
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
                text, textAlign, alignItems, textColor, fontFamily, fontStyle, fontSize,
                borderStyle, borderRadius, borderColor, bgImage, overlayOpacity,boxShadow,shadowColor,
                width, height, scale, description, textTransform
            } = attributes;

            return el('div', {
                className: `custom-cover-block ${scale ? 'hover-scale' : ''}`,
                style: {
                    display: 'flex',
                    justifyContent: textAlign,
                    alignItems: alignItems,
                    borderStyle,
                    borderRadius: borderRadius + 'px',
                    borderColor,
                    borderWidth: '2px',
                    backgroundImage: bgImage ? `url(${bgImage})` : 'none',
                    boxShadow: boxShadow ? `0 0 ${boxShadow}px ${shadowColor}` : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width,
                    height,
                    position: 'relative',
                    color: textColor,
                    fontFamily,
                    textTransform: textTransform,
                    fontStyle: fontStyle === 'bold' ? 'normal' : fontStyle,
                    fontWeight: fontStyle === 'bold' ? 'bold' : 'normal',
                    fontSize,
                    transition: 'transform 0.3s ease',
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
                        boxShadow: boxShadow ? `0 0 ${boxShadow}px ${shadowColor}` : 'none',
                    }
                }),
                el('div', { style: { position: 'relative', zIndex: 2 } },
                    el(RichText.Content, { tagName: 'div', value: text })
                ),
                description && el('div', { className: 'cover-tooltip' }, description)
            );
        },
    });
})();
