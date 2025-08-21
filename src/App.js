import React from 'react';

function App() {
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

  return (
    <div style={{ 
      backgroundColor: '#ffffff',
      minHeight: '100vh',
      padding: '60px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Main content area */}
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
          <div style={{
            textAlign: 'left'
          }}>
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
          <div style={{
            textAlign: 'left'
          }}>
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
          <div style={{
            textAlign: 'left'
          }}>
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
          <div style={{
            textAlign: 'left'
          }}>
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
}

export default App;