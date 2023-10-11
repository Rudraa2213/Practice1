import React, { Fragment } from 'react'
import { Bar, BarChart, Legend, XAxis, YAxis, Tooltip, CartesianGrid, ReferenceLine } from 'recharts'
import { Mychartdata } from './Mydetal'


function Flowchart() {
  return (
    <Fragment>
      <div className='container border shadow mt-3 p-3'>
        <div className="row">
          <div className="col-12">
            <h1 className='text-center'>This is Graph</h1>
            <BarChart width={1200} height={500} data={Mychartdata}>
              <XAxis dataKey="name" />
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <ReferenceLine y={0} stroke="#000" />
              <Bar dataKey="maxv" fill="#8884d8" />
              <Bar dataKey="minv" fill="#82ca9d" />
              <Bar dataKey="currentv" fill="#88ca2d" />
            </BarChart>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Flowchart