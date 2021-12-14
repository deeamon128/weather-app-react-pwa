import React, {useState, useEffect} from 'react';

const api = {
  key: "6159c5f09c63f65e38e8bcbb9084c619",
  base:  "https://api.openweathermap.org/data/2.5/"
}

function App() {

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let month = months[d.getMonth()];
    let date = d.getDate();
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }


  return (
    <div className='app'>
      <main>
        <div className='search-box'>
          <input 
            type="text"
            className="search-bar"
            placeholder="Search"
          />
        </div>
        <div className='location-box'>
          <div className='location'>London, England</div>
          <div className='date'>{dateBuilder((new Date()))}</div>
        </div>
        <div className='weather-box'>
          <div className='temp'>
            9°C
          </div>
          <div className='descr'>
            Freeze
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
