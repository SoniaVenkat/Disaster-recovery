import React, { useState } from 'react'
import {
    CButton,
    CCard,
    CCardBody,
    CCardGroup,
    CCol,
    CContainer,
    CRow,
    CModal,
    CModalBody,
    CModalHeader,
    CModalTitle,
    CForm,
    CFormInput,
} from '@coreui/react'
import { useNavigate } from 'react-router-dom'
import awsImage from './../../../assets/images/aws.png'
import azureImage from './../../../assets/images/azure.png'
import gc2Image from './../../../assets/images/GCP.png'

const Cloudlogin = () => {
    const [selectedCloud, setSelectedCloud] = useState(null)
    const [visible, setVisible] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    // Cloud options with images
    const cloudOptions = [
        { name: 'AWS', imgSrc: awsImage },
        { name: 'Azure', imgSrc: azureImage },
        { name: 'GC2', imgSrc: gc2Image },
    ]

    const handleSelectCloud = (cloudName) => {
        setSelectedCloud(cloudOptions.find(cloud => cloud.name === cloudName))
    }

    const handleContinue = () => {
        if (selectedCloud) {
            setVisible(true)
        } else {
            alert('Please select a cloud service!')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Add authentication logic here
        alert(`Logging in to ${selectedCloud.name} with username: ${username}`)
        setVisible(false)
    }

    const handleClick = () =>{
      navigate('/dashboard')
    }

    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center">
            <CContainer>
                <CRow className="justify-content-center">
                    <CCol md={8}>
                        <CCardGroup>
                            <CCard className="p-4">
                                <CCardBody>
                                    <h1 className='text-center mb-4'>Choose any Cloud Service</h1>
                                    <div className="d-flex justify-content-around mb-4">
                                        {cloudOptions.map((cloud) => (
                                            <div
                                                key={cloud.name}
                                                className="text-center"
                                                onClick={() => handleSelectCloud(cloud.name)}
                                                style={{
                                                    border: selectedCloud?.name === cloud.name ? '2px solid blue' : '1px solid gray',
                                                    padding: '10px',
                                                    borderRadius: '10px',
                                                    cursor: 'pointer'
                                                }}
                                            >
                                                <img src={cloud.imgSrc} alt={cloud.name} style={{ width: '100px', height: '100px' }} />
                                                <p>{cloud.name}</p>
                                                
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-center">
                                        <CButton color="primary" onClick={handleContinue}>Continue</CButton>
                                    </div>
                                </CCardBody>
                            </CCard>
                        </CCardGroup>
                    </CCol>
                </CRow>
            </CContainer>

            {/* Centered Modal for cloud login */}
            <CModal visible={visible} onClose={() => setVisible(false)} alignment="center">
                <CModalHeader>
                    <CModalTitle>{selectedCloud?.name} Login</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    {/* Display selected cloud image */}
                    {selectedCloud && (
                        <div className="text-center mb-4">
                            <img src={selectedCloud.imgSrc} alt={selectedCloud.name} style={{ width: '80px', height: '80px' }} />
                        </div>
                    )}
                    <CForm onSubmit={handleSubmit}>
                        <CFormInput
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="mb-3"
                            required
                        />
                        <CFormInput
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mb-3"
                            required
                        />
                        <div className="text-center">
                            <CButton type="submit" color="primary" onClick={handleClick}>Submit</CButton>
                        </div>
                    </CForm>
                </CModalBody>
            </CModal>
        </div>
    )
}

export default Cloudlogin
