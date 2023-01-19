var windowId = 0;
for (var x = 0; x < 5; x++) {
    try {
        if (window[x] != undefined && window[x].hasOwnProperty('mBPSApp') && window[x]['mBPSApp'] != undefined) {
            windowId = x;
            break;
        }
    } catch (e) {}
}
var keys = Object.keys(window[windowId].mBPSApp);
var keyLength = 4;
var idName = keys[keyLength];

var data = window[windowId].mBPSApp[idName].mValues.mObjects[3].mValue.mValues.mObjects[2].mValue.mValues.mObjects[1].mValue.mValues.mObjects[0].mValue.mValues.mObjects[1].mValue.mValues.mObjects;
var dataString = JSON.stringify(data);
var dataCleaner = ['"mIsDestroyed":false,', '"mAttributes":null,', /"mRandomizedObjectId":\d*,/g, /"mKey":\d*,/g, /"mSerializationFormat":\d,/g, /"mValueType":\d,/g, ',"mIsOwnerOfObjectValues":true', ',"mIsObjectOwner":true'];
for (var x in dataCleaner) {
    dataString = dataString.replaceAll(dataCleaner[x], "");
}
console.log(JSON.parse(dataString))
var win = window.open("", "json", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=780,height=200,top="+(screen.height-400)+",left="+(screen.width-840));
var beautifiedDataString = JSON.stringify(JSON.parse(dataString), null, 2);

var SetTetrisScoreBtn = document.createElement("button");
SetTetrisScoreBtn.innerText = "Set Tetris Score";
SetTetrisScoreBtn.addEventListener("click", function(){
    window[windowId].mBPSApp[idName].mValues.mObjects[3].mValue.mValues.mObjects[2].mValue.mValues.mObjects[1].mValue.mValues.mObjects[0].mValue.mValues.mObjects[1].mValue.mValues.mObjects[1].mValue.mValues.mObjects[1].mValue.mValues.mObjects[4].mValue = 1000000;
});
win.document.body.appendChild(SetTetrisScoreBtn);

var SetTetrisIBtn = document.createElement("button");
SetTetrisIBtn.innerText = "Set Tetris I Only";
SetTetrisIBtn.addEventListener("click", function(){
    var a = window[windowId].mBPSApp[idName].mValues.mObjects[3].mValue.mValues.mObjects[2].mValue.mValues.mObjects[1].mValue.mValues.mObjects[0].mValue.mValues.mObjects[1].mValue.mValues.mObjects[2].mValue.mValues.mObjects[1].mValue.mValues.mObjects[18].mValue.mValues.mObjects;
    for(var x = 0; x < a.length; x++){
        window[windowId].mBPSApp[idName].mValues.mObjects[3].mValue.mValues.mObjects[2].mValue.mValues.mObjects[1].mValue.mValues.mObjects[0].mValue.mValues.mObjects[1].mValue.mValues.mObjects[2].mValue.mValues.mObjects[1].mValue.mValues.mObjects[18].mValue.mValues.mObjects[x].mValue.mValues.mObjects[4].mValue = "I";
    }
});
win.document.body.appendChild(SetTetrisIBtn);

var SetTetrisPieceBtn = document.createElement("button");
SetTetrisPieceBtn.innerText = "Set Tetris Piece";
SetTetrisPieceBtn.addEventListener("click", function(){
    var pieces = input("I,J,L,O,S,T,Z");
    var a = window[windowId].mBPSApp[idName].mValues.mObjects[3].mValue.mValues.mObjects[2].mValue.mValues.mObjects[1].mValue.mValues.mObjects[0].mValue.mValues.mObjects[1].mValue.mValues.mObjects[2].mValue.mValues.mObjects[1].mValue.mValues.mObjects[18].mValue.mValues.mObjects;
    for(var x = 0; x < a.length; x++){
        window[windowId].mBPSApp[idName].mValues.mObjects[3].mValue.mValues.mObjects[2].mValue.mValues.mObjects[1].mValue.mValues.mObjects[0].mValue.mValues.mObjects[1].mValue.mValues.mObjects[2].mValue.mValues.mObjects[1].mValue.mValues.mObjects[18].mValue.mValues.mObjects[x].mValue.mValues.mObjects[4].mValue = pieces;
    }
});
win.document.body.appendChild(SetTetrisPieceBtn);

var TetrisDigBtn = document.createElement("button");
TetrisDigBtn.innerText = "Tetris Dig";
TetrisDigBtn.addEventListener("click", function(){
    window[windowId].mBPSApp[idName].mValues.mObjects[3].mValue.mValues.mObjects[2].mValue.mValues.mObjects[1].mValue.mValues.mObjects[0].mValue.mValues.mObjects[1].mValue.mValues.mObjects[5].mValue.mValues.mObjects[0].mValue = true;
});
win.document.body.appendChild(TetrisDigBtn);

var cssCode = document.createElement("style");
cssCode.type = "text/css";
cssCode.innerHTML = ".json { white-space: pre; font-family: monospace; }";
win.document.head.appendChild(cssCode)
var jsonParagraph = document.createElement("div");
jsonParagraph.className = "json";
jsonParagraph.innerHTML = beautifiedDataString;
win.document.body.appendChild(jsonParagraph);

