var React=require('react');
var {Link,IndexLink}=require('react-router');



var Nav =(props)=>{
  return (
    <div>
      <h2>Nav component</h2>
      <IndexLink to="/" activeCalssName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
      <Link to="/about" activeCalssName="active" activeStyle={{fontWeight:'bold'}}>About</Link>
      <Link to="/examples" activeCalssName="active" activeStyle={{fontWeight:'bold'}}>Examples</Link>
    </div>

  );
};
module.exports=Nav;
