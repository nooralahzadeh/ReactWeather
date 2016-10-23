var React=require('react');


var About= (props)=>{
    return(
      <di>
        <h1 className="text-center page-title">About</h1>
        <p>this is a weather app. build on React.
          I have built this for the compelet React web app Dev. course</p>
        <p>
          Here are some of the tools I used:
        </p>
      <ul>
          <li>
            <a href="https://facebook.github.io/react"> React </a> -this was the Java script framework used.

          </li>
          <li>
            <a href="http://openweathermap.org">Open weather map</a>
          </li>
        </ul>
    </di>

    )
};

module.exports=About;
