import { __experimentalBlockVariationPicker, useBlockProps } from '@wordpress/block-editor';
import { useDispatch } from "@wordpress/data";
import { store as blockEditorStore } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { createBlocksFromInnerBlocksTemplate } from '@wordpress/blocks';

import variations from "../variations";

export default ({ clientId, setAttributes }) => {
  const blockProps = useBlockProps();
  const { replaceInnerBlocks } = useDispatch(blockEditorStore);
  return (
    <div { ...blockProps }>
      <__experimentalBlockVariationPicker
        label={'Timeline'}
        icon={'clock'}
        variations={variations}
        instructions={__('Select a variation.')}
        onSelect={(nextVariation = defaultVariation) => {
          setAttributes({ variation: nextVariation.name });

          if (nextVariation.attributes) {
            setAttributes(nextVariation.attributes);
          }
          if (nextVariation.innerBlocks) {
            replaceInnerBlocks(
              clientId,
              createBlocksFromInnerBlocksTemplate(
                nextVariation.innerBlocks
              ),
              false
            );
          }
        }}
      />
    </div>
  );
};
