import React from 'react'

export default function Dashboard() {
  return (
    <div>
    <div className="dash-user container mt-5">
        <div className="row">
            <div className="col-lg-4">
                <div className="card p-2 rounded-pill shadow" style={{backgroundColor:"#88c8bc"}}>
                    <div className="card-body">
                    <i  style={{fontSize:"100px", textAlign:"center"}} className="fa-solid fa-users"></i>
                    <hr />
                    </div>
                    <div className="card-text">
                        <button className='btn btn-primary'>Users</button>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
            <div className="card  p-2 rounded-pill shadow" style={{backgroundColor:"#88c8bc"}}>
                    <div className="card-body">
                    <i  style={{fontSize:"100px", textAlign:"center"}} className="fa-solid fa-bag-shopping"></i>
                    <hr />
                    </div>
                    <div className="card-text">
                        <button className='btn btn-primary'>Orders</button>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
            <div className="card p-2 rounded-pill shadow" style={{backgroundColor:"#88c8bc"}}>
                    <div className="card-body">
                    <i style={{fontSize:"100px", textAlign:"center"}} className="fa-brands fa-first-order-alt"></i>
                    <hr />
                    </div>
                    <div className="card-text">
                        <button className='btn btn-primary'>Reports</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
