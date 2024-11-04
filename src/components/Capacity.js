import { CCard, CButton } from '@coreui/react'
import React from 'react'

const Capacity = () => {
  return (
    <div>
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h4>Resource type details</h4>
        <p class="mb-0">Region : US East (N.Virginia)</p>
      </div>
      <CCard>
        <div class="p-3">
          <p class="primary">DB Instances (4)</p>
          <p class="ms-3">Storage Allocated:</p>
          <p class="ms-3">DB clusters:</p>
          <p class="ms-3">Location:</p>
          <p class="primary">EC2</p>
          <p class="primary">CloudTrail</p>
          <p class="primary">MITE</p>
        </div>
      </CCard>
      <div class="d-flex justify-content-between align-items-center mb-4 mt-4">
        <h4>Recommendation</h4>
        <CButton color="primary" href="#">
          Submit Support Request
        </CButton>
      </div>
      <CCard>
        <div class="p-3 mb-3">
          <p class="color-primary">DB Instances (4)</p>
          <p class="ms-3">Storage Allocated:</p>
          <p class="primary">EC2</p>
          <p class="primary">CloudTrail</p>
          <p class="primary">MITE</p>
        </div>
      </CCard>
    </div>
  )
}

export default Capacity
