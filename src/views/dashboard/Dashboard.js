import React from 'react'
import classNames from 'classnames'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import MainChart from './MainChart'
import { useMsal } from '@azure/msal-react';
import { useEffect, useState } from 'react';


const Dashboard = () => {
  const { instance, accounts } = useMsal();
  const [accessToken, setAccessToken] = useState(null);

  const request = {
    scopes: ["User.Read"],  // Adjust scopes as necessary
    account: accounts[0]
  };

  const getToken = async () => {
    try {
      const response = await instance.acquireTokenSilent(request);
      setAccessToken(response.accessToken);
    } catch (error) {
      if (error instanceof InteractionRequiredAuthError) {
        try {
          const response = await instance.acquireTokenPopup(request);
          setAccessToken(response.accessToken);
        } catch (popupError) {
          console.error("Popup token acquisition failed: ", popupError);
        }
      } else {
        console.error("Token acquisition failed: ", error);
      }
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  useEffect(() => {
    if (accessToken) {
      console.log("Access token:", accessToken);
      // Use the accessToken for API calls as needed
    }
  }, [accessToken]);


  const progressExample = [
    { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
    { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
    { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
    { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
    { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
  ]

  const progressGroupExample1 = [
    { title: 'Monday', value1: 34, value2: 78 },
    { title: 'Tuesday', value1: 56, value2: 94 },
    { title: 'Wednesday', value1: 12, value2: 67 },
    { title: 'Thursday', value1: 43, value2: 91 },
    { title: 'Friday', value1: 22, value2: 73 },
    { title: 'Saturday', value1: 53, value2: 82 },
    { title: 'Sunday', value1: 9, value2: 69 },
  ]

  const progressGroupExample2 = [
    { title: 'Male', icon: cilUser, value: 53 },
    { title: 'Female', icon: cilUserFemale, value: 43 },
  ]

  const progressGroupExample3 = [
    { title: 'Organic Search', icon: cibGoogle, percent: 56, value: '191,235' },
    { title: 'Facebook', icon: cibFacebook, percent: 15, value: '51,223' },
    { title: 'Twitter', icon: cibTwitter, percent: 11, value: '37,564' },
    { title: 'LinkedIn', icon: cibLinkedin, percent: 8, value: '27,319' },
  ]

  const tableExample = [
    {
      user: {
        name: 'fb-dev',
      },
      country: { flag: 'EC2' },
      usage: {
        period: 'Jun 11, 2023 - Jun 12, 2023',
      },
      payment: { name: 'Mastercard' },
      activity: '10 sec ago',
    },
    {
      user: {
        name: 'fb-staging',
      },
      country: { flag: 'Cloud trail' },
      usage: {
        period: 'Jun 11, 2023 - Jun 12, 2023',
      },
      payment: { name: 'Mastercard' },
      activity: '5 minutes ago',
    },
    {
      user: { name: 'fb-prod', new: true, registered: 'Jan 1, 2023' },
      country: { flag: 'Kubernetes' },
      usage: {
        period: 'Jun 11, 2023 - Jun 12, 2023',
      },
      payment: { name: 'Mastercard' },
      activity: '1 hour ago',
    },
    {
      user: { name: 'fb-swsign', new: true, registered: 'Jan 1, 2023' },
      country: { flag: 'Database' },
      usage: {
        period: 'Jun 11, 2023 - Jun 12, 2023',
      },
      payment: { name: 'Mastercard' },
      activity: 'Last month',
    },
    {
      user: {
        name: 'rg-dev',
        new: true,
        registered: 'Jan 1, 2023',
      },
      country: { flag: 'S3' },
      usage: {
        period: 'Jun 11, 2023 - Jun 12, 2023',
      },
      payment: { name: 'Mastercard' },
      activity: 'Last week',
    },
    {
      user: {
        name: 'rg-staging',
        new: true,
        registered: 'Jan 1, 2023',
      },
      country: { flag: 'CloudFront' },
      usage: {
        period: 'Jun 11, 2023 - Jun 12, 2023',
      },
      payment: { name: 'Mastercard' },
      activity: 'Last week',
    },
  ]

  return (
    <>
      <WidgetsDropdown className="mb-4" />

      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Activity log</CCardHeader>
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead className="text-nowrap">
                  <CTableRow>
                    {/* <CIcon icon={cilPeople} /> */}

                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      Resource Type
                    </CTableHeaderCell>   
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      Resource Name
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      Start time
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      End Time
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">Time Taken</CTableHeaderCell>
                  </CTableRow>    
                </CTableHead>   
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <p className="text-center">{item.country.flag}</p>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="text-center">{item.user.name}</div>
                      </CTableDataCell>

                      <CTableDataCell className="text-center">
                        <small className="text-body-secondary text-center">
                          {item.usage.period}
                        </small>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <small className="text-body-secondary text-center">
                          {item.usage.period}
                        </small>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-body-secondary text-nowrap">Last session</div>
                        <div className="fw-semibold text-nowrap">{item.activity}</div>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
