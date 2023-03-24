#!/bin/bash

# Set the path to the node.js service
SERVICE_PATH="/mnt/d/Projects/backend-test/src/index.js"

# Get the PID of the service
PID=`pgrep -f "$SERVICE_PATH"`

# If the PID is empty, the service is not running
if [ -z "$PID" ]; then
  # Start the service
  node "$SERVICE_PATH" &
fi