"use client"
import useDialog from '@/app/hooks/useModal';
import useRemoveQuery from '@/app/hooks/useRemoveQuery'
// import { Checked } from '@/app/icons';
import account from '@/app/mock/account';
import Dialog from '../Dialog';
import AddEntry from '../AddAccountEntry';


const AccountPage = ({ id }: { id: string }) => {
  const { confirm, CustomDialog } = useDialog()
    useRemoveQuery(id);

    const handleOpen = async () => {
      const result = await confirm({message: "dsfsdf", title: "sfsdf", icon: <div>dsfsdfsdf</div>, cta: ["fsdfsdfs"]})
    }
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
          {account.map((data, idx) => (
            <tr key={idx}>
              <td></td>
              <td>{ data.id}</td>
              <td>{ data.title}</td>
              <td>{data.type}</td>
              <td onClick={handleOpen}>{ data.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Dialog open={true}>
        <AddEntry />
      </Dialog>
    </div>
  )
}

export default AccountPage