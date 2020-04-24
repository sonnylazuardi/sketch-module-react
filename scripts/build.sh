#!/bin/sh

echo 'Building bundle'

react-scripts build && cp -Rf build/* resources
NODE_ENV=production skpm-build

# Copy resources to sketch plugin
mkdir -p sketch-react.sketchplugin/Contents/Resources/_webpack_resources
mkdir -p sketch-react.sketchplugin/Contents/Resources/_webpack_resources/static
cp -Rf resources/static* sketch-react.sketchplugin/Contents/Resources/_webpack_resources

# Rename sketch plugin name
mkdir -p dist
cp -rf sketch-react.sketchplugin dist/sketch-react-$(date +%y-%m-%d-%H-%M-%S).sketchplugin