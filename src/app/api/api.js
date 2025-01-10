
// SignUp Api

import { getStorage, getToken } from "../storage/page";

export const signupApi = async (signupData) => {
    const res = await fetch(`http://localhost:9090/api/v1/auth/signup`,
        {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(signupData)
        })

    const resData = await res.json()
    // console.log(resData)
    return resData;
}

// Login Api

export const loginApi = async (loginData) => {
    const res = await fetch(`http://localhost:9090/api/v1/auth/login`,
        {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(loginData)
        })

    const resData = await res.json()
    return resData;
}

// All Employee

export const allEmployee = async (allEmployee) => {

    const res = await fetch(`http://localhost:9090/api/v1/employee`,
        {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${getStorage().access_token}`
            },
            body: JSON.stringify(allEmployee)
        }
    )

    const data = await res.json();
    return data
}

// Add Api

export const addApi = async (addData) => {
    const res = await fetch(`http://localhost:9090/api/v1/employee`,
        {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${getToken()}`
            },
            body: JSON.stringify(addData)
        })

    return await res.json();
}

// Delete Api

export const deleteApi = async (deleteData) => {
    const res = await fetch(`http://localhost:9090/api/v1/employee/${deleteData}`,
        {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${getToken()}`
            },
        }
    )

    return await res.json();
}

// Single Employee Api

export const singleApi = async (id) => {
    console.log("id", id)
    const res = await fetch(`http://localhost:9090/api/v1/employee/${id}`,
        {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${getToken()}`
            },
        }
    )
    return await res.json();
}

// Update Api

export const updateApi = async (updateData, id) => {
    const res = await fetch(`http://localhost:9090/api/v1/employee/${id}`,
        {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
                "Autho  rization": `Bearer ${getToken()}`
            },
            body: JSON.stringify(updateData)
        }
    )

    return await res.json();
}

// Search Api

export const searchApi = async (name) => {
    console.log(name)
    const res = await fetch(`http://localhost:9090/api/v1/employee/search?name=${name}`,
        {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        }
    )
    return await res.json()
}