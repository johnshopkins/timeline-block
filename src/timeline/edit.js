import { InnerBlocks, RichText, useBlockProps, store as blockEditorStore } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

import CustomAppender from '../components/custom-appender';
import Toggles from '../components/toggles';
import Placeholder from './components/Placeholder';

import './editor.scss';

const variationBlocks = {
  grouped: ['jhu/simple-wysiwyg', 'jhu/timeline-group'],
  ungrouped: ['jhu/simple-wysiwyg', 'jhu/timeline-milestones']
};

const TimelineEditContainer = ({ attributes, clientId, isSelected, setAttributes }) => {

  const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
      <p className={'block-label'}>Timeline</p>
      {attributes.hasTitle && <RichText
        tagName={'h2'}
        value={attributes.title}
        multiline={ false }
        allowedFormats={[ 'core/bold', 'core/italic' ]}
        onChange={(title) => setAttributes({ title })}
        placeholder={__( 'Enter a title...' )}
      />}
      <InnerBlocks
        allowedBlocks={variationBlocks[attributes.variation]}
        renderAppender={() =>
          attributes.variation === 'grouped' ?
            <CustomAppender label={'Add group'} rootClientId={clientId} /> :
            false
        }
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

export default (props) => {
  const { clientId } = props;
  const hasInnerBlocks = useSelect((select) =>
    select( blockEditorStore ).getBlocks(clientId).length > 0,[ clientId ]);

  const Component = hasInnerBlocks
    ? TimelineEditContainer
    : Placeholder;

  return <Component { ...props } />;
};
