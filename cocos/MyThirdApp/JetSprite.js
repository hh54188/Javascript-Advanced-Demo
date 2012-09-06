var JetSprite = cc.Sprite.extend({
    _currentRotation:0,
    position_x:0,
    position_y:0,
    ctor:function(){
        this.initWithFile("images/jet.png");
        var size = cc.Director.getInstance().getWinSize();
        this.position_x = size.width / 2;
        this.position_y = size.height / 2;

        console.log(this.position_x, this.position_y);
    },
    update:function(dt){
        this.setRotation(this._currentRotation);
        this.setPosition(new cc.Point(this.position_x, this.position_y));
    },
    handleKey:function(e)
    {
	    if(e === cc.KEY.left)
	    {
            this._currentRotation--;
            this.position_x--;
            console.log(this.position_x);

	    }
        else if(e === cc.KEY.right)
            this._currentRotation++;
            this.position_x++;
            console.log(this.position_x);

        if(this._currentRotation < 0) this._currentRotation = 360;
        if(this._currentRotation > 360) this._currentRotation = 0;
    }
    // handleTouch:function(touchLocation)
    // {
    //     if(touchLocation.x < 300)
    //         this._currentRotation = 0;
    //     else
    //         this._currentRotation = 180;
    // },
    // handleTouchMove:function(touchLocation){
    //     // Gross use of hardcoded width,height params.
    //     var angle = Math.atan2(touchLocation.x-300,touchLocation.y-300);

    //     angle = angle * (180/Math.PI);
    //     this._currentRotation = angle;

    // }
});