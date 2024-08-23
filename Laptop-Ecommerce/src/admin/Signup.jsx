import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, Bounce, Flip, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signup() {

  let navigate = useNavigate()

  const [name, setName] = useState("")
  const [pass, setPass] = useState("")


  function handleSubmit(e) {
    e.preventDefault()
    if (name === "admin" && pass === "admin") {
      localStorage.setItem("user", name);
      localStorage.setItem("password", pass);

      toast.success("you are logged in", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });

      // submitToast()
      navigate("/admin")
    } else {
      toast.error("Invalid Credentials", {
        autoClose: 100,
        transition: Flip,
      })
    }
  }

  useEffect(() => {
    let credential = localStorage.getItem("user");
    if (credential != null) {
      navigate("/admin")
    }
  }, [])



  return (
   
    <div>
      <div className="container">
        <ToastContainer/>
        <div className="row mt-5">
          <div className="col-lg-1"></div>
          <div className="col-lg-10 border">
            <section class="">
              <div class="container-fluid h-custom">
                <div class="row d-flex justify-content-center align-items-center h-100">
                  <div class=" col-lg-6 ">
                    <img className='w-100' src={require("../assets/images/draw2.webp")}
                      class="img-fluid" alt="Sample image" />
                  </div>
                  <div class=" col-lg-6 mt-4  ">
                    <form>
                      <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                        <p class="lead fw-normal mb-0 me-3">Sign in with</p>
                        <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-floating mx-1">
                          <i class="fab fa-facebook-f"></i>
                        </button>

                        <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-floating mx-1">
                          <i class="fab fa-twitter"></i>
                        </button>

                        <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-floating mx-1">
                          <i class="fab fa-linkedin-in"></i>
                        </button>
                      </div>

                      <div class="divider d-flex align-items-center my-4">
                        <p class="text-center fw-bold mx-3 mb-0">Or</p>
                      </div>

                      {/* <!-- Email input --> */}
                      <div data-mdb-input-init class="form-outline mb-4">
                        <input onChange={(e) => setName(e.target.value)} type="email" id="form3Example3" class="form-control form-control-lg"
                          placeholder="Enter a valid email address" />
                        {/* <label class="form-label" for="form3Example3">Email address</label> */}
                      </div>

                      {/* <!-- Password input --> */}
                      <div data-mdb-input-init class="form-outline mb-3">
                        <input onChange={(e) => setPass(e.target.value)} type="password" id="form3Example4" class="form-control form-control-lg"
                          placeholder="Enter password" />
                        {/* <label class="form-label" for="form3Example4">Password</label> */}
                      </div>

                      <div class="d-flex justify-content-between align-items-center">
                        {/* <!-- Checkbox --> */}
                        <div class="form-check mb-0">
                          <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                          <label class="form-check-label" for="form2Example3">
                            Remember me
                          </label>
                        </div>
                        <a href="#!" class="text-body">Forgot password?</a>
                      </div>

                      <div class="text-center text-lg-start mt-4 pt-2">
                        <button onClick={handleSubmit} type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-lg" style= {{paddingLeft: "2.5rem", paddingRight: "2.5rem"}}
                          >Login</button>
                        <pre class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                          class="link-danger">Register</a></pre>
                      </div>

                    </form>
                  </div>
                </div>
              </div>
             
            </section>
          </div>
          <div className="col-lg-1"></div>
        </div>

      </div>
    </div>
  )

}
