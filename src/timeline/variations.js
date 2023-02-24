import { __ } from '@wordpress/i18n';

export default [
  {
    name: 'grouped',
    title: __('Grouped timeline'),
    description: __('Key dates are grouped.'),
    isDefault: true,
    icon: 'list-view',
    innerBlocks: [
      ['jhu/timeline-group'],
    ],
    scope: ['block'],
  },
  {
    name: 'ungrouped',
    title: __('Ungrouped timeline'),
    description: __('Key dates are not grouped.'),
    icon: 'menu',
    innerBlocks: [
      ['jhu/timeline-milestones'],
    ],
    scope: ['block'],
  }
];
