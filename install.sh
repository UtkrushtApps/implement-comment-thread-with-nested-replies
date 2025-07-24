#!/bin/bash
set -e

if ! command -v npm &> /dev/null; then
  echo "npm could not be found. Please install Node.js and npm."
  exit 1
fi

npm install

if [ ! -d "node_modules" ]; then
  echo "Dependencies failed to install."
  exit 2
fi

echo "Install complete."
