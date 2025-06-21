'use client';

import { useState } from "react";

export default function Page() {

    const [companyName, setCompanyName] = useState("My Company");
    const [companyAddress, setCompanyAddress] = useState("123 Main St, City, Country");
    const [companyPhone, setCompanyPhone] = useState("+1234567890");
    const [companyEmail, setCompanyEmail] = useState("info@mycompany.com");
    const [companyWebsite, setCompanyWebsite] = useState("www.mycompany.com");
    const [companyLogo, setCompanyLogo] = useState("/logo.png");
    const [companyTaxId, setCompanyTaxId] = useState("123456789");

    const handleSave = () => {
        // Here you would typically send the data to your backend API
        console.log("Company Information Saved:", {
            companyName,
            companyAddress,
            companyPhone,
            companyEmail,
            companyWebsite,
            companyLogo,
            companyTaxId
        });
        alert("Company information saved successfully!");
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