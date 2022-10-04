
function TablePre({data}) {
  return (
<div className="overflow-hidden overflow-x-auto rounded-lg border border-gray-200">
  <table className="min-w-full divide-y divide-gray-200 text-sm">
    <thead className="bg-gray-100">
      <tr>
        <th className="bg-gray-100 px-4 py-2 text-left">

         IP Address
        </th>
        <th
          className="whitespace-nowrap px-4 py-2 text-left  text-gray-900"
        >
          Port
        </th>
        <th
          className="whitespace-nowrap px-4 py-2 text-left  text-gray-900"
        >
          Country
        </th>
        <th
          className="whitespace-nowrap px-4 py-2 text-left  text-gray-900"
        >
          Type
        </th>
        <th
          className="whitespace-nowrap px-4 py-2 text-left text-gray-900"
        >
          Anonymity
        </th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200">
        {data.map((item) => (
          <tr key={item.id}>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              {item.IP}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              {item.port}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              {item.country}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              {item.type}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              {item.anonymity}
            </td>
            </tr>

        ))}
    



  
    </tbody>
  </table>
</div>
  )
}

export default TablePre