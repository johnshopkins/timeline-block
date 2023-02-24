import { Inserter } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";

export default ({ icon, label, rootClientId, text, variant }) =>
  <Inserter
    rootClientId={ rootClientId }
    renderToggle={({ onToggle, disabled, isOpen}) => (
      <Button
        onClick={onToggle}
        aria-expanded={isOpen}
        disabled={disabled}
        label={label}
        text={text || label}
        icon={icon || 'plus'}
        variant={variant || 'primary'}
      />
    )}
    isAppender
    showSeparator={true}
  />;
