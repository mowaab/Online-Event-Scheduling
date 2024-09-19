import React from 'react';
function App() {
  return (
    <div>
      <div>
        <h1 className="first">Welcome To Evently</h1>
        <h2 className="second">Create an Evently account!</h2>
      </div>
      <div>
        <form action="/submit" method="post">
          <label htmlFor="name">Fullname:</label>
          <br />
          <input type="text" id="name" name="name" />
          <br />
          <br />

          <label htmlFor="password">Password:</label>
          <br />
          <input type="password" id="password" name="password" />
          <br />
          <br />

          <label htmlFor="email">Email:</label>
          <br />
          <input type="email" id="email" name="email" />
          <br />
          <br />

          <label htmlFor="tel">Telephone:</label>
          <br />
          <input type="tel" id="tel" name="tel" />
          <br />
          <br />

          <label htmlFor="color">Favorite Color:</label>
          <input type="color" id="color" name="color" />
          <br />
          <br />

          <label htmlFor="date">Date Of Birth:</label>
          <input type="date" id="date" name="date" />
          <br />
          <br />

          <p>Gender:</p>
          <input type="radio" id="male" name="gender" value="male" />
          <label htmlFor="male">Male</label>
          <br />
          <input type="radio" id="female" name="gender" value="female" />
          <label htmlFor="female">Female</label>
          <br />
          <br />

          <label htmlFor="checkbox">I agree:</label>
          <input type="checkbox" id="checkbox" name="checkbox" />
          <br />
          <br />

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default App;
