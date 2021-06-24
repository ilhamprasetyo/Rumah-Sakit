import React from 'react'
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

import CreateReview from './components/CreateMessage';
import ViewMessage from './components/ViewMessage';
import EditReview from './components/EditReview';
import Navbar from './components/Navbar';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

export default function BasicExample() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>        
          <Route exact path="/review">            
            <ViewMessage />
          </Route>
          <Route path="/create">            
            <CreateReview />
          </Route>
          <Route path="/edit/:id" component={EditReview}/>                                  
          <Route exact path="/">            
            <Header />
            <Home />
            <Footer />
          </Route>
          <Route path="/about">            
            <About />
            <Footer />
          </Route>
          <Route path="/contact">            
            <Contact />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Header() {
  return (

    <div className="Header">
      <section id="header" class="">
        <div class="container-fluid">
          <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="" data-slide-to="0" class="active"></li>
              <li data-target="" data-slide-to="1"></li>
              <li data-target="" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="image-slider">
                </div>
                <div class="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>
              <div class="carousel-item">
                <div class="image-slider">
                </div>
                <div class="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div class="carousel-item">
                <div class="image-slider">
                </div>
                <div class="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
            </a>
          </div>

          <div class="jumbotron">
            <h1 class="display-4">Sehat Waras Hospital</h1>
            <p class="lead"></p>
            <hr class="my-4"></hr>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

        </div>
      </section>
    </div>
  );
}

function Home() {
  return (
    <div className="Body">
    <ScrollToTopOnMount />
      <div class="container-fluid">
        <section id="procedure">
          <div class="title text-center">
            <h3><strong>Prosedur</strong> Membuat Jadwal Periksa</h3>
            <hr class="title-hr"></hr>
          </div>
          <div class="row text-center">
            <div class="col-lg-3 col-md-6 col-sm-6 m-auto col-content">
              <label>1. Login di Website</label>
              <div class="image-procedure"></div>
            </div>
            <div class="col col-content">
              <label>2. Buat Jadwal Periksa</label>
              <div class="image-procedure"></div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 m-auto col-content">
              <label>3. Tunggu Konfirmasi</label>
              <div class="image-procedure"></div>
            </div>
            <div class="col col-content">
              <label>4. Datang ke Rumah Sakit</label>
              <div class="image-procedure"></div>
            </div>
          </div>
        </section>

        <section id="keunggulan">
          <div class="title text-center">
            <h3><strong>Keunggulan</strong> Rumah Sakit Sehat Waras</h3>
            <hr class="title-hr"></hr>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-12 col-md-6 col-sm-12 m-auto col-content">
                <div class="keunggulan-image"></div>
                <h3>Keunggulan 1</h3>
                <hr></hr>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div class="col col-content">
                <div class="keunggulan-image"></div>
                <h3>Keunggulan 2</h3>
                <hr></hr>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-md-6 col-sm-12 m-auto col-content">
                <div class="keunggulan-image"></div>
                <h3>Keunggulan 3</h3>
                <hr></hr>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div class="col col-content">
                <div class="keunggulan-image"></div>
                <h3>Keunggulan 4</h3>
                <hr></hr>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-md-6 col-sm-12 m-auto col-content">
                <div class="keunggulan-image"></div>
                <h3>Keunggulan 5</h3>
                <hr></hr>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div class="col col-content">
                <div class="keunggulan-image"></div>
                <h3>Keunggulan 6</h3>
                <hr></hr>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="pelayanan">
          <div class="title text-center">
            <h3><strong>Pelayanan</strong> Kami</h3>
            <hr class="title-hr"></hr>
          </div>

          <div class="container">
            <div class="row col-content">
              <div class="col-md-6 col-sm-12 m-auto">
                <div class="pelayanan-image"></div>
              </div>
              <div class="col">
                <h3>Pelayanan Ibu dan Anak</h3>
                <hr></hr>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>

            <div class="row col-content">
              <div class="col-md-6 col-sm-12 m-auto">
                <div class="pelayanan-image"></div>
              </div>
              <div class="col">
                <h3>Pelayanan Melahirkan</h3>
                <hr></hr>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>

            <div class="row col-content">
              <div class="col-md-6 col-sm-12 m-auto">
                <div class="pelayanan-image"></div>
              </div>
              <div class="col">
                <h3>Pelayanan UGD dan IGD</h3>
                <hr></hr>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>

            <div class="row col-content">
              <div class="col-md-6 col-sm-12 m-auto">
                <div class="pelayanan-image"></div>
              </div>
              <div class="col">
                <h3>Pelayanan Vaksin</h3>
                <hr></hr>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>

            <div class="row col-content">
              <div class="col-md-6 col-sm-12 m-auto">
                <div class="pelayanan-image"></div>
              </div>
              <div class="col">
                <h3>Pelayanan Imunisasi</h3>
                <hr></hr>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="About">
    <ScrollToTopOnMount />
      <section id="about">
        <div class="container">
          <div class="title text-center">
            <h3>Tentang Kami</h3>
            <hr class="title-hr"></hr>
          </div>
          <div class="row mb-3">
            <div class="col-lg-6 col-md-10 col-sm-12 m-auto">
              <div class="about-image">
              </div>
            </div>
            <div class="col">
              <div class="">
                <h5>Sehat Waras Hospital</h5>
                <hr />
              </div>
              <div class="">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          </div>
          <div class="mb-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida dictum. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Lacus vestibulum sed arcu non odio euismod lacinia at. Dignissim suspendisse in est ante in nibh mauris. Scelerisque fermentum dui faucibus in ornare. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Pellentesque eu tincidunt tortor aliquam nulla. Maecenas ultricies mi eget mauris pharetra et ultrices neque. Quam nulla porttitor massa id neque aliquam. Sapien et ligula ullamcorper malesuada proin libero nunc consequat. Libero volutpat sed cras ornare arcu dui vivamus arcu felis. Mi bibendum neque egestas congue quisque egestas diam in. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Enim lobortis scelerisque fermentum dui faucibus in. Nibh mauris cursus mattis molestie a iaculis at erat. Quis risus sed vulputate odio. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien.
            </p>
          </div>

          <div>
            <div class="text-center">
              <h5>Sehat Waras Hospital Jakarta</h5>
              <hr class="title-hr" />
            </div>
            <div class="big-image-about mb-3">
            </div>
            <p>
              Tortor consequat id porta nibh venenatis cras. In nulla posuere sollicitudin aliquam. Suspendisse in est ante in nibh mauris cursus mattis. Orci nulla pellentesque dignissim enim sit amet. Purus sit amet luctus venenatis lectus magna fringilla urna porttitor. Id interdum velit laoreet id donec ultrices tincidunt. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Imperdiet sed euismod nisi porta. Rhoncus urna neque viverra justo. Phasellus egestas tellus rutrum tellus pellentesque eu. Ut etiam sit amet nisl purus in mollis. Pharetra convallis posuere morbi leo urna.
            </p>
            <div class="locations">

              <div class="row row-content">
                <div class="col-md-6 col-sm-12 m-auto col-content">
                  <div class="about-small-image"></div>
                  <h5>Sehat Waras Hospital <strong>Bogor</strong></h5>
                  <hr />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div class="col col-content">
                  <div class="about-small-image">
                  </div>
                  <div>
                    <h5>Sehat Waras Hospital <strong>Depok</strong></h5>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </div>
              </div>

              <div class="row row-content">
                <div class="col-md-6 col-sm-12 m-auto col-content">
                  <div class="about-small-image">
                  </div>
                  <div>
                    <h5>Sehat Waras Hospital <strong>Tangerang</strong></h5>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </div>
                <div class="col col-content">
                  <div class="about-small-image">
                  </div>
                  <div>
                    <h5>Sehat Waras Hospital <strong>Bekasi</strong></h5>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </div>
              </div>

            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl purus in mollis nunc sed id semper. Id consectetur purus ut faucibus. Dictum varius duis at consectetur lorem donec massa. Tellus at urna condimentum mattis pellentesque id nibh tortor id. Bibendum est ultricies integer quis auctor elit sed vulputate. Egestas maecenas pharetra convallis posuere morbi leo urna molestie. Nullam eget felis eget nunc. Orci sagittis eu volutpat odio facilisis. Placerat vestibulum lectus mauris ultrices eros in cursus. Ac felis donec et odio pellentesque diam volutpat commodo sed. Mi quis hendrerit dolor magna eget. Sit amet est placerat in egestas erat imperdiet sed euismod. Orci eu lobortis elementum nibh tellus molestie. Nisi quis eleifend quam adipiscing vitae proin. Neque convallis a cras semper auctor neque vitae. Phasellus egestas tellus rutrum tellus pellentesque eu. Curabitur vitae nunc sed   velit dignissim sodales ut eu sem. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Pulvinar sapien et ligula ullamcorper.
              </p>
              <p>
                Nisl purus in mollis nunc. Dictum non consectetur a erat nam at lectus. Pretium nibh ipsum consequat nisl. Tortor vitae purus faucibus ornare suspendisse. Placerat duis ultricies lacus sed turpis tincidunt id. Dictumst vestibulum rhoncus est pellentesque elit. Nam aliquam sem et tortor consequat id porta nibh venenatis. Malesuada nunc vel risus commodo viverra maecenas accumsan. Pellentesque dignissim enim sit amet venenatis urna cursus eget nunc. Luctus accumsan tortor posuere ac ut. Mattis    nunc sed blandit libero. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Luctus accumsan tortor posuere ac ut. Quis imperdiet massa tincidunt nunc pulvinar.
              </p>
            </div>
            <div class="about-video">
              <div class="text-center">
                <h5>Video Profile Kami</h5>
                <hr class="title-hr" />
              </div>
              <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/K4DyBUG242c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Contact() {
  return (
    <div className="Contact">
      <ScrollToTopOnMount />
      <section id="contact">
        <div class="title text-center">
          <h3>Hubungi Kami</h3>
          <hr class="title-hr"></hr>
        </div>
        <div class="container">
          <div class="table-responsive text-nowrap">
            <table class="table">
              <thead>
                <tr>
                  <td>No.</td>
                  <td>Lokasi</td>
                  <td>Alamat</td>
                  <td>Nomor Telepon</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Jakarta</td>
                  <td>Nunc sed blandit libero volutpat sed cras ornare arcu dui</td>
                  <td>081212345678</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Bogor</td>
                  <td>Nunc sed blandit libero volutpat sed cras ornare arcu dui</td>
                  <td>081212345678</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Depok</td>
                  <td>Nunc sed blandit libero volutpat sed cras ornare arcu dui</td>
                  <td>081212345678</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Tangerang</td>
                  <td>Nunc sed blandit libero volutpat sed cras ornare arcu dui</td>
                  <td>081212345678</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Bekasi</td>
                  <td>Nunc sed blandit libero volutpat sed cras ornare arcu dui</td>
                  <td>081212345678</td>
                </tr>
              </tbody>
            </table>
          </div>
          <form>
            <div class="title text-center">
              <h3>Kirim Pesan</h3>
              <hr class="title-hr"></hr>
            </div>
            <div class="row">
              <div class="col">
                <div class="form-group">
                  <label>Nama</label>
                  <input type="text" class="form-control" name="nama" required />
                </div>
                <div class="form-group">
                  <label>Nomor Telepon</label>
                  <input type="text" class="form-control" name="nomor_telepon" required />
                </div>
              </div>
              <div class="col">
                <div class="form-group">
                  <label>Email</label>
                  <input type="text" class="form-control" name="email" required />
                </div>
                <div class="form-group">
                  <label>Lokasi</label>
                  <select class="form-control" name="lokasi">
                    <option value="Jakarta">Jakarta</option>
                    <option value="Bogor">Bogor</option>
                    <option value="Depok">Depok</option>
                    <option value="Tangerang">Tangerang</option>
                    <option value="Bekasi">Bekasi</option>
                  </select>
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <label>Pesan</label>
                  <textarea class="form-control" rows="3"></textarea>
                </div>
              </div>
            </div>
            <button class="btn btn-success" type="submit">Kirim</button>
          </form>
        </div>
      </section>

    </div>
  );
}

function Footer() {
  return (
    <div className="Footer">

      <section id="footer">
          <div class="">
            <div class="bg-light">
              <div class="title text-center p-3">
                <h1 class="display-4">Sehat Waras</h1>
                <h1>Hospital</h1>
                <hr class="title-hr"></hr>
              </div>
              <div class="p-3 my-auto text-center">
                Copyright Ilham Prasetyo
              </div>
            </div>
          </div>


      </section>
    </div>
  );
}