# 🛍️ Shopping Bags - E-commerce Platform

**A full-featured e-commerce website for browsing and purchasing a variety of stylish shopping bags.**

This project is a complete web application built with Node.js and Express, using EJS for server-side rendering. It demonstrates a classic monolithic architecture and includes functionalities like product listings, a shopping cart, and user management. The application is also containerized with Docker for easy deployment and setup.


## 🌟 Key Features

* **Dynamic Product Catalog:** Browse a wide range of products with detailed descriptions and images.
* **Shopping Cart Functionality:** Add, remove, and update quantities of items in your cart.
* **User Authentication:** Secure user registration and login system (if applicable).
* **Server-Side Rendering:** Fast initial page loads and SEO-friendly content rendered with EJS.
* **Containerized Environment:** Includes a `Dockerfile` for building and running the application in an isolated Docker container.

---

## 🛠️ Tech Stack

This project is built with a reliable and straightforward tech stack.

![EJS](https://img.shields.io/badge/EJS-A91E50?style=for-the-badge&logo=javascript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

---

## 🚀 Getting Started

To get a local copy up and running, you can use either the standard Node.js setup or Docker.

### Prerequisites

* [Node.js](https://nodejs.org/) (v14 or later)
* [npm](https://www.npmjs.com/)
* [Docker](https://www.docker.com/products/docker-desktop/) (for the Docker setup)

---

### Method 1: Local Setup with Node.js

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/riteshh-thakur/Shopping-Bags.git](https://github.com/riteshh-thakur/Shopping-Bags.git)
    cd Shopping-Bags
    ```

2.  **Install Dependencies:**
    Install all the necessary npm packages.
    ```sh
    npm install
    ```

3.  **Set Up Environment Variables:**
    Create a `.env` file in the root directory and add the necessary configuration (e.g., database connection string, port). You can use the example below as a template.
    ```env
    # .env.example
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/shopping-bags
    SESSION_SECRET=a-strong-and-secret-key
    ```

4.  **Start the Server:**
    Run the application.
    ```sh
    npm start
    ```
    The server will be running on `http://localhost:3000`.

---

### Method 2: Setup with Docker

This is the recommended method for a quick and consistent setup.

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/riteshh-thakur/Shopping-Bags.git](https://github.com/riteshh-thakur/Shopping-Bags.git)
    cd Shopping-Bags
    ```

2.  **Build the Docker Image:**
    Use the `Dockerfile` in the repository to build the application image.
    ```sh
    docker build -t shopping-bags-app .
    ```

3.  **Run the Docker Container:**
    Run the image as a container, mapping the port to your local machine.
    ```sh
    docker run -p 3000:3000 --name shopping-bags-container shopping-bags-app
    ```
    The application will be accessible at `http://localhost:3000`.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/riteshh-thakur/Shopping-Bags/issues).

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/NewProductCategory`)
3.  Commit your Changes (`git commit -m 'Add new product category'`)
4.  Push to the Branch (`git push origin feature/NewProductCategory`)
5.  Open a Pull Request



<p align="center">
  Built with ❤️ by Ritesh Thakur
</p>
