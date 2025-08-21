import React, { useState, useEffect } from 'react';

const Cards5 = () => {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // SVG Icons as inline components
  const InStockIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6" fill="#10B981" stroke="#10B981" strokeWidth="2"/>
      <path d="M5.5 8l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const ProbationIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6" fill="#F59E0B" stroke="#F59E0B" strokeWidth="2"/>
      <path d="M8 5v3M8 11h.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const InactiveIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6" fill="#EF4444" stroke="#EF4444" strokeWidth="2"/>
      <path d="M6 6l4 4M10 6l-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const MenuIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="3" r="1" fill="#666"/>
      <circle cx="8" cy="8" r="1" fill="#666"/>
      <circle cx="8" cy="13" r="1" fill="#666"/>
    </svg>
  );

  useEffect(() => {
    const fetchTableData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Parse the API data you provided
        const apiDataString = `Email:priya.patel@example.com,Location:Delhi\\, India,Status:Active,Performance:Good,Balance:₹6,12,890.50,Revenue Generated:₹15,32,226.25,Date of birth:1988-05-12  Email:rohan.gupta@example.com,Location:Bengaluru\\, India,Status:Active,Performance:Poor,Balance:₹3,75,109.20,Revenue Generated:₹9,37,773.00,Date of birth:1992-09-23  Email:ananya.singh@example.com,Location:Chennai\\, India,Status:Probation,Performance:Excellent,Balance:₹5,88,450.00,Revenue Generated:₹14,71,125.00,Date of birth:1995-02-18  Email:vikram.kumar@example.com,Location:Hyderabad\\, India,Status:Active,Performance:Average,Balance:₹4,99,675.40,Revenue Generated:₹12,49,188.50,Date of birth:1985-11-30  Email:ishaan.reddy@example.com,Location:Pune\\, India,Status:Inactive,Performance:Good,Balance:₹3,10,000.00,Revenue Generated:₹7,75,000.00,Date of birth:1998-07-07  Email:meera.iyer@example.com,Location:Kolkata\\, India,Status:Probation,Performance:Poor,Balance:₹4,20,532.80,Revenue Generated:₹10,51,332.00,Date of birth:1991-04-01  Email:arjun.nair@example.com,Location:Ahmedabad\\, India,Status:Probation,Performance:Excellent,Balance:₹3,55,500.90,Revenue Generated:₹8,88,752.25,Date of birth:1993-08-15  Email:sneha.joshi@example.com,Location:Jaipur\\, India,Status:Active,Performance:Average,Balance:₹7,01,150.60,Revenue Generated:₹17,52,876.50,Date of birth:1989-12-25  Email:kabir.malhotra@example.com,Location:Lucknow\\, India,Status:Active,Performance:Good,Balance:₹6,50,000.00,Revenue Generated:₹16,25,000.00,Date of birth:1987-06-10  Email:diya.mehta@example.com,Location:Surat\\, India,Status:Active,Performance:Poor,Balance:₹2,95,890.25,Revenue Generated:₹7,39,725.63,Date of birth:1996-10-05`;
        
        // Parse the data
        const records = apiDataString.split('  ').filter(record => record.trim());
        const parsedData = records.map((record, index) => {
          const fields = {};
          const pairs = record.split(',');
          
          pairs.forEach(pair => {
            const [key, ...valueParts] = pair.split(':');
            const value = valueParts.join(':');
            if (key && value) {
              fields[key.trim()] = value.trim();
            }
          });

          return {
            id: index + 1,
            email: fields['Email'] || '',
            location: fields['Location'] || '',
            status: fields['Status'] || '',
            performance: fields['Performance'] || '',
            balance: fields['Balance'] || '',
            revenue: fields['Revenue Generated'] || '',
            dateOfBirth: fields['Date of birth'] || ''
          };
        });

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setTableData(parsedData);
      } catch (err) {
        setError('Failed to load table data. Please try again.');
        console.error('Error parsing data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTableData();
  }, []);

  // Helper function to clean location (remove escaped commas)
  const cleanLocation = (location) => {
    return location.replace('\\,', ',');
  };

  // Helper function to get status icon
  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return <InStockIcon />;
      case 'probation':
        return <ProbationIcon />;
      case 'inactive':
        return <InactiveIcon />;
      default:
        return <InStockIcon />;
    }
  };

  // Helper function to get performance badge color
  const getPerformanceBadgeStyle = (performance) => {
    const baseStyle = {
      padding: '4px 8px',
      borderRadius: '12px',
      fontSize: '12px',
      fontWeight: '500'
    };

    switch (performance.toLowerCase()) {
      case 'excellent':
        return {
          ...baseStyle,
          backgroundColor: '#dcfce7',
          color: '#166534'
        };
      case 'good':
        return {
          ...baseStyle,
          backgroundColor: '#dbeafe',
          color: '#1e40af'
        };
      case 'average':
        return {
          ...baseStyle,
          backgroundColor: '#fef3c7',
          color: '#92400e'
        };
      case 'poor':
        return {
          ...baseStyle,
          backgroundColor: '#fecaca',
          color: '#991b1b'
        };
      default:
        return {
          ...baseStyle,
          backgroundColor: '#f3f4f6',
          color: '#374151'
        };
    }
  };

  if (loading) {
    return (
      <div style={{ 
        padding: '60px', 
        backgroundColor: '#ffffff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '400px'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '40px',
            height: '40px',
            border: '4px solid #f3f4f6',
            borderTop: '4px solid #3b82f6',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 16px'
          }}></div>
          <div style={{ color: '#666', fontSize: '16px' }}>
            Loading table data...
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ 
        padding: '60px', 
        backgroundColor: '#ffffff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '400px'
      }}>
        <div style={{ 
          textAlign: 'center',
          padding: '32px',
          border: '1px solid #fecaca',
          borderRadius: '8px',
          backgroundColor: '#fef2f2'
        }}>
          <div style={{ color: '#dc2626', fontSize: '16px', marginBottom: '8px' }}>
            Error Loading Data
          </div>
          <div style={{ color: '#7f1d1d', fontSize: '14px' }}>
            {error}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      padding: '60px',
      backgroundColor: '#ffffff'
    }}>
      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ 
          fontSize: '24px', 
          fontWeight: '600', 
          color: '#000000', 
          marginBottom: '8px' 
        }}>
          User Management
        </h1>
        <p style={{ 
          fontSize: '14px', 
          color: '#666666' 
        }}>
          Manage user accounts and monitor performance metrics
        </p>
      </div>

      {/* Table Container */}
      <div style={{
        backgroundColor: '#ffffff',
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        overflow: 'hidden'
      }}>
        {/* Table */}
        <div style={{ overflowX: 'auto' }}>
          <table style={{ 
            width: '100%', 
            borderCollapse: 'collapse' 
          }}>
            <thead>
              <tr style={{ backgroundColor: '#f9fafb' }}>
                <th style={{
                  padding: '12px 16px',
                  textAlign: 'left',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#374151',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  borderBottom: '1px solid #e5e7eb'
                }}>
                  Email
                </th>
                <th style={{
                  padding: '12px 16px',
                  textAlign: 'left',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#374151',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  borderBottom: '1px solid #e5e7eb'
                }}>
                  Location
                </th>
                <th style={{
                  padding: '12px 16px',
                  textAlign: 'left',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#374151',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  borderBottom: '1px solid #e5e7eb'
                }}>
                  Status
                </th>
                <th style={{
                  padding: '12px 16px',
                  textAlign: 'left',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#374151',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  borderBottom: '1px solid #e5e7eb'
                }}>
                  Performance
                </th>
                <th style={{
                  padding: '12px 16px',
                  textAlign: 'right',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#374151',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  borderBottom: '1px solid #e5e7eb'
                }}>
                  Balance
                </th>
                <th style={{
                  padding: '12px 16px',
                  textAlign: 'right',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#374151',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  borderBottom: '1px solid #e5e7eb'
                }}>
                  Revenue
                </th>
                <th style={{
                  padding: '12px 16px',
                  textAlign: 'center',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#374151',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  borderBottom: '1px solid #e5e7eb',
                  width: '50px'
                }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr key={row.id} style={{
                  borderBottom: '1px solid #f3f4f6'
                }}>
                  <td style={{
                    padding: '12px 16px',
                    fontSize: '14px',
                    color: '#111827'
                  }}>
                    {row.email}
                  </td>
                  <td style={{
                    padding: '12px 16px',
                    fontSize: '14px',
                    color: '#6b7280'
                  }}>
                    {cleanLocation(row.location)}
                  </td>
                  <td style={{
                    padding: '12px 16px'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      {getStatusIcon(row.status)}
                      <span style={{
                        fontSize: '14px',
                        color: '#111827',
                        fontWeight: '500'
                      }}>
                        {row.status}
                      </span>
                    </div>
                  </td>
                  <td style={{
                    padding: '12px 16px'
                  }}>
                    <span style={getPerformanceBadgeStyle(row.performance)}>
                      {row.performance}
                    </span>
                  </td>
                  <td style={{
                    padding: '12px 16px',
                    textAlign: 'right',
                    fontSize: '14px',
                    color: '#111827',
                    fontWeight: '500'
                  }}>
                    {row.balance}
                  </td>
                  <td style={{
                    padding: '12px 16px',
                    textAlign: 'right',
                    fontSize: '14px',
                    color: '#059669',
                    fontWeight: '600'
                  }}>
                    {row.revenue}
                  </td>
                  <td style={{
                    padding: '12px 16px',
                    textAlign: 'center'
                  }}>
                    <button style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '4px',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <MenuIcon />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div style={{
          padding: '16px 24px',
          borderTop: '1px solid #e5e7eb',
          backgroundColor: '#f9fafb',
          display: 'flex',
          justifyContent: 'between',
          alignItems: 'center'
        }}>
          <div style={{
            fontSize: '14px',
            color: '#6b7280'
          }}>
            Showing 1-10 of 50 results
          </div>
          <div style={{
            display: 'flex',
            gap: '8px',
            alignItems: 'center'
          }}>
            <span style={{
              fontSize: '14px',
              color: '#6b7280',
              marginRight: '16px'
            }}>
              Page 1 of 5
            </span>
            <button style={{
              padding: '8px 12px',
              backgroundColor: '#ffffff',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              fontSize: '14px',
              color: '#374151',
              cursor: 'pointer'
            }}>
              Previous
            </button>
            <button style={{
              padding: '8px 12px',
              backgroundColor: '#3b82f6',
              border: '1px solid #3b82f6',
              borderRadius: '6px',
              fontSize: '14px',
              color: '#ffffff',
              cursor: 'pointer'
            }}>
              Next
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Cards5;