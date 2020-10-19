Tensorflow is developped by Google

+ Tensorflow
++ Written in C++
+++ Python binding
+++ Java binding etc

Originally got deeplearn.js --> tensorflow.js using webGL


+ Highest --> ML5
+ Middle    -->        Keras (Layers API of tensorflow)
+ Low     -->         Tensorflow(Core) theano pytorch


## The basic
``` js
const data = tf.tensor([1,2,3,4]);
// const data = tf.tensor([1,2,3,4], [2,2]); // the latter is the shape
//data.print();
console.log(data.toString());  // same as data.print()

+ tf.tensor (values, shape?, dtype?)
```
## Variabel & Operations
``` javascript
const tense = tf.tensor3d(values, shape, 'int32');
tense.data().then(function(stuff){
    //wait until the data is loaded onto the GPU
    // Called Promise in JS =>, then(), await, async
})
tense.dataSync();  // wait for it to be done
tense.get(0); // get the first one
tense.set(0,10); // x --> cannot be changed in tensor form.

const varTense = tf.variable(tense);  // make the current tense into variable 
all operation must create a new tensor.
***
```
## Memory management
```js
tf.memory().numTensors // to get the total number it used

tense.dispose(); //To dispose the tensor manually

tf.tidy(() => {
    //will tidy up all the tensor which do not be used again
    tf.keep(); // keep that tensor
})
## Layers API (Keras)
// Input -- Hidden -- Outputs
// o o o
// xxxxxx 
// o o o o 
// xxxxx
// o o
// Sequential Model!!!

// dense layer is the term that is fully connected layer!!!! vs CNN

Optimizer job is to min the loss()
predict()
fit() ==> for training the model
```
