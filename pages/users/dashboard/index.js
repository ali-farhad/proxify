
import Table from '../../../components/Table';
import DashNav from "../../../components/DashNav";
import { API_URL } from './../../../config/index';



function Dashboard({data}) {
  console.log(data)
  return (
    <div>
        <DashNav >
            <Table data={data}/>
        </DashNav>
    </div>
  )
}

export default Dashboard


export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/freebies`)
  const freebies = await res.json()

  return {
    props: { data: freebies },
  }
}
