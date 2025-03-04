import { Box, Tab, Tabs } from '@mui/material';
import React from 'react';
import { LedgerAdapterDemo } from './LedgerAdapterDemo.js';
import { CustomConnectWithSelectAccount } from './LedgerDemo/CustomConnectWithSelectAccount.js';
import { CustomConnectWithGetAccounts } from './LedgerDemo/CustomConnectWithGetAccounts.js';
import { TronLinkAdapterDemo } from './TronLinkAdapterDemo.js';
import { ReactHooksDemo } from './ReactHooksDemo.js';
import { TokenPocketAdapterDemo } from './TokenPocketAdapterDemo.js';
import { BitKeepAdapterDemo } from './BitKeepAdapterDemo.js';
import { OkxWalletAdapterDemo } from './OkxWalletAdapterDemo.js';
import { MetamaskAdapterDemo } from './Metamask.js';
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}
function App() {
    const [value, setValue] = React.useState(() => {
        return Number(localStorage.getItem('tab')) || 0;
    });

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        localStorage.setItem('tab', String(newValue));
        setValue(newValue);
    };
    return (
        <div className="App">
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs scrollButtons="auto" variant="scrollable" value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="TronLinkAdapter Demo" />
                        <Tab label="LedgerAdapter Demo" />
                        <Tab label="LedgerAdapter CustomConnectWithSelectAccount" />
                        <Tab label="LedgerAdapter CustomConnectWithGetAccounts" />
                        <Tab label="ReactHooks Demo" />
                        <Tab label="TokenPocketAdapter Demo" />
                        <Tab label="BitKeepAdapter Demo" />
                        <Tab label="OkxWalletAdapter Demo" />
                        <Tab label="MetaMaskWalletAdapter Demo" />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <TronLinkAdapterDemo></TronLinkAdapterDemo>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <LedgerAdapterDemo></LedgerAdapterDemo>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <CustomConnectWithSelectAccount></CustomConnectWithSelectAccount>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <CustomConnectWithGetAccounts></CustomConnectWithGetAccounts>
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <ReactHooksDemo></ReactHooksDemo>
                </TabPanel>
                <TabPanel value={value} index={5}>
                    <TokenPocketAdapterDemo></TokenPocketAdapterDemo>
                </TabPanel>
                <TabPanel value={value} index={6}>
                    <BitKeepAdapterDemo></BitKeepAdapterDemo>
                </TabPanel>
                <TabPanel value={value} index={7}>
                    <OkxWalletAdapterDemo></OkxWalletAdapterDemo>
                </TabPanel>
                <TabPanel value={value} index={8}>
                    <MetamaskAdapterDemo></MetamaskAdapterDemo>
                </TabPanel>
            </Box>
        </div>
    );
}

export default App;
