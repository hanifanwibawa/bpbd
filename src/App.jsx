import { Button, Card, Col, Container, Nav, Row, Tab, Tabs } from 'react-bootstrap';
import Navigation from './components/Navigation';
import Slider from './components/Slider';
import ButtonCustom from './components/ButtonCustom';

function App() {

    return (
        <>
            <Navigation />
            <Slider />
            <section className='py-5 bg-secondary'>
                <Container>
                    <h3 className='text-center text-white fw-bold mb-5'>DATA BENCANA SUMBAR</h3>
                    <div className="row justify-content-center text-center text-white" style={{ gap: '5.5rem' }}>
                        <div className="col-12 col-sm-auto">
                            <h1 className='fw-bold'>-</h1>
                            <p>Bencana Alam</p>
                        </div>
                        <div className="col-12 col-sm-auto">
                            <h1 className='fw-bold'>-</h1>
                            <p>Meninggal Dunia</p>
                        </div>
                        <div className="col-12 col-sm-auto">
                            <h1 className='fw-bold'>-</h1>
                            <p>Hilang</p>
                        </div>
                        <div className="col-12 col-sm-auto">
                            <h1 className='fw-bold'>-</h1>
                            <p>Luka - luka</p>
                        </div>
                        <div className="col-12 col-sm-auto">
                            <h1 className='fw-bold'>-</h1>
                            <p>Mengungsi dan Menderita</p>
                        </div>
                    </div>
                </Container>
            </section>
            <section className='py-5 bg-primary'>
                <Container>
                    <h2 className='text-center text-white fw-bold mb-5'>BERITA TERBARU</h2>
                    <div className="row g-2">
                        <div className="col-md-3">
                            <Card className='bg-primary shadow text-white' style={{ width: '17rem' }}>
                                <Card.Img variant="top" src="/berita1.jpg" style={{ width: '100%', height: '250px' }} />
                                <Card.Body className='px-0'>
                                    <Card.Title className='fw-normal'>Profil Bencana Sumetera B</Card.Title>
                                    <Card.Text style={{ fontSize: '13px', lineHeight: '1.8rem' }}>
                                        27 November 2023 11:41:37 WIB
                                        <br />
                                        Oleh: Rudy Rinaldy(Kepala Pelaksana BPBD Prov.
                                    </Card.Text>
                                <ButtonCustom label={'SELENGKAPNYA'}/>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3">
                            <Card className='bg-primary shadow text-white' style={{ width: '17rem' }}>
                                <Card.Img variant="top" src="/berita2.jpg" style={{ width: '100%', height: '250px' }} />
                                <Card.Body className='px-0'>
                                    <Card.Title className='fw-normal'>Sumbar Jemput Dukungan Pe</Card.Title>
                                    <Card.Text style={{ fontSize: '13px', lineHeight: '1.8rem' }}>
                                    29 Juli 2023 19:14:42 WIB
                                        <br />
                                        Padang - Pemerintah Provinsi Sumatera.
                                    </Card.Text>
                                <ButtonCustom label={'SELENGKAPNYA'}/>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3">
                            <Card className='bg-primary shadow text-white' style={{ width: '17rem' }}>
                                <Card.Img variant="top" src="/berita3.jpg" style={{ width: '100%', height: '250px' }} />
                                <Card.Body className='px-0'>
                                    <Card.Title className='fw-normal'>Dharma Wanita Harus Ikut </Card.Title>
                                    <Card.Text style={{ fontSize: '13px', lineHeight: '1.8rem' }}>
                                    29 Juli 2023 19:09:40 WIB
                                        <br />
                                        Padang - Semua pengurus atau anggota Dharma W.
                                    </Card.Text>
                                <ButtonCustom label={'SELENGKAPNYA'}/>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3">
                            <Card className='bg-primary shadow text-white' style={{ width: '17rem' }}>
                                <Card.Img variant="top" src="/berita4.jpg" style={{ width: '100%', height: '250px' }} />
                                <Card.Body className='px-0'>
                                    <Card.Title className='fw-normal'>Diguyur Hujan, 7 Daerah S</Card.Title>
                                    <Card.Text style={{ fontSize: '13px', lineHeight: '1.8rem' }}>
                                    29 Juli 2023 18:59:08 WIB
                                    <br />
Padang – Berdasarkan data yang dihimpun.
                                        </Card.Text>
                                <ButtonCustom label={'SELENGKAPNYA'}/>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </Container>
            </section>
            <section className='py-5 bg-secondary'>
                <Container>
                    <h2 className='text-center text-white fw-bold mb-2'>GALERI FOTO</h2>
                    <div className="row g-2 mb-3">
                        <div className="col-md-3">
                            <Card className='shadow border-0' style={{ width: '17rem' }}>
                                <Card.Img variant="top" src="/galeri1.jpg" style={{ width: '100%', height: '200px' }} />
                            </Card>
                        </div>
                        <div className="col-md-3">
                            <Card className='shadow border-0' style={{ width: '17rem' }}>
                                <Card.Img variant="top" src="/galeri2.jpg" style={{ width: '100%', height: '200px' }} />
                            </Card>
                        </div>
                        <div className="col-md-3">
                            <Card className='shadow border-0' style={{ width: '17rem' }}>
                                <Card.Img variant="top" src="/galeri3.jpg" style={{ width: '100%', height: '200px' }} />
                            </Card>
                        </div>
                        <div className="col-md-3">
                            <Card className='shadow border-0' style={{ width: '17rem' }}>
                                <Card.Img variant="top" src="/galeri4.jpg" style={{ width: '100%', height: '200px' }} />
                            </Card>
                        </div>
                    </div>
                    <ButtonCustom label={'SELENGKAPNYA'}/>
                </Container>
            </section>
            <section className='py-5 bg-primary'>
                <Container>
                    <div className="row">
                        <div className="col-lg-9 col-md-12">
                            <h4 className='text-white fw-bold'>VIDEO TERBARU</h4>
                            <hr className=' mb-5' />
                            <div class="ratio ratio-16x9" style={{ height: '420px' }}>
                                <iframe src="https://www.youtube.com/embed/4t11moVY64Q?si=oh0DgQojYfkyFES0" title="YouTube video" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <h4 className='text-white fw-bold'>VIDEO</h4>
                            <hr className=' mb-5' />
                            <div className="mb-3">
                                <div class="ratio ratio-16x9" style={{ height: '120px' }}>
                                    <iframe src="https://www.youtube.com/embed/4t11moVY64Q" title="YouTube video" allowfullscreen></iframe>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div class="ratio ratio-16x9" style={{ height: '120px' }}>
                                    <iframe src="https://www.youtube.com/embed/AbvkVpBxWKM" title="YouTube video" allowfullscreen></iframe>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div class="ratio ratio-16x9" style={{ height: '120px' }}>
                                    <iframe src="https://www.youtube.com/embed/x9f6_yVxdhQ" title="YouTube video" allowfullscreen></iframe>
                                </div>
                            </div>
                            <ButtonCustom label={'VIDEO SELENGKAPNYA'}/>
                        </div>
                    </div>
                </Container>
            </section>
            <section className='py-5 bg-secondary'>
                <Container>
                    <h2 className='text-center text-white fw-bold mb-4'>LINK TERKAIT</h2>
                    <div className="row g-4">
                        <div className="col-md-3">
                            <Card className='shadow'>
                                <Card.Img variant="top" src="/sumbarprov.png" style={{ width: '100%', height: '90px' }} />
                                <Card.Body className='pb-0 pt-3'>
                                    <Card.Text className='fw-bold text-center'>SUMBARPROV</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3">
                            <Card className='shadow'>
                                <Card.Img variant="top" src="/bnbp.jpg" style={{ width: '100%', height: '90px' }} />
                                <Card.Body className='pb-0 pt-3'>
                                    <Card.Text className='fw-bold text-center'>BNBP TV</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3">
                            <Card className='shadow'>
                                <Card.Img variant="top" src="/ppid.png" style={{ width: '100%', height: '90px' }} />
                                <Card.Body className='pb-0 pt-3'>
                                    <Card.Text className='fw-bold text-center'>PPID</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3">
                            <Card className='shadow'>
                                <Card.Img variant="top" src="/bnvp2.jpg" style={{ width: '100%', height: '90px' }} />
                                <Card.Body className='pb-0 pt-3'>
                                    <Card.Text className='fw-bold text-center'>BNBP</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </Container>
            </section>

            <section className='py-5 bg-primary'>
                <Container>
                    <h2 className='text-center text-white fw-bold mb-2'>PUBLIKASI</h2>
                    <div className="row g-0 mb-4">
                        <div className="col-md-4">
                        <button className='btn btn-secondary fw-bold text-white w-100 rounded-0'>BUKU</button>
                        </div>
                        <div className="col-md-4">
                        <button className='btn btn-primary fw-bold text-white w-100 rounded-0' style={{ backgroundColor: '#2b72bf', borderColor: '#2b72bf' }}>MAJALAH</button>
                        </div>
                        <div className="col-md-4">
                        <button className='btn btn-secondary fw-bold text-white w-100 rounded-0'>JURNAL</button>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-3">
                            <Card className='bg-primary shadow text-white'>
                            <Card.Img variant="top" src="/publikasi1.jpeg" style={{ width: '100%', height: '280px' }} />
                                <Card.Body className='p-0'>
                                    <Card.Title className='fw-normal'>Manual Book Aplikasi SILARIS (Sistem Informasi Pel</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3">
                            <Card className='bg-primary shadow text-white'>
                            <Card.Img variant="top" src="/publikasi2.jpeg" style={{ width: '100%', height: '280px' }} />
                                <Card.Body className='p-0'>
                                    <Card.Title className='fw-normal'>contoh 555</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3">
                            <Card className='bg-primary shadow text-white'>
                            <Card.Img variant="top" src="/publikasi2.jpeg" style={{ width: '100%', height: '280px' }} />
                                <Card.Body className='p-0'>
                                    <Card.Title className='fw-normal'>contoh 666</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3">
                            <Card className='bg-primary shadow text-white'>
                                <Card.Img variant="top" src="/publikasi3.jpeg" style={{ width: '100%', height: '280px' }} />
                                <Card.Body className='p-0'>
                                    <Card.Title className='fw-normal'>contoh</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </Container>
            </section>
            <section className='py-5 bg-secondary'>
                <Container>
                    <h2 className='text-center text-white fw-bold mb-4'>INFOGRAFIS</h2>
                    <ButtonCustom label={'INFOGRAFIS SELENGKAPNYA'}/>
                </Container>
            </section>

            <section className='py-5 bg-primary'>
                <Container>
                    <h2 className='text-center text-white fw-bold mb-4'>PETA KEBENCANAAN SUMATERA BARAT </h2>
                    <img src="/peta.png" className='w-100' alt="" />
                </Container>
            </section>
            <footer>
                <div className="footer-top bg-info">
                    <Container>
                        <div className="row py-4 align-items-center text-white">
                            <div className="col-md-6">
                                <h4 className="text-center text-md-start mb-md-0 mb-4" style={{ fontWeight: '300', fontSize: '1.5rem' }}>MEDIA SOSIAL</h4>
                            </div>
                            <div class="col-md-6 text-center text-md-end">
                                <a class="p-2 m-2 fa-lg fb-ic ml-0">
                                    <i class="fab fa-facebook-f text-white me-lg-4"> </i>
                                </a>

                                <a class="p-2 m-2 fa-lg tw-ic">
                                    <i class="fab fa-twitter text-white me-lg-4"> </i>
                                </a>

                                <a class="p-2 m-2 fa-lg gplus-ic">
                                    <i class="fab fa-google-plus-g text-white me-lg-4"> </i>
                                </a>
                                <a class="p-2 m-2 fa-lg li-ic">
                                    <i class="fab fa-linkedin-in text-white me-lg-4"> </i>
                                </a>
                                <a class="p-2 m-2 fa-lg ins-ic">
                                    <i class="fab fa-instagram text-white me-lg-4"> </i>
                                </a>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className="footer-middle pt-5 pb-4">
                    <Container>
                        <div className="row justify-content-between text-center text-md-start text-white">
                            <div className="col-md-3 col-lg-4 mb-5">
                                <h6 className='fw-bold' style={{ marginBottom: '.5rem', letterSpacing: '1px' }}>BPBD Provinsi Sumatera Barat</h6>
                                <hr className='pink accent-2 mb-4 mt-0 d-inline-block mx-auto' style={{ width: '60px' }} />
                                <p><i class="fas fa-envelope me-3"></i> Email : bpbd@sumbarprov.go.id</p>
                                <p><i class="fas fa-phone me-3"></i> Telp : (0751) 890720 - (Pusdalops) +62 751 713943</p>
                                <p><i class="fas fa-map me-3"></i> Alamat : Jl. Jend. Sudirman No. 47, Padang Pasir, Kec. Padang Barat., Kota Padang, Sumatera Barat 25129</p>
                            </div>
                            <div className="col-md-3 mx-auto col-lg-2 mb-5">
                                <h6 className='fw-bold' style={{ marginBottom: '.5rem', letterSpacing: '1px' }}>Useful links</h6>
                                <hr className='pink accent-2 mb-4 mt-0 d-inline-block mx-auto' style={{ width: '60px' }} />
                                <p>
                                    <a className='text-white text-decoration-none' href="">Sumbarprov</a>
                                </p>
                                <p>
                                    <a className='text-white text-decoration-none' href="">Sumbarprov</a>
                                </p>
                                <p>
                                    <a className='text-white text-decoration-none' href="">Sumbarprov</a>
                                </p>
                            </div>
                            <div className="col-md-3 col-lg-3">
                                <h6 className='fw-bold' style={{ marginBottom: '.5rem', letterSpacing: '1px' }}>Stats</h6>
                                <hr className='pink accent-2 mb-4 mt-0 d-inline-block mx-auto' style={{ width: '60px' }} />
                                <p>
                                    <i class="fas fa-home me-3"></i> 12 Online</p>
                                <p>
                                    <i class="fas fa-envelope me-3"></i> 245,147 Hits</p>
                                <p>
                                    <i class="fas fa-phone me-3"></i> 0 Pengunjung Hari Ini</p>
                                <p>
                                    <i class="fas fa-print me-3"></i> Telp : (0751) 31221 </p>
                            </div>
                        </div>
                    </Container>
                </div>
                <div class="footer-copyright text-center py-3">
                    <Container>
                        Hak Cipta ©2020 - 2024  Team IT Kominfo Prov. Sumbar
                    </Container>
                </div>
            </footer>
        </>
    )
}

export default App
