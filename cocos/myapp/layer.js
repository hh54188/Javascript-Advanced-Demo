var Role = cc.Sprite.extend({
	position_x: 0,
	position_y: 0,	
    ctor: function () {
    	var size = cc.Director.getInstance().getWinSize();
    	position_x = size / 2;
    	position_y = size / 2;
        this.initWithFile("resource/sample.jpg");
    },
    update: function (dt) {
    	this.setPosition(position_x, position_y);
    },
    handleKey: function (e) {
        if(e === cc.KEY.left) {
        	console.log('left');
        	this.position_x++;
        } else if (e === cc.KEY.right) {
        	this.position_x--;
        }
    },
	handleTouch:function(touchLocation)
    {
        if(touchLocation.x < 300)
            this.position_x--;
        else
            this.position_x++;
    },
    handleTouchMove:function(touchLocation){
        // Gross use of hardcoded width,height params.


    }
})