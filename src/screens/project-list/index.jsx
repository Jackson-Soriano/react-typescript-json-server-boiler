import React, {useEffect, useState} from 'react';
import {SearchPanel} from "./search-panel";
import {List} from "./list";
const apiUrl = process.env.REACT_APP_API_URL
const ProjectListScreen = () => {
    const [list, setList] = useState([]);
    const [param, setParam] = useState({
        name: '',
        personId: '',
    });
    useEffect(()=>{
        fetch(`${apiUrl}/users`).then(async (response)=>{
            if(response.ok){
                setList(await response.json());
            }
        })
    },[param]);
  return (
    <div>
        <SearchPanel param={param} setParam={setParam} />
        <List list={list} />
    </div>
  );
}

export default ProjectListScreen;