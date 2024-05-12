import '../style/product.css'
import Star from '../assets/icons/star'
import image1 from '../assets/images/grass cutter.jpg'
import image2 from '../assets/images/drill.webp'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from "react-toastify";
import {useNavigate} from 'react-router-dom'
function Product({ title, discription }) {
    const navigation = useNavigate()
    const [formdata, setFormData] = useState({
        forSale: false,
        discription: '',
        price: '',
        name: '',
        discount: '',
        batchNumber: '',
    });
    const [data, setData] = useState([{
        forSale: false,
        discription: 'this is ',
        price: 1200,
        name: 'new',
        discount: 12,
        batchNumber: 123,
    },{
        forSale: true,
        discription: 'this is ',
        price: 1200,
        name: 'new',
        discount: 12,
        batchNumber: 123,
    }])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // Add a new Product
    const submit = () => {
        const url = 'http://localhost:3000/product/add';
        axios.post(url, formdata, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                console.log('API Response:', response.data);
                toast.success(`Product created successfully!`)
                getProduct()
                handleClose()
            })
            .catch(error => {
                console.log(error)
                toast.error(`${error.response.data}`)

            });

    }
    //List oF Products
    const getProduct = () => {
        const url = 'http://localhost:3000/product/list';
        axios.get(url, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                console.log('API Response:', response.data);
                setData(response.data)
            })
            .catch(error => {
                console.log(error)
                toast.error(`${error.response.data}`)
            });

    }
    useEffect(() => {
        getProduct()
    }, [])



    return (
        <div className="container-fluid    px-5 mt-2 mb-2">
            <ToastContainer />
            <Button variant="primary" onClick={handleShow}>
                Add New Product
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Product Detail</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-group m-2">
                            <input type="text" className="form-control " aria-describedby="emailHelp" placeholder="Enter Product name" onChange={(e) => {
                                setFormData((prevData) => ({
                                    ...prevData,
                                    name: e.target.value,
                                }))
                            }} />
                            <input type="text" className="form-control mt-2" aria-describedby="emailHelp" placeholder="Enter Product Discription" onChange={(e) => {
                                setFormData((prevData) => ({
                                    ...prevData,
                                    discription: e.target.value,
                                }))
                            }} />
                            <input type="number" className="form-control mt-2" aria-describedby="emailHelp" placeholder="Enter Prize" onChange={(e) => {
                                setFormData((prevData) => ({
                                    ...prevData,
                                    price: e.target.value,
                                }))
                            }} />
                            <input type="number" className="form-control mt-2" aria-describedby="emailHelp" placeholder="Enter Discount" onChange={(e) => {
                                setFormData((prevData) => ({
                                    ...prevData,
                                    discount: e.target.value,
                                }))
                            }} />

                            <div className="form-group form-check mt-2">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={(e) => {
                                    setFormData((prevData) => ({
                                        ...prevData,
                                        forSale: e.target.checked,
                                    }))
                                }} />
                                <label className="form-check-label" for="exampleCheck1">For Sale</label>
                            </div>
                            <input type="check" className="form-control mt-2" aria-describedby="emailHelp" placeholder="Enter Batch Number" onChange={(e) => {
                                setFormData((prevData) => ({
                                    ...prevData,
                                    batchNumber: e.target.value,
                                }))
                            }} />
                        </div>


                    </form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={submit}>
                        Save Product
                    </Button>
                </Modal.Footer>
            </Modal>
            <h4 classNameName='text-center mt-5 product-title' style={{ marginTop: '20px' }}>{title}</h4>
            <h6 classNameName='text-center mt-1 product-subtitle' style={{ marginTop: '20px' }}>{discription}</h6>
            <div style={{ display: 'flex', flexWrap: 'wrap', padding: '15px' }}>
                {data?.map((obj, index) => (
                    <div
                        key={index}
                        style={{
                            flex: '0 0 calc(25% - 10px)',
                            maxWidth: 'calc(25% - 10px)',
                            margin: '5px',
                            textAlign: "left",
                            boxShadow: '0px 0px 1px black',
                            boxSizing: 'border-box',
                            '@media (max-width: 767px)': {
                                flex: '0 0 calc(100% - 10px)',
                                maxWidth: 'calc(100% - 10px)',
                            },
                            padding: '5px'
                        }}
                    >
                        <div style={{ position: 'relative' }}>
                            {obj.forSale && (
                                <small
                                    style={{
                                        backgroundColor: '#E05400',
                                        color: 'white',
                                        borderRadius: '20px',
                                        padding: '0px 7px',
                                        position: 'absolute',
                                        top: '0',
                                        right: '0',
                                    }}
                                >
                                    Sale!
                                </small>
                            )}
                            <div style={{ marginBottom: '10px' }}>
                                <img style={{ width: '100%', height: 'auto' }} src={image2} alt={`Product ${index}`} />
                            </div>

                            <div style={{ marginBottom: '5px' }}>
                                <span>
                                    <strong>{obj.discription}</strong>
                                </span>
                            </div>

                            {[1, 2, 3, 4, 5].map((star, starIndex) => (
                                <span key={starIndex}><Star /></span> // Add your Star component here
                            ))}

                            <div style={{ marginBottom: '5px', color: '#E26318' }}>
                                <strong>${obj.price}.00</strong>
                            </div>

                            <button
                            onClick={()=>{navigation(`/payment/${obj?._id}`)}}
                                style={{
                                    width: '100%',
                                    padding: '5px',
                                    backgroundColor: '#FFD801',
                                    color: 'black',
                                    border: 'none',
                                    fontWeight: 500,
                                }}
                                type="button"
                            >
                                Select Option
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Product;
