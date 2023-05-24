import React, { useEffect, useState } from 'react';

const searchPanel = ({param, setParam}) => {
    const [users, setUsers] = useState([]);
    return (
        <form action={''}>
            <div>
                <input 
                    type='text'
                    value={param.name}
                    onChange={(evt)=>
                        setParam({
                            ...param,
                            name: evt.target.value
                        })
                    }
                />
                <select
                    value={param.personId}
                    onChange={(evt)=>
                        setParam({
                            ...param,
                            personId: evt.target.value
                        })
                    }
                >
                    <option value={''}>Assignee</option>
                    {users.map((user)=>(
                        <option key={user.id} value={user.id}>
                            {user.name}
                        </option>
                    ))}
                </select>
            </div>
        </form>
    );
}

export default searchPanel;