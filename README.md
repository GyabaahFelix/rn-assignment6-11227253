# React Native Shopping Cart

This is a simple React Native shopping cart application that showcases a list of products and allows users to add them to a cart and view the cart's contents.

## Table of Contents

- [React Native Shopping Cart](#react-native-shopping-cart)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Home Screen](#home-screen)
    - [Cart Screen](#cart-screen)
  - [Project Structure](#project-structure)
  - [Screenshots](#screenshots)
  - [Author](#author)

## Introduction

This project demonstrates the implementation of a shopping cart feature in a React Native application. It includes two main screens: Home and Cart. Users can browse products on the Home screen and add them to their cart. The Cart screen displays the selected items and calculates the total cost.

## Features

- Display a list of products
- Add products to the cart
- Remove products from the cart
- Persist cart items using AsyncStorage

## Installation

1. Clone the repository:

    
    git clone https://github.com/GyabaahFelix/rn-assignment6-11227253.git
    cd react-native-shopping-cart
    

2. Install dependencies:

    
    npm install
    

3. Run the application:

    
    npx react-native run-android  # For Android
    npx react-native run-ios      # For iOS
    

## Usage

### Home Screen

- Browse products and add them to your cart by tapping the shopping bag icon.
- Navigate to the Cart screen by tapping the cart icon in the header.

### Cart Screen

- View the items added to your cart.
- Remove items from the cart by tapping the remove button.
- See the estimated total cost of the items in your cart.

## Project Structure


├── assets                  # Image assets
├── src
│   ├── components
│   │   ├── Cart.js         # Component to display cart items
│   │   ├── ProductList.js  # Component to display product list
│   ├── screens
│   │   ├── HomeScreen.js   # Home screen
│   │   ├── CartScreen.js   # Cart screen
│   ├── utils
│       ├── storage.js      # Utility functions for AsyncStorage
├── App.js                  # Entry point of the application
├── README.md


## Screenshots
![screenshot1](../assets/screenshot1.jpeg)
![screenshot2](../assets/screenshot2.jpeg)
![screenshot3](../assets/screenshot3.jpeg)
![screenshot4](../assets/screenshot4.jpeg)
![screenshot5](../assets/screenshot5.jpeg)


## Author

*Gyabaah Felix*  
Student ID: 11227253