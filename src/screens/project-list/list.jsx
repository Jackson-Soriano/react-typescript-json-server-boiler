import React from 'react';

const List = ({list}) => {
  return (
    <div align={"center"}>
      <table style={{border: "1.5px solid rgb(200, 200, 200)"}}>
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Assignee</th>
          </tr>
        </thead>
        <tbody>
        {
          list.map(project => <tr key={project.id}>
            <td style={{border: "1px solid rgb(190, 190, 190)", backgroundColor: "rgb(238, 238, 238)"}}>
              {project.name}
            </td>
            <td style={{border: "1px solid rgb(190, 190, 190)", backgroundColor: "rgb(215, 217, 215)"}}>
              {project.personName}
            </td>
          </tr>)
        }
        </tbody>
      </table>
    </div>
  );
}

export default List;