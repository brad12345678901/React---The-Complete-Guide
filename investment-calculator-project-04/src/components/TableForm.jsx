import { formatter } from "../util/investment";

function TableHeader({ children, headers }) {
  let tableHeaders;
  if (headers) {
    tableHeaders = Object.values(headers).map((header) => (
      <th key={header.label}>{header.label}</th>
    ));
  }
  return (
    <thead>
      <tr>{tableHeaders}</tr>
    </thead>
  );
}

function TableRow({ headers, data, rowIndex }) {
  let tableRow;
  if (data) {
    tableRow = Object.keys(data).map((d, i) => {
      if (i < headers.length)
        return (
          <TableCell
            key={`${rowIndex}-${i}`}
            data={data[d]}
            header={headers[i]}
          />
        );
    });
  }
  return <tr key={`tableRow-${rowIndex}`}>{tableRow}</tr>;
}

function TableCell({ data, header }) {
  let cellItem = data;

  if (header && header.format === "currency") {
    cellItem = formatter.format(data);
  }

  return <td>{cellItem}</td>;
}

export default function Table({ children, headers, data }) {
  return (
    <table id="result">
      <TableHeader headers={headers} />
      <tbody>
        {data.map((data, index) => (
          <TableRow
            key={index}
            headers={headers}
            data={data}
            rowIndex={index}
          />
        ))}
      </tbody>
    </table>
  );
}
