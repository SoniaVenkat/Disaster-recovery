import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'

import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'

const Replication = () => {
  return (
    <div>
      <div class="w-50">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h4>Resource type details</h4>
          <p class="mb-0">Region : US East (N.Virginia)</p>
        </div>
        <div>
          <CCard>
            <div class="d-flex justify-content-between align-items-start p-4">
              <h4>20 VM (East)</h4>
              <div class="ms-4">
                <h6 class="text-success">10 VM's Replication Healthy</h6>
                <h6 class="text-warning">5 VM's Replication Inprogress</h6>
                <h6 class="text-danger">5 VM's Replication Critical</h6>
              </div>
            </div>
            <div class="d-flex justify-content-between align-items-center mt-0 p-4">
              <CButton class="text-white btn btn-danger" href="#">
                End claim
              </CButton>
              <CButton class="text-white btn btn-danger" href="#">
                EndXYFilling
              </CButton>
            </div>
          </CCard>
        </div>
      </div>
    </div>
  )
}

export default Replication
