"use client"

import { useEffect, useState } from "react"
import styles from "./dashboard.module.css"
import { allEmployee, deleteApi, searchApi } from "../api/api"
import { AddEmployee } from "./addEmp"
import { RiDeleteBin6Fill } from "react-icons/ri";
import { RxUpdate } from "react-icons/rx";
import { UpdateData } from "./updateEmp"


export default function () {

    const [employee, setEmployee] = useState([])
    const [addEmp, setAddEmp] = useState(false)
    const [refreshUpdate, setRefreshUpdate] = useState(0)
    const [update, setUpdate] = useState(false)
    const [search, setSearch] = useState(false)
    const [id, setId] = useState(0)

    function hide() {
        setAddEmp(false)
        setUpdate(false)
    }

    function refreshUpdateFun() {
        setRefreshUpdate(refreshUpdate + 1)
    }

    async function apiCall() {
        const res = await allEmployee()
        console.log(res)
        setEmployee(res.data)
    }

    async function deleteEmp(id) {
        const res = await deleteApi(id)
        console.log(res)
        apiCall()
    }

    async function searchEmp(name) {
        const res = await searchApi(name.target.value)
        console.log(res)
        setSearch(res)
        if (name.target.value === "" || name.target.value == null || name.target.value === "undefined" || name.target.value.length == 0) {
            setSearch(false)
        }

        if (search === "" || search == null || search === "undefined" || search.length == 0) {
            setSearch(false)
        }
    }

    useEffect(() => {
        apiCall()
    }, [refreshUpdate])

    return (
        <>
            <div className={styles.container}>
                <div className={styles.midcontainer}>
                    <div className={styles.addemp}>
                        <input type="text" placeholder="Search Employee" name="name" onChange={searchEmp} />
                        {search ? <div>ankit</div> : false}
                        <button onClick={() => setAddEmp(true)}>Add Employee ++</button>
                    </div>

                    {addEmp ? <AddEmployee hide={hide} refreshUpdate={refreshUpdateFun} /> : null}
                    <table border={1}>
                        <thead>
                            <tr>
                                <th>S.no</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Marital</th>
                                <th>Document No.</th>
                                <th>Salary</th>
                                <th>Currency</th>
                                <th>Phone</th>
                                <th>City</th>
                                <th>Delete</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employee?.map((e, pos) =>
                                <tr key={pos}>
                                    <td>{pos + 1}</td>
                                    <td>{e.name}</td>
                                    <td>{e.age}</td>
                                    <td>{e.email}</td>
                                    <td>{e.address.house_no},{e.address.pincode}</td>
                                    <td>{e.marital_status}</td>
                                    <td>{e.document_no}</td>
                                    <td>{e.salary}</td>
                                    <td>{e.currency}</td>
                                    <td>{e.phone}</td>
                                    <td>{e.city[0].city}</td>
                                    <td className={styles.buttondel}><RiDeleteBin6Fill onClick={() => deleteEmp(e._id)} /></td>
                                    <td className={styles.buttonup}><RxUpdate onClick={() => {
                                        setUpdate(true), setId(e._id)
                                    }} /></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    {update ? <UpdateData hide={hide} userId={id} /> : false}
                </div>
            </div>
        </>
    )
}