"use client"

import Link from 'next/link'
import styles from '../form.module.css'
import { useState } from 'react'
import { signupApi } from '@/app/api/api'
import { setStorage } from '@/app/storage/page'
import { useRouter } from 'next/navigation'

export default function Signup () {

    const [signupData, setSignupData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        marital_status: ""
    })

    const router = useRouter()

    const submit = async (event) => {
        event.preventDefault()

        const res = await signupApi(signupData)
        console.log(res)

        if (res.status === "success") {
            setStorage(res)

            setTimeout(() => {
                router.push("/login")
            }, 2000)
        }

        else {
            alert(res.message);
        }
    }

    const handleMove = (event) => {
        setSignupData({ ...signupData, [event.target.name]: event.target.value })
    }

    return (
        <>
            <form onSubmit={submit}>
                <div className={styles.container}>
                    <div className={styles.midcontainer}>
                        <div className={styles.signup}>
                            <h1>SIGN UP</h1>
                            <p>Name :</p>
                            <input className={styles.name} type="text" placeholder="Enter Your Name" name='name' onChange={handleMove} />
                            <p>Email :</p>
                            <input className={styles.name} type="tex" placeholder="Enter Your Email" name='email' onChange={handleMove} />
                            <p>Password :</p>
                            <input className={styles.name} type="Password" placeholder="Enter Your Password" name='password' onChange={handleMove} />
                            <p>Phone :</p>
                            <input className={styles.name} type="number" placeholder="Enter Your Phone Number" name='phone' onChange={handleMove} />
                            <p>Marital Status :</p>
                            <select className={styles.name} name="marital_status" onChange={handleMove}>
                                <option value={false}>False</option>
                                <option value={true}>True</option>
                            </select>
                            <br />
                            <button type='submit'>SIGN UP</button>
                            <p>Already have an account ?<Link href='/login' className={styles.crt}>Login instead</Link></p>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}