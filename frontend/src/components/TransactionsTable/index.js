import React, { useState, useEffect } from 'react';
const TransactionsTable = () => {
    const [transactions, setTransactions] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredTransactions, setFilteredTransactions] = useState([]);
    const [statusFilter, setStatusFilter] = useState('');
    const [dateFilter, setDateFilter] = useState('');
  
    useEffect(() => {
        const allTransactions =  [
        { collect_id: "6730e74326c65c39b0ee0222", school_id: "6730d9b926c65c39b0ee0149", status: "SUCCESS", payment_method: "upi", gateway: "CASHFREE", transaction_amount: 10100, bank_reference: "YESBNK221",transaction_date: "2025-01-01" },
        { collect_id: "6730e74326c65c39b0ee0223", school_id: "6730d9b926c65c39b0ee014a", status: "SUCCESS", payment_method: "upi", gateway: "CASHFREE", transaction_amount: 10100, bank_reference: "YESBNK222",transaction_date: "2025-01-01" },
        { collect_id: "6730e74326c65c39b0ee0224", school_id: "6730d9b926c65c39b0ee014b", status: "SUCCESS", payment_method: "upi", gateway: "CASHFREE", transaction_amount: 22100, bank_reference: "YESBNK223" ,transaction_date: "2025-01-01"},
        { collect_id: "6730e74326c65c39b0ee0225", school_id: "6730d9b926c65c39b0ee014c", status: "SUCCESS", payment_method: "upi", gateway: "PHONEPE", transaction_amount: 20100, bank_reference: "YESBNK224",transaction_date: "2025-01-01" },
        { collect_id: "6730e74326c65c39b0ee0226", school_id: "6730d9b926c65c39b0ee014d", status: "SUCCESS", payment_method: "upi", gateway: "CASHFREE", transaction_amount: 10300, bank_reference: "YESBNK225",transaction_date: "2025-01-01" },
        { collect_id: "6730e74326c65c39b0ee0227", school_id: "6730d9b926c65c39b0ee014e", status: "SUCCESS", payment_method: "upi", gateway: "PHONEPE", transaction_amount: 10300, bank_reference: "YESBNK226" ,transaction_date: "2025-01-01"},
        { collect_id: "6730e74326c65c39b0ee0228", school_id: "6730d9b926c65c39b0ee014f", status: "SUCCESS", payment_method: "upi", gateway: "CASHFREE", transaction_amount: 10000, bank_reference: "YESBNK227" ,transaction_date: "2025-01-01"},
        { collect_id: "6730e74326c65c39b0ee0229", school_id: "6730d9b926c65c39b0ee0150", status: "SUCCESS", payment_method: "upi", gateway: "CASHFREE", transaction_amount: 10000, bank_reference: "YESBNK228" ,transaction_date: "2025-01-01"},
        { collect_id: "6730e74326c65c39b0ee022a", school_id: "6730d9b926c65c39b0ee0151", status: "SUCCESS", payment_method: "upi", gateway: "CASHFREE", transaction_amount: 10000, bank_reference: "YESBNK229" ,transaction_date: "2025-01-01"},
        { collect_id: "6730e74326c65c39b0ee022b", school_id: "6730d9b926c65c39b0ee0152", status: "SUCCESS", payment_method: "upi", gateway: "PHONEPE", transaction_amount: 14000, bank_reference: "YESBNK230" ,transaction_date: "2025-01-01"},
        { collect_id: "6730e74326c65c39b0ee022c", school_id: "6730d9b926c65c39b0ee0153", status: "SUCCESS", payment_method: "upi", gateway: "CASHFREE", transaction_amount: 10000, bank_reference: "YESBNK231" ,transaction_date: "2025-01-01"},
        { collect_id: "6730e74326c65c39b0ee022d", school_id: "6730d9b926c65c39b0ee0154", status: "PENDING", payment_method: "NA", gateway: "NA", transaction_amount: 10000, bank_reference: "YESBNK232",transaction_date: "2025-01-05" },
        { collect_id: "6730e74326c65c39b0ee022e", school_id: "6730d9b926c65c39b0ee0155", status: "SUCCESS", payment_method: "credit_card", gateway: "PHONEPE", transaction_amount: 10000, bank_reference: "YESBNK233" ,transaction_date: "2025-01-05" },
        { collect_id: "6730e74326c65c39b0ee022f", school_id: "6730d9b926c65c39b0ee0156", status: "PENDING", payment_method: "NA", gateway: "NA", transaction_amount: 10000, bank_reference: "YESBNK234" ,transaction_date: "2025-01-05" },
        { collect_id: "6730e74326c65c39b0ee0230", school_id: "6730d9b926c65c39b0ee0157", status: "SUCCESS", payment_method: "credit_card", gateway: "CASHFREE", transaction_amount: 10000, bank_reference: "YESBNK235",transaction_date: "2025-01-05"  },
        { collect_id: "6730e74326c65c39b0ee0231", school_id: "6730d9b926c65c39b0ee0158", status: "SUCCESS", payment_method: "credit_card", gateway: "CASHFREE", transaction_amount: 10000, bank_reference: "YESBNK236",transaction_date: "2025-01-05"  },
        { collect_id: "6730e74326c65c39b0ee0232", school_id: "6730d9b926c65c39b0ee0159", status: "PENDING", payment_method: "NA", gateway: "NA", transaction_amount: 12000, bank_reference: "YESBNK237",transaction_date: "2025-01-10"  },
        { collect_id: "6730e74326c65c39b0ee0233", school_id: "6730d9b926c65c39b0ee015a", status: "SUCCESS", payment_method: "credit_card", gateway: "NA", transaction_amount: 10000, bank_reference: "YESBNK238",transaction_date: "2025-01-10" },
        { collect_id: "6730e74326c65c39b0ee0234", school_id: "6730d9b926c65c39b0ee015b", status: "SUCCESS", payment_method: "credit_card", gateway: "CASHFREE", transaction_amount: 10000, bank_reference: "YESBNK239",transaction_date: "2025-01-10" },
        { collect_id: "6730e74326c65c39b0ee0235", school_id: "6730d9b926c65c39b0ee015c", status: "SUCCESS", payment_method: "credit_card", gateway: "PHONEPE", transaction_amount: 10000, bank_reference: "YESBNK240",transaction_date: "2025-01-10" },
        { collect_id: "6730e74326c65c39b0ee0236", school_id: "6730d9b926c65c39b0ee015d", status: "PENDING", payment_method: "NA", gateway: "NA", transaction_amount: 19000, bank_reference: "YESBNK241" ,transaction_date: "2025-01-10"},
      { collect_id: "6730e74326c65c39b0ee0237", school_id: "6730d9b926c65c39b0ee015e", status: "SUCCESS", payment_method: "net_banking", gateway: "CASHFREE", transaction_amount: 10000, bank_reference: "YESBNK242",transaction_date: "2025-01-10" },
      { collect_id: "6730e74326c65c39b0ee0238", school_id: "6730d9b926c65c39b0ee015f", status: "SUCCESS", payment_method: "net_banking", gateway: "CASHFREE", transaction_amount: 10000, bank_reference: "YESBNK243",transaction_date: "2025-01-10" },
      { collect_id: "6730e74326c65c39b0ee0239", school_id: "6730d9b926c65c39b0ee0160", status: "SUCCESS", payment_method: "net_banking", gateway: "CASHFREE", transaction_amount: 10000, bank_reference: "YESBNK244",transaction_date: "2025-01-10" },
      { collect_id: "6730e74326c65c39b0ee023a", school_id: "6730d9b926c65c39b0ee0161", status: "SUCCESS", payment_method: "net_banking", gateway: "PHONEPE", transaction_amount: 10000, bank_reference: "YESBNK245" ,transaction_date: "2025-01-10"},
      { collect_id: "6730e74326c65c39b0ee023b", school_id: "6730d9b926c65c39b0ee0162", status: "SUCCESS", payment_method: "net_banking", gateway: "CASHFREE", transaction_amount: 10000, bank_reference: "YESBNK246",transaction_date: "2025-01-11" },
      { collect_id: "6730e74326c65c39b0ee023c", school_id: "6730d9b926c65c39b0ee0163", status: "SUCCESS", payment_method: "net_banking", gateway: "CASHFREE", transaction_amount: 10000, bank_reference: "YESBNK247" ,transaction_date: "2025-01-11"},
      { collect_id: "6730e74326c65c39b0ee023d", school_id: "6730d9b926c65c39b0ee0164", status: "SUCCESS", payment_method: "net_banking", gateway: "CASHFREE", transaction_amount: 10000, bank_reference: "YESBNK248",transaction_date: "2025-01-11" },
      { collect_id: "6730e74326c65c39b0ee023e", school_id: "6730d9b926c65c39b0ee0165", status: "SUCCESS", payment_method: "net_banking", gateway: "CASHFREE", transaction_amount: 76540, bank_reference: "YESBNK249",transaction_date: "2025-01-11"},
      { collect_id: "6730e74326c65c39b0ee023f", school_id: "6730d9b926c65c39b0ee0166", status: "SUCCESS", payment_method: "net_banking", gateway: "PHONEPE", transaction_amount: 10000, bank_reference: "YESBNK250" ,transaction_date: "2025-01-11"},
      { collect_id: "6730e74326c65c39b0ee0240", school_id: "6730d9b926c65c39b0ee0167", status: "SUCCESS", payment_method: "net_banking", gateway: "CASHFREE", transaction_amount: 10000, bank_reference: "YESBNK251" ,transaction_date: "2025-01-11"},
      { collect_id: "6730e74326c65c39b0ee0241", school_id: "6730d9b926c65c39b0ee0168", status: "SUCCESS", payment_method: "net_banking", gateway: "PHONEPE", transaction_amount: 99000, bank_reference: "YESBNK252" ,transaction_date: "2025-01-11"},
      { collect_id: "6730e74326c65c39b0ee0242", school_id: "6730d9b926c65c39b0ee0169", status: "FAILURE", payment_method: "NA", gateway: "CASHFREE", transaction_amount: 10000, bank_reference: "YESBNK253",transaction_date: "2025-01-11" },
      { collect_id: "6730e74326c65c39b0ee0243", school_id: "6730d9b926c65c39b0ee016a", status: "SUCCESS", payment_method: "upi", gateway: "CASHFREE", transaction_amount: 16000, bank_reference: "YESBNK254" ,transaction_date: "2025-01-02"},
      { collect_id: "6730e74326c65c39b0ee0244", school_id: "6730d9b926c65c39b0ee016b", status: "SUCCESS", payment_method: "upi", gateway: "CASHFREE", transaction_amount: 10000, bank_reference: "YESBNK255" ,transaction_date: "2025-01-02"},
      { collect_id: "6730e74326c65c39b0ee0245", school_id: "6730d9b926c65c39b0ee016c", status: "SUCCESS", payment_method: "upi", gateway: "PHONEPE", transaction_amount: 10000, bank_reference: "YESBNK256" ,transaction_date: "2025-01-02"},
      { collect_id: "6730e74326c65c39b0ee0246", school_id: "6730d9b926c65c39b0ee016d", status: "FAILURE", payment_method: "NA", gateway: "CASHFREE", transaction_amount: 10000, bank_reference: "YESBNK257" ,transaction_date: "2025-01-02"},
      { collect_id: "6730e74326c65c39b0ee0247", school_id: "6730d9b926c65c39b0ee016e", status: "SUCCESS", payment_method: "upi", gateway: "CASHFREE", transaction_amount: 10000, bank_reference: "YESBNK258" ,transaction_date: "2025-01-02"},
      { collect_id: "6730e74326c65c39b0ee0248", school_id: "6730d9b926c65c39b0ee016f", status: "FAILURE", payment_method: "NA", gateway: "CASHFREE", transaction_amount: 10000, bank_reference: "YESBNK259",transaction_date: "2025-01-02" },
      { collect_id: "6730e74326c65c39b0ee0249", school_id: "6730d9b926c65c39b0ee0170", status: "SUCCESS", payment_method: "upi", gateway: "CASHFREE", transaction_amount: 87000, bank_reference: "YESBNK260" ,transaction_date: "2025-01-04"},
      { collect_id: "6730e74326c65c39b0ee024a", school_id: "6730d9b926c65c39b0ee0171", status: "FAILURE", payment_method: "NA", gateway: "CASHFREE", transaction_amount: 16000, bank_reference: "YESBNK261" ,transaction_date: "2025-01-04"},
      { collect_id: "6730e74326c65c39b0ee024b", school_id: "6730d9b926c65c39b0ee0172", status: "SUCCESS", payment_method: "upi", gateway: "PHONEPE", transaction_amount: 16000, bank_reference: "YESBNK262" ,transaction_date: "2025-01-04"},
      { collect_id: "6730e74326c65c39b0ee024c", school_id: "6730d9b926c65c39b0ee0173", status: "FAILURE", payment_method: "NA", gateway: "CASHFREE", transaction_amount: 88000, bank_reference: "YESBNK263" ,transaction_date: "2025-01-04"},
      { collect_id: "6730e74326c65c39b0ee024d", school_id: "6730d9b926c65c39b0ee0174", status: "SUCCESS", payment_method: "upi", gateway: "PHONEPE", transaction_amount: 10000, bank_reference: "YESBNK264" ,transaction_date: "2025-01-04"},
      { collect_id: "6730e74326c65c39b0ee024e", school_id: "6730d9b926c65c39b0ee0175", status: "SUCCESS", payment_method: "upi", gateway: "CASHFREE", transaction_amount: 10000, bank_reference: "YESBNK265" ,transaction_date: "2025-01-012"},
      { collect_id: "6730e74326c65c39b0ee024f", school_id: "6730d9b926c65c39b0ee0176", status: "SUCCESS", payment_method: "upi", gateway: "PHONEPE", transaction_amount: 19600, bank_reference: "YESBNK266" ,transaction_date: "2025-01-012"},
      { collect_id: "6730e74326c65c39b0ee0250", school_id: "6730d9b926c65c39b0ee0177", status: "SUCCESS", payment_method: "upi", gateway: "CASHFREE", transaction_amount: 10300, bank_reference: "YESBNK267" ,transaction_date: "2025-01-012"},
      {
        collect_id: "6730e74326c65c39b0ee0251",
        school_id: "6730d9b926c65c39b0ee0178",
        status: "SUCCESS",
        payment_method: "upi",
        gateway: "PHONEPE",
        transaction_amount: 67300,
        bank_reference: "YESBNK268"
        ,transaction_date: "2025-01-012"
      },
      {
        collect_id: "6730e74326c65c39b0ee0252",
        school_id: "6730d9b926c65c39b0ee0179",
        status: "SUCCESS",
        payment_method: "upi",
        gateway: "PHONEPE",
        transaction_amount: 10060,
        bank_reference: "YESBNK269"
        ,transaction_date: "2025-01-012"
      },
      {
        collect_id: "6730e74326c65c39b0ee0253",
        school_id: "6730d9b926c65c39b0ee017a",
        status: "FAILURE",
        payment_method: "NA",
        gateway: "PHONEPE",
        transaction_amount: 23040,
        bank_reference: "YESBNK270"
        ,transaction_date: "2025-01-012"
      }
      ]
      setTransactions(allTransactions)
      setFilteredTransactions(allTransactions);
    }, []);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            filterTransactions();
        }
    };

    const tableStyles = {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '20px',
    };

    const thStyles = {
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '12px 15px',
        textAlign: 'left',
    };

    const tdStyles = {
        padding: '12px 15px',
        textAlign: 'left',
        borderBottom: '1px solid #ddd',
    };

    const trStyles = (status) => ({
        backgroundColor: status === 'SUCCESS' ? '#e8f5e9' : status === 'PENDING' ? '#fff3e0' : '#ffebee',
    });


    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        filterTransactions(query, statusFilter, dateFilter);
    };

    const handleStatusChange = (e) => {
        const status = e.target.value;
        setStatusFilter(status);
        filterTransactions(searchQuery, status, dateFilter);
    };

    const handleDateFilterChange = (e) => {
        const selectedDate = e.target.value;
        setDateFilter(selectedDate);
        filterTransactions(searchQuery, statusFilter, selectedDate);
    };

    const filterTransactions = (query = searchQuery, status = statusFilter, date = dateFilter) => {
        const filtered = transactions.filter(transaction => {
            const matchesQuery =
                transaction.collect_id.includes(query) ||
                transaction.school_id.includes(query) ||
                transaction.status.includes(query) ||
                transaction.payment_method.includes(query) ||
                transaction.gateway.includes(query) ||
                transaction.bank_reference.includes(query);

            const matchesStatus = status ? transaction.status === status : true;

            const transactionDate = new Date(transaction.transaction_date);
            const matchesDate = date ? checkDateFilter(transactionDate, date) : true;

            return matchesQuery && matchesStatus && matchesDate;
        });

        setFilteredTransactions(filtered);
    };

    const checkDateFilter = (transactionDate, dateFilter) => {
        const today = new Date();
        const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));
        const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1); 
        
        switch (dateFilter) {
            case 'today':
                return transactionDate.toDateString() === new Date().toDateString();
            case 'this_week':
                return transactionDate >= startOfWeek;
            case 'this_month':
                return transactionDate >= startOfMonth;
            default:
                return true; 
        }
    };

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '10px' }}>
                <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyPress={handleKeyPress}
                placeholder="Search transactions..."
                style={{
                    width: '200px',
                    padding: '8px',
                    fontSize: '14px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                }}
                />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '10px' }}>
                <select
                value={statusFilter}
                onChange={handleStatusChange}
                style={{
                    width: '150px',
                    padding: '8px',
                    fontSize: '14px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                }}
                >
                <option value="">Filter by Status</option>
                <option value="SUCCESS">SUCCESS</option>
                <option value="PENDING">PENDING</option>
                <option value="FAILED">FAILED</option>
                </select>
                <select
                value={dateFilter}
                onChange={handleDateFilterChange}
                style={{
                    width: '150px',
                    padding: '8px',
                    fontSize: '14px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                }}
                >
                <option value="">Filter by Date</option>
                <option value="today">Today</option>
                <option value="this_week">This Week</option>
                <option value="this_month">This Month</option>
                </select>
            
            </div>
            </div>

            <table style={tableStyles}>
                <thead>
                    <tr>
                        <th style={thStyles}>Collect ID</th>
                        <th style={thStyles}>School ID</th>
                        <th style={thStyles}>Status</th>
                        <th style={thStyles}>Payment Method</th>
                        <th style={thStyles}>Gateway</th>
                        <th style={thStyles}>Amount</th>
                        <th style={thStyles}>Bank Reference</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredTransactions.length > 0 ? (
                        filteredTransactions.map(transaction => (
                            <tr key={transaction.collect_id} style={trStyles(transaction.status)}>
                                <td style={tdStyles}>{transaction.collect_id}</td>
                                <td style={tdStyles}>{transaction.school_id}</td>
                                <td style={tdStyles}>{transaction.status}</td>
                                <td style={tdStyles}>{transaction.payment_method}</td>
                                <td style={tdStyles}>{transaction.gateway}</td>
                                <td style={tdStyles}>{transaction.transaction_amount}</td>
                                <td style={tdStyles}>{transaction.bank_reference}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" style={tdStyles}>No transactions found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};



export default TransactionsTable;