import React, { useMemo } from 'react'
import AccountOverviewItem from './AccountOverviewItem'
import { useSelector } from 'react-redux'
import { AccountOverview } from '@/types';
import { RootState } from '@/redux/store';

const AccountOverviewList = () => {
    const { accounts, searchQuery } = useSelector((state:RootState) => state.accounts);
    const accountsToDisplay = useMemo(() => {
        if(!searchQuery) return accounts;

        return accounts.filter((account: AccountOverview) => account.account_name.includes(searchQuery))
    }, [searchQuery, accounts])
    
  return accountsToDisplay?.map((account: AccountOverview) => <AccountOverviewItem key={account.id} rowData={account}/>)
}

export default AccountOverviewList