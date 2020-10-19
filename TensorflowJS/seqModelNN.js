//Input -- Hidden -- Outputs
// o o o
// xxxxxx 
// o o o o 
// xxxxx
// o o
// Sequential Model!!! generic, tf.model()


const seqModel = tf.sequential({
    layers: [
        tf.layers.dense({
            inputShape: [2],
            units: 3,
            activation: 'sigmoid'
        }),
        tf.layers.dense({
            units: 3,
            activation: 'sigmoid'
        })
    ]
});

const LearningRate = 10;
seqModel.compile({
    optimizer: tf.train.sgd(LearningRate),
    loss: tf.losses.meanSquaredError
});

// =========== data =================
const xs_train = tf.tensor2d([
    [0.1,0.11],
    [0.2,0.22],
    [0.3,0.33],
    [0.4,0.44],
    [0.5,0.55],
    [0.6,0.66],
    [0.7,0.77],
    [0.8,0.88],
    [0.9,0.99]
]);

const ys_train = tf.tensor2d([
    [0.900, 0.100, 0.250],
    [0.800, 0.200, 0.250],
    [0.700, 0.300, 0.250],
    [0.600, 0.400, 0.250],
    [0.500, 0.500, 0.250],
    [0.400, 0.600, 0.250],
    [0.300, 0.700, 0.250],
    [0.200, 0.800, 0.250],
    [0.100, 0.900, 0.250]
]);

// histroy is used to check the porperty of training process
// seqModel.fit(xs_train, ys_train, {
//     //config
//     // verbose: true,
//     // epoche: 100
// }).then((response) => console.log(response.history.loss[0]));
// ==> write it this way
train().then(() => {
    console.log('training Complete');

    xs_predict = tf.tensor2d([
        [0.25, 0.25],
        [0.35, 0.35],
        [0.5, 0.5],
        [0.85, 0.85]
    ]);
    let outputs = seqModel.predict(xs_predict);
    outputs.print();
});

async function train(){
    for(let i = 0; i < 1000; i++){
        const response = await seqModel.fit(xs_train, ys_train, {
            verbose: true,
            epoche: 5000,
            shuffle: true,
        });
        console.log(response.history.loss[0]);
    }
}


// const xs = tf.tensor2d([
//     [0.25, 0.92],
//     [0.45, 0.3],
//     [0.6, 0.5],
//     [0.7, 0.4],
// ]);

// let ys = seqModel.predict(xs);
// ys.print();