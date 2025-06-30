'use client'

import { useState, useEffect } from "react";
import Swal from "sweetalert2";

import axios from "axios";
import { config } from "@/app/config";

import Modal from "@/app/backoffice/modal";

export default function Page() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const [serialNumber, setSerialNumber] = useState("");
    const [itemName, setItemName] = useState("");
    const [itemPrice, setItemPrice] = useState(0);
    const [itemModel, setItemModel] = useState("");
    const [itemColor, setItemColor] = useState("");
    const [customerName, setCustomerName] = useState("");
    const [customerPhone, setCustomerPhone] = useState("");
    const [customerAddress, setCustomerAddress] = useState("");
    const [remarks, setRemarks] = useState("");

    const [products, setProducts] = useState([]);
    const [itemId, setItemId] = useState(0);

    const [qty, setQty] = useState(1); // Initialize qty with a default value

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${config.apiUrl}/buy/list`);
            setProducts(response.data);
        } catch (err: any) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: err.message
            });
        }
    }

    const handleSaveItem = async () => {
        try {
            const payload = {
                serialNumber: serialNumber,
                itemName: itemName,
                itemPrice: itemPrice,
                itemModel: itemModel,
                itemColor: itemColor,
                customerName: customerName,
                customerPhone: customerPhone,
                customerAddress: customerAddress,
                remarks: remarks,
                qty: qty, // Include qty in the payload if needed
            };

            if (itemId === 0) {
                const response = await axios.post(`${config.apiUrl}/buy/add`, payload);
                // /create
            } else {
                // payload.id = itemId; // Include the itemId in the payload for update
                const response = await axios.put(`${config.apiUrl}/buy/update/${itemId}`, payload);
                // /update
                setItemId(0); // Reset itemId after update
            }

            // if (response.status === 200) {
            Swal.fire({
                icon: 'success',
                title: 'Item Added Successfully',
                text: 'The item has been added to the buy list.',
                timer: 2000
            });
            handleCloseModal();
            fetchData();
            // } else {
            //     Swal.fire({
            //         icon: 'error',
            //         title: 'Error',
            //         text: 'Failed to add the item. Please try again.',
            //     });
            // }
        // } catch (error) {
        } catch (error: any) {
            console.error("Error saving item:", error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                // text: 'An error occurred while saving the item. Please try again.',
                text: error.message || 'An error occurred while saving the item. Please try again.',
            });
        }
    };

    const handleEditItem = (id: number) => {
        const item = products.find((product: any) => product.id === id) as any;
        if (item) {
            setSerialNumber(item.serialNumber ?? '');
            setItemName(item.itemName);
            setItemPrice(item.itemPrice);
            setItemModel(item.itemModel);
            setItemColor(item.itemColor);
            setCustomerName(item.customerName);
            setCustomerPhone(item.customerPhone);
            setCustomerAddress(item.customerAddress ?? '');
            setRemarks(item.remarks ?? '');
            setItemId(item.id);
            // setIsModalOpen(true);
            handleOpenModal();
        }
        // const response = await axios.get(`${config.apiUrl}/buy/edit/${id}`);
        // const item = response.data;
        // setSerialNumber(item.serialNumber);
        // setItemName(item.itemName);
        // setItemPrice(item.itemPrice);
        // setItemModel(item.itemModel);
        // setItemColor(item.itemColor);
        // setCustomerName(item.customerName);
        // setCustomerPhone(item.customerPhone);
        // setCustomerAddress(item.customerAddress);
        // setRemarks(item.remarks);

    };

    const handleDeleteItem = async (id: string) => {
        try {
            const button = await Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!',
                // showConfirmButton: true,
            });
            if (button.isConfirmed) {
                await axios.delete(`${config.apiUrl}/buy/delete/${id}`);
                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: 'Your item has been deleted.',
                });
                fetchData();
            }
        } catch (error) {
            console.error("Error deleting item:", error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'An error occurred while deleting the item. Please try again.',
            });
        }
    };

    const handleReset = () => {
        setSerialNumber("");
        setItemName("");
        setItemPrice(0);
        setItemModel("");
        setItemColor("");
        setCustomerName("");
        setCustomerPhone("");
        setCustomerAddress("");
        setRemarks("");
        setQty(1); // Reset qty to default value
        // setItemId(0);
        // handleCloseModal();
    };

    return (
        <>
            <h1 className="content-header">Buy Page</h1>
            <p>This is the Buy page. You can implement your buy functionality here.</p>

            <div>
                <button className="btn" onClick={() => {
                    handleReset();
                    handleOpenModal();
                }}>
                    <i className="fa-solid fa-plus mr-2"></i>
                    Add New Item
                </button>

                <table className="table mt-4">
                    <thead>
                        <tr>
                            <th>Serial Number</th>
                            <th>Item Name</th>
                            <th>Item Price</th>
                            <th>Item Model</th>
                            <th>Item Color</th>
                            <th>Customer Name</th>
                            <th>Customer Phone</th>
                            <th>Remarks</th>
                            <th className="w-[110px]">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product: any) => (
                            <tr key={product.id}>
                                <td>{product.serialNumber}</td>
                                <td>{product.itemName}</td>
                                <td>{product.itemPrice}</td>
                                <td>{product.itemModel}</td>
                                <td>{product.itemColor}</td>
                                <td>{product.customerName}</td>
                                <td>{product.customerPhone}</td>
                                <td>{product.remarks}</td>
                                <td className="text-center">
                                    <button className="btn-edit mr-1" onClick={() => handleEditItem(product.id)}>
                                        <i className="fa-solid fa-edit"></i>
                                    </button>
                                    <button className="btn-delete" onClick={() => handleDeleteItem(product.id)}>
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Modal title="Add New Item" isOpen={isModalOpen} onClose={handleCloseModal}>
                <div className="p-4">
                    <p>Here you can add a new item.</p>
                    {/* Add your form or content for adding a new item here */}
                    <div>Serial Number:
                        <input type="text" value={serialNumber} onChange={(e) => setSerialNumber(e.target.value)} />
                    </div>

                    <div className="mt-2">Item Name:
                        <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} />
                    </div>

                    <div className="mt-2">Item Price:
                        <input type="number" value={itemPrice} onChange={(e) => setItemPrice(Number(e.target.value))} />
                    </div>

                    <div className="mt-2">Item Model:
                        <input type="text" value={itemModel} onChange={(e) => setItemModel(e.target.value)} />
                    </div>
                    <div className="mt-2">Item Color:
                        <input type="text" value={itemColor} onChange={(e) => setItemColor(e.target.value)} />
                    </div>
                    <div className="mt-2">Customer Name:
                        <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
                    </div>
                    <div className="mt-2">Customer Phone:
                        <input type="text" value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} />
                    </div>
                    <div className="mt-2">Customer Address:
                        <input type="text" value={customerAddress} onChange={(e) => setCustomerAddress(e.target.value)} />
                    </div>
                    <div className="mt-2">Remarks:
                        <input type="text" value={remarks} onChange={(e) => setRemarks(e.target.value)} />
                    </div>

                    <div className="mt-2">Qty:
                        <input type="text" value={qty} onChange={(e) => setQty(Number(e.target.value ?? 0))} />
                    </div>

                    <div className="mt-2">
                        <button className="btn" onClick={handleSaveItem}>
                            <i className="fa-solid fa-save mr-2"></i>
                            Save Item
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    );
}