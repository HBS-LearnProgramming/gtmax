( function( wp ) {
    var registerBlockType = wp.blocks.registerBlockType;
    var el = wp.element.createElement;
    var Fragment = wp.element.Fragment;

    // Compatibility: MediaUpload may be in blockEditor or editor
    var InspectorControls = (wp.blockEditor && wp.blockEditor.InspectorControls) ? wp.blockEditor.InspectorControls : wp.editor.InspectorControls;
    var MediaUpload = (wp.blockEditor && wp.blockEditor.MediaUpload) ? wp.blockEditor.MediaUpload : wp.editor.MediaUpload;

    var PanelBody = wp.components.PanelBody;
    var SelectControl = wp.components.SelectControl;
    var Button = wp.components.Button;

    registerBlockType( 'cia/image-animation', {
        title: 'Image Animation',
        icon: 'format-image',
        category: 'media',
        attributes: {
            imageUrl: { type: 'string' },
            imageId:  { type: 'number' },
            animation:{ type: 'string', default: 'fade' }
        },

        edit: function( props ) {
            var attributes = props.attributes;
            var setAttributes = props.setAttributes;
            var className = props.className;

            var imageUrl = attributes.imageUrl;
            var imageId  = attributes.imageId;
            var animation = attributes.animation || 'fade';

            function onSelectImage( media ) {
                if ( ! media || ! media.url ) return;
                setAttributes( { imageUrl: media.url, imageId: media.id } );
            }

            return el( Fragment, null,
                // Sidebar controls
                el( InspectorControls, null,
                    el( PanelBody, { title: 'Animation settings', initialOpen: true },
                        el( SelectControl, {
                            label: 'Animation',
                            value: animation,
                            options: [
                                { label: 'Fade', value: 'fade' },
                                { label: 'Zoom', value: 'zoom' },
                                { label: 'Slide Left', value: 'slide-left' },
                                { label: 'Slide Right', value: 'slide-right' },
                                { label: 'Bounce', value: 'bounce' },
                                { label: 'Left-Right Loop', value: 'left-right' }
                            ],
                            onChange: function( val ) { setAttributes( { animation: val } ); }
                        } )
                    )
                ),

                // Block content / preview
                el( 'div', { className: className + ' cia-image ' + animation, style: { minHeight: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' } },
                    imageUrl ? el( 'img', { src: imageUrl, style: { maxWidth: '100%', height: 'auto' } } )
                             : el( MediaUpload, {
                                 onSelect: onSelectImage,
                                 allowedTypes: [ 'image' ],
                                 value: imageId,
                                 render: function( obj ) {
                                     return el( Button, { onClick: obj.open, isPrimary: true }, 'Upload / Select Image' );
                                 }
                             } )
                )
            );
        },

        save: function( props ) {
            var attributes = props.attributes;
            var imageUrl = attributes.imageUrl;
            var animation = attributes.animation || 'fade';

            if ( ! imageUrl ) return null;

            return el( 'div', { className: 'cia-image ' + animation },
                el( 'img', { src: imageUrl, alt: '' } )
            );
        }
    } );
} )( window.wp );
