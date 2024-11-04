import React from 'react'

const Inventory = () => {
  return (
    <div>
      <div class="d-flex justify-content-between align-items-center">
        <h4>Resource Type</h4>
        <p class="mb-0">Region : US East (N.Virginia)</p>
      </div>

      <ul class="list-group mt-4">
        <li class="list-group-item">EC2</li>
        <li class="list-group-item">CloudFront</li>
        <li class="list-group-item">S3</li>
        <li class="list-group-item">CloudTrail</li>
        <li class="list-group-item">Incident Manager</li>
        <li class="list-group-item">MITE</li>
      </ul>
    </div>
  )
}

export default Inventory
