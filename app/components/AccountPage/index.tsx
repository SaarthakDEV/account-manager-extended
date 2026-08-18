"use client"
import useRemoveQuery from '@/app/hooks/useRemoveQuery'

const AccountPage = ({ id }: { id: string }) => {
    useRemoveQuery(id);
  return (
    <div>AccountPage {id}</div>
  )
}

export default AccountPage