const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());

// ----------- Product Data -----------
const products = [
  {
    id: 1,
    name: "GPS Fitness Smartwatch",
    description: "Track your workouts, heart rate, and sleep patterns with style.",
    price: 22999,
    status: "In Stock",
    isNew: true,
    unitsSold: 8240,
    imageUrl: "http://interview.surya-digital.in/images/gps-fitness-smartwatch.jpg"
  },
  {
    id: 2,
    name: "Ergonomic Mesh Office Chair",
    description: "Designed for all-day comfort with adjustable lumbar support, armrests, and headrest. This chair provides the best comfort at the best price and there isn't anything like this in the market. It's the one chair to rule them all.",
    price: 18750,
    status: "Out of Stock",
    isNew: false,
    unitsSold: 3450,
    imageUrl: "http://interview.surya-digital.in/images/ergonomic-mesh-office-chair.jpg"
  },
  {
    id: 3,
    name: "Waterproof Portable Bluetooth Speaker",
    description: "Your perfect companion for beach days, hikes, and pool parties.",
    price: 4999,
    status: "Low Stock",
    isNew: true,
    unitsSold: 12500,
    imageUrl: "http://interview.surya-digital.in/images/waterproof-portable-bluetooth-speaker.jpg"
  },
  {
    id: 4,
    name: "65-inch 4K Ultra HD Smart TV",
    description: "Experience breathtaking clarity, vibrant colors, and seamless streaming.",
    price: 89900,
    status: "In Stock",
    isNew: true,
    unitsSold: 1980,
    imageUrl: "http://interview.surya-digital.in/images/65-inch-4k-ultra-hd-smart-tv.jpg"
  },
  {
    id: 5,
    name: "Smart Robot Vacuum Cleaner",
    description: "Intelligent laser navigation and self-charging for effortless cleaning.",
    price: 28500,
    status: "Out of Stock",
    isNew: false,
    unitsSold: 6800,
    imageUrl: "http://interview.surya-digital.in/images/smart-robot-vacuum-cleaner.jpg"
  },
  {
    id: 6,
    name: "Automatic Espresso Machine",
    description: "Craft barista-quality lattes and cappuccinos from bean to cup.",
    price: 35000,
    status: "Out of Stock",
    isNew: false,
    unitsSold: 2110,
    imageUrl: "http://interview.surya-digital.in/images/automatic-espresso-machine.jpg"
  }
];

// ----------- Employee Data -----------
const employees = [
  {
    email: "priya.patel@example.com",
    location: "Delhi, India",
    status: "Active",
    performance: "Good",
    balance: "₹6,12,890.50",
    revenue: "₹15,32,226.25",
    dob: "1988-05-12"
  },
  {
    email: "rohan.gupta@example.com",
    location: "Bengaluru, India",
    status: "Active",
    performance: "Poor",
    balance: "₹3,75,109.20",
    revenue: "₹9,37,773.00",
    dob: "1992-09-23"
  },
  {
    email: "ananya.singh@example.com",
    location: "Chennai, India",
    status: "Probation",
    performance: "Excellent",
    balance: "₹5,88,450.00",
    revenue: "₹14,71,125.00",
    dob: "1995-02-18"
  },
  {
    email: "vikram.kumar@example.com",
    location: "Hyderabad, India",
    status: "Active",
    performance: "Average",
    balance: "₹4,99,675.40",
    revenue: "₹12,49,188.50",
    dob: "1985-11-30"
  },
  {
    email: "ishaan.reddy@example.com",
    location: "Pune, India",
    status: "Inactive",
    performance: "Good",
    balance: "₹3,10,000.00",
    revenue: "₹7,75,000.00",
    dob: "1998-07-07"
  },
  {
    email: "meera.iyer@example.com",
    location: "Kolkata, India",
    status: "Probation",
    performance: "Poor",
    balance: "₹4,20,532.80",
    revenue: "₹10,51,332.00",
    dob: "1991-04-01"
  },
  {
    email: "arjun.nair@example.com",
    location: "Ahmedabad, India",
    status: "Probation",
    performance: "Excellent",
    balance: "₹3,55,500.90",
    revenue: "₹8,88,752.25",
    dob: "1993-08-15"
  },
  {
    email: "sneha.joshi@example.com",
    location: "Jaipur, India",
    status: "Active",
    performance: "Average",
    balance: "₹7,01,150.60",
    revenue: "₹17,52,876.50",
    dob: "1989-12-25"
  },
  {
    email: "kabir.malhotra@example.com",
    location: "Lucknow, India",
    status: "Active",
    performance: "Good",
    balance: "₹6,50,000.00",
    revenue: "₹16,25,000.00",
    dob: "1987-06-10"
  },
  {
    email: "diya.mehta@example.com",
    location: "Surat, India",
    status: "Active",
    performance: "Poor",
    balance: "₹2,95,890.25",
    revenue: "₹7,39,725.63",
    dob: "1996-10-05"
  }
];

// ----------- Routes -----------

// Root route
app.get("/", (req, res) => {
  res.send("✅ Server is running! Use /products or /employees to fetch data.");
});

// Products API
app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }
  res.json(product);
});

// Employees API (paginated, 5 per page)
app.get("/employees", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 5;
  const start = (page - 1) * limit;
  const end = start + limit;

  const paginatedData = employees.slice(start, end);

  res.json({
    currentPage: page,
    totalPages: Math.ceil(employees.length / limit),
    data: paginatedData
  });
});

// Get single employee by email
app.get("/employees/:email", (req, res) => {
  const employee = employees.find(e => e.email === req.params.email);
  if (!employee) {
    return res.status(404).json({ error: "Employee not found" });
  }
  res.json(employee);
});

// ----------- Start Server -----------
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
