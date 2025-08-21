import React, { useState } from 'react';
import Cards2 from './Cards2';
import Cards4 from './Cards4';
import Cards5 from './Cards5'; // Import Cards5 component
import Cards6 from './Cards6'; // Import Cards6 component

function App() {
  // State to track which page we're on
  const [currentPage, setCurrentPage] = useState('cards1');

  // Hard-coded data as specified in requirements
  const cardsData = [
    {
      title: "Total Orders",
      value: 862,
      timestamp: 1754476592000
    },
    {
      title: "Ordered Items This Week",
      value: 156,
      timestamp: 1754641532000
    },
    {
      title: "Return Orders",
      value: 12,
      timestamp: 1754562992000
    },
    {
      title: "Fulfilled Orders This Week",
      value: 124,
      timestamp: 1754627132000
    }
  ];

  // Function to format timestamp to readable date
  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Cards 1 component - Same as Step 1
  const Cards1 = () => (
    <div style={{
      padding: '60px',
      backgroundColor: '#ffffff'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        {/* Cards Grid - 2x2 layout exactly like Figma */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '1fr 1fr',
          gap: '80px 120px',
          width: '100%',
          maxWidth: '600px'
        }}>
          {/* Card 1 - Top Left */}
          <div style={{ textAlign: 'left' }}>
            <div style={{
              fontSize: '48px',
              fontWeight: '600',
              color: '#000000',
              lineHeight: '1',
              marginBottom: '8px'
            }}>
              862
            </div>
            <div style={{
              fontSize: '14px',
              color: '#666666',
              fontWeight: '400',
              marginBottom: '4px'
            }}>
              Total Orders
            </div>
            <div style={{
              fontSize: '12px',
              color: '#999999',
              fontWeight: '400'
            }}>
              {formatDate(cardsData[0].timestamp)}
            </div>
          </div>

          {/* Card 2 - Top Right */}
          <div style={{ textAlign: 'left' }}>
            <div style={{
              fontSize: '48px',
              fontWeight: '600',
              color: '#000000',
              lineHeight: '1',
              marginBottom: '8px'
            }}>
              156
            </div>
            <div style={{
              fontSize: '14px',
              color: '#666666',
              fontWeight: '400',
              marginBottom: '4px'
            }}>
              Ordered Items This Week
            </div>
            <div style={{
              fontSize: '12px',
              color: '#999999',
              fontWeight: '400'
            }}>
              {formatDate(cardsData[1].timestamp)}
            </div>
          </div>

          {/* Card 3 - Bottom Left */}
          <div style={{ textAlign: 'left' }}>
            <div style={{
              fontSize: '48px',
              fontWeight: '600',
              color: '#000000',
              lineHeight: '1',
              marginBottom: '8px'
            }}>
              12
            </div>
            <div style={{
              fontSize: '14px',
              color: '#666666',
              fontWeight: '400',
              marginBottom: '4px'
            }}>
              Return Orders
            </div>
            <div style={{
              fontSize: '12px',
              color: '#999999',
              fontWeight: '400'
            }}>
              {formatDate(cardsData[2].timestamp)}
            </div>
          </div>

          {/* Card 4 - Bottom Right */}
          <div style={{ textAlign: 'left' }}>
            <div style={{
              fontSize: '48px',
              fontWeight: '600',
              color: '#000000',
              lineHeight: '1',
              marginBottom: '8px'
            }}>
              124
            </div>
            <div style={{
              fontSize: '14px',
              color: '#666666',
              fontWeight: '400',
              marginBottom: '4px'
            }}>
              Fulfilled Orders This Week
            </div>
            <div style={{
              fontSize: '12px',
              color: '#999999',
              fontWeight: '400'
            }}>
              {formatDate(cardsData[3].timestamp)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ 
      display: 'flex',
      backgroundColor: '#ffffff',
      minHeight: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Sidebar - Matching Step 2 Figma design */}
      <div style={{
        width: '200px',
        backgroundColor: '#ffffff',
        borderRight: '1px solid #e0e0e0',
        minHeight: '100vh'
      }}>
        {/* Navigation Menu */}
        <nav style={{ padding: '20px 0' }}>
          <div
            onClick={() => setCurrentPage('cards1')}
            style={{
              padding: '12px 20px',
              cursor: 'pointer',
              backgroundColor: currentPage === 'cards1' ? '#f5f5f5' : 'transparent',
              color: currentPage === 'cards1' ? '#000000' : '#666666',
              fontSize: '14px',
              fontWeight: '400',
              borderLeft: currentPage === 'cards1' ? '3px solid #333' : '3px solid transparent'
            }}
          >
            Cards 1
          </div>
          <div
            onClick={() => setCurrentPage('cards2')}
            style={{
              padding: '12px 20px',
              cursor: 'pointer',
              backgroundColor: currentPage === 'cards2' ? '#f5f5f5' : 'transparent',
              color: currentPage === 'cards2' ? '#000000' : '#666666',
              fontSize: '14px',
              fontWeight: '400',
              borderLeft: currentPage === 'cards2' ? '3px solid #333' : '3px solid transparent'
            }}
          >
            Cards 2
          </div>
          <div
            onClick={() => setCurrentPage('cards4')}
            style={{
              padding: '12px 20px',
              cursor: 'pointer',
              backgroundColor: currentPage === 'cards4' ? '#f5f5f5' : 'transparent',
              color: currentPage === 'cards4' ? '#000000' : '#666666',
              fontSize: '14px',
              fontWeight: '400',
              borderLeft: currentPage === 'cards4' ? '3px solid #333' : '3px solid transparent'
            }}
          >
            Charts
          </div>
          <div
            onClick={() => setCurrentPage('cards5')}
            style={{
              padding: '12px 20px',
              cursor: 'pointer',
              backgroundColor: currentPage === 'cards5' ? '#f5f5f5' : 'transparent',
              color: currentPage === 'cards5' ? '#000000' : '#666666',
              fontSize: '14px',
              fontWeight: '400',
              borderLeft: currentPage === 'cards5' ? '3px solid #333' : '3px solid transparent'
            }}
          >
            Table 1
          </div>
          <div
            onClick={() => setCurrentPage('cards6')}
            style={{
              padding: '12px 20px',
              cursor: 'pointer',
              backgroundColor: currentPage === 'cards6' ? '#f5f5f5' : 'transparent',
              color: currentPage === 'cards6' ? '#000000' : '#666666',
              fontSize: '14px',
              fontWeight: '400',
              borderLeft: currentPage === 'cards6' ? '3px solid #333' : '3px solid transparent'
            }}
          >
            Table 2
          </div>
        </nav>
      </div>

      {/* Main Content Area */}
      <div style={{
        flex: 1,
        backgroundColor: '#ffffff'
      }}>
        {currentPage === 'cards1' ? (
          <Cards1 />
        ) : currentPage === 'cards2' ? (
          <Cards2 />
        ) : currentPage === 'cards4' ? (
          <Cards4 />
        ) : currentPage === 'cards5' ? (
          <Cards5 />
        ) : currentPage === 'cards6' ? (
          <Cards6 />
        ) : (
          <Cards1 />
        )}
      </div>
    </div>
  );
}

export default App;