gdjs.titleCode = {};
gdjs.titleCode.localVariables = [];
gdjs.titleCode.idToCallbackMap = new Map();
gdjs.titleCode.GDgroundObjects1= [];
gdjs.titleCode.GDgroundObjects2= [];
gdjs.titleCode.GDgroundObjects3= [];
gdjs.titleCode.GDskyObjects1= [];
gdjs.titleCode.GDskyObjects2= [];
gdjs.titleCode.GDskyObjects3= [];
gdjs.titleCode.GDbgpropObjects1= [];
gdjs.titleCode.GDbgpropObjects2= [];
gdjs.titleCode.GDbgpropObjects3= [];
gdjs.titleCode.GDcloudObjects1= [];
gdjs.titleCode.GDcloudObjects2= [];
gdjs.titleCode.GDcloudObjects3= [];
gdjs.titleCode.GDfenceObjects1= [];
gdjs.titleCode.GDfenceObjects2= [];
gdjs.titleCode.GDfenceObjects3= [];
gdjs.titleCode.GDbarnObjects1= [];
gdjs.titleCode.GDbarnObjects2= [];
gdjs.titleCode.GDbarnObjects3= [];
gdjs.titleCode.GDtreeObjects1= [];
gdjs.titleCode.GDtreeObjects2= [];
gdjs.titleCode.GDtreeObjects3= [];
gdjs.titleCode.GDNewSpriteObjects1= [];
gdjs.titleCode.GDNewSpriteObjects2= [];
gdjs.titleCode.GDNewSpriteObjects3= [];
gdjs.titleCode.GDNewSprite2Objects1= [];
gdjs.titleCode.GDNewSprite2Objects2= [];
gdjs.titleCode.GDNewSprite2Objects3= [];
gdjs.titleCode.GDbarrelObjects1= [];
gdjs.titleCode.GDbarrelObjects2= [];
gdjs.titleCode.GDbarrelObjects3= [];
gdjs.titleCode.GDheystackObjects1= [];
gdjs.titleCode.GDheystackObjects2= [];
gdjs.titleCode.GDheystackObjects3= [];
gdjs.titleCode.GDcrateObjects1= [];
gdjs.titleCode.GDcrateObjects2= [];
gdjs.titleCode.GDcrateObjects3= [];
gdjs.titleCode.GDNewSprite3Objects1= [];
gdjs.titleCode.GDNewSprite3Objects2= [];
gdjs.titleCode.GDNewSprite3Objects3= [];
gdjs.titleCode.GDNewSprite4Objects1= [];
gdjs.titleCode.GDNewSprite4Objects2= [];
gdjs.titleCode.GDNewSprite4Objects3= [];
gdjs.titleCode.GDNewSprite5Objects1= [];
gdjs.titleCode.GDNewSprite5Objects2= [];
gdjs.titleCode.GDNewSprite5Objects3= [];
gdjs.titleCode.GDNewSprite6Objects1= [];
gdjs.titleCode.GDNewSprite6Objects2= [];
gdjs.titleCode.GDNewSprite6Objects3= [];
gdjs.titleCode.GD_95951_95956Objects1= [];
gdjs.titleCode.GD_95951_95956Objects2= [];
gdjs.titleCode.GD_95951_95956Objects3= [];
gdjs.titleCode.GDFOUNDObjects1= [];
gdjs.titleCode.GDFOUNDObjects2= [];
gdjs.titleCode.GDFOUNDObjects3= [];
gdjs.titleCode.GDaudioObjects1= [];
gdjs.titleCode.GDaudioObjects2= [];
gdjs.titleCode.GDaudioObjects3= [];
gdjs.titleCode.GDNewTiledSpriteObjects1= [];
gdjs.titleCode.GDNewTiledSpriteObjects2= [];
gdjs.titleCode.GDNewTiledSpriteObjects3= [];
gdjs.titleCode.GDui1Objects1= [];
gdjs.titleCode.GDui1Objects2= [];
gdjs.titleCode.GDui1Objects3= [];
gdjs.titleCode.GDNewSprite7Objects1= [];
gdjs.titleCode.GDNewSprite7Objects2= [];
gdjs.titleCode.GDNewSprite7Objects3= [];
gdjs.titleCode.GDGreenButtonObjects1= [];
gdjs.titleCode.GDGreenButtonObjects2= [];
gdjs.titleCode.GDGreenButtonObjects3= [];
gdjs.titleCode.GDColored_9595ConfettiObjects1= [];
gdjs.titleCode.GDColored_9595ConfettiObjects2= [];
gdjs.titleCode.GDColored_9595ConfettiObjects3= [];
gdjs.titleCode.GDcongratsObjects1= [];
gdjs.titleCode.GDcongratsObjects2= [];
gdjs.titleCode.GDcongratsObjects3= [];
gdjs.titleCode.GDNewSprite8Objects1= [];
gdjs.titleCode.GDNewSprite8Objects2= [];
gdjs.titleCode.GDNewSprite8Objects3= [];
gdjs.titleCode.GDstart2Objects1= [];
gdjs.titleCode.GDstart2Objects2= [];
gdjs.titleCode.GDstart2Objects3= [];
gdjs.titleCode.GDstartObjects1= [];
gdjs.titleCode.GDstartObjects2= [];
gdjs.titleCode.GDstartObjects3= [];
gdjs.titleCode.GDNewSprite9Objects1= [];
gdjs.titleCode.GDNewSprite9Objects2= [];
gdjs.titleCode.GDNewSprite9Objects3= [];
gdjs.titleCode.GDNewSprite10Objects1= [];
gdjs.titleCode.GDNewSprite10Objects2= [];
gdjs.titleCode.GDNewSprite10Objects3= [];


gdjs.titleCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("congrats"), gdjs.titleCode.GDcongratsObjects2);
{gdjs.evtTools.camera.clampCamera(runtimeScene, 0, 0, 1280, 720, "", 0);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "endgame");
}
{for(var i = 0, len = gdjs.titleCode.GDcongratsObjects2.length ;i < len;++i) {
    gdjs.titleCode.GDcongratsObjects2[i].getBehavior("Scale").setScale(0.1);
}
}
{for(var i = 0, len = gdjs.titleCode.GDcongratsObjects2.length ;i < len;++i) {
    gdjs.titleCode.GDcongratsObjects2[i].hide();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(10).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(32303364);
}
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(32303668);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "andriih-cartoon-cartoons-animation-590643.mp3", 1, true, 40, 1);
}
}

}


};gdjs.titleCode.eventsList1 = function(runtimeScene) {

{


gdjs.titleCode.eventsList0(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("start2"), gdjs.titleCode.GDstart2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.titleCode.GDstart2Objects1.length;i<l;++i) {
    if ( gdjs.titleCode.GDstart2Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.titleCode.GDstart2Objects1[k] = gdjs.titleCode.GDstart2Objects1[i];
        ++k;
    }
}
gdjs.titleCode.GDstart2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main", false);
}
}

}


};

gdjs.titleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.titleCode.GDgroundObjects1.length = 0;
gdjs.titleCode.GDgroundObjects2.length = 0;
gdjs.titleCode.GDgroundObjects3.length = 0;
gdjs.titleCode.GDskyObjects1.length = 0;
gdjs.titleCode.GDskyObjects2.length = 0;
gdjs.titleCode.GDskyObjects3.length = 0;
gdjs.titleCode.GDbgpropObjects1.length = 0;
gdjs.titleCode.GDbgpropObjects2.length = 0;
gdjs.titleCode.GDbgpropObjects3.length = 0;
gdjs.titleCode.GDcloudObjects1.length = 0;
gdjs.titleCode.GDcloudObjects2.length = 0;
gdjs.titleCode.GDcloudObjects3.length = 0;
gdjs.titleCode.GDfenceObjects1.length = 0;
gdjs.titleCode.GDfenceObjects2.length = 0;
gdjs.titleCode.GDfenceObjects3.length = 0;
gdjs.titleCode.GDbarnObjects1.length = 0;
gdjs.titleCode.GDbarnObjects2.length = 0;
gdjs.titleCode.GDbarnObjects3.length = 0;
gdjs.titleCode.GDtreeObjects1.length = 0;
gdjs.titleCode.GDtreeObjects2.length = 0;
gdjs.titleCode.GDtreeObjects3.length = 0;
gdjs.titleCode.GDNewSpriteObjects1.length = 0;
gdjs.titleCode.GDNewSpriteObjects2.length = 0;
gdjs.titleCode.GDNewSpriteObjects3.length = 0;
gdjs.titleCode.GDNewSprite2Objects1.length = 0;
gdjs.titleCode.GDNewSprite2Objects2.length = 0;
gdjs.titleCode.GDNewSprite2Objects3.length = 0;
gdjs.titleCode.GDbarrelObjects1.length = 0;
gdjs.titleCode.GDbarrelObjects2.length = 0;
gdjs.titleCode.GDbarrelObjects3.length = 0;
gdjs.titleCode.GDheystackObjects1.length = 0;
gdjs.titleCode.GDheystackObjects2.length = 0;
gdjs.titleCode.GDheystackObjects3.length = 0;
gdjs.titleCode.GDcrateObjects1.length = 0;
gdjs.titleCode.GDcrateObjects2.length = 0;
gdjs.titleCode.GDcrateObjects3.length = 0;
gdjs.titleCode.GDNewSprite3Objects1.length = 0;
gdjs.titleCode.GDNewSprite3Objects2.length = 0;
gdjs.titleCode.GDNewSprite3Objects3.length = 0;
gdjs.titleCode.GDNewSprite4Objects1.length = 0;
gdjs.titleCode.GDNewSprite4Objects2.length = 0;
gdjs.titleCode.GDNewSprite4Objects3.length = 0;
gdjs.titleCode.GDNewSprite5Objects1.length = 0;
gdjs.titleCode.GDNewSprite5Objects2.length = 0;
gdjs.titleCode.GDNewSprite5Objects3.length = 0;
gdjs.titleCode.GDNewSprite6Objects1.length = 0;
gdjs.titleCode.GDNewSprite6Objects2.length = 0;
gdjs.titleCode.GDNewSprite6Objects3.length = 0;
gdjs.titleCode.GD_95951_95956Objects1.length = 0;
gdjs.titleCode.GD_95951_95956Objects2.length = 0;
gdjs.titleCode.GD_95951_95956Objects3.length = 0;
gdjs.titleCode.GDFOUNDObjects1.length = 0;
gdjs.titleCode.GDFOUNDObjects2.length = 0;
gdjs.titleCode.GDFOUNDObjects3.length = 0;
gdjs.titleCode.GDaudioObjects1.length = 0;
gdjs.titleCode.GDaudioObjects2.length = 0;
gdjs.titleCode.GDaudioObjects3.length = 0;
gdjs.titleCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.titleCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.titleCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.titleCode.GDui1Objects1.length = 0;
gdjs.titleCode.GDui1Objects2.length = 0;
gdjs.titleCode.GDui1Objects3.length = 0;
gdjs.titleCode.GDNewSprite7Objects1.length = 0;
gdjs.titleCode.GDNewSprite7Objects2.length = 0;
gdjs.titleCode.GDNewSprite7Objects3.length = 0;
gdjs.titleCode.GDGreenButtonObjects1.length = 0;
gdjs.titleCode.GDGreenButtonObjects2.length = 0;
gdjs.titleCode.GDGreenButtonObjects3.length = 0;
gdjs.titleCode.GDColored_9595ConfettiObjects1.length = 0;
gdjs.titleCode.GDColored_9595ConfettiObjects2.length = 0;
gdjs.titleCode.GDColored_9595ConfettiObjects3.length = 0;
gdjs.titleCode.GDcongratsObjects1.length = 0;
gdjs.titleCode.GDcongratsObjects2.length = 0;
gdjs.titleCode.GDcongratsObjects3.length = 0;
gdjs.titleCode.GDNewSprite8Objects1.length = 0;
gdjs.titleCode.GDNewSprite8Objects2.length = 0;
gdjs.titleCode.GDNewSprite8Objects3.length = 0;
gdjs.titleCode.GDstart2Objects1.length = 0;
gdjs.titleCode.GDstart2Objects2.length = 0;
gdjs.titleCode.GDstart2Objects3.length = 0;
gdjs.titleCode.GDstartObjects1.length = 0;
gdjs.titleCode.GDstartObjects2.length = 0;
gdjs.titleCode.GDstartObjects3.length = 0;
gdjs.titleCode.GDNewSprite9Objects1.length = 0;
gdjs.titleCode.GDNewSprite9Objects2.length = 0;
gdjs.titleCode.GDNewSprite9Objects3.length = 0;
gdjs.titleCode.GDNewSprite10Objects1.length = 0;
gdjs.titleCode.GDNewSprite10Objects2.length = 0;
gdjs.titleCode.GDNewSprite10Objects3.length = 0;

gdjs.titleCode.eventsList1(runtimeScene);
gdjs.titleCode.GDgroundObjects1.length = 0;
gdjs.titleCode.GDgroundObjects2.length = 0;
gdjs.titleCode.GDgroundObjects3.length = 0;
gdjs.titleCode.GDskyObjects1.length = 0;
gdjs.titleCode.GDskyObjects2.length = 0;
gdjs.titleCode.GDskyObjects3.length = 0;
gdjs.titleCode.GDbgpropObjects1.length = 0;
gdjs.titleCode.GDbgpropObjects2.length = 0;
gdjs.titleCode.GDbgpropObjects3.length = 0;
gdjs.titleCode.GDcloudObjects1.length = 0;
gdjs.titleCode.GDcloudObjects2.length = 0;
gdjs.titleCode.GDcloudObjects3.length = 0;
gdjs.titleCode.GDfenceObjects1.length = 0;
gdjs.titleCode.GDfenceObjects2.length = 0;
gdjs.titleCode.GDfenceObjects3.length = 0;
gdjs.titleCode.GDbarnObjects1.length = 0;
gdjs.titleCode.GDbarnObjects2.length = 0;
gdjs.titleCode.GDbarnObjects3.length = 0;
gdjs.titleCode.GDtreeObjects1.length = 0;
gdjs.titleCode.GDtreeObjects2.length = 0;
gdjs.titleCode.GDtreeObjects3.length = 0;
gdjs.titleCode.GDNewSpriteObjects1.length = 0;
gdjs.titleCode.GDNewSpriteObjects2.length = 0;
gdjs.titleCode.GDNewSpriteObjects3.length = 0;
gdjs.titleCode.GDNewSprite2Objects1.length = 0;
gdjs.titleCode.GDNewSprite2Objects2.length = 0;
gdjs.titleCode.GDNewSprite2Objects3.length = 0;
gdjs.titleCode.GDbarrelObjects1.length = 0;
gdjs.titleCode.GDbarrelObjects2.length = 0;
gdjs.titleCode.GDbarrelObjects3.length = 0;
gdjs.titleCode.GDheystackObjects1.length = 0;
gdjs.titleCode.GDheystackObjects2.length = 0;
gdjs.titleCode.GDheystackObjects3.length = 0;
gdjs.titleCode.GDcrateObjects1.length = 0;
gdjs.titleCode.GDcrateObjects2.length = 0;
gdjs.titleCode.GDcrateObjects3.length = 0;
gdjs.titleCode.GDNewSprite3Objects1.length = 0;
gdjs.titleCode.GDNewSprite3Objects2.length = 0;
gdjs.titleCode.GDNewSprite3Objects3.length = 0;
gdjs.titleCode.GDNewSprite4Objects1.length = 0;
gdjs.titleCode.GDNewSprite4Objects2.length = 0;
gdjs.titleCode.GDNewSprite4Objects3.length = 0;
gdjs.titleCode.GDNewSprite5Objects1.length = 0;
gdjs.titleCode.GDNewSprite5Objects2.length = 0;
gdjs.titleCode.GDNewSprite5Objects3.length = 0;
gdjs.titleCode.GDNewSprite6Objects1.length = 0;
gdjs.titleCode.GDNewSprite6Objects2.length = 0;
gdjs.titleCode.GDNewSprite6Objects3.length = 0;
gdjs.titleCode.GD_95951_95956Objects1.length = 0;
gdjs.titleCode.GD_95951_95956Objects2.length = 0;
gdjs.titleCode.GD_95951_95956Objects3.length = 0;
gdjs.titleCode.GDFOUNDObjects1.length = 0;
gdjs.titleCode.GDFOUNDObjects2.length = 0;
gdjs.titleCode.GDFOUNDObjects3.length = 0;
gdjs.titleCode.GDaudioObjects1.length = 0;
gdjs.titleCode.GDaudioObjects2.length = 0;
gdjs.titleCode.GDaudioObjects3.length = 0;
gdjs.titleCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.titleCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.titleCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.titleCode.GDui1Objects1.length = 0;
gdjs.titleCode.GDui1Objects2.length = 0;
gdjs.titleCode.GDui1Objects3.length = 0;
gdjs.titleCode.GDNewSprite7Objects1.length = 0;
gdjs.titleCode.GDNewSprite7Objects2.length = 0;
gdjs.titleCode.GDNewSprite7Objects3.length = 0;
gdjs.titleCode.GDGreenButtonObjects1.length = 0;
gdjs.titleCode.GDGreenButtonObjects2.length = 0;
gdjs.titleCode.GDGreenButtonObjects3.length = 0;
gdjs.titleCode.GDColored_9595ConfettiObjects1.length = 0;
gdjs.titleCode.GDColored_9595ConfettiObjects2.length = 0;
gdjs.titleCode.GDColored_9595ConfettiObjects3.length = 0;
gdjs.titleCode.GDcongratsObjects1.length = 0;
gdjs.titleCode.GDcongratsObjects2.length = 0;
gdjs.titleCode.GDcongratsObjects3.length = 0;
gdjs.titleCode.GDNewSprite8Objects1.length = 0;
gdjs.titleCode.GDNewSprite8Objects2.length = 0;
gdjs.titleCode.GDNewSprite8Objects3.length = 0;
gdjs.titleCode.GDstart2Objects1.length = 0;
gdjs.titleCode.GDstart2Objects2.length = 0;
gdjs.titleCode.GDstart2Objects3.length = 0;
gdjs.titleCode.GDstartObjects1.length = 0;
gdjs.titleCode.GDstartObjects2.length = 0;
gdjs.titleCode.GDstartObjects3.length = 0;
gdjs.titleCode.GDNewSprite9Objects1.length = 0;
gdjs.titleCode.GDNewSprite9Objects2.length = 0;
gdjs.titleCode.GDNewSprite9Objects3.length = 0;
gdjs.titleCode.GDNewSprite10Objects1.length = 0;
gdjs.titleCode.GDNewSprite10Objects2.length = 0;
gdjs.titleCode.GDNewSprite10Objects3.length = 0;


return;

}

gdjs['titleCode'] = gdjs.titleCode;
