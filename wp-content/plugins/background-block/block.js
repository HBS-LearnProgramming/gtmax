const { registerBlockType } = wp.blocks;
const { InspectorControls, MediaUpload, InnerBlocks } = wp.blockEditor;
const { PanelBody, Button, TextControl, RangeControl, ColorPicker, SelectControl} = wp.components;
const { Fragment } = wp.element;
const { __ } = wp.i18n;

registerBlockType("custom/background-block", {
    title: __("Background Block", "background-block"),
    icon: "format-image",
    category: "layout",
    attributes: {
        bgImage: { type: "string", default: "" },
        width: { type: "string", default: "100%" },
        height: { type: "string", default: "300px" },
        block_id: { type: "string", default: "" },
        boxShadow: { type: "number", default: 0 },
        shadowColor: { type: "string", default: '#ffffff' },
        borderRadius: { type: 'number', default: 0 },
        justifyContent: {type: 'string', default: ''},
        alignItems: {type: 'string', default: ''},
        margin: { type: "string", default: '0px' },
    },

    edit: ({ attributes, setAttributes }) => {
        const { bgImage, width, height, block_id, boxShadow, shadowColor, borderRadius, justifyContent, alignItems, margin } = attributes;

        return wp.element.createElement(
            Fragment,
            null,
            wp.element.createElement(
                InspectorControls,
                null,
                wp.element.createElement(
                    PanelBody,
                    { title: "Background Settings" },
                    wp.element.createElement(MediaUpload, {
                        onSelect: (media) => setAttributes({ bgImage: media.url }),
                        type: "image",
                        value: bgImage,
                        render: ({ open }) =>
                            wp.element.createElement(
                                Button,
                                { onClick: open, isSecondary: true },
                                bgImage ? "Change Background" : "Upload Background"
                            )
                    }),
                    wp.element.createElement(TextControl, {
                        label: "Margin (e.g. %, px, other)",
                        value: margin,
                        onChange: (value) => setAttributes({ margin: value })
                    }),
                    wp.element.createElement(TextControl, {
                        label: "Width (e.g. 100%, 500px, 80vw)",
                        value: width,
                        onChange: (value) => setAttributes({ width: value })
                    }),
                    
                    wp.element.createElement(TextControl, {
                        label: "Height (e.g. 300px, 50vh)",
                        value: height,
                        onChange: (value) => setAttributes({ height: value })
                    }),
                    wp.element.createElement(TextControl, {
                        label: "Block id",
                        value: block_id,
                        onChange: (value) => setAttributes({ block_id: value })
                    }),
                    wp.element.createElement(SelectControl, {
                        label: 'Justify Content',
                            value: justifyContent,
                            options: [
                                { label: 'Start', value: 'start' },
                                { label: 'Center', value: 'center' },
                                { label: 'End', value: 'end' },
                                { label: 'Space Between', value: 'space-between' },
                                { label: 'Space Around', value: 'space-around' }
                            ],
                            onChange: function( val ) { setAttributes( { justifyContent: val } ); }
                    }),
                    wp.element.createElement(SelectControl, {
                        label: 'Alignment item',
                            value: alignItems,
                            options: [
                                { label: 'Stretch', value: 'stretch' },
                                { label: 'Start', value: 'flex-start' },
                                { label: 'Center', value: 'center' },
                                { label: 'End', value: 'flex-end' }
                            ],
                            onChange: function( val ) { setAttributes( { alignItems: val } ); }
                    }),
                    wp.element.createElement(RangeControl, {
                        label: "Border Radius",
                        value: borderRadius,
                        onChange: (value) => setAttributes({ borderRadius: value })
                    }),
                    wp.element.createElement(RangeControl, {
                        label: "Shadow",
                        value: boxShadow,
                        onChange: (value) => setAttributes({ boxShadow: value })
                    }),
                    wp.element.createElement(ColorPicker, {
                        label: "Shadow Color",
                        value: shadowColor,
                        onChange: (value) => setAttributes({ shadowColor: value })
                    })
                )
            ),
            wp.element.createElement(
                "div",
                {
                    className: "bg-block",
                    id: `bg-block-${block_id}`,
                    style: {
                        backgroundImage: bgImage ? `url(${bgImage})` : "none",
                        width: width,
                        height: height,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px dashed #aaa",
                        padding: "10px",
                    }
                },
                wp.element.createElement(InnerBlocks, null)
            )
        );
    },

    save: ({ attributes }) => {
        const { bgImage, width, height, block_id, boxShadow, shadowColor, borderRadius,justifyContent, alignItems,margin } = attributes;

        return wp.element.createElement(
            "div",
            {
                className: "bg-block",
                id: `bg-block-${block_id}`, 
                "data-refresh-block": "true",
                style: {
                    backgroundImage: bgImage ? `url(${bgImage})` : "none",
                    width: width,
                    margin: margin,
                    height: height,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    alignItems: alignItems,
                    justifyContent: justifyContent,
                    padding: "10px",
                    borderRadius: borderRadius+'px',
                    boxShadow: boxShadow ? `0 0 ${boxShadow}px ${shadowColor}` : 'none',
                }
            },
            wp.element.createElement(InnerBlocks.Content, null)
        );
    }
});
