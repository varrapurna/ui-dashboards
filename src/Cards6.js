import React, { useState, useEffect } from 'react';

const Cards6 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(5);

  // Sample data for different pages
  const sampleData = {
    1: [
      {
        name: "Priya Patel",
        email: "priya.patel@example.com",
        location: "Delhi, India",
        status: "Active",
        performance: "Excellent",
        balance: "₹2,78,453.12",
        revenueGenerated: "₹6,45,320.75",
        dateOfBirth: "1985-03-12"
      },
      {
        name: "Rohan Gupta",
        email: "rohan.gupta@example.com",
        location: "Bengaluru, India",
        status: "Active",
        performance: "Average",
        balance: "₹3,67,890.45",
        revenueGenerated: "₹3,85,210.40",
        dateOfBirth: "1990-07-25"
      },
      {
        name: "Ananya Singh",
        email: "ananya.singh@example.com",
        location: "Chennai, India",
        status: "Probation",
        performance: "Good",
        balance: "₹4,56,789.00",
        revenueGenerated: "₹5,99,999.99",
        dateOfBirth: "1988-11-30"
      },
      {
        name: "Vikram Kumar",
        email: "vikram.kumar@example.com",
        location: "Hyderabad, India",
        status: "Active",
        performance: "Poor",
        balance: "₹5,12,345.67",
        revenueGenerated: "₹5,10,890.60",
        dateOfBirth: "1992-05-14"
      },
      {
        name: "Ishaan Reddy",
        email: "ishaan.reddy@example.com",
        location: "Pune, India",
        status: "Inactive",
        performance: "Excellent",
        balance: "₹8,99,999.99",
        revenueGenerated: "₹3,25,000.00",
        dateOfBirth: "1995-09-21"
      },
      {
        name: "Meera Iyer",
        email: "meera.iyer@example.com",
        location: "Kolkata, India",
        status: "Probation",
        performance: "Average",
        balance: "₹6,78,910.11",
        revenueGenerated: "₹4,35,532.90",
        dateOfBirth: "1983-02-18"
      },
      {
        name: "Arjun Nair",
        email: "arjun.nair@example.com",
        location: "Ahmedabad, India",
        status: "Probation",
        performance: "Good",
        balance: "₹7,45,320.75",
        revenueGenerated: "₹3,70,500.50",
        dateOfBirth: "1991-06-09"
      },
      {
        name: "Sneha Joshi",
        email: "sneha.joshi@example.com",
        location: "Jaipur, India",
        status: "Active",
        performance: "Poor",
        balance: "₹9,12,345.89",
        revenueGenerated: "₹7,15,250.80",
        dateOfBirth: "1987-12-01"
      },
      {
        name: "Kabir Malhotra",
        email: "kabir.malhotra@example.com",
        location: "Lucknow, India",
        status: "Probation",
        performance: "Excellent",
        balance: "₹10,00,000.00",
        revenueGenerated: "₹6,75,000.00",
        dateOfBirth: "1994-04-15"
      },
      {
        name: "Diya Mehta",
        email: "diya.mehta@example.com",
        location: "Surat, India",
        status: "Probation",
        performance: "Average",
        balance: "₹11,23,456.78",
        revenueGenerated: "₹3,12,456.78",
        dateOfBirth: "1987-10-30"
      }
    ],
    2: [
      {
        name: "Amit Shah",
        email: "amit.shah@example.com",
        location: "Mumbai, India",
        status: "Active",
        performance: "Good",
        balance: "₹5,67,890.12",
        revenueGenerated: "₹8,45,123.45",
        dateOfBirth: "1986-01-15"
      },
      {
        name: "Riya Sharma",
        email: "riya.sharma@example.com",
        location: "Noida, India",
        status: "Probation",
        performance: "Excellent",
        balance: "₹7,89,456.23",
        revenueGenerated: "₹9,12,345.67",
        dateOfBirth: "1993-08-22"
      },
      {
        name: "Karthik Reddy",
        email: "karthik.reddy@example.com",
        location: "Coimbatore, India",
        status: "Active",
        performance: "Average",
        balance: "₹4,23,789.45",
        revenueGenerated: "₹6,78,901.23",
        dateOfBirth: "1989-12-05"
      },
      {
        name: "Neha Gupta",
        email: "neha.gupta@example.com",
        location: "Gurgaon, India",
        status: "Inactive",
        performance: "Poor",
        balance: "₹3,45,678.90",
        revenueGenerated: "₹4,56,789.12",
        dateOfBirth: "1991-04-18"
      },
      {
        name: "Rajesh Kumar",
        email: "rajesh.kumar@example.com",
        location: "Indore, India",
        status: "Active",
        performance: "Good",
        balance: "₹8,90,123.45",
        revenueGenerated: "₹11,23,456.78",
        dateOfBirth: "1984-07-30"
      }
    ]
  };

  const fetchData = async (page) => {
    try {
      setLoading(true);
      setError(null);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Get data for current page
      const pageData = sampleData[page] || sampleData[1];
      setData(pageData);
      
    } catch (err) {
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const getStatusStyle = (status) => {
    const baseStyle = {
      padding: '4px 8px',
      borderRadius: '4px',
      fontSize: '12px',
      fontWeight: '500',
      display: 'inline-block',
      minWidth: '60px',
      textAlign: 'center'
    };

    switch (status) {
      case 'Active':
        return { ...baseStyle, color: '#16a34a', fontWeight: '600' };
      case 'Inactive':
        return { ...baseStyle, color: '#dc2626', fontWeight: '600' };
      case 'Probation':
        return { ...baseStyle, color: '#2563eb', fontWeight: '600' };
      default:
        return { ...baseStyle, color: '#6b7280' };
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages && newPage !== currentPage) {
      setCurrentPage(newPage);
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
        <div style={{ color: '#666', fontSize: '16px' }}>
          Loading...
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
        <div style={{ color: '#dc2626', fontSize: '16px' }}>
          {error}
        </div>
      </div>
    );
  }

  return (
    <div style={{
      padding: '60px',
      backgroundColor: '#ffffff'
    }}>
      {/* Table Container */}
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        overflow: 'hidden',
        border: '1px solid #e5e7eb'
      }}>
        {/* Table */}
        <table style={{
          width: '100%',
          borderCollapse: 'collapse'
        }}>
          {/* Header */}
          <thead>
            <tr style={{ backgroundColor: '#f9fafb' }}>
              <th style={{
                padding: '16px',
                textAlign: 'left',
                fontSize: '12px',
                fontWeight: '600',
                color: '#374151',
                borderBottom: '1px solid #e5e7eb'
              }}>
                Name
              </th>
              <th style={{
                padding: '16px',
                textAlign: 'left',
                fontSize: '12px',
                fontWeight: '600',
                color: '#374151',
                borderBottom: '1px solid #e5e7eb'
              }}>
                Email
              </th>
              <th style={{
                padding: '16px',
                textAlign: 'left',
                fontSize: '12px',
                fontWeight: '600',
                color: '#374151',
                borderBottom: '1px solid #e5e7eb'
              }}>
                Location
              </th>
              <th style={{
                padding: '16px',
                textAlign: 'left',
                fontSize: '12px',
                fontWeight: '600',
                color: '#374151',
                borderBottom: '1px solid #e5e7eb'
              }}>
                Status
              </th>
              <th style={{
                padding: '16px',
                textAlign: 'left',
                fontSize: '12px',
                fontWeight: '600',
                color: '#374151',
                borderBottom: '1px solid #e5e7eb'
              }}>
                Performance
              </th>
              <th style={{
                padding: '16px',
                textAlign: 'right',
                fontSize: '12px',
                fontWeight: '600',
                color: '#374151',
                borderBottom: '1px solid #e5e7eb'
              }}>
                Balance
              </th>
              <th style={{
                padding: '16px',
                textAlign: 'right',
                fontSize: '12px',
                fontWeight: '600',
                color: '#374151',
                borderBottom: '1px solid #e5e7eb'
              }}>
                Revenue Generated
              </th>
              <th style={{
                padding: '16px',
                textAlign: 'left',
                fontSize: '12px',
                fontWeight: '600',
                color: '#374151',
                borderBottom: '1px solid #e5e7eb'
              }}>
                Date of Birth
              </th>
            </tr>
          </thead>
          
          {/* Body */}
          <tbody>
            {data.map((row, index) => (
              <tr key={index} style={{
                borderBottom: '1px solid #f3f4f6'
              }}>
                <td style={{
                  padding: '16px',
                  fontSize: '14px',
                  color: '#111827',
                  fontWeight: '500'
                }}>
                  {row.name}
                </td>
                <td style={{
                  padding: '16px',
                  fontSize: '14px',
                  color: '#6b7280'
                }}>
                  {row.email}
                </td>
                <td style={{
                  padding: '16px',
                  fontSize: '14px',
                  color: '#6b7280'
                }}>
                  {row.location}
                </td>
                <td style={{
                  padding: '16px',
                  fontSize: '14px'
                }}>
                  <span style={getStatusStyle(row.status)}>
                    {row.status}
                  </span>
                </td>
                <td style={{
                  padding: '16px',
                  fontSize: '14px',
                  color: '#6b7280'
                }}>
                  {row.performance}
                </td>
                <td style={{
                  padding: '16px',
                  fontSize: '14px',
                  color: '#111827',
                  textAlign: 'right',
                  fontWeight: '600'
                }}>
                  {row.balance}
                </td>
                <td style={{
                  padding: '16px',
                  fontSize: '14px',
                  color: '#111827',
                  textAlign: 'right',
                  fontWeight: '600'
                }}>
                  {row.revenueGenerated}
                </td>
                <td style={{
                  padding: '16px',
                  fontSize: '14px',
                  color: '#6b7280'
                }}>
                  {row.dateOfBirth}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div style={{
          padding: '16px 20px',
          borderTop: '1px solid #e5e7eb',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px'
        }}>
          {/* First Page Button */}
          <button
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
            style={{
              padding: '8px 12px',
              border: '1px solid #d1d5db',
              backgroundColor: currentPage === 1 ? '#f9fafb' : '#ffffff',
              color: currentPage === 1 ? '#9ca3af' : '#374151',
              borderRadius: '6px',
              cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            ≪
          </button>

          {/* Previous Page Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            style={{
              padding: '8px 12px',
              border: '1px solid #d1d5db',
              backgroundColor: currentPage === 1 ? '#f9fafb' : '#ffffff',
              color: currentPage === 1 ? '#9ca3af' : '#374151',
              borderRadius: '6px',
              cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            ‹
          </button>

          {/* Page Numbers */}
          {[...Array(totalPages)].map((_, index) => {
            const pageNum = index + 1;
            return (
              <button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                style={{
                  padding: '8px 12px',
                  border: '1px solid #d1d5db',
                  backgroundColor: currentPage === pageNum ? '#2563eb' : '#ffffff',
                  color: currentPage === pageNum ? '#ffffff' : '#374151',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '500',
                  minWidth: '40px'
                }}
              >
                {pageNum}
              </button>
            );
          })}

          {/* Next Page Button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            style={{
              padding: '8px 12px',
              border: '1px solid #d1d5db',
              backgroundColor: currentPage === totalPages ? '#f9fafb' : '#ffffff',
              color: currentPage === totalPages ? '#9ca3af' : '#374151',
              borderRadius: '6px',
              cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            ›
          </button>

          {/* Last Page Button */}
          <button
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
            style={{
              padding: '8px 12px',
              border: '1px solid #d1d5db',
              backgroundColor: currentPage === totalPages ? '#f9fafb' : '#ffffff',
              color: currentPage === totalPages ? '#9ca3af' : '#374151',
              borderRadius: '6px',
              cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            ≫
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards6;