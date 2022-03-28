import { useState } from 'react';
import { CSVLink } from 'react-csv';
import { LineChart, Line, BarChart, Tooltip, XAxis, YAxis, Legend, CartesianGrid, Bar, ResponsiveContainer } from 'recharts';
import "./index.css";

const App = () => {

  const data = [
    {
      country:"China", population:"1448471"
    },
    {
      country:"India", population:"1406631"
    },
    {
      country:"United States", population:"334805"
    },
    {
      country:"Indonesia", population:"279134"
    },
    {
      country:"Brazil", population:"215353"
    },
    {
      country:"Pakistan", population:"229488"
    },
    {
      country:"Nigeria", population:"216746"
    },
    {
      country:"Bangladesh", population:"167885"
    },
    {
      country:"Russia", population:"145805"
    },
    {
      country:"Mexico", population:"131562"
    }
  ];
  
  const headers = [
    {
      label:"Country", key:"country"
    },
    {
      label:"Population", key:"population"
    }
  ];
  
  const csvLink = {
    headers: headers,
    data: data,
    filename:"data.csv"
  }

    const [viewGraph, setviewGraph] = useState(false);

    return (
    
    <div className='wrapper'>
        <h1>10 Most populated countries in the world</h1>
        <div className='csv'>
            <CSVLink className='link button'{...csvLink}>Download CSV</CSVLink>
        </div>
        <div className='show'>
            <button className='btn button' onClick={() => {
              viewGraph ? setviewGraph(false) : setviewGraph(true)
            }}>Show Data</button>
        </div>
        {
        viewGraph &&     
        <ResponsiveContainer width="100%" height={500}>
            <BarChart
            width={950}
            height={600}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 80,
                bottom: 5,
            }}
            barSize={20}
            >
            <XAxis
                dataKey="country"
                scale="point"
                padding={{ left: 10, right: 10 }}
            />
            <YAxis 
                domain={[0, 1500000]} allowDataOverflow={true}
            />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="population" fill="red" background={{ fill: "#eee" }} />
            </BarChart> 
        </ResponsiveContainer>
        }
        {
        viewGraph &&
        <ResponsiveContainer width="100%" aspect={3}>
            <LineChart 
              width={950} 
              height={600} 
              data={data}
              margin={{ top: 10, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="country" />
              <YAxis 
                domain={[0, 1500000]} allowDataOverflow={true}
              />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="population" stroke="#8884d8" />
            </LineChart>
        </ResponsiveContainer>
        }
    </div>

  )
}

export default App;

