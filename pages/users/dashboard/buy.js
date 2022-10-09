import DashNav from "../../../components/DashNav";
import TablePur from "../../../components/TablePur";
import { API_URL } from "../../../config";
import { parseCookie } from '../../../helpers';
import { useState, useEffect, useContext } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AuthContext from "../../../context/AuthContext";

import ClipLoader from "react-spinners/ClipLoader";





function Dashboard({purs, rate}) {
  const [uploading, SetUploading] = useState(false)
  const [cost, setCost] = useState(rate)
  const {user} = useContext(AuthContext)
  console.log(user)


  const [values, setValues] = useState({
    method: 'BTC',
    quantity: '',

  })

  const [proofFile, setProofFile] = useState('')


  const handleFileChange = event => {
    const fileObj = event.target.files[0];

    console.log('fileObj is', fileObj);
    setProofFile(fileObj)


    // // 👇️ reset file input
    // event.target.value = null;

    // // 👇️ is now empty
    // console.log(event.target.files);

    // // 👇️ can still access file object here
    // console.log(fileObj);
    // console.log(fileObj.name);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })

  }

  const handleSubmit = async (e) => {
    SetUploading(true)
    e.preventDefault()
    if(values.quantity == 0 || values.quantity == '') {
      toast.error("Please buy at least 1 proxy")
      return
    }
    const data = {}
    const formData = new FormData()
    
    data["method"]  = values.method
    data["quantity"]  = values.quantity
    data["totalPaid"]  = values.quantity * rate
    data["status"]  = "pending"
    data["user"]  = user.id
    // data["files.proof"]  = proofFile

    formData.append("data", JSON.stringify(data)) 
    formData.append("files.proof", proofFile)
    console.log(data)
    const res = await fetch(`${API_URL}/api/purchases`, {
      method: 'POST',    
      body: formData
    })

    if(res.ok) {
      SetUploading(false)
      toast.success("Purchase request sent. Your purchase will be processed within 24 hours")
    }
    else {
      toast.error("Something went wrong")
    }

    console.log(proofFile)
  }

  
  return (
    <div>
        <DashNav >
            <div>
            <ToastContainer />

              <p className="mb-6 text-lg tracking-widest text-left uppercase"> Transaction History</p>
              {/* if purs lenght is not zero */}
              {purs.length > 0 ? <TablePur data={purs}/> : <h1>No Purchases Found</h1>}
            </div>
            
           <div>
           <p className="mb-6 text-lg tracking-widest text-left uppercase">Buy More</p>

    <div className="flex items-center justify-center px-10">
    <div className="sm:max-w-lg w-full py-5 px-10 border-2 border-gray-200 rounded-xl">
		<div className="text-center">
			<h2 className="mt-1 text-3xl font-bold text-gray-900">
				Buy Premium Proxies
			</h2>
			<p className="mt-2 text-sm text-gray-400">Place your Order. Send Amount to our BTC wallet written below. Upload proof of payment, and get access to premium proxies instantly</p>
      <p className="mt-10 text-sm  text-gray-800 text-left">BTC Wallet Address: <strong>33jRnRj9jKn8ZW6VWEaT2A8rLiAJt5S1Kk</strong></p>

      <p className="mt-8 text-sm text-gray-400">BTC Wallet barcode</p>
      <div className="flex item-center justify-center"> 
      <img className="mt-2" src="/images/wallet.png" />
      </div>
      
		</div>
        <form className="mt-8 space-y-3" onSubmit={handleSubmit}>
          
                <div className="grid grid-cols-1 space-y-2">
                        <label className="text-sm font-bold text-gray-500 tracking-wide">Payment Method</label>
                            <input className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" name="method" type="text" placeholder="BTC" value="BTC" disabled/>
                    </div>
                    <div className="grid grid-cols-1 space-y-2">
                        <label className="text-sm font-bold text-gray-500 tracking-wide">Rate($)</label>
                            <input className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" name="rate" type="text" placeholder={`${rate}/ proxy`} disabled/>
                    </div>
                    <div className="grid grid-cols-1 space-y-2">
                        <label className="text-sm font-bold text-gray-500 tracking-wide">Quantity</label>
                            <input className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" name="quantity" value={values.quantity} onChange={handleInputChange} type="number" placeholder="1-1000"/>
                    </div>
                    <div className="grid grid-cols-1 space-y-2">
                        <label className="text-sm font-bold text-gray-500 tracking-wide" name="totalPaid" >Total Charges ($)</label>
                      
                            <input className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" type="number" value={Math.round(values.quantity * rate)} disabled/>
                    </div>
                    <div className="grid grid-cols-1 space-y-2">
                                    <label className="text-sm font-bold text-gray-500 tracking-wide">Attach Transaction Proof</label>
                        <div className="flex items-centAer justify-center w-full">
                            <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-30 p-5 group text-center">
                                <div className="h-full w-full text-center flex flex-col items-center justify-center items-center  ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-15 text-blue-400 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                    <div className="flex flex-auto max-h-10 w-2/5 mx-auto ">
                                    </div>
                                   
                                </div>
                                <input type="file" name="proof" onChange={handleFileChange} className="hidden" />
                                <span className="text-sm text-gray-400">{proofFile.name}</span>
                            </label>
                        </div>
                    </div>
                            <p className="text-sm text-gray-300">
                                <span>File type: types of images</span>
                            </p>
                    <div>
                        <button type="submit" className="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4  rounded-full tracking-wide
                                    font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300">
                        {/* if Uploading is true */}
                        {uploading ? (
                        <ClipLoader color={"#FFF"} loading={true} size={30} />
                        ) : (
                          "Upload"
                        )}
                    </button>

                 


                    </div>
        </form>
	  </div>
    </div>



            

           </div>
        </DashNav>
    </div>
  )
}

export default Dashboard

export async function getServerSideProps({req}) {
  const {token} = parseCookie(req)
  const res = await fetch(`${API_URL}/api/purchase/me`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  const purs = await res.json()

  const resPlans = await fetch(`${API_URL}/api/plan`)
  const plans = await resPlans.json()
  const rate = plans.data.attributes.basicPrice

  return {
    props: { purs, rate },
  }
}