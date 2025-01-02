"use client"

import { useState, memo } from "react"
import  styles  from "./dashboard.module.css"
import { addApi } from "../api/api"

export function AddEmployee(props) {

    const [add, setAdd] = useState({
        name: "",
        age: "",
        email: "",
        address: { pincode: "", house_no: "" },
        marital_status: "",
        document_no: [],
        salary: "",
        currency: "",
        phone: "",
        city: [{ city: "" }]
    })

    const Submit = async (event) => {
        console.log(add)
        event.preventDefault()

        const res = await addApi(add)
        console.log(res)
        if (res.status === "success") {
            alert(res.message)
            // console.log(res)
            props.refreshUpdate()
        }

        else {
            alert(res.message)
        }
    }

    const handleMove = (event) => {
        setAdd({ ...add, [event.target.name]: event.target.value })
    }


    return (
        <>
            <form onSubmit={Submit}>
                <div className={styles.add}>
                    <input className={styles.addinput} type="text" name="name" placeholder="Enter Name" onChange={handleMove} />
                    <input className={styles.addinput} type="number" name="age" placeholder="Enter Your Age" onChange={handleMove} />
                    <input className={styles.addinput} type="text" name="email" placeholder="Enter Email" onChange={handleMove} />
                    <input className={styles.addinput} type="text" name="house_no" placeholder="Enter House No" onChange={handleMove} />
                    <input className={styles.addinput} type="number" name="pincode" placeholder="Enter Pincode" onChange={handleMove} />
                    <select className={styles.addinput} name="marital_status" onChange={handleMove}>
                        <option value={false}>False</option>
                        <option value={true}>True</option>
                    </select>
                    <input className={styles.addinput} type="number" name="document_no" placeholder="Enter Document No." onChange={handleMove} />
                    <input className={styles.addinput} type="number" name="salary" placeholder="Enter Salary" onChange={handleMove} />
                    <input className={styles.addinput} type="text" name="currency" placeholder="Enter Currency" onChange={handleMove} />
                    <input className={styles.addinput} type="number" name="phone" placeholder="Enter Phone" onChange={handleMove} />
                    <input className={styles.addinput} type="text" name="city" placeholder="Enter City" onChange={handleMove} />
                    <input className={styles.inputsubmit} type="submit" value="Add Employee" />
                    <button className={styles.btn} onClick={() => props.hide()}>Cancel</button>
                </div>
            </form>
        </>
    )
}

export default memo(AddEmployee);