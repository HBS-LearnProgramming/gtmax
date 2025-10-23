(function (wp) {
  const { registerBlockType } = wp.blocks;
  const { InspectorControls, InnerBlocks } = wp.blockEditor || wp.editor;
  const { PanelBody, RangeControl, TextControl, SelectControl } = wp.components;
  const { createElement: el, Fragment } = wp.element;

  registerBlockType("acro/slide-animation-block", {
    title: "Slide Animation Block",
    icon: "slides",
    category: "layout",
    supports: { align: true, html: false },
    attributes: {
      gap: { type: "string", default: "20px" },
      borderRadius: { type: "string", default: "12px" },
      boxShadow: { type: "string", default: "0 4px 10px rgba(0,0,0,0.2)" },
      padding: { type: "string", default: "10px" },
      flexBasis: { type: "string", default: "300px" },
      justifyContent: { type: "string", default: "flex-start" },
      alignItems: { type: "string", default: "center" },
      animationSpeed: { type: "number", default: 20 },
      translateFrom: { type: "number", default: -100 },
      translateTo: { type: "number", default: 100 },
    },

    edit: function (props) {
      const { attributes, setAttributes } = props;

      return el(
        Fragment,
        null,
        el(
          InspectorControls,
          {},
          el(
            PanelBody,
            { title: "Layout Settings", initialOpen: true },
            el(TextControl, {
              label: "Gap",
              value: attributes.gap,
              onChange: (v) => setAttributes({ gap: v }),
            }),
            el(TextControl, {
              label: "Flex Basis",
              value: attributes.flexBasis,
              onChange: (v) => setAttributes({ flexBasis: v }),
            }),
            el(SelectControl, {
              label: "Justify Content",
              value: attributes.justifyContent,
              options: [
                { label: "Flex Start", value: "flex-start" },
                { label: "Center", value: "center" },
                { label: "Space Between", value: "space-between" },
                { label: "Space Around", value: "space-around" },
              ],
              onChange: (v) => setAttributes({ justifyContent: v }),
            }),
            el(SelectControl, {
              label: "Align Items",
              value: attributes.alignItems,
              options: [
                { label: "Stretch", value: "stretch" },
                { label: "Center", value: "center" },
                { label: "Flex Start", value: "flex-start" },
                { label: "Flex End", value: "flex-end" },
              ],
              onChange: (v) => setAttributes({ alignItems: v }),
            })
          ),
          el(
            PanelBody,
            { title: "Style Settings", initialOpen: false },
            el(TextControl, {
              label: "Border Radius",
              value: attributes.borderRadius,
              onChange: (v) => setAttributes({ borderRadius: v }),
            }),
            el(TextControl, {
              label: "Box Shadow",
              value: attributes.boxShadow,
              onChange: (v) => setAttributes({ boxShadow: v }),
            }),
            el(TextControl, {
              label: "Padding",
              value: attributes.padding,
              onChange: (v) => setAttributes({ padding: v }),
            })
          ),
          el(
            PanelBody,
            { title: "Animation Settings", initialOpen: false },
            el(RangeControl, {
              label: "Animation Speed (seconds)",
              min: 5,
              max: 60,
              value: attributes.animationSpeed,
              onChange: (v) => setAttributes({ animationSpeed: v }),
            }),
            el(RangeControl, {
              label: "Translate From (%)",
              min: -100,
              max: 100,
              value: attributes.translateFrom,
              onChange: (v) => setAttributes({ translateFrom: v }),
            }),
            el(RangeControl, {
              label: "Translate To (%)",
              min: -100,
              max: 100,
              value: attributes.translateTo,
              onChange: (v) => setAttributes({ translateTo: v }),
            })
          )
        ),
        el(
          "div",
          {
            className: "slide-animation-editor",
            style: {
              display: "flex",
              overflow: "hidden",
              gap: attributes.gap,
              justifyContent: attributes.justifyContent,
              alignItems: attributes.alignItems,
              border: "1px dashed #ccc",
              padding: "10px",
              minHeight: "200px",
            },
          },
          el(InnerBlocks, null)
        )
      );
    },

    save: function () {
      return el(InnerBlocks.Content, null);
    },
  });
})(window.wp);
