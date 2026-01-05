# 🎅 Santa's Warehouse

A festive web application where users can receive and send Christmas gifts! Santa's Warehouse is an interactive holiday experience that allows you to get personalized gifts, send gifts to others, and share the joy of Christmas with your loved ones.

## ✨ Features

- **Get Gifts**: Receive a personalized Christmas gift by entering an Instagram ID
- **Send Gifts**: Create and send custom Christmas gifts with personal messages and images
- **Share**: Easily share your gifts with friends and family
- **Dark Mode**: Toggle between light and dark themes for comfortable viewing
- **Responsive Design**: Beautiful UI that works seamlessly on mobile and desktop devices
- **Christmas Theme**: Festive design with custom fonts and animations

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3 (Tailwind CSS), JavaScript
- **Backend**: Node.js with Express.js
- **Styling**: 
  - Tailwind CSS for utility-first styling
  - DaisyUI for pre-built components
  - Custom CSS with Giaza font
  - UIcons Solid Rounded icon library
- **Animation**: Anime.js for smooth animations
- **Deployment**: Vercel

## 📁 Project Structure

```
santa-warehouse/
├── api/
│   └── index.js              # Express server and API routes
├── html/
│   └── index.html            # Main application page
├── css/
│   ├── input.css             # Tailwind input styles
│   ├── output.css            # Compiled Tailwind CSS
│   ├── style.css             # Custom styles
│   └── uicons-solid-rounded/ # Icon library
├── js/
│   ├── anime.min.js          # Animation library
│   └── gifts.json            # Gift database
├── fonts/
│   └── Giaza_Font/           # Custom Giaza font
├── images/                   # Project images and assets
├── package.json              # Project dependencies
├── tailwind.config.js        # Tailwind CSS configuration
└── vercel.json              # Vercel deployment config
```

## 🚀 Getting Started

### Prerequisites

- Node.js and npm installed on your system

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/tejasnayak25/santa-warehouse.git
   cd santa-warehouse
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm start
   ```

2. In a separate terminal, watch for CSS changes:
   ```bash
   npm run tailwindcss
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## 📡 API Endpoints

### GET `/`
Returns the main HTML page of the application.

### POST `/gifts`
Retrieves a gift for a specific user.

**Request Body:**
```json
{
  "name": "instagram_id"
}
```

**Response:**
```json
{
  "name": "Gift Name",
  "image": "/images/gift.png",
  "message": "Christmas message"
}
```

If the user is not found in the gifts database, a default toffee gift is returned.

## 🎯 How It Works

1. **Get Gift**: Enter your Instagram ID to receive a personalized Christmas gift
2. **Send Gift**: Click the send button to open the gift creation modal where you can:
   - Enter your name
   - Provide an image URL
   - Write a personal Christmas message
3. **Share**: Share your gift with others using the share button
4. **Theme Toggle**: Switch between light and dark modes for comfortable viewing

## 📦 Dependencies

- **express**: Web framework for Node.js
- **daisyui**: Tailwind CSS component library
- **anime.js**: JavaScript animation library
- **tailwindcss**: Utility-first CSS framework

## 🎨 Customization

### Adding New Gifts

Edit [js/gifts.json](js/gifts.json) to add new gifts. The key should be the Instagram ID in lowercase, and the value should contain the gift details.

### Styling

- Modify [css/input.css](css/input.css) for Tailwind configurations
- Edit [css/style.css](css/style.css) for custom styles
- Update [tailwind.config.js](tailwind.config.js) for Tailwind settings

## 📱 Responsive Design

The application is fully responsive with:
- Mobile-first design approach
- Optimized layouts for tablets and desktops
- Touch-friendly buttons and inputs

## 🌐 Deployment

The project is configured for deployment on Vercel. Check [vercel.json](vercel.json) for deployment configuration.

## 👤 Author

**Tejas Nayak**
- GitHub: [@tejasnayak25](https://github.com/tejasnayak25)

## 📄 License

This project is licensed under the ISC License.

## 🎄 Spread Christmas Joy!

Santa's Warehouse is all about spreading the spirit of Christmas and bringing joy to your loved ones. Use this application to send personalized gifts and make someone's Christmas special!

---

**Merry Christmas! 🎅❤️**
