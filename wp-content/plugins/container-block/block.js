( function( blocks, element, blockEditor, components ) {
    var el = element.createElement;
    var useBlockProps = blockEditor.useBlockProps;
    var InnerBlocks = blockEditor.InnerBlocks;
    var InspectorControls = blockEditor.InspectorControls;
    var PanelBody = components.PanelBody;
    var TextControl = components.TextControl;

    blocks.registerBlockType( 'custom/container-block', {
        title: 'Container',
        icon: 'editor-table',
        category: 'layout',
        supports: {
            align: true,
        },
        attributes: {
            maxWidthSm: { type: 'string', default: '' },
            maxWidthMd: { type: 'string', default: '' },
            maxWidthLg: { type: 'string', default: '' },
            maxWidthXl: { type: 'string', default: '' },
            maxWidth2xl: { type: 'string', default: '' },
        },

        edit: function( props ) {
            var attrs = props.attributes;

            var blockProps = useBlockProps( {
                className: 'cb-container',
            } );

            return el(
                element.Fragment,
                null,
                // Sidebar Controls
                el(
                    InspectorControls,
                    null,
                    el(
                        PanelBody,
                        { title: 'Container Responsive Widths', initialOpen: true },
                        el( TextControl, {
                            label: 'Max Width (≥640px - sm)',
                            value: attrs.maxWidthSm,
                            onChange: function( val ) { props.setAttributes( { maxWidthSm: val } ); },
                            placeholder: 'e.g. 640px'
                        }),
                        el( TextControl, {
                            label: 'Max Width (≥768px - md)',
                            value: attrs.maxWidthMd,
                            onChange: function( val ) { props.setAttributes( { maxWidthMd: val } ); },
                            placeholder: 'e.g. 768px'
                        }),
                        el( TextControl, {
                            label: 'Max Width (≥1024px - lg)',
                            value: attrs.maxWidthLg,
                            onChange: function( val ) { props.setAttributes( { maxWidthLg: val } ); },
                            placeholder: 'e.g. 1024px'
                        }),
                        el( TextControl, {
                            label: 'Max Width (≥1280px - xl)',
                            value: attrs.maxWidthXl,
                            onChange: function( val ) { props.setAttributes( { maxWidthXl: val } ); },
                            placeholder: 'e.g. 1280px'
                        }),
                        el( TextControl, {
                            label: 'Max Width (≥1536px - 2xl)',
                            value: attrs.maxWidth2xl,
                            onChange: function( val ) { props.setAttributes( { maxWidth2xl: val } ); },
                            placeholder: 'e.g. 1536px'
                        })
                    )
                ),
                // Content
                el(
                    'div',
                    blockProps,
                    el( InnerBlocks, {
                        renderAppender: InnerBlocks.ButtonBlockAppender,
                    } )
                )
            );
        },

        save: function( props ) {
            var attrs = props.attributes;

            // Save as data attributes, let CSS handle breakpoints
            var blockProps = blockEditor.useBlockProps.save( {
                className: 'cb-container',
                'data-sm': attrs.maxWidthSm || '',
                'data-md': attrs.maxWidthMd || '',
                'data-lg': attrs.maxWidthLg || '',
                'data-xl': attrs.maxWidthXl || '',
                'data-2xl': attrs.maxWidth2xl || '',
            } );

            return el(
                'div',
                blockProps,
                el( InnerBlocks.Content )
            );
        },
    } );
} )( window.wp.blocks, window.wp.element, window.wp.blockEditor, window.wp.components );
