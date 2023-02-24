import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

import metadata from './block.json';

const ALLOWED_BLOCKS = [
  'core/buttons',
  'core/list',
  'core/list-item',
  'core/paragraph',
];

registerBlockType(metadata.name, {
  edit: ({ attributes }) =>
    <div className={attributes.className}>
      <InnerBlocks
        allowedBlocks={ALLOWED_BLOCKS}
        renderAppender={false}
      />
    </div>,

  save: ({ attributes }) =>
    <div className={attributes.className}>
      <InnerBlocks.Content />
    </div>
});
