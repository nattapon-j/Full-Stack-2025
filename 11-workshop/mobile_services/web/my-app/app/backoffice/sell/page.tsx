'use client';

import { useEffect, useState } from "react";
import { config } from "../../config";
import axios from "axios";
import Swal from "sweetalert2";

export default function Page() {
    return (
        <div>
            <div className="content-header">Sell Page</div>
            {/* <p>Welcome to the sell page of the backoffice.</p> */}
            <div className="flex gap-2">
                <input className="form-control" type="text"
                    placeholder="Serial" />
                <button className="btn flex items-center">
                    <i className="fa-solid fa-save mr-2"></i>
                    Save
                </button>
            </div>
        </div>
    );
} 