import React, { useEffect, useState } from "react";
import SearchPanel from "./search-panel";
import List from "./list";
import { cleanObject, useDebounce, useMount } from "../../utils";
// import * as qs from "qs";
import { useHttp } from "../../utils/http";
// const apiUrl = process.env.REACT_APP_API_URL;
const ProjectListScreen = () => {
  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const debouncedParam = useDebounce(param, 500);
  const http = useHttp();
  useEffect(() => {
    // fetch(`${apiUrl}/projects?name=${param.name}&personId=${param.personId}`).then(async (response)=>{
    // fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async (response)=>{
    // fetch(
    //   `${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`
    // ).then(async (response) => {
    //   if (response.ok) {
    //     setList(await response.json());
    //   }
    // });
    // http("projects", {data: cleanObject(debouncedParam)}).then((list)=> setList(list));
    http("projects", { data: cleanObject(debouncedParam) }).then(setList);
    // },[param]);
    // }, [debouncedParam]);
  }, [debouncedParam, http]);
  useMount(() => {
    // fetch(`${apiUrl}/users`).then(async (response) => {
    //   if (response.ok) {
    //     setUsers(await response.json());
    //   }
    // });
    http("users").then(setUsers);
  });
  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  );
};

export default ProjectListScreen;
