(function (wp) {
    const { registerBlockType } = wp.blocks;
    const { InspectorControls } = wp.blockEditor || wp.editor;
    const { PanelBody, TextControl, SelectControl, Button, ColorPalette } = wp.components;
    const el = wp.element.createElement;

    const fieldTypes = [
        { label: "Text", value: "text" },
        { label: "Text Area", value: "textarea" },
        { label: "Number", value: "number" },
        { label: "Email", value: "email" },
        { label: "Tel", value: "tel" },
    ];

    registerBlockType("form-emailjs/form-block", {
        title: "Form EmailJS",
        icon: "email",
        category: "widgets",
        attributes: {
            formItems: { type: "array", default: [] },
            borderStyle: { type: "string", default: "solid" },
            borderColor: { type: "string", default: "#000000ff" },
            borderRadius: { type: "number", default: 4 },
            backgroundColor: { type: "string", default: "#ffffff" },
            templateID: { type: "string", default: "" },
        },

        edit: function (props) {
            const { attributes, setAttributes } = props;
            const { formItems, borderStyle, borderColor, borderRadius, backgroundColor, templateID } = attributes;

            const addFormItem = () => {
                setAttributes({
                    formItems: [...formItems, { type: "text", label: "", name: "", placeholder: "" }],
                });
            };

            const updateFormItem = (index, key, value) => {
                const newItems = [...formItems];
                newItems[index][key] = value;
                setAttributes({ formItems: newItems });
            };

            const removeFormItem = (index) => {
                const newItems = [...formItems];
                newItems.splice(index, 1);
                setAttributes({ formItems: newItems });
            };

            return el(
                wp.element.Fragment,
                {},
                el(
                    InspectorControls,
                    {},
                    el(
                        PanelBody,
                        { title: "Form Design" },
                        el(SelectControl, {
                            label: "Border Style",
                            value: borderStyle,
                            options: [
                                { label: "Solid", value: "solid" },
                                { label: "Dashed", value: "dashed" },
                                { label: "Dotted", value: "dotted" },
                                { label: "None", value: "none" },
                            ],
                            onChange: (value) => setAttributes({ borderStyle: value }),
                        }),
                        el("p", {}, "Border Color"),
                        el(ColorPalette, {
                            value: borderColor,
                            onChange: (color) => setAttributes({ borderColor: color }),
                        }),
                        el(TextControl, {
                            label: "Border Radius (px)",
                            type: "number",
                            value: borderRadius,
                            onChange: (value) => setAttributes({ borderRadius: parseInt(value) || 0 }),
                        }),
                        el("p", {}, "Background Color"),
                        el(ColorPalette, {
                            value: backgroundColor,
                            onChange: (color) => setAttributes({ backgroundColor: color }),
                        }),
                        el(SelectControl, {
                            label: "Template ID",
                            value: templateID,
                            options: [
                                { label: 'Select Template', value: '' },
                                { label: "Career template", value: "template_y2eaiid" },
                                { label: "Contact Us template", value: "template_dfrw2jh" },
                            ],
                            onChange: (value) => setAttributes({ templateID: value }),
                        })
                    )
                ),
                el(
                    "div",
                    {
                        style: {
                            border: `2px ${borderStyle} ${borderColor}`,
                            borderRadius: `${borderRadius}px`,
                            backgroundColor: backgroundColor,
                            padding: "15px",
                        },
                    },
                    el("h4", {}, "Form Preview"),
                    formItems.map((item, index) =>
                        el(
                            "div",
                            { key: index, style: { marginBottom: "10px" } },
                            el(SelectControl, {
                                label: "Field Type",
                                value: item.type,
                                options: fieldTypes,
                                onChange: (value) => updateFormItem(index, "type", value),
                            }),
                            el(TextControl, {
                                label: "Label",
                                value: item.label,
                                onChange: (value) => updateFormItem(index, "label", value),
                            }),
                            el(TextControl, {
                                label: "Name",
                                value: item.name,
                                onChange: (value) => updateFormItem(index, "name", value),
                            }),
                            el(TextControl, {
                                label: "Placeholder",
                                value: item.placeholder,
                                onChange: (value) => updateFormItem(index, "placeholder", value),
                            }),
                            el(SelectControl, {
                                label: "Required",
                                value: item.required ? "yes" : "no",
                                options: [
                                    { label: "Yes", value: "yes" },
                                    { label: "No", value: "no" },
                                ],
                                onChange: (value) => updateFormItem(index, "required", value === "yes"),
                            }),
                            el(
                                Button,
                                {
                                    isDestructive: true,
                                    onClick: () => removeFormItem(index),
                                },
                                "Remove"
                            ),
                            el("hr")
                        )
                    ),
                    el(Button, { isPrimary: true, onClick: addFormItem }, "Add Form Item")
                )
            );
        },

        save: function (props) {
            const { formItems, borderStyle, borderColor, borderRadius, backgroundColor, templateID } = props.attributes;

            return wp.element.createElement(
                "form",
                {
                    className: "form-emailjs",
                    method: "POST",
                    action: "", // ✅ prevent GET 404
                    style: {
                        border: `2px ${borderStyle} ${borderColor}`,
                        borderRadius: `${borderRadius}px`,
                        backgroundColor: backgroundColor,
                        padding: "15px",
                    },
                    'data-service-id': (FormEmailJSSettings && FormEmailJSSettings.serviceId) || '', 
                    'data-template-id': templateID || (FormEmailJSSettings && FormEmailJSSettings.templateId) || ''
                },
                formItems.map((item, index) =>
                    wp.element.createElement(
                        "div",
                        { className: "form-item-wrapper", key: index },
                        wp.element.createElement("label", { htmlFor: `field-${index}` }, item.label),
                        wp.element.createElement(
                            "div",
                            { className: "form-field" },
                            item.type === "textarea"
                                ? wp.element.createElement("textarea", {
                                      id: `field-${index}`,
                                      name: item.name,
                                      placeholder: item.placeholder,
                                      required: item.required || false,
                                  })
                                : wp.element.createElement("input", {
                                      type: item.type,
                                      id: `field-${index}`,
                                      name: item.name,
                                      placeholder: item.placeholder,
                                      required: item.required || false,
                                  })
                        )
                    )
                ),
                wp.element.createElement("button", { type: "submit", className: "form-submit" }, "Submit")
            );
        },
    });
})(window.wp);
