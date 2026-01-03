'use client';

import { useEffect, useState } from "react";
import { config } from "../../config";
import axios from "axios";
import Swal from "sweetalert2";

export default function Page() {

    const [serial, setSerial] = useState('');

    const [price, setPrice] = useState(0);

    const handleSave = async () => {
        try {
            const payload = {
                serial: serial,
                price: price
            };
            await axios.post(`${config.apiUrl}/sell/create`, payload);
            fetchData();
            Swal.fire('Success', 'Product sold successfully', 'success');
        } catch (error: any) {
            // console.error('Error selling product:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.message
            });
        }
    }

    const fetchData = async () => {
        // Fetch any necessary data here
        const response = await axios.get(`${config.apiUrl}/sell/list`);
        console.log(response.data);
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div>
            <div className="content-header">Sell Page</div>
            {/* <p>Welcome to the sell page of the backoffice.</p> */}
            <div className="flex gap-2 items-end">
                <div className="w-full">
                    <div>Serial:</div>
                    <input type="text"
                        onChange={(e) => setSerial(e.target.value)}
                        placeholder="Serial" />
                </div>

                <div className="text-right">
                    <div>Price:</div>
                    <input className="text-right" type="number"
                        onChange={(e) => setPrice(parseFloat(e.target.value))}
                        placeholder="Price" />
                </div>
                <div>
                    <button className="btn flex items-center" onClick={handleSave}>
                        <i className="fa-solid fa-save mr-2"></i>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
} 