"use client"

import { loginApi } from '@/app/api/api'
import Link from 'next/link'
import styles from '../form.module.css'
import { setStorage } from '@/app/storage/page'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function () {

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })

    const router = useRouter()

    const submit = async (event) => {
        event.preventDefault();
        console.log("check")
        const res = await loginApi(loginData)
        console.log(res);

        if (res.status === "success") {
            setStorage(res);

            setTimeout(() => {
                router.push("/dashboard")
            }, 2000)
        }

        else {
            alert(res.message)
        }
    }

    const handleMove = (event) => {
        setLoginData({ ...loginData, [event.target.name]: event.target.value })
    }

    return (
        <>
            <form onSubmit={submit}>
                <div className={styles.container}>
                    <div className={styles.midcontainer}>
                        <div className={styles.login}>
                            <h1>LOGIN</h1>
                            <p>Email ID :</p>
                            <input className={styles.name} type="Text" placeholder="Enter Your Email" name='email' onChange={handleMove} />
                            <p>Password :</p>
                            <input className={styles.name} type="Password" placeholder="Enter Your Password" name='password' onChange={handleMove} />
                            <br />
                            <input type='checkbox' /><label>Remember Me</label>
                            <Link className={styles.fgt} href='/login'>Forgot Password?</Link>
                            <br />
                            <button type='submit'>LOGIN</button>
                            <p>New on our platform ? <Link href='/' className={styles.crt}>Create New Account</Link></p>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}