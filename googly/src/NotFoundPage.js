import React from "react";

export const NotFoundPage = () => {
  const style = {
    // backgroundColor: "black",
    // color: "red",
    // backgroundImage: 'radial-gradient(#11581E, #041607), url("https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif")',
  };
  return (
    <div className="error-body">
      {/* <div className="errorbody" style={style}></div> */}
      <div className="noise"></div>
      <div className="overlay"></div>
      <div className="terminal">
        <h1>Error <span className="errorcode">404</span></h1>
        <p className="output">The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
        <p className="output">Please try to <a href="#1">go back</a> or <a href="./">return to the homepage</a>.</p>
        <p className="output">Good luck.</p>
      </div>
    </div>
  )
}



  // const style = {
  //   backgroundImage: 'radial-gradient(#11581E, #041607), url("https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif")',
  // };
//   <div class ="container"><div class = "centered">
//     <h1>404</h1>
//   </div>
//   <div class ="subheader">
//     <p>OOPS! PAGE NOT FOUND.</p>
//   </div>
// </div>

// <div class="container">
//     <div class="row">
//         <div class="xs-12 md-6 mx-auto">
//                 <div class="number">404</div>
//                 <div class="text">Page not found</div>
//                 <div class="text">This may not mean anything.</div>
//                 <div class="text">I'm probably working on something that has blown up.</div>
//             </div>
//         </div>
//     </div>
// </div> 
