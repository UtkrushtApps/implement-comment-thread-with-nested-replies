#!/bin/bash
set -e

bash ./install.sh

echo "Starting development server..."
npm run start
