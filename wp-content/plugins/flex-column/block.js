( function( wp ) {
    var registerBlockType = wp.blocks.registerBlockType;
    var el = wp.element.createElement;
    var Fragment = wp.element.Fragment;

    var InnerBlocks = wp.blockEditor.InnerBlocks || wp.editor.InnerBlocks;
    var InspectorControls = wp.blockEditor.InspectorControls || wp.editor.InspectorControls;
    var PanelBody = wp.components.PanelBody;
    var SelectControl = wp.components.SelectControl;

    // Container block
    registerBlockType( 'flex/column-container', {
        title: 'Flex Column Container',
        icon: 'columns',
        category: 'layout',
        supports: { align: true },
        attributes: {
            justify: { type: 'string', default: 'flex-start' },
            align: { type: 'string', default: 'stretch' }
        },

        edit: function( props ) {
            var attributes = props.attributes;
            var setAttributes = props.setAttributes;

            return el( Fragment, null,
                el( InspectorControls, null,
                    el( PanelBody, { title: 'Flex Settings', initialOpen: true },
                        el( SelectControl, {
                            label: 'Justify Content',
                            value: attributes.justify,
                            options: [
                                { label: 'Start', value: 'flex-start' },
                                { label: 'Center', value: 'center' },
                                { label: 'End', value: 'flex-end' },
                                { label: 'Space Between', value: 'space-between' },
                                { label: 'Space Around', value: 'space-around' }
                            ],
                            onChange: function( val ) { setAttributes( { justify: val } ); }
                        }),
                        el( SelectControl, {
                            label: 'Align Items',
                            value: attributes.align,
                            options: [
                                { label: 'Stretch', value: 'stretch' },
                                { label: 'Start', value: 'flex-start' },
                                { label: 'Center', value: 'center' },
                                { label: 'End', value: 'flex-end' }
                            ],
                            onChange: function( val ) { setAttributes( { align: val } ); }
                        })
                    )
                ),
                el( 'div', { className: 'flexcol-container', style: { justifyContent: attributes.justify, alignItems: attributes.align } },
                    el( InnerBlocks, {
                        allowedBlocks: [ 'flex/column' ],
                        orientation: 'horizontal',
                        templateLock: false
                    } )
                )
            );
        },

        save: function( props ) {
            var attributes = props.attributes;
            return el( 'div', { className: 'flexcol-container', style: { justifyContent: attributes.justify, alignItems: attributes.align } },
                el( InnerBlocks.Content )
            );
        }
    });

    // Child Column block
    registerBlockType( 'flex/column', {
        title: 'Flex Column',
        icon: 'column',
        category: 'layout',
        parent: [ 'flex/column-container' ],
        attributes: {
            basis: { type: 'string', default: 'auto' },
            background_color: { type: 'string', default: 'auto' }
        },

        edit: function( props ) {
            var attributes = props.attributes;
            var setAttributes = props.setAttributes;

            return el( Fragment, null,
                el( InspectorControls, null,
                    el( PanelBody, { title: 'Column Settings', initialOpen: true },
                        el( wp.components.TextControl, {
                            label: 'Flex Basis (px, %, auto)',
                            value: attributes.basis,
                            onChange: function( val ) { setAttributes( { basis: val } ); }
                        }),
                        el( wp.components.ColorPalette, {
                            label: 'Background Color',
                            value: attributes.background_color,
                            onChange: function( val ) { setAttributes( { background_color: val } ); }
                        })
                    )
                    
                ),
                el( 'div', { className: 'flexcol-column', style: { flexBasis: attributes.basis , backgroundColor: attributes.background_color} },
                    el( InnerBlocks, { templateLock: false } )
                )
            );
        },

        save: function( props ) {
            var attributes = props.attributes;
            return el( 'div', { className: 'flexcol-column', style: { flexBasis: attributes.basis , backgroundColor: attributes.background_color}},
                el( InnerBlocks.Content )
            );
        }
    });
} )( window.wp );
