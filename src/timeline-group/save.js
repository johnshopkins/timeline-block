import { InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';
import classnames from "classnames";

export default ({ attributes }) => {
  const className = classnames({
    'has-description': attributes.hasDescription,
    'has-title': attributes.hasTitle,
  });

  return (
    <section {...useBlockProps.save( { className } )}>
      {attributes.hasTitle &&
        <RichText.Content
          tagName={'h3'}
          value={attributes.title}
        />
      }
      <InnerBlocks.Content />
    </section>
  );
};
