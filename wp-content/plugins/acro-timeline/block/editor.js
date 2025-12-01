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
        supports: { html: false },
        attributes: {
            items: { type: 'array', default: [] },
            orientation: { type: 'string', default: 'vertical' },
            lineColor: { type: 'string', default: '#2d2d2d' },
            borderRadius: { type: 'number', default: 0 },
            border: { type: 'number', default: 0 },
            boxShadow: { type: 'number', default: 0 },
            boxShadowColor: { type: 'string', default: '#ffffff' },
            borderColor: { type: 'string', default: '#ffffff' },
            listItems: { type: 'array', default: [] },
            listType: { type: 'string', default: 'ul' },
            listColor: { type: 'string', default: '#000000' },
            listFontSize: { type: 'number', default: 16 },
            listFontWeight: { type: 'string', default: '400' },
        },

        edit: function( props ) {
            const { attributes, setAttributes, className } = props;
            const items = attributes.items || [];

            function addItem() {
                const newItems = items.slice();
                newItems.push({
                    time: '',
                    image: '',
                    imageSize: '120px',
                    imageHeight: 'auto',
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
                                    value: attributes.borderColor,
                                    onChange: ( value ) => setAttributes({ lineColor: value.hex || value })
                                } )
                            ),
                            createElement( 'div', { style: { marginBottom: '12px' } },
                                createElement( 'label', null, __( 'Border' ) ),
                                createElement( RangeControl, {
                                    value: attributes.border,
                                    onChange: ( value ) => setAttributes({ border: value }),
                                    min: 0,
                                    max: 10
                                } )
                            ),
                            createElement( 'div', { style: { marginBottom: '12px' } },
                                createElement( 'label', null, __( 'Border radius' ) ),
                                createElement( RangeControl, {
                                    value: attributes.borderRadius,
                                    onChange: ( value ) => setAttributes({ borderRadius: value }),
                                    min: 0,
                                    max: 10
                                } )
                            ),
                            createElement( 'div', { style: { marginBottom: '12px' } },
                                createElement( 'label', null, __( 'Border color' ) ),
                                createElement( ColorPicker, {
                                    color: attributes.borderColor,
                                    value: attributes.borderColor,
                                    onChange: ( value ) => setAttributes({ borderColor: value.hex || value })
                                } )
                            ),
                            createElement( 'div', { style: { marginBottom: '12px' } },
                                createElement( 'label', null, __( 'Shadow' ) ),
                                createElement( RangeControl, {
                                    value: attributes.boxShadow,
                                    onChange: ( value ) => setAttributes({ boxShadow: value })
                                } )
                            ),
                            createElement( 'div', { style: { marginBottom: '12px' } },
                                createElement( 'label', null, __( 'Shadow color' ) ),
                                createElement( ColorPicker, {
                                    color: attributes.boxShadowColor,
                                    value: attributes.boxShadowColor,
                                    onChange: ( value ) => setAttributes({ boxShadowColor: value.hex || value })
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

                                    createElement( TextControl, {
                                        label: __( 'Image width (px/%/other)' ),
                                        value: item.imageSize,
                                        placeholder: __( 'image width...' ),
                                        onChange: function( v ) { updateItem( index, { imageSize: v } ); },
                                    } ),

                                    createElement( TextControl, {
                                        label: __( 'Image height (px/%/other)' ),
                                        value: item.imageHeight,
                                        placeholder: __( 'image height...' ),
                                        onChange: function( v ) { updateItem( index, { imageHeight: v } ); },
                                    } ),
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

                                    // --- Description list configuration ---
                                    createElement('div', { className: 'acro-description-settings' },
                                        createElement('label', null, __('List Type')),
                                        createElement('select', {
                                            value: item.listType || 'ul',
                                            onChange: (e) => updateItem(index, { listType: e.target.value })
                                        },
                                            createElement('option', { value: 'disc' }, __('Bulleted List')),
                                            createElement('option', { value: 'decimal' }, __('Numbered List')),
                                            createElement('option', { value: 'lower-alpha' }, __('Alpha List')),
                                        ),
                                        createElement('label', null, __('List Text Color')),
                                        createElement(ColorPicker, {
                                            color: item.listColor || '#000000',
                                            value: item.listColor || '#000000',
                                            onChange: (value) => updateItem(index, { listColor: value.hex || value })
                                        }),
                                        createElement('label', null, __('Font Size (px)')),
                                        createElement(RangeControl, {
                                            value: item.listFontSize || 16,
                                            min: 10,
                                            max: 48,
                                            onChange: (value) => updateItem(index, { listFontSize: value })
                                        }),
                                        createElement('label', null, __('Font Weight')),
                                        createElement('select', {
                                            value: item.listFontWeight || '400',
                                            onChange: (e) => updateItem(index, { listFontWeight: e.target.value })
                                        },
                                            createElement('option', { value: '300' }, __('Light')),
                                            createElement('option', { value: '400' }, __('Normal')),
                                            createElement('option', { value: '600' }, __('Semi-Bold')),
                                            createElement('option', { value: '700' }, __('Bold'))
                                        )
                                    ),

                                    // --- Dynamic list item editor ---
                                    createElement('div', { className: 'acro-description-list' },
                                        createElement('h5', null, __('List Items')),
                                        (item.listItems || []).map((li, liIndex) =>
                                            createElement('div', { className: 'list-item-editor', key: liIndex },
                                                createElement(RichText, {
                                                    tagName: 'div',
                                                    value: li,
                                                    placeholder: __('List item...'),
                                                    onChange: (v) => {
                                                        const newList = item.listItems ? [...item.listItems] : [];
                                                        newList[liIndex] = v;
                                                        updateItem(index, { listItems: newList });
                                                    },
                                                    allowedFormats: ['core/bold', 'core/italic', 'core/underline']
                                                }),
                                                createElement(Button, {
                                                    isDestructive: true,
                                                    onClick: () => {
                                                        const newList = item.listItems ? [...item.listItems] : [];
                                                        newList.splice(liIndex, 1);
                                                        updateItem(index, { listItems: newList });
                                                    }
                                                }, __('Remove'))
                                            )
                                        ),
                                        createElement(Button, {
                                            isPrimary: true,
                                            onClick: () => {
                                                const newList = item.listItems ? [...item.listItems] : [];
                                                newList.push('');
                                                updateItem(index, { listItems: newList });
                                            }
                                        }, __('Add List Item'))
                                    ),


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
            const borderColor = attributes.borderColor;
            const borderRadius = attributes.borderRadius;
            const borderPx = attributes.border;
            const boxShadow = attributes.boxShadow;
            const boxShadowColor = attributes.boxShadowColor;
            const styleVars = {
                '--acro-line-color': lineColor,
                '--acro-border': borderPx ? `${borderPx}px solid ${borderColor}` : 'none',
                '--acro-border-radius': `${borderRadius}px`,
                '--acro-box-shadow': boxShadow ? `0 0 ${boxShadow}px ${boxShadowColor}` : 'none',
            };
            
            return (
                createElement( 'div', { className: 'acro-timeline-root acro-timeline-' + orientation, style: styleVars },
                    createElement( 'div', { className: 'acro-timeline-line' } ),
                    createElement( 'div', { className: 'acro-timeline-items' },
                        items.map( function( item, index ) {             
                            console.log('listType: ', item.listType);                                                                                                                                                                                                                   
                            return createElement( 'div', { className: 'acro-timeline-item', key: index},
                                createElement( 'div', { className: 'acro-timeline-time' }, item.time ),
                                createElement( 'div', { className: 'acro-timeline-content' },
                                    item.image && createElement( 'div', { className: 'acro-timeline-image', style: { width: item.imageSize , height: item.imageHeight} },
                                        createElement( 'img', { src: item.image, alt: '' , style: { width: item.imageSize || 'auto', height: item.imageHeight || 'auto', objectFit: 'cover', display: 'block' }} )
                                    ),
                                    createElement( 'div', { className: 'acro-timeline-text', style: { color: item.textColor } },
                                        createElement( 'h3', { className: 'acro-timeline-title', style: item.textStyle && item.textStyle.bold ? { fontWeight: '700' } : {} },
                                            createElement( RichText.Content, { tagName: 'span', value: item.title } )
                                        ),
                                        (item.listItems && item.listItems.length > 0) ? 
                                            createElement('ul', {
                                                className: 'acro-timeline-desc-list',
                                                style: {
                                                    listStyleType: item.listType || ' disc',
                                                    color: item.listColor || '#000',
                                                    fontSize: (item.listFontSize || 16) + 'px',
                                                    fontWeight: item.listFontWeight || '400',
                                                }
                                            },
                                                item.listItems.map((li, liIndex) =>
                                                    createElement('li', { key: liIndex }, li)
                                                )
                                            )
                                        : null
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
