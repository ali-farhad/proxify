
import Table from '../../../components/Table';
import DashNav from "../../../components/DashNav";
import { API_URL } from './../../../config/index';
import { parseCookie } from './../../../helpers/index';



function Dashboard({data}) {
  return (
    <div>
        <DashNav >
            <Table data={data}/>
        </DashNav>
    </div>
  )
}

export default Dashboard


export async function getServerSideProps({req}) {
  const {token} = parseCookie(req)
  const res = await fetch(`${API_URL}/api/freebies`)
  const freebies = await res.json()

  if (!token || token === 'undefined') {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: { data: freebies },
  }
}
