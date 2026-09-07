import React from 'react'
import AccountOverviewItem from './AccountOverviewItem'
import { useSelector } from 'react-redux'
import { AccountOverview } from '@/types';
import { RootState } from '@/redux/store';

const AccountOverviewList = () => {
    const { accounts } = useSelector((state:RootState) => state.accounts);
    
  return accounts?.map((account: AccountOverview) => <AccountOverviewItem key={account.id} rowData={account}/>)
}

export default AccountOverviewList