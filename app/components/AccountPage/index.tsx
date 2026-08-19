"use client"
import useRemoveQuery from '@/app/hooks/useRemoveQuery'
// import { Checked } from '@/app/icons';
import account from '@/app/mock/account';


const AccountPage = ({ id }: { id: string }) => {
    useRemoveQuery(id);
  return (
    <div className="flex-1">
      <table className=" w-full">
        <thead>
        <tr className="bg-[#f2f2f2] py-6">
          <th>
            {/* <Checked /> */}
          </th>
          <th>Date</th>
          <th>Particular</th>
          <th>Credit</th>
          <th>Debit</th>
          </tr>
        </thead>
        <tbody>
          {account.map(data => (
            <tr>
              <td></td>
              <td>{ data.id}</td>
              <td>{ data.title}</td>
              <td>{ data.type}</td>
              <td>{ data.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AccountPage