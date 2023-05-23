import React, {useEffect, useState} from 'react';

const searchPanel = () => {
    const [users, setUsers]= useState([]);
    const [param, setParam]= useState({
        name: '',
        personId: '',
    });
    const [list, setList] = useState([]);
  return (
    <form action={''}></form>
  );
}

export default searchPanel;