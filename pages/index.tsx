import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import PharmacyService from './api/pharmacy_service'
import Map from '../components/Map';
import { ICommune, ILocation, IPharmacy } from '../interfaces'
import { Button, Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap'

const IndexPage = () => {
  const pharmacy_service = new PharmacyService()
  const [pharmacys, setPharmacys] = useState<IPharmacy[] | []>([])
  const [pharmacyByCommune, setPharmacyByCommune] = useState<IPharmacy[]>([])
  const [locationPharmacy, setLocationPharmacy] = useState<ILocation>({ lat: -33.487576, lng: -70.6064527 })
  const [coordinates, setCoordinates] = useState<any>({})
  const [loader, setLoader] = useState<boolean>(true)
  const [communes, setCommunes] = useState<ICommune[]>([])
  const [inputSearchValue, setInputSearchValue] = useState<string>('')

  useEffect(() => {
    getPharmacyFromServices()
    getUserLocation()
  }, [])

  useEffect(() => {
    setLoader(false)
  }, [coordinates])


  const getPharmacyFromServices = async () => {
    try {
      let results = await pharmacy_service.getCommunesAndPharmacys()
      if (results) {
        setCommunes(results.communes)
        setPharmacys(results.pharmacys);
        setPharmacyByCommune(results.pharmacys)

      }

    }
    catch (error) {

    }
  }

  const showPharmacy = async () => {
    const resultSearch: IPharmacy[] = await pharmacys.filter(pharm => pharm.local_nombre.toUpperCase() === inputSearchValue.toUpperCase())
    setPharmacyByCommune(resultSearch)
  }

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("🚀 ~ file: index.tsx ~ line 70 ~ getUserLocation ~ else")

    }

  }

  function showPosition(position: any) {
    setCoordinates({ lat: position.coords.latitude, long: position.coords.longitude })
  }

  const changeCommune = async (e: React.ChangeEvent<HTMLInputElement>) => {
    let pharmacyByCommune: IPharmacy[] = await pharmacys.filter((pharm: IPharmacy) => pharm.fk_comuna === e.target.value)
    setLocationPharmacy({ lat: Number(pharmacyByCommune[0].local_lat), lng: Number(pharmacyByCommune[0].local_lng) });
    setPharmacyByCommune(pharmacyByCommune)
  }


  return (

    <Layout title="Home | Buscador de farmacias de turno">
      <Col md={10} sm={12} className="map-container" >
        {
          communes && communes?.length > 0 && (
            <Form className='col-12'>
              <Row>
                <Col md={5} sm={12}>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label className="labels">Comunas:</Form.Label>
                    <Form.Control as="select" onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeCommune(e)}>
                      <option defaultValue={0}>Seleccione comuna:</option>
                      {communes.map((com: ICommune) =>
                        <option value={com.communeId} key={com.communeId}>{com.communeName}</option>)}
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col md={5} sm={12}>
                  <Form.Group controlId="formHorizontalEmail">
                    <Form.Label className="labels">
                      Nombre de Tienda
                    </Form.Label>
                    <InputGroup className="mb-3">
                      <FormControl
                        onChange={(e) => setInputSearchValue(e.target.value)}
                        placeholder="Ingresa nombre de tienda"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                      />
                      <InputGroup.Append>
                        <Button className="search-btn" type="button" onClick={() => showPharmacy()}>Buscar</Button>
                      </InputGroup.Append>
                    </InputGroup>
                  </Form.Group>

                </Col>
              </Row>
            </Form>

          )
        }
        {!loader && Object.values(coordinates).length > 0 && (
          <div>

            <Map location={locationPharmacy} markers={pharmacyByCommune} />
          </div>


        )
        }

      </Col>
    </Layout >

  )
}

export default IndexPage;
