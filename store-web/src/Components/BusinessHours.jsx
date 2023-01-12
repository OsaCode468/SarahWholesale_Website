import { Table} from '@mantine/core';

export default function BusinessHours() {
  const busi = [{
    day: "Monday",
    hours: "9:00 - 5:00 pm"
  }, 
  {
    day: "Tuesday",
    hours: "9:00 - 5:00 pm"
  }, 
  {
    day: "Wednesday",
    hours: "9:00 - 5:00 pm"
  },
  {
    day: "Thursday",
    hours: "9:00 - 5:00 pm"
  },{
    day: "Friday",
    hours: "9:00 - 5:00 pm"
  },
  {
    day: "Saturday",
    hours: "9:00 - 5:00 pm"
  },
  {
    day: "Sunday",
    hours: "Closed"
  }]
  const rows = busi.map((hour) => (
    <tr key={hour.day}>
      <td>{hour.day}</td>
      <td>{hour.hours}</td>
    </tr>
  ));

  return (
    <div style={{margin: '10% 0'}}>
    <Table highlightOnHover withBorder Space = "md">
      <thead>
        <tr>
          <th>Business Day</th>
          <th>Business Hours</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
    </div>
  );
}