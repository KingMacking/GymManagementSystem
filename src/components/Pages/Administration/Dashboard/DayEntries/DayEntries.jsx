import { Ring } from "@uiball/loaders"
import { signOut } from "firebase/auth"
import { collection, doc, getDoc, getFirestore } from "firebase/firestore"
import { DateTime } from "luxon"
import { useEffect, useState } from "react"
import { useUserContext } from "../../../../../context/UserContext"
import Login from "../../Login/Login"
import HomeBtn from "../HomeBtn/HomeBtn"

import './DayEntries.scss'

const DayEntries = () => {
    const db = getFirestore()
    const entries = collection(db, 'entries')
    const queryEntries = doc(entries, DateTime.now().toISODate())
    const [entriesData, setEntriesData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const {user} = useUserContext()

    useEffect (() => {
        getEntriesData()
    }, [])

    const getEntriesData = async () =>{
        await getDoc(queryEntries)
        .then(resp =>{setEntriesData(resp.data())})
        .finally(setTimeout(()=>{
            setIsLoading(false)
        },2000))
    }

    if(user) {
        if (user.role === "admin") {
            return (
                <>
                    <HomeBtn />
                    <div className="dayentries">
                        {isLoading ? <Ring size={40} lineWeight={5} speed={2} color={"white"} />
                            :
                            <div className="dayentries-container">
                                <h2 className="dayentries-title">Entradas del dia {DateTime.now().toLocaleString()}</h2>
                                <div className="dayentries-entries">
                                    {entriesData.entries.clients.map((client, index)=>(<p className="dayentries-entry" key={index}>{client.name} ingreso a las {client.time}</p>))}
                                </div>
                            </div>
                        }
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <h2>No tienes permiso para ingresar a esta sección</h2>
                    <button onClick={()=>signOut(auth)}>Cerrar sesión</button>
                </>
            )
        }
    } else {
        return <Login/>
    }
}

export default DayEntries