const { registerBlockType } = wp.blocks;
const { InspectorControls, MediaUpload, InnerBlocks } = wp.blockEditor;
const { PanelBody, Button, TextControl } = wp.components;
const { Fragment } = wp.element;
const { __ } = wp.i18n;

registerBlockType("custom/background-block", {
    title: __("Background Block", "background-block"),
    icon: "format-image",
    category: "layout",
    attributes: {
        bgImage: { type: "string", default: "" },
        width: { type: "string", default: "100%" },
        height: { type: "string", default: "300px" }
    },

    edit: ({ attributes, setAttributes }) => {
        const { bgImage, width, height } = attributes;

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
                        label: "Width (e.g. 100%, 500px, 80vw)",
                        value: width,
                        onChange: (value) => setAttributes({ width: value })
                    }),
                    wp.element.createElement(TextControl, {
                        label: "Height (e.g. 300px, 50vh)",
                        value: height,
                        onChange: (value) => setAttributes({ height: value })
                    })
                )
            ),
            wp.element.createElement(
                "div",
                {
                    className: "bg-block",
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
        const { bgImage, width, height } = attributes;

        return wp.element.createElement(
            "div",
            {
                className: "bg-block",
                style: {
                    backgroundImage: bgImage ? `url(${bgImage})` : "none",
                    width: width,
                    height: height,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "start",
                    padding: "10px",
                }
            },
            wp.element.createElement(InnerBlocks.Content, null)
        );
    }
});
