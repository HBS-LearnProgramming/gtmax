( function( wp ) {
    var registerBlockType = wp.blocks.registerBlockType;
    var el = wp.element.createElement;
    var Fragment = wp.element.Fragment;

    var InspectorControls = (wp.blockEditor && wp.blockEditor.InspectorControls) ? wp.blockEditor.InspectorControls : wp.editor.InspectorControls;
    var MediaUpload = (wp.blockEditor && wp.blockEditor.MediaUpload) ? wp.blockEditor.MediaUpload : wp.editor.MediaUpload;

    var PanelBody = wp.components.PanelBody;
    var SelectControl = wp.components.SelectControl;
    var Button = wp.components.Button;
    var TextControl = wp.components.TextControl;
    var RangeControl = wp.components.RangeControl;

    registerBlockType( 'cia/image-animation', {
        title: 'Image Animation',
        icon: 'format-image',
        category: 'media',
        attributes: {
            imageUrl: { type: 'string' },
            imageId:  { type: 'number' },
            animation:{ type: 'string', default: 'fade' },
            width:    { type: 'string', default: '300px' },
            height:   { type: 'string', default: 'auto' },
            animationDelay: { type: 'number', default: 0 } // NEW delay attribute (ms)
        },

        edit: function( props ) {
            var attrs = props.attributes;
            var setAttrs = props.setAttributes;

            function onSelectImage( media ) {
                if ( ! media || ! media.url ) return;
                setAttrs( { imageUrl: media.url, imageId: media.id } );
            }

            return el( Fragment, null,
                el( InspectorControls, null,
                    el( PanelBody, { title: 'Animation settings', initialOpen: true },
                        el( SelectControl, {
                            label: 'Animation',
                            value: attrs.animation,
                            options: [
                                { label: 'Fade', value: 'fade' },
                                { label: 'Zoom', value: 'zoom' },
                                { label: 'Slide Left', value: 'slide-left' },
                                { label: 'Slide Right', value: 'slide-right' },
                                { label: 'Bounce', value: 'bounce' },
                                { label: 'Left-Right Loop', value: 'left-right' }
                            ],
                            onChange: ( val ) => setAttrs( { animation: val } )
                        }),
                        el( TextControl, {
                            label: 'Image Width (px, %, etc.)',
                            value: attrs.width,
                            onChange: ( val ) => setAttrs( { width: val } )
                        }),
                        el( TextControl, {
                            label: 'Image Height (px, %, auto)',
                            value: attrs.height,
                            onChange: ( val ) => setAttrs( { height: val } )
                        }),
                        el( RangeControl, {
                            label: 'Animation Delay (ms)',
                            value: attrs.animationDelay,
                            onChange: ( val ) => setAttrs( { animationDelay: val } ),
                            min: 0,
                            max: 5000,
                            step: 100
                        })
                    )
                ),
                el( 'div', { className: 'cia-image ' + attrs.animation, style: { minHeight: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' } },
                    attrs.imageUrl ? el( 'img', { src: attrs.imageUrl, style: { width: attrs.width, height: attrs.height, animationDelay: (attrs.animationDelay/1000)+'s' } } )
                                   : el( MediaUpload, {
                                       onSelect: onSelectImage,
                                       allowedTypes: [ 'image' ],
                                       value: attrs.imageId,
                                       render: function( obj ) {
                                           return el( Button, { onClick: obj.open, isPrimary: true }, 'Upload / Select Image' );
                                       }
                                   } )
                )
            );
        },

        save: function( props ) {
            var attrs = props.attributes;

            if ( ! attrs.imageUrl ) return null;

            return el( 'div',
                { className: 'cia-image ' + attrs.animation, "data-animate": attrs.animation },
                el( 'img', {
                    src: attrs.imageUrl,
                    alt: '',
                    style: {
                        width: attrs.width,
                        height: attrs.height,
                        animationDelay: (attrs.animationDelay/1000) + 's'
                    },
                    'data-delay': attrs.animationDelay
                })
            );
        }
    } );
} )( window.wp );
