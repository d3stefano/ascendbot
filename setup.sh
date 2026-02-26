#!/bin/bash

# Check for Node.js
if ! command -v node &> /dev/null
then
    echo "Node.js could not be found"
    exit
fi

# Check for npm
if ! command -v npm &> /dev/null
then
    echo "npm could not be found"
    exit
fi

# Copy .env.example to .env
cp .env.example .env

# Install dependencies
npm install

# Create required directories
mkdir -p ./logs
mkdir -p ./uploads

echo "Setup completed successfully!"