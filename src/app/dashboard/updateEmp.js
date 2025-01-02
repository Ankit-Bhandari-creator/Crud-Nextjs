"use client"

import { singleApi, updateApi } from "../api/api"
import { useEffect, useState } from "react"
import styles from "./dashboard.module.css"

export function UpdateData(props) {
useEffect(()=>{
    getUser()
},[props.userId])



    console.log(props)
    const [single,setSingle]=useState()
    const [update, setUpdate] = useState({
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

    async function getUser(){
        const res=await singleApi(props.userId)
        setSingle(res.data)
    }



    const Submit = async (event) => {
        event.preventDefault();

        const res = await updateApi(update,props.userId)
        console.log(res)
        if (res.status === "success") {
            alert(res.message)
        }
        else {
            alert(res.message)
        }
    }

    const handleMove = (event)=>{
        setUpdate({...update,[event.target.name]:event.target.value})
    }

    return (
        <>
            <form onSubmit={Submit}>
                <div className={styles.add}>
                    <input className={styles.addinput} type="text" defaultValue={single?.name} name="name" placeholder="Enter Name" onChange={handleMove} />
                    <input className={styles.addinput} type="number" defaultValue={single?.age} name="age" placeholder="Enter Your Age" onChange={handleMove} />
                    <input className={styles.addinput} type="text" defaultValue={single?.email} name="email" placeholder="Enter Email" onChange={handleMove} />
                    <input className={styles.addinput} type="text" defaultValue={single?.address.house_no} name="house_no" placeholder="Enter House No" onChange={handleMove} />
                    <input className={styles.addinput} type="number" defaultValue={single?.address.pincode}  name="pincode" placeholder="Enter Pincode" onChange={handleMove} />
                    <select className={styles.addinput} defaultValue={single?.marital_status}  name="marital_status" onChange={handleMove}>
                        <option value={false}>False</option>
                        <option value={true}>True</option>
                    </select>
                    <input className={styles.addinput} type="number" defaultValue={single?.document_no[3]}  name="document_no" placeholder="Enter Document No." onChange={handleMove} />
                    <input className={styles.addinput} type="number" defaultValue={single?.salary}  name="salary" placeholder="Enter Salary" onChange={handleMove} />
                    <input className={styles.addinput} type="text" defaultValue={single?.currency} name="currency" placeholder="Enter Currency" onChange={handleMove} />
                    <input className={styles.addinput} type="number" defaultValue={single?.phone} name="phone" placeholder="Enter Phone" onChange={handleMove} />
                    <input className={styles.addinput} type="text" defaultValue={single?.city[0].city} name="city" placeholder="Enter City" onChange={handleMove} />
                    <input className={styles.inputsubmit} type="submit" value="Update"/>
                    <button className={styles.btn} onClick={() => props.hide()}>Cancel</button>
                </div>
            </form>
        </>
    )
}