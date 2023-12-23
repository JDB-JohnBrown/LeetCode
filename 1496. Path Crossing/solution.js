/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    let steps = {0:[0]};
    let xpos = 0;
    let ypos = 0;
    let result = false;
    for(let i = 0; i < path.length; i++){
        switch (path[i]){
            case 'N':
                ypos++;
                if (steps[xpos].includes(ypos)){
                    result = true;                    
                } else {
                    steps[xpos].push(ypos);
                }
                break;
            case 'S':
                ypos--;
                if (steps[xpos].includes(ypos)){
                    result = true;                    
                } else {
                    steps[xpos].push(ypos);
                }
                break;
            case 'E':
                xpos++;
                if (Object.hasOwn(steps, xpos)){
                    if (steps[xpos].includes(ypos)){
                        result = true;                    
                    } else {
                        steps[xpos].push(ypos);
                    }
                } else {
                    steps[xpos] = [ypos]
                }
                break;
            case 'W':
                xpos--;
                if (Object.hasOwn(steps, xpos)){
                    if (steps[xpos].includes(ypos)){
                        result = true;                    
                    } else {
                        steps[xpos].push(ypos);
                    }
                } else {
                    steps[xpos] = [ypos]
                }
                break;
        }
        if (result) {break;}
    }
    return result;
};

var runTestCase = function() {
    console.log(isPathCrossing("NES"));   //false
    console.log(isPathCrossing("NESWW")); //true
}