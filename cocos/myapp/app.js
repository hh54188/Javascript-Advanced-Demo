var App = cc.LayerColor.extend(
{   role:null,
    init:function(){
        this._super();
        this.initWithColor(new cc.Color4B(0,0,0,255));
        var size = cc.Director.getInstance().getWinSize();

        this.role = new Role();
        this.setTouchEnabled(true);
        this.setKeyboardEnabled(true);

        this.setPosition(new cc.Point(0,0));

        this.addChild(this.role);
        this.role.setPosition(new cc.Point(size.width/2,size.height/2));
        this.role.scheduleUpdate();
        this.schedule(this.update);

        return true;
    },
    onEnter:function(){
        this._super();
    },
    update:function(dt){
    },
    onKeyUp:function(e){

    },
    onKeyDown:function(e){
        this.role.handleKey(e);
    }
});

var Scene = cc.Scene.extend({
    onEnter:function(){
        this._super();
        var layer = new App();
        layer.init();
        this.addChild(layer);
    }
})