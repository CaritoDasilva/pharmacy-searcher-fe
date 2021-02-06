import React from 'react'
import { Button } from 'react-bootstrap'
import { IPharmacy } from '../../interfaces'

interface IPharmacyDetailProps {
    localDetail: IPharmacy;
    onClose: () => void;
}

const PharmacyDetail = (props: IPharmacyDetailProps) => {

    const { localDetail, onClose } = props
    console.log("🚀 ~ file: PharmacyDetail.tsx ~ line 4 ~ PharmacyDetail ~ localDetail", localDetail)
    const { local_nombre, local_direccion, local_telefono } = localDetail

    return (
        <div className="detail-container">
            <h1>{local_nombre}</h1>
            <p>Teléfono: {local_telefono}</p>
            <p>Dirección: {local_direccion}</p>
            <Button className="btn-consorcio" onClick={onClose}>Cerrar</Button>
        </div>
    )
}

export default PharmacyDetail;