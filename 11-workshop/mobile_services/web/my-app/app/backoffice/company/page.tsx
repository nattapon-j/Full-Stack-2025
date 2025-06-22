'use client';

import { useState, useEffect, use } from "react";
import Swal from "sweetalert2";

import axios from "axios";
import { config } from "@/app/config";

export default function Page() {

    // const [companyName, setCompanyName] = useState("My Company");
    // const [companyAddress, setCompanyAddress] = useState("123 Main St, City, Country");
    // const [companyPhone, setCompanyPhone] = useState("+1234567890");
    // const [companyEmail, setCompanyEmail] = useState("info@mycompany.com");
    // // const [companyWebsite, setCompanyWebsite] = useState("www.mycompany.com");
    // // const [companyLogo, setCompanyLogo] = useState("/logo.png");
    // const [companyTaxId, setCompanyTaxId] = useState("123456789");

    const [companyName, setCompanyName] = useState("");
    const [companyAddress, setCompanyAddress] = useState("");
    const [companyPhone, setCompanyPhone] = useState("");
    const [companyEmail, setCompanyEmail] = useState("");
    // const [companyWebsite, setCompanyWebsite] = useState("www.mycompany.com");
    // const [companyLogo, setCompanyLogo] = useState("/logo.png");
    const [companyTaxId, setCompanyTaxId] = useState("");

    useEffect(() => {
        // Fetch existing company information from the backend when the component mounts
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${config.apiUrl}/company/list`);
            const data = response.data;
            setCompanyName(data.name || "");
            setCompanyAddress(data.address || "");
            setCompanyPhone(data.phone || "");
            setCompanyEmail(data.email || "");
            // setCompanyWebsite(data.website || "");
            // setCompanyLogo(data.logo || "");
            setCompanyTaxId(data.taxId || "");
        } catch (error) {
            console.error("Error fetching company data:", error);
        }
    };

    // Function to handle saving company information
    const handleSave = async () => {
        // Here you would typically send the data to your backend API
        console.log("Company Information Saved:", {
            companyName,
            companyAddress,
            companyPhone,
            companyEmail,
            // companyWebsite,
            // companyLogo,
            companyTaxId
        });
        // alert("Company information saved successfully!");
        try {
            const payload = {
                name: companyName,
                address: companyAddress,
                phone: companyPhone,
                email: companyEmail,
                taxId: companyTaxId
            };
            const response = await axios.post(`${config.apiUrl}/company/create`, payload);
            // if (response.status === 200) {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Company information saved successfully!',
                timer: 2000,
            });
            // }

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to save company information. Please try again later.',
            });
            // console.error("Error saving company information:", error);
        }
    };


    return (
        <div>
            <h1 className="content-header">Company Information</h1>
            <p>This is the company page.</p>
            <div>
                <div>Company Name</div>
                <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="border p-2 rounded w-full"
                />

                <div className="mt-4">Company Address</div>
                <input
                    type="text"
                    value={companyAddress}
                    onChange={(e) => setCompanyAddress(e.target.value)}
                    className="border p-2 rounded w-full"
                />
                <div className="mt-4">Company Phone</div>
                <input
                    type="text"
                    value={companyPhone}
                    onChange={(e) => setCompanyPhone(e.target.value)}
                    className="border p-2 rounded w-full"
                />
                <div className="mt-4">Company Email</div>
                <input
                    type="email"
                    value={companyEmail}
                    onChange={(e) => setCompanyEmail(e.target.value)}
                    className="border p-2 rounded w-full"
                />
                <div className="mt-4">Company Tax ID</div>
                <input
                    type="text"
                    value={companyTaxId}
                    onChange={(e) => setCompanyTaxId(e.target.value)}
                    className="border p-2 rounded w-full"
                />

                <button
                    className="mt-4 btn"
                    onClick={handleSave}>
                    <i className="fa fa-save mr-2"></i>
                    Save Company Information
                </button>

            </div>
        </div>
    );
}