import React from 'react';
import {
  CAccordion,
  CAccordionItem,
  CAccordionHeader,
  CAccordionBody,
} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';

const Inventory = () => {
  // Complex data structure with multiple resource groups
  const data = 
    {
      "rg_baskar_cert": [
        {
          "name": "ASP-rgbaskarcert-ae28",
          "type": "Microsoft.Web/serverFarms",
          "location": "eastus",
          "sku": {
            "name": "Y1"
          }
        },
        {
          "name": "rgbaskarcerta18e",
          "type": "Microsoft.Storage/storageAccounts",
          "location": "eastus",
          "sku": {
            "name": "Standard_LRS"
          }
        }
      ],
      "az-fb-rg-notification": [],
      "az-fb-rg-call-queue": [
        {
          "name": "callqueueip466",
          "type": "Microsoft.Network/publicIPAddresses",
          "location": "centralus",
          "sku": {
            "name": "Standard"
          }
        },
        {
          "name": "call-queue-nsg",
          "type": "Microsoft.Network/networkSecurityGroups",
          "location": "centralus",
          "sku": null
        }
      ],
      "rg_sql": [
        {
          "name": "baskarcerttest",
          "type": "Microsoft.Sql/servers",
          "location": "westus2",
          "sku": null
        },
        {
          "name": "baskarcerttest/master",
          "type": "Microsoft.Sql/servers/databases",
          "location": "westus2",
          "sku": {
            "name": "System"
          }
        }
      ],
      "az-fb-rg-skipq": [
        {
          "name": "skipqueue",
          "type": "Microsoft.ServiceBus/namespaces",
          "location": "centralus",
          "sku": {
            "name": "Basic"
          }
        }
      ],
      "rg_availabilityset": [],
      "LogAnalyticsDefaultResources": [],
      "rq_exam_prep_delete": [
        {
          "name": "examtransferdatafactory",
          "type": "Microsoft.DataFactory/factories",
          "location": "eastus",
          "sku": null
        }
      ],
      "Moodle_group": [
        {
          "name": "Moodle-nsg",
          "type": "Microsoft.Network/networkSecurityGroups",
          "location": "eastus",
          "sku": null
        },
        {
          "name": "Moodle-ip",
          "type": "Microsoft.Network/publicIPAddresses",
          "location": "eastus",
          "sku": {
            "name": "Standard"
          }
        }
      ],
      "az-rg-fb-lms": [
        {
          "name": "MIT-nsg",
          "type": "Microsoft.Network/networkSecurityGroups",
          "location": "eastus",
          "sku": null
        },
        {
          "name": "MIT-ip",
          "type": "Microsoft.Network/publicIPAddresses",
          "location": "eastus",
          "sku": {
            "name": "Standard"
          }
        }
      ],
      "az-fb-rg-costalert": [
        {
          "name": "az-cost-alrt",
          "type": "microsoft.insights/actiongroups",
          "location": "global",
          "sku": null
        }
      ],
      "ATS-RG": [
        {
          "name": "ATS-Prod-Server-ip",
          "type": "Microsoft.Network/publicIPAddresses",
          "location": "southindia",
          "sku": {
            "name": "Standard"
          }
        }
      ],
      "az-fb-rg-DRD": [
        {
          "name": "DR-diagnostics_key",
          "type": "Microsoft.Compute/sshPublicKeys",
          "location": "eastus",
          "sku": null
        }
      ],
      "az-fb-rg-sso-wp": [
        {
          "name": "taxresponder.onmicrosoft.com",
          "type": "Microsoft.AzureActiveDirectory/b2cDirectories",
          "location": "asiapacific",
          "sku": {
            "name": "PremiumP1"
          }
        }
      ]
    }
    
  

  return (
    <>
      <h3 className="mb-4">Resource Groups</h3>
      <CAccordion alwaysOpen>
        {Object.entries(data).map(([group, resources], groupIndex) => (
          <CAccordionItem key={groupIndex} itemKey={groupIndex}>
            <CAccordionHeader>{group}</CAccordionHeader>
            <CAccordionBody>
              {resources.map((resource, resourceIndex) => (
                <div key={resourceIndex} className="mb-3">
                  <p><strong>Name:</strong> {resource.name}</p>
                  <p><strong>Type:</strong> {resource.type}</p>
                  <p><strong>Location:</strong> {resource.location}</p>
                  {resource.sku && (
                    <p><strong>SKU:</strong> {resource.sku.name || 'N/A'}</p>
                  )}
                </div>
              ))}
            </CAccordionBody>
          </CAccordionItem>
        ))}
      </CAccordion>
    </>
  );
};

export default Inventory;
