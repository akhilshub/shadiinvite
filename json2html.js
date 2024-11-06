export default function json2html(data) {
  // Extract all unique column headers from the data array
  const headers = Array.from(
    new Set(data.flatMap(Object.keys))
  );

  // Create the HTML for the table headers
  let table = `<table data-user="akhilme341@gmail.com">
    <thead>
      <tr>${headers.map(header => `<th>${header}</th>`).join('')}</tr>
    </thead>
    <tbody>`;

  // Create the HTML for the table rows
  data.forEach(row => {
    table += '<tr>';
    headers.forEach(header => {
      table += `<td>${row[header] !== undefined ? row[header] : ''}</td>`;
    });
    table += '</tr>';
  });

  table += `</tbody>
  </table>`;

  return table;
}
