(function () {
    const { registerBlockType } = wp.blocks;
    const { InspectorControls, useBlockProps, InnerBlocks } = wp.blockEditor;
    const { PanelBody, SelectControl, RangeControl } = wp.components;
    const el = wp.element.createElement;

    registerBlockType('custom/block-animation', {
        edit: ({ attributes, setAttributes }) => {
            const { animationType, duration, delay } = attributes;
            const blockProps = useBlockProps({ className: 'animated-block' });

            return el(
                wp.element.Fragment,
                null,
                el(
                    InspectorControls,
                    null,
                    el(
                        PanelBody,
                        { title: "Animation Settings" },
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
                        })
                    )
                ),
                el(
                    'div',
                    {
                        ...blockProps,
                        'data-animation': animationType,
                        'data-duration': duration,
                        'data-delay': delay
                    },
                    el(InnerBlocks, null)
                )
            );
        },
        save: ({ attributes }) => {
            const { animationType, duration, delay } = attributes;
            const blockProps = useBlockProps.save({
                className: 'animated-block',
                'data-animation': animationType,
                'data-duration': duration,
                'data-delay': delay
            });

            return el(
                'div',
                blockProps,
                el(InnerBlocks.Content, null)
            );
        }
    });
})();
