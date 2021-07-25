import { useEffect, useState } from "react"


export const SearchPanel = () => {
    const [ param, setParam ] = useState({
        name:'',
        personId:''
    })
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('').then(async response => {
            if(response.ok){
                
            }
        })
    }, [param])

    return <form action="">
        <input type="text" value={param.name} onChange = {env => setParam({
            ...param,
            name:env.target.value
        })}/>
        <select name="" id="" value={param.personId} onChange={env => setParam({
            ...param,
            personId:env.target.value
        })}>
            <option value={''}>负责人</option>
        </select>
    </form>
} 