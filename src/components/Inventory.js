import React from 'react';
import {
  CAccordion,
  CAccordionItem,
  CAccordionHeader,
  CAccordionBody,
} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';

const Inventory = () => {
  const data = {
    value: [
      {
        id: "/subscriptions/d6240a3c-34a4-4a5c-955b-06228bf34ca8/resourceGroups/rg_sql/providers/Microsoft.Sql/servers/baskarcerttest",
        name: "baskarcerttest",
        type: "Microsoft.Sql/servers",
        kind: "v12.0",
        location: "westus2",
        tags: {}
      },
      {
        id: "/subscriptions/d6240a3c-34a4-4a5c-955b-06228bf34ca8/resourceGroups/rg_sql/providers/Microsoft.Sql/servers/baskarcerttest/databases/master",
        name: "baskarcerttest/master",
        type: "Microsoft.Sql/servers/databases",
        sku: {
          name: "System",
          tier: "System",
          capacity: 0
        },
        kind: "v12.0,system",
        managedBy: "/subscriptions/d6240a3c-34a4-4a5c-955b-06228bf34ca8/resourceGroups/rg_sql/providers/Microsoft.Sql/servers/baskarcerttest",
        location: "westus2"
      },
      {
        id: "/subscriptions/d6240a3c-34a4-4a5c-955b-06228bf34ca8/resourceGroups/rg_sql/providers/Microsoft.Sql/servers/baskarcerttest/databases/DRD-db",
        name: "baskarcerttest/DRD-db",
        type: "Microsoft.Sql/servers/databases",
        sku: {
          name: "GP_S_Gen5",
          tier: "GeneralPurpose",
          family: "Gen5",
          capacity: 1
        },
        kind: "v12.0,user,vcore,serverless",
        location: "westus2",
        tags: {
          Name: "DRD-DB"
        }
      }
    ]
  };

  return (
    <CAccordion>
      {data.value.map((resource, index) => (
        <CAccordionItem key={index} itemKey={index}>
          <CAccordionHeader>{resource.name}</CAccordionHeader>
          <CAccordionBody>
            <p><strong>Type:</strong> {resource.type}</p>
            <p><strong>Location:</strong> {resource.location}</p>
            {resource.sku && (
              <div>
                <p><strong>SKU Name:</strong> {resource.sku.name}</p>
                <p><strong>Tier:</strong> {resource.sku.tier}</p>
                {resource.sku.family && <p><strong>Family:</strong> {resource.sku.family}</p>}
                <p><strong>Capacity:</strong> {resource.sku.capacity}</p>
              </div>
            )}
            <p><strong>Kind:</strong> {resource.kind}</p>
            {resource.tags && (
              <p><strong>Tags:</strong> {JSON.stringify(resource.tags)}</p>
            )}
          </CAccordionBody>
        </CAccordionItem>
      ))}
    </CAccordion>
  );
};

export default Inventory;
