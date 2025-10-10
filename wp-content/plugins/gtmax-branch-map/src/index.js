const { registerBlockType } = wp.blocks;
const { useState } = wp.element;
const { InspectorControls, MediaUpload, RichText } = wp.blockEditor;
const { Button, PanelBody, TextControl, RangeControl } = wp.components;

registerBlockType('gtmax/branch-map', {
    title: 'GT-MAX Branch Map',
    icon: 'location',
    category: 'widgets',
    attributes: {
        branches: { type: 'array', default: [] },
        mapHeight: { type: 'string', default: '400px' },
        mapZoom: { type: 'number', default: 12 },
    },
    edit: ({ attributes, setAttributes }) => {
        const { branches, mapHeight, mapZoom } = attributes;

        const addBranch = () => {
            const newBranch = { title: '', lat: '', lng: '', description: '', image: '', imageWidth: '', imageHeight: '' };
            setAttributes({ branches: [...branches, newBranch] });
        };

        const updateBranch = (index, key, value) => {
            const newBranches = [...branches];
            newBranches[index][key] = value;
            setAttributes({ branches: newBranches });
        };

        const removeBranch = (index) => {
            const newBranches = branches.filter((_, i) => i !== index);
            setAttributes({ branches: newBranches });
        };

        return (
            <>
                <InspectorControls>
                    <PanelBody title="Map Settings" initialOpen={true}>
                        <TextControl
                            label="Map Height"
                            value={mapHeight}
                            onChange={(val) => setAttributes({ mapHeight: val })}
                        />
                        <RangeControl
                            label="Zoom Level"
                            value={mapZoom}
                            onChange={(val) => setAttributes({ mapZoom: val })}
                            min={1}
                            max={20}
                        />
                    </PanelBody>
                </InspectorControls>

                <div className="gtmax-branch-map-editor">
                    <h3>GT-MAX Branches</h3>
                    {branches.map((branch, index) => (
                        <div key={index} className="branch-item" style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
                            <TextControl label="Branch Name" value={branch.title} onChange={(val) => updateBranch(index, 'title', val)} />
                            <TextControl label="Latitude" value={branch.lat} onChange={(val) => updateBranch(index, 'lat', val)} />
                            <TextControl label="Longitude" value={branch.lng} onChange={(val) => updateBranch(index, 'lng', val)} />
                            <RichText
                                tagName="p"
                                label="Description"
                                value={branch.description}
                                onChange={(val) => updateBranch(index, 'description', val)}
                                placeholder="Enter description..."
                            />
                            <MediaUpload
                                onSelect={(media) => updateBranch(index, 'image', media.url)}
                                render={({ open }) => (
                                    <Button onClick={open} variant="secondary">
                                        {branch.image ? 'Change Image' : 'Select Image'}
                                    </Button>
                                )}
                            />
                            {branch.image && (
                                <>
                                    <TextControl label="Image Width (e.g. 100px)" value={branch.imageWidth} onChange={(val) => updateBranch(index, 'imageWidth', val)} />
                                    <TextControl label="Image Height (e.g. 100px)" value={branch.imageHeight} onChange={(val) => updateBranch(index, 'imageHeight', val)} />
                                    <img src={branch.image} alt="" style={{ width: branch.imageWidth, height: branch.imageHeight, marginTop: '5px' }} />
                                </>
                            )}
                            <Button isDestructive onClick={() => removeBranch(index)} style={{ marginTop: '10px' }}>
                                Remove Branch
                            </Button>
                        </div>
                    ))}
                    <Button variant="primary" onClick={addBranch}>
                        + Add Branch
                    </Button>
                </div>
            </>
        );
    },
    save: () => null, // Rendered via PHP
});
