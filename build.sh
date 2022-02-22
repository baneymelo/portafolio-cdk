#!/bin/bash

echo "::BUILDING::\n\n"

echo "portafolio/summary => building..."
cd summary && ./build.sh;

echo "portafolio/infrastructure => synthesizing..."
cd .. && cd infrastructure && ./build.sh;
