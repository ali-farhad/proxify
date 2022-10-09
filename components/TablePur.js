
function TablePur({data}) {
  return (
<div className="overflow-hidden overflow-x-auto rounded-lg border border-gray-200">
  <table className="min-w-full divide-y divide-gray-200 text-sm">
    <thead className="bg-gray-100">
      <tr>
        <th className="bg-gray-100 px-4 py-2 text-left">

         Quantity
        </th>
        <th
          className="whitespace-nowrap px-4 py-2 text-left  text-gray-900"
        >
         Payment Method
        </th>
        <th
          className="whitespace-nowrap px-4 py-2 text-left  text-gray-900"
        >
          Total Paid
        </th>
        <th
          className="whitespace-nowrap px-4 py-2 text-left  text-gray-900"
        >
          Proof
        </th>
        <th
          className="whitespace-nowrap px-4 py-2 text-left text-gray-900"
        >
          Status
        </th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200">
        {data.map((item) => (
          <tr key={item.id}>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              {item.quantity}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              {item.method}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              ${item.totalPaid}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
<img src={item.proof.url} className="w-16" alt="Avatar"/>
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              {/* if item.status === 'successfull' */}
              {item.status === 'successfull' ? <span className="px-3 py-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 uppercase">{item.status}</span> : <span className="px-3 py-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-amber-100 text-amber-700 uppercase">{item.status}</span>}
            </td>
            </tr>

        ))}
    



  
    </tbody>
  </table>
</div>
  )
}

export default TablePur