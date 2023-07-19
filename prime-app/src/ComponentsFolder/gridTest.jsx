import React from "react";
import { Grid } from '@material-ui/core';

function Mygridrid(){
    return(
       <>
            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3,lg:5 }}  item justifyContent="center" xl={12}  lg={12}  spacing={10} alignItems="center" >
        <Grid item  xl={6}  lg={6}  style={{ maxHeight: '325px',maxWidth:'500px' }} >
        <div style={{ maxHeight: '325px', overflow: 'auto' }}>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
       <tr>
         <th className="px-4 py-3">Field</th>
         <th className="px-4 py-3">Value</th>
         <th className="px-4 py-3"></th>
       </tr>
     </thead>
     <tbody>
     <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          Marital status
        </td>
        <td className="px-4 py-3">
          <select className="w-full"  >
            <option value="Married">Married</option>
            <option value="Single">Single</option>
            <option value="Other">Other</option>
                 </select>
        </td>
        <td className="px-4 py-3">
          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
        </td>
      </tr>
     <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
       <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
       Salary per month
        </td>
       <td className="px-4 py-3">
         <input className=" w-32"  type="number"  />
       </td>
       <td className="px-4 py-3">
         <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
       </td>
     </tr>
      <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
       <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
       Number of Childreen
        </td>
       <td className="px-4 py-3">
         <input className=" w-32"  type="number"  />
       </td>
       <td className="px-4 py-3">
         <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
       </td>
     </tr>
     <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          Number of Direct Parent
        </td>
        <td className="px-4 py-3">
          <select className="w-full"   >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </td>
        <td className="px-4 py-3">
          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
        </td>
      </tr>
     <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          Number of Direct Parent in law
        </td>
        <td className="px-4 py-3">
          <select className="w-full"  >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </td>
        <td className="px-4 py-3">
          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
        </td>
      </tr>
      
     
       <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
         <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
         Funeral

         </td>
         <td className="px-4 py-3">
           <select className="w-full"  >
             <option value="Yes">Yes</option>
             <option value="No">No</option>
           </select>
         </td>
         <td className="px-4 py-3">
           <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
         </td>
       </tr>
       <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
         <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
         Savings

         </td>
         <td className="px-4 py-3">
           <select className="w-full"  >
             <option value="Yes">Yes</option>
             <option value="No">No</option>
           </select>
         </td>
         <td className="px-4 py-3">
           <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
         </td>
       </tr>
       <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
         <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
         Sum Insured shared to spouse

         </td>
         <td className="px-4 py-3">
           <select className="w-full"   >
             <option value="Yes">Yes</option>
             <option value="No">No</option>
            
           </select>
         </td>
         <td className="px-4 py-3">
           <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
         </td>
       </tr>
       
      
      
      
       <tr>
         <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
         Sum Insured rate

         </td>
         <td className="px-4 py-3">
           <select className="w-full"  >
             <option value="6">6</option>
             <option value="12">12</option>
             <option value="24">24</option>
             <option value="15">15</option>
           </select>
         </td>
         <td className="px-4 py-3">
           <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
         </td>
       </tr>
       <tr>
         <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
         Premium rate
          </td>
         <td className="px-4 py-3">
           <select className="w-full"  >
             <option value="3">3</option>
             <option value="4">4</option>
             <option value="5">5</option>
             <option value="10">10</option>
           </select>
         </td>
         <td className="px-4 py-3">
           <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
         </td>
       </tr>
     
     </tbody>
</table>
</div>

        </Grid>
        <Grid xl={6} lg={6}  item style={{maxWidth:'500px'}}>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
          </th>
          <th scope="col" className="px-6 py-3">
            Monthly
          </th>
          <th scope="col" className="px-6 py-3">
            Annual
          </th>
        </tr>
      </thead>
      <tbody className="space-y-11">
        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
          <td className="px-6 py-10 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Risk Premium
          </td>
          <td className="px-6">
            {/* {riskPremiumValue} */}
          </td>
          <td className="px-6">
            {/* {riskPremiumAnuallyValue} */}
          </td>
        </tr>
        <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
          <td className="px-6 py-10 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Saving Premium
          </td>
          <td className="px-6 py-4">
            {/* {premiumSavings} */}
          </td>
          <td className="px-6 py-4">
            {/* {savingsAnually} */}
          </td>
        </tr>
        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
          <td className="px-6 py-10 font-medium text-gray-900 whitespace-nowrap dark:textwhite">
            Total Premium
          </td>
          <td className="px-6 py-4">
            {/* {riskPremiumValue+premiumSavings} */}
          </td>
          <td className="px-6 py-4">
            {/* {riskPremiumAnuallyValue+savingsAnually} */}
          </td>
        </tr>
      </tbody>
    </table>
    </Grid>
    </Grid>
  <Grid item justifyContent="center"   lg={6}  xl={6}>
    <Grid>
            {/* <div className=" mt-16" style={{ width:'850px', overflow: 'auto' }}> */}
            
            <table className=" w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto" >
           <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="">
                
              <th scope="col" className=" px-6  py-3">
                Covers
              </th>
              <th scope="col" className="px-6 py-3">
              Sum assured<br></br>
              Polcy holder
              </th>
              <th scope="col" className="px-6 py-3">
              Spouse assured<br></br>
              Polcy holder
              </th>
            </tr>
          </thead>
    <tbody className="space-y-11 ">
      <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
        <td className="px-6 py-10 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        Death
        
        </td>
        <td className="px-6">
         {/* {deathsumAssuredHolder} */}
        </td>
        <td className="px-6">
         {/* {deathSpouseAssuredHolder} */}
        </td>
      </tr>
      <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <td className="px-6 py-10 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        Permanent Disability

        </td>
        <td className="px-6 py-4">
        {/* {permanentSumAssuredHolder} */}
        </td>
        <td className="px-6 py-4">
          {/* {permanentSpouseAssuredHolder} */}
        </td>
      </tr>
      <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
        <td className="px-6 py-10 font-medium text-gray-900 whitespace-nowrap dark:textwhite">
        Loss of Revenue
      </td>
        <td className="px-6 py-4">
        {/* {lossOfRevenueSumAssuredHolder} */}
        </td>
        <td className="px-6 py-4">
          {/* {lossOfRevenueSpouseAssuredHolder} */}
        </td>
      </tr>
      <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
        <td className="px-6 py-10 font-medium text-gray-900 whitespace-nowrap dark:textwhite">
        Funeral Fees
        </td>
        <td className="px-6 py-4">
          {/* {funeralFeesSumAssuredHolder} */}
        </td>
        <td className="px-6 py-4">
        {/* {funeralFeesSpouseAssuredHolder} */}
        </td>
      </tr>
      
    </tbody>
  </table>


            {/* </div> */}
            </Grid>     
        </Grid>
       
        </>
    )

}
export default Mygridrid