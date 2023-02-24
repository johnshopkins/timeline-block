import { InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import CustomAppender from '../components/custom-appender';
import Toggles from "../components/toggles";

import './editor.scss';

export default ({ attributes, clientId, isSelected, setAttributes }) => {
  const blockProps = useBlockProps();
  return (
    <div {...blockProps}>
      <p className={'block-label'}>Milestone</p>
      <TextControl
        label={__('Date')}
        onChange={(date) => setAttributes({ date })}
        value={attributes.date}
      />
      <RichText
        tagName={'h4'}
        value={attributes.title}
        multiline={ false }
        allowedFormats={[ 'core/bold', 'core/italic' ]}
        onChange={(title) => setAttributes({ title })}
        placeholder={__( 'Enter a title...' )}
      />
      <InnerBlocks
        allowedBlocks={['jhu/simple-wysiwyg']}
        renderAppender={false}
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
}
