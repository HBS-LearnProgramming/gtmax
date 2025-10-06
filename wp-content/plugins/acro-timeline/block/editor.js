( function( wp ) {
    const { registerBlockType } = wp.blocks;
    const { Fragment, createElement } = wp.element;
    const { InspectorControls, MediaUpload, RichText } = wp.blockEditor || wp.editor;
    const { PanelBody, TextControl, Button, ColorPicker, RangeControl, ToggleControl } = wp.components;
    const { __ } = wp.i18n;

    registerBlockType( 'acro/timeline', {
        title: 'Acro Timeline',
        icon: 'schedule',
        category: 'layout',
        attributes: {
            items: { type: 'array', default: [] },
            orientation: { type: 'string', default: 'vertical' },
            lineColor: { type: 'string', default: '#2d2d2d' }
        },

        edit: function( props ) {
            const { attributes, setAttributes, className } = props;
            const items = attributes.items || [];

            function addItem() {
                const newItems = items.slice();
                newItems.push({
                    time: '',
                    image: '',
                    imageSize: 120,
                    title: '',
                    description: '',
                    textColor: '#000000',
                    textStyle: { bold: false, italic: false, underline: false }
                });
                setAttributes({ items: newItems });
            }

            function updateItem( index, newData ) {
                const newItems = items.slice();
                newItems[index] = Object.assign( {}, newItems[index], newData );
                setAttributes({ items: newItems });
            }

            function removeItem( index ) {
                const newItems = items.slice();
                newItems.splice( index, 1 );
                setAttributes({ items: newItems });
            }

            return (
                createElement( Fragment, null,
                    createElement( InspectorControls, null,
                        createElement( PanelBody, { title: __( 'Timeline settings' ), initialOpen: true },
                            createElement( 'div', { style: { marginBottom: '12px' } },
                                createElement( 'label', null, __( 'Orientation' ) ),
                                createElement( 'div', null,
                                    createElement( Button, {
                                        isPrimary: attributes.orientation === 'vertical',
                                        onClick: () => setAttributes({ orientation: 'vertical' }),
                                        style: { marginRight: '8px' }
                                    }, __( 'Vertical' ) ),
                                    createElement( Button, {
                                        isPrimary: attributes.orientation === 'horizontal',
                                        onClick: () => setAttributes({ orientation: 'horizontal' })
                                    }, __( 'Horizontal' ) )
                                )
                            ),
                            createElement( 'div', { style: { marginBottom: '12px' } },
                                createElement( 'label', null, __( 'Line color' ) ),
                                createElement( ColorPicker, {
                                    color: attributes.lineColor,
                                    onChange: ( value ) => setAttributes({ lineColor: value.hex || value })
                                } )
                            )
                        )
                    ),

                    createElement( 'div', { className: ( className || '' ) + ' acro-timeline-editor-root' },
                        createElement( 'div', { className: 'acro-timeline-editor-controls' },
                            createElement( Button, { isPrimary: true, onClick: addItem }, __( 'Add timeline item' ) )
                        ),

                        items.length === 0 && createElement( 'div', { className: 'acro-empty' }, __( 'No items yet — click "Add timeline item"' ) ),

                        items.map( function( item, index ) {
                            return createElement( 'div', { className: 'acro-timeline-editor-item', key: index },
                                createElement( 'div', { className: 'acro-item-top' },
                                    createElement( TextControl, {
                                        label: __( 'Time' ),
                                        placeholder: __( 'timeline...' ),
                                        value: item.time,
                                        onChange: function( v ) { updateItem( index, { time: v } ); }
                                    } ),

                                    createElement( MediaUpload, {
                                        onSelect: function( media ) {
                                            updateItem( index, { image: media && media.url ? media.url : '' } );
                                        },
                                        allowedTypes: [ 'image' ],
                                        value: item.image,
                                        render: function( obj ) {
                                            return createElement( Button, { onClick: obj.open, isSecondary: true },
                                                item.image ? __( 'Change image' ) : __( 'Upload image' )
                                            );
                                        }
                                    } ),

                                    createElement( RangeControl, {
                                        label: __( 'Image width (px)' ),
                                        value: item.imageSize,
                                        onChange: function( v ) { updateItem( index, { imageSize: v } ); },
                                        min: 20,
                                        max: 800
                                    } )
                                ),

                                createElement( 'div', { className: 'acro-item-body' },
                                    createElement( RichText, {
                                        tagName: 'h4',
                                        className: 'title-item',
                                        value: item.title,
                                        onChange: function( v ) { updateItem( index, { title: v } ); },
                                        placeholder: __( 'Title...' ),
                                        allowedFormats: [ 'core/bold', 'core/italic', 'core/underline' ]
                                    } ),

                                    createElement( RichText, {
                                        tagName: 'div',
                                        value: item.description,
                                        className: 'description-item',
                                        onChange: function( v ) { updateItem( index, { description: v } ); },
                                        placeholder: __( 'Description...' ),
                                        allowedFormats: [ 'core/bold', 'core/italic', 'core/underline' ]
                                    } ),

                                    createElement( 'div', { className: 'acro-item-style' },
                                        createElement( TextControl, {
                                            label: __( 'Text color (hex)' ),
                                            value: item.textColor,
                                            onChange: function( v ) { updateItem( index, { textColor: v } ); }
                                        } ),
                                        createElement( ToggleControl, {
                                            label: __( 'Bold title' ),
                                            checked: !!( item.textStyle && item.textStyle.bold ),
                                            onChange: function( v ) { updateItem( index, { textStyle: Object.assign( {}, item.textStyle, { bold: v } ) } ); }
                                        } ),
                                        createElement( ToggleControl, {
                                            label: __( 'Italic description' ),
                                            checked: !!( item.textStyle && item.textStyle.italic ),
                                            onChange: function( v ) { updateItem( index, { textStyle: Object.assign( {}, item.textStyle, { italic: v } ) } ); }
                                        } ),
                                        createElement( ToggleControl, {
                                            label: __( 'Underline description (editor only)' ),
                                            checked: !!( item.textStyle && item.textStyle.underline ),
                                            onChange: function( v ) { updateItem( index, { textStyle: Object.assign( {}, item.textStyle, { underline: v } ) } ); }
                                        } )
                                    )
                                ),

                                createElement( 'div', { className: 'acro-item-actions' },
                                    createElement( Button, { isDestructive: true, onClick: function() { removeItem( index ); } }, __( 'Remove' ) )
                                )
                            );
                        } )
                    )
                )
            );
        },

        save: function( props ) {
            const { attributes } = props;
            const items = attributes.items || [];
            const orientation = attributes.orientation || 'vertical';
            const lineColor = attributes.lineColor || '#2d2d2d';

            return (
                createElement( 'div', { className: 'acro-timeline-root acro-timeline-' + orientation, style: { '--acro-line-color': lineColor } },
                    createElement( 'div', { className: 'acro-timeline-line' } ),
                    createElement( 'div', { className: 'acro-timeline-items' },
                        items.map( function( item, index ) {
                            return createElement( 'div', { className: 'acro-timeline-item', key: index },
                                createElement( 'div', { className: 'acro-timeline-time' }, item.time ),
                                createElement( 'div', { className: 'acro-timeline-content' },
                                    item.image && createElement( 'div', { className: 'acro-timeline-image', style: { width: item.imageSize + 'px' } },
                                        createElement( 'img', { src: item.image, alt: '' } )
                                    ),
                                    createElement( 'div', { className: 'acro-timeline-text', style: { color: item.textColor } },
                                        createElement( 'h3', { className: 'acro-timeline-title', style: item.textStyle && item.textStyle.bold ? { fontWeight: '700' } : {} },
                                            createElement( RichText.Content, { tagName: 'span', value: item.title } )
                                        ),
                                        createElement( RichText.Content, { tagName: 'div', className: 'acro-timeline-desc', value: item.description } )
                                    )
                                )
                            );
                        } )
                    )
                )
            );
        }
    } );
} )( window.wp );
