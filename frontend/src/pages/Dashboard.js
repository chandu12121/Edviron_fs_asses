import React,{ useState }  from 'react';
import TransactionsTable from '../components/TransactionsTable';


const Dashboard = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.body.className = newTheme;
    };

    const buttonStyles = {
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background-color 0.3s, color 0.3s',
        border: '1px solid #ccc',
        backgroundColor: theme === 'light' ? '#f0f0f0' : '#333',
        color: theme === 'light' ? '#333' : '#fff',
        marginBottom: '20px',
        
    };

    const buttonHoverStyles = {
        backgroundColor: theme === 'light' ? '#ddd' : '#444',
    };
    return (
        <div style={buttonStyles}>
            <h1 style={{textAlign: 'center'}}>School Transactions</h1>
            <div style={{display: 'flex', flexDirection:"row", justifyContent: 'spaceBetween'}}>
                

                <div style={{height: '100%', width: '100%',display:"flex",flexDirection: 'row', justifyContent:"flex-end",}}>
                    <button
                        onClick={toggleTheme}
                        style={buttonStyles}
                        onMouseEnter={(e) => (e.target.style.backgroundColor = buttonHoverStyles.backgroundColor)}
                        onMouseLeave={(e) => (e.target.style.backgroundColor = buttonStyles.backgroundColor)}
                    >
                        {theme === 'light' ? 'Dark' : 'Light'}
                    </button>
                    
                </div>
            </div>
            
            <TransactionsTable />
        </div>
    );
};

export default Dashboard;
