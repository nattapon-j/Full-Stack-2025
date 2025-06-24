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
                remarks: remarks
            };
            const response = await axios.post(`${config.apiUrl}/buy/add`, payload); 
            // /create

            // if (response.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Item Added Successfully',
                    text: 'The item has been added to the buy list.',
                });
            //     handleCloseModal();
            // } else {
            //     Swal.fire({
            //         icon: 'error',
            //         title: 'Error',
            //         text: 'Failed to add the item. Please try again.',
            //     });
            // }
        } catch (error) {
            console.error("Error saving item:", error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'An error occurred while saving the item. Please try again.',
            });
        }
    };

    return (
        <>
            <h1 className="content-header">Buy Page</h1>
            <p>This is the Buy page. You can implement your buy functionality here.</p>

            <div>
                <button className="btn" onClick={handleOpenModal}>
                    <i className="fa-solid fa-plus mr-2"></i>
                    Add New Item
                </button>
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