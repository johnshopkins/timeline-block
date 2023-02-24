import {InnerBlocks, RichText, useBlockProps} from '@wordpress/block-editor';

export default ({ attributes }) => {
  const blockProps = useBlockProps.save();
  return (
    <li {...blockProps}>
      <p className={'date'}>{attributes.date}</p>
      {attributes.hasTitle &&
        <RichText.Content
          tagName={'h4'}
          value={attributes.title}
        />
      }
      <InnerBlocks.Content />
    </li>
  );
};
