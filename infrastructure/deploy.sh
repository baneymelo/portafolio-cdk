#!/bin/bash

echo "cdk diff => verifying the differences..."
cdk diff

echo "cdk deploy => deploying..."
cdk deploy