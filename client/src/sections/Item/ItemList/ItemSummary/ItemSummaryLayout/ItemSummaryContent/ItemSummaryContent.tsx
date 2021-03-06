import React from 'react';
import {DataTable} from '@shopify/polaris';

import './ItemSummaryContent.css';

interface Props {
  category: string;
  count: number;
  expiryDate: Date;
}

export default function ItemSummaryContent({
  category,
  count,
  expiryDate
}: Props) {
  const rows = [
    ['Category', category],
    ['Count', count],
    ['Expiry date', new Date(expiryDate).toLocaleDateString()]
  ];

  return (
    <div className='item-summary-content'>
      <DataTable
        columnContentTypes={[
          'text',
          'text'
        ]}
        headings={[]}
        rows={rows}
      />
    </div>
  );
}