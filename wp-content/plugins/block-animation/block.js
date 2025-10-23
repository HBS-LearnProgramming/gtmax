(function () {
    const { registerBlockType } = wp.blocks;
    const { InspectorControls, useBlockProps, InnerBlocks } = wp.blockEditor;
    const { PanelBody, SelectControl, RangeControl, ColorPicker, ToggleControl, TextControl } = wp.components;
    const el = wp.element.createElement;

    registerBlockType('custom/block-animation', {
        title: 'Animated Block',
        icon: 'format-video',
        category: 'design',
        attributes: {
            animationType: { type: 'string', default: 'fade-up' },
            duration: { type: 'number', default: 1000 },
            delay: { type: 'number', default: 0 },
            shadow: { type: 'number', default: 10 },
            borderRadius: { type: 'number', default: 8 },
            shadowColor: { type: 'string', default: '#00000033' },
            padding: { type: 'string', default: '0px' },
            minHeight: {type: 'string', default: 'fit-content' },
            minWidth: {type: 'string', default: 'fit-content' },
            scale: { type: 'boolean', default: false},
            bgColor: { type: 'string', default: 'transparent' },
        },

        edit: ({ attributes, setAttributes }) => {
            const { animationType, duration, delay, shadow, borderRadius, shadowColor, padding, minHeight, minWidth, scale, bgColor } = attributes;
            const blockProps = useBlockProps({
                className: 'animated-block',
                style: {
                    borderRadius: `${borderRadius}px`,
                    boxShadow: shadow ? `0 0 ${shadow}px ${shadowColor}` : 'none',
                },
            });

            return el(
                wp.element.Fragment,
                null,
                el(
                    InspectorControls,
                    null,
                    el(
                        PanelBody,
                        { title: "Animation Settings", initialOpen: true },
                        el(SelectControl, {
                            label: "Animation Type",
                            value: animationType,
                            options: [
                                { label: 'Fade Up', value: 'fade-up' },
                                { label: 'Fade Down', value: 'fade-down' },
                                { label: 'Zoom In', value: 'zoom-in' },
                                { label: 'Slide Left', value: 'slide-left' },
                                { label: 'Slide Right', value: 'slide-right' }
                            ],
                            onChange: (val) => setAttributes({ animationType: val })
                        }),
                        el(RangeControl, {
                            label: "Duration (ms)",
                            value: duration,
                            min: 100,
                            max: 5000,
                            onChange: (val) => setAttributes({ duration: val })
                        }),
                        el(RangeControl, {
                            label: "Delay (ms)",
                            value: delay,
                            min: 0,
                            max: 5000,
                            onChange: (val) => setAttributes({ delay: val })
                        }),
                        el(TextControl, {
                            label: "Padding (px/%/other)",
                            value: padding,
                            onChange: (val) => setAttributes({ padding: val })
                        }),
                        el(TextControl, {
                            label: "Min Height (px/%/other)",
                            value: minHeight,
                            onChange: (val) => setAttributes({ minHeight: val })
                        }),
                        el(TextControl, {
                            label: "Min Width (px/%/other)",
                            value: minWidth,
                            onChange: (val) => setAttributes({ minWidth: val })
                        }),
                        el(RangeControl, {
                            label: "Shadow Intensity",
                            value: shadow,
                            min: 0,
                            max: 100,
                            onChange: (val) => setAttributes({ shadow: val })
                        }),
                        el(RangeControl, {
                            label: "Border Radius (px)",
                            value: borderRadius,
                            min: 0,
                            max: 100,
                            onChange: (val) => setAttributes({ borderRadius: val })
                        }),
                        el('p', { style: { marginBottom: '8px' } }, "Shadow Color"),
                        el(ColorPicker, {
                            color: shadowColor,
                            disableAlpha: false,
                            onChangeComplete: (val) => setAttributes({ shadowColor: val.hex })
                        }),
                        el('p', { style: { marginBottom: '8px' } }, "Background Color"),
                        el(ColorPicker, {
                            color: bgColor,
                            disableAlpha: false,
                            onChangeComplete: (val) => setAttributes({ bgColor: val.hex })
                        }),
                        el(ToggleControl, {
                            label: __('Enable Hover Scale Effect'),
                            checked: scale,
                            onChange: (value) => setAttributes({ scale: value }),
                        })
                    )
                ),
                el(
                    'div',
                    {
                        ...blockProps,
                        'data-animation': animationType,
                        'data-duration': duration,
                        'data-delay': delay,
                    },
                    el(InnerBlocks, null)
                )
            );
        },

        save: ({ attributes }) => {
            const { animationType, duration, delay, shadow, borderRadius, shadowColor, padding, minHeight, minWidth, scale, bgColor } = attributes;
            const blockProps = useBlockProps.save({
                className: `animated-block ${scale ? 'hover-scale' : ''}`,
                'data-animation': animationType,
                'data-duration': duration,
                'data-delay': delay,
                style: {
                    borderRadius: `${borderRadius}px`,
                    boxShadow: shadow ? `0 0 ${shadow}px ${shadowColor}` : 'none',
                    padding: padding,
                    minHeight: minHeight,
                    minWidth: minWidth,
                    backgroundColor: bgColor,
                },
            });

            return el('div', { ...blockProps }, el(InnerBlocks.Content, null));
        },
    });
})();
