'use client';
import { useDispatch, useSelector } from "react-redux"
import { fetchApiUsers } from "../redux/slice";
import { useEffect } from "react";

export default function Page() {
    const dispatch = useDispatch();
    const apiUserData = useSelector((data) => data.usersData.userAPIData);

    useEffect(() => {
        dispatch(fetchApiUsers())
    },[])

    return (
        <div className="add-user">
            <h1>User List From API</h1>
            {/* <button onClick={() => dispatch(fetchApiUsers())}>Load Users</button> */}
            {
               apiUserData.length && apiUserData.map((item) => {
                    return <div key={item.id}>
                    <h4>
                        {item.name}
                    </h4>
                    </div>
                })
            }
        </div>
    )
}