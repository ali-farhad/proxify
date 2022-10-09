import TablePre from '../../../components/TablePre';
import DashNav from "../../../components/DashNav";
import { parseCookie } from '../../../helpers';
import { API_URL } from './../../../config/index';




function Dashboard({prox}) {
  
  return (
    <div>
        <DashNav >
          {/* check if prox length is bigger then 1 */}
          {prox.length > 0 ? <TablePre data={prox}/> : <h1>No Premium Proxies Found</h1>}
        </DashNav>
    </div>
  )
}

export default Dashboard

export async function getServerSideProps({req}) {
  const {token} = parseCookie(req)
  const res = await fetch(`${API_URL}/api/proxy/me`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  const proxies = await res.json()

  return {
    props: { prox: proxies },
  }
}
