# tensorflowjs-mnist-classifier
CNN Classifier for NMIST using Tensorflow.js

This is a demostration mostly based on the Tensorflow.js MNIST lab [https://www.tensorflow.org/js/tutorials/training/handwritten_digit_cnn](https://www.tensorflow.org/js/tutorials/training/handwritten_digit_cnn)

I have added several key enhancments:

- Setup the application for ES6 Modules with Webpack
- Configured a hot-loading Webpack dev server
- Added buttons to Start Training, Save the Model to Local Storage and Load the Model to Local Storage
- Added a canvas that allows you to draw a handwritten digit and then run it through the trained Neural Network Model

A demonstration can be found here: [https://freeman-g.github.io/tensorflowjs-mnist-classifier/dist/](https://freeman-g.github.io/tensorflowjs-mnist-classifier/dist/)

---

To install, clone the repo and run:
```
npm install
node dev-server
```

To create a production build in the `dist` directory, run:
```
npx webpack
```
