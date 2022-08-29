import React from "react";
import { Page, Card, DataTable } from "@shopify/polaris";

export default function Subscriber() {
  const rows = [
    ['Emerald Silk Gown', '$875.00', 124689, 140],
    ['Mauve Cashmere Scarf', '$230.00', 124533, 83],
    [
      'Navy Merino Wool Blazer with khaki chinos and yellow belt',
      '$445.00',
      124518,
      32
    ],
  ];
  return (
    <Page title="Subscribers">
      <Card >
        <Card.Section>
          <DataTable
            columnContentTypes={[
              'text',
              'numeric',
              'numeric',
              'numeric',

            ]}
            headings={[
              'Email / Phone',
              'Name',
              'Last Request',
              'Total Request',
            ]}
            rows={rows}
            footerContent={`Showing ${rows.length} of ${rows.length} results`}
          />
        </Card.Section>
      </Card>
    </Page>
  );
}
