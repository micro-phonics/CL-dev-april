//file specific javascript to go here
<<<<<<< HEAD
console.log('JS file (index.js) loaded for 2.10 (Activity)');
=======
console.log('JS file (index.js) loaded for 2.1 (Activity)');
>>>>>>> 5f0b1487757b613584ebca74d61cbd858e8e0711

console.log('Place exercise logic and cuepoints specific to this file in the index.js file');

$(document).ready(function(){
<<<<<<< HEAD
    DataManager.updateStatus('inProgress','2.10');
=======
    DataManager.updateStatus('inProgress','2.1');
>>>>>>> 5f0b1487757b613584ebca74d61cbd858e8e0711
    $('#interface').load('interface.html',function(){
        console.log('Interface loaded');
    });
});

function markCompleted(){
<<<<<<< HEAD
    DataManager.updateStatus('completed','2.10');
=======
    DataManager.updateStatus('completed','2.1');
>>>>>>> 5f0b1487757b613584ebca74d61cbd858e8e0711
}

