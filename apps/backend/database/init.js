const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

// Database file path
const dbPath = path.join(__dirname, 'simple_storefront.db');
const schemaPath = path.join(__dirname, 'schema.sql');

console.log('🚀 Initializing Simple Storefront Database...');

// Create database connection
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('❌ Error creating database:', err.message);
    process.exit(1);
  }
  console.log('✅ Connected to SQLite database');
});

// Read and execute schema
fs.readFile(schemaPath, 'utf8', (err, schema) => {
  if (err) {
    console.error('❌ Error reading schema file:', err.message);
    process.exit(1);
  }

  // Execute schema
  db.exec(schema, (err) => {
    if (err) {
      console.error('❌ Error executing schema:', err.message);
      process.exit(1);
    }
    console.log('✅ Database schema created successfully');

    // Insert sample data
    insertSampleData();
  });
});

function insertSampleData() {
  console.log('📝 Inserting sample data...');

  // Insert sample products
  const sampleProducts = [
    {
      name: 'React Ebook',
      description: 'Complete guide to React development',
      price: 29.99,
      category: 'ebooks',
      tags: JSON.stringify(['react', 'javascript', 'frontend']),
      is_free: false,
      digital_file_url: 'https://example.com/react-ebook.pdf',
      stock: 100,
      image_url: 'https://example.com/react-ebook.jpg'
    },
    {
      name: 'Node.js Course',
      description: 'Learn Node.js from scratch to advanced',
      price: 49.99,
      category: 'courses',
      tags: JSON.stringify(['nodejs', 'javascript', 'backend']),
      is_free: false,
      digital_file_url: 'https://example.com/nodejs-course.zip',
      stock: 50,
      image_url: 'https://example.com/nodejs-course.jpg'
    },
    {
      name: 'Free CSS Template',
      description: 'Beautiful CSS template for your projects',
      price: 0.00,
      category: 'templates',
      tags: JSON.stringify(['css', 'template', 'free']),
      is_free: true,
      digital_file_url: 'https://example.com/css-template.zip',
      stock: 999,
      image_url: 'https://example.com/css-template.jpg'
    }
  ];

  const insertProduct = db.prepare(`
    INSERT INTO products (name, description, price, category, tags, is_free, digital_file_url, stock, image_url)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  sampleProducts.forEach((product, index) => {
    insertProduct.run([
      product.name,
      product.description,
      product.price,
      product.category,
      product.tags,
      product.is_free,
      product.digital_file_url,
      product.stock,
      product.image_url
    ], function(err) {
      if (err) {
        console.error(`❌ Error inserting product ${index + 1}:`, err.message);
      } else {
        console.log(`✅ Sample product ${index + 1} inserted (ID: ${this.lastID})`);
      }
    });
  });

  // Insert sample admin user
  const bcrypt = require('bcryptjs');
  const hashedPassword = bcrypt.hashSync('admin123', 10);
  
  db.run(`
    INSERT INTO users (email, password, name, role)
    VALUES (?, ?, ?, ?)
  `, ['admin@simple-storefront.com', hashedPassword, 'Admin User', 'admin'], function(err) {
    if (err) {
      console.error('❌ Error inserting admin user:', err.message);
    } else {
      console.log('✅ Admin user created (ID: ' + this.lastID + ')');
      console.log('📧 Email: admin@simple-storefront.com');
      console.log('🔑 Password: admin123');
    }

    // Close database
    db.close((err) => {
      if (err) {
        console.error('❌ Error closing database:', err.message);
      } else {
        console.log('✅ Database closed successfully');
        console.log('🎉 Database initialization complete!');
        console.log('📁 Database file: ' + dbPath);
      }
    });
  });
} 