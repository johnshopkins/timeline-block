import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

import CustomAppender from '../components/custom-appender';

import metadata from './block.json';

registerBlockType(metadata.name, {
  edit: ({ attributes, clientId }) =>
    <div className={attributes.className}>
      <InnerBlocks
        allowedBlocks={['jhu/timeline-milestone']}
        template={[
          ['jhu/timeline-milestone']
        ]}
        renderAppender={() =>
          <CustomAppender
            label={'Add a milestone'}
            rootClientId={clientId}
          />
        }
      />
    </div>,

  save: ({ attributes }) =>
    <ol className={attributes.className}>
      <InnerBlocks.Content />
    </ol>
});
