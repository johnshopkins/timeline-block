import { createBlock } from '@wordpress/blocks';
import { InspectorControls, store as blockEditorStore } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';
import { useDispatch, useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

export default ({ attributes, clientId, setAttributes }) => {

  const { getBlock, getBlockOrder } = useSelect( blockEditorStore );
  const { insertBlock, removeBlock } = useDispatch( blockEditorStore );

  return (
    <InspectorControls>
      <PanelBody title='Settings' initialOpen={true}>
        <ToggleControl
          label='Has title'
          checked={attributes.hasTitle}
          onChange={(hasTitle) => setAttributes({ hasTitle })}
        />
        <ToggleControl
          label='Has description'
          checked={attributes.hasDescription}
          onChange={(hasDescription) => {

            if (hasDescription) {
              // add wysiwyg block
              const block = createBlock('jhu/simple-wysiwyg', { className: 'description' }, [
                createBlock('core/paragraph', { placeholder: __('Enter a description...')})
              ]);

              insertBlock(block, 0, clientId, false);

            } else {
              // remove wysiwyg block
              const blocks = getBlockOrder(clientId);
              const fistBlockId = blocks[0];
              const firstBlock = getBlock(fistBlockId);

              if (firstBlock.name !== 'jhu/simple-wysiwyg') {
                const blocksPresent = blocks.map(id => getBlock(id).name);
                throw new Error('No WYSIWYG field found. Blocks found: ' + blocksPresent.join(', '));
              } else {
                removeBlock(fistBlockId);
              }
            }

            setAttributes({ hasDescription });

          }}
        />
      </PanelBody>
    </InspectorControls>
  );
};
