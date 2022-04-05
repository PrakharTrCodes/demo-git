var obj = {
    name: "Michael",
     func: () => {
         var self = this;
         console.log("outer func: " + this.name);
         console.log("outer func: " + self.name);
         const inner = () => {
             console.log("inner func:  " + this.name);
             console.log("inner func:  " + self.name);
         } ;
         inner();
     }
 };
 obj.func();