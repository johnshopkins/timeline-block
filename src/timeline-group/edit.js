import { InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

import Toggles from "../components/toggles";

import './editor.scss';

export default ({ attributes, clientId, isSelected, setAttributes }) => {

  const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
      <p className={'block-label'}>Group</p>
      <RichText
        tagName={'h4'}
        value={attributes.title}
        multiline={ false }
        allowedFormats={[ 'core/bold', 'core/italic' ]}
        onChange={(title) => setAttributes({ title })}
        placeholder={__( 'Enter a title...' )}
      />
      <InnerBlocks
        allowedBlocks={['jhu/timeline-milestones', 'jhu/simple-wysiwyg']}
        renderAppender={false}
        template={[
          ['jhu/timeline-milestones'],
        ]}
      />
      {isSelected &&
        <Toggles
          attributes={attributes}
          clientId={clientId}
          setAttributes={setAttributes}
        />
      }
    </div>
  );
};
