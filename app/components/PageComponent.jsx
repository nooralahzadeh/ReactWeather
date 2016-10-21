var React=require('react');


var PageComponent=React.createClass({

  render:function(){
    return(
    <form>
      <div>
        <h1> Get Weather </h1>
          <input type="text" ref="name"/>
        </div>
        <div>
            <button>Get Weather</button>
          </div>
    </form>
  );
  }
});
module.exports=PageComponent;
