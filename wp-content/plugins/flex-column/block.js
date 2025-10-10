( function( wp ) {
    var registerBlockType = wp.blocks.registerBlockType;
    var el = wp.element.createElement;
    var Fragment = wp.element.Fragment;

    var InnerBlocks = wp.blockEditor.InnerBlocks || wp.editor.InnerBlocks;
    var InspectorControls = wp.blockEditor.InspectorControls || wp.editor.InspectorControls;
    var PanelBody = wp.components.PanelBody;
    var SelectControl = wp.components.SelectControl;
    var ColorPalette = wp.components.ColorPalette;
    var RangeControl = wp.components.RangeControl;  
    var TextControl = wp.components.TextControl;  
    // Container block
    registerBlockType( 'flex/column-container', {
        title: 'Flex Column Container',
        icon: 'columns',
        category: 'layout',
        supports: { align: true },
        attributes: {
            justify: { type: 'string', default: 'flex-start' },
            align: { type: 'string', default: 'stretch' },
            bgColor: { type: 'string', default: 'transparent' },
            shadowColor: { type: 'string', default: 'transparent' },
            shadow: {type: 'number', default: 0},
            radius: {type: 'number', default: 0},
            margin: { type: 'string', default: '0px' },
            gap: {type: 'number', default: 0}
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
                        }),
                        el( ColorPalette, {
                            label: 'Background Color',
                            value: attributes.bgColor,
                            
                            onChange: function( val ) { setAttributes( { bgColor: val } ); }
                        }),
                        el( TextControl, {
                            label: 'Margin (px/%/other)',
                            value: attributes.margin,
                            
                            onChange: function( val ) { setAttributes( { margin: val } ); }
                        }),
                        el( RangeControl, {
                            label: 'Shadow',
                            value: attributes.shadow,
                            
                            onChange: function( val ) { setAttributes( { shadow: val } ); }
                        }),
                        el( ColorPalette, {
                            label: 'Shadow Color',
                            value: attributes.shadowColor,
                            
                            onChange: function( val ) { setAttributes( { shadowColor: val } ); }
                        }),
                        el( RangeControl, {
                            label: 'Border Radius',
                            value: attributes.radius,
                            
                            onChange: function( val ) { setAttributes( { radius: val } ); }
                        }),
                        el( RangeControl, {
                            label: 'Space between',
                            value: attributes.gap,
                            
                            onChange: function( val ) { setAttributes( { gap: val } ); }
                        })
                    )
                ),
                el( 'div', { className: 'flexcol-container', style: { justifyContent: attributes.justify, alignItems: attributes.align, backgroundColor: attributes.bgColor } },
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
            var boxShadow = attributes.shadow ? `0 0 ${attributes.shadow}px ${attributes.shadowColor}` : 'none';
            var radius = attributes.radius + 'px';
            return el( 'div', { className: 'flexcol-container', style: { justifyContent: attributes.justify, alignItems: attributes.align, backgroundColor: attributes.bgColor, gap: attributes.gap+'px',borderRadius: radius, boxShadow: boxShadow,margin: attributes.margin } },
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
            background_color: { type: 'string', default: 'auto' },
            padding: {type: 'string', default: '0px' }
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
                        }),
                        el( wp.components.TextControl, {
                            label: 'Padding (px, %, auto)',
                            value: attributes.padding,
                            onChange: function( val ) { setAttributes( { padding: val } ); }
                        }),
                    )
                    
                ),
                el( 'div', { className: 'flexcol-column', style: { flexBasis: attributes.basis , backgroundColor: attributes.background_color, padding: attributes.padding } },
                    el( InnerBlocks, { templateLock: false } )
                )
            );
        },

        save: function( props ) {
            var attributes = props.attributes;
            return el( 'div', { className: 'flexcol-column', style: { flexBasis: attributes.basis , backgroundColor: attributes.background_color, padding: attributes.padding }},
                el( InnerBlocks.Content )
            );
        }
    });
} )( window.wp );
