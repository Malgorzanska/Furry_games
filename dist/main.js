!function(t){var r={};function e(i){if(r[i])return r[i].exports;var o=r[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=r,e.d=function(t,r,i){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:i})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)e.d(i,o,function(r){return t[r]}.bind(null,o));return i},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=0)}([function(t,r,e){e(1),t.exports=e(5)},function(t,r,e){var i=new(e(2));i.startGame(),i.showFurry(),i.showCoin()},function(t,r,e){var i=e(3),o=e(4);function n(){this.board=document.querySelectorAll("section#board div"),this.furry=new o,this.coin=new i,this.score=0;var t=this;document.addEventListener("keydown",function(r){t.turnFurry(r)})}n.prototype.index=function(t,r){return t+10*r},n.prototype.showFurry=function(){this.board[this.index(this.furry.x,this.furry.y)].classList.add("furry")},n.prototype.showCoin=function(){this.board[this.index(this.coin.x,this.coin.y)].classList.add("coin")},n.prototype.startGame=function(){var t=this;this.idSetInterval=setInterval(function(){t.moveFurry()},250)},n.prototype.moveFurry=function(){this.hideVisibleFurry(),"right"===this.furry.direction?(this.furry.x=this.furry.x+1,this.gameOver()):"left"===this.furry.direction?(this.furry.x=this.furry.x-1,this.gameOver()):"down"===this.furry.direction?(this.furry.y=this.furry.y+1,this.gameOver()):"up"===this.furry.direction&&(this.furry.y=this.furry.y-1,this.gameOver()),this.showFurry(),this.checkCoinColision()},n.prototype.hideVisibleFurry=function(){document.querySelector(".furry").classList.remove("furry")},n.prototype.turnFurry=function(t){switch(t.which){case 37:this.furry.direction="left";break;case 38:this.furry.direction="up";break;case 39:this.furry.direction="right";break;case 40:this.furry.direction="down"}},n.prototype.checkCoinCollision=function(){this.furry.x===this.coin.x&&this.furry.y===this.coin.y&&(document.querySelector(".coin").classList.remove("coin"),this.score=this.score+1,document.querySelector("#score strong").innerText=this.score,this.coin=new i,this.showCoin())},n.prototype.gameOver=function(){if(this.furry.x<0||this.furry.x>9||this.furry.y<0||this.furry.y>9){clearInterval(this.idSetInterval);var t=document.querySelector("#over");t.classList.remove("invisible"),t.querySelector("h1 span").textContent=this.score}},t.exports=n},function(t,r){t.exports=function(){this.x=Math.floor(10*Math.random()),this.y=Math.floor(10*Math.random())}},function(t,r){t.exports=function(){this.x=0,this.y=0,this.direction="right"}},function(t,r){!function(t){var r={};function e(i){if(r[i])return r[i].exports;var o=r[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=r,e.d=function(t,r,i){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:i})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)e.d(i,o,function(r){return t[r]}.bind(null,o));return i},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=0)}([function(t,r,e){console.log("hello");var i=new(e(1));i.startGame(),i.showFurry(),i.showCoin()},function(t,r,e){var i=e(2),o=e(3);function n(){this.board=document.querySelectorAll("section#board div"),this.furry=new o,this.coin=new i,this.score=0;var t=this;document.addEventListener("keydown",function(r){t.turnFurry(r)})}n.prototype.index=function(t,r){return t+10*r},n.prototype.showFurry=function(){this.board[this.index(this.furry.x,this.furry.y)].classList.add("furry")},n.prototype.showCoin=function(){this.board[this.index(this.coin.x,this.coin.y)].classList.add("coin")},n.prototype.startGame=function(){var t=this;this.idSetInterval=setInterval(function(){t.moveFurry()},250)},n.prototype.moveFurry=function(){this.hideVisibleFurry(),"right"===this.furry.direction?(this.furry.x=this.furry.x+1,this.gameOver()):"left"===this.furry.direction?(this.furry.x=this.furry.x-1,this.gameOver()):"down"===this.furry.direction?(this.furry.y=this.furry.y+1,this.gameOver()):"up"===this.furry.direction&&(this.furry.y=this.furry.y-1,this.gameOver()),this.showFurry(),this.checkCoinColision()},n.prototype.hideVisibleFurry=function(){document.querySelector(".furry").classList.remove("furry")},n.prototype.turnFurry=function(t){switch(t.which){case 37:this.furry.direction="left";break;case 38:this.furry.direction="up";break;case 39:this.furry.direction="right";break;case 40:this.furry.direction="down"}},n.prototype.checkCoinColision=function(){this.furry.x===this.coin.x&&this.furry.y===this.coin.y&&(document.querySelector(".coin").classList.remove("coin"),this.score=this.score+1,document.querySelector("#score strong").innerText=this.score,this.coin=new i,this.showCoin())},n.prototype.gameOver=function(){if(this.furry.x<0||this.furry.x>9||this.furry.y<0||this.furry.y>9){clearInterval(this.idSetInterval);var t=document.querySelector("#over");t.classList.remove("invisible"),t.querySelector("h1 span").textContent=this.score}},t.exports=n},function(t,r){t.exports=function(){this.x=Math.floor(10*Math.random()),this.y=Math.floor(10*Math.random())}},function(t,r){t.exports=function(){this.x=0,this.y=0,this.direction="right"}}])}]);