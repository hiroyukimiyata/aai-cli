#!/bin/bash

# Check if the correct number of arguments are provided
if [ "$#" -ne 1 ]; then
  echo "Usage: $0 <argument 1>"
  exit 1
fi

# Assign the arguments to variables
ARG1=$1

# Execute the Node.js script with the arguments
# Please write a cd command to move to the 
node ./scripts/aai-cli.cjs "$ARG1"
