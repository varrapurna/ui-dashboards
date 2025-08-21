import React, { useState, useEffect } from 'react';

const Cards2 = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // API data provided
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Simulate API call with provided data (replace with actual fetch when URL is available)
        const apiData = [
          {
            name: "GPS Fitness Smartwatch",
            description: "Track your workouts, heart rate, and sleep patterns with style.",
            price: 22999,
            status: "In Stock",
            isNew: true,
            unitsSold: 8240,
            imageUrl: "http://interview.surya-digital.in/images/gps-fitness-smartwatch.jpg"
          },
          {
            name: "Ergonomic Mesh Office Chair",
            description: "Designed for all-day comfort with adjustable lumbar support, armrests, and headrest. This chair provides the best comfort at the best price and there isn't anything like this in the market. It's the one chair to rule them all.",
            price: 18750,
            status: "Out of Stock",
            isNew: false,
            unitsSold: 3450,
            imageUrl: "http://interview.surya-digital.in/images/ergonomic-mesh-office-chair.jpg"
          },
          {
            name: "Waterproof Portable Bluetooth Speaker",
            description: "Your perfect companion for beach days, hikes, and pool parties.",
            price: 4999,
            status: "Low Stock",
            isNew: true,
            unitsSold: 12500,
            imageUrl: "http://interview.surya-digital.in/images/waterproof-portable-bluetooth-speaker.jpg"
          },
          {
            name: "65-inch 4K Ultra HD Smart TV",
            description: "Experience breathtaking clarity, vibrant colors, and seamless streaming.",
            price: 89900,
            status: "In Stock",
            isNew: true,
            unitsSold: 1980,
            imageUrl: "http://interview.surya-digital.in/images/65-inch-4k-ultra-hd-smart-tv.jpg"
          },
          {
            name: "Smart Robot Vacuum Cleaner",
            description: "Intelligent laser navigation and self-charging for effortless cleaning.",
            price: 28500,
            status: "Out of Stock",
            isNew: false,
            unitsSold: 6800,
            imageUrl: "http://interview.surya-digital.in/images/smart-robot-vacuum-cleaner.jpg"
          },
          {
            name: "Automatic Espresso Machine",
            description: "Craft barista-quality lattes and cappuccinos from bean to cup.",
            price: 35000,
            status: "Out of Stock",
            isNew: false,
            unitsSold: 2110,
            imageUrl: "http://interview.surya-digital.in/images/automatic-espresso-machine.jpg"
          }
        ];
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
        setProducts(apiData);
        setError(null);
      } catch (err) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div style={{ padding: '60px', backgroundColor: '#ffffff' }}>
        <div style={{ textAlign: 'center', color: '#666', fontSize: '16px' }}>
          Loading products...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: '60px', backgroundColor: '#ffffff' }}>
        <div style={{ textAlign: 'center', color: '#ff0000', fontSize: '16px' }}>
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
      <div style={{ marginBottom: '30px' }}>
        <h1 style={{ 
          fontSize: '24px', 
          fontWeight: '600', 
          color: '#000000', 
          marginBottom: '8px' 
        }}>
          Products Overview
        </h1>
        <p style={{ 
          fontSize: '14px', 
          color: '#666666' 
        }}>
          Browse our product inventory and stock levels
        </p>
      </div>

      {/* Responsive product grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '24px',
        marginBottom: '40px'
      }}>
        {products.map((product) => (
          <div 
            key={product.name}
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              overflow: 'hidden',
              transition: 'box-shadow 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {/* Product Image */}
            <div style={{ 
              position: 'relative', 
              height: '200px', 
              overflow: 'hidden' 
            }}>
              <img 
                src={product.imageUrl} 
                alt={product.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              <div style={{
                position: 'absolute',
                top: '8px',
                right: '8px',
                padding: '4px 8px',
                fontSize: '12px',
                fontWeight: '500',
                borderRadius: '12px',
                backgroundColor: product.status === 'In Stock' ? '#e6f7e6' : product.status === 'Low Stock' ? '#fff3cd' : '#fee2e2',
                color: product.status === 'In Stock' ? '#2d7d2d' : product.status === 'Low Stock' ? '#856404' : '#dc2626'
              }}>
                {product.status}
              </div>
            </div>

            {/* Product Details */}
            <div style={{ padding: '16px' }}>
              <div style={{
                fontSize: '12px',
                color: '#666666',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginBottom: '8px'
              }}>
                {product.description.substring(0, 50)}...
              </div>
              
              <h3 style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#000000',
                marginBottom: '12px',
                lineHeight: '1.3'
              }}>
                {product.name}
              </h3>
              
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '16px'
              }}>
                <span style={{
                  fontSize: '20px',
                  fontWeight: '700',
                  color: '#2563eb'
                }}>
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                <div style={{ textAlign: 'right' }}>
                  <div style={{
                    fontSize: '12px',
                    color: '#666666'
                  }}>
                    Units Sold
                  </div>
                  <div style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#000000'
                  }}>
                    {product.unitsSold.toLocaleString('en-IN')}
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div style={{ display: 'flex', gap: '8px' }}>
                <button style={{
                  flex: 1,
                  padding: '8px 16px',
                  backgroundColor: '#2563eb',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer'
                }}>
                  View Details
                </button>
                <button style={{
                  padding: '8px',
                  backgroundColor: 'transparent',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}>
                  ♡
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Statistics */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '16px'
      }}>
        <div style={{
          padding: '16px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px'
        }}>
          <div style={{
            fontSize: '12px',
            color: '#666666',
            marginBottom: '4px'
          }}>
            Total Products
          </div>
          <div style={{
            fontSize: '24px',
            fontWeight: '600',
            color: '#000000'
          }}>
            {products.length}
          </div>
        </div>
        
        <div style={{
          padding: '16px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px'
        }}>
          <div style={{
            fontSize: '12px',
            color: '#666666',
            marginBottom: '4px'
          }}>
            Total Inventory
          </div>
          <div style={{
            fontSize: '24px',
            fontWeight: '600',
            color: '#000000'
          }}>
            {products.reduce((sum, product) => sum + product.unitsSold, 0).toLocaleString('en-IN')}
          </div>
        </div>
        
        <div style={{
          padding: '16px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px'
        }}>
          <div style={{
            fontSize: '12px',
            color: '#666666',
            marginBottom: '4px'
          }}>
            Average Price
          </div>
          <div style={{
            fontSize: '24px',
            fontWeight: '600',
            color: '#000000'
          }}>
            ₹{products.length > 0 ? (products.reduce((sum, product) => sum + product.price, 0) / products.length).toFixed(2).toLocaleString('en-IN') : '0.00'}
          </div>
        </div>
        
        <div style={{
          padding: '16px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px'
        }}>
          <div style={{
            fontSize: '12px',
            color: '#666666',
            marginBottom: '4px'
          }}>
            In Stock Items
          </div>
          <div style={{
            fontSize: '24px',
            fontWeight: '600',
            color: '#16a34a'
          }}>
            {products.filter(product => product.status === 'In Stock').length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards2;